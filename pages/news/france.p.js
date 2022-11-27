import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>France</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,France"/>
        <meta name="description" content="Trending News about France" /></Head><Template>
            <h1 style={{fontSize: "30"}}>France</h1>
            <Image width={800} height={500} src="https://aeroin.net/wp-content/uploads/2021/08/Air-France-A350-240821.jpg" alt="France"/>
            <h3>Recent News</h3>
            <a href='https://aeroin.net/air-france-atinge-a-marca-de-20-avioes-airbus-a350-xwb-na-frota/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Air France atinge a marca de 20 aviões Airbus A350 XWB na frota</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQ2RL8BSjgM_Si9ak68kgeSOSIZsWz5IwEyCyjbtvpGJgxUcEYIDoju_Fb10t2oJ7tuiwKi-N_" alt="Air France atinge a marca de 20 aviões Airbus A350 XWB na frota" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Air France recebeu na sexta-feira (25) o seu 20º Airbus A350-900 registrado com a matrícula F-HTYT e batizado de &quot;Angers&quot;.</p></div>
            </div>
        </a>
        </Template></>;
}