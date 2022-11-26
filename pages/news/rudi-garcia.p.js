import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rudi Garcia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rudi Garcia"/>
        <meta name="description" content="Trending News about Rudi Garcia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rudi Garcia</h1>
            <Image width={800} height={500} src="" alt="Rudi Garcia"/>
            <h3>Recent News</h3>
            <a href='https://sports.orange.fr/football/coupe-du-monde/article/que-deviens-tu-rudi-garcia-exclu-CNT000001Vcqgi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Que deviens-tu, Rudi Garcia ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-4il21yAqiXydnIuXOR48YGy3r2w2KDaMKT9wan72LOiAStjdtbqeKDXgEriR1ntDVlwTA-iR" alt="Que deviens-tu, Rudi Garcia ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ex-technicien de l&#39;OM ou de l&#39;OL réapparaît aux yeux du public français, en tant que consultant pour le Mondial. On l&#39;a notamment entendu plaisanter en&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}