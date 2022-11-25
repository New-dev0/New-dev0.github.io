import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Detroit Lions</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Detroit Lions"/>
        <meta name="description" content="Trending News about Detroit Lions" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Detroit Lions</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/lions/ulasn7zpjs31zkifngym" alt="Detroit Lions"/>
            <h3>Recent News</h3>
            <a href='https://www.detroitlions.com/news/inactives-lions-vs-bills-okudah-jackson-paschal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>INACTIVES: Lions vs. Bills</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQgkiF8fU53kLMRL4mCDNudoQBEvWgwUPX6Z1rVjpR9S4KtGV_PtzQjsvfoTBkg1ujR_CEgzPg" alt="INACTIVES: Lions vs. Bills" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tim Twentyman reports on inactives for Thursday&#39;s Lions-Bills matchup.</p></div>
            </div>
        </a><a href='https://www.mlive.com/lions/2022/11/live-updates-lions-try-for-fourth-straight-win-against-bills-on-thanksgiving.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Detroit Lions lose 28-25 to Buffalo Bills on Thanksgiving: Live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQGhcmN5fgYH_uivjc0_ixhv_RiQ0tA25gcTTc_oaAWzAZEBRzxil0KnLUxHFzt5WZSSHqZ8iQJ" alt="Detroit Lions lose 28-25 to Buffalo Bills on Thanksgiving: Live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This post will update with drive summaries, analysis, injury updates, photos, pregame updates and more.</p></div>
            </div>
        </a><a href='https://www.nfl.com/news/dan-campbell-believes-home-crowd-will-be-on-fire-as-lions-look-to-win-fourth-str'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dan Campbell believes home crowd will be &#39;on fire&#39; as Lions look to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQT00kyGxzAJCwlQhtLHVT-gNQKu5Ysn7XuG3Ep25p5BVtv6gSpLrhNlA3OQWKDiThdYG3vE1kj" alt="Dan Campbell believes home crowd will be &#39;on fire&#39; as Lions look to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Detroit Lions head coach Dan Campbell believes the home crowd for the Thanksgiving game against the Buffalo Bills will be &quot;on fire.&quot;</p></div>
            </div>
        </a><a href='https://www.detroitnews.com/story/sports/nfl/lions/2022/11/24/live-updates-detroit-lions-vs-buffalo-bills/69666844007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Recap: Bills kick game-winning FG to beat Lions 28-25</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwWvGTLJ4wkjScdwyEcx8W3V8tmYv3tHWUZH52jnu3pK1wDwehIiF2vOxyd8BsH9NNixIhcKxm" alt="Recap: Bills kick game-winning FG to beat Lions 28-25" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Follow along here for live updates from Detroit News contributor Matthew Scheidel as the Lions play host to the Buffalo Bills at Ford Field.</p></div>
            </div>
        </a><a href='https://www.prideofdetroit.com/2022/11/24/23476819/detroit-lions-week-12-game-ball-candidates'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Detroit Lions players of the game candidates vs. Buffalo Bills</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTVeziW3b53KcCK87zF-HvSk3UT-EoBJUbHEFGLOm6JaQSafBUOY7oxy8sfxmBUS4zUn8sN_INj" alt="Detroit Lions players of the game candidates vs. Buffalo Bills" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vote for which Detroit Lions player you think is most deserving of the Week 12 player of the game award.</p></div>
            </div>
        </a><a href='https://www.freep.com/story/sports/nfl/lions/2022/11/24/detroit-lions-lose-on-late-field-goal-28-25-to-bills-on-thanksgiving/69675607007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Detroit Lions lose on late field goal, 28-25 to Buffalo Bills on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQVD9z4HNxWqTOib3Gr3wD3fptlBgq2TbuK_ovcsUPCUeqsSl_H-rGfQMCuRNE40V78yNJtraf5" alt="Detroit Lions lose on late field goal, 28-25 to Buffalo Bills on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tyler Bass&#39; 45-yard FG with two seconds lifted the Bills to a 28-25 win over the Detroit Lions, ending the home team&#39;s three-game winning streak.</p></div>
            </div>
        </a><a href='https://www.freep.com/story/sports/nfl/lions/2022/11/24/detroit-lions-shane-brandon-zylstra-brothers-childhood-dream-nfl-teammates/69674568007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zylstra brothers make childhood dream come true as Detroit Lions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7cuBz-wwWCs7UpRwcFGUjfezQbGU0qE6ntxEmh1WkG_ZA4i5H7xjBExUfFExX_03anmwOSvY_" alt="Zylstra brothers make childhood dream come true as Detroit Lions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shane and Brandon Zylstra had never played a game together as teammates until they helped the Detroit Lions beat the Packers earlier this month.</p></div>
            </div>
        </a>
        </Template></>;
}