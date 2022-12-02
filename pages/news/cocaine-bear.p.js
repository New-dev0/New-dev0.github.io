import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cocaine Bear</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cocaine Bear"/>
        <meta name="description" content="Trending News about Cocaine Bear" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cocaine Bear</h1>
            <Image width={800} height={500} src="https://image.film.at/images/facebook/7447242/cocaine_bear.jpg" alt="Cocaine Bear"/>
            <h3>Recent News</h3>
            <a href='https://www.film.at/news/cocaine-bear-trailer/402244362'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Cocaine Bear&quot;: Bekiffter Bär in verrücktem Thriller</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT0qUDqIfYXu4ib2hWjjkcYq_UEUmkYNlvq-wjUSyPr8ynZ3A8OKxKhq0apzYx-8uqeCaunspbs" alt="&quot;Cocaine Bear&quot;: Bekiffter Bär in verrücktem Thriller" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Cocaine Bear&quot;-Trailer: Bekiffter Bär in verrücktem Thriller. Nach 40 Kilo Kokskonsum muss man sich auf ein wildes Treiben gefasst machen.</p></div>
            </div>
        </a><a href='https://www.filmstarts.de/nachrichten/1000004709.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wird das der wildeste Film 2023? Im Trailer zu &quot;Cocaine Bear&quot; läuft ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR7uIOLoH4raKBT_Z7BMdsODr7kENtUsNSkiL1hSe_55_r5J-QVJTLMuWZY3YeafzVvBYZxrpHR" alt="Wird das der wildeste Film 2023? Im Trailer zu &quot;Cocaine Bear&quot; läuft ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Unfassbar, aber wahr: Die Grundidee zu „Cocaine Bear“ basiert auf wahren Begebenheiten. Im ersten Trailer zur abgedrehten Tierhorror-Komödie sehen wir,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moviepilot.de/news/bestialische-zerstoerungswut-erster-trailer-fuer-unfassbare-wahre-geschichte-cocaine-bear-zeigt-einen-der-letzten-auftritte-einer-filmlegende-1139212'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bestialische Zerstörungswut: Erster Trailer für unfassbare wahre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRzT9LYtndrlJXmM7U3h7J83AVk5AxRMnEPU2e-q715CT6i0MTcbtZPT8g8i_2OA3xfhdy0_ehU" alt="Bestialische Zerstörungswut: Erster Trailer für unfassbare wahre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit Cocaine Bear erwartet uns der vielleicht abgefahrenste Film 2023. Im ersten Trailer verschlingt ein Schwarzbär ein Päckchen Kokain.</p></div>
            </div>
        </a><a href='https://www.serienjunkies.de/news/cocaine-bear-trailer-horrorfilm-116145.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cocaine Bear: Trailer zur Horrorkomödie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfTtvxPsKykKNDxscvL1R6IGT1hvYP1ccz29l_qAtvEZfXmFJmfvFNE_AcuP1k33CxfrFsQ6Wl" alt="Cocaine Bear: Trailer zur Horrorkomödie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Universal hat ein neues Vorschauvideo zur verrückten Horrorkomödie Cocaine Bear veröffentlicht. Mit dabei sind Stars wie Keri Russell, Margo Martindale,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tvmovie.de/news/cocaine-bear-elizabeth-banks-spricht-ueber-den-abgedrehten-koks-baeren-interview-129213'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Cocaine Bear“: Elizabeth Banks spricht über den abgedrehten Koks ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGKJ7bERSrYzZXPbBFWI8FbQPbnKUvLzUOLD_a3HpxVvUOZH8ZuAYyjOZUZyzgqba1i24fCIbE" alt="„Cocaine Bear“: Elizabeth Banks spricht über den abgedrehten Koks ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elizabeth Banks kam auf die Idee, die verrückte Geschichte des Koks-Bären in &quot;Cocaine Bear&quot; zu verfilmen. Gegenüber „TV Movie.</p></div>
            </div>
        </a><a href='https://www.tag24.de/unterhaltung/kino-news/cocaine-bear-baer-schnupft-unmengen-kokain-und-startet-blutigen-amoklauf-2678927'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Cocaine Bear&quot;: Bär schnupft Unmengen Kokain und startet blutigen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWNle6EYgWwHK8Gw_2--F5H6tNTAhPXSd1V-PzPrUdneaCZwBR67zTWRWKjatAc8spPg0NqtxI" alt="&quot;Cocaine Bear&quot;: Bär schnupft Unmengen Kokain und startet blutigen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein völlig zugekokster, Amok laufender Schwarzbär! Die durchgeknallte Story von &quot;Cocaine Bear&quot; beruht auf wahren Begebenheiten!</p></div>
            </div>
        </a><a href='http://www.robots-and-dragons.de/news/127153-cocaine-bear-trailer-zur-blutigen-schwarzen-komodie'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cocaine Bear: Neuer Trailer zur blutigen schwarzen Komödie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSsgJxW7Qfn7YC1cwoy2o6djIwTT9KglAHyNvJYAR5RVbev_UnOhBwnCWPK58T3q6M9D4fkJKpV" alt="Cocaine Bear: Neuer Trailer zur blutigen schwarzen Komödie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Hauptrollen in Cocaine Bear spielen Keri Russell, O&#39;Shea Jackson Jr., Christian Convery-Jennings, Alden Ehrenreich, Jesse Tyler Ferguson, Brooklynn Prince,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}