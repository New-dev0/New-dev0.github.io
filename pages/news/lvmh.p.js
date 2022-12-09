import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>LVMH</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,LVMH"/>
        <meta name="description" content="Trending News about LVMH" /></Head><Template>
            <h1 style={{fontSize: "30"}}>LVMH</h1>
            <Image width={800} height={500} src="https://omskzdes.ru/storage/c/2022/12/08/1670499607_771615_69.jpg" alt="LVMH"/>
            <h3>Recent News</h3>
            <a href='https://omskzdes.ru/society/79876.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Казачий диктант, Владимир Гуржей и LVMH. Что ищут омичи в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTn2Ry-_D29NSqZCPCY92slOOfnlA46YUa7fM3sIna4L_tP4Ap2zr0_aiRbeeKd9JpUiRN8O3vz" alt="Казачий диктант, Владимир Гуржей и LVMH. Что ищут омичи в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рассказываем о самых актуальных поисковых запросах в интернете среди жителей нашего региона. В данной рубрике мы рассказываем о темах, которые интересовали&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}