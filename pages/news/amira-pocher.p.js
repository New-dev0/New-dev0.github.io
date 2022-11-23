import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amira Pocher</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amira Pocher"/>
        <meta name="description" content="Trending News about Amira Pocher" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amira Pocher</h1>
            <Image width={800} height={500} src="https://media.kleinezeitung.at/social_klz/images/uploads_520/focal0x0-0x0/2/f/4/6218484/1FDDBCB3-4DB4-4251-A4DC-AA7DE65BDE7D_v0_h.jpg" alt="Amira Pocher"/>
            <h3>Recent News</h3>
            <a href='https://www.kleinezeitung.at/kaernten/6218484/Grundstueckskauf-geplant_Amira-Pocher-laesst-Fans-an-ihrem'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amira Pocher lässt Fans an ihrem Kärnten-Urlaub teilhaben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9PDcyPelSbF1f7NBxYQTJQsIO83oz0kcnxnAr46NwkD2_pMFeTs7EKeCLgoO4LZDC9u7QexQA" alt="Amira Pocher lässt Fans an ihrem Kärnten-Urlaub teilhaben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Klagenfurterin Amira Pocher, in Deutschland lebende Moderatorin und Podcasterin, ist aktuell wieder in Kärnten. Wo sie sich befindet und worüber sich&nbsp;...</p></div>
            </div>
        </a><a href='https://www.5min.at/202211586851/moderatorin-amira-pocher-urlaubt-am-magdalensberg/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Moderatorin Amira Pocher urlaubt am Magdalensberg</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTlMryAD2pd-GEK1gY4yT_xKQmbC2bk-UNxho7RbIIrpFVChda6NbsvmkCB4wYdEYJs55zcmL92" alt="Moderatorin Amira Pocher urlaubt am Magdalensberg" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Es schneit&#39;, schreibt Amira Pocher am heutigen Dienstag, dem 22. November 2022, in den sozialen Medien. Der Ausblick, den sie dabei mit ihren Fans teilt,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}