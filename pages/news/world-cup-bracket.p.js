import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup bracket</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup bracket"/>
        <meta name="description" content="Trending News about World Cup bracket" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup bracket</h1>
            <Image width={800} height={500} src="https://static01.nyt.com/images/2022/11/30/sports/world-cup/world-cup-bracket-1669826704164/world-cup-bracket-1669826704164-facebookJumbo-v3.png" alt="World Cup bracket"/>
            <h3>Recent News</h3>
            <a href='https://www.nytimes.com/interactive/2022/sports/world-cup/world-cup-bracket.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 World Cup Bracket: The Knockout Stage</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQY4o7LExtlermF91hhCR2ZD4Ih20KvnnYns4E06C0AeUCu-wuoCssDHqnE5ChLAEpio9eOhLUd" alt="2022 World Cup Bracket: The Knockout Stage" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup will soon reach its knockout stage: win or go home. The teams in the bracket will be updated as the round of 16 matchups are determined in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/2022/11/29/world-cup-bracket/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup bracket and knockout round schedule</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcREMt9xruyrdj24u_Lgdcv5H-chFW6xdgPvVca6BSTvyjTp9YFwfWHQVdP1uSf3XcQhVFwL13VN" alt="World Cup bracket and knockout round schedule" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup knockout-round bracket is half completed after a thrilling day in Qatar. Argentina took the top spot in Group C with its 2-0 win over Poland,&nbsp;...</p></div>
            </div>
        </a><a href='https://dknation.draftkings.com/2022/11/29/23484386/world-cup-2022-bracket-round-of-16-teams-matchups-seedings-pairings-futures-odds'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 World Cup bracket: Round of 16 matchups, teams, standings</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWEmRuUIqFtr4ozUvOucEP5LH1qth7Ak5a86tWXCne0wpvE0v8Zb6bwG7tvI4SCspQ2R4Dw0u8" alt="2022 World Cup bracket: Round of 16 matchups, teams, standings" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Casemiro of Brazil celebrates with team mates during the FIFA World Cup Qatar 2022 Group G match between Brazil and Switzerland at Stadium 974 on November&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/world-cup-group-scenarios-how-teams-qualify-advance-knockout/inwfcze1wwjzjcxxy66cjgoa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup group scenarios 2022: How teams can qualify and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTlqaAZGzn7F-eSQGWOuC9GoLb2Ac9JYKX1_aKlZzPUFi3QHqZpwaE-PnOUvkqEfvWYK1-3IBee" alt="World Cup group scenarios 2022: How teams can qualify and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Cup group permutations: With only one final matchday to play in the group stage of the 2022 FIFA World Cup, The Sporting News has run through all the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.10tv.com/article/news/nation-world/round-of-16-world-cup-bracket-2022/507-8696a599-f62a-43c8-8c43-94889076763c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who has qualified for the knockout round at the World Cup?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQFnL_9FhBAl06f4mO49Y1SqdjcHFqr3dt0SV_hkJ8IMFn5i8FVBhdl_juXOf96YOH8OkQlrldN" alt="Who has qualified for the knockout round at the World Cup?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The first game of the knockout round is on Saturday, Dec. 3, with the United States facing off the Netherlands.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-us/news/world-cup-2022-knockout-stage-dates-kick-off-times-and-road-to-the-final/blt4bc3561cde307842'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 knockout stage: Dates, kick-off times &amp; road to the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKTJAbpTSClAu-rbxmmBnCqNeIo0reShN45CEziOjJzhXzTeIrEIx3aZljoY0v5DyfX2Dsf6y3Pg" alt="World Cup 2022 knockout stage: Dates, kick-off times &amp; road to the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The round of 16 saw France beat Argentina 4-3 in Russia four years ago in what was one of the most spectacular games of the tournament. In 2022, the matches&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}