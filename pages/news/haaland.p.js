import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Haaland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Haaland"/>
        <meta name="description" content="Trending News about Haaland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Haaland</h1>
            <Image width={800} height={500} src="https://icdn.ensonhaber.com/resimler/diger//kok/2022/11/26/de-bruyne_4220.jpg" alt="Haaland"/>
            <h3>Recent News</h3>
            <a href='https://www.ensonhaber.com/kralspor/dunya-kupasi/kevin-de-bruyne-haaland-ve-lukakuyu-karsilastirdi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin De Bruyne, Haaland ve Lukakuyu karşılaştırdı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZCYOB5Bds0bVT9HwIvQF7PSkO-MTlV5C8PWuHeEMna8-5bmXZ5kh16wSzBqTtEQQJw0ZTiP42" alt="Kevin De Bruyne, Haaland ve Lukakuyu karşılaştırdı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 Katar Dünya Kupası&#39;nda Belçika ile mücadele eden Manchester City&#39;nin yıldızı Kevin De Bruyne, milli takımdan arkadaşı Lukaku ve kulüp takımından&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}