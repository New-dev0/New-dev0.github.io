import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Calendario Mundial 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Calendario Mundial 2022"/>
        <meta name="description" content="Trending News about Calendario Mundial 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Calendario Mundial 2022</h1>
            <Image width={800} height={500} src="https://img.iol.pt/preset/6377a3920cf2254fb282e4b7/og/maisfutebol" alt="Calendario Mundial 2022"/>
            <h3>Recent News</h3>
            <a href='https://maisfutebol.iol.pt/mundial-2022/calendario-mundial-2022/mundial-2022-como-acompanhar-tudo-no-maisfutebol'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial 2022: como acompanhar tudo no Maisfutebol</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSoJxqjT8FTEulaVkzrVRiGeXxdTKANnvofeQL71CTZmJQNka8pnP2IVGbzTL2gPT4OtLYm_K-h" alt="Mundial 2022: como acompanhar tudo no Maisfutebol" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para isso, criou uma página dedicada em exclusivo ao torneio, com toda a informação relevante. Calendário, equipas, jogadores, classificações e jogos ao minuto&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}