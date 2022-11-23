import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Raheem Sterling</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Raheem Sterling"/>
        <meta name="description" content="Trending News about Raheem Sterling" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Raheem Sterling</h1>
            <Image width={800} height={500} src="https://cdn1.thechelseachronicle.com/uploads/17/2022/11/GettyImages-1244197128-2-scaled.jpg" alt="Raheem Sterling"/>
            <h3>Recent News</h3>
            <a href='https://www.thechelseachronicle.com/player-quotes/hes-the-truth-raheem-sterling-says-21-year-old-chelsea-youngster-is-going-to-turn-into-a-first-team-star/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Raheem Sterling thinks Broja could be the next big thing at Chelsea</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQQ0CNNMNOvYsEvQjrdebQ7H36vcF9MQyU2-MzBrGOrdYX0Zqj75T-nD8oMiLxTcHyWfoVKF2Yc" alt="Raheem Sterling thinks Broja could be the next big thing at Chelsea" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Raheem Sterling has backed Chelsea teammate Armando Broja to make a big splash in the sport. Speaking to UMM, Sterling suggested that his fellow Stamford&nbsp;...</p></div>
            </div>
        </a><a href='https://www.football365.com/news/raheem-sterling-rogue-shout-chelsea-teammate-next-breakout-star'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Raheem Sterling makes rogue shout that Chelsea teammate will be ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTfwpcluCBcV_IqAkPl6y-0h8pE_Z1d6snrkGDZMfxUmR7J-Rpt6wEJghoEqaaHDhnYlhOacBCT" alt="Raheem Sterling makes rogue shout that Chelsea teammate will be ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Raheem Sterling has made a rogue shout that Chelsea striker Armando Broja will be &#39;the next one&#39; to turn into a star.</p></div>
            </div>
        </a><a href='https://www.hampshirelive.news/sport/football/football-news/chelsea-raheem-sterling-southampton-loan-7850531'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;He&#39;s the truth&#39; - Chelsea&#39;s Raheem Sterling makes bold claim on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTReGii_UDo1IwhtZmaUe2ukRl2rTvV-1scuwOSfuKWCSHSBpI_8DpE_YDwi3vBUl3_KjjdPll0" alt="&#39;He&#39;s the truth&#39; - Chelsea&#39;s Raheem Sterling makes bold claim on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Armando Broja became a fan favourite during a season-long loan spell with Southampton and Raheem Sterling has been impressed with what he has seen from the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hitc.com/en-gb/2022/11/22/chelsea-raheem-sterling-armando-broja-newcastle/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;He&#39;s the truth&#39;: Raheem Sterling thinks Newcastle striker target is ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcThzVhPwYqhy1y4FVH7mdrvORckytoecV51HLaFgEwpGgywgyjgq33vvQtjZaDhgj8SJ2T_Eo2Z" alt="&#39;He&#39;s the truth&#39;: Raheem Sterling thinks Newcastle striker target is ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Raheem Sterling has praised Chelsea striker Armando Broja as the &#39;fastest man in the world&#39; amid interest from Newcastle United.</p></div>
            </div>
        </a>
        </Template></>;
}