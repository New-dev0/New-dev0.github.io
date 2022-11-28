import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eusebio</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eusebio"/>
        <meta name="description" content="Trending News about Eusebio" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eusebio</h1>
            <Image width={800} height={500} src="https://trivela.com.br/wp-content/uploads/2022/11/Eusebio-e1669546264754.jpg" alt="Eusebio"/>
            <h3>Recent News</h3>
            <a href='https://trivela.com.br/copa-do-mundo/a-historia-do-toronto-croatia-o-clube-canadense-fundado-por-croatas-que-foi-campeao-com-eusebio/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A história do Toronto Croatia, o clube canadense fundado por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSjmb1mp2ppXRlqlcLv7RPFfuXVXFQUTBIyxEeb705GWHAZ18O3OnyWWIhrHr15xSbiERWEq14H" alt="A história do Toronto Croatia, o clube canadense fundado por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Toronto Croatia integrou a NASL, principal liga da América do Norte nos anos 1970, e surpreendeu quando levou o título em 1976.</p></div>
            </div>
        </a>
        </Template></>;
}