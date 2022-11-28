import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruce Lee</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruce Lee"/>
        <meta name="description" content="Trending News about Bruce Lee" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruce Lee</h1>
            <Image width={800} height={500} src="https://static.glamurama.uol.com.br/2022/11/315954698_141746628349572_5168719446541259540_n.jpg" alt="Bruce Lee"/>
            <h3>Recent News</h3>
            <a href='https://glamurama.uol.com.br/cultura-e-entretenimento/no-dia-em-que-bruce-lee-faria-82-anos-veja-8-curiosidades-sobre-o-rei-dragao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruce Lee faria 82 anos: veja 8 curiosidades sobre o &#39;rei dragão&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSffeO03t-wnQDlFoeCT_dBH8Ss_ZTpq8H_j1dh0J0mdo0yDCF8xybm20SDZtAGghl3965p-28D" alt="Bruce Lee faria 82 anos: veja 8 curiosidades sobre o &#39;rei dragão&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No dia em que Bruce Lee, o mestre das artes marciais, faria 82 anos, confira oito curiosidades sobre o &#39;rei dragão&#39;</p></div>
            </div>
        </a>
        </Template></>;
}