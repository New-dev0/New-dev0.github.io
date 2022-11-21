import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Telemundo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Telemundo"/>
        <meta name="description" content="Trending News about Telemundo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Telemundo</h1>
            <Image width={800} height={500} src="https://ca-times.brightspotcdn.com/dims4/default/89c3dff/2147483647/strip/true/crop/3245x1704+0+924/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F96%2F0c%2F38c6e4ce4cc9bd580a0626bd5023%2F1200043-et-andres-cantor-2.jpg" alt="Telemundo"/>
            <h3>Recent News</h3>
            <a href='https://www.latimes.com/entertainment-arts/tv/story/2022-11-20/andres-cantor-world-cup-telemundo-goal-calls'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup: Meet &#39;goal!&#39; calling Telemundo star Andrés Cantor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTP0HiMQ7QZHj-_dw5RFy4OXNMCC903KzFtoIb4YsYYCDOqbOPE693qsGCtoCtRT_QKNDjdDVFw" alt="World Cup: Meet &#39;goal!&#39; calling Telemundo star Andrés Cantor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cantor&#39;s famously long goal call has become his calling card. But the Telemundo star, now covering his 12th World Cup, is a true student of the game.</p></div>
            </div>
        </a>
        </Template></>;
}