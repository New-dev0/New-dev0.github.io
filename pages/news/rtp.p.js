import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>RTP</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,RTP"/>
        <meta name="description" content="Trending News about RTP" /></Head><Template>
            <h1 style={{fontSize: "30"}}>RTP</h1>
            <Image width={800} height={500} src="https://cdn-images.rtp.pt/EPG/radio/imagens/7581_11492_17674.jpg?v=3&w=860" alt="RTP"/>
            <h3>Recent News</h3>
            <a href='https://www.rtp.pt/play/p10680/e653140/infinito-particular'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Infinito Particular de 20 Nov 2022 - RTP Play - RTP</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2LZf9L_c5bJZYoU1vgCIeMX4swIErImJE_VxKyG2MAROrzlFtTKpVDSEGgRLZ0t2GfjJuXT06" alt="Infinito Particular de 20 Nov 2022 - RTP Play - RTP" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ruy de Carvalho - Tem 95 anos e 80 foram passados no palco. Gentil como poucos, valoriza o trabalho acima de tudo. De memória invejável, diz que é.</p></div>
            </div>
        </a>
        </Template></>;
}