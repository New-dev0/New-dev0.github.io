import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>インボイス</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,インボイス"/>
        <meta name="description" content="Trending News about インボイス" /></Head><Template>
            <h1 style={{fontSize: "30"}}>インボイス</h1>
            <Image width={800} height={500} src="https://image.itmedia.co.jp/news/articles/2211/18/cover_news074.jpg" alt="インボイス"/>
            <h3>Recent News</h3>
            <a href='https://www.itmedia.co.jp/news/articles/2211/18/news074.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インボイス制度、中小事業者の税負担和らげる激変緩和措置を検討</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR79QEuIr-WGzEO9JOaoeayo9DAIdTQeyDSEwUgyUykF2lYNhv6O4q3TK-R4ZCE5RYVKqeKmPFc" alt="インボイス制度、中小事業者の税負担和らげる激変緩和措置を検討" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フリーランスなど中小事業者から反対の声の多いインボイス制度について、政府・与党が税負担を和らげる激変緩和措置の導入を検討している。11月17日に共同通信が伝えた&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/645fc36e1b4c8254fa0e89655c3a5795afd8206a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インボイス、中小に激変緩和措置 負担増で、23年度税制改正（共同 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT32EqsCHmkDPvM-jqNQ0LSTBOJvSBqhQ2OS1DosIw_IMFreHodAP1jTsP18Bxj0GthHobUKtPb" alt="インボイス、中小に激変緩和措置 負担増で、23年度税制改正（共同 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>政府、与党が来年10月のインボイス（適格請求書）制度導入で消費税を新たに納めることを選んだ中小事業者に対し、税負担を和らげる激変緩和措置の導入を検討している&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQCK6T92QCKULFA01V.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「インボイス導入へ負担軽減策を検討」 公明党税調会長が表明</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQtXtFmZhhE5NaQntPYVAHdnx8WyVqLg6xJ6NmllrglLJR04WF4lIQtWewVjvpQ49ySehP9F8YN" alt="「インボイス導入へ負担軽減策を検討」 公明党税調会長が表明" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>来年10月に導入される消費税のインボイス制度をめぐり、公明党の西田実仁（まこと）・税制調査会長は17日、小規模事業者の税負担を軽減する措置を検討する考えを示した&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOUA17CNT0X11C22A1000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>インボイス導入「税負担増を最小化」 公明党税調会長</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTzaq2pNuUheNau_WJXpb3l8ImE2KLi0spVAQyEZF6A56xc-sOeR-PMY2fgz_XZ7Oy15VnbpK4b" alt="インボイス導入「税負担増を最小化」 公明党税調会長" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>公明党の西田実仁税制調査会長は17日、2023年10月に始まる消費税のインボイス（適格請求書等保存方式）制度導入に向けた小規模事業者への支援に意欲を示した。</p></div>
            </div>
        </a><a href='https://nordot.app/965933793537245184'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>政府、与党がインボイスで激変緩和措置 ｜ 共同通信</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="政府、与党がインボイスで激変緩和措置 ｜ 共同通信" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>政府、与党が来年10月のインボイス制度導入で消費税を新たに納めることを選んだ中小事業者に対し、税負担を和らげる激変緩和措置の導入を検討していることが17日、分かった&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}