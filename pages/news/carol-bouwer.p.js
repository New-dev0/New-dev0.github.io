import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Carol Bouwer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Carol Bouwer"/>
        <meta name="description" content="Trending News about Carol Bouwer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Carol Bouwer</h1>
            <Image width={800} height={500} src="http://www.thesouthafrican.com/wp-content/uploads/2022/11/Carol-Bouwer-Hawks-Investigation.jpg" alt="Carol Bouwer"/>
            <h3>Recent News</h3>
            <a href='https://www.thesouthafrican.com/lifestyle/generations-actress-carol-bouwer-hawks-investigation-money-20-november-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former &#39;Generations&#39; actress Carol&#39;s hawks investigation closes in</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS5BdcRa9OPh_0uPXxTvc_FaBdjAXtaH7PzAJ-81QDaGGhkhh2JEJ_h4eATEcJ9BwDfz3z7wPOu" alt="Former &#39;Generations&#39; actress Carol&#39;s hawks investigation closes in" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carol Bouwer is alleged to have claimed money for 100 000 T-shirts worth R3.6 million and 500 000 bottles of water that cost R4.20 each.</p></div>
            </div>
        </a>
        </Template></>;
}