import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Beatrice Egli</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Beatrice Egli"/>
        <meta name="description" content="Trending News about Beatrice Egli" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Beatrice Egli</h1>
            <Image width={800} height={500} src="https://www.derwesten.de/wp-content/uploads/sites/8/2022/11/ross-anthony-florian-silbereisen-beatrice-egli.jpg" alt="Beatrice Egli"/>
            <h3>Recent News</h3>
            <a href='https://www.derwesten.de/panorama/promi-tv/ross-antony-show-florian-silbereisen-beatrice-egli-id300130661.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ross Antony spricht Klartext über Florian Silbereisen und Beatrice ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyr_omGoviVY09nqHtVP2jQHxfK9uaL5xPVLU3JPkNlT6Cj8U5lb6egTem4wAPA735RZd9_7b0" alt="Ross Antony spricht Klartext über Florian Silbereisen und Beatrice ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wie gut verstehen sich die Schlagerstars wirklich? Ross Antony enthüllt, was die Zuschauer nur erahnen können.</p></div>
            </div>
        </a>
        </Template></>;
}