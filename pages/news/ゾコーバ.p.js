import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ゾコーバ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ゾコーバ"/>
        <meta name="description" content="Trending News about ゾコーバ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ゾコーバ</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221123-20211936-jnn-000-2-thumb.jpg?exp=10800" alt="ゾコーバ"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/dc4597eeb622823e87e52dda1d5b83cf732615fa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新型コロナの飲み薬「ゾコーバ」に重症化予防の効果?軽症でも服用 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfMTMwcZeoQ7f7jkrL10qNMQ6z2ST4RhQh6-OU6ulUi8rP2d8BnnG9JoItO6HXTOjpgoYoMxos" alt="新型コロナの飲み薬「ゾコーバ」に重症化予防の効果?軽症でも服用 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>塩野義製薬が開発した新型コロナウイルスの飲み薬「ゾコーバ」について、厚労省の専門家会議が緊急承認しました。重症化予防に効くのか?軽症でも服用できる?</p></div>
            </div>
        </a><a href='https://www.shionogi.com/jp/ja/news/2022/11/20221122.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新型コロナウイルス感染症（COVID-19）治療薬「ゾコーバR錠 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="新型コロナウイルス感染症（COVID-19）治療薬「ゾコーバR錠 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>また、本年３月に厚生労働省との間で締結した本剤の国内供給に関する基本合意書<sup>1</sup>に基づき、日本政府が100万人分を購入する売買契約を別途締結しておりますことを併せて&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/national/20221122-OYT1T50237/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>塩野義の国産初コロナ飲み薬「ゾコーバ」、厚労省が緊急承認…来 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSFuhRR9GTWgJ9GNLfXMqWcYLBm537fZCdEAMtkqHxbczQLpUoRjX8gdbBQLm7OJc1RK0tHpmaG" alt="塩野義の国産初コロナ飲み薬「ゾコーバ」、厚労省が緊急承認…来 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 厚生労働省は２２日、塩野義製薬が開発した国産初の新型コロナウイルス感染症の飲み薬「ゾコーバ」を緊急承認した。迅速に審査するために５月に新設され&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221122/k10013900681000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【QAで】新型コロナ 塩野義飲み薬「ゾコーバ」効果や特長は？</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRG9hkMcGqUwVZ_fQQYEZJiqpKo6dOn2RRSDSZDqX-P_JkJRKgboHGW7No4T4V4ETL4DM0NMJms" alt="【QAで】新型コロナ 塩野義飲み薬「ゾコーバ」効果や特長は？" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】新型コロナウイルスの新たな飲み薬「ゾコーバ」について、厚生労働省は使用を承認しました。重症化リスクが低い患者も軽症の段階…</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOUA215AL0R21C22A1000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>コロナ飲み薬、軽症者も選択肢 塩野義が初の国産承認</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmSlGivm5hUaQ-Qw3JbS5EwKhEQMXHBCMX0Uoz1a_9ZEE0RwZAKg5-P2eWm-JZO544cWrJyxdX" alt="コロナ飲み薬、軽症者も選択肢 塩野義が初の国産承認" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【この記事のポイント】・基礎疾患のない低リスクの患者向けの薬は乏しかった・国内で製造するため輸入薬より安定供給しやすい見込み・有効性の審議が迅速とはいえず、&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}