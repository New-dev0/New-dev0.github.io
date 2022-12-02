import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Курск</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Курск"/>
        <meta name="description" content="Trending News about Курск" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Курск</h1>
            <Image width={800} height={500} src="https://riakursk.ru/assets/cache_image/uploads/2022/11/ihwyzalmovs_500x300_8a8.jpg" alt="Курск"/>
            <h3>Recent News</h3>
            <a href='https://riakursk.ru/v-kurske-prodolzhayut-borotsya-s-reklamoy-narkotikov/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Курске продолжают бороться с рекламой наркотиков - РИА Курск</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSyGHsD48P7lS4-KGDGBGRrEIAGikL8Xvf_9yDIvzFBsYfXbJWsnPJ1e0uZGhxzd_6qseDUR6Lh" alt="В Курске продолжают бороться с рекламой наркотиков - РИА Курск" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Курске на стенах жилых домов и на ограждениях продолжает появляться все новая рекламная информация наркотической направленности. Продолжается и борьба с этим&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}