import React from 'react';
import Overview from '../components/oldFiles/ContextField';

import '../components/home.css'


function Header() {
    return (
      <div>
        <p>Welcome to our website. You can download some sample data <a href="http://srv11.ikap.biba.uni-bremen.de:3100/influx?range=1&rangeUnit=h&field=temperature&sensor_id=TLM0100&aggregateWindow=15&aggregateWindowUnit=m">here</a>.</p>
        <p>The sample data's parameters can be found <a href="http://srv11.ikap.biba.uni-bremen.de:3100/test?range=1&rangeUnit=h&field=temperature&sensor_id=TLM0100&aggregateWindow=15&aggregateWindowUnit=m">here.</a></p>
        <img src="images/Forschungs-WEA2_IMG_2276_Foto_Dennis Kruse-Deutsche WindGuard.JPG" alt="" id="WindGuard" width="300" />
        <p>Image: Dennis Kruse/Deutsche WindGuard</p>
      </div>
    )
  }
  
  export default function Home () {
    return (
        <div className='test'>
          
            {Header()}
          <div id='one'>
            {Overview()}
          </div>
            

        </ div>
      )
  }