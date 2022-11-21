import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Julie de Bona</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Julie de Bona"/>
        <meta name="description" content="Trending News about Julie de Bona" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Julie de Bona</h1>
            <Image width={800} height={500} src="" alt="Julie de Bona"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/video-julie-de-bona-longtemps-complexee-quand-on-est-petit-on-na-pas-conscience-de-son-image_506899'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO – Julie de Bona longtemps complexée : “Quand on est petit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRPmsmDyabbDA9HKhBQefhX4N9Bpc7iZUSrh-x_ZmmRUnD3R6T9yLMFFAyKIUOyDgXue0bsA7HT" alt="VIDÉO – Julie de Bona longtemps complexée : “Quand on est petit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Née dans une famille italienne et vietnamienne, Julie de Bona s&#39;est confiée dans l&#39;émission Un dimanche à la campagne, ce dimanche 20 novembre, sur...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/tv/314273-jen-fais-encore-des-cauchemars-julie-de-bona-raconte-son-horrible-souvenir-avec-gerard-jugnot-dans-un-dimanche-a-la-campagne-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;J&#39;en fais encore des cauchemars&quot; : Julie de Bona raconte son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;J&#39;en fais encore des cauchemars&quot; : Julie de Bona raconte son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Invitée de la nouvelle émission de Frédéric Lopez Un dimanche à la campagne, Julie de Bona a raconté ce souvenir traumatisant qu&#39;elle partage avec Gérard&nbsp;...</p></div>
            </div>
        </a><a href='https://www.journaldesfemmes.fr/people/actus/2865027-julie-de-bona-actrice-age-timidite/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Impossible de me faire sortir un mot...&quot; : Julie de Bona se confie sur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSbK_g-tWOkBMCsVTED_DpkgjjPHBSOBv-LOL_BPbxAsfC7EsHIIOTqAlMqVz68KmonGHAdXSc-" alt="&quot;Impossible de me faire sortir un mot...&quot; : Julie de Bona se confie sur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saviez-vous que Julie de Bona était &quot;extrêmement timide&quot; étant plus jeune ? L&#39;actrice de 41 ans s&#39;est confiée au &quot;Journal des Femmes&quot; sur cette peur qui la&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}