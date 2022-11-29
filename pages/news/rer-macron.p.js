import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>RER Macron</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,RER Macron"/>
        <meta name="description" content="Trending News about RER Macron" /></Head><Template>
            <h1 style={{fontSize: "30"}}>RER Macron</h1>
            <Image width={800} height={500} src="https://img.20mn.fr/vMenB63lQjaRPiyWKni5CCk/1200x768_grigny-le-10-juin-2013-gare-rer-d-de-grigny-centre-le-jour-de-l-ouverture-du-proces-des-jeunes-soupconnes-de-l-attaque-du-rer-d-en-mars-2013" alt="RER Macron"/>
            <h3>Recent News</h3>
            <a href='https://www.20minutes.fr/societe/4012282-20221128-lille-marseille-bordeaux-projets-rer-metropolitains-macron'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lille, Marseille, Bordeaux… Où en est-on des projets de RER ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRrIYDDZHkeRR1jODvn0_6t9etl0ktTtc4blLOZxcfTW_niw50ciqzImci8lViJaFdCpV0LwCE8" alt="Lille, Marseille, Bordeaux… Où en est-on des projets de RER ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Des RER ailleurs qu&#39;en Ile-de-France, c&#39;est le projet d&#39;Emmanuel Macron. « 20 Minutes » fait l&#39;état des lieux de l&#39;avancement des RER métropolitains&nbsp;...</p></div>
            </div>
        </a><a href='https://www.huffingtonpost.fr/france/article/macron-veut-plus-de-rer-ces-grandes-villes-deja-candidates_210839.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Macron veut plus de RER : ces grandes villes déjà candidates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTn_6hBwUJmhgbn5LXEt8CIcNGH1G_PGbsdMiUS3oUeMtvEhNU6RfKUaBPrJNd_OMtHGGZcHzuP" alt="Macron veut plus de RER : ces grandes villes déjà candidates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Plusieurs élus ont déclaré vouloir accueillir le RER dans leurs communes après l&#39;annonce du président, qui souhaite développer ce type de transports dans 10&nbsp;...</p></div>
            </div>
        </a><a href='https://www.challenges.fr/entreprise/transports/des-rer-pour-les-metropoles-regionales-l-ambition-d-emmanuel-macron-est-elle-realisable_837060'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Des RER pour les métropoles régionales: l&#39;ambition d&#39;Emmanuel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQfWw1pNSctWO_Zq41WOo59qcLZ-ne8bqfta9LixMx4buNhtKaIZ59darhf783XOpw_PiUdWOyt" alt="Des RER pour les métropoles régionales: l&#39;ambition d&#39;Emmanuel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce dernier avait retiré début novembre un amendement au projet de loi de finances accordant 3 milliards d&#39;euros pour les infrastructures ferroviaires. D&#39;après l&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latribune.fr/entreprises-finance/services/transport-logistique/qui-va-payer-la-facture-des-rer-macron-942474.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Métropoles régionales : qui va payer la facture des « RER Macron » ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcXhJWc4KVAG8UqeyPqpXo45K8669u5vQTn-Togjk2Cb0HXEU8ZaKuiRzBUYn1iOwUfjsFVo3m" alt="Métropoles régionales : qui va payer la facture des « RER Macron » ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Conseil d&#39;orientation des infrastructures (COI) « travaille en ce moment à identifier les projets qui pourront être lancés en premier. Il devrait rendre ses&nbsp;...</p></div>
            </div>
        </a><a href='https://reporterre.net/Macron-veut-des-RER-dans-dix-autres-metropoles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Macron veut des RER dans dix autres métropoles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQO3PLtWbXKp9Yhdmz-y2eiNyW0GjGKliKAmCuDJrlb_2AJeDsvtc2-lra3r-wH8pueTvyy5RjH" alt="Macron veut des RER dans dix autres métropoles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>« Je crois à fond au train. » Lors d&#39;une nouvelle vidéo publiée sur YouTube le 27 novembre, dont le but était de répondre aux questions des internautes sur&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/economie/transports/sncf/transports-cinq-questions-sur-les-rer-metropolitains-que-veut-deployer-emmanuel-macron-dans-dix-grandes-villes_5507892.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Transports : cinq questions sur &quot;les RER métropolitains&quot; que veut ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0JRrlKOVN18om8vXH-XKaK7gCR98m5mrib06bUqVQYdWGQMpCqByTtIOv7FGWixAI-xGNXrKu" alt="Transports : cinq questions sur &quot;les RER métropolitains&quot; que veut ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1Que propose concrètement Emmanuel Macron ? &quot;Le RER, ce n&#39;est pas que sur Paris&quot;, a plaidé Emmanuel Macron. &quot;C&#39;est un super objectif pour l&#39;&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}