import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bentancur</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bentancur"/>
        <meta name="description" content="Trending News about Bentancur" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bentancur</h1>
            <Image width={800} height={500} src="" alt="Bentancur"/>
            <h3>Recent News</h3>
            <a href='https://football-italia.net/why-serie-a-clubs-didnt-believe-in-bruno-fernandes-and-bentancur/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Why Serie A clubs didn&#39;t believe in Bruno Fernandes and Bentancur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZGjiH-V5W7MSsOzZyOMGDzvesUKmGfwJjDSjOCW07UZr_PHVzatl4qvpL2H_3ntb7LeIPuFz6" alt="&#39;Why Serie A clubs didn&#39;t believe in Bruno Fernandes and Bentancur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oddo, a 2006 Italy World Cup winner, and a former coach of Pescara, Udinese, Crotone, Perugia and Padova, was asked by La Gazzetta Dello Sport why Serie A clubs&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}