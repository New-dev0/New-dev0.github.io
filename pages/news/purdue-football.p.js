import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Purdue football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Purdue football"/>
        <meta name="description" content="Trending News about Purdue football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Purdue football</h1>
            <Image width={800} height={500} src="https://www.mlive.com/resizer/bj8ynoiXdH2-X3G5FnSdzbSzjZg=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/DLDQ3VVILREJ3FMB2CWNEXRROA.jpeg" alt="Purdue football"/>
            <h3>Recent News</h3>
            <a href='https://www.mlive.com/wolverines/2022/11/michigan-football-to-play-purdue-for-big-ten-championship.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan football to play Purdue for Big Ten championship</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRTb9BZdbHc2xIB3bh3otldUpMiPCXGQlMW5XYx-mfjq1HzXjD-W9s4pz2P8tMPvpPBEa4-7qrf" alt="Michigan football to play Purdue for Big Ten championship" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>COLUMBUS, Ohio -- Michigan will try to defend its Big Ten title against a team it hasn&#39;t faced in five years. The Wolverines, champions of the East Division&nbsp;...</p></div>
            </div>
        </a><a href='https://bigten.org/news/2022/11/26/purdue-and-michigan-to-meet-in-big-ten-football-championship-game.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Purdue and Michigan to Meet in Big Ten Football Championship ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwPAAg7KnHq1BnnsKAYI37dGVJtZ0yDBNo_VvV7si-T_wkdNrVDQqSPJwQMQGkb1PEYeuwPuyx" alt="Purdue and Michigan to Meet in Big Ten Football Championship ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ROSEMONT, lll. — The Purdue Boilermakers and Michigan Wolverines are set to meet in the 2022 Big Ten Football Championship Game presented by Discover, which&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indystar.com/story/sports/college/2022/11/26/purdue-vs-indiana-football-score-updates-from-old-oaken-bucket-big-ten-west-iu-hoosiers-boilermakers/69678696007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Purdue beats IU to clinch Big Ten West title, trip to Lucas Oil Stadium ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSzF0A_jsWy_pPqOdXfTa-vepDkh7MFWv2G0PYv3BJPzMuYJMdjvJJJbjjoIp5e5XynCInK87PR" alt="Purdue beats IU to clinch Big Ten West title, trip to Lucas Oil Stadium ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A lot more than bragging rights were on the line today in the Old Oaken Bucket. With its win over IU, Purdue clinched its first Big Ten West title.</p></div>
            </div>
        </a><a href='https://www.si.com/college/purdue/football/live-blog-follow-purdue-football-matchup-with-indiana-in-real-time'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE BLOG: Follow Purdue Football&#39;s Matchup With Indiana in Real ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvmrWOYqSLq5cB-44e_Fg_s6VZWowoXpDojkK5q1vU41FU92Ay0ArK11zsJoAoa-lCxTh7ihN2" alt="LIVE BLOG: Follow Purdue Football&#39;s Matchup With Indiana in Real ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Purdue football is on the road against rival Indiana, looking to claim the Old Oaken Bucket for the second consecutive season while playing for a Big Ten&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/college-football/news/indiana-vs-purdue-updates-live-ncaa-football-game-scores-results-for-saturday-27009796/live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indiana vs. Purdue updates: Live NCAA Football game scores ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSx6Y_NmQg4xfEkspClg0dG5C0mp3LhWd5PXU2Duck0Vt7yyf7ZucqfHRI5p1iaBz9wKxOWLmEF" alt="Indiana vs. Purdue updates: Live NCAA Football game scores ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IU and the Purdue Boilermakers will face off in a Big Ten battle at 3:30 p.m. ET at Memorial Stadium. The Hoosiers aren&#39;t favored, but they just beat the odds&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jconline.com/story/sports/college/purdue/football/2022/11/26/live-updates-score-purdue-football-at-indiana-for-old-oaken-bucket/69671338007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Purdue football 30, Indiana 16: How they scored</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT4QkVWoWvO3UO1WLKArQx8rMTgx5wvnIeXU5e6sL3D0naX4V2dmA282iB_4XfnCfVh7QYuQZyb" alt="Purdue football 30, Indiana 16: How they scored" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Boilermakers win the outright Big Ten West title and will face Michigan in the conference championship game.</p></div>
            </div>
        </a><a href='https://www.clickondetroit.com/all-about-ann-arbor/2022/11/26/michigan-football-to-play-purdue-in-big-ten-championship-game/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan football to play Purdue in Big Ten Championship Game</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTy6XiBMPXaCoWKiBGOMsQN4v_4iVM2Wf91BcNDVhg1v1SSh6B3P5qZq72PtZmuhlrRMjHh0StR" alt="Michigan football to play Purdue in Big Ten Championship Game" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michigan was ranked No. 3 in the College Football Playoff rankings heading into Saturday, but will likely jump one spot after beating the No. 2 Buckeyes.</p></div>
            </div>
        </a><a href='https://clutchpoints.com/purdue-football-news-boilermakers-win-indiana-michigan-big-ten'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Purdue football win over Indiana sets up rare Michigan Big Ten clash</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQb9WKlwqjsYj2LZsZj7yt3B5jZv2hkxq8tjlXUxWZ5CA8lBOTGsXb-9sFAMebsczHf-sa3Xx3H" alt="Purdue football win over Indiana sets up rare Michigan Big Ten clash" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Big Ten Championship game is all set. It&#39;s now certain that the Purdue Boilermakers will be battling it out with the Michigan Wolverines in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/tv/college-football/2022/11/26/purdue-indiana-stream-college-football-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to Watch Purdue at Indiana: Stream College Football Live, TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDr2cgb2uvEjRnvMTOQtimwBb5D1Z4i75epMEvaTR701GrcQAMyPfL_mHYTnoPAFjkfpVhK17d" alt="How to Watch Purdue at Indiana: Stream College Football Live, TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Purdue heads to Bloomington on Saturday afternoon to take on Indiana for the Old Oaken Bucket.</p></div>
            </div>
        </a><a href='https://www.purdueexponent.org/sports/mens/football/article_60d4f002-6dd5-11ed-9435-3369ef3bc672.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Purdue Football: Boilers trail Hoosiers 7-3 at halftime.</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRBGPypoJNwCeTMr2h23-LD5agMP-fqvQKZ23CMBZk2f1008yxxZDYSZHZKZolA971nWbDn_V0W" alt="Purdue Football: Boilers trail Hoosiers 7-3 at halftime." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Redshirt freshmen runningback Devin Mockobee cutsback on his run as he dodges Indiana defenders. Mockobee leads Purdue with 35 rushing yards. David Hickey |&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}