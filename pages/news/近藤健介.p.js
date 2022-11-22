import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>近藤健介</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,近藤健介"/>
        <meta name="description" content="Trending News about 近藤健介" /></Head><Template>
            <h1 style={{fontSize: "30"}}>近藤健介</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221121-00000019-sanspo-000-2-view.jpg?exp=10800" alt="近藤健介"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/051fdb4cf0248ae79df906f4a0f58c9b182caa15'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ロッテ・吉井監督、ＦＡ近藤健介にラブコール「野球への取り組み ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQMAYrmT5rRR_hr_xMWSmH5cNfPon2eEjJq9gLTVoRdQGjcMfKSNNXkoeAgZoG06UM1BWJjYaWf" alt="ロッテ・吉井監督、ＦＡ近藤健介にラブコール「野球への取り組み ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ロッテ・吉井理人新監督（５７）が２０日、日本ハムから海外フリーエージェント（ＦＡ）権を行使した近藤健介外野手（２９）＝写真＝にラブコールを送った。</p></div>
            </div>
        </a><a href='https://www.daily.co.jp/baseball/2022/11/21/0015826333.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ロッテ・吉井監督 日本ハム・近藤にラブコール＆高評価「野球への ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTF2kvLZP_5iV9P3lYtXNXVoMvnLe5abWwLkq7iBpi7zzPuQceFPFJlAEw7CdhkiLM93I6RAAjX" alt="ロッテ・吉井監督 日本ハム・近藤にラブコール＆高評価「野球への ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ロッテの吉井理人監督（５７）が２０日、日本ハムからＦＡ宣言した近藤健介外野手（２９）に入団ラブコールを送った。 地元の千葉出身でマリーンズジュニアに在籍し&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}