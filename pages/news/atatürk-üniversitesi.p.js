import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Atatürk Üniversitesi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Atatürk Üniversitesi"/>
        <meta name="description" content="Trending News about Atatürk Üniversitesi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Atatürk Üniversitesi</h1>
            <Image width={800} height={500} src="https://www.diyadinnet.com/d/news/33764.jpg" alt="Atatürk Üniversitesi"/>
            <h3>Recent News</h3>
            <a href='https://www.diyadinnet.com/ataturk-universitesi-nde-biyocesitliligi-koruma-calistayi-h33764/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atatürk Üniversitesi&#39;nde biyoçeşitliliği koruma çalıştayı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRpdvVdU3pMYaicWtGB9Za3pocuPwDGRiZNrfzxCPiveoXG5bf3qNjs9RmINubmKXhDq0xfWjFH" alt="Atatürk Üniversitesi&#39;nde biyoçeşitliliği koruma çalıştayı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Program çerçevesinde ilk olarak kürsüye çıkan DKMP 13. Bölge Müdürü Okan Gün; biyolojik çeşitliliğin oldukça fazla olduğu ülkemizde bu alana yönelik önemli&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}