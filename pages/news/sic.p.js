import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SIC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SIC"/>
        <meta name="description" content="Trending News about SIC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SIC</h1>
            <Image width={800} height={500} src="https://espalhafactos.com/wp-content/uploads/2022/11/FirwZb1WAAIVbdd.jpg" alt="SIC"/>
            <h3>Recent News</h3>
            <a href='https://espalhafactos.com/2022/12/02/sic-mantem-lideranca-mas-tvi-fica-a-apenas-quatro-decimas-de-distancia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SIC mantém liderança, mas TVI fica a apenas quatro décimas de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT3kFzqidXonCl6mICZ0VStZF5r-eP_gIgWHs5rF23sDbuDenJ8Ts2HSmq1LvPH8mKIXXbu06K-" alt="SIC mantém liderança, mas TVI fica a apenas quatro décimas de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A RTP1 foi o canal generalista que mais cresceu em novembro. Impulsionada pela transmissão de vários jogos do Mundial, incluindo o jogo de qualificação de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}