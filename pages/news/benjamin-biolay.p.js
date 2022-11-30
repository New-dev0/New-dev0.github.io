import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Benjamin Biolay</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Benjamin Biolay"/>
        <meta name="description" content="Trending News about Benjamin Biolay" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Benjamin Biolay</h1>
            <Image width={800} height={500} src="" alt="Benjamin Biolay"/>
            <h3>Recent News</h3>
            <a href='https://www.lanouvellerepublique.fr/a-la-une/benjamin-biolay-juliette-armanet-lomepal-et-m-au-printemps-de-bourges-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benjamin Biolay, Juliette Armanet, Lomepal et M au Printemps de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR0O1fRtFDTmubuVHLEMCUWdS8rTqmaXus_hvllWn3APA6m7g_CeeNo-9cgYxBPCdnMIhPr6ijI" alt="Benjamin Biolay, Juliette Armanet, Lomepal et M au Printemps de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les organisateurs du Printemps de Bourges ont dévoilé une bonne partie des artistes qui seront à l&#39;affiche de la 47e édition du festival du 18 au 23 avril&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lesinrocks.com/musique/lomepal-juliette-armanet-benjamin-biolay-voici-la-programmation-du-printemps-de-bourges-518755-29-11-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lomepal, Juliette Armanet, Benjamin Biolay, La Femme : voici la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Lomepal, Juliette Armanet, Benjamin Biolay, La Femme : voici la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Femme, Kalika, Selah Sue, Izïa ou encore Hamza et Anna Majidson feront partie des traditionnelles festivités berruyères qui se dérouleront du 18 au 23&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/infos/culture-loisirs/m-benjamin-biolay-selah-sue-ade-le-printemps-de-bourges-2023-devoile-sa-programmation-8475915'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>M, Benjamin Biolay, Selah Sue, Adé : le Printemps de Bourges 2023 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTfkuHAvlqwntml6yun-21Rf1fw-7UWxit03Per0CxUSFF3YCocH-rdVU2OKZW5WEXSPNbN1PjT" alt="M, Benjamin Biolay, Selah Sue, Adé : le Printemps de Bourges 2023 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La 47e édition du Printemps de Bourges promet encore beaucoup de soirées exquises ! Chanson française, rap, musique électro, tous les styles seront&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lamontagne.fr/bourges-18000/loisirs/benjamin-biolay-m-bob-sinclar-juliette-armanet-selah-sue-vladimir-cauchemar-voici-les-artistes-programmes-au-w-au-printemps-de-bourges-2023_14224179/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benjamin Biolay, - M -, Bob Sinclar, Juliette Armanet, Selah Sue ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQuxEq1aF8BqNKDTjJavZ8eRcFQ6q4gMarf9AqFzLb8KkVEdUA-O2PNseWryInqxR5rclrHTEbA" alt="Benjamin Biolay, - M -, Bob Sinclar, Juliette Armanet, Selah Sue ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Printemps de Bourges dévoile les têtes d&#39;affiche qui se produiront sur la scène du W lors de l&#39;édition 2023 du festival. L&#39;ensemble de la programmation&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sortiraparis.com/scenes/concert-musique/articles/67700-le-printemps-de-bourges-2023-lomepal-tiakola-juliette-armanet-m-les-premiers-noms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le Printemps de Bourges 2023 : Lomepal, Tiakola, Juliette Armanet ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQYwf5huXqUa4eNLtXE37KwevOm4jKTbZQZdVME_xNt1_Cv9q7MYwdPn3FwsQJhq_Z9NReSkcsv" alt="Le Printemps de Bourges 2023 : Lomepal, Tiakola, Juliette Armanet ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Printemps de Bourges annonce son retour en 2023 avec une nouvelle édition à ne surtout pas manquer du mardi 18 au dimanche 23 avril prochain.</p></div>
            </div>
        </a><a href='https://www.lejdc.fr/nevers-58000/loisirs/le-printemps-de-bourges-se-dessine-les-bouchers-et-charcutiers-nivernais-ont-manifeste-rebond-du-covid-l-actu-a-retenir-de-ce-mardi_14224603/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le Printemps de Bourges se dessine, les bouchers et charcutiers ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmZo1auEEyi9WVuvd6Ts0mrlsjQHfjh2MgAp1zs6A-AxGYIPAh8ToRFvho345Gkt5wCqP3gaBg" alt="Le Printemps de Bourges se dessine, les bouchers et charcutiers ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Retrouvez chaque soir un résumé des informations marquantes du jour dans la Nièvre, en France et dans le monde. M, Bob Sinclar, Benjamin Biolay.</p></div>
            </div>
        </a><a href='https://www.alouette.fr/decouvrez-les-premiers-noms-du-printemps-de-bourges-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Découvrez les premiers noms du Printemps de Bourges 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQvo6waKFnEYJL7g7oFCY3trx8TYsOQSUAnzb8GcjQaszLzd0FOqiHfyBxzlkWS_thj4-pqEIC9" alt="Découvrez les premiers noms du Printemps de Bourges 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le programme : 18 avril : -M-, Julien Granel, Anna Majidson. 19 avril : Lomepal, Meryl, Kalika. 20 avril : Juliette Armanet, Benjamin Biolay, Izïa,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}