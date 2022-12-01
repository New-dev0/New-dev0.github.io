import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ben White</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ben White"/>
        <meta name="description" content="Trending News about Ben White" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ben White</h1>
            <Image width={800} height={500} src="https://medias.lequipe.fr/img-photo-jpg/ben-white-ici-le-18-novembre-au-cap-d-entrainement-anglais-n-est-pas-entre-en-jeu-au-qatar-h-mckay-r/1500000001718339/0:0,1998:1332-640-427-75/c57df.jpg" alt="Ben White"/>
            <h3>Recent News</h3>
            <a href='https://www.lequipe.fr/Football/Actualites/L-anglais-ben-white-quitte-la-coupe-du-monde-pour-des-raisons-personnelles/1367756'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;Anglais Ben White quitte la Coupe du monde pour des « raisons ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSykjDeagG1AJzIJRBwoHlo_BetbhJt6cypBeB0P4IKYdmWE_RrHy83EmPw1JrsLyqrnJ6e6I8-" alt="L&#39;Anglais Ben White quitte la Coupe du monde pour des « raisons ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce mercredi, la Fédération Anglaise a annoncé que le défenseur d&#39;Arsenal Ben White, qui faisait partie du groupe des Trois Lions retenus pour disputer la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foot01.com/mondial-2022/mondial-2022-ben-white-quitte-l-angleterre-416561'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mondial 2022 : Ben White quitte l&#39;Angleterre</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdY6e_WJVOBeZNh3XfY4yys4nZWEwV8TT1C6K_fxsteegao3DUxnpex-aYwizAHjdqWiQywpz5" alt="Mondial 2022 : Ben White quitte l&#39;Angleterre" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans un communiqué, l&#39;équipe d&#39;Angleterre a annoncé que Ben White, le joueur d&#39;Arsenal, quittait le Qatar afin de rentrer immédiatement à Londres pour des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/coupe-du-monde/coupe-du-monde-ben-white-indisponible-pour-le-reste-du-tournoi-avec-l-angleterre-472a666a-70ea-11ed-b658-d40122929dc2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde. Ben White indisponible pour le reste du tournoi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBaupDw9hUkZbOq-JpGb-vgl28bFqaTyMLx4w_IvUY5DTx55OszYHKJtTM13EaqB_uHKCbDtRe" alt="Coupe du monde. Ben White indisponible pour le reste du tournoi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ben White ne disputera pas le reste de la Coupe du monde 2022 pour raisons personnelles, a annoncé sa fédération mercredi 30 novembre.</p></div>
            </div>
        </a><a href='https://www.footmercato.net/a1702727103654461176-cdm-2022-angleterre-ben-white-quitte-le-groupe-jusqua-la-fin-de-la-competition'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CdM 2022, Angleterre : Ben White quitte le groupe jusqu&#39;à la fin de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQC9lL3UYkermGgQwnwhpHygJoL-mj3BX3m1hTUN8c5ycmk-ZWmRMEURY3JIUcIM-EDT8kapOlo" alt="CdM 2022, Angleterre : Ben White quitte le groupe jusqu&#39;à la fin de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mauvaise nouvelle pour les Three Lions. Dans un communiqué publié par la FA, le défenseur anglais Ben White a dû quitter le groupe de Gareth Sout (.</p></div>
            </div>
        </a><a href='https://www.sofoot.com/ben-white-quitte-le-groupe-anglais-pour-raisons-personnelles-522292.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ben White quitte le groupe anglais « pour raisons personnelles »</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQmJb3TkU2tuHUk8Iw9sAamH8p87iyEk0f2KnofqxGZWmIhyRHO8kZLZ-3l6OxnmgGRdh9XmsWw" alt="Ben White quitte le groupe anglais « pour raisons personnelles »" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La meute perd l&#39;un de ses lions. La fédération anglaise a annoncé ce mercredi le départ de Ben White. Le défenseur d&#39;Arsenal a quitté le camp ...</p></div>
            </div>
        </a><a href='https://rmcsport.bfmtv.com/football/coupe-du-monde/coupe-du-monde-2022-l-angleterre-perd-ben-white-pour-raisons-personnelles_AP-202211300784.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022: l&#39;Angleterre perd Ben White pour &quot;raisons ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRVL832j5zA_s1XuvXpy1S4k4xSxe9s4DdZoNrv0vfmtVB_u0RtKgfInkVLPCe7305fTpmHwYVa" alt="Coupe du monde 2022: l&#39;Angleterre perd Ben White pour &quot;raisons ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le défenseur de l&#39;Angleterre, Ben White, qui a déjà quitté le camp de base d&#39;Al-Wakrah où s&#39;entraîne sa sélection, ne disputera pas le reste du Mondial 2022&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}