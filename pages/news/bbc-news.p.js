import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BBC news</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BBC news"/>
        <meta name="description" content="Trending News about BBC news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BBC news</h1>
            <Image width={800} height={500} src="https://images.bstatic.de/cMbzRHcMeyALTZnsYXKxFvZ5Gro=/1200x630/filters:focal(556x549:576x569)/images/442a2ba8/79b7/4f0b/a71c/8c4594e99e8c.jpg" alt="BBC news"/>
            <h3>Recent News</h3>
            <a href='https://www.bunte.de/stars/star-life/schicksalsgeschichten-der-stars/bbc-moderator-jonnie-irwin-leidet-an-unheilbarem-lungenkrebs.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BBC-Moderator Jonnie Irwin leidet an unheilbarem Lungenkrebs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTUuBHF3spaR0ogC_TuAhH2W6vysBQqUcpgFDkL5tvBT0r4fA8m0okYD3KZs7yO9BSQtFW_Olx" alt="BBC-Moderator Jonnie Irwin leidet an unheilbarem Lungenkrebs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der britische TV-Moderator Jonnie Irwin hat Lungenkrebs im Endstadium. Die ihm verbleibende Zeit möchte er vor allem mit seiner Familie verbringen.</p></div>
            </div>
        </a>
        </Template></>;
}