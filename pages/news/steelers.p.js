import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Steelers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Steelers"/>
        <meta name="description" content="Trending News about Steelers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Steelers</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/steelers/wo022bxvuraeicsuvhu1" alt="Steelers"/>
            <h3>Recent News</h3>
            <a href='https://www.steelers.com/news/steelers-inactives-for-week-13-vs-falcons'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steelers inactives for Week 13 vs. Falcons</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7dMVWSf-W93ppFW2NzyBqPOdHrlUE5qaq8zbYTJ2s9USPh4X90rwyI7nW6XMGfXbMgjsRgMP-" alt="Steelers inactives for Week 13 vs. Falcons" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Steelers go into today&#39;s game against the Atlanta Falcons with a healthy stable of running backs, with Najee Harris, Jaylen Warren and Benny Snell Jr. all&nbsp;...</p></div>
            </div>
        </a><a href='https://www.steelers.com/news/from-the-press-room-steelers-at-falcons'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>From the Press Room: Steelers at Falcons</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTx95N62CswAannoDTtjS55Xw1TjrLzVJFKfxW2wDjwdooll-H_rJuE5-gCTmg6SnZv9c_fdoSU" alt="From the Press Room: Steelers at Falcons" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coach Mike Tomlin and Kenny Pickett talked about the win, while Cameron Heyward shared an emotional story.</p></div>
            </div>
        </a><a href='https://www.post-gazette.com/sports/steelers/2022/12/04/pittsburgh-steelers-atlanta-falcons-najee-harris-jaylen-warren-kenny-pickett/stories/202212040101'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ray Fittipaldo&#39;s Steelers report card: Smash-mouth football earns ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvA6bGl2plPjVE_ZBAKCyQePP1uylrUmWzVL2LuYfZod2wljrcFvt4jTdkfG7NilPJhPlDuOD2" alt="Ray Fittipaldo&#39;s Steelers report card: Smash-mouth football earns ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Steelers insider Ray Fittipaldo grades each aspect of the Steelers&#39; 19-16 victory against the Falcons. Quarterback: Kenny Pickett isn&#39;t going to wow anyone&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/story/_/id/35180500/steelers-hook-17-yard-touchdown-pass-kenny-pickett-connor-heyward'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steelers hook up on 17-yard touchdown pass from Kenny Pickett to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTczuWYS-OfWN8aYV5QPVQCSNytwfLaObctilNIigFb-lcHyMwR5TYSIr4m-A-Q6EN0WTfX4-FM" alt="Steelers hook up on 17-yard touchdown pass from Kenny Pickett to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Connor Heyward scored his first career touchdown to extend the Steelers&#39; lead over the Falcons in the second quarter.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nfl/news/kenny-pickett-steelers-avoid-mistakes-in-win-over-falcons-improve-to-3-1-since-week-9-bye/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kenny Pickett, Steelers avoid mistakes in win over Falcons, improve ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTwjGsdnGr2IoK4D7AGpQWKavuwehG3Eygw_f7a87VzhWgPncgVu1pkpMQD1A6cAXmhjOizuk-Y" alt="Kenny Pickett, Steelers avoid mistakes in win over Falcons, improve ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sunday&#39;s game in Atlanta was the type of game the Steelers lost earlier in the season. But in what has mostly been the case since their Week 9 bye,&nbsp;...</p></div>
            </div>
        </a><a href='https://profootballtalk.nbcsports.com/2022/12/04/minkah-fitzpatrick-interception-seals-steelers-19-16-victory-over-falcons/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Minkah Fitzpatrick interception seals Steelers 19-16 victory over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1QiE1xIZxn6RShBDrPb5YZzPoQhipMOJtdR4BvXs478jRuCW5MTQexhljCKgus-gz_K3GKfTm" alt="Minkah Fitzpatrick interception seals Steelers 19-16 victory over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Falcons quarterback Marcus Mariota finished 13-of-24 for 167 yards with a touchdown and an interception. Now at 5-7, the Steelers will host the Ravens next&nbsp;...</p></div>
            </div>
        </a><a href='https://profootballtalk.nbcsports.com/2022/12/04/nfl-2022-week-13-early-inactives-t-j-watt-is-active-for-steelers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL 2022 Week 13 early inactives: T.J. Watt is active for Steelers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSDKRaSUFqOKTB7PonWhFCBmIrrLwYDgmw8zaOtEmHYzXfIcfKX8YihtLNSKyCXZRVLJAalWo6" alt="NFL 2022 Week 13 early inactives: T.J. Watt is active for Steelers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Every week we bring you all the inactives from the 1 p.m. ET games in one post, constantly updated with the latest information. Linebacker T.J. Watt&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/steelers/news/pittsburgh-steelers-grind-out-road-win-over-falcons'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steelers Grind Out Road Win Over Falcons</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTOJPXmvG1MTzM4y6XvG8FX1NwgPDYZ-ZcoOgpZIgXgxXXf8ievNFlqJHp6y9Yae2yN9w_Dmz3y" alt="Steelers Grind Out Road Win Over Falcons" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Connor Heyward caught the first touchdown of his career, Najee Harris ran for 86 yards and Matt Wright made all four off his field goal attempts while the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/falcons/news/atlanta-falcons-pittsburgh-steelers-live-updates-highlights-drive-by-drive-coverage'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FINAL: Fitzpatrick Intercepts Mariota; Steelers Defeat Falcons 19-16</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSblEXv2whEuMSJehgfW2TxL78FHRO3WKre3KIRGGc2hMHx96pf2zP4HiSSnfJtIKbhw6HD7L2o" alt="FINAL: Fitzpatrick Intercepts Mariota; Steelers Defeat Falcons 19-16" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stay tuned for live drive-by-drive updates as the Atlanta Falcons host the Pittsburgh Steelers.</p></div>
            </div>
        </a><a href='https://thefalconswire.usatoday.com/2022/12/04/falcnos-marcus-mariota-steelers-week-13/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Marcus Mariota finds MyCole Pruitt for TD vs. Steelers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTB7pipmUJy_q3ttonYv1GFtCK9oF16bgkgdUXjcZVNStaHbykbBDGk6tg3F6VXR3zWeukWNSKk" alt="Watch: Marcus Mariota finds MyCole Pruitt for TD vs. Steelers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After a frustrating first half for the Falcons offense, the team finally managed to find the end zone late in the third quarter of Sunday&#39;s game against the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}