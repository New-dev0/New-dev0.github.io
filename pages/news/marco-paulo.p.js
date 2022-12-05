import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marco Paulo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marco Paulo"/>
        <meta name="description" content="Trending News about Marco Paulo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marco Paulo</h1>
            <Image width={800} height={500} src="https://www.atelevisao.com/wp-content/uploads/2022/06/marco-paulo.jpg" alt="Marco Paulo"/>
            <h3>Recent News</h3>
            <a href='https://www.atelevisao.com/famosos/marco-paulo-revela-fui-um-menino-que-saiu-do-alentejo-descalco/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marco Paulo revela: &quot;Fui um menino que saiu do Alentejo descalço...&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBcgCGYeNPFVAU-cD8W3QBwXFJH0Boaok_IM45lJrwODo16woKlaKiLEIkwb869FkPp-GzW9de" alt="Marco Paulo revela: &quot;Fui um menino que saiu do Alentejo descalço...&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marco Paulo deu uma entrevista ao Correio da Manhã onde falou sobre as suas origens e como tudo começou até ser artista. O cantor tinha apenas cinco anos.</p></div>
            </div>
        </a>
        </Template></>;
}