import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Thomas Pesquet</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Thomas Pesquet"/>
        <meta name="description" content="Trending News about Thomas Pesquet" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Thomas Pesquet</h1>
            <Image width={800} height={500} src="https://images.bfmtv.com/589TWPdFNxexfgC8aXHC-lTzldY=/0x0:1024x576/1024x0/images/Thomas-Pesquet-le-23-novembre-2022-sur-BFMTV-1526447.jpg" alt="Thomas Pesquet"/>
            <h3>Recent News</h3>
            <a href='https://www.bfmtv.com/sciences/on-est-tres-content-du-choix-thomas-pesquet-salue-la-selection-de-sophie-adenot-comme-astronaute-europeenne_AV-202211230721.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;On est très content du choix&quot;: Thomas Pesquet salue la sélection de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQaCJKaGzwYXdbyvVf68NkvoXc9U1wwBVNBrzpPJ1MazXtjHlmO_JUZcJbnf91gdRUR5B68K3Up" alt="&quot;On est très content du choix&quot;: Thomas Pesquet salue la sélection de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;astronaute française a réagi à la sélection de Sophie Adenot dans la nouvelle promotion de l&#39;Agence spatiale européenne.</p></div>
            </div>
        </a><a href='https://www.huffingtonpost.fr/science/video/sophie-adenot-recrutee-par-l-esa-thomas-pesquet-se-dit-tres-content-de-ce-choix_210644.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thomas Pesquet se dit « très content du choix » de Sophie Adenot ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzGAU83fdBr8iaDrLo8AlUJ7gr1NzliYyWD46yjDQUUH7iTap3Zz1OZQwTMq6mij6LB-Nmgk5_" alt="Thomas Pesquet se dit « très content du choix » de Sophie Adenot ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Je suis très content qu&#39;on ait une femme, c&#39;est important qu&#39;on soit représentatif », a déclaré le premier Français à avoir été commandant de la Station&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leprogres.fr/science-et-technologie/2022/11/23/nouveaux-astronautes-une-francaise-sophie-adenot-succede-a-thomas-pesquet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espace. Nouveaux astronautes : la Française Sophie Adenot ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTRQ3fpw5_Ey9ojvgIpTk5g4xaj3yw4hLaTJvnjHSChmowI-SiTB4JjkswEwQrPA35OhxnB7Jdl" alt="Espace. Nouveaux astronautes : la Française Sophie Adenot ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cette pilote d&#39;essais sur hélicoptères originaire de Bourgogne a été choisie mercredi par l&#39;Agence spatiale européenne pour faire partie de sa nouvelle&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lamontagne.fr/nevers-58000/actualites/sophie-adenot-originaire-de-la-nievre-devient-la-nouvelle-thomas-pesquet-en-integrant-lagence-spatiale-europeenne_14220978/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sophie Adenot, originaire de la Nièvre, devient la nouvelle Thomas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRHXHALZCKmzY71WnTEF4pejkHdB4peYHRsIDGUCTmcg1HVpafz_1jkXibKj5hqD71J1Md3HVA7" alt="Sophie Adenot, originaire de la Nièvre, devient la nouvelle Thomas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Retenue parmi plus de 22.000 candidats, Sophie Adenot, d&#39;origine nivernaise, compte parmi les cinq astronautes qui s&#39;apprêtent à intégrer la nouvelle&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lanouvellerepublique.fr/a-la-une/mission-artemis-le-reve-lunaire-de-thomas-pesquet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mission Artemis : le rêve lunaire de Thomas Pesquet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtBqZgBlxcJEubTZYWJfqdyxaHLLkQJ1bxCzcxf6s8KgF54ARmHg8BxizeVsyoTAomvASGntVI" alt="Mission Artemis : le rêve lunaire de Thomas Pesquet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La promotion 2022 des nouveaux astronautes de l&#39;agence spatiale européenne est présentée le 23 novembre. L&#39;occasion de se poser la question de l&#39;avenir du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/sciences/thomas-pesquet-plusieurs-astronautes-francais-ca-donne-plus-de-flexibilite-23-11-2022-QNFA7DDYEVGEDFOLLFZSRWSVB4.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thomas Pesquet : «Plusieurs astronautes français, ça donne plus ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWPRbIxmhv0xoOeS5egtJnWK3lv3WvQYKe86-J9VMfxr8T8ooy-C0qGQYpUO5i2gw_zOvaiaAW" alt="Thomas Pesquet : «Plusieurs astronautes français, ça donne plus ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;Agence spatiale européenne a annoncé ce mercredi 23 novembre que les Français Sophie Adenot (active) et Arnaud Prost (réserviste) rejoignaient son équipe&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}