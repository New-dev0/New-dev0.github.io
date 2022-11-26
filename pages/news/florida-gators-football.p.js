import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Florida Gators Football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Florida Gators Football"/>
        <meta name="description" content="Trending News about Florida Gators Football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Florida Gators Football</h1>
            <Image width={800} height={500} src="https://www.gannett-cdn.com/presto/2022/11/26/PTAL/27927b9a-9967-41b3-a6c7-6dad5cbcd3b5-FSU_v_UF_first_half342.JPG?auto=webp&crop=4063,2285,x0,y133&format=pjpg&width=1200" alt="Florida Gators Football"/>
            <h3>Recent News</h3>
            <a href='https://www.gatorsports.com/story/football/2022/11/25/florida-gators-football-5-takeaways-loss-florida-state-seminoles-rivalry-game/10762081002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twenty-eight yards short: 5 takeaways from Florida&#39;s loss to FSU in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4ABYMlra5fQbDMRqlxI5vASjysrKQt6kIZ4VNGP2gb6w5bN-3YH01eYNLPCdOuDE4_h2XEuno" alt="Twenty-eight yards short: 5 takeaways from Florida&#39;s loss to FSU in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florida drove to the FSU 28 with 39 seconds remaining, but on a 4th-and-11 play, quarterback Anthony Richardson&#39;s pass fell incomplete in the end zone.</p></div>
            </div>
        </a><a href='https://gatorswire.usatoday.com/lists/florida-football-fsu-seminoles-social-media-reactions-after/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Social media&#39;s reactions to Florida&#39;s 45-38 loss to Florida State</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSs9cNxGWvwEFs0sdVHrJFbeY2mPMfQx3Ii4Mk5nbMzFE7yMCIyiOJmN768rjXPG6mVOdMD5Ijd" alt="Social media&#39;s reactions to Florida&#39;s 45-38 loss to Florida State" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Florida Gators fell to the Florid State Seminoles, 45-38, in a special Black Friday edition of their annual rivalry. The game was electric,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/college/florida/football/florida-gators-football-florida-state-outlasts-offensive-shootout-45-38'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florida State Outlasts Florida Gators in Offensive Shootout, 45-38</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRs12RI_l59kh-zP-RrXWQwS0OY-YMzSAM3O7nH3MfOx8A5IE20g7pSXCQR9lvlrmkrhKqF-wf1" alt="Florida State Outlasts Florida Gators in Offensive Shootout, 45-38" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Photo: Billy Napier; Credit: Zach Goodall. Jordan Travis won the battle of the quarterbacks in Tallahassee with 353 yards and three total touchdowns en&nbsp;...</p></div>
            </div>
        </a><a href='https://floridagators.com/news/2022/11/24/football-the-opening-kickoff-gators-at-no-16-florida-state'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Opening Kickoff: Gators at No. 16 Florida State</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAalSUV1MjoGVQR7amItbpVKTRtQEkenmq4mWM-l_PQ-vWjuwAZb7jx4i5flU1fupKs2dpPjme" alt="The Opening Kickoff: Gators at No. 16 Florida State" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florida (6-5) and Florida State (8-3) close the regular season with the first Friday night showdown in the rivalry&#39;s storied history.</p></div>
            </div>
        </a><a href='https://247sports.com/college/florida-state/Article/FSU-Football-Florida-State-Seminoles-Florida-Gators-how-to-watch-stream-listen-198489175/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FSU Football vs. Florida Gators: How to Watch, Stream, or Listen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSds-DvteZYrLEBM-HUjlqghyPrNKTBGNQE9pbQh7fnGjyw9lrWqsJJ0eYgGLZvnYsIUfrp99-F" alt="FSU Football vs. Florida Gators: How to Watch, Stream, or Listen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No. 16 Florida State hosts Florida at Doak Campbell Stadium (79,560) in Tallahassee, Fla. on Friday evening at 7:30 p.m.. Here is how to watch, stream,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tomahawknation.com/florida-state-seminoles-football-recruiting-fsu-class-commit-visit-offer/2022/11/25/23476976/official-visitor-list-norvell-players-cfb-acc-gators-game-schedule-247-sports-on3-rivals-rankings'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florida State football recruiting visitor list for FSU vs. UF</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR-RPEXK6wqo8svEVBdVsPP9EA1Or5Jjf4Ns6JQLRoWWbYKvj8WI7OKeWU640flTSIW6zsXn6-8" alt="Florida State football recruiting visitor list for FSU vs. UF" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mike Norvell&#39;s Florida State Seminoles with a massive visitor list for rivalry game vs. Florida Gators Friday night in Tallahassee.</p></div>
            </div>
        </a>
        </Template></>;
}