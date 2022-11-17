import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Georgina rodríguez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Georgina rodríguez"/>
        <meta name="description" content="Trending News about Georgina rodríguez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Georgina rodríguez</h1>
            <Image width={800} height={500} src="https://i2-prod.mirror.co.uk/incoming/article22640187.ece/ALTERNATES/s1200/3_JS197805255.jpg" alt="Georgina rodríguez"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/sport/soccer/cristiano-ronaldo-georgina-rodriguez-wedding-28511055'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo details Georgina Rodriguez wedding intention ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ-lKogBNm2ETI2yyLtJphcXp04oNR7iUWQyJ-gYnkKhoaJQKcPEYU21gKweVk2Kar6HUsshSnh" alt="Cristiano Ronaldo details Georgina Rodriguez wedding intention ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo and Georgina Rodriguez have been partners for over five years and the Manchester United footballer opened up on his desire to get married&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}