import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Iowa football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Iowa football"/>
        <meta name="description" content="Trending News about Iowa football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Iowa football</h1>
            <Image width={800} height={500} src="https://www.gannett-cdn.com/presto/2022/11/25/PIHC/70cb16fb-18b2-42d7-bc91-91fa4bd464fe-221121-Nebraska_Iowa_fb-023.JPG?auto=webp&crop=2911,1638,x0,y148&format=pjpg&width=1200" alt="Iowa football"/>
            <h3>Recent News</h3>
            <a href='https://www.hawkcentral.com/story/sports/college/iowa/football/2022/11/26/iowa-football-mailbag-big-picture-questions-loom-after-nebraska-loss/69667459007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iowa postgame mailbag: The regular season is over ... now what?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtKQQw3GupBEouBlIsl1uvPb2elETuzGVlJs74W3eo65CLkFdsqji_GX1XoADtcC93dStU8kvU" alt="Iowa postgame mailbag: The regular season is over ... now what?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The final Iowa football mailbag of the regular season is here. The Hawkeyes lost the finale and big questions loom as the off-season approaches.</p></div>
            </div>
        </a><a href='https://www.desmoinesregister.com/story/sports/college/iowa/football/2022/11/26/iowa-football-nebraska-score-hawkeyes-big-ten-west-standings/69667453007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iowa football&#39;s disappointing loss to Nebraska ends 2022 regular ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6ri1srFkJJ87jHT-f_5oIncZBytzloKSvrGQJB0518rwA7E0cRWmX5QeiDZg4rfOblMducNZL" alt="Iowa football&#39;s disappointing loss to Nebraska ends 2022 regular ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But Iowa&#39;s improbable run to the Big Ten championship game fell short on Friday as a lopsided first half prevented the Hawkeyes from ending the regular season&nbsp;...</p></div>
            </div>
        </a><a href='https://247sports.com/college/iowa/Article/Day-After-Thoughts-Offensive-ineptitude-catches-up-to-Iowa-Football-at-most-critical-time-198601409/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Day After Thoughts: Offensive ineptitude catches up to Iowa at most ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTsDc8f6EGPg20YL_iqUliSFhzw5KRwd_J5F0bIrhP93UDHVtuz3S_J4lDqMgV0GDTo3IlaksC3" alt="Day After Thoughts: Offensive ineptitude catches up to Iowa at most ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iowa football is a case-study. We will never see a team across college football win games in more ways than Iowa has the last two years. The ungodly amount of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.blackheartgoldpants.com/2022/11/26/23478681/iowa-hawkeye-football-nebraska-cornhuskers-recap-morning-after-ship-has-sailed-bhgp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Morning After: The &#39;Ship Has Sailed</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQacBXmw30lqsW2RRbtMrp34jH-ik5PueHAkFSHNBxLl_QBBRMBIbHQfk4dfe8SeJx2CIRi7-j4" alt="The Morning After: The &#39;Ship Has Sailed" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Filed under: Iowa Hawkeyes Football. The Morning After: The &#39;Ship Has Sailed. Iowa loses more than one trophy as the regular season comes to an ignominious&nbsp;...</p></div>
            </div>
        </a><a href='https://theathletic.com/3935432/2022/11/26/iowa-nebraska-football/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iowa football observations: A lost opportunity, what senior day meant ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTTkYRjuL1SxWNU0U8QSSRNqCSuCMBpJ4ZDkqj9mLoaPXqUXxyFkWWZW0dpjTSOPgVNlM_mD4cI" alt="Iowa football observations: A lost opportunity, what senior day meant ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Breaking down what went wrong for Iowa in its loss to Nebraska, which snapped the Hawkeyes&#39; four-game winning streak.</p></div>
            </div>
        </a><a href='https://hawkeyesports.com/news/2022/11/25/hawkeyes-fall-to-huskers-24-17/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hawkeyes Fall to Huskers, 24-17</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTUYz7a1D1RAFK7W9fSOYutK_58rKiPGRPKs4WEqS74GlpJxP_XgmeoYHB393JiHfLOCu7ExKxG" alt="Hawkeyes Fall to Huskers, 24-17" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IOWA CITY, Iowa – The University of Iowa football team was defeated by Nebraska, 24-17, on Friday night on Duke Slater Field at Kinnick Stadium.</p></div>
            </div>
        </a>
        </Template></>;
}