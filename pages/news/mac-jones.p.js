import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mac Jones</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mac Jones"/>
        <meta name="description" content="Trending News about Mac Jones" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mac Jones</h1>
            <Image width={800} height={500} src="https://www.al.com/resizer/-XsH8H0W94WHhEwWn6-D2j_ogeU=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/5I5LILZVKBB75G6JCHJKG6PVTI.jpg" alt="Mac Jones"/>
            <h3>Recent News</h3>
            <a href='https://www.al.com/sports/2022/11/mac-jones-posts-unique-game-in-patriots-victory.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mac Jones posts unique game in Patriots&#39; victory</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSV0J9daGyIg7-fYebYBO9zgspxdzCHifoLdKK1aG23HmdFmpXIvrCvdwHLzvcJGP5iAAyMZeac" alt="Mac Jones posts unique game in Patriots&#39; victory" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former Alabama quarterback had top-of-the-line stats in all but one area on Sunday.</p></div>
            </div>
        </a><a href='https://www.masslive.com/patriots/2022/11/patriots-believe-in-mac-jones-but-are-frustrated-by-offense-mark-daniels.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots believe in Mac Jones, but are frustrated by offense | Mark ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTxJNF6SqL4WwlkxfldCmcnriF3MsGhH7BcTM26_1EUgdir9Kptn4ypTxgB94SDTSgxGSQvMDe" alt="Patriots believe in Mac Jones, but are frustrated by offense | Mark ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Patriots offense struggled again on Sunday. Offensive players admitted to being frustrated after making common mistakes.</p></div>
            </div>
        </a><a href='https://nesn.com/2022/11/patriots-damien-harris-strongly-backs-mac-jones-criticism-of-qb/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Damien Harris Strongly Backs Mac Jones Amid Criticism Of Patriots ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTB7oJOC9Mc-mAOW6atS1iaib1CHQ3-zi-i6ncKaV28eUGNUIALRSLMQDUIMjpFC5TFpB2I1f43" alt="Damien Harris Strongly Backs Mac Jones Amid Criticism Of Patriots ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Damien Harris on Sunday night offered a full-throated endorsement of New England Patriots quarterback Mac Jones.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/patriots/news/new-england-patriots-mac-jones-jonnu-smith-jakobi-meyers-hunter-henry-rhamondre-stevenson-new-york-jets'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots Mac Jones vs. Jets: Better, But Room For Improvement</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT8NpWw6wvfEYt1-qKNUAK6xjZCPiplJbYbHWF1TEpUT_yWfkPxP-sj5IJfIP5DaJRaBG4zYvsJ" alt="Patriots Mac Jones vs. Jets: Better, But Room For Improvement" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jones completed 85 percent of his passes amidst blustery conditions in New England&#39;s Week 11 victory over the New York Jets at Gillette Stadium.</p></div>
            </div>
        </a><a href='https://www.bostonherald.com/2022/11/21/which-patriots-player-would-make-the-best-thanksgiving-dinner-mac-jones-provides-a-surprising-answer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Which Patriots player would make the best Thanksgiving dinner ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ-Lc27lwUPtTBObRAWWm1c5uS1uht_CQzAAFse-gqBO12f3hePPE73NEWGgZUxykq_Dk6gIV4U" alt="Which Patriots player would make the best Thanksgiving dinner ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FOXBORO – The Patriots will be spending Thanksgiving on the road working on the holiday. They have a primetime date with the Minnesota Vikings on tap.</p></div>
            </div>
        </a><a href='https://www.masslive.com/patriots/2022/11/mac-jones-picks-unexpected-patriots-teammate-as-best-thanksgiving-cook.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mac Jones picks unexpected Patriots teammate as best ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1iTwUbUiPTSWdZQOxwRuMOdyB6cfV_FDaH-Cl_8NK38GK72kTbIropLqWR1NqLGSyFvwzh5Al" alt="Mac Jones picks unexpected Patriots teammate as best ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FOXBOROUGH — Mac Jones will be spending his Thanksgiving with the Vikings this season. The Patriots have the primetime matchup on Thursday night,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bostonglobe.com/2022/11/21/sports/with-patriots-lost-offense-it-begs-question-is-mac-jones-answer-quarterback/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>With Patriots lost on offense, the question remains: Is Mac Jones the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR2e1PkKwnbtfBULKqX0WMGsN3BJoO3W7hwI2pCQrxqyD2zhSrMiYOZ_cRyUj2Ixf3b_xYMx5Sw" alt="With Patriots lost on offense, the question remains: Is Mac Jones the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Is there reason to believe Jones can do anything more than last season&#39;s first-round playoff flameout?</p></div>
            </div>
        </a><a href='https://www.berkshireeagle.com/patriots-still-looking-for-answers-on-offense-after-big-win/article_f522c4a0-69ed-11ed-998d-2342ee3e63cf.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots still looking for answers on offense after big win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXJjIOKIqPG9HgSWdcOsZRhNMzeSIBfH429HxaXXGb-GMszrejF0J1FpXTrdp7etbivHP6bbVz" alt="Patriots still looking for answers on offense after big win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New England Patriots cornerback Marcus Jones runs past New York Jets punter Braden Mann, left, on his punt return for a touchdown during the second half of an&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}