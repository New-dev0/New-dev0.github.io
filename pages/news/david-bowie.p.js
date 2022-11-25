import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>David Bowie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,David Bowie"/>
        <meta name="description" content="Trending News about David Bowie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>David Bowie</h1>
            <Image width={800} height={500} src="" alt="David Bowie"/>
            <h3>Recent News</h3>
            <a href='https://jhm.fr/david-bowie-sur-grand-ecran-a-langres/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>jhm | David Bowie sur grand écran à Langres</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="jhm | David Bowie sur grand écran à Langres" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le cinéma New Vox et la Niche du Chien à Plumes présentent vendredi 25 novembre à partir de 19 h une nouvelle séance de ciné-conférence. Le thème de cette.</p></div>
            </div>
        </a>
        </Template></>;
}