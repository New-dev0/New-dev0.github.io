import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Yılmaz Özdil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Yılmaz Özdil"/>
        <meta name="description" content="Trending News about Yılmaz Özdil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Yılmaz Özdil</h1>
            <Image width={800} height={500} src="https://img-s1.onedio.com/id-637606506958a0b45dbf7a33/rev-0/raw/s-3ad4a7b8b95c6d5de379adbe26252fd8363f3134.jpg" alt="Yılmaz Özdil"/>
            <h3>Recent News</h3>
            <a href='https://onedio.com/haber/yilmaz-ozdil-in-hayatina-dair-detaylar-yilmaz-ozdil-kimdir-kac-yasinda-ve-nereli-yilmaz-ozdil-neler-yapti-1072429'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yılmaz Özdil&#39;in Hayatına Dair Detaylar: Yılmaz Özdil Kimdir, Kaç ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSv7tcMhlx8X-KmHxqYmDi3X-08-iZoLJZIqzCf531l9wPTpOUzPMj7DzRcT9273gEHcwSU1wyO" alt="Yılmaz Özdil&#39;in Hayatına Dair Detaylar: Yılmaz Özdil Kimdir, Kaç ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ünlü gazeteci Yılmaz Özdil&#39;in hayatı hakkında merak edilenlerin hepsi Onedio&#39;da!</p></div>
            </div>
        </a>
        </Template></>;
}