import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>İtalya</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,İtalya"/>
        <meta name="description" content="Trending News about İtalya" /></Head><Template>
            <h1 style={{fontSize: "30"}}>İtalya</h1>
            <Image width={800} height={500} src="https://www.veryansintv.com/wp-content/uploads/2022/11/melonikapak.jpg" alt="İtalya"/>
            <h3>Recent News</h3>
            <a href='https://www.veryansintv.com/meloninin-mavivatan-hamlesi-italya-deniz-ve-guney-bakanligi-kurdu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meloni&#39;nin Mavivatan hamlesi... İtalya, Deniz ve Güney Bakanlığı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZz3moPEDQdPMyNQoZfNPMn-KD9G2bZgGHNDrq7M5LUce6nxdB6eULyIaEf5dMs07Dck1uzWa2" alt="Meloni&#39;nin Mavivatan hamlesi... İtalya, Deniz ve Güney Bakanlığı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İtalya&#39;da yeni bir bakanlık kurulduğunun müjdesini veren haber aynen şöyle: İtalya Başbakanı Giorgia Meloni, göreve başlar başlamaz kolları sıvayarak ekonomik&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}