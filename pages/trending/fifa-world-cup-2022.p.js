import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFA World Cup 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFA World Cup 2022"/>
        <meta name="description" content="Trending News about FIFA World Cup 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFA World Cup 2022</h1>
            <Image width={800} height={500} src="https://images.news18.com/telugu/uploads/2022/04/FotoJet-2022-04-02T142619.175-164888989116x9.jpg" alt="FIFA World Cup 2022"/>
            <h3>Recent News</h3>
            <a href='https://telugu.news18.com/news/sports/fifa-world-cup-2022-fifa-released-2022-foot-ball-world-cup-draw-sjn-1453974.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 : ఆ దిగ్గజ ప్లేయర్లకు ఇదే ఆఖరి ప్రపంచకప్.. ఫుట్ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTkhsC5kDHy3D1yYA-h5xQlfKyQv1hvp0bD33LmjshNnAUeBKnaMlmNTXOwcQYRZ-jiHds8PqiY" alt="FIFA World Cup 2022 : ఆ దిగ్గజ ప్లేయర్లకు ఇదే ఆఖరి ప్రపంచకప్.. ఫుట్ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>fifa world cup 2022 fifa released 2022 foot ball world cup draw sjn | FIFA World Cup 2022: ఫుట్ బాల్ (Football) ప్రియులకు శుభవార్త.</p></div>
            </div>
        </a>
        </Template></>;
}