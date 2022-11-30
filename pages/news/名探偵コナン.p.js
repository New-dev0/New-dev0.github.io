import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>名探偵コナン</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,名探偵コナン"/>
        <meta name="description" content="Trending News about 名探偵コナン" /></Head><Template>
            <h1 style={{fontSize: "30"}}>名探偵コナン</h1>
            <Image width={800} height={500} src="https://www.famitsu.com/images/000/282/772/z_6372efcc8fcfd.jpg" alt="名探偵コナン"/>
            <h3>Recent News</h3>
            <a href='https://www.famitsu.com/news/202211/27282772.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>つぎのメインは“哀ちゃん”!? 劇場版『名探偵コナン』最新作の予告編 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpq4kEExLiYulHwobL_x2O-dT5k33hQK2Si35LCav4BW3wihkAPXltQ60NfzmfoOEIWq6frcb2" alt="つぎのメインは“哀ちゃん”!? 劇場版『名探偵コナン』最新作の予告編 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>きっかけは11月8日に解禁された、劇場版『名探偵コナン』の予告映像です。動画が始まると、灰原哀に関わるマンガ内の絵やセリフがつぎつぎと登場。最後にタイトルの一部と&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}