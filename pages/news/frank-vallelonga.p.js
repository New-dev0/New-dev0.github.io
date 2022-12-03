import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Frank Vallelonga</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Frank Vallelonga"/>
        <meta name="description" content="Trending News about Frank Vallelonga" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Frank Vallelonga</h1>
            <Image width={800} height={500} src="https://i.ds.at/SgzxNw/rs:fill:1200:600/plain/2022/12/02/Vale.jpeg" alt="Frank Vallelonga"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000141447545/green-book-schauspieler-frank-vallelonga-ist-gestorben'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Green Book&quot;-Schauspieler Frank Vallelonga ist gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYQwvHcoCJS01J6d-dCj3P-4W8AZ2iThGAsOpMKNE05nS5kTPmJKTGd2MAhT4NrFXteadEXDTc" alt="&quot;Green Book&quot;-Schauspieler Frank Vallelonga ist gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Leiche des 60-jährigen Darstellers wurde in der New Yorker Bronx aufgefunden.</p></div>
            </div>
        </a><a href='https://www.heute.at/s/green-book-star-frank-vallelonga-jr-ist-gestorben-100242034'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Green Book&quot;-Star Frank Vallelonga Jr. ist gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTF3rcyouE8zTMNNZn9eR5LtXLRda_gy9lN9dsaFrOYLRZwfd-ZIlUciqF7dN4FHnRX25RAOn7s" alt="&quot;Green Book&quot;-Star Frank Vallelonga Jr. ist gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Schauspieler Frank Vallelonga Jr. ist im Alter von 60 Jahren gestorben. Die Todesursache ist noch unklar.</p></div>
            </div>
        </a><a href='https://www.film.at/stars/frank-vallelonga-jr-tot-green-book/402245121'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Green Book&quot;-Star Frank Vallelonga Jr. ist tot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTNCNktvPOJb1KaHnRA-3oemaUnxV2SdpEQJhoLbRK8ESiWRkpZLjKG_k3vKRk3Ocfa4Ok9KjTc" alt="&quot;Green Book&quot;-Star Frank Vallelonga Jr. ist tot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Green Book&quot;-Star Frank Vallelonga Jr. ist tot. Er starb mit 60 Jahren. Todesursache war wahrscheinlich eine Überdosis.</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/gesellschaft/menschen/new-york-green-book-darsteller-frank-vallelonga-tot-18505154.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Frank Vallelonga Junior: Leiche des „Green Book“-Darstellers auf ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRvfk65JF4nv5jASXWpe4ufKVC4x_KeAZiXKgS35tVX5_038DzLIaA2g2dkP-KXTPFMj8C1WlTu" alt="Frank Vallelonga Junior: Leiche des „Green Book“-Darstellers auf ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein 35-Jähriger hatte Vallelongas leblosen Körper aus einem Auto gezogen und ihn einfach auf einem New Yorker Bürgersteig zurückgelassen....</p></div>
            </div>
        </a><a href='https://www.focus.de/kultur/stars/seine-leiche-wurde-abgelegt-green-book-star-frank-vallelonga-jr-tot-in-new-york-gefunden_id_180424655.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Green Book“-Star Frank Vallelonga jr. tot in New York gefunden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSX97ApRlKyagvoFEa47fZQP87Z_Kvt7j_DmktmS-BkF6QLVqWcHKsBHHz6L2Z2WMAy2nlFP90H" alt="„Green Book“-Star Frank Vallelonga jr. tot in New York gefunden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Er wurde unter anderem mit dem oscarprämierten Film „Green Book´ bekannt: Der US-Schauspieler Frank Vallelonga jr. ist tot. Die Leiche des 60-Jährigen wurde&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2872144'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wie Abfall entsorgt - „Green Book“-Star tot in New York aufgefunden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRyMvF5KCdAsl030LwDBk9hp7GLPNnybtJjFU9VOMlsS9KSAfSk3WB0DZi8tl06WcmabahnCV2z" alt="Wie Abfall entsorgt - „Green Book“-Star tot in New York aufgefunden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anfang der Woche wurde in New York die Leiche eines Mannes gefunden. Am Donnerstag wurde der Tote identifiziert: Es handelt sich dabei um „Green ...</p></div>
            </div>
        </a><a href='https://www.t-online.de/unterhaltung/stars/id_100091010/leiche-von-schauspieler-frank-vallelonga-jr-auf-der-strasse-in-new-york-gefunden.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leiche von Schauspieler Frank Vallelonga Jr. auf der Straße in New ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBrcY4zOYzoekbfcdx5B-PJvzBeVJW7gtvEmoYGEmlW8-ruyfKfIx5Gynjti5gwtzrRQg_nROo" alt="Leiche von Schauspieler Frank Vallelonga Jr. auf der Straße in New ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der US-Schauspieler Frank Vallelonga Jr. ist tot. Wie die Behörden in New York bestätigten, starb der &quot;Green Book&quot;-Star vermutlich an einer Überdosis.</p></div>
            </div>
        </a>
        </Template></>;
}