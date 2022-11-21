import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>シンフォギアライブ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,シンフォギアライブ"/>
        <meta name="description" content="Trending News about シンフォギアライブ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>シンフォギアライブ</h1>
            <Image width={800} height={500} src="https://img2.animatetimes.com/2022/11/53564764af7723f61feaea951812b848637aa188a4b4b2_05120034_d596e88dbe9f2373503eecbfc92829e4c170bc97.jpg" alt="シンフォギアライブ"/>
            <h3>Recent News</h3>
            <a href='https://www.animatetimes.com/news/details.php?id=1668979414'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『シンフォギアライブ2020→2022』で『戦姫絶唱シンフォギア』新 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTXxITIq-cDh3FRK1zNnucBFbY303t1gGzu9u5I3uNLkib2-buOm30e4w8cX7Xq74FTxFTYAvew" alt="『シンフォギアライブ2020→2022』で『戦姫絶唱シンフォギア』新 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【アニメイトタイムズ】11月20日、埼玉・ベルーナドーム（メットライフドーム）にて「シンフォギアライブ2020→2022」が開催されました。本イベントは、TVシリーズ第5&nbsp;...</p></div>
            </div>
        </a><a href='https://lineblog.me/hikasayoko/archives/3084481.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>まずは : 日笠陽子 公式ブログ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTKO1n7YJ_gqoVHiXdG7PWvd_6jOpBi7yPkZ1xG0d4Yfc2Z1ZG1VD_GaecGsliuGGOrtmvbjuNU" alt="まずは : 日笠陽子 公式ブログ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>シンフォギアライブ2020→2022寒い中ご来場くださった皆様ありがとうございました！✨彩陽クリスもいるよ❣️メンバーのみんなのことがだいすきだ。</p></div>
            </div>
        </a>
        </Template></>;
}