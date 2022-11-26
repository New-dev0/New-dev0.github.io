import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nkunku</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nkunku"/>
        <meta name="description" content="Trending News about Nkunku" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nkunku</h1>
            <Image width={800} height={500} src="https://i.eurosport.com/2022/06/06/3388913-69258528-2560-1440.jpg" alt="Nkunku"/>
            <h3>Recent News</h3>
            <a href='https://www.eurosport.fr/football/coupe-du-monde/2022/coupe-du-monde-equipe-de-france-christopher-nkunku-forfait-pour-le-mondial_sto9228392/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>COUPE DU MONDE – Equipe de France - Christopher Nkunku ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTh05H5eHsod6OaDo5lijZ0xMjZY8lRtTHVCKIpxyH9kQRgIwNJNRAzBHrFmV1DPNLc7wTOF36y" alt="COUPE DU MONDE – Equipe de France - Christopher Nkunku ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un énorme coup dur pour le joueur, dans la forme de sa vie à Leipzig (meilleur buteur de Bundesliga avec 12 buts), mais également pour les Bleus qui perdent un&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Christopher-nkunku-forfait-pour-la-coupe-du-monde/1365083'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christopher Nkunku forfait pour la Coupe du monde, Randal Kolo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTlh50gfekhOucM3ECs1MhbdBiPYXIRVX5khQf10Vdas0uHl4bj_qHD30sPXZkjTOQ9PuiGiTpz" alt="Christopher Nkunku forfait pour la Coupe du monde, Randal Kolo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sorti en boitant à la suite d&#39;un contact avec Eduardo Camavinga, mardi, à la fin de l&#39;entraînement des Bleus à Clairefontaine, Christopher Nkunku est&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/sport/4010174-20221116-coupe-monde-2022-blesse-entrainement-christopher-nkunku-declare-forfait'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : Blessé à l&#39;entraînement, Christopher ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-Aht7OpEUl7BJE1DwnZSaR2adJFhIbbZ5qDJGfrAFxAcbxU-ZQtR4yV3OG5gbP9xQYP-sHvuJ" alt="Coupe du monde 2022 : Blessé à l&#39;entraînement, Christopher ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Souffrant d&#39;une entorse, l&#39;attaquant renonce au Mondial, comme Paul Pogba, N&#39;Golo Kanté, Mike Maignan et Presnel Kimpembe avant lui.</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/sports/football/coupe-du-monde/coupe-du-monde-lattaquant-des-bleus-christopher-nkunku-forfait-15-11-2022-52F6CTC6BZFXJCF6R234DD7GOU.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Equipe de France : Nkunku forfait pour le Mondial, Kolo Muani va le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3Hmmtc8RwSVeU_76KM2WzBabXv19Go63sLWONcZdKuGpLK9aD0I5Xbn02U2QewUFYcB_RAMaC" alt="Equipe de France : Nkunku forfait pour le Mondial, Kolo Muani va le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;attaquant de l&#39;équipe de France Christopher Nkunku, blessé à l&#39;entraînement mardi à Clairefontaine, doit renoncer au Mondial au Qatar. Randal Kolo Muani a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/sports/football/coupe-du-monde/equipe-de-france-si-nkunku-declare-forfait-didier-deschamps-peut-il-appeler-un-nouveau-joueur-20221115'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France : si Nkunku déclare forfait, Didier Deschamps peut ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQYGHrqCfhsqx5mfyQQoPnMzC4aMX0aYlmfaAKBv1LQbgNolRh9332PB5yLwaR6co8W2zjex2bV" alt="Équipe de France : si Nkunku déclare forfait, Didier Deschamps peut ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VÉRIFICATION - Christopher Nkunku est sorti prématurément de l&#39;entraînement des Bleus ce mardi. En cas de forfait, Didier Deschamps pourra appeler un&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/football/equipe-de-france/equipe-de-france-christopher-nkunku-forfait-pour-la-coupe-du-monde-bef19418-6530-11ed-921e-4ba615c3f69c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France. Christopher Nkunku forfait pour le Mondial, Kolo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTEabbg8jTs-eMs9LDYnzd5nFjdYWaNPzbDddIeKgubTualG_hNxU4B_oPGw0yi6bWbS1m6y8bc" alt="Équipe de France. Christopher Nkunku forfait pour le Mondial, Kolo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Christopher Nkunku a passé des examens ce mardi 15 novembre, à la suite de son contact avec Eduardo Camavinga à l&#39;entraînement. L&#39;attaquant de Leipzig&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}