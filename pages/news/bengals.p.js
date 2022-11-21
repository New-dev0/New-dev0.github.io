import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bengals</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bengals"/>
        <meta name="description" content="Trending News about Bengals" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bengals</h1>
            <Image width={800} height={500} src="https://images2.minutemediacdn.com/image/upload/c_crop,w_3000,h_1687,x_0,y_152/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/59/01gj0zyam8m81n967mzs.jpg" alt="Bengals"/>
            <h3>Recent News</h3>
            <a href='https://stripehype.com/posts/bengals-vs-steelers-breaking-down-week-11-announcers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals vs Steelers: Breaking down the Week 11 announcers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRm1gquwli5n3PN0IkcNIEUcLtjpGrKAZlBViYdJ9QcSeR_AqRv4acK38y8a6qAzE7_ENJcczyU" alt="Bengals vs Steelers: Breaking down the Week 11 announcers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Cincinnati Bengals and Pittsburgh Steelers face off for round two on Sunday&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/story/_/id/35070518/bengals-rb-joe-mixon-suffers-concussion-vs-steelers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals RB Joe Mixon suffers concussion vs. Steelers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpSih0dezBHwDVKljD-RefIvK_oQWeQ4IAcR2IHJnnOndza5TBwhVBmMAnRaMErchuDrCqWX2y" alt="Bengals RB Joe Mixon suffers concussion vs. Steelers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bengals running back Joe Mixon suffered a concussion in Sunday&#39;s game against the Steelers.</p></div>
            </div>
        </a><a href='https://www.steelers.com/news/pregame-blog-steelers-vs-bengals-x9058'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pregame Blog: Steelers vs. Bengals</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR0g7HTHnOiFgs8Bajj5aPUoQJ1PYCHJvYKEskmM2vZbZfWIQ_0CHm8zVRy9YRahglBPZReSxsA" alt="Pregame Blog: Steelers vs. Bengals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Steelers take on the Cincinnati Bengals at Acrisure Stadium.</p></div>
            </div>
        </a><a href='https://www.steelers.com/news/steelers-inactives-for-week-11-vs-bengals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steelers inactives for Week 11 vs. Bengals</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQeGN6-YzdsFrz7hTHJ-Oc3ZZa0cFcsyV8_AES_OMwScWByVYe_8-FNqp6YGO_HkG72rpp7-9Jh" alt="Steelers inactives for Week 11 vs. Bengals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Find out who won&#39;t play as the Steelers take on the Cincinnati Bengals at Acrisure Stadium.</p></div>
            </div>
        </a><a href='https://www.bengals.com/news/bengals-throttle-steelers-with-second-half-onslaught'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals Upend Steelers With Second Half Onslaught</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-Tr-izvYA-RaS7aFN6s2-s1lur12HL_tFsr6G-du0U1hnn0X4m9sssG2TX_o3vV3DeMNg3ucu" alt="Bengals Upend Steelers With Second Half Onslaught" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PITTSBURGH -- Joe Burrow gave Steelers rookie Kenny Pickett an NFL quarterbacking clinic Sunday when he sliced the Steelers for four touchdown passes and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cincinnati.com/story/sports/nfl/bengals/2022/11/20/cincinnati-bengals-game-score-vs-pittsburgh-steelers-live-updates/69660363007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Replay: Cincinnati Bengals beat Pittsburgh Steelers 37-30</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFaToZFBlO04wO9YtxSflOZZt_TxyK9DX29EW8y4kiJfynvvgSQUyBjurT0f6MIoulbaYxCH7A" alt="Replay: Cincinnati Bengals beat Pittsburgh Steelers 37-30" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Cincinnati Bengals (5-4) will face the Pittsburgh Steelers (3-6) in a Week 11 AFC North battle at 4:25 p.m. on CBS. Cincinnati is coming off a bye week&nbsp;...</p></div>
            </div>
        </a><a href='https://theathletic.com/3916225/2022/11/20/bengals-joe-mixon-concussion/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals RB Joe Mixon ruled out vs. Steelers with concussion</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSNkMsSeHnKl1iDnzcD86tivNl0FxcVYxfTissYaULDxN3Fg_xPVxZMugkXmBvhh9w7hinhx3xq" alt="Bengals RB Joe Mixon ruled out vs. Steelers with concussion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entering Sunday, the 26-year-old Pro Bowler led the Bengals with 585 rushing yards and eight total touchdowns this season.</p></div>
            </div>
        </a><a href='https://profootballtalk.nbcsports.com/2022/11/20/bengals-lose-joe-mixon-to-concussion/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals lose Joe Mixon to concussion</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwFZg2_RZWGHBu_ZZUsWB3z-BIrBhAQqQ2P19oBDfVPTHUNvRM__nstcqJj_s2Aj5KW1htSpEU" alt="Bengals lose Joe Mixon to concussion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Under NFL rules, Mixon will have to go through the league&#39;s concussion protocol, which includes getting cleared by an independent neurologist, before he can&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cincyjungle.com/2022/11/20/23469760/bengals-steelers-final-score-recap-cincinnati-news-pittsburgh'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals beat Steelers: Final score, recap and more from Cincinnati ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSOTsleXiNcweaCDc2-WeqMX9KkGM7LlPaoDwOQDckMkJCxjKbk0iA7M2V60UyugVm6Ly7AC-6w" alt="Bengals beat Steelers: Final score, recap and more from Cincinnati ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Six different receivers were recipients of 20+ yard passes, and Samaje Perine ended up with three touchdowns through the air. You read that right. Tee Higgins&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/steelers/news/offense-disappears-second-half-as-steelers-fall-cincinnati-bengals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Offense Disappears in Second Half as Steelers Fall to Bengals</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQCgQTed2GXClyAugO_PNqUOSM9BnYpeZe_0FJwDyT5gRe-5P61hV7vYMxRQd0o6ro0lOTakUkd" alt="Offense Disappears in Second Half as Steelers Fall to Bengals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Pittsburgh Steelers entered halftime with a lead but couldn&#39;t create enough offense to beat the Cincinnati Bengals.</p></div>
            </div>
        </a>
        </Template></>;
}