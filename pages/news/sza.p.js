import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SZA</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SZA"/>
        <meta name="description" content="Trending News about SZA" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SZA</h1>
            <Image width={800} height={500} src="https://www.tsugi.fr/wp-content/uploads/2022/12/montagephoto.jpg" alt="SZA"/>
            <h3>Recent News</h3>
            <a href='https://www.tsugi.fr/sza-nina-hagen-kelvin-momo-les-projets-de-la-semaine/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SZA, Nina Hagen, Kelvin Momo… les projets de la semaine</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSwlfSP3CevTtcLzU7OqVnu-SenWS1QWu06rHeZguR15g4qk-JrBIhqxPaQ8eXOVwmASSkPVcTS" alt="SZA, Nina Hagen, Kelvin Momo… les projets de la semaine" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cette semaine, entre RnB, house, new wave et techno, notre sélection d&#39;albums et d&#39;EPs passe par tous les genres musicaux !</p></div>
            </div>
        </a>
        </Template></>;
}