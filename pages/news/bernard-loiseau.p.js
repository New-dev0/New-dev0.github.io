import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bernard Loiseau</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bernard Loiseau"/>
        <meta name="description" content="Trending News about Bernard Loiseau" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bernard Loiseau</h1>
            <Image width={800} height={500} src="https://www.francetvinfo.fr/pictures/hvY4JHDai-0E0z9F9csPXSbl10g/1500x843/2022/11/17/phpBzuY5E.jpg" alt="Bernard Loiseau"/>
            <h3>Recent News</h3>
            <a href='https://www.francetvinfo.fr/culture/cuisine-et-gastronomie/video-on-me-laissait-six-mois-la-revanche-de-dominique-loiseau-sur-un-milieu-qui-avait-predit-sa-perte-apres-le-suicide-de-son-mari-le-chef-triplement-etoile_5482452.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDEO. &quot;On me laissait six mois&quot; : la revanche de Dominique ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTC3gCygrjVd2xrXU7zhLmDawabBxDGXix_UgmMU1zMo-iNwrofIuJPIOzm6bZha2Xw7qZ-dV50" alt="VIDEO. &quot;On me laissait six mois&quot; : la revanche de Dominique ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est elle qui dirige aujourd&#39;hui &quot;Le Relais de la Côte-d&#39;Or&quot; à Saulieu, haut lieu de la cuisine. Dominique Loiseau est l&#39;héritière d&#39;un monument de la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bienpublic.com/societe/2022/11/17/envoye-special-la-famille-loiseau-a-l-honneur-ce-jeudi-soir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Télévision. Saulieu : la famille Loiseau à l&#39;honneur ce jeudi soir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Télévision. Saulieu : la famille Loiseau à l&#39;honneur ce jeudi soir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il y a bientôt 20 ans, en février 2003, disparaissait Bernard Loiseau, le chef cuisinier et restaurateur français du restaurant gastronomique Relais Bernard&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}