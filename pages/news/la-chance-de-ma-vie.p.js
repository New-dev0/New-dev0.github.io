import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>La chance de ma vie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,La chance de ma vie"/>
        <meta name="description" content="Trending News about La chance de ma vie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>La chance de ma vie</h1>
            <Image width={800} height={500} src="https://resize.programme-television.ladmedia.fr/img/var/premiere/storage/images/tele-7-jours/news-tv/la-chance-de-ma-vie-france-2-francois-xavier-demaison-j-ai-adore-jouer-avec-virginie-efira-4697671/101215129-1-fre-FR/La-chance-de-ma-vie-France-2-Francois-Xavier-Demaison-J-ai-adore-jouer-avec-Virginie-Efira.jpg" alt="La chance de ma vie"/>
            <h3>Recent News</h3>
            <a href='https://www.programme-television.org/news-tv/La-chance-de-ma-vie-France-2-Francois-Xavier-Demaison-J-ai-adore-jouer-avec-Virginie-Efira-4697671'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La chance de ma vie (France 2) - François-Xavier Demaison : &quot;J&#39;ai ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1u5_Tc0QuEJ-YcRMs8aJBdganIbbZ2F2CUfJdObPkyG7Vv5kOfrFwg3cBPKkvlq1To98G-Pds" alt="La chance de ma vie (France 2) - François-Xavier Demaison : &quot;J&#39;ai ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Si vous n&#39;aimez pas le foot, optez pour cette comédie romantique. C&#39;est l&#39;assurance de 90 minutes de pur divertissement, en compagnie d&#39;une équipe gagnante.</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/cinema/314717-la-chance-de-ma-vie-france-2-pourquoi-le-personnage-interprete-par-raphael-personnaz-a-t-il-pose-des-problemes-sur-le-tournage/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La chance de ma vie (France 2) : pourquoi le personnage interprété ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="La chance de ma vie (France 2) : pourquoi le personnage interprété ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce dimanche soir, France 2 rediffuse le film La Chance de ma vie de Nicolas Cuche. Une comédie sentimentale dans laquelle l&#39;un des rôles secondaires avait&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}