import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lützerath</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lützerath"/>
        <meta name="description" content="Trending News about Lützerath" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lützerath</h1>
            <Image width={800} height={500} src="https://rp-online.de/imgs/32/1/4/8/9/3/6/2/3/3/tok_b0fc437c9a316aba8468a06c0118b0c0/w1120_h630_x560_y350__MG_0641-Bearbeitet-43dda4eeeba3f6c3.jpg" alt="Lützerath"/>
            <h3>Recent News</h3>
            <a href='https://rp-online.de/nrw/staedte/erkelenz/erkelenz-luetzerath-aktivist-in-fernsehsendung-wetten-dass_aid-80083679'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erkelenz: Lützerath-Aktivist in Fernsehsendung „Wetten, dass..?“​</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvZwIsxDxGcMu7JoHEvFRS9V_EV_nENvg5rO3IhkH_Hlmt0m9aZn78p4sFJab0VRdL-oYLgeKm" alt="Erkelenz: Lützerath-Aktivist in Fernsehsendung „Wetten, dass..?“​" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Erkelenzer Marten Reiß nimmt am Samstag als Wettkandidat an der ZDF-Show in Friedrichshafen teil. Wie es dazu kam und wie er im TV auf die Lage am&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}