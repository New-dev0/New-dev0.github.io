import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Europa League</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Europa League"/>
        <meta name="description" content="Trending News about Europa League" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Europa League</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt96bce69e93729354/6363cfc29bf96c5bc342e776/goal---web_three-way-split-5b653131-8680-4ee8-8618-50a92019bc2e.jpeg" alt="Europa League"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-in/news/europa-league-knockout-round-play-off-draw-man-utd-barcelona-juventus-nantes/bltce490ef5cadc7988'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Europa League knockout round play-off draw: Man Utd face ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQS0IRPZJQLish8ObMt8phVQJ6MR5ajDkQz4YeHmbDy2oX8fXt_Ac3bXJSGEWyHc9mv63HIQ7KN8A" alt="Europa League knockout round play-off draw: Man Utd face ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United will face Barcelona in the knockout play-off round of the 2022-23 Europa League, while Juventus take on Nantes.</p></div>
            </div>
        </a><a href='https://www.espn.in/football/uefa-europa-league/story/4795183/barcelona-vs-man-united-pick-of-uefa-europa-league-draw'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona vs Man United pick of UEFA Europa League draw</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDrfUEYoJ2ncwUTB3loiRIqF0iUdwMdEWi-4u2tlSTSMFS2A4ItyMWUKNDa60Auh4CIAXSsY51" alt="Barcelona vs Man United pick of UEFA Europa League draw" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The UEFA Europa League playoff draw has some mouthwatering ties, headlined by the clash of LaLiga and Premier League giants. Who else will advance?</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/barcelona-drawn-with-man-united-in-europa-league-playoffs-101667831818166.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona drawn with Man United in Europa League playoffs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJSlQiRSm5OJE2RyY8A7sNKqhXon92cbmlqpDVs_reDmm5e9xuk0N7G_fX07SKbZAdbcPSWPL-" alt="Barcelona drawn with Man United in Europa League playoffs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spanish side Barcelona met the 2017 Europa League winners twice in the 2009 and 2011 Champions League finals, winning on both occasions, while United lost&nbsp;...</p></div>
            </div>
        </a><a href='https://scroll.in/field/1036870/europa-league-barcelona-drawn-against-manchester-united-in-knockout-round-playoffs'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Europa League: Barcelona drawn against Manchester United in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ7VrnEaPRG8o7GZ9Xuco2eMka6XzCznJ9wacQCu4D3qPH3nCMjV33Y0k6Ufw8BbyuidljoQjl_" alt="Europa League: Barcelona drawn against Manchester United in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The last meeting of the clubs came in the quarter-finals of the Champions League in 2018-&#39;19, with Barca winning 4-0 on aggregate.</p></div>
            </div>
        </a><a href='https://www.uefa.com/uefaeuropaleague/news/027b-168877ddd0f6-e156326874da-1000--uefa-europa-league-knockout-round-play-off-draw-barcelona-meet-/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Europa League knockout round play-off draw: Barcelona ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRnljxcwbonyrFn1OMbKUSxKDvmB2LEpo5AyHZd60bgm_JEa10KCu9cFMN0UGs8QhbU1-nvV1Jm" alt="UEFA Europa League knockout round play-off draw: Barcelona ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There were some stellar ties drawn as the UEFA Europa League hopefuls learned who they will face for a place in the last 16.</p></div>
            </div>
        </a>
        </Template></>;
}