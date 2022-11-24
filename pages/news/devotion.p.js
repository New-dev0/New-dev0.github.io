import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Devotion</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Devotion"/>
        <meta name="description" content="Trending News about Devotion" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Devotion</h1>
            <Image width={800} height={500} src="https://ca-times.brightspotcdn.com/dims4/default/313ee8e/2147483647/strip/true/crop/1600x840+0+114/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F98%2F0a%2F24071ba14b9b8a164aafe7e0ef55%2Fd-17776-rv2.jpg" alt="Devotion"/>
            <h3>Recent News</h3>
            <a href='https://www.latimes.com/entertainment-arts/movies/story/2022-11-22/review-devotion-first-black-aviator-jonathan-majors-glen-powell'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Devotion&#39; review: Jonathan Majors stands out in military drama</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRP76RihmmGlXiOe1doyoW3vTCccO1tlGguXNKMCPHNYTu8KJPDdmMczB-tqFINsYmlnXtJ_xC" alt="&#39;Devotion&#39; review: Jonathan Majors stands out in military drama" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jonathan Majors and Glen Powell forge a strong friendship in &#39;Devotion,&#39; a spirited war story about the Navy&#39;s first Black pilot.</p></div>
            </div>
        </a><a href='https://collider.com/how-to-watch-devotion/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to Watch &#39;Devotion&#39;: Showtimes and Streaming Details</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcScgdT5cugmN-emqxhh365wLX1OTSxfnFQYxRMmWZ9mVWEiyUT_sEfF93BFzBEjD2UFNI5zuI4x5A" alt="How to Watch &#39;Devotion&#39;: Showtimes and Streaming Details" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A tale of courage and comradeship, Devotion is an upcoming wartime movie that&#39;s based on the true story of naval officers Jesse Brown and Tom Hudner.</p></div>
            </div>
        </a><a href='https://www.bostonglobe.com/2022/11/22/arts/devotion-is-an-interracial-friendship-story-that-flies/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Devotion&#39; is an interracial friendship story that flies</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSRZQ3XPX3siScqBrjbvPi5gspahx37H-TAb2r449U-kQND5uKxAnwZCiFwgv2UXbgq6yTGWoJJ" alt="&#39;Devotion&#39; is an interracial friendship story that flies" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Based on the best-selling book of the same name, the drama stars Jonathan Majors and Glen Powell as Korean War comrades.</p></div>
            </div>
        </a><a href='https://www.ign.com/articles/devotion-2022-review'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Devotion Review - IGN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTwkbaOyY3cCTc2W4_FNO8CpYWY8d2OIhwmgxkwF13XHPT4nRZ2RgEXsjsbNXV0v1gRGMnqfEwq" alt="Devotion Review - IGN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Devotion&#39;s Jonathan Majors and Glen Powell are a dynamic duo as U.S. Navy fighter pilots in J.D Dillard&#39;s compelling wartime drama.</p></div>
            </div>
        </a><a href='https://www.statesboroherald.com/local/devotion-now-playing-at-statesboro-theater/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Devotion&#39; now playing at Statesboro theater</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT98_wUQp_3wG0DsURXInSQucZFwb4T4Uo9T88mkhPk73OOLfdGc1oKRpBg7yT7iH2fRTRTDSP5" alt="&#39;Devotion&#39; now playing at Statesboro theater" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For about four months in the spring of 2021, the back runway of the Statesboro-Bulloch County Airport was transformed into the set of a major motion picture&nbsp;...</p></div>
            </div>
        </a><a href='https://decider.com/2022/11/22/is-devotion-streaming-on-hbo-max-or-netflix/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is &#39;Devotion&#39; Streaming on HBO Max or Netflix?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnd6uwECbZMqXlK8lpjZkyrsX80b0KtUuMum6tGRTaTv1ARNW9PwwcKrbtEBKNvdGR78GrASrh" alt="Is &#39;Devotion&#39; Streaming on HBO Max or Netflix?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Devotion is a biographical drama that tells the true story of elite fighter pilots Jesse Brown (Jonathan Majors) and Tom Hudner (Powell) as they become the “&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}