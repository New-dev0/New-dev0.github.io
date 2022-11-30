import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Expat City Ranking 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Expat City Ranking 2022"/>
        <meta name="description" content="Trending News about Expat City Ranking 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Expat City Ranking 2022</h1>
            <Image width={800} height={500} src="https://www.vienna.at/2022/11/vienna-1529220_1920-4-3-0017071280-1707x1280.jpg" alt="Expat City Ranking 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.vienna.at/wien-ist-erneut-die-unfreundlichste-stadt-der-welt/7771870'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wien ist erneut die unfreundlichste Stadt der Welt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZ47V8B3-UuoBdSwzFV4LxIlgW3ogPCrl7bBzM_K7z-d37LbCgsX4npdebtqT2yqh1IIpN8uaB" alt="Wien ist erneut die unfreundlichste Stadt der Welt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Freundlichkeit ist definitiv nicht die Stärke der Wiener: Im Expat City Ranking 2022 wurde Wien erneut zur unfreundlichsten Stadt der Welt gewählt.</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141285183/expat-city-ranking-2022-wien-unfreundlichste-stadt-weltweit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wien ist die unfreundlichste Stadt der Welt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSrSZ8srxqWdQxOJkNG9Z9lprS0ixUDIfoaW715oH7fR21vqLshq5FwOT0Qo3qw2Zi9rRRyxP8N" alt="Wien ist die unfreundlichste Stadt der Welt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Vorjahr belegte die österreichische Hauptstadt noch Platz 14 im Expat-City-Ranking. Heuer reicht es nur mehr für Platz 27 von 50 Städten.</p></div>
            </div>
        </a><a href='https://www.expat-news.com/interkulturelle-kompetenzen-ausland/das-sind-die-lebenswertesten-staedte-fuer-expats-2022-52100'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Das sind die lebenswertesten Städte für Expats 2022 - Expat News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRbjrY71UzhMn_h6fy9DqKzXKu0tEXvC4hQRBWWvoPJYGq9Pmn2FYBKuMg9IbOGhd-P6-ueDXSm" alt="Das sind die lebenswertesten Städte für Expats 2022 - Expat News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Valencia, Dubai und Mexiko-Stadt sind die drei besten Städte im Expat City Ranking 2022 von InterNations, der eigenen Angaben zufolge weltweit größten&nbsp;...</p></div>
            </div>
        </a><a href='https://www.blick.ch/wirtschaft/willkommenskultur-ist-top-das-nachtleben-ein-flop-expats-lieben-basel-id18095731.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Expat City Ranking 2022: Basel deutlich vor Lausanne, Zürich und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTdnRoPRDy-UZCh7j0iFQcVZsoq3fhd7z0f0sehthORbBbV8lulQsuMEwiA-_3KPKgYhLEymyjS" alt="Expat City Ranking 2022: Basel deutlich vor Lausanne, Zürich und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wo fühlen sich ausländische Arbeitskräfte am wohlsten? Das jährliche Expat City Ranking gibt Aufschluss. In der Schweiz schneidet Basel in diesem Jahr am&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/wien/c-lokales/wien-bleibt-weiterhin-unfreundlichste-stadt-der-welt_a5740504'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Expats-Umfrage: Wien bleibt weiterhin unfreundlichste Stadt der ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ5woiZmOTOUfhESNn95xn8jlDs76t3fW5MskNwrabjh5nSvgG0tJjKZkMQNeQf0K2xXdDshvFD" alt="Expats-Umfrage: Wien bleibt weiterhin unfreundlichste Stadt der ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lebensqualität hui, Freundlichkeit pfui. Expats kürten Wien zur unfreundlichsten Stadt der Welt – und das nicht zum ersten Mal. WIEN. Wien war schon immer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t-online.de/nachrichten/deutschland/gesellschaft/id_100088938/expat-city-ranking-deutsche-staedte-bei-auslaendischen-fachkraeften-unbeliebt.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Expat City Ranking: Deutsche Städte bei ausländischen Fachkräften ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT1qmpsZd43tET9Lum2swLiVD8OUSu3vqjVwaE_qe7vPp47kFchA4bjzPr98EdmGY6pojpFVWEV" alt="Expat City Ranking: Deutsche Städte bei ausländischen Fachkräften ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Angesichts des Fachkräftemangels will die Bundesregierung um Zuwanderer werben. Die Eingewöhnung in Deutschland fällt einer Studie zufolge vielen schwer.</p></div>
            </div>
        </a>
        </Template></>;
}