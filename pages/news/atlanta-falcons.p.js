import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Atlanta Falcons</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Atlanta Falcons"/>
        <meta name="description" content="Trending News about Atlanta Falcons" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Atlanta Falcons</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/falcons/eoce3u1sdscvvbb6wauu" alt="Atlanta Falcons"/>
            <h3>Recent News</h3>
            <a href='https://www.atlantafalcons.com/news/inside-tori-s-notebook-a-deeper-dive-into-the-unsung-players-who-made-a-differen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inside Tori&#39;s Notebook: A deeper dive into the unsung players who ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTX-kHXww_YP0mvRlN0cnds4b0BETeR8_sKYBIqoJntfKdJj_vGzPNxgDJOuzlEcKmd8Y9icmBW" alt="Inside Tori&#39;s Notebook: A deeper dive into the unsung players who ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We all know what Cordarrelle Patterson did on Sunday, but what about players who you maybe didn&#39;t notice? What role did they play, and why was it important?</p></div>
            </div>
        </a><a href='https://www.espn.com/blog/atlanta-falcons/post/_/id/37365/the-long-hard-way-how-the-falcons-kept-a-lid-on-justin-fields'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Falcons find successful strategy to bottle up Justin Fields - Atlanta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR5FwCVIg-5gpFwZ7vcpRfTLc7OdOXZ777LixipkNCbWf0pIgwKPImPimmyWvWx5oGXLMSfAWek" alt="Falcons find successful strategy to bottle up Justin Fields - Atlanta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>They knew Fields wanted to run. Entering Sunday, no quarterback had more carries or more rushing yards. Fields plays in a run-first Chicago Bears offense -- one&nbsp;...</p></div>
            </div>
        </a><a href='https://www.azcentral.com/story/sports/nfl/2022/11/21/atlanta-falcons-washington-commanders-betting-odds-nfl-week-12-game/10720559002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atlanta Falcons vs. Washington Commanders odds: NFL Week 12 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFKucb-X_xXXOaczSGqqXdBZWOMv3FCOehRYGbgM0jBhGR9PPU6_MfV7gXsgwDyFX-yZ9m9PR-" alt="Atlanta Falcons vs. Washington Commanders odds: NFL Week 12 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Atlanta Falcons and Washington Commanders play on Sunday in a game on the NFL Week 12 schedule. What do the odds say about the game?</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/falcons/news/atlanta-falcons-chicago-bears-win-finish-culture-arthur-smith-marcus-mariota-tyler-allgeier-aj-terrell-mykal-walker'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fighting Falcons Finish with Flurry, Keep Season Alive vs. Bears</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRMNK1s8W7y0et2BDr-w2Cjn-p5JkSdy8_8mmr1Tb0F8bv-PDOck_K7OxerXEgsZ0NS0L_1AiZJ" alt="Fighting Falcons Finish with Flurry, Keep Season Alive vs. Bears" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Atlanta Falcons&#39; 27-24 victory over the Chicago Bears wasn&#39;t easy, but it was never going to be - and the fight and finish showed as they scratched&nbsp;...</p></div>
            </div>
        </a><a href='https://bearswire.usatoday.com/gallery/bears-photos-week-11-loss-vs-falcons/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best photos from the Bears&#39; Week 11 loss vs. Falcons</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-L_Ik1P5i6mkx-EHyzjwa2gH0ALgjmzFx34WSk_ciBNb0Ii035B6XkcL4WgfEYkhFB1nzWqSt" alt="Best photos from the Bears&#39; Week 11 loss vs. Falcons" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Chicago Bears suffered another close loss, a 27-24 defeat to the Atlanta Falcons, which dropped them to 3-8 on the season.</p></div>
            </div>
        </a><a href='https://www.atlantafalcons.com/news/instant-replay-what-stood-out-in-falcons-week-11-matchup-with-chicago-bears'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Instant Replay: What stood out in Falcons Week 11 matchup with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShQWsQfsXg4sPs9W-9xiIZ_olZyRkOZGTNrspBbE2m70zBWSiXvNFLkr5WGt_bf3jM13d3UfiV" alt="Instant Replay: What stood out in Falcons Week 11 matchup with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With 1:47 left in the game and all three timeouts, Chicago took over on their own 25 yard line. The Falcons defense needed a stand, and they got one as Jaylinn&nbsp;...</p></div>
            </div>
        </a><a href='https://bearswire.usatoday.com/lists/the-morning-after-the-bears-close-loss-vs-falcons-in-week-11/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Morning After...the Bears&#39; close loss vs. Falcons in Week 11</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRDKu8TuT2YcucIdK9leePwV5irmC36B9egdZG-HWW42XbVVTvrC088o_a7_5cI9SDpfzw0je7j" alt="The Morning After...the Bears&#39; close loss vs. Falcons in Week 11" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Chicago Bears (3-8) suffered a 27-24 loss to the Atlanta Falcons (5-6), where all three phases struggled in their fourth straight defeat.</p></div>
            </div>
        </a><a href='https://bloggingdirty.com/2022/11/21/atlanta-falcons-keep-season-hopes-alive-comeback-win/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atlanta Falcons keep season hopes alive with comeback win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTsRDsJK2y_H1YddNeQfuiKVyuLCW4pxTzikDVnDsO7nbzipu0Z6k0VofZ_JKGQtgG9flcX4wuo" alt="Atlanta Falcons keep season hopes alive with comeback win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Atlanta Falcons beat the Chicago Bears on Sunday 27-24 in a game that highlighted both what makes this team so fun and yet so frustrating.</p></div>
            </div>
        </a><a href='https://bloggingdirty.com/2022/11/21/former-atlanta-falcons-players-join-xfl/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former Atlanta Falcons players join new XFL team for inaugural ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQC-cUqKgA9_DnNzyemYKtRDAD8DcelCvSv15uSU7Tx26ZTmVWGTGK27XJ0DWJjD-OHNKaD7rVM" alt="Former Atlanta Falcons players join new XFL team for inaugural ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>OLB Vic Beasley – Vegas Vipers; DL Stansly Maponga – Orlando Guardians; RB Brian Hill – St. Louis Battlehawks; P Sterling Hofrichter – St. Louis Battlehaws. Vic&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atlantafalcons.com/news/how-an-ever-evolving-defensive-line-kept-justin-fields-contain-bears'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;We needed this one&#39;: How an ever-evolving defensive line kept ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJgaKcDBaNgToEfkzRzQkpbwi5y46QpLjrpxr1FaCffBYT7NuYenXTjbVVq4ktKHCCDbGyvmI8" alt="&#39;We needed this one&#39;: How an ever-evolving defensive line kept ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The defensive line in Atlanta took the loss to Carolina personally last week. Seeing obvious improvement against a mobile quarterback like Fields was a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}