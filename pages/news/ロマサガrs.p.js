import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ロマサガRS</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ロマサガRS"/>
        <meta name="description" content="Trending News about ロマサガRS" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ロマサガRS</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221126-00010041-realsound-000-1-view.jpg?exp=10800" alt="ロマサガRS"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/d4dc79b3d53bb043c4896f889d90a23a9b0c2ced'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『ロマサガRS』4周年記念のTVCMが11月27日より放映開始 松山 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTnY5CEMSKs5UocQwtdcXUqwcFzyGaS9xRmXSfSjFl2mO8y54O9VxdnunLivw8BCUGJ_jZHRkof" alt="『ロマサガRS』4周年記念のTVCMが11月27日より放映開始 松山 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>松山ケンイチ、山崎まさよし CM撮影後インタビュー Q.撮影の感想を教えてください山崎：楽しかったですね。松山さんは役者としても大成されているので、僕はどっちかという&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}