import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>戸田恵梨香</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,戸田恵梨香"/>
        <meta name="description" content="Trending News about 戸田恵梨香" /></Head><Template>
            <h1 style={{fontSize: "30"}}>戸田恵梨香</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221130-00118317-crankinn-000-1-view.jpg?exp=10800" alt="戸田恵梨香"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/165f1c0826c72296f21a2448cc1350dd720a9345'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>戸田恵梨香、新垣結衣ら異色ドラマ『ギャルサー』ギャル役 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhgSiqwzkKt-SJaCE42NTLgyWPvEJ19hlCLekeluTG2uQFraKFMafRr8RhzP9SVIAfNoi3_Nd_" alt="戸田恵梨香、新垣結衣ら異色ドラマ『ギャルサー』ギャル役 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>女優の戸田恵梨香が20日放送の『日曜日の初耳学』（TBS系／毎週日曜22時）に出演し、自身のこれまでのキャリアを林修と共に振り返った。その中で、林が「もっと評価&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}