import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Robbie Williams</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Robbie Williams"/>
        <meta name="description" content="Trending News about Robbie Williams" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Robbie Williams</h1>
            <Image width={800} height={500} src="https://img-4.linternaute.com/ZjM28pRSm97iixKKtKjRyHs1oPU=/1500x/smart/061ed255dd4b447ca846dff583d7abbe/ccmcms-linternaute/39677009.jpg" alt="Robbie Williams"/>
            <h3>Recent News</h3>
            <a href='https://www.linternaute.com/musique/biographie/1415829-robbie-williams-qui-est-ayda-field-la-femme-du-chanteur/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Robbie Williams : qui est Ayda Field, la femme du chanteur ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSNUhyULIObCQb8P3zoxaOWxZ_TZLAuv_eqUDKzKQKbF53nxM04KghwRZ0uyl0wwqKjSZdmBJI" alt="Robbie Williams : qui est Ayda Field, la femme du chanteur ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ROBBIE WILLIAMS. Parrain de la saison 2022 de la Star Academy, Robbie Williams est l&#39;invité de la finale de l&#39;émission de TF1.</p></div>
            </div>
        </a><a href='https://fr.news.yahoo.com/robbie-williams-maladie-mentale-192057975.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Elle veut me tuer&quot; : Robbie Williams se confie sur la maladie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ6OkyhtDsSTc9C2ddwDPd3Dg6bjUkw8_KVesJQ8aCFnBhRdZQwypTslUOCETS_32uDzi6UbDwV" alt="&quot;Elle veut me tuer&quot; : Robbie Williams se confie sur la maladie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce samedi 26 novembre 2022, c&#39;est la grande finale de la &quot;Star Academy&quot;, et pour l&#39;occasion, Robbie Williams sera présent pour se produire en compagnie des&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}