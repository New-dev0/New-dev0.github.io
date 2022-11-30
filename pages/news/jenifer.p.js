import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jenifer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jenifer"/>
        <meta name="description" content="Trending News about Jenifer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jenifer</h1>
            <Image width={800} height={500} src="https://resize-public.ladmedia.fr/img/var/public/storage/images/news/on-a-failli-mourir-jenifer-balance-la-verite-sur-le-tournage-dangereux-de-celebrity-hunted-1752411/47193751-1-fre-FR/On-a-failli-mourir-Jenifer-balance-la-verite-sur-le-tournage-dangereux-de-Celebrity-Hunted.jpg" alt="Jenifer"/>
            <h3>Recent News</h3>
            <a href='https://www.programme-tv.net/news/series-tv/314872-on-a-tous-failli-mourir-le-tournage-dune-emission-avec-jenifer-et-jarry-a-vire-au-cauchemar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“On a tous failli mourir” : le tournage d&#39;une émission avec Jenifer et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="“On a tous failli mourir” : le tournage d&#39;une émission avec Jenifer et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jenifer et Jarry, en binôme dans la série Celebrity Hunted - Chasse à l&#39;homme sur Prime Vidéo disponible le 2 décembre, ont raconté une anecdote très&nbsp;...</p></div>
            </div>
        </a><a href='https://www.public.fr/News/On-a-failli-mourir-Jenifer-balance-la-verite-sur-le-tournage-dangereux-de-Celebrity-Hunted-1752411'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;On a failli mourir&quot; : Jenifer balance la vérité sur le tournage ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSMmXL0s3NJLQrSN2bTnn4JYTtc-c5l9mLht1S7FG2hkIkDPD4kUngNRIFP16IR43-NKouFNYOW" alt="&quot;On a failli mourir&quot; : Jenifer balance la vérité sur le tournage ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Au cours d&#39;un entretien accordé à nos confrères de Gala.fr ce mardi 29 novembre dernier, Jenifer a raconté les coulisses du premier épisode de « Celebrity&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/on-a-failli-mourir-jenifer-raconte-son-tournage-catastrophe-avec-jarry-744053'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« On a failli mourir » : Jenifer raconte son tournage catastrophe avec ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSS6TpE94wUtg5APwv-IJEJdFM3nl2w7Veyrdg4etm8wbfmedWDFYdYybJ83j9nmPLJAmEwMHVi" alt="« On a failli mourir » : Jenifer raconte son tournage catastrophe avec ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jenifer a accordé une interview au magazine Gala ce mardi 29 novembre 2022. Dans celle-ci, la chanteuse s&#39;est confiée sur le tournage de la nouvell...</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/interview-jenifer-et-jarry-dans-celebrity-hunted-amazon-prime-video-cetait-une-cavale-sous-le-signe-dune-joyeuse-fete_507303'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>INTERVIEW – Jenifer et Jarry dans Celebrity Hunted (Amazon Prime ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ_T6BVDv6sm4B00DslRsfJGX6DyT3GhHg_XMmmjs2peACkpySPUqxDkhwBQE0QuFOrVJ4R1ZJD" alt="INTERVIEW – Jenifer et Jarry dans Celebrity Hunted (Amazon Prime ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un duo fusionnel et attachant. Jarry et Jenifer ont accepté de vivre une folle cavale en participant à la saison 2 de Celebrity Hunter - Chasse à l...</p></div>
            </div>
        </a><a href='https://www.ohmymag.com/people/actu-people/jenifer-frole-la-mort-avec-jarry-ce-traumatisme-quelle-noubliera-jamais_art154856.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jenifer frôle la mort avec Jarry : ce traumatisme qu&#39;elle n&#39;oubliera ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQbT4i2_bnkh_8ShIXAvASZFgIfc0RUzjU2a6o-qdjbgOG4KkGtUecKiJFFtvYBRLfoKpePiBFC" alt="Jenifer frôle la mort avec Jarry : ce traumatisme qu&#39;elle n&#39;oubliera ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour la chanteuse et l&#39;humoriste, les premiers instants sur le tournage de Celebrity Hunted ont été sacrément mouvementés.…</p></div>
            </div>
        </a>
        </Template></>;
}