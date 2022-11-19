import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mentissa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mentissa"/>
        <meta name="description" content="Trending News about Mentissa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mentissa</h1>
            <Image width={800} height={500} src="https://resize.programme-television.ladmedia.fr/img/var/premiere/storage/images/tele-7-jours/news-tv/mentissa-ce-qui-differencie-vianney-d-autres-artistes-sa-generosite-4696265/101180383-1-fre-FR/Mentissa-Ce-qui-differencie-Vianney-d-autres-artistes-Sa-generosite.jpg" alt="Mentissa"/>
            <h3>Recent News</h3>
            <a href='https://www.programme-television.org/news-tv/Mentissa-Ce-qui-differencie-Vianney-d-autres-artistes-Sa-generosite-4696265'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mentissa : &quot;Ce qui différencie Vianney d&#39;autres artistes ? Sa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNUWGbVFvBuVFTfzN9sSVGsoQrJ7oJeBX5VkLoCtK2b-h9XHZ81_lKpLVUIXusuvolNBuCPRCO" alt="Mentissa : &quot;Ce qui différencie Vianney d&#39;autres artistes ? Sa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mentissa, la flamboyante finaliste de The Voice saison 10, sort enfin son premier album*, véritable cri du cœur d&#39;une jeune fille de son temps.</p></div>
            </div>
        </a><a href='https://www.divertir.eu/blog/culturel/mentissa-l-album-la-vingtaine.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mentissa : l&#39;album La Vingtaine</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGyewQcbZbrZiL7UUe_JYuUlSX7FyaRd8pJR7ScuCQr6RU26dvXYUtgg8FxXEtVFfZXkknVbNv" alt="Mentissa : l&#39;album La Vingtaine" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jeune bruxelloise influencée par Adèle, Ed Sheeran, Olivia Rodrigo et l&#39;envie de mêler pop anglaise à la variété française. Dans son premier album La&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}