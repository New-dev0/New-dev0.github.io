import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tsubasa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tsubasa"/>
        <meta name="description" content="Trending News about Tsubasa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tsubasa</h1>
            <Image width={800} height={500} src="https://img.r7.com/images/alemanha-x-japao-copa-junya-ito-e-david-raum-23112022110359475?crop_position=c&dimensions=340x191" alt="Tsubasa"/>
            <h3>Recent News</h3>
            <a href='https://esportes.r7.com/futebol/copa-do-mundo/ben-10-x-captain-tsubasa-alemanha-e-japao-fazem-duelo-de-desenhos-23112022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Ben 10&#39; x &#39;Captain Tsubasa&#39;: Alemanha e Japão fazem duelo de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQiFhT9ik_pu7SfTR_O3M2Q_3_uw-W7Kb2yJ3jbHfceHFGZE8X1iS84ki1lPd8DjEVfz-ZCczva" alt="&#39;Ben 10&#39; x &#39;Captain Tsubasa&#39;: Alemanha e Japão fazem duelo de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>tsubasa ozora e mamoru endo, os dois grandes craques da seleção japonesa que são desfalques nessa copa do mundo. seria mágico vê-los jogar.</p></div>
            </div>
        </a>
        </Template></>;
}