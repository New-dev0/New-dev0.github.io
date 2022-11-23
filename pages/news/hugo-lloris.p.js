import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hugo Lloris</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hugo Lloris"/>
        <meta name="description" content="Trending News about Hugo Lloris" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hugo Lloris</h1>
            <Image width={800} height={500} src="https://www.olympique-et-lyonnais.com/wp-content/uploads/2022/11/LorisAulas.jpg" alt="Hugo Lloris"/>
            <h3>Recent News</h3>
            <a href='https://www.olympique-et-lyonnais.com/ol-bleus-quand-jean-michel-aulas-questionne-hugo-lloris,271400.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>OL : quand Jean-Michel Aulas questionne Hugo Lloris</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMzrwstjp0n3Lj241xcmOMGu-PyYLNj045nAla255SalCl0-yiNicqzUJsRoI4V8w8ebfb0RLU" alt="OL : quand Jean-Michel Aulas questionne Hugo Lloris" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans Nice-Matin, Hugo Lloris a été invité à répondre à des questions posées par ses proches. Jean-Michel Aulas s&#39;est prêté à l&#39;exercice.</p></div>
            </div>
        </a><a href='https://www.sport.fr/football/les-5-noms-pour-remplacer-hugo-lloris-a-tottenham-965822.shtm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les 5 noms pour remplacer Hugo Lloris à Tottenham</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSlGhWmDw-rmkEggMiV-DhfWnTmN2RiB0ausn7wn-1PZGpjK8aXIUw2HC01xQIQOqXWkH7CRlYR" alt="Les 5 noms pour remplacer Hugo Lloris à Tottenham" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hugo Lloris (35 ans) est le capitaine des Spurs depuis de nombreuses années et il est le gardien titulaire indiscutable. Arrivant en fin de carrière,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foot01.com/equipe/ol/ol-lloris-devoile-a-aulas-son-plus-grand-regret-416232'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>OL : Lloris dévoile à Aulas son plus grand regret</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpddeKv420favBmXQOE6IZvIggk78hYNQWB86H0ZjL44bRIFQVHkcEpJu2pwICSO-nZztn-EAA" alt="OL : Lloris dévoile à Aulas son plus grand regret" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans les colonnes de Nice-Matin, Hugo Lloris a répondu à une question d&#39;un lecteur particulier : un certain Jean-Michel Aulas. Invité à répondre à des&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}