import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eamon Dunphy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eamon Dunphy"/>
        <meta name="description" content="Trending News about Eamon Dunphy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eamon Dunphy</h1>
            <Image width={800} height={500} src="https://i2-prod.irishmirror.ie/incoming/article28526410.ece/ALTERNATES/s1200/0_Screenshot-202.png" alt="Eamon Dunphy"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/sport/eamon-dunphy-personal-life-wife-28519986'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eamon Dunphy&#39;s personal life and relationship with wife as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUAODPLds60KW_zMZ5Fd9lHmkXHScGLzD4ZOBvqkOQW9bW2Ii5zAVK-SsV1xVw4-utIrHTkMuN" alt="Eamon Dunphy&#39;s personal life and relationship with wife as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eamon Dunphy joins Ryan Tubridy on the Late Late Show tonight and it is sure to be an entertaining watch as the former footballer drops in ahead of the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}