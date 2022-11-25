import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Uruguay</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Uruguay"/>
        <meta name="description" content="Trending News about Uruguay" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Uruguay</h1>
            <Image width={800} height={500} src="https://www.reuters.com/resizer/Q_XRTHQQN9ivyp20Fcxoib6ngwE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LJGP7JEEBRJQZMDYN7J3NXI43Q.jpg" alt="Uruguay"/>
            <h3>Recent News</h3>
            <a href='https://www.reuters.com/lifestyle/sports/stuttering-uruguay-held-by-south-korea-goalless-stalemate-2022-11-24/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stuttering Uruguay held by South Korea in entertaining stalemate</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMNZR6_o6lzVPcPMk3Cpy1WBX0j6wPexuAE-q84IeC-oVwODw6AdxlQXy8rTKFqMScXF2w1r5Y" alt="Stuttering Uruguay held by South Korea in entertaining stalemate" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AL RAYYAN, Qatar, Nov 24 (Reuters) - Uruguay faltered in their World Cup opener against a lively and energetic South Korea after they were held to a 0-0&nbsp;...</p></div>
            </div>
        </a><a href='https://theathletic.com/3932575/2022/11/24/uruguays-unbreakable-spirit-and-never-say-die-attitude-on-display-once-again/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguay&#39;s unbreakable spirit and never-say-die attitude on display ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRkx_pNmVOfl-mH25WFmw6GAdx-ZK8XT22mVeO-M0TZaJUr3U355dfDHr7fX4eeBz5ANHz4N2GS" alt="Uruguay&#39;s unbreakable spirit and never-say-die attitude on display ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uruguayans come from a footballing culture that champions warriors so it was no surprise they stood tall in a street fight with South Korea.</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/uruguay-vs-south-korea-live-online-score-stats-and-updates-qatar-world-cup-2022-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguay vs South Korea summary: Uruguay hit the post twice, score ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT3iRxLfshQKr8PB0P7cEI20jSo-2QT6SW9r-4TlG7kZUTmx3zggbBM4QfN1Tz8KfzSYVslBsLp" alt="Uruguay vs South Korea summary: Uruguay hit the post twice, score ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uruguay and South Korea play out a stalemate as Group H of the Qatar 2022 World Cup got underway at Education City Stadium.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/soccer/south-korea-holds-uruguay-to-0-0-draw-at-world-cup/2022/11/24/4d86e690-6c09-11ed-8619-0b92f0565592_story.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea holds Uruguay to 0-0 draw at World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKMIwj2H98o6vY6r3nWUtq9aL1zsLBq0jAvo-PBVOuOmL32SNEVPId1nHyKTUTwVQpZB9rYYuy" alt="South Korea holds Uruguay to 0-0 draw at World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uruguay coach Diego Alonso said he was satisfied, and so did South Korea counterpart Paulo Bento. Alonso sounded less convincing. “I&#39;m more than happy with the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/gallery/2022/11/24/photos-uruguay-denied-by-woodwork-in-0-0-draw-with-south-korea'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Photos: Uruguay denied by woodwork in 0-0 draw with South Korea</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRCyIw8bvdT5fXj9wsV-qYhsODRvM_7clKNQDWUNzvua9FEncximav8Ol_kClTN5SQBEi6UXegc" alt="Photos: Uruguay denied by woodwork in 0-0 draw with South Korea" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Americans held to a 0-0 draw by South Korea in their opening World Cup Group H game.</p></div>
            </div>
        </a><a href='https://www.si.com/soccer/2022/11/24/uruguay-south-korea-world-cup-2022-video-highlights-recap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguay Hits Post Twice in Scoreless World Cup Draw vs. South ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTbX7DCkBu1ppsRSsToutMS6i0uoyctUP2WvRI5d3soq38yTay9eEPK8zD15e3xmvs4VnTB9jP2" alt="Uruguay Hits Post Twice in Scoreless World Cup Draw vs. South ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uruguayan center back Diego Godín, playing in his fourth World Cup, crashed a header off the inside of the post in the first half. Midfielder Federico Valverde,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tudn.com/futbol/mundial-qatar-2022/partidos-en-vivo/fase-de-grupos/uruguay-vs-corea-del-sur/uruguay-corea-del-sur-empate-0-0-grupo-h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguay decepciona y no pasa del empate con Corea del Sur</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ52WIG8Cso6KStzsoGH0INbCeb_YvlTw5O76YGFycxP9exPEMyL8yvzhWUdpklglfkHyeRLCHA" alt="Uruguay decepciona y no pasa del empate con Corea del Sur" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uruguay y Corea del Sur empataron 0-0 en partido correspondiente al Grupo H de la Copa del Mundo Qatar 2022. | Deportes Uruguay vs Corea del Sur | TUDN&nbsp;...</p></div>
            </div>
        </a><a href='https://espndeportes.espn.com/futbol/mundial/nota/_/id/11274288/como-le-fue-a-uruguay-tras-empatar-en-un-debut-mundialista'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>¿Cómo le fue a Uruguay tras empatar en un debut mundialista?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTZNssb5HJglfCyAbLjhz_YdkLql4FA7I61NrLMdyWpY8bdqgBzaFjW_Yw6TFljat-vCqL8g23w" alt="¿Cómo le fue a Uruguay tras empatar en un debut mundialista?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>El empate sin goles ante Corea del Sur es el quinto empate en el debut de Uruguay en una Copa del Mundo, un antecedente terminó con la Celeste en semis,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/mundo/noticias-63743053'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial: la impotencia de Uruguay en el entretenido empate 0-0 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSb8EdUfZm5ek_RJQIL6K0toG7L4r4Wfm-IrYsN1c8cuSWWUuCylVOYOAKV4wn2lH2-oCNx1uzi" alt="Mundial: la impotencia de Uruguay en el entretenido empate 0-0 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En un partido que se disputó sobre todo en el medio campo y con pocas opciones de gol, La Celeste no pudo conseguir la victoria en su debut en Qatar 2022.</p></div>
            </div>
        </a><a href='https://cnnespanol.cnn.com/2022/11/24/uruguay-corea-del-sur-resultado-mundial-qatar-2022-en-vivo-directo-orix/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Resumen y resultado de Uruguay (0) - Corea del Sur (0) en el ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRWnfr7VKvTMZRrFlRRlSQFaB3Xni9_t0Blp_1x_X7ldUcOrMC189aRrc4zas_dsISCupfAZJE9" alt="Resumen y resultado de Uruguay (0) - Corea del Sur (0) en el ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uruguay debuta en el Mundial ante Corea del Sur, en el inicio del Grupo H del Mundial de Qatar 2022. Sigue en vivo el desarrollo del partido y todos los&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}