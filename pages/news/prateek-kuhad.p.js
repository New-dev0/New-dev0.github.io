import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Prateek Kuhad</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Prateek Kuhad"/>
        <meta name="description" content="Trending News about Prateek Kuhad" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Prateek Kuhad</h1>
            <Image width={800} height={500} src="https://www.sakshi.com/sites/default/files/article_images/2022/11/27/prateek.gif" alt="Prateek Kuhad"/>
            <h3>Recent News</h3>
            <a href='https://www.sakshi.com/telugu-news/movies/singer-prateek-kuhad-confirms-breakup-niharika-thakur-goes-viral-1505543'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>నిహారికతో బ్రేకప్.. ప్రముఖ సింగర్ క్లారిటీ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRjLuiaH1hTKLBozWkBdaimFjO4B0DaXeZX6daqZt6qBX53_onuVhzmm0kv233FIQmgZKHGj29" alt="నిహారికతో బ్రేకప్.. ప్రముఖ సింగర్ క్లారిటీ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ప్రముఖ బాలీవుడ్ సింగర్, గేయ రచయిత ప్రతీక్ కుహద్ ప్రియురాలితో బ్రేకప్ అయినట్లు&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}