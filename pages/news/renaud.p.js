import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Renaud</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Renaud"/>
        <meta name="description" content="Trending News about Renaud" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Renaud</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/renaud-louane-nma-2022-1-230f01-0@1x.jpeg" alt="Renaud"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/culture/video-nrj-music-awards-2022-renaud-recoit-un-prix-d-honneur-des-mains-de-louane-2239145.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO – NRJ Music Awards : &quot;très ému&quot;, Renaud reçoit un prix d ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMkaG1jf9DBQqBq2WMacaP7PHlhwQqtEhscm4Ujgl7RTDC3ldFTeFRE00bq4gD5ZkStbqwY0w1" alt="VIDÉO – NRJ Music Awards : &quot;très ému&quot;, Renaud reçoit un prix d ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ L&#39;interprète de &quot;Mistral gagnant&quot; a été salué pour l&#39;ensemble de sa carrière ce vendredi 18 novembre lors de la cérémonie diffusée sur TF1.</p></div>
            </div>
        </a><a href='https://www.rtl.fr/culture/musique/renaud-signe-son-retour-sur-scene-avec-une-nouvelle-tournee-7900207623'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Renaud signe son retour sur scène avec une nouvelle tournée</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSdGJbUgdvBApEs2iMSLy0ew1VinborlTHhzmHDICOF2Q69jYfe6f7K_C6kfrf3kisk074psD5" alt="Renaud signe son retour sur scène avec une nouvelle tournée" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Renaud retrouve la scène à l&#39;occasion d&#39;une nouvelle tournée baptisée &quot;Dans mes cordes&quot;. Une quarantaine de dates est prévue dans toute la France.</p></div>
            </div>
        </a><a href='https://www.cnews.fr/culture/2022-11-18/le-chanteur-renaud-annonce-son-retour-sur-scene-en-2023-1291170'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le chanteur Renaud annonce son retour sur scène en 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBhmm3sAbKhciOgIbT1cXoLkieOmXbdGHymNEtc68-yb6uWZEs8pRJA0vFQsyE2IqISyyFFtna" alt="Le chanteur Renaud annonce son retour sur scène en 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le chanteur Renaud a annoncé ce vendredi son retour sur scène dès janvier 2023 pour son nouvel album intitulé «en toute intimité».</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/musique/renaud-annonce-une-nouvelle-tournee-pour-2023--18-11-2022-2498342_38.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Renaud annonce une nouvelle tournée pour 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQpF4ud2ahLJBs_uIkLA-T3fhdhOiG_tpdB3B8IOxKkPYHKP_g2X8VaJTa6hb7qvQ9jNXrrAj2A" alt="Renaud annonce une nouvelle tournée pour 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Peu avant son 70e anniversaire, Renaud, chanteur populaire aux plus de 20 millions d&#39;albums vendus, a sorti en mai un nouvel album de reprises « Métèque » où il&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/renaud-en-petite-forme-son-apparition-surprise-aux-nrj-music-awards-2022_506777'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Renaud en petite forme : son apparition surprise aux NRJ Music ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQBfzhuEM_kusVXBxRMe1PdlMQkAToAmFJH6CGT-cbaWZFSo64sfgiaq_6GcQbvFDLlBwf79sQC" alt="Renaud en petite forme : son apparition surprise aux NRJ Music ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un trophée à la hauteur de son talent. Lors de la 24ème cérémonie des NRJ Music Awards, diffusée ce vendredi 18 novembre sur TF1, Renaud est monté...</p></div>
            </div>
        </a><a href='https://www.linternaute.com/musique/biographie/1427367-renaud-comment-va-le-chanteur/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Renaud annonce son retour : comment va le chanteur ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT7yrWQiNp158_yXWrjtFERWe-hO3CC16c-gcEr_FgViLLqGpYLVftFl76gFtIc2yx4HOSDdRN1" alt="Renaud annonce son retour : comment va le chanteur ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RENAUD. A 70 ans et après avoir dévoilé l&#39;album &quot;Métèque&quot; en mai dernier, le chanteur Renaud annonce son retour sur scène.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/pays-de-la-loire/nantes-44000/le-chanteur-renaud-de-retour-sur-scene-avec-une-date-a-nantes-9da24cf4-6769-11ed-9839-d91073bd962a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le chanteur Renaud de retour sur scène, avec une date à Nantes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT_W5R-pNnP4enk-vL2Ems-6IcLxEYS4H1wBQs0ekSDx1kiRrCL1pSJzz1DULSOQOpeVJlFl6b_" alt="Le chanteur Renaud de retour sur scène, avec une date à Nantes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En 2023, Renaud signe son grand retour sur scène avec « Dans mes cordes ». L&#39;annonce vient d&#39;être officialisée ce vendredi 18 novembre. À l&#39;occasion de&nbsp;...</p></div>
            </div>
        </a><a href='https://actu.fr/loisirs-culture/le-chanteur-renaud-annonce-une-tournee-pour-2023-voici-les-dates_55314639.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le chanteur Renaud annonce une tournée pour 2023 : voici les dates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTs_5WkVdU8lmS0QWD8t1bCNzIF_wNUMSn2SNJTVpxgWBC_w6UQoZwccAWZaG4h3h1Rt5hxfOkF" alt="Le chanteur Renaud annonce une tournée pour 2023 : voici les dates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À 70 ans, et alors qu&#39;il n&#39;était pas reparti sur les routes depuis 2017, le chanteur Renaud repart en tournée dès janvier 2023.</p></div>
            </div>
        </a><a href='https://www.parismatch.com/people/renaud-remonte-sur-scene-apparition-pleine-demotion-aux-nrj-music-awards-2022-218878'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Renaud remonte sur scène, apparition pleine d&#39;émotion aux NRJ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQG9wXfD_D0E4rGUeTTd2ZwBEJkb9YocDCrOuKzf6HRZO_dbsMRygRFOEi5RXczOP3uzU-bhabe" alt="Renaud remonte sur scène, apparition pleine d&#39;émotion aux NRJ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VIDEO - Lui qui limite ses apparitions télé a fait une intervention remarquée aux NRJ Music Awards 2022. Vendredi soir à Cannes, Renaud est monté sur scène&nbsp;...</p></div>
            </div>
        </a><a href='https://www.legossip.net/renaud-bonheur-avec-cerise-27-ans-grande-annonce-au-nrj-music-awards/505645/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Renaud, bonheur avec Cerise, 27 ans, grande annonce au NRJ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfOhd8RvCuQ0ajCsvb9BFe1dRpGGXK1tJ_e-byqXHqG0pDGXLBreJbzKh9A9HwG5hzXZWd3H0l" alt="Renaud, bonheur avec Cerise, 27 ans, grande annonce au NRJ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fou amoureux de Cerise, une jeune femme d&#39;une vingtaine d&#39;années - une source évoque 27 ans - Renaud a profité de son sacre aux NRJ Music Awards pour.</p></div>
            </div>
        </a>
        </Template></>;
}