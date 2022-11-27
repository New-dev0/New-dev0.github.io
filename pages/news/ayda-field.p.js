import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ayda Field</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ayda Field"/>
        <meta name="description" content="Trending News about Ayda Field" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ayda Field</h1>
            <Image width={800} height={500} src="https://img-4.linternaute.com/ZjM28pRSm97iixKKtKjRyHs1oPU=/1500x/smart/061ed255dd4b447ca846dff583d7abbe/ccmcms-linternaute/39677009.jpg" alt="Ayda Field"/>
            <h3>Recent News</h3>
            <a href='https://www.linternaute.com/musique/biographie/1415829-robbie-williams-qui-est-ayda-field-la-femme-du-chanteur/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Robbie Williams : qui est Ayda Field, la femme du chanteur ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSNUhyULIObCQb8P3zoxaOWxZ_TZLAuv_eqUDKzKQKbF53nxM04KghwRZ0uyl0wwqKjSZdmBJI" alt="Robbie Williams : qui est Ayda Field, la femme du chanteur ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ROBBIE WILLIAMS. Parrain de la saison 2022 de la Star Academy, Robbie Williams est l&#39;invité de la finale de l&#39;émission de TF1.</p></div>
            </div>
        </a>
        </Template></>;
}