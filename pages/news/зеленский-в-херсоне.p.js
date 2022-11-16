import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Зеленский в Херсоне</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Зеленский в Херсоне"/>
        <meta name="description" content="Trending News about Зеленский в Херсоне" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Зеленский в Херсоне</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/12889/production/_127631957_2022-11-14t092720z_1530916783_rc2llx9wmq4k_rtrmadp_3_ukraine-crisis-kherson-zelenskiy.jpg" alt="Зеленский в Херсоне"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/news-63622307'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фото дня: Зеленский в Херсоне спустя несколько дней после ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTPvMMsJw1rEfw6GVnaajCef7reX6btzLSxFPXEG4CviaL5M_oreknG1841k5FFuz6DxE86LFWs" alt="Фото дня: Зеленский в Херсоне спустя несколько дней после ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Украины Владимир Зеленский посетил Херсон спустя несколько дней после его освобождения украинскими войсками. Зеленский встретился с военными и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/zelenskiy-kherson-remarks/6833580.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленский в Херсоне: «Мы действительно возвращаемся, мы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTW_QFqiHlhubo05UZFS3UT0zBlBBiV0FRWV-U1MVHga1S8t5XPB7Orn0XK78Dw9tzvl8imZHTw" alt="Зеленский в Херсоне: «Мы действительно возвращаемся, мы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Украины заявил, что ему было важно посетить город, чтобы выразить поддержку жителям, пережившим российскую оккупацию.</p></div>
            </div>
        </a><a href='https://www.dp.ru/a/2022/11/14/Zelenskij_v_Hersone_zajav'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленский в Херсоне заявил, что украинская сторона готова к миру</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRpB93efTaXYzbPVFs5cnO455H25je16TczY0Z2ntmylaEUhQqdYz8-1DfsxWUnPFThHKa7QVHD" alt="Зеленский в Херсоне заявил, что украинская сторона готова к миру" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11 ноября украинский президент запретил журналистам въезжать в Херсон под предлогом разминирования, однако ряд СМИ, в том числе телеканалы CNN и Sky News, сняли&nbsp;...</p></div>
            </div>
        </a><a href='https://meduza.io/short/2022/11/14/vladimir-zelenskiy-priehal-v-herson-posle-osvobozhdeniya-goroda-fotografiya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Зеленский приехал в Херсон после освобождения ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSvwzD8Di6GLL1p-2-idJP1rdd4pRGUmN-HdrmRLTkuYLLOui16BtUde9o7rY87riA9f5DuS2sF" alt="Владимир Зеленский приехал в Херсон после освобождения ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Владимир Зеленский приехал в Херсон после освобождения города. Фотография. 01:54, 14 ноября 2022. Источник: Meduza.</p></div>
            </div>
        </a><a href='https://www.currenttime.tv/a/vecher-zelenskiy-v-hersone-i-molchanie-putina/32130648.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вечер: Зеленский в Херсоне, и молчание Путина</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9OmDGpvoeT6yN88xAu3C9l4r7aYXJgJSTCge7zvn_Twl295ulOiVC2rwUdPmvbwtULN2C2blm" alt="Вечер: Зеленский в Херсоне, и молчание Путина" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Херсоне возобновляют работу украинская администрация и полиция. Российская пропаганда оправдывает отступление из Херсона &quot;трудным решением&quot;.</p></div>
            </div>
        </a><a href='https://ura.news/news/1052603021'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленский приехал в Херсон, где Украина готовит расстрелы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxcWy_8fFFH7rRt-ckbHEgvGTWOtGO2bmncCq7VAEDIN42zy8sqdHJ1ppr5iw8A3vARTBaQuWG" alt="Зеленский приехал в Херсон, где Украина готовит расстрелы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Украины Владимир Зеленский посетил Херсон. Вооруженные силы Украины (ВСУ) готовятся к расстрелу мирных жителей в городе. URA.</p></div>
            </div>
        </a>
        </Template></>;
}