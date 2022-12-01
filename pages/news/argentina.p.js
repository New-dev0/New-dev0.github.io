import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentina"/>
        <meta name="description" content="Trending News about Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/30/ap22334713805422_wide-ca9ebfc0a130098d8f4802b8d09b0447764c393d-s1400-c100.jpg" alt="Argentina"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/30/1139970974/lionel-messi-and-argentina-advance-at-the-world-cup-with-a-2-0-victory-over-pola'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi and Argentina advance at the World Cup with a 2-0 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSjmQT53lg2pcRu5Qm8HUAN0LKXNayw11h88HzasJnrgjv2U83L1U3K8lfdD1kEpWKFX8n0QN4" alt="Lionel Messi and Argentina advance at the World Cup with a 2-0 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi will grace the World Cup stage at least one more time. Argentina finished in first place in Group C to set up a match against Australia,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/fifa-world-cup/story/4820876/argentinas-supporting-cast-leads-albiceleste-into-last-16'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina&#39;s supporting cast leads Albiceleste into last 16</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTV5CNAnCCLDvQay2EnJq-8dgrdoF44UB5TvcW-ARScPKzCUQm-R_lIk7KSsFGrg9KB710pdBsY" alt="Argentina&#39;s supporting cast leads Albiceleste into last 16" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For once, Lionel Messi didn&#39;t have to carry Argentina on his back, and his teammates instead shouldered the burden of taking them to the last 16.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/30/football/argentina-poland-group-c-2022-world-cup-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi has penalty saved but Argentina progresses to World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS8tzSl6wdFekHN6GNEqH-P-rK3aqS0tgXytMnreJ1yXbgAGJxpPny4pqbLhtM2JiOMK1nCfJCx" alt="Lionel Messi has penalty saved but Argentina progresses to World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi had a penalty saved but Argentina booked its ticket to the knockout phase of the 2022 World Cup with a 2-0 victory over Poland.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/live/2022/11/30/sports/argentina-poland-world-cup-scores'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs Poland Live: World Cup Scores and Standings</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6YGzYV_UYb5rypOqAaHpR4cS-R-_OZK-oJFC5QIhvCP0Ohs7MRAES-lHxioUlKgS6H8BG6mL9" alt="Argentina vs Poland Live: World Cup Scores and Standings" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mexico also scored to keep its World Cup hopes alive against Saudi Arabia.</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/poland-argentina-world-cup-2022-live-score-updates-result/U6axwGQihIZA/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Argentina advanced from Group C in victory over Poland ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSDSg6RP_V46x1QRtthxTet1CfNgOxEzibTYHkMxTu3oV10WsvilZah_RRatxHbbwEO3N_awXYV" alt="How Argentina advanced from Group C in victory over Poland ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina have beaten Poland 2-0 and qualified for the knockout stage of the 2022 World Cup. They will play Australia in the round of 16.</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/poland-vs-argentina-live-updates-pregame-score-stats-and-highlights-qatar-world-cup-2022-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Poland vs Argentina summary: score, goals, highlights 0-2 | Qatar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwQOisaGbhBnQC81YtF1pUUujZduFEBzlmt0d8NC0VfEtsIY2vek0qE_L7SOBjgiXay0LNe-4M" alt="Poland vs Argentina summary: score, goals, highlights 0-2 | Qatar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina ran out 2-0 winners over Poland and ensure qualification to the second round despite their initial defeat to Saudi Arabia. Poland qualify too.</p></div>
            </div>
        </a><a href='https://www.latimes.com/espanol/deportes/articulo/2022-11-30/minuto-a-minuto-de-argentina-vs-polonia-en-vivo-desde-el-stadium-974-en-qatar-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Minuto a Minuto de Argentina vs. Polonia EN VIVO desde el ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7afoqOIwmjaAfa-yPyTrk5T0Q2Rq8_tW7D11RHE1wP0NfTtDLhFYGETDJWXX6aqRfVWhdYg-E" alt="Minuto a Minuto de Argentina vs. Polonia EN VIVO desde el ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Con un dominio de principio a fin, Argentina derrotó a Polonia el miércoles y asegurarse su clasificación de la siguiente fase de Qatar 2022.</p></div>
            </div>
        </a><a href='https://espndeportes.espn.com/futbol/reporte?juegoId=633824'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polonia vs. Argentina - Reporte del Partido - 30 noviembre, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJ8dbQGluKkuAEHK3jtjc3rsfNmuDKjk39yWkeZdV9mMchl6lN7G3eoxTQTMqXH_QYUJr8qWKn" alt="Polonia vs. Argentina - Reporte del Partido - 30 noviembre, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Obtén el reporte del partido Polonia vs. Argentina 2022 Copa Mundial FIFA, Fase de grupos.</p></div>
            </div>
        </a><a href='https://cnnespanol.cnn.com/2022/11/30/argentina-polonia-resultado-mundial-qatar-2022-en-vivo-directo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Resumen y resultado de Argentina 2-0 Polonia en el Mundial de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQrQbYREYOg1ENfE4MA6iiCZpcY5jEIiaYyzYEvi6hiGD2n7vZiZgoQHW01xn1XMeicncqNQrC8" alt="Resumen y resultado de Argentina 2-0 Polonia en el Mundial de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina debe ganar para pasar sin depender de nada más para avanzar a octavos de final en el Grupo C del Mundial de Qatar. Si pierde, quedará eliminado.</p></div>
            </div>
        </a><a href='https://www.tudn.com/futbol/mundial-qatar-2022/partidos-en-vivo/fase-de-grupos/polonia-vs-argentina/messi-fallo-penal-pero-argentina-vencio-a-polonia-y-paso-a-octavos-de-final-en-el-mundial-qatar-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi falló penal, pero Argentina venció a Polonia y pasó a Octavos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS2zDclukNnyzO3d14p0Kefbq08RLJsu7W7c0PpbmCPwo6D614Av2bTSyHqdUqIV-u4zjUQ3p51" alt="Messi falló penal, pero Argentina venció a Polonia y pasó a Octavos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>El conjunto albiceleste fue muy superior a un tibio equipo polaco y ganó con los tantos de Alexis MacAllister y Julián Álvarez.</p></div>
            </div>
        </a>
        </Template></>;
}