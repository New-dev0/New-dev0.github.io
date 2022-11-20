import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>France - Espagne</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,France - Espagne"/>
        <meta name="description" content="Trending News about France - Espagne" /></Head><Template>
            <h1 style={{fontSize: "30"}}>France - Espagne</h1>
            <Image width={800} height={500} src="https://medias.lequipe.fr/img-photo-jpg/la-selection-francaise-emmenee-par-le-streamer-amine-adidas/1500000001713463/0:370,1998:1702-640-427-75/26b06.jpg" alt="France - Espagne"/>
            <h3>Recent News</h3>
            <a href='https://www.lequipe.fr/Esport/Actualites/La-france-remporte-la-match-des-influenceurs-contre-l-espagne-record-d-audience-battu/1365772'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La France remporte le match des influenceurs contre l&#39;Espagne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSbzQg6V6k81jXRHiBZRBUTqxUhdlA8xLXfK6XkORepesFbkZWR6vg9lxXrO30S7IGU9KTCLUb" alt="La France remporte le match des influenceurs contre l&#39;Espagne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le match de football entre influenceurs organisé par le streamer Amine au stade Jean-Bouin (Paris), ce samedi soir, s&#39;est achevé par un succès mérité de la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/football/direct-video-eleven-all-stars-france-espagne-le-match-entre-streamers-a-jean-bouin-en-live-0e40e338-674e-11ed-8d02-f374de6baa45'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eleven All Stars﻿. La France s&#39;impose face à l&#39;Espagne devant 1,1 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTk_IWZs81G8IprbuDXfAyHjYNq4YstsoLThndi2oXrujD5x0J0w25sZGfbK9bMN3vhgwrESGnY" alt="Eleven All Stars﻿. La France s&#39;impose face à l&#39;Espagne devant 1,1 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est un match international pas comme les autres. Dans l&#39;antre du Stade Français, le stade Jean-Bouin (Paris), c&#39;est le ballon rond qui a pris le pouvoir&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sofoot.com/les-steamers-francais-dominent-l-espagne-lors-du-eleven-all-stars-521710.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eleven All Stars : Les streamers français dominent l&#39;Espagne et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSwkgRzN6H7c8bMqs9Q_-HlxhlDnTmRvwxpd5lqN8tIaF8t_3WAmzrABFGzAuLEykigMRUSNiQG" alt="Eleven All Stars : Les streamers français dominent l&#39;Espagne et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France 2-0 Espagne Buts : Sacha Borg (26e) et Bruce Grannec (76e) pour la France Expulsion : Telmo (85e) pour l&#39;Espagne L&#39;histoire ...</p></div>
            </div>
        </a><a href='https://sans-filtre.fr/foot-la-france-simpose-2-0-face-a-lespagne-dans-cet-eleven-all-stars/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Foot – La France s&#39;impose 2-0 face à l&#39;Espagne dans cet Eleven All ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSSXc6MseMzU1FAFCCsvS3hqYu2Xp54CFpODG7ANv2DDiRndcnI3KsZhU156bYjKe0tgOFAv6ir" alt="Foot – La France s&#39;impose 2-0 face à l&#39;Espagne dans cet Eleven All ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La France remporte le Eleven All-Stars en s&#39;imposant 2-0 face à l&#39;Espagne. Un succès magnifique pour le monde du streaming français.</p></div>
            </div>
        </a><a href='https://www.laprovence.com/actu/en-direct/6972881/la-france-bat-lespagne-devant-20-000-personnes-lors-dun-match-de-foot-entre-youtubeurs-a-paris.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La France bat l&#39;Espagne devant 20 000 personnes lors d&#39;un match ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTe_3P0qfGG8nyqYdwD45_W8o7y0rwM_g9rdvKurd7y5PBckTqFq3rFt2WAWXhM3R5T9XomlJko" alt="La France bat l&#39;Espagne devant 20 000 personnes lors d&#39;un match ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Des youtubeurs français et espagnols s&#39;affrontaient à onze contre onze dans un match à l&#39;initiative du streamer français Amine. Un rendez-vous important pour la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.linternaute.com/sport/foot/2678822-eleven-all-stars-heure-chaine-le-programme-du-match-france-espagne-des-streamers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eleven All Stars : heure, chaîne... Le programme du match France ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSY_rpkmveLKAbTWouKLxcjZOxNinRwTWDUGmsFbzDMqNWPkfbv1Xc13b3AxdshTonS2TJjesq7" alt="Eleven All Stars : heure, chaîne... Le programme du match France ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après le Grand Prix de Formule 4 organisé par Squeezie, place au match France - Espagne, organisé par les Streamers.</p></div>
            </div>
        </a>
        </Template></>;
}