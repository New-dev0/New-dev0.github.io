import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Andrea Corr</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Andrea Corr"/>
        <meta name="description" content="Trending News about Andrea Corr" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Andrea Corr</h1>
            <Image width={800} height={500} src="https://www.independent.ie/regionals/louth/news/06309/42190478.ece/AUTOCROP/w1240h700/AR%20Andrea%20Corr%20pictured" alt="Andrea Corr"/>
            <h3>Recent News</h3>
            <a href='https://www.independent.ie/regionals/louth/news/louth-singer-andrea-corr-to-appear-on-the-late-late-show-42190479.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Louth singer Andrea Corr to appear on The Late Late Show</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSRB9uTh390uo1ex1OVbEAVzO_FpGZbrya_ip-TdhHnbX82TCmvtR5bV7MHAkGjWoVhLKWNozp" alt="Louth singer Andrea Corr to appear on The Late Late Show" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dundalk singer Andrea Corr is set to appear on this week&#39;s edition of The Late, Late Show when she sings &#39;It&#39;s Beginning to look a Lot Like Christmas” from&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}