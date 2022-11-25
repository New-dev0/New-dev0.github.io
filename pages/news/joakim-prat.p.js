import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Joakim Prat</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Joakim Prat"/>
        <meta name="description" content="Trending News about Joakim Prat" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Joakim Prat</h1>
            <Image width={800} height={500} src="https://img-3.journaldesfemmes.fr/PjWCGKwTZbThazQebpW45KBYDvU=/1500x/smart/4faa5c3e1972423390e619ff03513b2a/ccmcms-jdf/39433433.jpg" alt="Joakim Prat"/>
            <h3>Recent News</h3>
            <a href='https://cuisine.journaldesfemmes.fr/chefs-et-gastronomie/2867343-joakim-prat-patissier-star-en-angleterre/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Joakim Prat : pâtissier star en Angleterre !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2La2WijQRuWc8jijI2gO2UzMFXLoKOaMSqTKzOEm67xEGim1dTyoa3QfMgfhy7vglQNaN8P1a" alt="Joakim Prat : pâtissier star en Angleterre !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joakim Prat est un pâtissier français, surtout connu pour ses boutiques d&#39;éclairs à Londres, mais aussi son école basée à Bordeaux.</p></div>
            </div>
        </a><a href='https://www.voici.fr/bios-people/joakim-prat'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Joakim Prat - La biographie de Joakim Prat avec Voici.fr</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSbHwq2j-99GZ_BrRmZkYgWvsGlVCTaojJ72haLMlaLoYNpWhQvEa-8uq1DPbfBlmu7SFK4FPQD" alt="Joakim Prat - La biographie de Joakim Prat avec Voici.fr" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Né en 1988 à Saint-Étienne-de-Baïgorry dans le Pays Basque, Joakim Prat est un chef pâtissier français. Il grandit auprès d&#39;une mère célibataire et styliste&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}