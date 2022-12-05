import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pascal Obispo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pascal Obispo"/>
        <meta name="description" content="Trending News about Pascal Obispo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pascal Obispo</h1>
            <Image width={800} height={500} src="https://media.sudouest.fr/13235684/1200x-1/20221203131054-davt9143.jpg" alt="Pascal Obispo"/>
            <h3>Recent News</h3>
            <a href='https://www.sudouest.fr/gironde/lege-cap-ferret/cap-ferret-en-gironde-le-beau-succes-du-telethon-accompagne-par-pascal-obispo-13235684.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cap Ferret en Gironde : le beau succès du Téléthon accompagné ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQaqQPqPU9Ct1XYuWDx78AWsesALph5Os_kQqAaptDRX9L7d7-M4MI5_eYnedF0ZZ41f52QnRaU" alt="Cap Ferret en Gironde : le beau succès du Téléthon accompagné ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Samedi 3 décembre au Lège-Cap-Ferret, la grande marche solidaire a réuni environ 800 personnes à l&#39;occasion du Téléthon. Beaucoup ont bravé le froid,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}