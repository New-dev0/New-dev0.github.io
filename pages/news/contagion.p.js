import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Contagion</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Contagion"/>
        <meta name="description" content="Trending News about Contagion" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Contagion</h1>
            <Image width={800} height={500} src="https://imgsrc.cineserie.com/2022/11/contagion-gwyneth-paltrow.jpg?ver=1" alt="Contagion"/>
            <h3>Recent News</h3>
            <a href='https://www.cineserie.com/news/cinema/contagion-de-quel-veritable-virus-sinspire-le-film-de-steven-soderbergh-5507314/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Contagion : de quel véritable virus s&#39;inspire le film de Steven ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQc9bNECOoPak2JlQIMm5SOHF7Vt2DkipQhTiqLGS5YcUe7DO5S60q_BZyxcbWs0K2UkyvdepB6" alt="Contagion : de quel véritable virus s&#39;inspire le film de Steven ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En 2011, soit presque dix ans avant la Covid-19, Steven Soderbergh met en scène un film qui paraît aujourd&#39;hui prémonitoire : &quot;Contagion&quot;.</p></div>
            </div>
        </a><a href='https://fr.news.yahoo.com/contagion-tmc-steven-soderbergh-pr%C3%A9disait-140302153.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Contagion (TMC) : Quand Steven Soderbergh prédisait la pandémie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRkRuKw92eM5_jAbeAvwYJxe7-EEKWEtlAxU2AHqBnu-Uey56CX6lyE61fQz7kNNHJdfJJYGZmq" alt="Contagion (TMC) : Quand Steven Soderbergh prédisait la pandémie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Peu après son retour d&#39;un voyage d&#39;affaires à Hongkong, Beth Emhoff meurt subitement d&#39;une forme inconnue de la grippe. Son jeune fils décède quelques jours&nbsp;...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/cinema/314398-contagion-tmc-quelle-maladie-mortelle-a-inspire-le-film-de-steven-soderbergh/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Contagion (TMC) : quelle maladie mortelle a inspiré le film de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Contagion (TMC) : quelle maladie mortelle a inspiré le film de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diffusé ce mercredi 23 novembre sur TMC à 21h25, Contagion, sorti en 2011, suit l&#39;émergence d&#39;une pandémie provoquée par un virus mortel.</p></div>
            </div>
        </a>
        </Template></>;
}