import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Max Müller</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Max Müller"/>
        <meta name="description" content="Trending News about Max Müller" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Max Müller</h1>
            <Image width={800} height={500} src="https://images.bstatic.de/xOxrjT-UWsL9wZHVHQkaPC5738s=/1200x630/filters:focal(621.5x406:641.5x426)/images/b71b6f82/03d1/4974/883e/e679e83e0f66.jpg" alt="Max Müller"/>
            <h3>Recent News</h3>
            <a href='https://www.bunte.de/entertainment/tv-serien/die-rosenheim-cops/rosenheim-cops-star-max-mueller-ohne-rosenheim-cops-michi-darsteller-bald-in-ard.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Rosenheim-Cops&quot;-Star: Max Müller ohne &quot;Rosenheim Cops ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSprlXlBUUyVjNrnZrZaqkO3LdD-NWt1CX2X0nCwOnHjZytxnRIQcUYgswveiFojfuzgxY8o5ln" alt="&quot;Rosenheim-Cops&quot;-Star: Max Müller ohne &quot;Rosenheim Cops ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Routiniert löst Max Müller als Michi Mohr mit den &quot;Rosenheim-Cops&quot; knifflige Fälle. Demnächst zeigt der Schauspieler sich einmal mehr von (s)einer ganz&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}