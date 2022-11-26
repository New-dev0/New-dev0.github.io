import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Oculus Quest 2</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Oculus Quest 2"/>
        <meta name="description" content="Trending News about Oculus Quest 2" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Oculus Quest 2</h1>
            <Image width={800} height={500} src="https://www.gannett-cdn.com/presto/2022/11/25/USAT/eb1d04d1-9155-4292-9c0c-a330754942a9-MetaQuest-Inline_1.png?auto=webp&crop=2987,1680,x0,y0&format=pjpg&width=1200" alt="Oculus Quest 2"/>
            <h3>Recent News</h3>
            <a href='https://www.usatoday.com/story/money/reviewed/2022/11/25/black-friday-2022-meta-quest-2-bundle-deal/10772339002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Give the gift of virtual reality with $120 off the Meta Quest 2 bundle ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWV7KzhLKxMjdccnSItzU8mlI8t5FkA4yGSss-pzJ6wn7rrInp8wVk8t-8TST6yofHmRegW7JV" alt="Give the gift of virtual reality with $120 off the Meta Quest 2 bundle ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Snag the Meta Quest 2 Resident Evil 4 bundle with Beat Saber for less on Amazon this Black Friday.</p></div>
            </div>
        </a><a href='https://www.laptopmag.com/news/meta-quest-2-black-friday-deals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Meta Quest 2 Black Friday deals 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQN2oYFpmoi85edeP27HsN-Ko_JaUlY_yTNilr3kliodmZ3VtydDTn72Shh6nlrS68hHMWspt_c" alt="Best Meta Quest 2 Black Friday deals 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The best Meta Quest 2 (or Oculus Quest 2) deals right now. Plus, Oculus VR alternatives like HTC Vive.</p></div>
            </div>
        </a><a href='https://www.ign.com/articles/meta-quest-2-black-friday-2022-vr-deal-still-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Best VR Deal of Black Friday Is Still Live: Meta Quest 2 With 2 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSl45BsDS42ZAZn2q9wEL_0Xl8PeXQ0PE7hd889gxU3Ah3b-zwy_BQ6UeWPgzU-oj-7N-_v3E0i" alt="The Best VR Deal of Black Friday Is Still Live: Meta Quest 2 With 2 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A suitable enticement to buy one of the best low-cost headsets around. &middot; Meta Quest 2 Black Friday Deals &middot; The Best Black Friday Sales and Deals.</p></div>
            </div>
        </a><a href='https://www.digitaltrends.com/dtdeals/meta-quest-2-bundle-deal-walmart-november-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Don&#39;t miss this (Oculus) Meta Quest 2 Black Friday deal | Digital ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSeb5VuNi_PUPAt3IJ55Mynd6KRCYc68mlO09dUEJGJMnR4pzmuVXe1Uept9t3Vgzeo3G7ecmux" alt="Don&#39;t miss this (Oculus) Meta Quest 2 Black Friday deal | Digital ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Walmart is offering gamers a cheaper way to jump into virtual reality with a bundle that includes the Meta Quest 2, Beat Saber, and Resident Evil 4 for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.androidcentral.com/gaming/virtual-reality/over-80-oculus-quest-2-games-are-up-to-50-right-now-for-black-friday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Our favorite Oculus Quest 2 games are up to 50% off right now</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4wV_fCKoJm2B3CtwOwXBvsG-9QTyz8W3ErdB7CwdWKxk6rnsZywgmtef_mRePXVxwe6-POeoo" alt="Our favorite Oculus Quest 2 games are up to 50% off right now" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday and Cyber Monday are upon us, and that means huge savings on over 80 apps and games for the Meta Quest 2.</p></div>
            </div>
        </a><a href='https://deals.usnews.com/black-friday/best-oculus-quest-deals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday Oculus Quest 2 (Meta Quest 2) Deals 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1oGAxLrYsTkuvBotfj_oMYIwuFFMzd2vw9brcYoGNd-tAQTcFEJPc0938ZGc6Xgba7ey3kIT3" alt="Best Black Friday Oculus Quest 2 (Meta Quest 2) Deals 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Oculus Quest 2 is at the top of many wish lists this year. Check out these big discounts on the popular VR set at retailers across the board.</p></div>
            </div>
        </a>
        </Template></>;
}