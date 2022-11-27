import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ecuador</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ecuador"/>
        <meta name="description" content="Trending News about Ecuador" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ecuador</h1>
            <Image width={800} height={500} src="https://assets.telegraphindia.com/telegraph/2020/Dec/1607463598_fifa-qatar-1.jpg" alt="Ecuador"/>
            <h3>Recent News</h3>
            <a href='https://www.telegraphindia.com/sports/football/valencia-snatches-a-point-for-ecuador/cid/1900314'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Word Cup: Valencia snatches a point for Ecuador</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT4pxApZOmPJBeS0Rr9akEZzcZHlhJ1ShszvobjD9GI6l-6P4kJFyLmUB0CJc0bN2DrxNdxhRUZ" alt="Word Cup: Valencia snatches a point for Ecuador" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Timber Jurrien and Denzel Dumfries were left catching for breath by the speed of Michael Estrada, Preciado Angelo and other Ecuadorians.</p></div>
            </div>
        </a><a href='https://www.moneycontrol.com/news/trends/sports-trends/valencia-shines-as-ecuador-draw-1-1-against-netherlands-9603991.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Valencia shines as Ecuador draw 1-1 against Netherlands</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMEyXxbLHFriUILLQ6pN4fXUazLMFbmjlrfKYu2xWGQgrYEIRp_Syn6VyQx0vDGsuyOk6voRPl" alt="Valencia shines as Ecuador draw 1-1 against Netherlands" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The young Ecuador squad followed their captain Enner Valencia to the corner of the field after he scored yet another goal for them at the World Cup.</p></div>
            </div>
        </a><a href='https://www.espn.in/football/ecuador-ecu/story/4814293/world-cup-leading-scorer-enner-valencia-stretchered-off-in-ecuador-draw-vs-netherlands'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup leading scorer Enner Valencia stretchered off in Ecuador ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_XHBTByQUDwlgRyQj9VWvJqC5TOGn46Wq_RWudZkUfbsb1_2vMjvZNHc9JvzkePzOE4I5pOSL" alt="World Cup leading scorer Enner Valencia stretchered off in Ecuador ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Enner Valencia scored Ecuador&#39;s goal in the 1-1 draw against the Netherlands before being stretchered off the field after a knee injury.</p></div>
            </div>
        </a><a href='https://www.90min.com/posts/ecuador-vs-senegal-world-cup-team-news-lineups-prediction-29-11-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ecuador vs Senegal - World Cup: Team news, lineups &amp; prediction</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdgjDwXAMELXWhPGD6SHIfPlmL_3gXjhWMV0RXoxDiVvugpSJYHVBG6p_4-ixhntobXUSUh4PD" alt="Ecuador vs Senegal - World Cup: Team news, lineups &amp; prediction" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Previewing Ecuador vs Senegal at the World Cup, with team news, predicted lineups&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/fifa-world-cup-2022-live-score-netherlands-vs-ecuador-football-match-latest-updates-khalifa-international-stadium-101669386360500.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup highlights Netherlands vs Ecuador: NED, play out ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwUq7tZx4w8lenz8x_HWhfYLDCLpqeYM36Y_UGXRDVRJ9p6uw1oMm0U3on-bUJCEmNg1J8H5D5" alt="FIFA World Cup highlights Netherlands vs Ecuador: NED, play out ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Valencia, 33, tapped in his third goal of the tournament from a rebound in the second half after Cody Gakpo had put the Dutch ahead in the sixth minute with a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/sports/fifa-world-cup-live-qatar-vs-senegal-netherlands-vs-ecuador-england-vs-usa-122112501000_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fifa World Cup Day 6: Ecuador, US impress in draws; Senegal, Iran ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5VudMsT6nHYrmgFgry7xusINkdgBdjN7t3FXRkkOaeHwCE4MIFQ0B_IpNou3l-rFTj4rWJCZn" alt="Fifa World Cup Day 6: Ecuador, US impress in draws; Senegal, Iran ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fifa World Cup Qatar Day 6 Highlights: Iran and Senegal won impressively against Wales and Qatar respectively while US and Ecuador forced draws from their&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}