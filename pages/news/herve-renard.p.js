import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Herve Renard</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Herve Renard"/>
        <meta name="description" content="Trending News about Herve Renard" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Herve Renard</h1>
            <Image width={800} height={500} src="https://s.france24.com/media/display/491a569e-6c15-11ed-9c14-005056bfb2b6/w:1280/p:16x9/000_32Q93VN.jpg" alt="Herve Renard"/>
            <h3>Recent News</h3>
            <a href='https://www.france24.com/fr/sports/20221125-mondial-2022-herv%C3%A9-renard-le-sorcier-blanc-qui-pr%C3%A9side-%C3%A0-la-destin%C3%A9e-de-l-arabie-saoudite'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mondial-2022 : Hervé Renard, le &quot;sorcier blanc&quot; qui préside à la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRBA4eywlpKIfYuSPrh_FBos9fMoE2yWWzYC816QtGOH5lBNXteS7XMkqUs7cPA-rDfVyPMnkQl" alt="Mondial-2022 : Hervé Renard, le &quot;sorcier blanc&quot; qui préside à la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sélectionneur du Ghana, de la Zambie, de l&#39;Angola, de la Côte d&#39;Ivoire, du Maroc et maintenant de l&#39;Arabie saoudite... À 54 ans, Hervé Renard est passé,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/coupe-du-monde-2022/coupe-du-monde-herve-renard-revient-sur-son-incroyable-causerie-qui-a-fait-le-buzz--807763'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du Monde : Hervé Renard revient sur son incroyable ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTE4jTdocdWKSqLHza2eqQD1erwtUJiWiQvEVdcLSMjpuJOCM-NLuOaVCCKPMza8tpwfv1ISXcz" alt="Coupe du Monde : Hervé Renard revient sur son incroyable ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auteur d&#39;un discours mythique à la mi-temps d&#39;Arabie Saoudite - Argentine, Hervé Renard décrypte sa causerie. Zapping Onze Mondial PSG : la réponse cash de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francelive.fr/article/france-live/herve-renard-ce-qu-il-faut-savoir-sur-le-sorcier-blanc-selectionneur-francais-de-l-arabie-saoudite-7727134/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hervé Renard : ce qu&#39;il faut savoir sur le &quot;sorcier blanc ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzUA-cAGFi25TdLLIFDreeq06LY2oRp6N-k1ZH2nzGH1uacKPI1fcjrct99PZrBjk4N9zzJEPO" alt="Hervé Renard : ce qu&#39;il faut savoir sur le &quot;sorcier blanc ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vainqueur avec l&#39;Arabie Saoudite contre l&#39;Argentine, le sélectionneur français Hervé Renard est entré dans l&#39;histoire de la Coupe du monde.</p></div>
            </div>
        </a><a href='https://le10sport.com/football/coupe-du-monde/coupe-du-monde-2022-apres-son-incroyable-punchline-sur-messi-herve-renard-623138'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : Après son incroyable punchline sur Messi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRA0fwvC0tSn6L-IBF8M7HsdyLS19cH-8iCa4jYqEeFx_L4kLbXAp5OLW-_FH4jZS0xAXmQ8Gzr" alt="Coupe du monde 2022 : Après son incroyable punchline sur Messi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Plus habile clavier en main que ballon au pied, il décide de couvrir principalement un sport adulé, critiqué et détesté à la fois (le football) et un sport qui&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/sport/football-coupe-du-monde-qatar-2022-le-coup-de-gueule-de-herve-renard-a-la-mi-temps-d-argentine-arabie-saoudite-2239787.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Bougez-vous !&quot; : le coup de gueule de Hervé Renard à la mi-temps ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRc-VlAOfQECsCa1qCAUkmX9PZC_kYsxg6p-lIDsVagyPIjrJaLO5JrrfxmkFPCklajXoWh9CLD" alt="&quot;Bougez-vous !&quot; : le coup de gueule de Hervé Renard à la mi-temps ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans une vidéo partagée par la fédération saoudienne, le sélectionneur français des Faucons verts hausse le ton face à ses joueurs lors du match face à l&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtl.fr/sport/football/video-coupe-du-monde-le-discours-poignant-d-herve-renard-a-la-mi-temps-du-match-arabie-saoudite-argentine-7900209860'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO - Coupe du monde : le discours poignant d&#39;Hervé Renard à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRQAHZtlDJwr-CG_rI81iIY8mVzVBSO5Z4EYI2ejfjgBBdhvNzuKrf7DdASViM0HM0UPN4bEos" alt="VIDÉO - Coupe du monde : le discours poignant d&#39;Hervé Renard à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le sélectionneur de l&#39;Arabie Saoudite Hervé Renard a su remobiliser ses joueurs à la mi-temps du match face à l&#39;Argentine. La vidéo de son discours a été&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/sport/coupe_du_monde_2022/4011776-20221125-coupe-monde-2022-faites-selfie-messi-tant-causerie-magique-herve-renard-saoudiens'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : « Faites un selfie avec Messi tant qu&#39;on y ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7mykxsOZH4SlHrGH3Gq1ICEMFMnXhurTym8CtnUVN4upLqFjFUvE_esNvZX0yPRg9Sb96H8Lo" alt="Coupe du monde 2022 : « Faites un selfie avec Messi tant qu&#39;on y ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;entraîneur français de l&#39;Arabie Saoudite a remué son équipe à la mi-temps du match entre l&#39;Argentine. Avant qu&#39;elle ne réalise l&#39;exploit (2-1)</p></div>
            </div>
        </a>
        </Template></>;
}