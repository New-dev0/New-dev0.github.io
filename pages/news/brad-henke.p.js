import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Brad Henke</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Brad Henke"/>
        <meta name="description" content="Trending News about Brad Henke" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Brad Henke</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221202100853-01-brad-william-henke-obit.jpg?c=16x9&q=w_800,c_fill" alt="Brad Henke"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/12/02/entertainment/brad-william-henke-dead/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brad William Henke, &#39;Orange Is the New Black&#39; actor, dead at 56</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrfugh5eaOdtn6XhWlKQttYdRDlbjMQiCP2Iyh1-HBa_kXp_oTWJ3hHy0aev84ClnoaQfxD3SO" alt="Brad William Henke, &#39;Orange Is the New Black&#39; actor, dead at 56" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brad William Henke, a veteran character actor known for his work on &quot;Orange Is the New Black&quot; and other series, has died, according to his agent and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/02/arts/television/brad-william-henke-dead.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brad William Henke, N.F.L. Player Who Turned to Acting, Dies at 56</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-d00WvbezvOtb0XwSQQHIc5eGlFSc3ZWMpci1bEO5lAJ2uPXLHeXDPKiL-rp8kytCBdYQ22lB" alt="Brad William Henke, N.F.L. Player Who Turned to Acting, Dies at 56" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A defensive lineman who played for the Denver Broncos, he later appeared in “Orange Is the New Black,” “Dexter” and “Lost.”</p></div>
            </div>
        </a><a href='https://www.latimes.com/entertainment-arts/tv/story/2022-12-02/brad-william-henke-dead'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Orange Is the New Black&#39; actor Brad William Henke dies</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQCR2U6JISDrmEB1WCXEd23t4wmJ24Ljx309FYdd2CdSCQLAmPerqOneWrIERHAaxmN5nxgxOjv" alt="&#39;Orange Is the New Black&#39; actor Brad William Henke dies" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brad William Henke, an NFL player who later earned a Screen Actors Guild Award nomination for playing a gay corrections officer in the Netflix series&nbsp;...</p></div>
            </div>
        </a><a href='https://patch.com/colorado/littleton/brad-william-henke-orange-new-black-actor-dead-56'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brad William Henke, OITNB Actor Raised In Littleton, Dead At 56</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7s4Tv0NV3HDokcC9ZtwvgSLSZDagfpLOq_NXKfCJgA90zNV78z-TMJBFPNkA3WH-ko_n9InoZ" alt="Brad William Henke, OITNB Actor Raised In Littleton, Dead At 56" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Before he broke into acting, Henke played defensive line at the University of Arizona, and was drafted by the New York Giants in 1989.</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/entertainment/celebrities/2022/12/02/brad-william-henke-dead-dexter-actor-former-nfl-player/10816510002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brad William Henke, &#39;Orange Is the New Black,&#39; &#39;Dexter&#39; actor, dies at ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQRxDkNVWCAgPCzlmofgfF3jHcAjuaVnsVeaaUGIBerOM0QJ0dYzxFZtpFSWzqgZdkppPxWRhvm" alt="Brad William Henke, &#39;Orange Is the New Black,&#39; &#39;Dexter&#39; actor, dies at ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Henke&#39;s publicist Caitlin Green confirmed his death to USA TODAY. No additional information was provided. Henke starred as corrections officer Desi Piscatella&nbsp;...</p></div>
            </div>
        </a><a href='https://www.upi.com/Entertainment_News/2022/12/02/actor-brad-henke-dead/8441669994403/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Orange is the New Black&#39; star Brad Henke dies at 56</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_zzdBeYCzHK909eRhjN_ytDQ8O951xXj_7VFVF2dMvaVh1UQ3vJoydEV1x4gBTbhWOAHfHofB" alt="&#39;Orange is the New Black&#39; star Brad Henke dies at 56" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former NFL player turned actor Brad William Henke has died, his family announced. The &quot;Orange is the New Black&quot; star was 56.</p></div>
            </div>
        </a>
        </Template></>;
}