import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup standings</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup standings"/>
        <meta name="description" content="Trending News about World Cup standings" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup standings</h1>
            <Image width={800} height={500} src="http://cdn.wionews.com/sites/default/files/2022/11/27/313841-lionel-messi.png" alt="World Cup standings"/>
            <h3>Recent News</h3>
            <a href='https://www.wionews.com/sports/fifa-world-cup-2022-points-table-and-team-standings-of-all-groups-after-day-9-538619'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 - Points table and team standings of all groups ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSM31NdhZLp0IGFlPPgVj6vEUSdSoLuDgLHOqeWJP_5-wLwxF1bCpnVkUELxGasf5nIvuR_e8kc" alt="FIFA World Cup 2022 - Points table and team standings of all groups ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Day 9 of the FIFA World cup 2022 was action packed with two impressive comebacks in the day. The ninth day of the World Cup in Qatar has seen some of the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/soccer/news/world-cup-2022-scenarios-standings-tiebreakers-as-brazil-portugal-qualify-for-last-16-27-teams-alive/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Scenarios, standings, tiebreakers as Brazil ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR3a8Wh3443tiuxh5z9VsZtbdFKKY80B9b9myTO6g2Cl1S_n8CeaqezLDlMDDq_h7chE7Dc1QtP" alt="World Cup 2022: Scenarios, standings, tiebreakers as Brazil ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France, Portugal and Brazil are already through, who will join them in the knockout stage of the tournament?</p></div>
            </div>
        </a><a href='https://dknation.draftkings.com/2022/11/29/23484494/world-cup-standings-round-of-16-stage-clinching-scenarios-usa-england-iran-wales-results-bracket'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup bracket: Final Group B standings and who advances to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcROHAg45ZF5q6RmSgt5UgHjZ1f0JIrhfo7GU07DNrntVJ1DRAvhcQp8oU-UvIUQvtNbnFg21LYi" alt="World Cup bracket: Final Group B standings and who advances to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fans of Iran and USA together with flags during the FIFA World Cup Qatar 2022 Group Photo by Matthew Ashton - AMA/Getty Images. The 2022 World Cup has&nbsp;...</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/group-a-world-cup-2022-final-standings-who-qualified-for-the-round-of-16-and-who-is-out-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Group A World Cup 2022 final standings: Who qualified for the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRvnypv-07fv7X-dbv3CY2KLTAEmcCHvJR4mXYOKL-JK_lJP5oHnkBBlKuh-guyMuaDy8vUQ4Bs" alt="Group A World Cup 2022 final standings: Who qualified for the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The first two teams booked their place in the knockout stage at Qatar 2022 and another two bow out.</p></div>
            </div>
        </a><a href='https://www.bbc.com/pidgin/articles/c25x7w4geeyo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar World Cup 2022: Fifa World Cup standings and wetin Ghana ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQyKA4bPQ1kFN8gV58uLcVeFmdLbTMvM1GMjhcYAeUh_fVEqOtvVmMwY2kRXkOu9ZBe7RdyPchy" alt="Qatar World Cup 2022: Fifa World Cup standings and wetin Ghana ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wit only one more group match remaining, all five African teams still get hope of progressing to di round of 16.</p></div>
            </div>
        </a><a href='https://www.socceramerica.com/publications/article/94502/world-cup-final-group-a-standings.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup: Final Group A standings</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="World Cup: Final Group A standings" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Netherlands (Senegal 2-0, Ecuador 1-1, Qatar 2-0), 7 points 2. Senegal (Netherlands 0-2, Qatar 3-1, Ecuador 2-1), 6 points 3. Ecuador (Qatar 3-1,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}