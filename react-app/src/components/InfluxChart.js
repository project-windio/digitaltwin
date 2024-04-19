import React, { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";


const token = process.env.REACT_APP_INFLUXDB_API_KEY;
const org = process.env.REACT_APP_INFLUXDB_ORG;
const url = process.env.REACT_APP_INFLUXDB_URL;


// InfluxChart plotted den aktuell ausgewählten Sensor, mit den aktuell ausgewählten PlotSettings.
export const InfluxChart = ({ selected, plotSettings }) => {

  const [data, setData] = useState([]);
  let query = ""

  useEffect(() => {
    // Zunächst wird die passende InfluxDB-Query erzeugt.
    const today = new Date()
    const yesterday = new Date(Date.now() - 864e5)

    let start = yesterday.toISOString()
    let stop = today.toISOString()
    let aggregateWindow = plotSettings.windowPeriod

    let device = selected.device
    let sensor = selected.sensor

    // Falls ein Start- bzw Stopwert in den PlotSettings vorhanden ist, wird dieser genommen. 
    if (plotSettings.start !== null) {
      start = plotSettings.start["$d"].toISOString()
    }

    if (plotSettings.stop !== null) {
      stop = plotSettings.stop["$d"].toISOString()
    }


    query = `from(bucket: "windio")
    |> range(start: ${start}, stop: ${stop})
    |> filter(fn: (r) => r["device"] == ${device})
    |> filter(fn: (r) => r["_field"] == ${sensor})
    |> aggregateWindow(every: ${aggregateWindow}, fn: mean, createEmpty: false)
    `;

    
    if (selected.device !== undefined && selected.sensor !== undefined) {
      query = `from(bucket: "windio")
        |> range(start: ${start}, stop: ${stop})
        |> filter(fn: (r) => r["device"] == "${device}")
        |> filter(fn: (r) => r["_field"] == "${sensor}")
        |> aggregateWindow(every: ${aggregateWindow}, fn: mean, createEmpty: false)
        `;
    }

    // Ausführen der Query und speichern der Ergebnisse in data.
    let res = [];
    const influxQuery = async () => {
      //create InfluxDB client
      const queryApi = new InfluxDB({ url, token }).getQueryApi(org);
      //make query
      queryApi.queryRows(query, {
        next(row, tableMeta) {
          const o = tableMeta.toObject(row);
          //push rows from query into an array object
          res.push(o);
        },
        complete() {
          let finalData = [];          

          for (let i = 0; i < res.length; i++) {
            let point = {};
            point["value"] = res[i]["_value"].toFixed(3);    // Auf 3 Nachkommastellen gerundet.
            point["time"] = res[i]["_time"];
            finalData.push(point);
          }
          setData(finalData);
        },
        error(error) {}
      });
    };

    influxQuery();
  }, [selected, plotSettings]); 

  return (
    <div className="plot-field">
      <h4>Datenplot</h4>
      <ComposedChart width={400} height={200} data={data}>
        <CartesianGrid vertical={false} />
        <Tooltip />
        <Line
          stroke="black"
          strokeWidth={1}
          dataKey="value"
          dot={false}
        />
        <XAxis hide dataKey="time" />
        <YAxis domain={([dataMin, dataMax]) => {
          const min = Math.floor(dataMin);
          const max = Math.ceil(dataMax);
          return [min, max]
          }
        }/>
      </ComposedChart>
    </div>
  );
};