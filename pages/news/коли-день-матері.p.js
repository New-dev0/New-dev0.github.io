import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Коли День матері</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Коли День матері"/>
        <meta name="description" content="Trending News about Коли День матері" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Коли День матері</h1>
            <Image width={800} height={500} src="https://static.apostrophe.ua/uploads/image/2f5b1ed1d400d65701a2bbb9f7d9f072.jpg" alt="Коли День матері"/>
            <h3>Recent News</h3>
            <a href='https://apostrophe.ua/ua/news/society/2022-11-27/den-materi-v-ukraine-chto-vajno-pomnit-pro-datu-prazdnika/284786'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День матері в Україні: що важливо пам&#39;ятати про дату свята</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYCi7nO4Uc5nN5zPL-8VwkAdc2dsMwZaOUxkG1ZognirgRhXCOgSriBEBRx__zkKFwsDp0nkS_" alt="День матері в Україні: що важливо пам&#39;ятати про дату свята" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Україні, як і в багатьох європейських країнах, День матері щорічно святкують у другу неділю травня, про що свідчить указ президента від 10 травня 1999&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}