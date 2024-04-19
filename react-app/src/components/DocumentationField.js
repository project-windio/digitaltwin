import React from "react";

import { TableContainer, Table, TableRow, TableBody } from '@mui/material'   // Tabelle ProductField DocumentationField
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import Button from '@mui/material/Button';   // Downloadbutton DocumentationField DataField
import { TreeView, TreeItem } from '@mui/x-tree-view';   // Overview DocumentationField DataField
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useState, useEffect } from "react";


// Übergeben werden das aktuell ausgewählte Objekt, sowie der Auth-Token
export default function DocumentationField({ selected, docAuth }) {
    const [data, setData] = useState();

    // Falls das aktuell ausgewählte Objekt einen doc-Wert hat, so werden alle die Infos bzgl. aller vorliegenen Dokumente geladen und in data gespeichert.
    useEffect(() => {
        if (selected.doc) {
            let link = `https://documents.digitaltwin.brementestturbine.science/api/odata/AssetAdministrationShell/${selected.doc}/?$expand=Documents`;

            fetch(link, {
                method: 'GET',
                headers: {
                    'Accept': "*/*",
                    'Authorization': `Bearer ${docAuth}`
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok.");
                } else {
                    return response.json();
                }
            })
            .then(data => data["Documents"])
            .then(data => {
                let filteredData = []
                data.forEach(item => {
                    filteredData.push([item["Title"], item["DocumentId"], item["Oid"]])
                })
                setData(filteredData)
            }) 
        } else {
            setData(null)
        }
    }, [selected.doc]);


    // Ein TreeView, der alle verfügbaren Dokumente anzeigt, falls welche vorhanden sind.
    const Selector = ({ data }) => {
        const [selectedDocument, setSelectedDocument] = useState()

        const handleClick = (item) => {
            setSelectedDocument(item)
        }

        if (!data) {
            return (
                <p>No data available. You can add data here: <a href="https://documents.digitaltwin.brementestturbine.science/">DTDocuments</a></p>
            )
        } 
        return (
            <div>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{ flexGrow: 1, maxWidth: 400 }}
                >
                <TreeItem nodeId='1' label="Dokumentenauswahl">
                    {data.map((item, index) => (
                        <TreeItem key={item[1]} nodeId={item[1]} label={<div onClick={() => handleClick(item)}>{item[0]}</div>} />
                    ))}
                </TreeItem>
            </TreeView>
            <DocumentTable selectedDocument={selectedDocument} />
            </div>
        )
    }

    // Falls ein Dokument ausgewählt wurde, werden alle verfügbaren Infos zu dem Dokument in einer Tabelle angezeigt und man kann es downloaden.
    const DocumentTable = ({ selectedDocument }) => {
        const handleDownloadButton = (item) => {
            let link = `https://documents.digitaltwin.brementestturbine.science/IFileUrlService/?objectType=DTDocumentationModule.Module.BusinessObjects.Document&objectKey=${item[2]}&propertyName=File`

            window.open(link, '_blank')
        }

        if (!selectedDocument) {
            return (
                <div>
                    <p>Please select a document.</p>
                    <Button disabled={true}>Download</Button>
                </div>
                
            )
        } else {
            return (
                <div>
                    <TableContainer className='product-table'>
                        <Table size="small" style={{width: "400px"}} >
                            <TableBody>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>{selectedDocument[0]}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Document-ID</TableCell>
                                    <TableCell>{selectedDocument[1]}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button onClick={() => handleDownloadButton(selectedDocument)}>Download</Button>
                </div>
            );
        }
        
    }


    return (
        <div className='documentation-field'>
            <h1>Dokumentation</h1>
            <p>Currently selected: {selected.name}</p>
            <Selector data={data} />
            
        </div>
    )
}