import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>AFG vs SL</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,AFG vs SL"/>
        <meta name="description" content="Trending News about AFG vs SL" /></Head><Template>
            <h1 style={{fontSize: "30"}}>AFG vs SL</h1>
            <Image width={800} height={500} src="https://images.news18.com/telugu/uploads/2022/11/FotoJet-2022-11-27T215742.782-166956667216x9.jpg" alt="AFG vs SL"/>
            <h3>Recent News</h3>
            <a href='https://telugu.news18.com/news/sports/afg-vs-sl-2nd-odi-live-scores-afghanistan-vs-sri-lanka-2nd-odi-called-off-due-to-rain-sjn-1519598.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AFG vs SL 2nd ODI : వర్షంతో రద్దయిన మరో మ్యాచ్.. పాపం శ్రీలంక ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXMva6ZrPb3rOMwtu714LoWNjGuJfomFqMwhP54kAh87n-3k0TXgP7bufNON-rQpC9gHxQEx9q" alt="AFG vs SL 2nd ODI : వర్షంతో రద్దయిన మరో మ్యాచ్.. పాపం శ్రీలంక ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AFG vs SL 2nd ODI Live Scores Afghanistan vs sri lanka 2nd odi called off due to rain sjn | AFG vs SL 2nd ODI : బ్లాక్ బస్టర్ లా&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}