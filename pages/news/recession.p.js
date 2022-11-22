import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Recession</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Recession"/>
        <meta name="description" content="Trending News about Recession" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Recession</h1>
            <Image width={800} height={500} src="https://www.verdict.co.uk/wp-content/uploads/2022/03/Cybersecurity_Image-2-2.jpg" alt="Recession"/>
            <h3>Recent News</h3>
            <a href='https://www.verdict.co.uk/cybersecurity-telecom-growth/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cybersecurity sector continues to grow despite imminent global ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTN6xLBlxH7wZulQDK_BdLFujTkXl-URKR1kcM4cTch_y12q-_19QZGkMX_u3I8O_pFeB058Cb6" alt="Cybersecurity sector continues to grow despite imminent global ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The telecoms industry as a whole is giving out mixed messages on its growth potential with global recession looming, and one of the causes of this is the rate&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}