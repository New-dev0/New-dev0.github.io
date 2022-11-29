import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gavi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gavi"/>
        <meta name="description" content="Trending News about Gavi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gavi</h1>
            <Image width={800} height={500} src="https://icdn.football-espana.net/wp-content/uploads/2022/11/crown-princess-leonor-1.jpg" alt="Gavi"/>
            <h3>Recent News</h3>
            <a href='https://www.football-espana.net/2022/11/28/crown-princess-of-spain-has-supposed-crush-on-barcelona-starlet-gavi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Crown Princess of Spain has supposed crush on Barcelona starlet ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBvkqNSGd9FSM8zdkoQx95J2zH_6e8Oh7q7bOo7fubHEiHU5zt3afcPHuGd5mZZ0IOps1T4h9D" alt="Crown Princess of Spain has supposed crush on Barcelona starlet ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gavi has been winning the hearts of many Barcelona and Spain fans for just over a year, since he made the jump to senior football, not least those of the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}