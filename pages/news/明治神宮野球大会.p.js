import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>明治神宮野球大会</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,明治神宮野球大会"/>
        <meta name="description" content="Trending News about 明治神宮野球大会" /></Head><Template>
            <h1 style={{fontSize: "30"}}>明治神宮野球大会</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221119-00010009-chugoku-000-3-view.jpg?exp=10800" alt="明治神宮野球大会"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/755b42490009285be1cee340101aa3dbf1c4fdf4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>明治神宮大会が「修学旅行」 広陵「ディズニーはいつでも、神宮は ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHb4u-6p6T2A4z3P5DyDC8M5FvGyfBU2Z_qVPn38tcBnZLsqBowQgFbABVwUYB6YAfzsuAM2Mo" alt="明治神宮大会が「修学旅行」 広陵「ディズニーはいつでも、神宮は ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第53回明治神宮野球大会高校の部に出場している広陵（広島）の2年生部員は神宮遠征が「修学旅行」となる。同級生は15日、3泊4日の修学旅行に出発。</p></div>
            </div>
        </a>
        </Template></>;
}