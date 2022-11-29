import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Squid Game</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Squid Game"/>
        <meta name="description" content="Trending News about Squid Game" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Squid Game</h1>
            <Image width={800} height={500} src="https://tbivision.com/files/2021/11/Squid-Game.jpg" alt="Squid Game"/>
            <h3>Recent News</h3>
            <a href='https://tbivision.com/2022/11/28/squid-game-the-challenge-prodco-the-garden-hires-fight-the-power-the-circle-duo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Squid Game: The Challenge&#39; prodco The Garden hires &#39;Fight The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRiSEspasmwzk4KhaYpJpU90xsrYBA2RoyfqSRwAWCkalPmZampQ4Lr-6Q--7mRpjThKzEfOrFd" alt="&#39;Squid Game: The Challenge&#39; prodco The Garden hires &#39;Fight The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Garden Productions, the UK-based outfit working on Netflix&#39;s upcoming gameshow spin-off from Squid Game, has hired two new exec producers to bolster its&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gq-magazine.co.uk/men-of-the-year/article/lee-jung-jae-interview-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lee Jung-jae: &quot;Ultimately, Squid Game is meant to deliver dreams ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfz4Ve4GyltAkPv1qw_9ZJniehMtLfE2hwxRSo6XcnvQOtzxM8SZLFXyugb9LTf-s8Aarv-eQo" alt="Lee Jung-jae: &quot;Ultimately, Squid Game is meant to deliver dreams ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Cannes directorial debut, triumph at the Emmys, and a return to the darker side – all in a year&#39;s work for Lee Jung-jae, South Korea&#39;s standout star.</p></div>
            </div>
        </a><a href='https://screenrant.com/squid-game-gi-huns-season-2-story-hints/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Squid Game Star Lee Jung-jae Hints At Gi-hun&#39;s Season 2 Arc</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5YkFkvsW60r-KdhbGmINQSNH03tZdEDvHND_cyAw8fBojYpqq4AgGCQopH6blyZH0kRKcgp2g" alt="Squid Game Star Lee Jung-jae Hints At Gi-hun&#39;s Season 2 Arc" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lee Jun-jae teases a potential turn towards the dark side of wealth that his Squid Game character, Gi-hun, faces in the breakout show&#39;s season 2.</p></div>
            </div>
        </a><a href='https://guardian.ng/life/squid-game-actor-o-yeong-su-accused-of-sexual-assault-misconduct/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Squid Game Actor O Yeong-su Accused Of Sexual Assault Misconduct</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT4kwsgf_3_TM_6ERcexzIwK88Jk_21euIQ3TeRk-XgFc6FOPv7dwf8ozGoovyhtNcJDNr13ZUr" alt="Squid Game Actor O Yeong-su Accused Of Sexual Assault Misconduct" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Yeong-su, from the famous Squid Game on Netflix, has been accused of sexual misconduct in Seoul, South Korea. The 78-year-old Golden Globe winner was&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bostonherald.com/2022/11/28/squid-game-star-oh-yeong-su-charged-with-sexual-misconduct/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Squid Game&#39; star Oh Yeong-su charged with sexual misconduct</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXzUkBAjFBGKB8gUG4Wz9Csn5JzJlxkHMz4b47e4Oh0iaQVR7_uWIqalEE5HRnGqbAqixrfAiY" alt="&#39;Squid Game&#39; star Oh Yeong-su charged with sexual misconduct" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Squid Game” star Oh Yeong-su has been charged in South Korea in connection with an alleged 2017 incident of sexual misconduct.</p></div>
            </div>
        </a><a href='https://www.yahoo.com/entertainment/squid-game-star-oh-yeong-155946084.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Squid Game&#39; Star Oh Yeong-su Backs Out of Stage Play After ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR4Mw2-8CTI6guRkXYkKTiC2HsUkRrjSrw8JjvX_g7lmSZYHEYNCyetvIbL1Qpy7EmmofRtHlIt" alt="&#39;Squid Game&#39; Star Oh Yeong-su Backs Out of Stage Play After ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Squid Game” star Oh Yeong-su has backed out of a local production of the stage play “Love Letters” in Jeonju, South Korea, after a sexual misconduct charge&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hollywoodreporter.com/tv/tv-news/squid-game-star-oh-yeong-su-sexual-misconduct-charge-1235270235/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Squid Game&#39; Star Oh Yeong-su Pulls Out of Stage Play After Sexual ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ8jdwzHT5muMrboPm5CHeiv7w7ruYvyzxUVhWqLOpE9c69d1f-r12TqJUngaLufI8rTZVrIL1N" alt="&#39;Squid Game&#39; Star Oh Yeong-su Pulls Out of Stage Play After Sexual ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oh Yeong-su has also been dropped from a series of Korean government ads in the aftermath of an indictment for allegedly improperly touching a woman.</p></div>
            </div>
        </a><a href='https://people.com/tv/squid-game-actor-o-yeong-su-charged-with-sexual-misconduct/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Squid Game&#39; Actor O Yeong-su Charged with Sexual Misconduct in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSe_FI0DPJEGZmVus14kM-oGxr3zcvAuK18j-V2vP9AeFQGZ6X8ZqrQtxPWkhFWHP61wDhXFR7q" alt="&#39;Squid Game&#39; Actor O Yeong-su Charged with Sexual Misconduct in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After the case was previously closed and reopened, Squid Game actor O Yeong-su is accused of inappropriately touching a woman in 2017.</p></div>
            </div>
        </a><a href='https://www.cheatsheet.com/entertainment/squid-game-season-2-wi-ha-joon-teases-may-or-may-not-meet-director.html/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Squid Game&#39; Season 2: Wi Ha-joon Teases He May or May Not ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTykUpmzYKc6pGnExJIF9JmpqkmpH2pSM93sb0pju5vYyGIM4cttUY7l8IvQxUZZYBFxqjmlA9d" alt="&#39;Squid Game&#39; Season 2: Wi Ha-joon Teases He May or May Not ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Director Hwang Dong-hyuk is in the process of creating the script and storyline for the new installment. He has previously revealed that the K-drama will&nbsp;...</p></div>
            </div>
        </a><a href='https://www.looper.com/1118593/squid-games-lee-jung-jae-teases-a-darker-side-to-gi-hun-in-season-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Squid Game&#39;s Lee Jung-Jae Teases A &#39;Darker Side&#39; To Gi-Hun In ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpyoJ23v3ILWo-uE0cuusvpcTPhnED3pCBknEXi2MDPHeL8twfeu4OJZXTryg13qZb_baqK4P6" alt="Squid Game&#39;s Lee Jung-Jae Teases A &#39;Darker Side&#39; To Gi-Hun In ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>To say that &quot;Squid Game&quot; outperformed its initial expectations would be the understatement of the year. Not only did the Korean suspense drama kick off an&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}