import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Juliette Binoche</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Juliette Binoche"/>
        <meta name="description" content="Trending News about Juliette Binoche" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Juliette Binoche</h1>
            <Image width={800} height={500} src="https://static1.purepeople.com/articles/8/50/03/88/@/7282303-juliette-binoche-et-benoit-magimel-a-la-opengraph_1200-3.jpg" alt="Juliette Binoche"/>
            <h3>Recent News</h3>
            <a href='https://www.purepeople.com/article/juliette-binoche-et-les-peres-de-ses-enfants-andre-halle-et-benoit-magimel-ii-y-a-des-choses-qui-passent-mal_a500388/1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Juliette Binoche et les pères de ses enfants, André Hallé et Benoît ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT-j72cv3w7AnIjfJJSXap4uTQORuWPN539lcbv0fOZWl7Ha6Jh84CSPGCEzBKgl4BULSxvwwvs" alt="Juliette Binoche et les pères de ses enfants, André Hallé et Benoît ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France 3 diffuse ce lundi 21 novembre Celle que vous croyez avec Juliette Binoche. L&#39;occasion de revenir sur ses relations avec deux hommes qui ont une&nbsp;...</p></div>
            </div>
        </a><a href='https://fr.style.yahoo.com/juliette-binoche-mere-feministe-sexe-regles-194053786.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Juliette Binoche a grandi avec une mère progressiste : &quot;À 9 ans, elle ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1c2FJXEWQGKcg5YPubyGCBjS7iy_fCJo2OlGumrqKl2aDalsRNjPSvB5KptIFlJ140gp72uO9" alt="Juliette Binoche a grandi avec une mère progressiste : &quot;À 9 ans, elle ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Si Juliette Binoche est devenue la femme engagée qu&#39;elle est aujourd&#39;hui, c&#39;est indéniablement grâce à l&#39;éducation féministe qu&#39;elle a pu recevoir de la&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}