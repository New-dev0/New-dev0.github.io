import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFA World Cup</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFA World Cup"/>
        <meta name="description" content="Trending News about FIFA World Cup" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFA World Cup</h1>
            <Image width={800} height={500} src="https://phantom-marca.unidadeditorial.es/3a841b93dedcbf417143a86752693a83/resize/1200/f/jpg/assets/multimedia/imagenes/2022/11/20/16689029288602.jpg" alt="FIFA World Cup"/>
            <h3>Recent News</h3>
            <a href='https://www.marca.com/en/world-cup/2022/11/20/6379674422601d8c608b4593.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema joins list of unluckiest players in FIFA World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQVxhXORUqYnCvdtlrRFiy8vh2UF84DBCggFpjP9pB79eLo7YvB9NIXsQVcMBCdA7GVLMfPBzoj" alt="Karim Benzema joins list of unluckiest players in FIFA World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karim Benzema is not the only unlucky star who suffered with his national team. The FIFA World Cup has a select list of names who are considered football&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}