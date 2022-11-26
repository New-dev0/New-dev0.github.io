import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Natascha Kampusch</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Natascha Kampusch"/>
        <meta name="description" content="Trending News about Natascha Kampusch" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Natascha Kampusch</h1>
            <Image width={800} height={500} src="https://i.ds.at/xRe3rA/rs:fill:1200:600/plain/2022/11/25/kampusch1.jpg" alt="Natascha Kampusch"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.de/story/2000141209972/natascha-kampusch-am-sonntag-bei-claudia-stoeckl-auf-oe3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Natascha Kampusch am Sonntag bei Claudia Stöckl auf Ö3</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2wvMgDvmJLpHoJOw_YujSx5PymKC7Hnd4dw19QwWRfJMOuNYoyy4irLrWeLN1sa3Jq9_c_IWs" alt="Natascha Kampusch am Sonntag bei Claudia Stöckl auf Ö3" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In &quot;Frühstück bei mir&quot; erzählt sie über ihr neues Buch und ihre Strategien, die ihr in der Zeit im Verlies, aber auch in den Jahren danach, geholfen haben.</p></div>
            </div>
        </a>
        </Template></>;
}