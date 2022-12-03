import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marcus Jones</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marcus Jones"/>
        <meta name="description" content="Trending News about Marcus Jones" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marcus Jones</h1>
            <Image width={800} height={500} src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1202%2Fr1100509_1296x729_16%2D9.jpg" alt="Marcus Jones"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/nfl/story/_/id/35158972/marcus-jones-scores-scintillating-48-yard-td-patriots-bills'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcus Jones scores scintillating 48-yard TD for Patriots against Bills</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdqsL-YvUJQtpwRiMSWtvx8pc6s35K9L8-L1GTbQjIc9QkPQFsGO9Z1x9lTnxUVfeHP8azingY" alt="Marcus Jones scores scintillating 48-yard TD for Patriots against Bills" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A dump-off pass from Mac Jones to cornerback/returner Marcus Jones results in a big scoring play.</p></div>
            </div>
        </a><a href='https://www.patriots.com/news/game-notes-marcus-jones-scores-on-48-yard-pass-from-mac-jones-on-his-first-caree'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Game Notes: Marcus Jones scores on 48-yard pass from Mac Jones ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSB6tqwTMxSBVrFRpAHTPgI5fYrhk9DjvCVB8kYbEfQ-6cIVAbghcTpN9rI1-Jo0gICNzttyB8C" alt="Game Notes: Marcus Jones scores on 48-yard pass from Mac Jones ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DEVIN MCCOURTY STARTS IN 200TH CAREER GAME. S Devin McCourty played and started in his 200th NFL game against the Bills. He has started every game he has&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/patriots/news/new-england-patriots-rookie-cornerback-marcus-jones-bright-spot-inept-offense-buffao-bills-recap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots &#39;Receiver&#39; Marcus Jones Lone Bright Spot on Inept Offense</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR9-S5Gb43FgTRbLLsHUwoeg4yDkMx93lip_aqxB2E-4J2y0OkT8NruJQ6GgTdXLx269WuzMjfS" alt="Patriots &#39;Receiver&#39; Marcus Jones Lone Bright Spot on Inept Offense" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The New England Patriots have dropped yet another game, and are now clinging to their slim playoff hopes.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/patriots/marcus-jones-shows-electric-speed-first-td-patriots-vs-bills'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcus Jones shows off electric speed on first TD of Patriots vs. Bills</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQ9tnYdVM2SJC57JfcEXB4ur3FuBwB5sznB0gONzof5mcvfKGJu5PCWTkXnOxbGYk0K0n2fDpD" alt="Marcus Jones shows off electric speed on first TD of Patriots vs. Bills" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patriots rookie cornerback Marcus Jones is electric with the ball in his hand, and he put those talents to good use as a wide receiver in Thursday&#39;s Week 13&nbsp;...</p></div>
            </div>
        </a><a href='https://www.patspulpit.com/2022/12/2/23489513/marcus-jones-versatility-touchdown-reception-patriots'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Versatile Marcus Jones a rare bright spot in Patriots&#39; loss to Bills</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR3wHVk4oDecb6Z-sLpb6HPJentxR3ns7eGFXp0MhqyDYAx3h0MdH_rhHMX64ubegMw7dGVQTrA" alt="Versatile Marcus Jones a rare bright spot in Patriots&#39; loss to Bills" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Related: Patriots offensive struggles continue in Thursday night defeat to Buffalo.</p></div>
            </div>
        </a><a href='https://www.boston.com/sports/new-england-patriots/2022/12/01/marcus-jones-touchdown-bills/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcus Jones, normally a defensive player, scores an offensive ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRObYXLi5ZI-iz1TfjJoW14RiVscqAhbNecnEP0whAx5ayVIRlThPG8BHpahFsrOthzs1fBJpYX" alt="Marcus Jones, normally a defensive player, scores an offensive ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patriots cornerback Marcus Jones keeps adding highlights to his rookie season. Read the story on Boston.com.</p></div>
            </div>
        </a>
        </Template></>;
}