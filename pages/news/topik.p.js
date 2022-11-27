import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Topik</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Topik"/>
        <meta name="description" content="Trending News about Topik" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Topik</h1>
            <Image width={800} height={500} src="https://i.gazeteduvar.com.tr/2/1280/720/storage/files/images/2022/11/25/menekse-tokyay-27-kasim-cFD4_cover.jpg" alt="Topik"/>
            <h3>Recent News</h3>
            <a href='https://www.gazeteduvar.com.tr/topik-de-biziz-yahni-de-borekitas-da-makale-1590833'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Topik de biziz, yahni de, börekitas da</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6883epldpEN_mp4GpB4Wj_YcHqeONdKxfnPc7-xlmPisyTdMBxuPZfDyMjfMqOn8EBq2qzu5c" alt="Topik de biziz, yahni de, börekitas da" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yemek sadece “yemek” değil. Hiçbir zaman da olmadı. Yemek, kendi içinde görgüyü, gelenekleri, yaşanmışlıkları, acıyı, neşeyi, hüznü, mutluluğu,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}