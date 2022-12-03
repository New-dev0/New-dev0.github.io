import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lorenzo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lorenzo"/>
        <meta name="description" content="Trending News about Lorenzo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lorenzo</h1>
            <Image width={800} height={500} src="https://www.letelegramme.fr/images/2022/12/02/le-rappeur-lorenzo-a-sorti-ce-vendredi-un-nouvel-album-et_7088256_1000x526.jpg?v=1" alt="Lorenzo"/>
            <h3>Recent News</h3>
            <a href='https://www.letelegramme.fr/soir/le-rappeur-rennais-lorenzo-sort-son-nouvel-album-et-casse-l-industrie-musicale-02-12-2022-13233177.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le rappeur rennais Lorenzo sort son nouvel album et casse l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTKwquW9346p5mfF4fuxwbgywVDVA6nZoUHq9ZhdMgzV3xtuEU4XQ7y_aZe_eykX9hMoo76qSo3" alt="Le rappeur rennais Lorenzo sort son nouvel album et casse l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le rappeur breton Lorenzo a sorti ce vendredi son album, « Légende vivante », composé de 68 pistes sur les plateformes de streaming...avant de rétropédaler.</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/people/musique/j-ai-casse-l-industrie-musicale-l-astuce-de-lorenzo-pour-gonfler-ses-ecoutes-en-streaming_AN-202212020600.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;J&#39;ai cassé l&#39;industrie musicale&quot;: l&#39;astuce de Lorenzo pour gonfler ses ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7r612KzuFfA5DZ7p9wmTJoidyw9JAVRMz2kI1eIXczyEBtD5_rKqzm9ycdlW2QZyTheB5MOkB" alt="&quot;J&#39;ai cassé l&#39;industrie musicale&quot;: l&#39;astuce de Lorenzo pour gonfler ses ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le rappeur Lorenzo sort ce vendredi un album, dont il a découpé les 16 titres en 68 morceaux afin de multiplier ses écoutes en streaming.</p></div>
            </div>
        </a><a href='https://intrld.com/lorenzo-son-nouvel-album-deja-retire-de-spotify-et-apple-music/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lorenzo : son nouvel album déjà retiré de Spotify et Apple Music</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBkJHV61rApjqPAfAwnTup0kdRCpfDPwmna3knMRGjsoz14GAzQbkPJwV1zg41OcUxGCo6Ot94" alt="Lorenzo : son nouvel album déjà retiré de Spotify et Apple Music" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le nouvel album de Lorenzo, Légende vivante, est indisponible sur Spotify et Apple Music, quelques heures après sa publication.</p></div>
            </div>
        </a><a href='https://www.booska-p.com/musique/clips/la-methode-infaillible-de-lorenzo-pour-faire-gonfler-les-ventes-de-son-nouvel-album/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La méthode infaillible de Lorenzo pour faire gonfler les ventes de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSD2Q5zMLyywpW1BjrUIUMpRzO6MHg5IzJUSBDygNpdlahh7P6lwJ6yJTbCwIRZXbsIHxD9OkvA" alt="La méthode infaillible de Lorenzo pour faire gonfler les ventes de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce vendredi, Lorenzo a dévoilé son nouvel album Légende Vivante, qu&#39;il qualifie comme celui qui va clôturer sa carrière. L&#39;empereur du marketing Après six&nbsp;...</p></div>
            </div>
        </a><a href='https://www.13or-du-hiphop.fr/2022/12/02/lorenzo-divise-tous-ses-titres-en-4-parties-pour-gonfler-les-streams/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lorenzo divise tous ses titres en 4 parties pour gonfler les streams</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTck_bNYvMCNtDR2UI8T-zpaBN0Qs1CojFn4SYEvBlkmjj7yInCSjMFeuzUVGB03E7UWxUgmGW0" alt="Lorenzo divise tous ses titres en 4 parties pour gonfler les streams" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;explication du dernier coup de génie de Lorenzo pour booster les chiffres ventes en multipliant les écoutes sur les plateformes de streaming.</p></div>
            </div>
        </a><a href='https://www.konbini.com/popculture/lorenzo-decoupe-son-album-de-16-titres-en-68-morceaux-et-en-vrai-cest-un-coup-de-genie/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lorenzo découpe son album de 16 titres en 68 morceaux (et en vrai ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTp8hoA4x9wgmc6GC1CNsHccsI9Mqc-x2Wz3EtzRMD13fHCULmWAPRIk4DsTO9j6vZH0EjeH8JE" alt="Lorenzo découpe son album de 16 titres en 68 morceaux (et en vrai ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour le dernier album de sa carrière, Lorenzo fait un véritable &quot;coup d&#39;État&quot;.</p></div>
            </div>
        </a><a href='https://www.purebreak.com/news/-catastrophique-un-enfer-ce-rappeur-tente-de-voler-spotify-avec-la-sortie-de-son-nouvel-album-meme-ses-fans-ne-valident-pas/239355'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Catastrophique&quot;, &quot;un enfer&quot; : ce rappeur tente de voler Spotify avec ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9cymi5J_brHQCUhiZ_4uulIW-Ql2W5A2G19L_z-JkasMspcwdF3eX-s7F7JwGSUlSccOIqV6H" alt="&quot;Catastrophique&quot;, &quot;un enfer&quot; : ce rappeur tente de voler Spotify avec ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La date était cochée dans l&#39;agenda de tous ses fans, c&#39;est ce vendredi 2 décembre 2022 que Lorenzo a dévoilé &quot;Légende Vivante&quot;, son tout nouvel album. Toutefois&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}