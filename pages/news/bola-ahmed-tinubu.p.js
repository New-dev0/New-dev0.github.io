import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bola Ahmed Tinubu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bola Ahmed Tinubu"/>
        <meta name="description" content="Trending News about Bola Ahmed Tinubu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bola Ahmed Tinubu</h1>
            <Image width={800} height={500} src="" alt="Bola Ahmed Tinubu"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/12/no-regret-campaigning-for-bola-tinubu-kudirat-ogunro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No regret campaigning for Bola Tinubu - Kudirat Ogunro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZHRpf_yM0NLKKeGr4h-VA_yDurHTRaTPs9xp26-EGxHw7ACfamTvzt4uZ7XJD0N8sbbLJ1Cz3" alt="No regret campaigning for Bola Tinubu - Kudirat Ogunro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nollywood actress Kudirat Ogunro have revealed why she is a die-hard supporter of the APC presidential candidate, Bola Ahmed Tinubu stating that aside from&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}