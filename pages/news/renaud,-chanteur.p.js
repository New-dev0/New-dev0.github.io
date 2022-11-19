import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Renaud, chanteur</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Renaud, chanteur"/>
        <meta name="description" content="Trending News about Renaud, chanteur" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Renaud, chanteur</h1>
            <Image width={800} height={500} src="https://static.cnews.fr/sites/default/files/000_1bi08h_1_6377ee1a4a687_0.jpg" alt="Renaud, chanteur"/>
            <h3>Recent News</h3>
            <a href='https://www.cnews.fr/culture/2022-11-18/le-chanteur-renaud-annonce-son-retour-sur-scene-en-2023-1291170'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le chanteur Renaud annonce son retour sur scène en 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBhmm3sAbKhciOgIbT1cXoLkieOmXbdGHymNEtc68-yb6uWZEs8pRJA0vFQsyE2IqISyyFFtna" alt="Le chanteur Renaud annonce son retour sur scène en 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le chanteur Renaud a annoncé ce vendredi son retour sur scène dès janvier 2023 pour son nouvel album intitulé «en toute intimité».</p></div>
            </div>
        </a><a href='https://www.linternaute.com/musique/biographie/1427367-renaud-comment-va-le-chanteur/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Renaud annonce son retour : comment va le chanteur ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT7yrWQiNp158_yXWrjtFERWe-hO3CC16c-gcEr_FgViLLqGpYLVftFl76gFtIc2yx4HOSDdRN1" alt="Renaud annonce son retour : comment va le chanteur ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RENAUD. A 70 ans et après avoir dévoilé l&#39;album &quot;Métèque&quot; en mai dernier, le chanteur Renaud annonce son retour sur scène.</p></div>
            </div>
        </a><a href='https://actu.fr/loisirs-culture/le-chanteur-renaud-annonce-une-tournee-pour-2023-voici-les-dates_55314639.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le chanteur Renaud annonce une tournée pour 2023 : voici les dates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTs_5WkVdU8lmS0QWD8t1bCNzIF_wNUMSn2SNJTVpxgWBC_w6UQoZwccAWZaG4h3h1Rt5hxfOkF" alt="Le chanteur Renaud annonce une tournée pour 2023 : voici les dates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À 70 ans, et alors qu&#39;il n&#39;était pas reparti sur les routes depuis 2017, le chanteur Renaud repart en tournée dès janvier 2023.</p></div>
            </div>
        </a><a href='https://www.estrepublicain.fr/culture-loisirs/2022/11/18/dans-mes-cordes-le-chanteur-renaud-annonce-son-retour-sur-scene-pour-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Musique. « Dans mes cordes » : le chanteur Renaud annonce son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Musique. « Dans mes cordes » : le chanteur Renaud annonce son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pas moins de 40 concerts sont prévus, de janvier à juillet. Une tournée « en toute intimité » où il sera accompagné au piano et d&#39;un ensemble d&#39;instruments&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/people/musique/dans-mes-cordes-le-chanteur-renaud-annonce-son-retour-sur-scene-en-2023_AN-202211180699.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Dans mes cordes&quot;: le chanteur Renaud annonce son retour sur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrmT3jD5lE2QlkT18Ozpba74_yjVMQgj9KV0srkDB2IOafOwetGws_LkQuHQdM_8-TgIKvTWbH" alt="&quot;Dans mes cordes&quot;: le chanteur Renaud annonce son retour sur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La tournée, qui doit débuter le 24 janvier prochain à Avignon, s&#39;étalera sur 40 dates.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/pays-de-la-loire/nantes-44000/le-chanteur-renaud-de-retour-sur-scene-avec-une-date-a-nantes-9da24cf4-6769-11ed-9839-d91073bd962a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le chanteur Renaud de retour sur scène, avec une date à Nantes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT_W5R-pNnP4enk-vL2Ems-6IcLxEYS4H1wBQs0ekSDx1kiRrCL1pSJzz1DULSOQOpeVJlFl6b_" alt="Le chanteur Renaud de retour sur scène, avec une date à Nantes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En 2023, Renaud signe son grand retour sur scène avec « Dans mes cordes ». L&#39;annonce vient d&#39;être officialisée ce vendredi 18 novembre. À l&#39;occasion de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}