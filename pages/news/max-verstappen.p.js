import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Max Verstappen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Max Verstappen"/>
        <meta name="description" content="Trending News about Max Verstappen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Max Verstappen</h1>
            <Image width={800} height={500} src="https://www.motorsport-total.com/img/sm/274323_mst.jpg?rf=1669302631" alt="Max Verstappen"/>
            <h3>Recent News</h3>
            <a href='https://www.motorsport-total.com/formel-1/news/helmut-marko-doch-keine-35-rennen-fuer-die-wende-gebraucht-22112407'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Helmut Marko: Doch keine 35 Rennen für die Wende gebraucht</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ85e7mI3jx-vbn0mfWTrHWqLFPFZ-kHlJEe1aWO77d3VMbeHFHBBteuZaENo5cCDzEaBeIMUdY" alt="Helmut Marko: Doch keine 35 Rennen für die Wende gebraucht" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Helmut Marko erinnert an den schwierigen Saisonstart von Red Bull und lobt das Team für ein Jahr, das in dieser Form &quot;schwer zu wiederholen&quot; sein wird.</p></div>
            </div>
        </a>
        </Template></>;
}