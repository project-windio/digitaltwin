import React from 'react'

// Import von MaterialUI Komponenten
import { TreeView, TreeItem } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Importieren der Devices
import data from './objects2'; 



// https://stackoverflow.com/questions/61302491/react-js-search-filter-in-treeview
const getTreeItemsFromData = ({ onSelectedChange, treeItems }) => {

    // Falls im DataTreeView ein TreeItem angeklickt wird, sollen im DataField.js alle darunterliegenden Sensoren angezeigt werden.
    const handleClick = (newSelected) => {
        // Es werden alle Sensoren gesucht und in eine Liste gepushed.
        const findSensors = (obj, result = []) => {
            if (obj.isSensor === true) {
                // Wenn das aktuelle Objekt ein Sensor ist, füge es zum Ergebnisarray hinzu.
                result.push(obj);
            }
            
            if (obj.children && obj.children.length > 0) {
                // Wenn das aktuelle Objekt Unterkomponenten hat, durchsuche diese ebenfalls.
                for (const child of obj.children) {
                    findSensors(child, result);
                }
            }
            
            return result;
        }

        newSelected.sensors_below = findSensors(newSelected)
        onSelectedChange(newSelected);
    }

    if (!treeItems) {
        return null;
    }

    return treeItems.map((treeItemData) => {
        let children = undefined;
        if (treeItemData.children && treeItemData.children.length > 0) {
          children = getTreeItemsFromData({ onSelectedChange, treeItems: treeItemData.children });
        }
        return (
          <TreeItem
            key={treeItemData.id.toString()} 
            nodeId={treeItemData.id.toString()} 
            label={<div onClick={() => handleClick(treeItemData)}>{treeItemData.name}</div>}
          >
            {children}
          </TreeItem>
        );
    });
};

const DataTreeView = ({ onSelectedChange, treeItems }) => {
    return (
        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {getTreeItemsFromData({ onSelectedChange, treeItems} )}
        </TreeView>
    )
}

// Das gesamte ContextField-Komponent, bestehend aus einer Überschrift, einem Infotext, welches Device aktuell ausgewählt ist, sowie der DataTreeView.
export default function ContextField ({ selected, setSelected }) {
    return (
        <div className='context-field'>
            <h1 style={{width: "400px"}}>Kontext</h1>
            <p>Currently selected:<br/>{selected.name}</p>
            <DataTreeView onSelectedChange={setSelected} treeItems={data}/>
        </div>
    )
}