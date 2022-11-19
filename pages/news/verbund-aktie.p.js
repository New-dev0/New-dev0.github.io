import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Verbund-Aktie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Verbund-Aktie"/>
        <meta name="description" content="Trending News about Verbund-Aktie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Verbund-Aktie</h1>
            <Image width={800} height={500} src="https://media.diepresse.com/social_diepresse_magazin_paid/images/uploads_1200/e/c/b/6217419/D40B5425-789E-4B30-B9FB-ABB9A6F01E0C_v1_l.jpg" alt="Verbund-Aktie"/>
            <h3>Recent News</h3>
            <a href='https://www.diepresse.com/6217419/turbulente-zeiten-fuer-die-verbund-aktie-wie-viel-einfluss-hat-die-politik'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turbulente Zeiten für die Verbund-Aktie: Wie viel Einfluss hat die ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQK3BkiiTPWWHYTH4a_118JvXv8BmP_nuyBVg6Nr1fcTfxWjCcWLjO6kGi7L674JVbANo_5doov" alt="Turbulente Zeiten für die Verbund-Aktie: Wie viel Einfluss hat die ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Kurse der Verbund-Aktien stiegen nach Beschluss der Gewinnsteuer stark. Wie viel Einfluss hat die Politik?</p></div>
            </div>
        </a>
        </Template></>;
}