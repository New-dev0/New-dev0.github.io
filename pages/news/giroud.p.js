import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Giroud</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Giroud"/>
        <meta name="description" content="Trending News about Giroud" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Giroud</h1>
            <Image width={800} height={500} src="https://sf.sports.fr/wp-content/uploads/2022/11/Supporters-France.jpg" alt="Giroud"/>
            <h3>Recent News</h3>
            <a href='https://www.sports.fr/football/equipe-de-france/blague-de-giroud-qatar-645692.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La blague de Giroud sur le Qatar…</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSCpITF0xS-EwmHiBQhzMcxtBwDESDpc1YyWEw9tQ0lxc3FfTjOEpsAa1N8wMwzQqkFrDVpvbQe" alt="La blague de Giroud sur le Qatar…" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Présent en conférence de presse, jeudi, au lendemain de l&#39;arrivée des Bleus au Qatar, Olivier Giroud a réagi à l&#39;accueil enthousiaste reçu par les champions&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/sports/football/equipe-de-france/je-ne-savais-pas-que-les-indiens-supportaient-les-bleus-giroud-ironise-sur-l-accueil-des-champions-du-monde-au-qatar-20221117'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giroud sur l&#39;accueil des champions du monde au Qatar: «Je ne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSiV2eUcT6SIx3VILXCVWb7YmOedlbsCZh3layIDtsF6DtD5zr5a8qNNQOfLLM8pr1kAK79yits" alt="Giroud sur l&#39;accueil des champions du monde au Qatar: «Je ne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le 2e meilleur de buteur de l&#39;histoire des Bleus a évoqué rapidement l&#39;accueil Doha mercredi soir lors de l&#39;arrivée des champions du monde.</p></div>
            </div>
        </a><a href='https://le10sport.com/football/equipe-de-france/equipe-de-france-deschamps-a-fait-son-mea-culpa-avec-giroud-622054'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Equipe de France : Deschamps a fait son mea culpa avec Giroud</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmkNiEb_s61yJlX7eP3a6sUjEj-4IbxeHqGaKhHd33ZPTgYHK1C46qACIB-wEuzzI9ajI_xc5F" alt="Equipe de France : Deschamps a fait son mea culpa avec Giroud" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Olivier Giroud disputera bel et bien sa troisième Coupe du monde au Qatar à compter du 20 novembre prochain avec l&#39;Équipe de France. Écarté par Didier…</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/sports/football/coupe-du-monde/coupe-du-monde-2022-dans-le-sillage-de-benzema-giroud-represente-une-vraie-garantie-18-11-2022-CDLUVRPWR5B6BOF6SAJGC6R44Q.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : dans le sillage de Benzema, Giroud ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQg59Zk9LcpsbIOmBpNq8W3CRIXDOaiuJTIvf32k-28AueI_5IOqr8VZXWWMSXZSwr-ptXuKYmG" alt="Coupe du monde 2022 : dans le sillage de Benzema, Giroud ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Si Karim Benzema n&#39;était pas apte à démarrer contre l&#39;Australie, le mardi 22 novembre, tous les regards se tourneront alors vers Olivier Giroud,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/sport/coupe_du_monde_2022/4010583-20221118-coupe-monde-2022-debat-meteo-grosse-frayeur-giroud-journal-bleus'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : Débat sur la météo et grosse frayeur pour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSmS9cFp_YcdQJYniausLjGq3z9KA3dFsofWw4EW76UcTOVHL3gES8e-nVuDcmZdrGNflzN-DdZ" alt="Coupe du monde 2022 : Débat sur la météo et grosse frayeur pour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De notre envoyé spécial à Doha,. Les traditions se perdent… Alors qu&#39;on était censé démarrer le fameux Journal-des-Bleus-que-le-monde-nous-envie dès jeudi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.fr/football/coupe-du-monde/2022/coupe-du-monde-2022-bleus-olivier-giroud-mon-role-dans-l-equipe-tout-est-clair_sto9230433/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>COUPE DU MONDE 2022 - Bleus - Olivier Giroud : &quot;Mon rôle dans l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUVC2knGtC-qNpihsz2Q1BrxVPOFePfFQwrjz9UQ7junVLXckRo0wPQTb5d0x1Fap2LyClMfJQ" alt="COUPE DU MONDE 2022 - Bleus - Olivier Giroud : &quot;Mon rôle dans l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>COUPE DU MONDE 2022 – Invité à s&#39;exprimer devant la presse ce jeudi à Doha, Olivier Giroud a dribblé toutes les questions qui fâchent.</p></div>
            </div>
        </a>
        </Template></>;
}