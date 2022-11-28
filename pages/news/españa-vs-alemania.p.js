import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>España vs Alemania</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,España vs Alemania"/>
        <meta name="description" content="Trending News about España vs Alemania" /></Head><Template>
            <h1 style={{fontSize: "30"}}>España vs Alemania</h1>
            <Image width={800} height={500} src="https://library.sportingnews.com/styles/facebook_1200x630/s3/2022-11/Alvaro%20Morata%20Spain%20112722.jpg?itok=32LgWQjh" alt="España vs Alemania"/>
            <h3>Recent News</h3>
            <a href='https://www.sportingnews.com/ar/futbol/news/espana-vs-alemania-resultado-vivo-partido-hoy-resumen-goles-mundial-qatar-2022/pgytj9zwofqmzsj44jgyjbcc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>España vs. Alemania, resultado, resumen y goles: empate 1-1 con ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdEy0jayN4MFIwRNS_ikagU1v7mWe_tN2FTU_Rh_ExHKl2yXRWm7U8kEpp1e6A1aAslId2_bcP" alt="España vs. Alemania, resultado, resumen y goles: empate 1-1 con ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>España y Alemania se enfrentaron en un partido clave para el Grupo E. Análisis, resultado, resumen y goles.</p></div>
            </div>
        </a><a href='https://espndeportes.espn.com/futbol/reporte/_/juegoId/633812'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>España vs. Alemania - Reporte del Partido - 27 noviembre, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS3dpVb2qdE4FySo0uIiG-GHMGNcsBiJ9ov7wf9mBV-4TyRYYkaPGEzXNhKrtGQ-qlSHsndex3K" alt="España vs. Alemania - Reporte del Partido - 27 noviembre, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Obtén el reporte del partido España vs. Alemania 2022 Copa Mundial FIFA, Fase de grupos.</p></div>
            </div>
        </a><a href='https://www.marca.com/claro-mx/futbol/mundial/2022/11/27/6383a250ca4741e3058b45cb.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>España vs Alemania: Resumen, resultado y goles del partido de la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQEyFdVtKseGVGs58kCxVbp2TDmyqYHuNT3XvU9S3EgGvozB-Zod0a1xnFnIv5xU8rDST8zeXxA" alt="España vs Alemania: Resumen, resultado y goles del partido de la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marcdor final: España 1-1 Alemania Termina así otra jornada más del Mundial en MARCA Claro. Alemania se mantiene con vida, España les dejó con vida y&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mediotiempo.com/futbol/copa-mundial/ver-espana-vs-alemania-en-vivo-transmision-mundial-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ver España vs Alemania GOLES. Transmisión Mundial 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWasB8IW7fk4XMNqlT_JflnGFj0U7cINPcOC6twzHFw_Ch0jwaJI6dUhdr3PTlIbpzTlbBJV28" alt="Ver España vs Alemania GOLES. Transmisión Mundial 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sigue en vivo y online el España vs Alemania, Jornada 2 del Grupo E de Qatar 2022, este domingo 27 de noviembre a partir de las 13:00 horas.</p></div>
            </div>
        </a><a href='https://www.tudn.com/futbol/mundial-qatar-2022/partidos-en-vivo/fase-de-grupos/espana-vs-alemania/alemania-resurge-empata-espana-para-evitar-ser-eliminado-mundial-qatar-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alemania resurge y le empata a España para evitar ser eliminado ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT3leTQ3_6jDivUgrCdNhM5Nru1Q4DMwmmKUoEWnd0KtoxGskuXYXhQWxHRuQx8Oi-iU2PdFIAs" alt="Alemania resurge y le empata a España para evitar ser eliminado ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Mannschaft estuvo al borde de la eliminación con un gol de Álvaro Morata, pero reaccionó en la recta final con un derechazo de Niclas Füllkrug para dejar&nbsp;...</p></div>
            </div>
        </a><a href='https://depor.com/mundial-x-depor/futbol-libre-tv-espana-vs-alemania-en-vivo-online-tv-via-gol-mundial-tve-latina-el-canal-del-futbol-tyc-sports-ecdf-youtube-y-caracol-por-mundial-qatar-2022-transmision-y-minuto-a-minuto-del-partido-por-el-grupo-e-alineaciones-lbp-noticia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ninguno mereció perder: España empató 1-1 frente a Alemania por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT-bBwhsDoUxEsqNQg8kl3AEdTKTFnyKC0VyEt1l7dcCCtRCBHvQVrPTNfBGSSvZb0ZUaewqp_E" alt="Ninguno mereció perder: España empató 1-1 frente a Alemania por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En un partidazo, España no pudo imponerse ante Alemania en el marco de la fecha 2 del Grupo E del Mundial Qatar 2022. Álvaro Morata y Niclas Füllkrug fueron&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}