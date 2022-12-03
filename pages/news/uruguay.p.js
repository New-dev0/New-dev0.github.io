import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Uruguay</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Uruguay"/>
        <meta name="description" content="Trending News about Uruguay" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Uruguay</h1>
            <Image width={800} height={500} src="https://www.aljazeera.com/wp-content/uploads/2022/12/2022-12-02T171000Z_562669363_UP1EIC21BOM5P_RTRMADP_3_SOCCER-WORLDCUP-GHA-URY-REPORT.jpg?resize=1920%2C1440" alt="Uruguay"/>
            <h3>Recent News</h3>
            <a href='https://www.aljazeera.com/gallery/2022/12/2/heartbreak-for-uruguay-after-world-cup-elimination'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Photos: Heartbreak for Uruguay after World Cup elimination</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWjSVsNT4dIqYBtTqXHIdIXrU3hmUBHd_7uVOiUu5XsCiWiXQyzskeb6386Sy9JJ_TLluPKW8Z" alt="Photos: Heartbreak for Uruguay after World Cup elimination" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Despite a commanding 2-0 victory over Ghana, the World Cup journey for Uruguay and Luis Suarez has ended.</p></div>
            </div>
        </a><a href='https://www.iol.co.za/sport/world-cup/five-talking-points-from-ghana-2-0-loss-to-uruguay-c6ec6f63-31c6-4bf3-9258-288e1b3a1f30'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Five talking points from Ghana 2-0 loss to Uruguay</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZbhz1fWfPO4tPAKEJ6oexm1kAoUojMIWA2NlU_E5WC1TYuGcVDy8XT5gWNoCnz8I8g8G1pcLs" alt="Five talking points from Ghana 2-0 loss to Uruguay" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IOL Sport&#39;s Mihlali Baleka looks at five points from the clash between Ghana and Uruguay after the two sides failed to reach the last 16.</p></div>
            </div>
        </a><a href='https://www.news24.com/sport/soccer/worldcup/uruguay-beat-ghana-in-world-cup-but-both-go-out-as-korea-advance-after-stunning-portugal-win-20221202'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguay beat Ghana but both go out of World Cup as Korea ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvpjfm7YM3maxFIVzTacpsrxNzSVa93knwAqCCW8QmfN2L5RONzZFa7tInB7rHFC7WM0c4aBzt" alt="Uruguay beat Ghana but both go out of World Cup as Korea ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Luis Suarez inspired Uruguay to a victory against Ghana but both nations exited the FIFA World Cup as South Korea snatched a dramatic win over&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-za/news/tears-suarez-uruguay-fall-group-stages-portugal-fail-world-cup-favour/blta4b60dad935d1c7c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tears for Suarez! Uruguay fall at group stages after Portugal fail to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRo9mOVDa_H1C3Lc9OUhiO7bC6J5pysXyy916yT7TbmFfTqmu7JaTUZFb3G7ss4DIseXb9EUHz1" alt="Tears for Suarez! Uruguay fall at group stages after Portugal fail to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Luis Suarez was left crying on the Uruguay bench as his side exited the World Cup despite beating Ghana 2-0 in their final group stage match.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/02/football/uruguay-ghana-luis-suarez-qatar-world-cup-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguay beats Ghana in grudge rematch but is eliminated from ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRg0k4EGn5l2GaxFra3Q7vUyxu_G6bWV4kc26jKG3pCLygQOl7P_gneRImVUseD-ADB_L8ohq8z" alt="Uruguay beats Ghana in grudge rematch but is eliminated from ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uruguay handed Ghana an unwanted dose of déjà vu on Friday, winning 2-0 and knocking the Black Stars out of the World Cup more than 12 years after their&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-za/news/uruguay-exit-world-cup-bad-taste-win-ghana-coach-alonso/blt2534379bb9a2140c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguay exit World Cup with &#39;bad taste in our mouths&#39; after win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQues--8UHL4W_U-pqhIknsUFrEgyq6lhnYnGEsJ7mcd19N7H43nRfOKYWRdz-V6z4qM5_Egsga" alt="Uruguay exit World Cup with &#39;bad taste in our mouths&#39; after win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uruguay coach Diego Alonso says his team leave the World Cup with a &quot;bad taste&quot; in their mouths after they were knocked out despite beating Ghana 2-0.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/2022/dec/02/uruguay-leave-the-world-cup-the-same-way-they-played-in-it-gracelessly'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguay leave the World Cup the same way they played in it ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQDwv1RZJSwXJZjeobgOxJ1NIlig03bIv1QYvZ79Ilj_25EvmxpyOT4TFd5ofZCldDb1_7QvMaN" alt="Uruguay leave the World Cup the same way they played in it ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As the referee, Daniel Siebert, and his team strode from the pitch, furious Uruguay players stood in their way, shoved and jostled, demanded answers that would&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/soccer/2022/12/02/ghana-uruguay-portugal-south-korea-world-cup-video-highlights-recap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea&#39;s Late Winner vs. Portugal Dumps Uruguay Out of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSljhhsfaEGDZQytxnP34cL9LWJv9Tdne0DYU5rtCSrUO9n4vlyM18UOYmmLC94X2UFXY_iYFce" alt="South Korea&#39;s Late Winner vs. Portugal Dumps Uruguay Out of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For a fourth straight day at the 2022 World Cup, group finales have created immense drama in Qatar. Uruguay, playing Ghana 12 years after a famous matchup&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/02/sports/soccer/ghana-uruguay-world-cup.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How South Korea Knocked Uruguay Out of the World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcThMkR3LHMgfQNeOLG35wTNwGESkAmZ4FvMyw7A_USleqQxs0x9MIjj4hZLl0j8P8y6Fxc_4thS" alt="How South Korea Knocked Uruguay Out of the World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AL WAKRAH, Qatar — With each stuttering step, the goal staring back at Andre Ayew seemed to get a little smaller. Ayew, Ghana&#39;s most experienced player,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/2022/12/02/south-korea-uruguay-group-h-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>On the closing night of World Cup Group H, there came a theme ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzq8UaLMzgbN7Z8zHBrDqWaqYSR5b-23NGPi5STjeUCQoUkEY04VKmeJqKfa18R4hf7_v9-UaM" alt="On the closing night of World Cup Group H, there came a theme ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Group H shook out this way: Portugal on six points, South Korea on four, Uruguay on four and Ghana on three.</p></div>
            </div>
        </a>
        </Template></>;
}