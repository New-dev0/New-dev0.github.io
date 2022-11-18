import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mundial Qatar 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mundial Qatar 2022"/>
        <meta name="description" content="Trending News about Mundial Qatar 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mundial Qatar 2022</h1>
            <Image width={800} height={500} src="https://www.jm-madeira.pt/file/index/noticias/190537/63767b6d5e6a6.jpg" alt="Mundial Qatar 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.jm-madeira.pt/desporto/ver/190537/Victor_Gomes_vai_mesmo_deixar_a_arbitragem_apos_o_Mundial_Qatar_2022%C2%A0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Victor Gomes vai mesmo deixar a arbitragem após o Mundial Qatar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcNKYDmiPuqceAt1ZSkqpRiftB5rpd5lRyauPct_Dwi3_ouEACruktIgK2kCBT4f3h3UuT3P3m" alt="Victor Gomes vai mesmo deixar a arbitragem após o Mundial Qatar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O árbitro internacional sul-africano, que tem as suas raízes na Ilha da Madeira, já se encontra no Qatar, com os restantes colegas que foram nomeados pela FIFA&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}