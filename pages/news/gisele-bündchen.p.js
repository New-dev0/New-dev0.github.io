import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gisele Bündchen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gisele Bündchen"/>
        <meta name="description" content="Trending News about Gisele Bündchen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gisele Bündchen</h1>
            <Image width={800} height={500} src="https://i3-img.p7s1.io/pis/ezone/7b3dqgELBzZ_waV9V4ynsPl9Xpy8O3hdBAAnB4xBz8uPrDYBN87FOkBTejHZBgKHYY-Hh6dJarwcKeqH0hAFuvG4gnkjuvfFta-eYqwPmVaWH3MHNpikhjR1iiLk4Y_yR6dG_qKczpMMXYrNBCEF9IBXDDsI2uugTuKPdeJWkw2SGbgwYYHf/profile:ezone-teaser620x348?source" alt="Gisele Bündchen"/>
            <h3>Recent News</h3>
            <a href='https://www.ran.de/us-sport/nfl/video/techtelmechtel-mit-buendchen-antonio-brown-heizt-spekulationen-an-clip'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL - Techtelmechtel mit Bündchen? Antonio Brown heizt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS2ygDTD_7cA9mnYIzYMeZcDwgppvL8A4O7QDIfTbmQj2mIjzth0M4bJy7BC13OCQTMSxbP4D4X" alt="NFL - Techtelmechtel mit Bündchen? Antonio Brown heizt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-Profi Antonio Brown fügt seiner Skandal-Akte ein neues Kapitel zu. Wieder trifft es Tom Brady und Familie. Via Social Media postete AB einen Selfie aus&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}