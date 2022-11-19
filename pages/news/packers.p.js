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
            <Image width={800} height={500} src="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/dnn4sclxcr8fjad6xbfg" alt="Packers"/>
            <h3>Recent News</h3>
            <a href='https://www.nfl.com/news/2022-nfl-season-week-11-what-we-learned-from-titans-victory-over-packers-on-thur'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 NFL season, Week 11: What We Learned from Titans&#39; victory ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTuPj615f0GWjPnQ1mDQE6KFUtV0iaSK0VbsF7I6w6RFtwRg_nWDl_XCJqAGV8c_HZqiltffTbf" alt="2022 NFL season, Week 11: What We Learned from Titans&#39; victory ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Derrick Henry and a formidable defensive performance keyed the Titans&#39; 27-17 victory over Aaron Rodgers and the host Packers on Thursday night.</p></div>
            </div>
        </a><a href='https://www.nfl.com/news/aaron-rodgers-was-admittedly-off-in-latest-packers-loss-i-threw-a-lot-of-kinda-w'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aaron Rodgers was admittedly off in latest Packers loss: &#39;I threw a lot ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWrp2vAtzMw92btE1S5wWLpl9eVwZzftsr0AthT1DTo_lcodSfX6yJ2p9gbg-tg7x6qRVcWYkS" alt="Aaron Rodgers was admittedly off in latest Packers loss: &#39;I threw a lot ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amid an uncharacteristic autumn in Wisconsin, the latest unconventional chapter saw Aaron Rodgers miss badly on myriad throws and the Packers booed by cold&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tennesseetitans.com/news/titans-deliver-with-27-17-win-over-the-packers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Titans Deliver With 27-17 Win Over the Packers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTo99FTHeE5pj4q0iU90zOuRGBNfaND6V0b7fqgbnfSklZdVnmOCBvhZFnrimmdDoRoo0w5lSvA" alt="Titans Deliver With 27-17 Win Over the Packers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Titans quarterback Ryan Tannehill completed 22-of-27 passes for 333 yards and two touchdowns, along with an interception.</p></div>
            </div>
        </a><a href='https://packerswire.usatoday.com/2022/11/18/packers-offense-faced-dilemma-with-no-positive-outcomes-vs-titans/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Packers offense faced dilemma with no positive outcomes vs. Titans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkfMV5n-_wRSetTx_BCRLMjCN2__rq74P4AeITYj6y5vI-l44rMtNWYqHyXhtJSOvPW1T7hlL3" alt="Packers offense faced dilemma with no positive outcomes vs. Titans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Green Bay Packers offense faced a dilemma in the Tennessee Titans. Regardless of which path the Packers chose on Thursday night, there was likely never&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/recap/_/gameId/401437844'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Titans vs. Packers - Game Recap - November 17, 2022 - ESPN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7kvkRd1NE8S16rKa-HCnLHgyGVevzUdzVAudl3UDpZp7rmTfDF_VcmRB6CuRSilgu5el6rEBw" alt="Titans vs. Packers - Game Recap - November 17, 2022 - ESPN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a recap of the Tennessee Titans vs. Green Bay Packers football game.</p></div>
            </div>
        </a><a href='https://www.packers.com/news/disappointment-at-its-peak-as-another-game-gets-away-from-packers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Disappointment at its peak as another game gets away from Packers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdkxjT77m2I0Ntf0Wvyh5NAK-NDCH3l6XBUammsTvMjZQ9Wi2ThQDDTnvJ1v5T2TQgGBNporSP" alt="Disappointment at its peak as another game gets away from Packers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Defense gets an interception in the fourth quarter in a 10-point game. Offense goes three-and-out. Special teams provides a 24-yard punt return across midfield&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/story/_/id/35051475/packers-aaron-rodgers-takes-blame-missed-throws-loss-titans'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Packers&#39; Aaron Rodgers takes blame for missed throws in loss to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTf2M-7ZOp_a6pyddDY66SreZZVBI7-PSxjSzyizlduVZoXijLnoDdY4x_7KISjnSLNiPpFEuFQ" alt="Packers&#39; Aaron Rodgers takes blame for missed throws in loss to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Instead, Rodgers missed open receivers, took a sack at an inopportune time and rendered last week&#39;s season-saving upset of the Dallas Cowboys practically&nbsp;...</p></div>
            </div>
        </a><a href='https://www.packersnews.com/story/sports/nfl/packers/2022/11/18/packers-taking-inventory-of-how-they-reached-tough-spot-in-lost-season/69661349007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Packers taking inventory of how they reached &#39;really tough spot&#39; in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3boJ8k6eYv7zSPl2v5sGN3Vy9TCEbLtSkY7XIJrnQB0ZnXwJGYxGBVLdaNSlBpTYaVpqtrSG3" alt="Packers taking inventory of how they reached &#39;really tough spot&#39; in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For the 4-7 Green Bay Packers, a playoff berth would require a run of the table and a lot of help from other NFC teams.</p></div>
            </div>
        </a><a href='https://packerswire.usatoday.com/2022/11/18/despite-another-gut-punch-loss-aaron-rodgers-still-confident-packers-can-win-final-six-games/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Despite another gut-punch loss, Aaron Rodgers still confident ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS2ntVUPPIJBrSG0VMu-XHv8CN2DC65_60fl8-pgZD-u5IPkbhgZEvEyQ6uKvp9OBQwdKQbgvKf" alt="Despite another gut-punch loss, Aaron Rodgers still confident ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In what has become a typical performance from the Green Bay Packers during the 2022 season, another winnable game slipped away on Thursday thanks to a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.acmepackingcompany.com/2022/11/18/23466198/packers-news-cheese-curds-11-18-turn-out-the-lights-the-partys-over'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Packers News, 11/18: Turn out the lights, the party&#39;s over</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQFJuVwMe1mNgOo_QBcA8_nZchcbsKszZybWCCAoL0KC26HlDgZfmBIYEyE_Pz4h7UNUNBXizN" alt="Packers News, 11/18: Turn out the lights, the party&#39;s over" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No, the Green Bay Packers aren&#39;t officially, mathematically eliminated from the playoffs. But after dropping Thursday Night Football 27-17 to the Tennessee&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}