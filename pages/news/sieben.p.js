import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sieben</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sieben"/>
        <meta name="description" content="Trending News about Sieben" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sieben</h1>
            <Image width={800} height={500} src="https://www.noen.at/image/1920x1080-c-jpg/4275619/440_0008_8535641_erl48bezirk_goldenesehrenbuch_ortsgrupp.jpg" alt="Sieben"/>
            <h3>Recent News</h3>
            <a href='https://www.noen.at/erlauftal/auszeichnung-sieben-scheibbser-bauernfamilien-im-goldenen-ehrenbuch-bezirk-scheibbs-auszeichnung-noe-bauernbund-print-345234277'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sieben Scheibbser Bauernfamilien im Goldenen Ehrenbuch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBzzd8hygnsoEfP4mhKrX-vUhY7-HA5V0a2HuYGwxQpmbNQ5qZDmFJcYLzehFjHi0PzUq3egID" alt="Sieben Scheibbser Bauernfamilien im Goldenen Ehrenbuch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Goldene Ehrenbuch des NÖ Bauernbundes wurde 1929 vom ehemaligen Bauernbundobmann und dem NÖ Landeshauptmann Josef Reither ins Leben gerufen. Es vermerkt&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bvz.at/freizeit/kulinarik/cooking-grannies-oma-marias-punschkekse-stehen-bei-ihren-sieben-enkerln-hoch-im-kurs-oesterreich-alexander-falschlehner-blog-cooking-grannies-kochen-rezept-geheimrezept-345132496'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oma Marias Punschkekse stehen bei ihren sieben Enkerln hoch im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdCA6hlfgrgw4lLp0CGxF49yDufJgrrEeRLYOkjQDyvqIxJXvG4pkvwpJyn-7E-rfySDFlUe8O" alt="Oma Marias Punschkekse stehen bei ihren sieben Enkerln hoch im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zutaten (für 3 Blech Keks-Hälften): 270g glattes Weizenmehl 200g Butter 100g Staubzucker 130g Walnüsse 1 Eidotter 1TL Zimt ½ TL Backpulver. Zubereitung:.</p></div>
            </div>
        </a><a href='https://www.salzburg24.at/news/salzburg/die-sieben-nervigsten-weihnachtsgeschenke-130654111'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Die sieben nervigsten Weihnachtsgeschenke</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTuvVY8XbezbeiecvhxLt9muO1cMQZTjKnTNPBlCBx5pZQbTuH2Am2aCaxL5R-neqB48FVMqJa7" alt="Die sieben nervigsten Weihnachtsgeschenke" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Weihnachten steht vor der Tür und viele sind noch auf der Suche nach einem Geschenk. Dabei kann man ganz schön daneben greifen. Zum Beispiel wenn man eines&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}