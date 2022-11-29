import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jacksonville Jaguars</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jacksonville Jaguars"/>
        <meta name="description" content="Trending News about Jacksonville Jaguars" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jacksonville Jaguars</h1>
            <Image width={800} height={500} src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fblackandteal.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2017%2F07%2F19516301.jpeg" alt="Jacksonville Jaguars"/>
            <h3>Recent News</h3>
            <a href='https://blackandteal.com/2022/11/28/jaguars-outstanding-grade-ravens-week-12/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jaguars get outstanding grade for beating Ravens in Week 12</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTNIr-lGLm8KQnMFgCQWFVErrfzG4kpzD2waP8FYj3SVuCxBi5p4jN261xePJqCGvP3_MRW0TVN" alt="Jaguars get outstanding grade for beating Ravens in Week 12" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Jacksonville Jaguars got an outstanding grade from CBS Sports for beating the Baltimore Ravens 28-27 in Week 12 of the 2022 season.</p></div>
            </div>
        </a><a href='https://blackandteal.com/2022/11/27/meme-resurfaces-jaguars-win-ravens/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turkey meme surfaces again following Jaguars win vs. Ravens</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQoElfo5VaOUSYJzJspDU9voVmZOFxQ-SRCPNAVlMpkdjM-P1evvHz-uF7zNIhopV_S63W6pkJL" alt="Turkey meme surfaces again following Jaguars win vs. Ravens" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jacksonville mayor&#39;s Thanksgiving meme resurfaced following the Jaguars&#39; last-minute win over the Baltimore Ravens in Week 12.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/jaguars/news/jaguars-28-ravens-27-game-balls'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jaguars 28, Ravens 27: Game Balls</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDRFU0zU6Zm_TYcjLnEK-76V-wP7N8P0IX66K8fyfTyh41f9yy0qLtEEYtpOoMMD8gB_zl-_iW" alt="Jaguars 28, Ravens 27: Game Balls" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Each week during the 2022 season, we will take a quick post-game look at which Jacksonville Jaguars stood out the most. Win or lose, rain or shine,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jaguars.com/news/jaguars-game-that-was-lights-out-game-for-lawrence-week-12-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Game that was: “Lights-out” game for Lawrence</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTkGDK9-DNu_Fgo-gUn3FZfKd_2qdgjxUP2Qi7IwfUm4hGVFYeRGt-LvDIxkCRY6EwIAUJKRyC0" alt="Game that was: “Lights-out” game for Lawrence" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jaguars QB Trevor Lawrence after throwing three touchdown passes – including the game-winner to wide receiver Marvin Jones Jr. with :14 remaining – in a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jaguars.com/news/o-zone-good-feeling-x5289'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O-Zone: Good feeling</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJcOrDK1HvssGLaovJ5vpMA8D7UAEMv_k714Qwe-bYAOzpmzhhPiMsyY2PqvWrBXdKuKqYi0hi" alt="O-Zone: Good feeling" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>And the strides shown by quarterback Trevor Lawrence in recent weeks are some of the most promising signs this franchise has seen at the position in decades,&nbsp;...</p></div>
            </div>
        </a><a href='https://apnews.com/article/baltimore-ravens-jacksonville-jaguars-nfl-sports-fe693dc30016fc78df12bab4ea8fca63'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jags edge Ravens 28-27 on 2-pointer, Tucker&#39;s 67-yard miss</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ7eFZmvWAoVeb_-kQLIoxMmP-E8BD6oigEjeWx-HfXa0RB9EaRnUe7CWFXl8MGHyX5K8OUygbe" alt="Jags edge Ravens 28-27 on 2-pointer, Tucker&#39;s 67-yard miss" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>JACKSONVILLE, Fla. (AP) — Marvin Jones&#39; shin-dragging touchdown catch will go down as one of the more memorable plays in Jacksonville Jaguars history.</p></div>
            </div>
        </a><a href='https://www.mynews13.com/fl/orlando/sports/2022/11/27/jacksonville-jaguars-edge-baltimore-ravens-late-two-point-conversion'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jacksonville Jaguars edge Baltimore Ravens on late score</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwVX93a1j7UzR8zbCBrdVThzWd6C_n9vLa1u3z3LT-XAjvpY3RqVPldHx7KdVq3sDlTOWJzAJ_" alt="Jacksonville Jaguars edge Baltimore Ravens on late score" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Jacksonville Jaguars stunned the Baltimore Ravens thanks to a late touchdown pass and two-point conversion from Trevor Lawrence.</p></div>
            </div>
        </a><a href='https://www.jacksonville.com/story/sports/nfl/2022/11/27/jags-vs-ravens-game-score-live-updates-jacksonville-jaguars-baltimore-nfl-week-12/10760423002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Postgame recap: Trevor Lawrence leads Jacksonville Jaguars rally ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT2UqDBJvFN8swJV92g8krL9dI71fQwR97y4lE-7P6-2JsT2pbKOHvLtj3LgE2egL5njTB3am4U" alt="Postgame recap: Trevor Lawrence leads Jacksonville Jaguars rally ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trevor Lawrence and the Jacksonville Jaguars (4-7) faced Lamar Jackson and the Baltimore Ravens (7-4) on Sunday, November 27, 2022 at TIAA Bank Field.</p></div>
            </div>
        </a>
        </Template></>;
}