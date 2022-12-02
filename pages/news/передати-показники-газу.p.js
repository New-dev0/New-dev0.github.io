import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Передати показники газу</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Передати показники газу"/>
        <meta name="description" content="Trending News about Передати показники газу" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Передати показники газу</h1>
            <Image width={800} height={500} src="https://rayon.in.ua/storage/cache/images/upload/news/20/2022-12/01-NphZZxwM/700x371-6388762b2d457.jpg" alt="Передати показники газу"/>
            <h3>Recent News</h3>
            <a href='https://rayon.in.ua/news/557125-volingaz-startuvav-period-podachi-pokaznikiv-lichilnika-gazu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Волиньгаз»: стартував період подачі показників лічильника газу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzxei_MRD0BJhhoJAXSipEsQlUPEvkaA_P9Rm8ArKOAV7-GHyThXFeAvYw4PpwPZqNwVEkz6G7" alt="«Волиньгаз»: стартував період подачі показників лічильника газу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>АТ «Волиньгаз», що працює під брендом РГК, нагадує передачу показання лічильника газу з 1 по 5 грудня.</p></div>
            </div>
        </a>
        </Template></>;
}