import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mustafa Sarıgül</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mustafa Sarıgül"/>
        <meta name="description" content="Trending News about Mustafa Sarıgül" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mustafa Sarıgül</h1>
            <Image width={800} height={500} src="https://tele1.com.tr/wp-content/uploads/2022/12/sarigul.jpg" alt="Mustafa Sarıgül"/>
            <h3>Recent News</h3>
            <a href='https://tele1.com.tr/mustafa-sarigul-ogrencileri-yanina-alip-kantine-baskin-yapti-747206/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mustafa Sarıgül öğrencileri yanına alıp kantine &#39;baskın&#39; yaptı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSvKGzMAukB5RWlooIwIZaKEwMv3klEA2A0GdsKmX82SMdkcU5dY_RkjCO3R5bDj-IV0vvtPDD-" alt="Mustafa Sarıgül öğrencileri yanına alıp kantine &#39;baskın&#39; yaptı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Öğrencilerin şikayeti üzerine okul kantinine giden Sarıgül, işletmeciye tost ve ayran fiyatını sordu. Sarıgül işletmecinin verdiği “Tost 20 lira, ayran 5 lira”&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}