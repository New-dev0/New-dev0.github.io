import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>United States Mens National Soccer Team</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,United States Mens National Soccer Team"/>
        <meta name="description" content="Trending News about United States Mens National Soccer Team" /></Head><Template>
            <h1 style={{fontSize: "30"}}>United States Mens National Soccer Team</h1>
            <Image width={800} height={500} src="https://imagez.tmz.com/image/ef/16by9/2022/12/01/efe3c60aae294403917a154e5bf51a1c_xl.jpg" alt="United States Mens National Soccer Team"/>
            <h3>Recent News</h3>
            <a href='https://www.tmz.com/2022/12/03/team-usa-world-cup-abs-soccer-guess-who/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Team USA&#39;s World Cup Abs -- Guess Who!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROfOKrmTl0N3QgVZK3eRKPftUdU5upagvwZew-lP5G5sJByg7R2lI_ChqOglqZhRlpqPAiIock" alt="Team USA&#39;s World Cup Abs -- Guess Who!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Soccer players are known for having powerful, durable legs -- but wait &#39;til you get a load of the United States Men&#39;s National Soccer Team&#39;s abs ... they&#39;re&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}