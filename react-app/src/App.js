// Die Main-Homepage vom DataExplorer.

import React from 'react'
import './App.css'
import { useState, useEffect } from 'react';

// Import der React-Komponenten
import Header from './components/Header';
import Footer from './components/Footer';

import ContextField from './components/ContextField2'
import ProductField from './components/ProductField';
import DocumentationField from './components/DocumentationField';
import DataField from './components/DataField';



export default function Test() {
    // Speichern, welches Device momentan ausgewählt ist.
    const [selected, setSelected] = useState({name: ""})
    // Speichern der Authentifizierungscodes von DTCore und DTDocuments
    const [coreAuth, setCoreAuth] = useState();
    const [docAuth, setDocAuth] = useState();
    
    // Authentifizierung von DTCore und DTDocuments
    useEffect(() => {
        fetch('https://core.digitaltwin.brementestturbine.science/api/Authentication/Authenticate', {
            method: 'POST',
            headers: {
                'Accept': "*/*",
                'Content-Type': 'application/json;odata.metadata=minimal;odata.streaming=true'
            },
            body: JSON.stringify({
                userName: process.env.REACT_APP_USERCORE,
                password: process.env.REACT_APP_PASSCORE
            })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    return response.text();
                }
            })
            .then(text => {
                try {
                    setCoreAuth(text)
                } catch (error) {
                    console.error(error);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    useEffect(() => {
        fetch('https://documents.digitaltwin.brementestturbine.science/api/Authentication/Authenticate', {
            method: 'POST',
            headers: {
                'Accept': "*/*",
                'Content-Type': 'application/json;odata.metadata=minimal;odata.streaming=true'
            },
            body: JSON.stringify({
                userName: process.env.REACT_APP_USERDOC,
                password: process.env.REACT_APP_PASSDOC
            })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    return response.text();
                }
            })
            .then(text => {
                try {
                    setDocAuth(text)
                } catch (error) {
                    console.error(error);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    
    return (
      <div>
        <Header />
        <div className='main'>
            
            <ContextField selected={selected} setSelected={setSelected}/>

            <div className='mid-container'>
                <ProductField selected={selected} coreAuth={coreAuth}/>
                <DocumentationField selected={selected} docAuth={docAuth} />
            </div>

            <DataField selected={selected} />
            
        </div>
        <Footer />
      </div>
    )
}


