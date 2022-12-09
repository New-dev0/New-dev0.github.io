import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>柴咲コウ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,柴咲コウ"/>
        <meta name="description" content="Trending News about 柴咲コウ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>柴咲コウ</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221207-00000005-maikirei-000-1-view.jpg?exp=10800" alt="柴咲コウ"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/723a1cee9cc02702907b1811ade26cc489bdaea3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>＜柴咲コウ＞柄×柄の上級者コーデ パールアクセでエレガントに ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTuJwcHb8AAbmqp2vYzm2jqGp053kEKRQqKBYi4ZiTgysabY9mFspMxVv7UR5zt0Zo3q8vzxozn" alt="＜柴咲コウ＞柄×柄の上級者コーデ パールアクセでエレガントに ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>女優の柴咲コウさんが12月1日、東京都内で、俳優の大泉洋さんが主演を務める映画「月の満ち欠け」（廣木隆一監督、12月2日公開）の公開前夜祭舞台あいさつに登場した。</p></div>
            </div>
        </a>
        </Template></>;
}