import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Grávida morre Caldas da Rainha</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Grávida morre Caldas da Rainha"/>
        <meta name="description" content="Trending News about Grávida morre Caldas da Rainha" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Grávida morre Caldas da Rainha</h1>
            <Image width={800} height={500} src="https://cdn.cmjornal.pt/images/2022-11/img_1200x676$2022_11_17_21_11_13_1208308.jpg" alt="Grávida morre Caldas da Rainha"/>
            <h3>Recent News</h3>
            <a href='https://www.cmjornal.pt/sociedade/detalhe/gravida-que-morre-no-hospital-das-caldas-da-rainha-tinha-sofrido-acidente-de-viacao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grávida que morreu no Hospital das Caldas da Rainha tinha sofrido ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRCtLeN2_E-zueFDULqBnbjyuZzALJSJ7yUDmIR_jitkidwZhGu9pGSgwkZDCiCVy0lESNaTtm-" alt="Grávida que morreu no Hospital das Caldas da Rainha tinha sofrido ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mulher de 35 anos que morreu à chegada ao hospital esteve envolvida em desastre há cerca de duas semanas.</p></div>
            </div>
        </a>
        </Template></>;
}