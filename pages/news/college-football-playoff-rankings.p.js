import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>College Football Playoff rankings</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,College Football Playoff rankings"/>
        <meta name="description" content="Trending News about College Football Playoff rankings" /></Head><Template>
            <h1 style={{fontSize: "30"}}>College Football Playoff rankings</h1>
            <Image width={800} height={500} src="https://www.ncaa.com/_flysystem/public-s3/styles/large_16x9/public-s3/images/2022-12/kansas-state-tcu-big-12-championship-game.jpg?h=f4503bb4&itok=VVV7s1i6" alt="College Football Playoff rankings"/>
            <h3>Recent News</h3>
            <a href='https://www.ncaa.com/news/football/article/2022-12-03/kansas-state-hands-tcu-first-loss-adds-college-football-playoff-week-14-drama-usc-rout'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kansas State hands TCU first loss, adds to College Football Playoff ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5YgyMqOOXqIM2gke0vaqv4Efp7wRUIRwyuLvN0NzjFMOjQmzSRRafybNU1XKOE2oxB5VcjhPm" alt="Kansas State hands TCU first loss, adds to College Football Playoff ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Conference championship weekend gave teams a chance to not only win a trophy but to make a lasting impression ahead of the final College Football Playoff&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/college/cfb-hq/ncaa-football-picks/college-football-playoff-rankings-predictions-tcu-big-12-ohio-state-michigan-georgia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>College Football Playoff prediction after TCU loses Big 12 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWKZnbM9AF0KKNGNsFR_4e6cCMcTlKdo0NvY-aev2JYgvGavZeWUeXi_iGSdE1-peXmoYet3gJ" alt="College Football Playoff prediction after TCU loses Big 12 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Where things stand in the College Football Playoff rankings picture after TCU lost the Big 12 Championship Game.</p></div>
            </div>
        </a><a href='https://dknation.draftkings.com/2022/12/3/23491667/projected-college-football-playoff-field-big-12-sec-big-ten-championship-games-live-updates'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>College Football Playoff rankings: Live updates on projected field as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRhl6PRFhJiuQpfPofb9msjWI9s7i9oyi4evhd2o_QaHYPHnieUQfeHoiZ7LIWYuth-aPjnMBSt" alt="College Football Playoff rankings: Live updates on projected field as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;ll update what we project to be the standings as conference championship games finish today.</p></div>
            </div>
        </a><a href='https://www.si.com/college/2022/12/03/college-football-playoff-outlook-tcu-alabama-tennessee-usc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Latest CFP Outlook: With TCU&#39;s OT Loss, Who Gets In?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTIxzPXDa5DxiJ5wNFqZjlKt8_NTTPaTzuUsCxNwErenfqBIc1IqrogNMTbfXnwfzZuJmymKg5_" alt="Latest CFP Outlook: With TCU&#39;s OT Loss, Who Gets In?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With two conference championships in the rearview, the College Football Playoff picture is more uncertain than it was after this past week&#39;s penultimate&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/ncaa-football/news/college-football-rankings-tcu-loss-kansas-state-ohio-state-alabama-cfp/nuzbdro99kum24fmfmfok3o4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>College football rankings: What TCU&#39;s loss to Kansas State means ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQb78sg3gWSs3D1fBnbT0C5YwzlT49MisgPGuNsm5_dx4LQ1FSayL6TBIvVGEY-lfBZ8AIljiSs" alt="College football rankings: What TCU&#39;s loss to Kansas State means ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TCU had a clear job heading into the Big 12 Championship against Kansas State: Win and play in the playoffs. It fell short of that goal in heart-breaking&nbsp;...</p></div>
            </div>
        </a><a href='https://www.freep.com/story/sports/college/university-michigan/wolverines/2022/12/03/michigan-tcu-college-football-playoff-ohio-state-georgia/69698575007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Get ready for Michigan-TCU in College Football Playoff − no matter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRG2UHqpEFksa0aUUW3kn1FbiVPTz1LPUE67qfo9g4FxjjVjZmMS6WgePB1uN_O6mRBsD2VT47X" alt="Get ready for Michigan-TCU in College Football Playoff − no matter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The College Football Playoff field seems set and so do the matchups: Georgia vs. Ohio State in one semifinal; Michigan vs. TCU in the other semifinal.</p></div>
            </div>
        </a><a href='https://clutchpoints.com/tcu-news-big-12-commissioner-surprises-no-one-with-horned-frogs-college-football-playoff-take'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Big 12 commissioner&#39;s TCU College Football Playoff take</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-0wRxLeSTDCBv28MBGSx6AqXt8GiDnftZOyf2R5wAqvdJrfTHn4ZLw5xq0zQiJfdI_RpTu8TJ" alt="Big 12 commissioner&#39;s TCU College Football Playoff take" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The commissioner of the Big 12 reiterated that the TCU Horned Frogs should make the College Football Playoffs no matter what.</p></div>
            </div>
        </a>
        </Template></>;
}