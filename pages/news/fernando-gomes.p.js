import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fernando Gomes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fernando Gomes"/>
        <meta name="description" content="Trending News about Fernando Gomes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fernando Gomes</h1>
            <Image width={800} height={500} src="https://medias.lequipe.fr/img-photo-jpg/fernando-gomes-a-droite-au-cote-de-franz-beckenbauer-en-1983-p-bouttoux-a-lecoq-l-equipe/1500000001716481/0:0,1998:1332-640-427-75/846f8.jpg" alt="Fernando Gomes"/>
            <h3>Recent News</h3>
            <a href='https://www.lequipe.fr/Football/Actualites/Mort-de-fernando-gomes-meilleur-buteur-de-l-histoire-de-porto/1367031'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mort de Fernando Gomes, meilleur buteur de l&#39;histoire de Porto</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJ-GMpR0I83yQxuyt29Pc9uNp8hUxFT6vSjNn_xnl-3evRUdedhLSYeUtA7EJKk0U40iZrxA6C" alt="Mort de Fernando Gomes, meilleur buteur de l&#39;histoire de Porto" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancien international portugais Fernando Gomes, vainqueur de deux Souliers d&#39;Or dans les années 80 et meilleur buteur de l&#39;histoire du FC Porto, est mort&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/football/portugal/fc-porto/football-le-meilleur-buteur-de-l-histoire-du-fc-porto-fernando-gomes-est-decede-d711ea16-6daf-11ed-a158-c55305e444bb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Football. Le meilleur buteur de l&#39;histoire du FC Porto, Fernando ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShUPQle3KKROtuPJmXYNvkoXHIP1rOP8beqnJEMWhIw3uaUqplTwno0_Jm8OWUcFMn39I-C1lm" alt="Football. Le meilleur buteur de l&#39;histoire du FC Porto, Fernando ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Légende du FC Porto en étant le meilleur buteur historique, Fernando Gomes est décédé ce samedi 26 novembre. L&#39;ancien international portugais a succombé&nbsp;...</p></div>
            </div>
        </a><a href='https://fr.besoccer.com/info/fernando-gomes-legende-du-fc-porto-est-decede-a-l-age-de-66-ans-1206554'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fernando Gomes, légende du FC Porto, est décédé à l&#39;âge de 66 ans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQU-wkfsXhk_pJERIGM6eCnjwFyr873XI31C5x6nLa4DGlcIxNAIVZYL1yl9__WPQPG78tTn8FJ" alt="Fernando Gomes, légende du FC Porto, est décédé à l&#39;âge de 66 ans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le FC Porto a informé le décès de Fernando Gomes, une légende du club. Il est mort à l&#39;âge de 66 ans après une longue bataille contre le cancer.</p></div>
            </div>
        </a>
        </Template></>;
}