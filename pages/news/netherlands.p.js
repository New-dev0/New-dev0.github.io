import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Netherlands</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Netherlands"/>
        <meta name="description" content="Trending News about Netherlands" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Netherlands</h1>
            <Image width={800} height={500} src="" alt="Netherlands"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/11/lagos-netherlands-firm-partner-to-tackle-waterborne-diseases/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lagos, Netherlands firm, partner to tackle waterborne diseases</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSBH5PVf3h3t4VPbLGVPkUJvZAhxcnbJ_TM0EV6ap97ZJSVam2Tn2ik59n3vpWqqzcjAPO4fauK" alt="Lagos, Netherlands firm, partner to tackle waterborne diseases" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By Olasunkanmi Akoni. Lagos State Government, in collaboration with Faecal Sludge Management Alliance, FSMA firm, of the Netherlands, is putting measures in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}