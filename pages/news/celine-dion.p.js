import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Celine Dion</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Celine Dion"/>
        <meta name="description" content="Trending News about Celine Dion" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Celine Dion</h1>
            <Image width={800} height={500} src="https://cdn.unitycms.io/images/DH2I-u5w4wW81ghG0cCWU6.png?op=focus&val=1200,675,1000,1000,0,0,500,500&sum=Mo9hummtzKY" alt="Celine Dion"/>
            <h3>Recent News</h3>
            <a href='https://www.lessentiel.lu/de/story/so-schlecht-geht-es-celine-dion-wirklich-459590142098'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arzt verrät: So schlecht geht es Celine Dion wirklich</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTErXkA4fpvCTA_lGjh41aWNapArsquGZWCvnhrN-vAOCxdF9k3J46rgqFhGheD1zJrgp3KYLn9" alt="Arzt verrät: So schlecht geht es Celine Dion wirklich" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Weltstar Celine Dion (54) kämpft mit gesundheitlichen Problemen. Wie ihr HNO-Arzt nun verraten hat, sind ihre Stimmbänder betroffen.</p></div>
            </div>
        </a>
        </Template></>;
}