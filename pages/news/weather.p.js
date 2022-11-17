import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Weather</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Weather"/>
        <meta name="description" content="Trending News about Weather" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Weather</h1>
            <Image width={800} height={500} src="" alt="Weather"/>
            <h3>Recent News</h3>
            <a href='https://www.finanzen.net/nachricht/cfd/natural-gas-prices-rise-as-winter-weather-forecasts-see-cold-setting-in-11913560'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Natural gas prices rise as winter weather forecasts see cold setting in</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Natural gas prices rise as winter weather forecasts see cold setting in" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>thyssenkrupp-Personalvorstand erhält Vertragsverlängerung. S&amp;P sieht besseren Ausblick für Mercedes-Benz. Airbnb will Vermietern Einstieg erleichtern. CureVac&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}