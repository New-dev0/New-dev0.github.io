import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Etienne Daho</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Etienne Daho"/>
        <meta name="description" content="Trending News about Etienne Daho" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Etienne Daho</h1>
            <Image width={800} height={500} src="https://i.f1g.fr/media/cms/1200x630_crop/2022/11/24/6921a473332c509e1e156129baf3459b7e548ac135eae7ade6ecbaab5411c977.jpg" alt="Etienne Daho"/>
            <h3>Recent News</h3>
            <a href='https://tvmag.lefigaro.fr/programme-tv/actu-tele/je-me-suis-fait-serrer-etienne-daho-revele-dans-c-a-vous-s-etre-fait-arreter-par-la-police-20221124'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Je me suis fait serrer» : Etienne Daho révèle dans «C à vous» s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQbQAt_VUjx6lKYneHQwp7st_PPtjVw_J9nEi1mkXKISEbFzGqQwIUJY72bvZwQ1bRKftupC2aa" alt="«Je me suis fait serrer» : Etienne Daho révèle dans «C à vous» s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;interprète de Comme un boomerang était présent dans l&#39;émission présentée par Anne-Elisabeth Lemoine. Et il est revenu sur d&#39;étonnantes confidences faites&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/etienne-daho-ce-jour-ou-il-a-vole-une-voiture-et-sest-fait-arreter-par-la-police-zaptv-743688'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Etienne Daho : ce jour où il a volé une voiture et s&#39;est fait arrêter par ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQIP7koQy61RR7N5dk1-Ew7Wu1ZYwLNlXcnJuGdoU8zYRr5gHRj99UMNfVKGZAezSELFehs9_Ir" alt="Etienne Daho : ce jour où il a volé une voiture et s&#39;est fait arrêter par ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans le livre d&#39;Etienne Daho, A secret Book, signé Sylvie Coma, le chanteur se dévoile en toute intimité. À partir d&#39;archives, les grands moments d...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/tv/314572-cetait-juste-un-emprunt-etienne-daho-raconte-son-arrestation-pour-vol-de-voiture-dans-c-a-vous-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;C&#39;était juste un emprunt&quot; : Étienne Daho raconte son arrestation ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;C&#39;était juste un emprunt&quot; : Étienne Daho raconte son arrestation ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Étienne Daho, le chanteur du tube Week-end à Rome, a raconté son arrestation en 1976 pour le vol d&#39;une voiture en direct dans C à vous.</p></div>
            </div>
        </a>
        </Template></>;
}