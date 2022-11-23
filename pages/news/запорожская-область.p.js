import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Запорожская область</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Запорожская область"/>
        <meta name="description" content="Trending News about Запорожская область" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Запорожская область</h1>
            <Image width={800} height={500} src="https://gdb.rferl.org/04020000-0aff-0242-be4f-08daa7b83f7a_w1200_r1.jpg" alt="Запорожская область"/>
            <h3>Recent News</h3>
            <a href='https://www.radiosvoboda.org/a/canksii-ec-zaporyzska-oblast/32118984.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Недодивилися: як Запоріжжя та неокупована частина області ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSpI9laJdMYsYm-bHNfbtBE0On6IRtXmUnLoStzmImb4dhkqhzEBuRY0uxmgB59ZrGchWyZRikX" alt="Недодивилися: як Запоріжжя та неокупована частина області ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Запоріжжя – Місяць тому ЄС запровадило восьмий пакет санкції проти РФ через збройну агресію проти України. Дія введених заходів охоплює також нині тимчасово&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}