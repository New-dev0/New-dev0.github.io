import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Prime Gaming</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Prime Gaming"/>
        <meta name="description" content="Trending News about Prime Gaming" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Prime Gaming</h1>
            <Image width={800} height={500} src="https://image.jeuxvideo.com/medias-md/166914/1669137848-495-card.jpg" alt="Prime Gaming"/>
            <h3>Recent News</h3>
            <a href='https://www.jeuxvideo.com/news/1674673/fifa-23-du-contenu-gratuit-pour-tous-les-abonnes-au-prime-gaming-d-amazon.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA 23 : Du contenu &quot;gratuit&quot; pour tous les abonnés au Prime ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSvNW8NPJaBuND8ukdNoTm2T_nQlnLtpxg5GbcEHvlxIgf6lZFF4DcbTKax_ndOjObvGL3fdSN-" alt="FIFA 23 : Du contenu &quot;gratuit&quot; pour tous les abonnés au Prime ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est l&#39;évènement sportif majeur du moment, EA Sports et Amazon Prime Gaming profitent de la Coupe du Monde de football pour proposer du contenu exclusif.</p></div>
            </div>
        </a>
        </Template></>;
}