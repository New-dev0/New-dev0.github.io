import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Indonesia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Indonesia"/>
        <meta name="description" content="Trending News about Indonesia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Indonesia</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/expresso/2022-11-21-Casas-danificadas-pelo-sismo-em-Cianjur-ilha-Java-Indonesia.jpg-65013da2/1.91x1?wm=true&outputFormat=jpeg" alt="Indonesia"/>
            <h3>Recent News</h3>
            <a href='https://expresso.pt/internacional/2022-11-21-Sismo-na-Indonesia-numero-de-mortos-sobe-para-162-18557e5c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sismo na Indonésia: número de mortos sobe para 162</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTcUzBjYaTOpTHf9vs8moK-GzTZWQi6xIe-Xy7b_zNZiTij97O9uejCcjpmjK4NZEiD8rs4XYrX" alt="Sismo na Indonésia: número de mortos sobe para 162" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O balanço anterior das autoridades indonésias apontava para 56 vítimas mortais. Sismo no oeste da ilha indonésia de Java teve magnitude 5,6 na escala de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/internacional/pelo-menos-20-mortos-em-sismo-de-magnitude-54-na-indonesia-15371880.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pelo menos 162 mortos em sismo de magnitude 5,4 na Indonésia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT0g8rLiK4yyTJmciGv70wKHb_LCVdtHB6pDH-BwlQoAD6QZ_oy2-GWeUEKr-Z1dqxWbuzmuuez" alt="Pelo menos 162 mortos em sismo de magnitude 5,4 na Indonésia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Terramoto registou-se às 13:21 (06:21 em Lisboa) e teve epicentro a 16,7 quilómetros da cidade de Cianjur, que tem uma população de cerca de 170.000&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/21/cerca-de-20-mortos-e-mais-de-300-feridos-em-sismo-na-indonesia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sismo na Indonésia. 162 mortos, mais de 700 feridos e treze mil ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSyq_N4T2WitU3QZRQxxm0RmMWVlq1_ggnSftDWbi_awJPIQJYZDE_3tvl3FEyqJ-PRz5V_n62s" alt="Sismo na Indonésia. 162 mortos, mais de 700 feridos e treze mil ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Abalo de 5.6, com epicentro a 75 quilómetros da capital Jacarta, provocou a morte de 162 pessoas e deixou mais de 700 feridas. treze mil pessoas ficaram&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/mundo/numero-de-mortos-no-terramoto-na-indonesia-sobe-para-162_n1448552'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Número de mortos no terramoto na Indonésia sobe para 162</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRgnCZOeDl6bYr70CZHSbV7XurHVOXz5llqEj2f7Wuwz-xU9w6nshz8pgTsT5Yu1TDIUS34jLXR" alt="Número de mortos no terramoto na Indonésia sobe para 162" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aumentou para 162 o número de mortos no terramoto de magnitude 5,6 na escala de Richter que atingiu a principal ilha de Java, na Indonésia,&nbsp;...</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/mundo/2022-11-21-Sismo-de-5.6-registado-na-provincia-de-Java-na-Indonesia-226681a9'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sismo de 5.6 registado na província de Java, na Indonésia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZHonYXxL_cptcqrLyBD9APnTwqWvCNoln2KpzHsQTtn6EmvwH-yy81H0wYDYQBWf36E8vQhuF" alt="Sismo de 5.6 registado na província de Java, na Indonésia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De acordo com a agência Reuters, que cita o governador da região Ridwan Kamil, o último balanço de vítimas mortais do sismo é de 56 mortos, mais dez do que o&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/noticia/mundo/2022/11/21/sobe-para-162-o-numero-de-mortos-do-sismo-na-indonesia/308860/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sobe para 162 o número de mortos do sismo na Indonésia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRoDmLUwEZfa9v-sb8H0MstRAtQ7Adl59oCAosZXvLPS-MrJlej1uow6ebieAi-5x8dILlVC7HN" alt="Sobe para 162 o número de mortos do sismo na Indonésia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Abalo ocorreu às 13h21 (6h21 em Lisboa) e que o epicentro foi em Cianjur, na província de Java Ocidental, a cerca de 75 quilómetros de Jacarta.</p></div>
            </div>
        </a>
        </Template></>;
}