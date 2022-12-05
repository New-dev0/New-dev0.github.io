import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Olivier Véran</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Olivier Véran"/>
        <meta name="description" content="Trending News about Olivier Véran" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Olivier Véran</h1>
            <Image width={800} height={500} src="" alt="Olivier Véran"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/je-gagne-ce-jour-ou-olivier-veran-a-devoile-son-salaire-de-ministre_501619'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Je gagne… » : ce jour où Olivier Véran a dévoilé son salaire de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcReBDpHCmQ1LAyWHGKpgaikxvbGFw5u-LISN3rc-IOZfcEAgIFQSNgsMkt8UZRQungeEIIPyr8G" alt="« Je gagne… » : ce jour où Olivier Véran a dévoilé son salaire de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>S&#39;il a été ministre de la Santé pendant deux ans, Olivier Véran est aujourd&#39;hui porte-parole du gouvernement et ministre délégué chargé du Renouvea...</p></div>
            </div>
        </a><a href='https://www.bienpublic.com/societe/2022/12/02/olivier-veran-lundi-chrysoula-zacharopoulou-mardi-deux-ministres-a-dijon-la-semaine-prochaine'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gouvernement. Olivier Véran lundi, Chrysoula Zacharopoulou mardi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Gouvernement. Olivier Véran lundi, Chrysoula Zacharopoulou mardi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A peine une semaine après une visite du Président de la République, Emmanuel Macron, l&#39;attrait de Dijon pour les membres de l&#39;exécutif ne se dément pas.</p></div>
            </div>
        </a>
        </Template></>;
}