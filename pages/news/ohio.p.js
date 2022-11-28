import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ohio</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ohio"/>
        <meta name="description" content="Trending News about Ohio" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ohio</h1>
            <Image width={800} height={500} src="https://www.cleveland.com/resizer/574u_MVou0PVDSq_6v-vSrMzlNA=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SMK4VMMJOBCUDM2FY4L5DDGTDI.JPG" alt="Ohio"/>
            <h3>Recent News</h3>
            <a href='https://www.sfgate.com/sports/article/OHIO-72-ALABAMA-STATE-58-17614079.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>OHIO 72, ALABAMA STATE 58</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="OHIO 72, ALABAMA STATE 58" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>3-Point Goals: 6-15, .400 (Range 5-6, Madlock 1-4, Coleman 0-1, McCoy 0-1, McCray 0-1, Knox 0-2). Team Rebounds: 2. Team Turnovers: 1.</p></div>
            </div>
        </a><a href='https://www.cleveland.com/news/2022/11/some-republicans-want-to-abolish-ohios-income-tax-how-could-the-state-do-that.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Some Republicans want to abolish Ohio&#39;s income tax. How could ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-8EPF_MIhpOzre9IfMxhWkMh0f-ZSH_URVa3RJ8lMwErNqHZHNoVX50nn2NhqknYg0cEPqAjb" alt="Some Republicans want to abolish Ohio&#39;s income tax. How could ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Completely abolishing Ohio&#39;s state income tax, long a conservative pipe dream, has never been closer to becoming a reality.</p></div>
            </div>
        </a><a href='https://www.si.com/college/2022/11/27/ohio-state-clemson-lsu-tumble-college-football-coaches-poll-week-14'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohio State, Clemson, LSU Tumble in College Football Coaches Poll ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0kPbAQjP2lBME4HObn1cH3B_Ioc9zS_yV5vNo29RJvPtbz_m8dGVosKYRjr8NavfO8St1kshT" alt="Ohio State, Clemson, LSU Tumble in College Football Coaches Poll ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saturday saw four top 10 upsets, causing major shifts in this week&#39;s poll.</p></div>
            </div>
        </a><a href='https://www.seattletimes.com/sports/brown-has-18-in-ohios-72-58-victory-against-alabama-state/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brown has 18 in Ohio&#39;s 72-58 victory against Alabama State</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Brown has 18 in Ohio&#39;s 72-58 victory against Alabama State" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Led by Miles Brown&#39;s 18 points, the Ohio Bobcats defeated the Alabama State Hornets 72-58 on Sunday.</p></div>
            </div>
        </a><a href='https://www.si.com/college/ohiostate/football/ohio-state-football-what-theyre-saying-about-45-23-loss-to-michigan-reactions-takeaways'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What They&#39;re Saying About Ohio State&#39;s Loss To Michigan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTMBGEuQCfnJnEQBlBsYpNqHPZgEamaJ4walrTRH45CWsXHN5tsbq8EJNBv9zZcMLG9xVxqAKZ" alt="What They&#39;re Saying About Ohio State&#39;s Loss To Michigan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“There&#39;s no way to sugarcoat it. All season, both teams knew this was going to be the play-in game to the Big Ten championship game and College Football Playoff&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newarkadvocate.com/story/opinion/columnists/2022/11/27/platt-use-holidays-to-tout-ohios-many-possibilities/69658703007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Platt: Ohio&#39;s opportunities are great, now&#39;s the time to invite family back</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSrtTctoMr4sawImimxU-aByqwc4JLz_W8C1pUFxNRmjuW82Km25RCDn9ZAh6ZJSj2kowoDAo-R" alt="Platt: Ohio&#39;s opportunities are great, now&#39;s the time to invite family back" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rick Platt, of the Heath-Newark-Licking County Port Authority says now is the time to invite people to return to Ohio to enjoy its many possibilities.</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10056911-ohio-state-hc-ryan-day-campaigns-for-cfp-playoff-berth-despite-loss-to-michigan'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohio State HC Ryan Day Campaigns for CFP Playoff Berth Despite ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrtnDAX7_wwANWQHtATVhMffHs7wFsMvaiKBlpG3cC6vr5EBbG8xN4HuciWJlwhHy-WOKXqih2" alt="Ohio State HC Ryan Day Campaigns for CFP Playoff Berth Despite ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ryan Day isn&#39;t giving up the dream. Ohio State&#39;s head coach still believes his team did enough to qualify for the College Football Playoff despite&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/college/ohiostate/football/ohio-state-football-buckeyes-drop-number-5-in-ap-top-25-poll-loss-to-michigan'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohio State Drops To No. 5 In AP Top 25 Poll After Loss To Michigan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSwIXFLuh_a2TDvcTHFp7S03_LQfUB1ZUQVYGByvs1Ib5sAi9ukh3jfOEQTNpPXSerFAR8-TkLV" alt="Ohio State Drops To No. 5 In AP Top 25 Poll After Loss To Michigan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Buckeyes appear to be first in line for the playoff if someone trips up on conference championship weekend.</p></div>
            </div>
        </a><a href='https://buckeyeswire.usatoday.com/lists/kirk-herbstreit-weighs-in-with-his-top-six-after-ohio-state-football-loss-to-michigan/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kirk Herbstreit weighs in with his top six after Ohio State loss</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQHV_6YxHYb4Q-5Xk98wPPlhNXm_Tty8atEYdEnPKjeRsrsmExavvHZDFpKy4p7Aesako3tgJnV" alt="Kirk Herbstreit weighs in with his top six after Ohio State loss" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>How far did the former Ohio State quarterback Kirk Herbstreit drop the Buckeyes after being embarrassed by Michigan?</p></div>
            </div>
        </a><a href='https://www.cbssports.com/college-football/news/coaches-poll-top-25-ohio-state-remains-within-top-five-lsu-falls-from-top-10-in-college-football-rankings/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coaches Poll top 25: Ohio State remains within top five, LSU falls ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQx2aquMAz0eOE4-kse8UqCR69f-ccJ0g9KbJQD2fO5D_Ye3uHjZ0KoJOqWVhujyyVPeqhEuAJ8" alt="Coaches Poll top 25: Ohio State remains within top five, LSU falls ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The results from Rivalry Week set up a difficult task for voters who have turn in ballots for the updated college football rankings. But after all the dust&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}