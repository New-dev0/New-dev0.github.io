import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Luciana Abreu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Luciana Abreu"/>
        <meta name="description" content="Trending News about Luciana Abreu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Luciana Abreu</h1>
            <Image width={800} height={500} src="https://sic.pt/wp-content/uploads/2022/12/TC9_2946-1-scaled-e1670516121749.jpg" alt="Luciana Abreu"/>
            <h3>Recent News</h3>
            <a href='https://sic.pt/sic-mulher/luciana-abreu-revela-desde-que-tive-as-gemeas-tornei-me-intolerante-a-70-80-dos-alimentos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luciana Abreu revela: &quot;Desde que tive as gémeas, tornei-me ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTwgTAJKm9H0FgFrhbshPnce_xmlIynfSFk1SLWRvleeHbn04qXtlyXrKgdSq_hv86Z5S2tjeIs" alt="Luciana Abreu revela: &quot;Desde que tive as gémeas, tornei-me ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ao lado de Lyonce, Luciana Abreu falou sobre as filhas e recordou o nascimento prematuro de Amoor e Valentine: &quot;Nasceram com 800 gramas, uma delas sem&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}