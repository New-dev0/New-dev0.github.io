import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>クリスピークリームドーナツ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,クリスピークリームドーナツ"/>
        <meta name="description" content="Trending News about クリスピークリームドーナツ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>クリスピークリームドーナツ</h1>
            <Image width={800} height={500} src="https://www.tv-tokyo.co.jp/cambria/backnumber/2022/1117/images/main.jpg" alt="クリスピークリームドーナツ"/>
            <h3>Recent News</h3>
            <a href='https://www.tv-tokyo.co.jp/cambria/backnumber/2022/1117/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022年11月17日 放送 クリスピー・クリーム・ドーナツ・ジャパン ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_N8z5TyM3S7h4D70CN16OGucrj1dqCfaksCRqVbtppFycKRiUqsk4H89eyku3D6IV2Iku3OkE" alt="2022年11月17日 放送 クリスピー・クリーム・ドーナツ・ジャパン ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022年11月17放送 クリスピー・クリーム・ドーナツ・ジャパン 代表取締役社長 若月 貴子（わかつき たかこ）氏 ： 2006年の日本初上陸時、連日大行列を作り、一世を&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}