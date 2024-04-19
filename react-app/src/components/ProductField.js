import React, { useState, useEffect } from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material'; // Annahme: Material-UI-Komponenten werden verwendet


// Übergeben werden das aktuell ausgewählte Objekt, sowie der Auth-Token
export default function ProductField({ selected, coreAuth }) {
    const [data, setData] = useState();

    // Falls das aktuell ausgewählte Objekt einen core-Wert hat, so werden alle die Infos in data gespeichert.
    useEffect(() => {
        if (selected.core) {
            let link = `https://core.digitaltwin.brementestturbine.science/api/odata/AssetAdministrationShell/${selected.core}/?$expand=AasCategory,AssetIdentificationAttributes($expand=AasIdentificationAttributeTemplate)`;

            fetch(link, {
                method: 'GET',
                headers: {
                    'Accept': "*/*",
                    'Authorization': `Bearer ${coreAuth}`
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok.");
                } else {
                    return response.json();
                }
            })
            .then(data => data["AssetIdentificationAttributes"])
            .then(data => {
                let filteredData = [];
                data.forEach(item => {
                    if (!item.IsIdentificationAttribute) {
                        filteredData.push([item["AasIdentificationAttributeTemplate"]["Attribute"], item["Value"]]);
                    }
                });
                setData(filteredData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        } else {
            setData(null)
        }
    }, [selected.core]);

    // Falls Daten vorhanden sind, werden diese in einer Tabelle angezeigt.
    const DataTable = ({ data }) => {
        if (!data) {
            return (
                <p>No data available. You can add data here: <a href="https://core.digitaltwin.brementestturbine.science/">DTCore</a></p>
            );
        }
        return (
            <TableContainer className='product-table'>
                <Table size="small"  style={{width: "400px"}} >
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item[0]}</TableCell>
                                <TableCell>{item[1]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    };

    return (
        <div className='product-field'>
            <h1>Produktinformationen</h1>
            <p>Currently selected: {selected.name}</p>
            <DataTable data={data} />
        </div>
    );
}
