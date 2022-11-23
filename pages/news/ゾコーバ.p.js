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
            <Image width={800} height={500} src="https://www.yomiuri.co.jp/media/2022/11/20221122-OYT1I50167-T.jpg?type=ogp" alt="ゾコーバ"/>
            <h3>Recent News</h3>
            <a href='https://www.yomiuri.co.jp/national/20221122-OYT1T50237/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>塩野義の国産初コロナ飲み薬「ゾコーバ」、厚労省が緊急承認…来 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSFuhRR9GTWgJ9GNLfXMqWcYLBm537fZCdEAMtkqHxbczQLpUoRjX8gdbBQLm7OJc1RK0tHpmaG" alt="塩野義の国産初コロナ飲み薬「ゾコーバ」、厚労省が緊急承認…来 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 厚生労働省は２２日、塩野義製薬が開発した国産初の新型コロナウイルス感染症の飲み薬「ゾコーバ」を緊急承認した。迅速に審査するために５月に新設され&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221122/k10013900681000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【QAで詳しく】新型コロナ 飲み薬「ゾコーバ」 効果や特長は？</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ__vt5eyfNc1ZBqyt4xrhIFrivY6CUzoEmx2Ek2n-sBKVtRKC0ix_HGpwruidbuUYN31GX1M6V" alt="【QAで詳しく】新型コロナ 飲み薬「ゾコーバ」 効果や特長は？" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】新型コロナウイルスの新たな飲み薬「ゾコーバ」について、厚生労働省は使用を承認しました。重症化リスクが低い患者も軽症の段階…</p></div>
            </div>
        </a><a href='https://www.shionogi.com/jp/ja/news/2022/11/20221122.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新型コロナウイルス感染症（COVID-19）治療薬「ゾコーバR錠 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="新型コロナウイルス感染症（COVID-19）治療薬「ゾコーバR錠 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>また、本年３月に厚生労働省との間で締結した本剤の国内供給に関する基本合意書<sup>1</sup>に基づき、日本政府が100万人分を購入する売買契約を別途締結しておりますことを併せて&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOUA215CG0R21C22A1000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>塩野義のコロナ飲み薬を緊急承認 「ゾコーバ」国産初</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmSlGivm5hUaQ-Qw3JbS5EwKhEQMXHBCMX0Uoz1a_9ZEE0RwZAKg5-P2eWm-JZO544cWrJyxdX" alt="塩野義のコロナ飲み薬を緊急承認 「ゾコーバ」国産初" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>厚生労働省は22日、塩野義製薬が開発した新型コロナウイルス治療薬「ゾコーバ」を緊急承認した。専門家分科会が症状改善を早める有効性を推定できると判断した。</p></div>
            </div>
        </a><a href='https://www.m3.com/news/iryoishin/1096480'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>塩野義のコロナ経口薬「ゾコーバ」緊急承認</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtozez04Q5LHslzKfkhe5MREe79RWPjfKME7ln-bfqtPVxqo6d9xTFMiLnqGM1l9AO8C8bPWEt" alt="塩野義のコロナ経口薬「ゾコーバ」緊急承認" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>厚生労働省の薬事・食品衛生審議会の薬事分科会と医薬品第二部会の合同部会（分科会長：太田茂・和歌山県立医科大学薬学部教授）は11月22日、新型コロナウイルス感染&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mixonline.jp/tabid55.html?artid=73949'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>厚労省 経口新型コロナ治療薬・ゾコーバを緊急承認 重症化リスク ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRery2Z4V293FhVwcvUH2Pz-F9BJ0f3at3dEG4rmOPJbDHHTqSmSxmjKhX44htq5IfscUvohVzC" alt="厚労省 経口新型コロナ治療薬・ゾコーバを緊急承認 重症化リスク ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>厚生労働省は11月22日、塩野義製薬の経口新型コロナウイルス感染症治療薬・ゾコーバ錠125mg（一般名：エンシトレルビル フマル酸）を緊急承認した。同日開催の薬食審の&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}