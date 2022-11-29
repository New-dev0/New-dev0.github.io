import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bipolar disorder</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bipolar disorder"/>
        <meta name="description" content="Trending News about Bipolar disorder" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bipolar disorder</h1>
            <Image width={800} height={500} src="https://img.medscape.com/thumbnail_library/dt_221128_lithium_tablet_800x450.jpg" alt="Bipolar disorder"/>
            <h3>Recent News</h3>
            <a href='https://www.medscape.com/viewarticle/984663'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mood Stabilizers, Particularly Lithium, Potential Lifesavers in Bipolar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS8w3HV7kJwTrpCDwzHVm2DkHQenUntaH9LENiX5teQ0bL9V4IGJa9PdsOEfyZi0Zep-whkhk7a" alt="Mood Stabilizers, Particularly Lithium, Potential Lifesavers in Bipolar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mood stabilizers, particularly lithium, are tied to lower mortality rates, including suicide and naturally occurring death, in patients with bipolar&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}