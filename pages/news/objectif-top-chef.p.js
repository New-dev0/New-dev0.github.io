import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Objectif Top Chef</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Objectif Top Chef"/>
        <meta name="description" content="Trending News about Objectif Top Chef" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Objectif Top Chef</h1>
            <Image width={800} height={500} src="https://static1.ozap.com/articles/8/62/43/08/@/4673831--objectif-top-chef-la-bande-annonce-d-opengraph_1200-1.jpg" alt="Objectif Top Chef"/>
            <h3>Recent News</h3>
            <a href='https://www.ozap.com/actu/-objectif-top-chef-qui-a-gagne-la-saison-8-sur-m6/624308'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Objectif Top chef&quot; : Qui a gagné la saison 8 sur M6 ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1rfr1KDvqD-bL59L1WcfY66-Kst5m5e0CfDI0UUbD0j3n7NFeotDNxToPnYiWtRFqjhcPFyu5" alt="&quot;Objectif Top chef&quot; : Qui a gagné la saison 8 sur M6 ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Philippe Etchebest a tranché ! Ce vendredi 25 novembre 2022, après près de trois mois de compétition, le chef préféré des Français a annoncé le nom de la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/objectif-top-chef-quel-candidat-va-integrer-la-brigade-de-philippe-etchebest-dans-top-chef-zaptv-743774'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Objectif Top Chef : quel candidat va intégrer la brigade de Philippe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT1dOqneDbp7GcEUY0D7xFnBlHCRS8LMczGnPU6tSlG2beAWOzqxc28FIIvdwkYtkbXzjQ6akJF" alt="Objectif Top Chef : quel candidat va intégrer la brigade de Philippe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce vendredi 25 novembre 2022, M6 diffusait le dernier numéro d&#39;Objectif Top Chef. Dans ce dernier, les téléspectateurs ont enfin découvert le nom d...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/tv/314635-objectif-top-chef-m6-qui-a-gagne-lemission-et-va-integrer-la-brigade-de-philippe-etchebest-dans-top-chef/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Objectif Top Chef (M6) : qui a gagné l&#39;émission et va intégrer la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Objectif Top Chef (M6) : qui a gagné l&#39;émission et va intégrer la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le dénouement de cette huitième saison d&#39;Objectif Top Chef est connu. Découvrez le nom de l&#39;amateur de cuisine qui a remporté la finale et intègrera la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.toutelatele.com/m6-une-fin-actee-pour-philippe-etchebest-marion-menacee-par-sarika-en-finale-d-objectif-top-chef-146902'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>M6 : une fin actée pour Philippe Etchebest, Marion menacée par ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTW9N-KKMlLjQx4xPSqutrbJgUZ-oq8VKWe29MX8x_EUEX-ANx-jt2r_9PhUMipU9FDNEBaP42j" alt="M6 : une fin actée pour Philippe Etchebest, Marion menacée par ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sarika et Marion sont les deux finalistes du concours Objectif top chef. Ce jeudi 24 novembre 2022, dès 18h40 sur M6, Sarika se disait « remontée comme un&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}