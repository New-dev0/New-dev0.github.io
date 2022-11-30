import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hartwig Seeler</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hartwig Seeler"/>
        <meta name="description" content="Trending News about Hartwig Seeler" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hartwig Seeler</h1>
            <Image width={800} height={500} src="https://kulturnews.de/wp-content/uploads/2022/11/hartwig-seeler-gefahrliche-erinnerung.jpg" alt="Hartwig Seeler"/>
            <h3>Recent News</h3>
            <a href='https://kulturnews.de/hartwig-seeler-gefaehrliche-erinnerung-3sat/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Hartwig Seeler – Gefährliche Erinnerung“ auf 3sat</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQpy3t5nX3eNpI_nyj3qB6Q4OeR3yAwV7xPkcgfBf8AnOlABKmu0h7YTZDretG5WeOx0k3hDINA" alt="„Hartwig Seeler – Gefährliche Erinnerung“ auf 3sat" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im ersten Teil der Reihe sucht Felix Koeberlin als trauriger Detektiv nach einer vermissten Frau – und dem eigenen Seelenfrieden.</p></div>
            </div>
        </a><a href='https://www.news.de/tv-aktuell/856618200/hartwig-seeler-am-dienstag-verpasst-gefaehrliche-erinnerung-wiederholung-online-in-der-3sat-mediathek-und-im-tv/1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Hartwig Seeler&quot; bei 3sat nochmal sehen: &quot;Gefährliche Erinnerung ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDy6-9JryYdX1yp22fuE0_8NmUR-tokvUdPONRKThd3-odE-IaOv_OYdveMH8eQxX3q8WEq_lN" alt="&quot;Hartwig Seeler&quot; bei 3sat nochmal sehen: &quot;Gefährliche Erinnerung ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am 29.11.2022 (Dienstag) zeigte 3sat den Spielfilm &quot;Hartwig Seeler&quot; von Johannes Fabrick im TV. Wann und wo &quot;Gefährliche Erinnerung&quot; noch einmal gezeigt&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}