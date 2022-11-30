import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Helene Segara</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Helene Segara"/>
        <meta name="description" content="Trending News about Helene Segara" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Helene Segara</h1>
            <Image width={800} height={500} src="https://cdn-s-www.vosgesmatin.fr/images/F3517B15-F651-4CC5-9FF2-8E29D6A9F5E8/FB1200/photo-1669713924.jpg" alt="Helene Segara"/>
            <h3>Recent News</h3>
            <a href='https://www.vosgesmatin.fr/culture-loisirs/2022/11/29/michel-drucker-et-helene-segara-ne-viendront-pas-a-remiremont'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vosges. Michel Drucker et Hélène Ségara ne viendront pas à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTVF7L0RCJM81FKmvdFcsOZwISaT8PWh86ZXPl1ECXjp2tAa_A7dV1JEi7TnamzLM4BjDVjxhll" alt="Vosges. Michel Drucker et Hélène Ségara ne viendront pas à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les organisateurs de la PACCT ont annoncé ce mardi matin l&#39;annulation du concert d&#39;Hélène Ségara et spectacle de Michel Drucker, prévus initialement au&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/infos/societe/manque-de-reservations-et-contraintes-techniques-helene-segara-et-michel-drucker-annules-a-remiremont-5820972'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manque de réservations et contraintes techniques : Hélène Ségara ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSExRo-qMFmPQV7yCJ0vgUdEWeBSQmbmubUgEsfFII6cQ8iKC6zW-lYs-Bqkt3hNAXV1xyy63SL" alt="Manque de réservations et contraintes techniques : Hélène Ségara ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les organisateurs des deux spectacles prévus le 4 décembre et le 21 janvier au palais des congrès de Remiremont dans les Vosges annoncent leur annulation.</p></div>
            </div>
        </a><a href='https://www.aufeminin.com/beaute-de-stars/helene-segara-les-secrets-de-la-chevelure-sublime-de-la-chanteuse-s4053516.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hélène Ségara nous dévoile les secrets de sa chevelure sublime</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQihW8QNnqZbZEzWSdGyZydejhMiA4v8zBY41Rbl4aDHkVS-GSaVP2QXr6kurynSLrWQD4j4URC" alt="Hélène Ségara nous dévoile les secrets de sa chevelure sublime" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Naturellement, mes cheveux sont mousseux, épais et presque crépus. C&#39;est un vrai challenge de les lisser et d&#39;en prendre soin !” nous confie Hélène Ségara.</p></div>
            </div>
        </a><a href='https://remiremontvallees.com/2022/11/29/remiremont-les-spectacles-de-michel-drucker-et-dhelene-segara-sont-annules/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Remiremont – Les spectacles de Michel Drucker et d&#39;Hélène Segara ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ6yMrRaCAInDspxL3gHbBixat-fYa0Jq2jW8gWel466pQnu3dpWR9g06266KafhfSvr_fIYuyj" alt="Remiremont – Les spectacles de Michel Drucker et d&#39;Hélène Segara ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;association PACCT (Partenariat des Acteurs Culturels Citoyens et Territoriaux) et l&#39;association R-Play ont le regret de vous annoncer l&#39;annulation de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}