import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Josh Rock</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Josh Rock"/>
        <meta name="description" content="Trending News about Josh Rock" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Josh Rock</h1>
            <Image width={800} height={500} src="https://www.sportinglife.com/images/news/original/Screenshot+2022-11-17+at+21.25.19-b82212c9-98e6-4bf7-9d78-39a581b81617.png" alt="Josh Rock"/>
            <h3>Recent News</h3>
            <a href='https://www.sportinglife.com/darts/news/darts-results-josh-rock-hit-a-stunning-nine-darter-against-michael-van-gerwen-at-the-grand-slam-of-darts/205302'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Darts results: Josh Rock hit a stunning nine-darter against Michael ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRgf8dLeeRcjv4sReky93XLQuqQ5iEEraYNxPblBpm_T4Yvuxs19SuiYyI90QsqMXhgQunHhl6I" alt="Darts results: Josh Rock hit a stunning nine-darter against Michael ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Josh Rock hit a sensational nine-darter against Michael van Gerwen at the Grand Slam of Darts to underline his status as the brightest new star of the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/sport/other-sport/josh-rock-goes-toe-toe-28521678'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Josh Rock goes toe-to-toe with Michael van Gerwen with stunning ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQoK8rYZLplAQGKEwu8lcfH1iT5nxAWoACCFKwqW3xY0Z0-vUvUBNBaGKEJcg2Gh_3xsKEu_xNN" alt="Josh Rock goes toe-to-toe with Michael van Gerwen with stunning ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Josh Rock, 21, was beaten 10-8 by three-time world champion Michael van Gerwen at the Grand Slam of Darts but showed exactly why he is tipped for the top.</p></div>
            </div>
        </a><a href='https://www.limerickleader.ie/news/sport/967563/josh-rock-hits-nine-darter-in-grand-slam-defeat-to-michael-van-gerwen.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Josh Rock hits nine-darter in Grand Slam defeat to Michael van ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4VYueZZcwO4osxsL5Zb6VDAXBRJl69_NzM9Lraq4XOQyfD2cPeFuVRtCVHvH4lifqe3j5Htid" alt="Josh Rock hits nine-darter in Grand Slam defeat to Michael van ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rising star Josh Rock landed a stunning nine-darter in his last-16 defeat to Michael van Gerwen in the Cazoo Grand Slam of Darts in Wolverhampton.</p></div>
            </div>
        </a><a href='https://www.pdc.tv/news/2022/11/17/fearless-rock-relishing-van-gerwen-showdown-cazoo-grand-slam'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fearless Rock relishing Van Gerwen showdown at Cazoo Grand Slam</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSbNqFrs44zBNBfG-ySdTesO_6VifPi2NlEh9L7O-EnIkUbGsLglizezdfsVpyDE0FNhmmil6lv" alt="Fearless Rock relishing Van Gerwen showdown at Cazoo Grand Slam" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Three-time Grand Slam champion Michael van Gerwen will take on Northern Irish sensation Josh Rock in a show-stopping clash at the Cazoo Grand Slam of Darts&nbsp;...</p></div>
            </div>
        </a><a href='https://www.belfastlive.co.uk/sport/other-sport/josh-rock-hits-nine-dart-25545541'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Josh Rock hits nine-dart leg in Grand Slam of Darts thriller</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSv6yxhqQoSCHx_y73VH7MxkTxowlWbBYOe2JCJneB7aFL1ncrb5p5cocmkTIQyVovu-aCe9doX" alt="Josh Rock hits nine-dart leg in Grand Slam of Darts thriller" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Last-16 opponent Michael van Gerwen hailed the Northern Ireland darts star as a &quot;phenomenal player&quot;</p></div>
            </div>
        </a><a href='https://www.skysports.com/darts/news/12288/12749254/grand-slam-of-darts-michael-van-gerwen-wins-epic-battle-vs-nine-dart-josh-rock-as-jonny-clayton-is-shocked-by-alan-soutar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grand Slam of Darts: Michael van Gerwen wins epic battle vs nine ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSBOYmeEfh1Pm_PjKhuaDXaY0vP3BnFGTbQcLYbYY5WITynSkDuOAWKPM2-Q1poOhoNQkUN8MUM" alt="Grand Slam of Darts: Michael van Gerwen wins epic battle vs nine ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michael van Gerwen showed his class in one of the greatest Grand Slam of Darts matches ever played to beat Josh Rock and secure his place in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.live-darts.com/pdc-darts-news/grand-slam-of-darts/van-gerwen-denies-nine-dart-rock-in-grand-slam-classic/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michael van Gerwen denies nine-dart Josh Rock in Grand Slam of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpHgSO1XCkMoJzu1Bo23HQGxzXPRqHQzOM8ykmnn8Hrk6COwjCBA3vBRzKud8dQrG5fPvzC8mx" alt="Michael van Gerwen denies nine-dart Josh Rock in Grand Slam of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michael van Gerwen defied a nine-darter from Josh Rock to prevail in a pulsating Last 16 clash at the Grand Slam of Darts in Wolverhampton.</p></div>
            </div>
        </a>
        </Template></>;
}