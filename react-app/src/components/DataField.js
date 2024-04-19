import React, { useState } from 'react'
import TextField from '@mui/material/TextField'  // Searchbar ContextField

import { TreeView, TreeItem } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { Button } from '@mui/material';
import { InfluxChart } from './InfluxChart';

import dayjs from 'dayjs';





// DataField: Bestehend aus SensorField, PlotField und DownloadField.
export default function DataField({ selected }) {
    // Standard-PlotSettings werden definiert. Startdatum: 01.07.2023, windowPeriod 6h
    const [plotSettings, setPlotSettings] = useState({start: {"$d": new Date("2023-07-01")}, stop: null, windowPeriod: "6h"})

    return (
        <div className='data-field'>
            <h1>Betriebsdaten</h1>
            <p>Currently selected: {selected.name}</p>
            <SensorField selected={selected} />
            <div className='plot-and-download-field'>
                <PlotField selected={selected} plotSettings={plotSettings}/>
                <DownloadField selected={selected} plotSettings={plotSettings} setPlotSettings={setPlotSettings} />
            </div>
            
        </div>
    )
}

// Das PlotField besteht aus einem InfluxChart Objekt, dem das im ContextField aktuell ausgewählte Objekt, sowie die PlotSettings übergeben werden.
const PlotField = ({ selected, plotSettings }) => {
    return (
        <InfluxChart selected={selected} plotSettings={plotSettings}/>  
    )
}

// Das SensorField zeigt in einer TreeView alle Sensoren, die sich unterhalb des ausgewählten Objekts im ContextField befinden, an.
const SensorField = ({ selected }) => {
    if (selected.sensors_below == undefined) {
        selected.sensors_below = []
    }
    return (
        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ flexGrow: 1, maxWidth: 400 }}
        >
            <TreeItem nodeId='2' label="Sensorübersicht">
                {selected.sensors_below.map((item, index) => (
                    <TreeItem disabled={true} nodeId={item.id.toString()} label={item.name} key={index.toString()} />
                ))}
            </TreeItem>
        </TreeView>
    )
}

// Im DownloadField lassen sich die PlotSettings ändern, als auch die sich hinter dem Plot befindenen Daten in CSV-Format runterladen lassen.
const DownloadField = ({ selected, plotSettings, setPlotSettings }) => {

    // Funktion überprüft, ob die Eingabe im Granularität-TextField eine legitime Eingabe ist: Verhindert Crashes beim Plotten.
    function isValidTimeString(input) {
        // Regular expression to match the requirements
        const regex = /^(?:[1-9]|[1-5][0-9]|60)(h|m)$/;
      
        // Use the test method to check if the input string matches the regex
        if(regex.test(input)) {
            updatePlotSettings(null, null, input)
        };
    }

    // Funktion überprüft, ob die Eingaben der Start- und Stop-TextFields legitim sind. So werden Crashes beim Plotten verhindert.
    function isValidTimeStamp(start = null, stop = null) {
        const regex = /^(2022|2023)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(22|23):00:00\.000Z$/;

        try {
            if (start !== null && regex.test(start["$d"].toISOString())) {
                updatePlotSettings(start, null, null)
            }

            if (stop !== null && regex.test(stop["$d"].toISOString())) {
                updatePlotSettings(null, stop, null)
            }
        } catch {
            console.error("Date invalid")
        }

    }
    
    // PlotSettings werden mit neuen Werten überschrieben.
    const updatePlotSettings = (start, stop, windowPeriod) => {
        const updatedPlotSettings = { ...plotSettings };
        
        if (start) {updatedPlotSettings.start = start}
        if (stop) {updatedPlotSettings.stop = stop}
        if (windowPeriod) {updatedPlotSettings.windowPeriod = windowPeriod}

        setPlotSettings(updatedPlotSettings);
    }

    // Erstellt den korrekten Link für das Downloaden der Daten und öffnet die Seite zum Download. 
    const handleButtonClick = () => {
        const start = plotSettings.start["$d"]?.toISOString() || "2023-06-01T00:00:00.000Z";
        const stop = plotSettings.stop?.toISOString() || new Date().toISOString();
        const aggregateWindow = plotSettings.windowPeriod || "1h";
        const device = (selected.device) || ""
        const field = (selected.sensor) || ""
        
        let link = `influx?start=${start}&stop=${stop}&aggregateWindow=${aggregateWindow}`;

        if (device) {
            link += `&device=${encodeURIComponent(device)}`;
        }
        if (field) {
            link += `&field=${encodeURIComponent(field)}`;
        }
        
        if (!device && !field) {
            link += `&all=true`;
        }

        window.open("https://download.digitaltwin.brementestturbine.science/"+link, '_blank')

    }

    return (
        <div className='download-field'>
            <h3>Einstellungen:</h3>
            <h4>Timerange:</h4>
            <div style={{display: "flex"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker sx={{maxWidth: "200px"}} defaultValue={dayjs('2023-07-01')} label={"Start"} onChange={(value) => {
                        isValidTimeStamp(value, null)                        
                    }} />
                    <DatePicker sx={{maxWidth: "200px"}} label={"End"} onChange={(value) => {
                        isValidTimeStamp(null, value)
                    }} />
                </LocalizationProvider>
            </div>
            <div style={{display: "flex"}}>
                <h4>Granularität: </h4>
                <TextField helperText={"Available units: m, h"} defaultValue={"6h"} onChange={(event) => {isValidTimeString(event.target.value)}} sx={{marginRight: "0px", marginLeft: "auto"}} id="standard-basic"  />
            </div>
            
            <Button onClick={handleButtonClick}>Download</Button>
        </div>
    )
}