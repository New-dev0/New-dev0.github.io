import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Packers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Packers"/>
        <meta name="description" content="Trending News about Packers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Packers</h1>
            <Image width={800} height={500} src="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/hslnxihedm4k5htpefuo" alt="Packers"/>
            <h3>Recent News</h3>
            <a href='https://www.nfl.com/news/packers-earn-nfl-record-787th-victory-moving-past-rival-bears-for-first-time'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Packers earn NFL-record 787th victory in franchise history, moving ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRzGBdwPYOK48Exh4k9EE0jfg_gxq9Y_P4UVTAHaa3vQ1P0jxyEpwTRM0Y83I5DOcBFRZqxqghr" alt="Packers earn NFL-record 787th victory in franchise history, moving ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On the strength of Sunday&#39;s 28-19 win, the Green Bay Packers have become the NFL&#39;s all-time winningest franchise and passed the archrival Chicago Bears for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/story/_/id/35151821/packers-nfl-winningest-franchise'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL&#39;s winningest team: Packers move to No. 1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTxgg9iMX7uVM5CBdDnb3xfb5vwjqPnLNnKCol76Jf9VV99m1S7wy76PNPxBkARUnP9C6wZXwg_" alt="NFL&#39;s winningest team: Packers move to No. 1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The two teams entered the contest tied for the most regular-season wins in NFL history at 786 victories apiece. But after the Packers beat the Bears 28-19, they&nbsp;...</p></div>
            </div>
        </a><a href='https://www.packers.com/news/packers-bears-in-game-updates-week-13-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Packers beat Bears, 28-19</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-MKGHxiNzirLobjMBCeV1s4lUcLIUMBSkB27md7uxFWUNHQweex72nHRkWbGlf-x8o4GzMYEc" alt="Packers beat Bears, 28-19" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>QB Aaron Rodgers was 18-of-31 for 182 yards and a TD for an 85.7 passer rating. WR Allen Lazard had five catches for 67 yards. For the Bears, Fields was&nbsp;...</p></div>
            </div>
        </a><a href='https://dairylandexpress.com/2022/12/04/instant-takeaways-packers-chicago-comeback-win/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Instant Takeaways: Packers escape Chicago with comeback win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvOzvMEYzh7fZ7T3H0yz1Rv5hzq0A6FNnQ5-M3E9qitE-6OdB_pvlinPsZnnjSw-HHWG4zo5XF" alt="Instant Takeaways: Packers escape Chicago with comeback win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here are my instant takeaways from the Packers performance against the Bears. -This was a depleted Bears secondary and a defensive front that has struggled to&nbsp;...</p></div>
            </div>
        </a><a href='https://packerswire.usatoday.com/lists/packers-28-bears-19-what-went-right-what-went-wrong-what-it-means/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Packers 28, Bears 19: What went right, what went wrong, what it ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSIUzMshNKqRfscdG957HH0HDwY6U4wTUTzpgzH_GJ7qwPSAOHxzmLpSdLd5_5jGSAJu-vqXeuQ" alt="Packers 28, Bears 19: What went right, what went wrong, what it ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Green Bay Packers trailed 10-0 and 16-3 but used 17 straight fourth-quarter points to come back and beat the Chicago Bears on Sunday at Soldier Field.</p></div>
            </div>
        </a><a href='https://bearswire.usatoday.com/lists/bears-packers-studs-and-duds-week-13/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Studs and duds from Bears&#39; Week 13 loss vs. Packers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRiOq__HBFHFy8RIf1__bvQR52YXLVMXVhBMHQ-wAthxjiLAGmW-BfqnNYM70wHKExMkCkn91r_" alt="Studs and duds from Bears&#39; Week 13 loss vs. Packers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Some poor play calling decisions by Luke Getsy, Cairo Santos missing two key kicks and allowing 18 unanswered points were big factors. While the defeat gets&nbsp;...</p></div>
            </div>
        </a><a href='https://packerswire.usatoday.com/2022/12/04/packers-rb-aaron-jones-becomes-fourth-player-in-team-history-with-5000-rushing-yards/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Packers RB Aaron Jones becomes fourth player in team history with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSiRGuRDYnAleXeqeUKrL3-ax4SmZl68J8sMXaUbZtxk029C6DaV5iXQnde_PNlpsKgXf_SEdIQ" alt="Packers RB Aaron Jones becomes fourth player in team history with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jones joins Ahman Green (8322), Jim Taylor (8207) and John Brockington (5024) to reach 5000 career rushing yards in team history.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/packers/news/aaron-jones-5000-rushing-yards-bears'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jones Rushes Past 5000-Yard Milestone</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjQeRYlg0_Lvk-LEnBqJumZvGW6d8zRn5_pv_FBNdr9DTcOiNEXBomT4Q_iWwO4lejn7P61qJl" alt="Jones Rushes Past 5000-Yard Milestone" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>GREEN BAY, Wis. – Green Bay Packers running back Aaron Jones topped 5,000 career rushing yards during Sunday&#39;s game at the Chicago Bears.</p></div>
            </div>
        </a>
        </Template></>;
}