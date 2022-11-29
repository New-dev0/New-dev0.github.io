import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Benzema</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Benzema"/>
        <meta name="description" content="Trending News about Benzema" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Benzema</h1>
            <Image width={800} height={500} src="https://i.eurosport.com/2022/11/28/3499160-71330368-2560-1440.jpg" alt="Benzema"/>
            <h3>Recent News</h3>
            <a href='https://www.eurosport.fr/football/coupe-du-monde/2022/equipe-de-france-karim-benzema-bientot-de-retour-a-l-entrainement-le-real-madrid-etonne-du-diagnosti_sto9249140/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Equipe de France - Karim Benzema bientôt de retour à l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcScSeKpD_eiQDNEDONFDke1SZSLxahUbFJm8wC_vWMTit_i9Ru_tgeI3iuobGDwRXI4sMteLWTw" alt="Equipe de France - Karim Benzema bientôt de retour à l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>COUPE DU MONDE 2022 – Forfait pour la Coupe du monde après une blessure à l&#39;entraînement le 19 novembre dernier, Karim Benzema pourrait reprendre l&#39;entraînement&nbsp;...</p></div>
            </div>
        </a><a href='https://www.europe1.fr/sport/coupe-du-monde-2022-vers-un-retour-de-karim-benzema-avec-les-bleus-4150865'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : vers un retour de Karim Benzema avec les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRaNxH-XV0lOmdtGkW8LZaN8jGKgcavKlbMPMZkXNVTYOSELvFQKHEn2ysvuyiUB-ohSBIbOn9v" alt="Coupe du monde 2022 : vers un retour de Karim Benzema avec les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est la rumeur qui agite le monde footballistique. Karim Benzema pourrait-il revenir dans le groupe des Bleus après son forfait pour la Coupe du monde ?</p></div>
            </div>
        </a><a href='https://www.sports.fr/football/coupe-du-monde-2022/benzema-grosse-annonce-670070.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benzema, la grosse annonce</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTjICCUAgaq20_guUKUEQVwhF206VAYURk6WEnbKD6sEPImadzEmodOBBHTHK9VfZGqY9OYsgKF" alt="Benzema, la grosse annonce" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que la presse espagnole laissait entendre ce lundi que Karim Benzema était quasiment remis de sa blessure, l&#39;attaquant français ne serait en réalité&nbsp;...</p></div>
            </div>
        </a><a href='https://rmcsport.bfmtv.com/football/equipe-de-france/equipe-de-france-non-karim-benzema-n-est-pas-apte-a-rejouer-pour-le-moment_AV-202211280762.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France: non, Karim Benzema n&#39;est pas apte à rejouer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQONhuypSLOhJ2ph0F4xriQVSh0nSZuNa-j0L8qfaJAfio8hxL3BnhFsvtFRgN9wLTteQ9gnnJs" alt="Équipe de France: non, Karim Benzema n&#39;est pas apte à rejouer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dix jours après avoir été touché à la cuisse gauche, Karim Benzema poursuit sa convalescence à Madrid, après avoir déclaré forfait pour la Coupe du monde&nbsp;...</p></div>
            </div>
        </a><a href='https://le10sport.com/football/equipe-de-france/equipe-de-france-benzema-de-retour-au-qatar-le-verdict-tombe-623552'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France : Benzema de retour au Qatar ? Le verdict tombe</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjJrgbdV2QH4QY8zV93iqAPhU3r1WCP-1jGO9dDyEa2yEqdxKmVc_01RHSY7k9nEpF4lcuL9i1" alt="Équipe de France : Benzema de retour au Qatar ? Le verdict tombe" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Touché au quadriceps de la cuisse gauche avant le début du Mondial, Karim Benzema serait sur le point de retrouver les pelouses. Un retour, qui pourrait…</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/28/mondial-2022-au-qatar-et-si-karim-benzema-revenait-en-equipe-de-france-10832918.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 au Qatar : et si Karim Benzema revenait en ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSGrOkKy_1FI0XDa4-YL0VoCy79Yjn_oGzVeCVnoTV57xM_RI1YGF2ZkMfV0MMaLfcxb7dX1dol" alt="Coupe du monde 2022 au Qatar : et si Karim Benzema revenait en ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rien dans le règlement n&#39;interdit à Karim Benzema de revenir pour la suite de la compétition, alors qu&#39;il se rétablit rapidement de sa blessure.</p></div>
            </div>
        </a>
        </Template></>;
}