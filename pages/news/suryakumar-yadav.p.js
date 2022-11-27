import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Suryakumar Yadav</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Suryakumar Yadav"/>
        <meta name="description" content="Trending News about Suryakumar Yadav" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Suryakumar Yadav</h1>
            <Image width={800} height={500} src="https://staticlallantop.akamaized.net/images/post/1669296264465_suryakumar_1200.webp" alt="Suryakumar Yadav"/>
            <h3>Recent News</h3>
            <a href='https://www.thelallantop.com/sports/post/suryakumar-yadav-dropped-from-bangladesh-odi-team-or-bcci-decided-to-rest-him-know-the-truth'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>सूर्यकुमार यादव को खेलने क्यों नहीं दे रहा BCCI?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSwdOItoq8fGDiS_RLaD_RKMk4lp8NqQWU1MXhLcwvbQcFGwayHhF_ZFK-B2F3wRFbgSMNMxxxB" alt="सूर्यकुमार यादव को खेलने क्यों नहीं दे रहा BCCI?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>सूर्यकुमार यादव को खेलने क्यों नहीं दे रहा BCCI? सूर्या को टीम से ड्रॉप किया गया? Suryakumar Yadav,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}