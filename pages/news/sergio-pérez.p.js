import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sergio pérez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sergio pérez"/>
        <meta name="description" content="Trending News about Sergio pérez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sergio pérez</h1>
            <Image width={800} height={500} src="https://www.motorsport-total.com/img/sm/274271_mst.jpg?rf=1669199260" alt="Sergio pérez"/>
            <h3>Recent News</h3>
            <a href='https://www.motorsport-total.com/formel-1/news/mercedes-ziemlich-sicher-reduzierte-zeit-im-windtunnel-wird-red-bull-schaden-22112310'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mercedes ziemlich sicher: Reduzierte Zeit im Windtunnel wird Red ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSb74-2VPeABbKdsyjzVSX-_U1DNh9ERW3Dg_w74Rnb2nwH8nBA1ryOrIs7rfaJDacmuIQ90VRV" alt="Mercedes ziemlich sicher: Reduzierte Zeit im Windtunnel wird Red ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Laut Mercedes wird Red Bull bei der Entwicklung des Autos für die Saison 2023 Schwierigkeiten bekommen - Grund ist die Windtunnel-Strafe für das&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}