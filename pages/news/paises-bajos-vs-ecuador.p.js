import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Paises Bajos vs Ecuador</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Paises Bajos vs Ecuador"/>
        <meta name="description" content="Trending News about Paises Bajos vs Ecuador" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Paises Bajos vs Ecuador</h1>
            <Image width={800} height={500} src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1125%2Fr1096772_1296x729_16%2D9.jpg" alt="Paises Bajos vs Ecuador"/>
            <h3>Recent News</h3>
            <a href='https://espndeportes.espn.com/futbol/reporte/_/juegoId/633805'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Países Bajos vs. Ecuador - Reporte del Partido - 25 noviembre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1zrMj1CoAn0bh-PzTxXtivJBnj-0UHm4vN1pLScAUN3fvS7zegW5BQ12gSfrhGSK83kFKJADa" alt="Países Bajos vs. Ecuador - Reporte del Partido - 25 noviembre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(EFE) -- Enner Valencia reavivó el sueño ecuatoriano de seguir adelante en el Mundial de Qatar con un gol que le permitió a la Tri rescatar un empate ante&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mediotiempo.com/futbol/copa-mundial/paises-bajos-vs-ecuador-en-vivo-holanda-qatar-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Países Bajos vs Ecuador EN VIVO. Holanda en Qatar 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSMhD5Ina9sXVRyTD8f94Hc_A6JLlxeZ0lX9PwkCRiYizfC1izsECHdpxN3NO3I6diCDMdgQ2Ax" alt="Países Bajos vs Ecuador EN VIVO. Holanda en Qatar 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Países Bajos y Ecuador se miden en la segunda fecha de la Fase de Grupos; ambos tienen un partido ganado en el sector A.</p></div>
            </div>
        </a><a href='https://www.tudn.com/futbol/mundial-qatar-2022/partidos-en-vivo/fase-de-grupos/holanda-vs-ecuador/paises-bajos-vs-ecuador-enner-valencia-empata-record-goles-consecutivos-mundiales'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Países Bajos vs. Ecuador: Enner Valencia empata récord de goles ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQOmxmnynyuR2Sf-XkKDz9sq4ueqHK44xI9B9TnKH5UXIkI_SXo4wealK5qQUcEx-kq25N9Qi2z" alt="Países Bajos vs. Ecuador: Enner Valencia empata récord de goles ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Enner Valencia hizo historia con Ecuador al anotar su tercer gol en el Mundial Qatar 2022 para empatar el récord máximo de goles consecutivos con una&nbsp;...</p></div>
            </div>
        </a><a href='https://es-us.vida-estilo.yahoo.com/pa%C3%ADses-bajos-vs-ecuador-resumen-182335301.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Países Bajos vs. Ecuador: resumen, goles y resultado del partido ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0Fw721LejZeUlohreyBRC0fW-IlkR27rJZzvO-EhQqtPuyAyYrTrlpmpNj5663_oK6vuLkgf9" alt="Países Bajos vs. Ecuador: resumen, goles y resultado del partido ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>El duelo de la segunda fecha del grupo A entre europeos y sudamericanos terminó 1 a 1 y eliminó de la Copa del Mundo al anfitrión, que previamente cayó ante&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/claro-mx/futbol/mundial/2022/11/25/6380cfade2704e09a88b4583.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Países Bajos vs Ecuador: Resumen, resultado y goles del partido de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR_NqroajD2Pk5S05aV_sVZRER5tdlXmL57CnSlMZm7KOl2hEV-rVbMh010DHFIaWyx7ZwEXnOz" alt="Países Bajos vs Ecuador: Resumen, resultado y goles del partido de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Resultado final: Países Bajos 1-1 Ecuador | Jornada 2 Mundial Qatar 2022 - Grupo A AQUÍ LA CRÓNICA COMPLETA. Se termina el partido. Países Bajos y Ecuador&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}