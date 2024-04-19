import React from 'react'
import './test.css'


import ContextField from '../components/ContextField2'
import ProductField from '../components/ProductField';
import DocumentationField from '../components/DocumentationField';
import DataField from '../components/DataField';


import { useState, useEffect } from 'react';






export default function Test() {
    const [auth, setAuth] = ""
    const [selected, setSelected] = useState({name: ""})

    useEffect(() => {
        fetch('https://core.digitaltwin.brementestturbine.science/api/Authentication/Authenticate', {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json;odata.metadata=minimal;odata.streaming=true'
            },
            body: JSON.stringify({
                userName: "Admin",
                password: ""
            })
        })
        .then(response => response.json())
        .then(data => {
            setAuth(data); // Setzt das Ergebnis in den Zustand 'selected'
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []); 
    
    
    return (
        <div className='main'>

            

            <ContextField selected={selected} setSelected={setSelected}/>

            <div className='mid-container'>
                <ProductField selected={selected}/>
                <DocumentationField selected={selected} />
            </div>

            <DataField selected={selected} />
            
        </div>
    )
}


