import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Stade de France</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Stade de France"/>
        <meta name="description" content="Trending News about Stade de France" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Stade de France</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/metallica-2022-1-aef2de-0@1x.jpeg" alt="Stade de France"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/culture/metallica-annonce-un-nouvel-album-et-deux-concerts-au-stade-de-france-2023-2240140.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica annonce un nouvel album et deux concerts au Stade de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRGmiV8T1HmG_5i75hg-5S8HdmAQ_bu03GnabahQGk-SFL8sTVAEdwispP10pakzNu65gRUHs8F" alt="Metallica annonce un nouvel album et deux concerts au Stade de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Le mythique groupe américain annonce la sortie de l&#39;album &quot;72 Seasons&quot; le 14 avril prochain. Un événement qui sera suivi de deux concerts au&nbsp;...</p></div>
            </div>
        </a><a href='https://www.huffingtonpost.fr/culture/article/metallica-annonce-un-nouvel-album-et-deux-dates-au-stade-de-france_210857.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica annonce un nouvel album et deux dates au Stade de France</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0vO6TlocFXrA5iN8mnRjTcz2mrap0VaPhcapFYI205nI9uPmaPIU6JUCRXXN-NzZ2_03J96l7" alt="Metallica annonce un nouvel album et deux dates au Stade de France" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le groupe a dévoilé la date de sortie de son nouvel album « 72 Seasons », un titre inédit et annoncé deux dates au Stade de France : les 17 et 19 mai&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sortiraparis.com/scenes/concert-musique/articles/167739-metallica-en-concert-au-stade-de-france-en-mai-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica en concert au Stade de France en mai 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSLPSxh9TCwI800V8RRyze-GCkxbGyevpZfCXvTtDkJskCLXRyYa_bi_sSo57TGaaDIBtGhkpfR" alt="Metallica en concert au Stade de France en mai 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>James Hetfield, Lars Ulrich, Kirk Hammett et Robert Trujillo annoncent en effet une nouvelle tournée mondiale qui s&#39;étalera jusqu&#39;en septembre 2024 ! Cette&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/people/musique/metallica-va-se-produire-au-stade-de-france-pour-deux-dates-en-mai-2023_AN-202211280570.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica va se produire au Stade de France pour deux dates en mai ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQOSMHFr1rLFkXHE0HfDrRXRzbxl-KOxwOyfoyfEdkj-Z6YNm_B0Isam0hP56TWuuR25CeHwXpg" alt="Metallica va se produire au Stade de France pour deux dates en mai ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour son retour dans la capitale, les 17 et 19 mai 2023, le groupe de métal américain jouera deux setlists complètement différentes.</p></div>
            </div>
        </a><a href='https://hardforce.com/actu/40989/metallica-nouvel-album-avril-single-concert-stade-de-france'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>METALLICA Nouvel album en avril, 1er single et concerts au Stade ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTlCTaZI6HQ1r1qDMiZRBzrkmSg4robddQ-4s3iGl8HA0L5ATISgkqUbn2pcY3PI089iqLj3kYN" alt="METALLICA Nouvel album en avril, 1er single et concerts au Stade ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NEWS : METALLICA dévoile les détails de son nouvel album, partage un premier single et annonce deux dates au Stade de France en mai 2023.</p></div>
            </div>
        </a><a href='https://hey-alex.fr/actu/metallica-concert-paris-stade-de-france-mai-2023-m72-world-tour-date-categories-prix-billetterie/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica revient avec un titre, un nouvel album et 2 concerts au ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkOb9xe1a54nvFWTdNrxXCW_a8dyA7DVhGa7DRgMBRXTRfy97Qt4Ev_SSWaQ40mDRL1OACfZYA" alt="Metallica revient avec un titre, un nouvel album et 2 concerts au ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Voici une excellente surprise : Metallica revient avec un single, un nouvel album et une nouvelle tournée en 2023 et 2024. Alex vous dit tout.</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/musique/metallica-annonce-un-nouvel-album-et-une-tournee-mondiale-20221128'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metallica annonce un nouvel album et une tournée mondiale</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRsJ5_pGCOIWyrAvPqO4JuAnEQGE-4P6gz4tg-_tyrFtlgocqyTreKy73N4356HK8y_GpQ8HuJt" alt="Metallica annonce un nouvel album et une tournée mondiale" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les papas du heavy metal seront à l&#39;affiche du Stade de France les 17 et 19 mai 2023. Ils y joueront notamment leur nouveau morceau, dévoilé ce lundi.</p></div>
            </div>
        </a>
        </Template></>;
}