import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TCU</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TCU"/>
        <meta name="description" content="Trending News about TCU" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TCU</h1>
            <Image width={800} height={500} src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1119%2Fr1093384_1296x729_16%2D9.jpg" alt="TCU"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/college-football/story/_/id/35060730/no-4-tcu-undefeated-game-ending-fg-baylor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No. 4 TCU still undefeated after game-ending FG at Baylor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ0o84rII-PC_axvFhcSgvqQ42aIixafo-gFhUYkaZze7SAFqoJ7W49NNvBJiH-nfSUGWhEQzje" alt="No. 4 TCU still undefeated after game-ending FG at Baylor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fourth-ranked TCU survived an upset bid from by Baylor thanks to a 40-yard field goal on the final play of the game that gave the Horned Frogs a 29-28&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sbnation.com/2022/11/19/23468159/tcu-baylor-college-football-max-duggan'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TCU&#39;s field goal team sprinted onto the field for a last second kick ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbuit6hgSpgUiZVBlgkzsIa_SHBKFJ-kGlPj2dm-WbOoiHQzptbUVpMXu-SE72vuYzNwVg110a" alt="TCU&#39;s field goal team sprinted onto the field for a last second kick ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>That&#39;s when TCU quarterback Max Duggan responded, as he led the Horned Frogs on an 11-play, 90-yard drive to put TCU in position to tie the game. Duggan hit on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/college/cfb-hq/ncaa-football/tcu-undefeated-baylor-game-college-football-playoff'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TCU stays in College Football Playoff hunt with last-second 1-point ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWKZnbM9AF0KKNGNsFR_4e6cCMcTlKdo0NvY-aev2JYgvGavZeWUeXi_iGSdE1-peXmoYet3gJ" alt="TCU stays in College Football Playoff hunt with last-second 1-point ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TCU should hold onto the No. 4 ranking this week after beating Baylor on the road with a last-second field goal to stay undefeated and in the College&nbsp;...</p></div>
            </div>
        </a><a href='https://247sports.com/LongFormArticle/TCU-pulls-off-wild-comeback-at-Baylor-stays-in-College-Football-Playoff-picture-197982454/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TCU pulls off wild comeback at Baylor, stays in College Football ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSDm_qOnoYqsGnaIsvdPYBIGXBOj6kPiNZv6rnQKoFPiDXrC0TfGte0NSvJmzHoby-h9T1h5kaT" alt="TCU pulls off wild comeback at Baylor, stays in College Football ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TCU&#39;s magical season nearly came to crashing halt Saturday, but the Horned Frogs scored nine points in the final two minutes at Baylor to stay unbeaten,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ncaa.com/news/football/article/2022-11-19/no-3-michigan-no-4-tcu-remain-perfect-late-fgs-and-more-week-12-college-football'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No. 3 Michigan, No. 4 TCU remain perfect with late FGs and more ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5YgyMqOOXqIM2gke0vaqv4Efp7wRUIRwyuLvN0NzjFMOjQmzSRRafybNU1XKOE2oxB5VcjhPm" alt="No. 3 Michigan, No. 4 TCU remain perfect with late FGs and more ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two of the undefeated top 4 teams in FBS remained on track for College Football Playoff berths with dramatic finishes on Saturday.</p></div>
            </div>
        </a><a href='https://www.si.com/extra-mustard/2022/11/20/watch-tcu-burns-baylor-epic-troll-following-win'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: TCU Burns Baylor With Epic Troll Following Win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTCs26EAbACMaVEGRlEQNEx64mruh9wP-Luyqum6Ej4lJF--_FDPmocx1JdhQp3URcxJQFW-hv8" alt="Watch: TCU Burns Baylor With Epic Troll Following Win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Horned Frogs social media team continued their stretch of outlandish celebration videos following Saturday&#39;s victory.</p></div>
            </div>
        </a>
        </Template></>;
}