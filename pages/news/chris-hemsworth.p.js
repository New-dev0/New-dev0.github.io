import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chris Hemsworth</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chris Hemsworth"/>
        <meta name="description" content="Trending News about Chris Hemsworth" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chris Hemsworth</h1>
            <Image width={800} height={500} src="https://www.ecranlarge.com/media/cache/1600x1200/uploads/articles/000/000/000/steven-spielberg-photo-chris-hemsworth-1438628-large.jpg" alt="Chris Hemsworth"/>
            <h3>Recent News</h3>
            <a href='https://www.ecranlarge.com/films/news/1457189-chris-hemsworth-abandonne-marvel-netflix-et-arrete-le-cinema-quelque-temps'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth abandonne Marvel, Netflix et arrête le cinéma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVf4N7giNSfb8pdHRkazxtOz3og2FzBPV-XRWUPJPG_hCNrey71JKidxorF-zyTnrEfxIbfrSM" alt="Chris Hemsworth abandonne Marvel, Netflix et arrête le cinéma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour des raisons médicales, l&#39;acteur Chris Hemsworth quitte Marvel, Netflix et le cinéma pendant quelque temps. Lorsqu&#39;un comédien plonge dans l&#39;univers du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cineserie.com/news/people/chris-hemsworth-annonce-faire-une-pause-pour-des-raisons-de-sante-5504361/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth annonce faire une pause pour des raisons de santé</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSOsnOHm3fIG_iUlm9970Uivkz170kZ4967CkSbf7cZhxnCsbN6ZC_q_orthO4nSYk5G_9Qs5A6" alt="Chris Hemsworth annonce faire une pause pour des raisons de santé" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;acteur australien Chris Hemsworth, figure emblématique du MCU, a annoncé prendre une pause pour des raisons de santé.</p></div>
            </div>
        </a><a href='http://braindamaged.fr/19/11/2022/chris-hemsworth-fait-une-pause-dans-sa-carriere-apres-un-diagnostic-medical-inquietant/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth fait une pause dans sa carrière après un ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQLuJdgWA_iARCFIycKP7J6HTQWecN_cHr4BrFKhndnle4EwASbY5Ye_aHwM3Aoggo1Oapo0RmV" alt="Chris Hemsworth fait une pause dans sa carrière après un ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après un diagnostic de prédisposition à la maladie d&#39;Alzheimer, l&#39;acteur de Marvel Chris Hemsworth fait une pause dans sa carrière.</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/culture/chris-hemsworth-decouvre-qu-il-a-un-risque-eleve-de-developper-la-maladie-d-alzheimer-predisposition-genetique-2239060.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth découvre qu&#39;il a un risque élevé de développer la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRCXpDqb2c64GK5SDcnoqyge8jM-tbeGJMf1CImyM2LmSf_f938KKaV5gRcCvk2poEwwS5T8KQS" alt="Chris Hemsworth découvre qu&#39;il a un risque élevé de développer la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Dans une interview à &quot;Vanity Fair&quot;, le comédien s&#39;est livré sur son état de santé. Après avoir effectué un test génétique, il a découvert qu&#39;il&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aufeminin.com/news-people/chris-hemsworth-apres-des-resultats-medicaux-inquietants-l-acteur-fait-une-pause-dans-sa-carriere-s4053275.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth : après des résultats médicaux inquiétants, l&#39;acteur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQi2_1-Hyg0zB3-Q3xbBVn_ufYxkxZIwXIamtV6UIYDYniU7LNbmT-_u10jnlJBt2ugQ2JdkMd6" alt="Chris Hemsworth : après des résultats médicaux inquiétants, l&#39;acteur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Actuellement au cœur d&#39;une série documentaire sur le corps humain, Chris Hemsworth a fait une découverte sur sa santé. L&#39;occasion pour lui de prendre du&nbsp;...</p></div>
            </div>
        </a><a href='https://fr.news.yahoo.com/ca-d%C3%A9clench%C3%A9-chose-face-%C3%A0-140000240.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ca a déclenché quelque chose en moi&quot; : face à la maladie d ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQzd0W2pzkyEhdhziOtGn91Y1mZ4GdXXD3PhNgGBvAOC0Shc7Fv6lDW9mYiX2LiM4w1p-IJOO0w" alt="&quot;Ca a déclenché quelque chose en moi&quot; : face à la maladie d ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durant le tournage du docu-série Sans Limites pour Disney+, Chris Hemsworth a découvert qu&#39;il avait 8 à 10 fois plus...</p></div>
            </div>
        </a><a href='https://www.tomsguide.fr/chris-hemsworth-thor-risque-de-developper-alzheimer-sa-plus-grande-peur/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hemsworth (Thor) risque de développer Alzheimer, sa « plus ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRAfQU_zEp4qoZYvjEPuDml4bGBrUxTZsjb1uT3xRRdjf82cXXyu6PGYJ9_1PTAmjOSm7UpaV1e" alt="Chris Hemsworth (Thor) risque de développer Alzheimer, sa « plus ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est lors du tournage de sa docu-série Limitless With Chris Hemsworth, Chris Hemsworth a découvert qu&#39;il avait un risque accru de développer la maladie&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}