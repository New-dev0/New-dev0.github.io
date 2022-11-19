import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>France-Japon RUGBY</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,France-Japon RUGBY"/>
        <meta name="description" content="Trending News about France-Japon RUGBY" /></Head><Template>
            <h1 style={{fontSize: "30"}}>France-Japon RUGBY</h1>
            <Image width={800} height={500} src="https://static.actu.fr/uploads/2022/11/mohamed-haouas-rugby-france.jpg" alt="France-Japon RUGBY"/>
            <h3>Recent News</h3>
            <a href='https://actu.fr/sports/rugby/pro/xv-de-france-japon-voici-les-5-bleus-envoyes-en-tribunes-pour-le-dernier-match-de-l-automne_55294155.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>XV de France-Japon : voici les 5 Bleus envoyés en tribunes pour le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQnVKbsNw2njsIVTw7iQfC-Yj9fY6DKTg8oS7ml50lUq_4QgaiU6tVoyfDwQvEgXGoHqbud__T8" alt="XV de France-Japon : voici les 5 Bleus envoyés en tribunes pour le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RUGBY. Fabien Galthié ayant dévoilé la composition du XV de France qui affrontera le Japon à Toulouse, on connaît les 5 Bleus qui prendront place dans les&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/sports/rugby/xv-de-france/rugby-ou-voir-et-cinq-choses-a-savoir-sur-france-japon-20221118'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rugby : où voir et cinq choses à savoir sur France-Japon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTE99Ne_3nZvW8TgkA_6CvAWlaw9_ULS7yt3UxXDSDvji3kpX4J4njZUTaKehnufQv2mqP7JW4Q" alt="Rugby : où voir et cinq choses à savoir sur France-Japon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Horaire, statistiques, infos décalées... Tout ce qu&#39;il faut savoir avant le dernier match de la tournée des Bleus, ce dimanche à Toulouse, face au Japon.</p></div>
            </div>
        </a><a href='https://actu.fr/sports/rugby/pro/france-japon-pro-d2-all-blacks-supersevens-le-programme-tv-rugby-du-18-au-20-novembre-2022_55300552.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France-Japon, Pro D2, All Blacks, Supersevens... Le programme TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTWhV5X9mjov5Jn_AUhpwEtLOldeD7vcZ76oyy9oysmDscdNAxrDY-4mxXvYmBQGIXGRPVd-hE" alt="France-Japon, Pro D2, All Blacks, Supersevens... Le programme TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RUGBY. 11e journée de Pro D2, France-Japon, les All Blacks face à l&#39;Angleterre, le Supersevens, les Barbarians... Ne manquez aucun match de rugby avec le&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ffr.fr/actualites/xv-de-france/france-japon-la-fete-autour-du-match'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France – Japon : La fête autour du match !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFrrQOzAVctdKI4c1n4pWra0r3W3csQQDCV7AGi8-UGdV-8-2Jlng7AJFgdbY_cIVRUJLnWvvBrg" alt="France – Japon : La fête autour du match !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dès l&#39;ouverture des portes du Stadium à 11h30, les supporters Toulousains retrouveront de nombreuses animations animées par France Rugby, Toulouse Métropole et&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/18/france-japon-ce-dimanche-a-toulouse-a-quelle-heure-et-sur-quelle-chaine-suivre-le-dernier-test-des-bleus-10811320.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France-Japon ce dimanche à Toulouse : à quelle heure et sur quelle ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7G-jZzhkwytqb0vy0Y_OXjoKOeXYX1KETyZg4T-2LoCcjBH7NahzM4aGwq6rXk9XxzdhL3QwB" alt="France-Japon ce dimanche à Toulouse : à quelle heure et sur quelle ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le XV de France accueille le Japon ce week-end dans le cadre de la tournée d&#39;automne,au Stadium de Toulouse.</p></div>
            </div>
        </a><a href='https://rmcsport.bfmtv.com/rugby/xv-de-france/xv-de-france-la-compo-des-bleus-face-au-japon-avec-penaud-et-sans-dupont_AV-202211180382.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>XV de France: la compo des Bleus face au Japon, avec Penaud et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSvY9nOkP5F5P4KOr5Z8bWg5k9lMbvjMLnd7lu8gGAtaDnCUttvtlanZKROJcpjcAMEkhx-5DDP" alt="XV de France: la compo des Bleus face au Japon, avec Penaud et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fabie Galthié et le staff du XV de France ont annoncé ce vendredi la composition de l&#39;équipe qui défiera le Japon dimanche à Toulouse lors du dernier&nbsp;...</p></div>
            </div>
        </a><a href='https://www.france24.com/fr/sports/20221118-rugby-le-japon-au-menu-d-un-xv-de-france-affam%C3%A9'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rugby : le Japon au menu d&#39;un XV de France affamé</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRKUoOhtFDOSbXK7XqTfIrvukhoqJroQbB5ZuDArybdh7O8sP_0oCTlly0Soca_UTs-uPAC2czI" alt="Rugby : le Japon au menu d&#39;un XV de France affamé" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Contrairement au pilier gauche Cyril Baille (blessure à l&#39;aine) et au deuxième ligne Thibaud Flament (commotion cérébrale), l&#39;ailier Damian Penaud disputera&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}