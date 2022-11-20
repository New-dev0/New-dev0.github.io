import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nancy Pelosi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nancy Pelosi"/>
        <meta name="description" content="Trending News about Nancy Pelosi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nancy Pelosi</h1>
            <Image width={800} height={500} src="" alt="Nancy Pelosi"/>
            <h3>Recent News</h3>
            <a href='https://www.kosu.org/politics/politics/2022-11-18/speaker-nancy-pelosi-announced-shell-end-her-run-as-the-top-house-democrat'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Speaker Nancy Pelosi announced she&#39;ll end her run as the top ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Speaker Nancy Pelosi announced she&#39;ll end her run as the top ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nancy Pelosi&#39;s decision marks the end of an era for Democrats, and triggers a search for a new generation of leadership for her caucus.</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/nancy-pelosi-steps-down-as-leader-of-us-democrats/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nancy Pelosi steps down as leader of US Democrats</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSyvxgo51m3_e8TkG03wzhSIAJsXFddS4eGkG6AQAX6r-VewWLQKcySEKa2OXiqAo2nqe1CDNCj" alt="Nancy Pelosi steps down as leader of US Democrats" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“I will not seek re-election to Democratic leadership in the next Congress. The hour has come for a new generation to lead the Democratic caucus,” she said.</p></div>
            </div>
        </a><a href='https://www.whitehouse.gov/briefing-room/statements-releases/2022/11/18/statement-by-vice-president-kamala-harris-on-speaker-nancy-pelosi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Statement by Vice President Kamala Harris on Speaker Nancy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Statement by Vice President Kamala Harris on Speaker Nancy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Speaker Nancy Pelosi has not only made history, she has shaped it. She has not only broken glass ceilings, she has shown the world – and young women in.</p></div>
            </div>
        </a><a href='https://www.arise.tv/nancy-pelosi-82-stands-down-as-leader-of-us-house-democrats-after-19-years/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nancy Pelosi, 82, Stands Down as Leader of US House Democrats ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnXoH6YGySKtZLCcHdxf3y0ztW0J3r8-0mJRNwmiRyZXseGtXOIXwMVhyU_z8af_g_gAN0a90f" alt="Nancy Pelosi, 82, Stands Down as Leader of US House Democrats ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Republican Kevin McCarthy has won the party&#39;s nomination to be speaker in the new Congress and is likely to succeed Mrs Pelosi as speaker. Speaker of the House&nbsp;...</p></div>
            </div>
        </a><a href='https://saharareporters.com/2022/11/17/us-speaker-nancy-pelosi-step-down-after-republicans-won-majority-house'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Speaker, Nancy Pelosi To Step Down After Republicans Won ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSbUmU7KNwYLOSKjwA70n9BO2g1sAgYUQVd5f1WGbi8AP5pTUkfDXKcBoNHD_gLi-8maGTUHJgG" alt="US Speaker, Nancy Pelosi To Step Down After Republicans Won ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In last week&#39;s midterm elections, Republicans narrowly won a majority in the House while Democrats kept control of the Senate. Nancy Pelosi, a Democrat and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.brookings.edu/blog/fixgov/2022/11/18/the-gop-should-see-nancy-pelosi-as-a-role-model-not-a-villain/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The GOP should see Nancy Pelosi as a role model, not a villain</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT4cM5vUlLppBWDqfoD7TIxqvc6taa178FSpKzL8MqTKLwxIByflhC4yFzAxYgy3I1JrngJPnJX" alt="The GOP should see Nancy Pelosi as a role model, not a villain" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As Nancy Pelosi winds down her nearly two-decade tenure as the leader of House Democrats, including four terms as Speaker of the House, it is important to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}