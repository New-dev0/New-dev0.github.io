import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Oscar Garcia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Oscar Garcia"/>
        <meta name="description" content="Trending News about Oscar Garcia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Oscar Garcia</h1>
            <Image width={800} height={500} src="https://images.ladepeche.fr/api/v1/images/view/637f930c87846e07780e87df/large/image.jpg?v=1" alt="Oscar Garcia"/>
            <h3>Recent News</h3>
            <a href='https://www.ladepeche.fr/2022/11/24/ligue-1-recemment-limoge-de-reims-oscar-garcia-annonce-le-deces-de-sa-fille-10825095.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Football : l&#39;ancien entraîneur du Stade de Reims Oscar Garcia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtzL-g-VPohGFuxHr32BCrUIw5BTV5caikNyw65H7BPnv4G_JvkP4OIA6srN_0dJ-VlursvUDn" alt="Football : l&#39;ancien entraîneur du Stade de Reims Oscar Garcia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancien entraîneur du Stade de Reims a annoncé, ce jeudi, le décès de sa fille des suites d&#39;une longue maladie.</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/sport/4011712-20221124-ligue-1-ancien-entraineur-reims-oscar-garcia-annonce-deces-fille'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ligue 1 : L&#39;ancien entraîneur de Reims Oscar Garcia annonce le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRLYcTfJn5UlQD8z-oZZmURwZ4_oQtuoIzrJxLUP_tCWQEAPvv39v_o-Mb9iHE_Absv_8EEZnl1" alt="Ligue 1 : L&#39;ancien entraîneur de Reims Oscar Garcia annonce le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oscar Garcia a annoncé le décès de sa fille, au chevet de laquelle il se rendait fréquemment lorsqu&#39;il entraînait Reims avant d&#39;être renvoyé en octobre.</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/flash-sport/l-ex-coach-de-reims-oscar-garcia-annonce-le-deces-de-sa-fille-20221124'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Vole haut mon amour»: L&#39;ex-coach de Reims Óscar Garcia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSXNR-BdSzrBirexKxau3-0am1f21mzt8GvdoACGBXBuN2mN1S2fvbR9Kn0uXF3q4Mzmm-DXzFJ" alt="«Vole haut mon amour»: L&#39;ex-coach de Reims Óscar Garcia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est une triste nouvelle. Ce jeudi, Óscar Garcia a annoncé le décès de sa fille, des suites d&#39;une longue maladie. «Vole haut mon amour !</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/L-ancien-entraineur-de-reims-oscar-garcia-annonce-la-disparition-de-sa-fille/1366664'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;ancien entraîneur de Reims Oscar Garcia annonce la disparition ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRVmLHGgt7qDD_54Yikaky_jJB9si9idyI7wxG60oQEQAj94x-GFzgDisAvH87smtG4rXqiyvnA" alt="L&#39;ancien entraîneur de Reims Oscar Garcia annonce la disparition ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ex-entraîneur du Stade de Reims, Oscar Garcia, a publié un message sur les réseaux sociaux ce jeudi pour annoncer la disparation de sa fille.</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/grand-est/marne/reims/lex-entraineur-du-stade-de-reims-oscar-garcia-annonce-la-mort-de-sa-fille-le-club-reagit-on-distingue-l-humain-du-sportif-2661996.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;ex-entraîneur du Stade de Reims, Oscar Garcia, annonce la mort ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSp0WrsPOwMQVnJkfcLvbLKJ-cKNhuZYTJFdgSazkPiGWD5zhrt3I9FRBwrU1NGQ6N6le_Kr5yy" alt="L&#39;ex-entraîneur du Stade de Reims, Oscar Garcia, annonce la mort ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancien entraîneur du stade de Reims, Oscar Garcia, a annoncé ce jeudi 24 novembre la mort de sa fille. Il avait été évincé du club il y a quelques&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.fr/football/divers/oscar-garcia-douloureuse-nouvelle-647543.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oscar Garcia, la douloureuse nouvelle</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUPGqALhv2gLI-w3XUwBr_Jr2K75zlr8-nJgpmqPQUAoVdbVhMxtcO8xaimhFfFHroDhe5soey" alt="Oscar Garcia, la douloureuse nouvelle" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ancien entraîneur du Stade de Reims, Oscar Garcia a perdu l&#39;une de ses trois filles, emportée par une longue maladie. L&#39;Espagnol l&#39;a lui-même annoncé ce jeudi.</p></div>
            </div>
        </a><a href='https://www.foot-national.com/ligue-1/reims--oscar-garcia-annonce-le-deces-de-sa-fille--802408'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reims : Oscar Garcia annonce le décès de sa fille</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQARTuYU99WerxQQIycTh__fPC2lhQjpw-nzqbKj-gq_u3Y9jbCXeoBtmWWeYR2oixvZKmhvjmu" alt="Reims : Oscar Garcia annonce le décès de sa fille" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oscar Garcia, qui a été mis à pied le 13 octobre dernier par le Stade de Reims après un début de saison difficile, a annoncé le décès de fille.</p></div>
            </div>
        </a>
        </Template></>;
}