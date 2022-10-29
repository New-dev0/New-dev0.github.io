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
            <Image width={800} height={500} src="https://newsroomodisha.com/wp-content/uploads/2022/10/6ee886151401cf625e6ae6e559c88bf7-FNMjJq.jpeg" alt="Europa League"/>
            <h3>Recent News</h3>
            <a href='https://newsroomodisha.com/ronaldo-scores-on-return-as-manchester-united-qualify-for-europa-league-knockout-stage/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo scores on return as Manchester United qualify for Europa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQLH3RLrLJzl7a3vKHbRJAeJo84wc1DVdzY4xCy3NF1Ft-m-NR0tiV0yn19TTElAuBsw24K1BRb" alt="Ronaldo scores on return as Manchester United qualify for Europa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>London: Manchester United qualified for the knockout stage of the Europa League as Cristiano Ronaldo marked his return to the side by scoring in a 3-0 win&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/cristiano-ronaldo-scores-on-man-united-return-as-europa-league-progress-certain-529081'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo scores on Man United return as Europa League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQtN4dFmFukF9lP2WII5D3ULYu4It6VXf9RplzC8pA7k55cBPspxfkoK3QRF7ioEF8s3ya6bs-x" alt="Cristiano Ronaldo scores on Man United return as Europa League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo scored on his first Manchester United appearance since his refusal to come on as a substitute last week in a 3-0 win over Sheriff Tiraspol&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sport/football/europa-league-ronaldo-scores-on-return-as-man-united-advances-with-3-0-win-over-sheriff/article66063802.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo scores as United advances to Europa League knockouts</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRzKvljeI5UoDR5XZptToczQsQLRsbK6asXCeA9zffB2qwL7Nf-VRzKomYyk3hByQwhVifv9pFo" alt="Ronaldo scores as United advances to Europa League knockouts" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo, who was left out of the squad for the weekend Premier League trip to Chelsea for disciplinary reasons, scored Manchester United&#39;s third&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/manchester-united-sheriff-live-score-europa-league-updates-commentary-lineups-highlights/article66062551.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United 3-0 Sheriff, HIGHLIGHTS: Ronaldo, Rashford ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT28NIIqiEJXb19YBHnvQpEeZI27WmmjLBtan_uhP8CVkagygn6b6IRkv4yDKIzOKrvsT62-pU1" alt="Manchester United 3-0 Sheriff, HIGHLIGHTS: Ronaldo, Rashford ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United vs Sheriff: Catch the highlights, score, updates and commentary from the Europa League game at Old Trafford.</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/uefa-europa-league-2022-23-cristiano-ronaldo-scores-on-return-arsenal-lose-at-psv-eindhoven-news-232981'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Europa League 2022-23: Cristiano Ronaldo Scores On ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQd6Z7OZhKAVV_ZuIqijpF8q7p48ZXUSRKdidG64dInFnwoJbACW6C8UGgfEAEX0srC179G4N4O" alt="UEFA Europa League 2022-23: Cristiano Ronaldo Scores On ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo was back amongst the goals as the Red Devils beat Sheriff Tiraspol whereas Premier League leaders Arsenal lost to Dutch side PSV&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/uefa-europa-league-2022-23-arsenal-lose-2-0-to-psv-eindhoven-as-the-gunners-fire-blanks-for-the-first-time-this-season-in-pics-photos-233034'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Europa League 2022-23: Arsenal Lose 2-0 To PSV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSN3El2cVg3N9lOCIlRnq4f7sVbkLKboPzmRk_8IYx06wV3vitTpYEqrg-NtqS-Cs5EtMrMCOpm" alt="UEFA Europa League 2022-23: Arsenal Lose 2-0 To PSV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PSV Eindhoven became the first team to hold Arsenal scoreless this season, beating the Gunners 2-0 to keep alive the fight for first place in Group A. Joey&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/europa-league-psv-arsenal-goals-score-result-highlights-lazio-midtjylland-uel-knockouts/article66062767.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSV beats Arsenal to book Europa League last-16 spot, Lazio wins</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRGKDey62NrtB8Ib5IOu1fzCdjRdocRbNHxmvpLSFC1ooTwwhIMfxbMnpp14IMNIwnX2vwvphi" alt="PSV beats Arsenal to book Europa League last-16 spot, Lazio wins" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal conceded two goals in the second half which brought its perfect run in the Europa League to an end.</p></div>
            </div>
        </a><a href='https://www.1news.co.nz/2022/10/28/ronaldo-scores-on-return-in-man-uniteds-europa-league-win/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo scores on return in Man United&#39;s Europa League win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNYj5WVlwylcQOTa5hXSZv7YfLrl6FXej4fVbTHfiXX1O3Op738xuLzsqdwShXc2wdNFzih2cs" alt="Ronaldo scores on return in Man United&#39;s Europa League win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United&#39;s Cristiano Ronaldo scored on his return to the starting line-up as the Red Devils sealed a place in the Europa League knockout rounds&nbsp;...</p></div>
            </div>
        </a><a href='https://hungarytoday.hu/ferencvaros-wins-europa-league-group-after-a-draw/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ferencváros Wins Europa League Group after a Draw</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJX4mIQdqmvNmy6CdfFjlUtl1yM9D74R4InecJrE9UXBf2PskOIYgwsCIUXbgm9qm4dSOHwj9l" alt="Ferencváros Wins Europa League Group after a Draw" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Hungarian champions won Group H by drawing 1-1 at home to AS Monaco in the fifth round, while Crvena zvezda beat visiting Trabzonspor 2-1. According to&nbsp;...</p></div>
            </div>
        </a><a href='https://morningstaronline.co.uk/article/s/gunners-overwhelmed-europa-league-defeat'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gunners overwhelmed in Europa League defeat</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS7pnSErKapjypbAk_Ph1mETT1r8B9cwmZIrQE3v6ek724eqA8ykZRZz8pCcjHBeXzIC6JoUdIw" alt="Gunners overwhelmed in Europa League defeat" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ARSENAL must beat Zurich next week to guarantee top spot in Europa League Group A after a disappointing 2-0 defeat at the hands of a vibrant PSV Eindhoven&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}