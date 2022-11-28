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
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQcLNrX4YklOXIcHCKeO78PcE4f4Ij9rJMV0va8cAm2Mk14VyIM7Gv76grrjBRjnLVStmJNZkQ7" alt="つぎのメインは“哀ちゃん”!? 劇場版『名探偵コナン』最新作の予告編 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022年11月8日に、Twitterで“哀ちゃん”というワードがトレンド入りを果たしました。きっかけとなったのは、2023年に公開される劇場版『名探偵コナン』の最新情報。</p></div>
            </div>
        </a><a href='https://animeanime.jp/article/2022/11/27/73803.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「名探偵コナン」安室や風見、警察学校組も！グラデーションで ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSXJNxdG23KsCR2kxNmfvzg_ulD6p6yEjSJUIAZdf7VM47ssLWoLXEq-X9YIQRi9LFgPoj_D_1G" alt="「名探偵コナン」安室や風見、警察学校組も！グラデーションで ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TVアニメ『名探偵コナン』より、「日常でも使用できる」をコンセプトにしたオリジナルグッズが発売される。</p></div>
            </div>
        </a>
        </Template></>;
}