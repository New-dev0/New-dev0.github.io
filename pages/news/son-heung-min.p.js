import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Son Heung-Min</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Son Heung-Min"/>
        <meta name="description" content="Trending News about Son Heung-Min" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Son Heung-Min</h1>
            <Image width={800} height={500} src="" alt="Son Heung-Min"/>
            <h3>Recent News</h3>
            <a href='https://madeinfoot.ouest-france.fr/infos/article-video-son-et-richarlison-vont-saffronter-en-coupe-du-monde-398565.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CDM 2022 : Brésil - Corée du Sud : Richarlison et Son Heung-min ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="CDM 2022 : Brésil - Corée du Sud : Richarlison et Son Heung-min ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heung-Min Son affrontera Richarlison lorsque la Corée du Sud affrontera le Brésil lors de la Coupe du Monde de la FIFA 2022 au Qatar.</p></div>
            </div>
        </a>
        </Template></>;
}