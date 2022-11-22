import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Weah</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Weah"/>
        <meta name="description" content="Trending News about Weah" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Weah</h1>
            <Image width={800} height={500} src="https://derivates.kicker.de/image/upload/w_1280,h_720,c_fill,g_auto:subject/w_1200,q_auto/v1/2022/11/21/f984e595-fbbe-4329-a65e-2fbc768d95cd.jpeg" alt="Weah"/>
            <h3>Recent News</h3>
            <a href='https://www.kicker.de/pulisics-perfekter-pass-auf-weah-doch-bale-rettet-wales-den-punkt-gegen-usa-926699/video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pulisics perfekter Pass auf Weah, doch Bale rettet Wales den Punkt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQzGJI4_oAO0muy-Q2NgDVOZP796u97F7ak_G5VcPDBVmijfLaRlv-5sjnTyhFx-KfvT1BeVKjX" alt="Pulisics perfekter Pass auf Weah, doch Bale rettet Wales den Punkt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Video: Zwei unterschiedliche Hälften führten zum ersten Remis in Katar. Gegen Wales überzeugte die USA zu Beginn und gingen auch verdient in Führung,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}