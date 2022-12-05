import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Highest goal scorer in the World</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Highest goal scorer in the World"/>
        <meta name="description" content="Trending News about Highest goal scorer in the World" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Highest goal scorer in the World</h1>
            <Image width={800} height={500} src="https://www.nationalworld.com/jpim-static/image/2022/12/04/12/GettyImages-1245305832.jpg?width=1200&enable=upscale" alt="Highest goal scorer in the World"/>
            <h3>Recent News</h3>
            <a href='https://www.nationalworld.com/sport/football/world-cup/france-all-time-top-goal-scorer-3941280'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is France&#39;s all-time top goal scorer? Is it Thierry Henry, has ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTH7eR6pTSl2cD3IxibJd3n0xz5oRzz1ZVl6NbRRk3Ai_ff21kLtFL1cnv1Ja7c2xJvHHe58LVX" alt="Who is France&#39;s all-time top goal scorer? Is it Thierry Henry, has ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AC Milan striker Oliver Giroud is now top of the illustrious list of top goalscorers for France after scoring 52 goals in 117 international appearances. The 36-&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}