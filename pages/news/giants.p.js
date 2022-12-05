import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Giants</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Giants"/>
        <meta name="description" content="Trending News about Giants" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Giants</h1>
            <Image width={800} height={500} src="https://static01.nyt.com/images/2022/12/04/multimedia/04giants-1-1-12cb/04giants-1-1-12cb-facebookJumbo.jpg" alt="Giants"/>
            <h3>Recent News</h3>
            <a href='https://www.nytimes.com/2022/12/04/sports/football/giants-washington-commanders-score.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Similar Teams With Similar Records, Giants and Commanders Play ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3luIY_EuzPzjTn2K1PgFuTny7-ttqLK1AFS0crHYu-OYFms6XcoJsOkYgAnSGRO9U0GoOt7d5" alt="Similar Teams With Similar Records, Giants and Commanders Play ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The result left the Giants at 7-4-1 and the Commanders at 7-5-1, further complicating the teams&#39; stretch run in a competitive N.F.C. East.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/2022/12/04/commanders-giants-tie-nfc-east/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Commanders and Giants have unfinished business after a 20-20 tie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS9yOIxxrD0lVVsazr0Rt-u8QaT_R2OqCGyg15i_iFcl-YsP3Nbmm3cCI9yrHnHxndOJhii0kJR" alt="Commanders and Giants have unfinished business after a 20-20 tie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a tight game with major NFC East ramifications, the Commanders and Giants couldn&#39;t settle anything and will meet again in two weeks.</p></div>
            </div>
        </a><a href='https://www.giants.com/news/nfl-week-13-highlights-stats-washington-commanders-saquon-barkley-azeez-ojulari'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Instant Analysis: Giants tie Commanders, 20-20</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRqDCFKA_8ngSjz-4YUBAmtl-chX-QWnA_vwc_gwjvW8xe2uN9Cg9wo-HKYahZFQT-nxVli0EIG" alt="Instant Analysis: Giants tie Commanders, 20-20" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Highlights, notes and analysis from the Week 13 matchup between the Giants and Commanders.</p></div>
            </div>
        </a><a href='https://www.amny.com/sports/football/giants-tie-commanders-emotions/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giants try to make sense of their emotions after overtime tie against ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSx2kqHwAR-r15jH4N41-aaZyE6CVs2V8NNpGkiBIKMl3kWZvY3mWx8ggGqAvwd_-9PIdyRD5Ov" alt="Giants try to make sense of their emotions after overtime tie against ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Washington Commanders quarterback Taylor Heinicke (4), center, throws under pressure from New York Giants&#39; defenders during the second half of an NFL&nbsp;...</p></div>
            </div>
        </a><a href='https://www.northjersey.com/story/sports/nfl/giants/2022/12/04/ny-giants-vs-commanders-live-updates-score-results/69695981007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NY Giants, Washington Commanders tie for the first time since 1997</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTI1N0eHjLbwbM862UIYKiKVGTShSZ63W4ziQWS-SgDA3Ihldn5M-xbuj9ImKkCmnwKZEHdHJiL" alt="NY Giants, Washington Commanders tie for the first time since 1997" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nothing is really settled between the New York Giants and Washington Commanders after Sunday&#39;s 20-20 tie.</p></div>
            </div>
        </a><a href='https://profootballtalk.nbcsports.com/2022/12/04/giants-commanders-play-to-a-20-20-tie/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giants, Commanders play to a 20-20 tie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS3LzNKiQ1wuRkhsO6Cai_Um0yffjXlRDQ5KmqZAEVZ2q9ou_UVNGPugRBGdBJFOGlZxQ3S5Sji" alt="Giants, Commanders play to a 20-20 tie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Graham Gano&#39;s 58-yard field goal try on the final play of overtime fell short and the two NFC East teams were left with a 20-20 tie at MetLife Stadium. The&nbsp;...</p></div>
            </div>
        </a><a href='https://espndeportes.espn.com/futbol-americano/nfl/cronica?juegoId=401437880'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Commanders vs. Giants - Reporte de Juego - 4 diciembre, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3Yol6YZ70EutDQYgLVeBYjvSt4JYj8V88HCjE6vUz8HYRFstXf-TPvsbxadFLrYU-nXLnEowL" alt="Commanders vs. Giants - Reporte de Juego - 4 diciembre, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New York todavía controla su destino en la carrera hacia los playoffs, pero Washington ahora depende de otros resultados.</p></div>
            </div>
        </a><a href='https://www.sandiegouniontribune.com/en-espanol/noticias/story/2022-12-04/giants-y-commanders-empatan-al-quedar-corta-patada-de-gano'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giants y Commanders empatan al quedar corta patada de Gano</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTHZiUdT2m3IoPi0sqbvuPfWPNv3vxfd8M4nDDlUhogAg4pq0GM79_tNA-N42w55LhaLyzm22h2" alt="Giants y Commanders empatan al quedar corta patada de Gano" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>El pateador de los Giants, Graham Gano, se queda corto en un intento de gol de campo de 58 yardas con el reloj en ceros en tiempo extra, dejando a Nueva&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}