import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>De ferias com o Ex</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,De ferias com o Ex"/>
        <meta name="description" content="Trending News about De ferias com o Ex" /></Head><Template>
            <h1 style={{fontSize: "30"}}>De ferias com o Ex</h1>
            <Image width={800} height={500} src="https://www.ofuxico.com.br/wp-content/uploads/2022/11/2-18.jpg" alt="De ferias com o Ex"/>
            <h3>Recent News</h3>
            <a href='https://www.ofuxico.com.br/reality-show/realities-de-pegacao-mais-quentes-da-tv/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Os 6 realities de pegação mais quentes da televisão. Veja!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSzRiswWh0lWmlAWCIXeThfZudrcNa1KKrW3l0Vj_W_j5g6_GiN37SBGZ_prIgntOsCGlJonPh0" alt="Os 6 realities de pegação mais quentes da televisão. Veja!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Verão está chegando e com ele, festas, férias, curtição, praias e o calor tropical que só o Brasil tem. É o ambiente perfeito para muita pegação,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}