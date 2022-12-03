import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gims</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gims"/>
        <meta name="description" content="Trending News about Gims" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gims</h1>
            <Image width={800} height={500} src="" alt="Gims"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/video-il-a-beaucoup-aime-gims-devoile-la-reaction-de-nicolas-sarkozy-suite-a-son-duo-avec-carla-bruni_507844'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO – « Il a beaucoup aimé » : Gims dévoile la réaction de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTWWNTAIAftXZKbQBIISYzpSEUOZPcDz9-ZVOPypHF3ZZEelAuWgcs2AiT2aqjTVDhi6yEdPCtX" alt="VIDÉO – « Il a beaucoup aimé » : Gims dévoile la réaction de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VIDÉO – « Il a beaucoup aimé » : Gims dévoile la réaction de Nicolas Sarkozy suite à son duo avec Carla Bruni &middot; &quot;Une vraie collaboration&quot; &middot; A propos de &middot; À&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}