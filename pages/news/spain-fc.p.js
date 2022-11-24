import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Spain FC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Spain FC"/>
        <meta name="description" content="Trending News about Spain FC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Spain FC</h1>
            <Image width={800} height={500} src="https://www.watfordfc.com/storage/103623/conversions/221122-Training-PM-2706-(1)-featured_image.jpg" alt="Spain FC"/>
            <h3>Recent News</h3>
            <a href='https://www.watfordfc.com/news/spain-diary-day-two'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain Diary: Day Two</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDi1hzzf-Asff_rE3yz64becMEkXI8We53QatwskPgGiepS7a0eDGikUZF3lB1eypjkc9Ee0By" alt="Spain Diary: Day Two" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Up bright and early for a first full day at their Spanish training camp in Algorfa, the Hornets enjoyed another action-packed schedule on day two (Tuesday&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}