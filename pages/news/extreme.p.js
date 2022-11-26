import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Extreme</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Extreme"/>
        <meta name="description" content="Trending News about Extreme" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Extreme</h1>
            <Image width={800} height={500} src="https://www.f1mania.net/wp-content/uploads/2022/11/Circuito-Punta-2.jpg" alt="Extreme"/>
            <h3>Recent News</h3>
            <a href='https://www.f1mania.net/formula-e/extreme-e/extreme-e-divulga-desenho-do-tracado-para-decisao-no-xprix-no-uruguai/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Extreme E divulga desenho do traçado para decisão no xPrix no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWhIuoeINV6B1IysCEgmbKNlD6zBt96xPl9BuMmCfZ_lR_i187g5k7jNAdEKUNHGCMGqgTvjGV" alt="Extreme E divulga desenho do traçado para decisão no xPrix no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Extreme E está a poucos dias da decisão da temporada 2022. Como preparação para o xPrix da Energia, que acontece neste final de semana no Uruguai, a.</p></div>
            </div>
        </a>
        </Template></>;
}