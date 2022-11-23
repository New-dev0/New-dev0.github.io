import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Utah Jazz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Utah Jazz"/>
        <meta name="description" content="Trending News about Utah Jazz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Utah Jazz</h1>
            <Image width={800} height={500} src="https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg" alt="Utah Jazz"/>
            <h3>Recent News</h3>
            <a href='https://www.nba.com/game/uta-vs-lac-0022200255?watch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Utah Jazz vs LA Clippers Nov 21, 2022 Game - Scores, Stats ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcStqGobfqkrPoA876lgdFUYKpWwdQDO-_EI7NjLMwn7YKxGmnBcLTLi4drMTJV8-1S192WHtsRz" alt="Utah Jazz vs LA Clippers Nov 21, 2022 Game - Scores, Stats ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LOS ANGELES (AP) With Kawhi Leonard still working his way back and Paul George sidelined, the Los Angeles Clippers need the rest of the roster to pick up&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sltrib.com/sports/jazz/2022/11/22/collin-sextons-night-was-perfect/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Collin Sexton&#39;s night was a perfect microcosm of his imperfect Utah ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQJfipbNXgmYAE_FCLrKRWfTOWJu4Y6QdUBc-jiDY-yhSFouzl3ExF3KkxbJq6vr5q9uyTHELD" alt="Collin Sexton&#39;s night was a perfect microcosm of his imperfect Utah ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Collin Sexton, who made his second start this season for the Utah Jazz in Monday night&#39;s loss to the Clippers, has plenty of growth yet to make to become a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/sports/clippers/story/2022-11-21/clippers-jazz-paul-george-nba-recap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clippers rally late without Paul George to beat Utah Jazz</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKKPDm1p5pXK9bTPe7Ei926nQqoakUBe_zGUJyGWfIDd7a_D_cyLPRGnPQdPS-4PZMQNNvrj81" alt="Clippers rally late without Paul George to beat Utah Jazz" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Norman Powell scored a season-high 30 points, Reggie Jackson added 27 and the Clippers rallied in the fourth quarter to beat the Utah Jazz 121-114.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/jazz/news/malik-beasley-trade-rumor-jordan-clarkson-extension'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jazz Guard Malik Beasley Linked to New Trade Rumor by Insider</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSo0qDHUBGfZgjKkaLVklLGE6RlvpWSRi17cGCKp06mZg-q-xQTr1gfG70cJjvTabbLB1Rerpx3" alt="Jazz Guard Malik Beasley Linked to New Trade Rumor by Insider" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The NBA season is entering its second quarter, and teams are starting to get a clearer picture of who will be the buyers and sellers heading into the&nbsp;...</p></div>
            </div>
        </a><a href='https://kslsports.com/495692/utah-jazz-fall-to-los-angeles-clippers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Utah Jazz Fall To Clippers In Los Angeles - KSL Sports</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSsojGiRM5QhZh5eG2r3Xf5WyGBp-OIoYqsV3s0-M1GU0vGs6ooKMxfgMhZaNpXsPAq411yk16z" alt="Utah Jazz Fall To Clippers In Los Angeles - KSL Sports" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Utah Jazz snapped their two-game winning streak with a 121-114 loss to the Los Angeles Clippers to drop to 12-7 on the season.</p></div>
            </div>
        </a><a href='https://www.slcdunk.com/2022/11/21/23472822/utah-jazz-fall-to-the-los-angeles-clippers-game-recap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Utah Jazz fall to the Los Angeles Clippers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZs6aJOTwDl1fWutiW7H_6GSa2k1IXYj8-u-E4RSxaSU1jxj8HfDhEGNWU6W4hRDJqflMhK4d0" alt="Utah Jazz fall to the Los Angeles Clippers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Conley&#39;s place, Will Hardy went with Collin Sexton, and he really struggled. For the game, Sexton was 5/13 from the field and 0/2. But the issue was the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nba/clippers/news/la-clippers-vs-utah-jazz-injury-report-revealed-november-21'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LA Clippers vs Utah Jazz Injury Report Revealed</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSwQtVdvQVPwgSmvbm-hG_cmQjhvK8H6cpauZukqC0SVm82MWgiMeM0YNjQVvR_3UBbNoFSn99s" alt="LA Clippers vs Utah Jazz Injury Report Revealed" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Both the Clippers and Jazz will be missing a few players.</p></div>
            </div>
        </a><a href='https://www.clipsnation.com/2022/11/22/23472780/los-angeles-clippers-top-utah-jazz-without-paul-george-nba-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clippers top Utah Jazz without Paul George</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSEIYwKGxIYVjt_7qZA0y4VNH8YfHkc3Eerw4fzP6LEcUHK-owSjlOOzgexTkrWtDlxoCRLv3gp" alt="Clippers top Utah Jazz without Paul George" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The seven-time All-Star missed tonight game&#39;s with a hamstring strain.</p></div>
            </div>
        </a><a href='https://theathletic.com/3921987/2022/11/22/utah-jazz-collin-sexton/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Utah&#39;s Collin Sexton experiencing growing pains as he learns the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTJLsxXxfjstbGDqCTlfjsMkgKlCz58ZQvZW0B0Xdr7qJ7Cy-qg8g75Q-I7giI4r3vJad2YME-X" alt="Utah&#39;s Collin Sexton experiencing growing pains as he learns the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sexton has been a starter because he can score. But in Utah, he&#39;s being asked to run the offense and the learning curve has been steep.</p></div>
            </div>
        </a><a href='https://www.deseret.com/2022/11/22/23471177/analysis-utah-jazz-vs-la-clippers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Analysis The Utah Jazz&#39;s tough 4th quarter vs. LA Clippers</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Analysis The Utah Jazz&#39;s tough 4th quarter vs. LA Clippers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Angeles Clippers forward Kawhi Leonard, right, drives by Utah Jazz guard Talen Horton-Tucker during the second half of an NBA basketball game Monday, Nov.</p></div>
            </div>
        </a>
        </Template></>;
}