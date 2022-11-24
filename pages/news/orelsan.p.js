import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Orelsan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Orelsan"/>
        <meta name="description" content="Trending News about Orelsan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Orelsan</h1>
            <Image width={800} height={500} src="https://resize-public.ladmedia.fr/img/var/public/storage/images/news/jamel-debbouze-pousse-a-bout-par-orelsan-plagiat-moqueries-a-gogo-le-celebre-humoriste-se-rebiffe-1751621/47179320-1-fre-FR/Jamel-Debbouze-pousse-a-bout-par-Orelsan-Plagiat-Moqueries-a-gogo-Le-celebre-humoriste-se-rebiffe.jpg" alt="Orelsan"/>
            <h3>Recent News</h3>
            <a href='https://www.public.fr/News/Jamel-Debbouze-pousse-a-bout-par-Orelsan-Plagiat-Moqueries-a-gogo-Le-celebre-humoriste-se-rebiffe-1751621'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jamel Debbouze poussé à bout par Orelsan : Plagiat, Moqueries à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTHpM6hGduPq8Mq6tfnFbE76DP8r4J-r_X64V8e736vXjjunhsbEBydI9rkO8mtRdk9n5liP0wZ" alt="Jamel Debbouze poussé à bout par Orelsan : Plagiat, Moqueries à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce mardi 22 novembre 2022, Jamel Debbouze, Orelsan accompagné de son frère ont certainement amusé les téléspectateurs du « Late Show » animé par Alain&nbsp;...</p></div>
            </div>
        </a><a href='https://fr.news.yahoo.com/ny-cam%C3%A9ras-battrait-l%C3%A0-jamel-120600113.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;S&#39;il n&#39;y avait pas des caméras... on se battrait là&quot; : Jamel Debbouze ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwDBkLwXAqqHeP_wGJOp3pysXU6lUKocJckVTrOd1oITd8L_EumIlSQ_iuHED12GrxCXlEWkai" alt="&quot;S&#39;il n&#39;y avait pas des caméras... on se battrait là&quot; : Jamel Debbouze ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Invités du &quot;Late Show&quot; d&#39;Alain Chabat le 22 novembre 2022 sur TF1, les frères Cotentin ont discuté au côté de Jamel...</p></div>
            </div>
        </a>
        </Template></>;
}