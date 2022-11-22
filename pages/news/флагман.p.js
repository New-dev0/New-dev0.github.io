import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Флагман</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Флагман"/>
        <meta name="description" content="Trending News about Флагман" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Флагман</h1>
            <Image width={800} height={500} src="https://appleinsider.ru/wp-content/uploads/2022/11/huawei_mate_50_camera_head-800x526.jpg" alt="Флагман"/>
            <h3>Recent News</h3>
            <a href='https://appleinsider.ru/eto-interesno/kitajskij-flagman-bez-servisov-gugl-snimaet-luchshe-iphone-14-pro-max.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Китайский флагман без сервисов Гугл снимает лучше iPhone 14 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSqEiRb5XqEcHgwzB4c3bZHKBuEn_A8kH4zw-8LQswejNoFVWGbZl90b1lD7876Uc00Lt_FjG0x" alt="Китайский флагман без сервисов Гугл снимает лучше iPhone 14 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Новый флагман Huawei Mate 50 Pro только недавно был анонсирован, а уже обошел в фототесте iPhone 14 Pro Max и Samsung Galaxy S22 Ultra.</p></div>
            </div>
        </a>
        </Template></>;
}