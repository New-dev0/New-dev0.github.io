import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chantal Goya</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chantal Goya"/>
        <meta name="description" content="Trending News about Chantal Goya" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chantal Goya</h1>
            <Image width={800} height={500} src="" alt="Chantal Goya"/>
            <h3>Recent News</h3>
            <a href='https://www.femmeactuelle.fr/actu/news-actu/chantal-goya-ses-etonnantes-revelations-sur-son-diner-avec-les-beatles-2145936'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chantal Goya : ses étonnantes révélations sur son dîner avec les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1022r7yuHvDLcgthaJ24ZOUmB4PvBHNATufgU_ZPqdRy3PGnV7j0ASW1KzKPvjK_VJZkIXYjr" alt="Chantal Goya : ses étonnantes révélations sur son dîner avec les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Invitée dans Télématin dimanche 4 décembre 2022 sur France 2, Chantal Goya est venue présenter son nouveau spectacle. L&#39;occasion pour la chanteuse de1.</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/video-chantal-goya-sa-rencontre-improbable-avec-un-celebre-groupe-de-rock_507888'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO – Chantal Goya : sa rencontre improbable avec un célèbre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQPSB_aOR65-3XjRW7CDxxxC5e_o4_iahnhYyLzSYFiaDF0Y6TXDk75-b1ELX22yuXjqC4qfe1" alt="VIDÉO – Chantal Goya : sa rencontre improbable avec un célèbre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chantal Goya n&#39;arrête jamais : en tournée avec son nouveau spectacle &quot;Sur la route enchantée&quot;, elle publie également une bande dessinée. Invitée de...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/tv/315201-ils-etaient-fascines-car-jetais-francaise-chantal-goya-raconte-son-incroyable-diner-avec-les-beatles-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ils étaient fascinés car j&#39;étais française&quot; : Chantal Goya raconte son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;Ils étaient fascinés car j&#39;étais française&quot; : Chantal Goya raconte son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En 1962, alors que les Beatles étaient en train d&#39;exploser au niveau international, Chantal Goya a eu le privilège de partager un dîner avec eux,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}