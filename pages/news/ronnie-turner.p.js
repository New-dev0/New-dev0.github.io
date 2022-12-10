import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ronnie Turner</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ronnie Turner"/>
        <meta name="description" content="Trending News about Ronnie Turner" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ronnie Turner</h1>
            <Image width={800} height={500} src="" alt="Ronnie Turner"/>
            <h3>Recent News</h3>
            <a href='https://www.voici.fr/news-people/mort-de-ronnie-turner-afida-turner-revele-les-causes-de-son-deces-744837'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mort de Ronnie Turner : Afida Turner révèle les causes de son décès</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTCdLcmPAqkQUzwdS3ppWqF_JOGWV8YZP-jjDIVsk22hiwaYPtwhDSDDBreDD4CLUprXMXvxtxG" alt="Mort de Ronnie Turner : Afida Turner révèle les causes de son décès" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce vendredi 9 décembre, Afida Turner a rendu un nouvel hommage à Ronnie Turner, décédé à l&#39;âge de 62 ans. Si les causes de sa mort n&#39;ont pas été co...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/12/09/je-nai-pas-pu-te-sauver-afida-turner-endeuillee-par-la-perte-de-son-mari-ronnie-age-de-62-ans-10858471.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Je n&#39;ai pas pu te sauver&quot; : Afida Turner endeuillée après la perte de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQD5-aKWKkXynzGIktrqUA9l6GykyEKSUnhWmN47ZNcHAINoaOpjmXiL5pEVbtPl9X0cKe_CvjI" alt="&quot;Je n&#39;ai pas pu te sauver&quot; : Afida Turner endeuillée après la perte de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La chanteuse française Afida Turner a annoncé la mort de son mari, Ronnie Turner, le fils de Tina Turner. Celui-ci était âgé de 62 ans.</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/musique/315632-ronnie-turner-le-fils-de-tina-turner-est-mort-a-lage-de-62-ans/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronnie Turner, le fils de Tina Turner, est mort à l&#39;âge de 62 ans</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ronnie Turner, le fils de Tina Turner, est mort à l&#39;âge de 62 ans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ronnie Turner, le fils de Tina et Ike Turner, est décédé à l&#39;âge de 62 ans à Los Angeles. Les fans de la chanteuse américaine sont en deuil.</p></div>
            </div>
        </a><a href='https://www.femmeactuelle.fr/actu/news-actu/afida-turner-son-mari-ronnie-fils-de-la-chanteuse-tina-turner-est-mort-2146339'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Afida Turner : son mari, Ronnie, fils de la chanteuse Tina Turner, est ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0-qPSi0BjUMeE4VsGkDmOZbEqz1M5A2Vcw0BuA70p_wcRXcAFswMDkFvoBI8PNBqQDMKCK_gO" alt="Afida Turner : son mari, Ronnie, fils de la chanteuse Tina Turner, est ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vendredi 9 décembre 2022, TMZ a annoncé la mort de Ronnie Turner, à l&#39;âge de 62 ans. En deuil, sa veuve, Afida Turner, et sa mère, Tina Turner, lui o1.</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/je-nai-pas-pu-te-sauver-afida-turner-en-deuil-elle-annonce-la-mort-de-son-mari-ronnie-turner_508280'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Je n&#39;ai pas pu te sauver” : Afida Turner en deuil, elle annonce la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSxdYhpT54hacN0LhZzgpUzVb_3C2mJunFtIXIy8KHb8pGDTrifppGOglYK3Y0mkZBd-2XpfgMU" alt="“Je n&#39;ai pas pu te sauver” : Afida Turner en deuil, elle annonce la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Afida Turner a annoncé sur son compte Instagram la mort de son mari, Ronnie Turner, à l&#39;âge de 62 ans. Bien que séparée du fils de Tina Turner, la...</p></div>
            </div>
        </a><a href='https://www.public.fr/News/Afida-Turner-annonce-la-disparition-de-son-compagnon-Ronnie-fils-de-la-superstar-Tina-Turner-1754197'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Afida Turner annonce la disparition de son compagnon, Ronnie, fils ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSSAvAtV9wiLQhpTKK0yGy0n0VqHBGi-mWiwnZh2udeffL64244CknUn1B7p7H3yGiJfy-J1Jik" alt="Afida Turner annonce la disparition de son compagnon, Ronnie, fils ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce 9 décembre, Afida Turner a révélé sur Instagram la disparition de celui qui a longtemps partagé sa vie, Ronnie Turner.</p></div>
            </div>
        </a><a href='https://fr.news.yahoo.com/afida-turner-pleure-mort-mari-193100181.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Afida Turner pleure la mort de son mari Ronnie : premiers éléments ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT1kT1CQb3xGPK4iUd8DJka4r6jZX9BjLkY7_ESLALcp3iA6bHMN3w4nkpb4XFvx5WPtDZPp2zV" alt="Afida Turner pleure la mort de son mari Ronnie : premiers éléments ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coup dur pour Afida Turner. Mariée à Ronnie Turner depuis l&#39;année 2007, elle fait face à la mort de son partenaire,...</p></div>
            </div>
        </a>
        </Template></>;
}