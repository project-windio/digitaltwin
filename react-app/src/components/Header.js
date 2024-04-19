import './header.css'
import React from 'react'


// Der Header besteht aus dem Main-Logo, sowie Anker-Objekten zu DTCore, DTDocs und InfluxDB.
export default function Header () {
    return (
        <div className='header'>
            <a href='https://brementestturbine.science'><img src="images/WIND IO _ LOGO_CMYK (2).svg" alt="" id="WINDIO" width={200}/></a>
            <a href='https://core.digitaltwin.brementestturbine.science'><img className='icon' src="images/CORE_Icon.png" />DTCore</a>
            <a href='https://documents.digitaltwin.brementestturbine.science'><img className='icon' src="images/DOCUMENTATION_Icon.png" />DTDocuments</a>
            <a href='https://influxdb.digitaltwin.brementestturbine.science'><img className='icon' src="images/influxdb-icon-252x256-lkngj47t.png" />InfluxDB</a>
        </div>
    )
}