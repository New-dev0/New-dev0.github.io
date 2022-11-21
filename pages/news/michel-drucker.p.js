import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Michel Drucker</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Michel Drucker"/>
        <meta name="description" content="Trending News about Michel Drucker" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Michel Drucker</h1>
            <Image width={800} height={500} src="https://file1.closermag.fr/var/closermag/storage/images/1/3/9/0/0/13900633/vous-allez-perdre-votre-mari-conseil-tres-etonnant-michel-drucker-lea-salame.jpeg?alias=exact1024x768_l" alt="Michel Drucker"/>
            <h3>Recent News</h3>
            <a href='https://www.closermag.fr/people/vous-allez-perdre-votre-mari-!-ce-conseil-tres-etonnant-de-michel-drucker-a-lea-salame-1669136'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Vous allez perdre votre mari !&quot; : ce conseil très étonnant de Michel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSfoof5WaCAG7J0fHv5ewBC7TD0l51KX9lJA9mFG1PtFOwnTuldQC3x_XeDDK_DBKdhjjmFWkve" alt="&quot;Vous allez perdre votre mari !&quot; : ce conseil très étonnant de Michel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce samedi 19 novembre, Michel Drucker était invité sur le plateau de Quelle époque. Mais durant l&#39;émission, le célèbre animateur a souhaité donner un&nbsp;...</p></div>
            </div>
        </a><a href='https://www.public.fr/News/Lea-Salame-sous-le-choc-ce-que-Michel-Drucker-a-ose-lui-dire-1751172'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Léa Salamé sous le choc : ce que Michel Drucker a osé lui dire !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRHAXMSIg8ekcsh4oDfd6kTdkdFqaOKOEmd720VteXAit6a2EhnzzTK3wvt8MfHLH5sXaqAkryP" alt="Léa Salamé sous le choc : ce que Michel Drucker a osé lui dire !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce samedi 19 novembre, l&#39;émission de France 2 “Quelle époque !” recevait Michel Drucker. L&#39;occasion pour l&#39;animateur de donner quelques petits conseils à sa&nbsp;...</p></div>
            </div>
        </a><a href='https://tvmag.lefigaro.fr/programme-tv/actu-tele/vous-allez-perdre-votre-mari-michel-drucker-en-roue-libre-dans-quelle-epoque-20221120'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Vous allez perdre votre mari» : Michel Drucker en roue libre dans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaxJuBGCYzjvvTsuRMF1wBtz7AIBwIV3fhSSeITgRtInS-JEhYIaB0N0XQdZZE5lu0GOHQpAQS" alt="«Vous allez perdre votre mari» : Michel Drucker en roue libre dans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VIDÉO - L&#39;animateur de 80 ans a enchaîné les punchlines et c&#39;est Léa Salamé qui en a fait les frais ce samedi sur France 2.</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/video-lea-salame-choquee-ce-conseil-embarrassant-de-michel-drucker_506878'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO – Léa Salamé choquée : ce conseil embarrassant de Michel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVOEtzB2-So1aVubDKF0N2a57AhpHmfGSgb-gFVt5v7JxRLsT7n3ixdN0RMSk06ivBOvZzImB8" alt="VIDÉO – Léa Salamé choquée : ce conseil embarrassant de Michel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Du haut de ses 80 ans, Michel Drucker était très en forme sur le plateau de Quelle époque ! sur France 2 ce samedi 19 novembre. Léa Salamé a profit...</p></div>
            </div>
        </a><a href='https://www.femmeactuelle.fr/actu/news-actu/michel-drucker-son-conseil-etonnant-a-lea-salame-au-sujet-de-son-couple-2145034'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michel Drucker : son conseil étonnant à Léa Salamé au sujet de son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBxWONgpRNFFZxt9DIJWrkIiv3NoxGEEYmafkaWjX_zvDVShyk04pU-RMjo4sGssu8QC5lNSAx" alt="Michel Drucker : son conseil étonnant à Léa Salamé au sujet de son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Samedi 19 novembre 2022, l&#39;émission Quelle époque! sur France 2 recevait notamment Michel Drucker. L&#39;animateur de Vivement Dimanche, présent pour fai1.</p></div>
            </div>
        </a><a href='https://tendances.orange.fr/culture-pop/people/article-michel-drucker-en-freestyle-dans-quelle-epoque-lea-salame-stupefaite-par-son-conseil-sur-son-celebre-couple-CNT000001UZhtJ.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michel Drucker &quot;en freestyle&quot; dans Quelle époque ! : Léa Salamé ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRMTW-qVmA2UVI59PhW5xj0fS_YHQiufOQdGSfLpOYOh_K_PfAjplm3FQCbd3ORwFhBbYiB-PPh" alt="Michel Drucker &quot;en freestyle&quot; dans Quelle époque ! : Léa Salamé ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En parallèle, ce boulimique du travail a mis en place une nouvelle pièce de théâtre intitulée De vous à moi. Il s&#39;agit d&#39;un spectacle très intime pour l&#39;&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}