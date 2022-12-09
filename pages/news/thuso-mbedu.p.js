import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Thuso Mbedu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Thuso Mbedu"/>
        <meta name="description" content="Trending News about Thuso Mbedu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Thuso Mbedu</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7119/d6d4d25bf9334b5e95a5de58d5f54b41.jpg" alt="Thuso Mbedu"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/drum/celebs/news/were-in-good-company-thuso-mbedu-makes-the-new-york-timess-top-10-best-actors-of-2022-list-20221208'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;We&#39;re in good company&#39; - Thuso Mbedu makes the New York ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSZrEq4J6-6-j-FggObunSPu-RG1nwKc5XUWtimnl3aK_2BytKJAyJMwRmf5Iy96uH4rfIEsnA" alt="&#39;We&#39;re in good company&#39; - Thuso Mbedu makes the New York ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>She has had a great year. From starring alongside Viola Davis in The Woman King, to winning awards and gracing prestigious magazine covers, she&#39;s done it&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iol.co.za/entertainment/celebrity-news/local/thuso-mbedus-star-keeps-shining-as-the-new-york-times-lists-her-among-the-10-best-actors-of-the-year-346d08a8-9fc5-4e11-996f-33bcbdd330ba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thuso Mbedu&#39;s star keeps shining as &#39;The New York Times&#39; lists her ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS8R42CH3AmqQzVVsHrckurairyEVj1CjBFOXBb_-Wa_eywqy4laNtlueQVOaeONwHQIQYh6Ogz" alt="Thuso Mbedu&#39;s star keeps shining as &#39;The New York Times&#39; lists her ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s no secret that South African-born actress Thuso Mbedu has had an amazing year, with her cementing her place in Hollywood.</p></div>
            </div>
        </a>
        </Template></>;
}