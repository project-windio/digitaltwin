import React from 'react';
import "./footer.css"


// Der Footer besteht aus zwei Logos, sowie der Copyright-Meldung
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <a href='https://www.uni-bremen.de'>
                    <img src="/images/Uni-Bremen.svg" alt='Logo Uni-Bremen' width={200} />
                </a>
                <a href='https://brementestturbine.science'>
                    <img src="images/WIND IO _ LOGO_CMYK (2).svg" alt='Logo WIND IO' width={200}/>
                </a>
                <a href='https://www.bmwk.de/'>
                    <img src="images/logo_bmwk_farbe_de.svg" alt='Logo Bundesministerium für Wirtschaft und Klimaschutz' width={200} />
                </a>
                <a href='https://www.ptj.de/'>
                    <img src="images/logo_ptj_farbe.svg" alt='Logo Projektträger Jülich' width={200} height={200} />
                </a>
            </div>
        </div>
    )
}