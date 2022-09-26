import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jersey</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jersey"/>
        <meta name="description" content="Trending News about Jersey" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jersey</h1>
            <Image width={800} height={500} src="https://www.aljazeera.com/wp-content/uploads/2022/09/2014-07-08T120000Z_968461956_GM1EA79072W01_RTRMADP_3_BRAZIL-WORLDCUP.jpg?resize=1920%2C1440" alt="Jersey"/>
            <h3>Recent News</h3>
            <a href='https://www.aljazeera.com/sports/2022/9/26/brazil-football-fans-ditching-the-famous-yellow-jersey'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Brazilian football fans are ditching the yellow jersey</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJuOJP3Y-LJl082WLcUzH1bDvKPtIsP7Q5uPu6zA0hmhrVskXXGsV_NMT6D-JpXyNX1GSQo9rV" alt="Why Brazilian football fans are ditching the yellow jersey" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Once an icon of unity and luck, the shirt&#39;s association with Brazil&#39;s far right has led football fans to give up on it.</p></div>
            </div>
        </a>
        </Template></>;
}