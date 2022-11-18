import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ポケモンスカーレット</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ポケモンスカーレット"/>
        <meta name="description" content="Trending News about ポケモンスカーレット" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ポケモンスカーレット</h1>
            <Image width={800} height={500} src="https://www.famitsu.com/images/000/283/242/z_63766e73def61.jpg" alt="ポケモンスカーレット"/>
            <h3>Recent News</h3>
            <a href='https://www.famitsu.com/news/202211/18283242.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ポケモンSV攻略】性格一覧。ステータス補正やおすすめも紹介 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRu-7N13LhKERdYEdPeJXn4VkAIdB-Xlen07ryZkr0AJrBzE5sOmlQ_8bpDhufPMYoUu9n_SnYG" alt="【ポケモンSV攻略】性格一覧。ステータス補正やおすすめも紹介 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>新作『ポケモンSV（スカーレット・バイオレット）』のポケモンの性格をまとめて掲載。ステータス補正やおすすめの性格も紹介。</p></div>
            </div>
        </a>
        </Template></>;
}