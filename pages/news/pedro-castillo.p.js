import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pedro Castillo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pedro Castillo"/>
        <meta name="description" content="Trending News about Pedro Castillo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pedro Castillo</h1>
            <Image width={800} height={500} src="https://images.bfmtv.com/wKkyfLHGRd_R1o9yT4hotktSF5o=/0x106:2048x1258/2048x0/images/L-ancien-president-du-Perou-Pedro-Castillo-lors-d-un-discours-a-l-ONU-en-septembre-2022-1536914.jpg" alt="Pedro Castillo"/>
            <h3>Recent News</h3>
            <a href='https://www.bfmtv.com/international/amerique-latine/perou-place-en-detention-provisoire-l-ex-president-pedro-castillo-demande-l-asile-au-mexique_AD-202212090043.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pérou: placé en détention provisoire, l&#39;ex-président Pedro Castillo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRuHmqOr-Hh32g4zmBTF51zpJ-e3iKjCXRbwsLbacy07eRtZ4dYy560L9_EBYObO0Rl_C800D9_" alt="Pérou: placé en détention provisoire, l&#39;ex-président Pedro Castillo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ambassadeur du Mexique au Pérou, Pablo Monroy, a pu s&#39;entretenir avec Pedro Castillo depuis son lieu de détention dans une base de la police à Lima.</p></div>
            </div>
        </a><a href='https://www.lesechos.fr/monde/ameriques/perou-le-president-pedro-castillo-destitue-et-emprisonne-la-vice-presidente-dina-boluarte-investie-1887075'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Au Pérou, une nouvelle présidente pour surmonter la crise politique</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTnLV9S4u3RL2jOBmyCjRa9uXit1xxD_eFNMjxMQ05anRlufQ9c3zvrGKgjlufkh0Jc8tmXeyUI" alt="Au Pérou, une nouvelle présidente pour surmonter la crise politique" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le président Pedro Castillo a tenté de dissoudre le Parlement avant d&#39;être destitué pour « incapacité morale ». La vice-présidente Dina Boluarte le&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/monde/perou-le-parlement-destitue-le-president-castillo-ignorant-sa-dissolution-par-le-chef-d-etat-07-12-2022-2500872_24.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pérou : l&#39;ex-président Castillo placé en détention provisoire</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQX24lMme6y4jNf2R9WtSLos6dDV1LLrZQkv4YPfwJvtsubc4vDONUas62h7CP408-MhkeYtqg" alt="Pérou : l&#39;ex-président Castillo placé en détention provisoire" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La justice péruvienne a ordonné jeudi sept jours de détention provisoire à l&#39;encontre de l&#39;ex-président Pedro Castillo, destitué par le Parlement m...</p></div>
            </div>
        </a><a href='https://www.rfi.fr/fr/am%C3%A9riques/20221208-%C3%A0-la-une-au-p%C3%A9rou-la-chute-du-pr%C3%A9sident-pedro-castillo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>À la Une: au Pérou, la chute du président Pedro Castillo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCj-NTSTeS6wLBYDVF3XfE8ewxUQnQiQkSg5TlraFj8o_c7_Gwlu3sXqZBHzNkqmR2TDNl-4hq" alt="À la Une: au Pérou, la chute du président Pedro Castillo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le président Pedro Castillo a été destitué mercredi 7 décembre par le Parlement, alors qu&#39;il tentait de le dissoudre. C&#39;est sa vice-présidente Dina Boluarte&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lemonde.fr/international/article/2022/12/08/au-perou-le-president-pedro-castillo-destitue-et-arrete_6153490_3210.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Au Pérou, le président Pedro Castillo destitué et arrêté</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR32_QpUq44MRft8wAwux7SKT5hG_im8NsDQdPnxFzULF52TuQMD3PqCiRCRiAmotltOBKItBaD" alt="Au Pérou, le président Pedro Castillo destitué et arrêté" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cette femme de 60 ans a convoqué « une trêve politique afin d&#39;installer un gouvernement d&#39;union nationale ». Elle a prêté serment mercredi après-midi, tournant&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanityfair.fr/actualites/article/perou-le-president-pedro-castillo-destitue-pour-incapacite-morale-et-arrete'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pérou : le président Pedro Castillo destitué pour «incapacité morale ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8-mTqxgM6cwhaYlXzD_TKavYSghFaj-YksVLsFK0ekbVxaLPQ7WmdM6J7od4EVwrNlYTmall3" alt="Pérou : le président Pedro Castillo destitué pour «incapacité morale ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancienne vice-présidente, Dina Boluarte, a été investie présidente après la tentative de dissolution du Parlement par son prédécesseur.</p></div>
            </div>
        </a>
        </Template></>;
}