import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Colorado Springs shooting</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Colorado Springs shooting"/>
        <meta name="description" content="Trending News about Colorado Springs shooting" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Colorado Springs shooting</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221120133949-04-colorado-springs-shooting-1120.jpg?c=16x9&q=w_800,c_fill" alt="Colorado Springs shooting"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/20/us/colorado-springs-shooting-gay-nightclub/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gunman kills 5 at LGBTQ nightclub in Colorado Springs before ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8oDF50OhQn7LU_bzbCYgEmAsQbxE2OOG-ebGAZYetXKFaPNCd6x8q7iGtcgBV7eWdQkUVZ446" alt="Gunman kills 5 at LGBTQ nightclub in Colorado Springs before ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A 22-year-old gunman entered an LGBTQ nightclub in Colorado Springs, Colorado, just before midnight Saturday and immediately opened fire, killing at least&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/20/1138045219/colorado-springs-shooting-lgbtq-club-q-5-dead'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Two patrons confronted the man who opened fire at an LGBTQ club ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRG4eKn8iuMnUpwv82I9xwWPbUiZOmKgTEr6NT6aT6vHNzFrOQWLWZm7cpB237woMxGPiPKEYcZ" alt="Two patrons confronted the man who opened fire at an LGBTQ club ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mayor John Suthers tells NPR one of the two patrons who fought the suspect grabbed a gun from the shooter and hit him with it. The motive behind the attack,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.whitehouse.gov/briefing-room/statements-releases/2022/11/20/statement-by-president-biden-on-the-deadly-shooting-in-colorado-springs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Statement by President Biden on the Deadly Shooting in Colorado ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Statement by President Biden on the Deadly Shooting in Colorado ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While no motive in this attack is yet clear, we know that the LGBTQI+ community has been subjected to horrific hate violence in recent years.</p></div>
            </div>
        </a><a href='https://www.cpr.org/2022/11/20/colorado-springs-shooting-q-club-lgbtq/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live Blog: shooting at Club Q in Colorado Springs leaves 5 dead ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQnZlZ2GHhyPz6W3PRXz8wQ5gNRSbmY6PQlbPeoZ9psxTjfWNrIvtu6oE-PLYgiOqOOHlJ53xmA" alt="Live Blog: shooting at Club Q in Colorado Springs leaves 5 dead ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cardboard sign with the words &amp;quot;Love over hate&amp;quot; sits next to flowers Dan Boyce/CPR News A makeshift memorial near Club Q, an LGBTQ club in Colorado&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/us-news/2022/nov/20/people-killed-shooting-at-colorado-springs-nightclub'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>At least five people killed in shooting at gay nightclub in Colorado ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS8mlVyHu3WscYfeBDhhESSZoNJGm-x5pMsUrMhnOvrNba0iX5G5pz6Ub2icIM83IJJY4e_M-lJ" alt="At least five people killed in shooting at gay nightclub in Colorado ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At least 25 people were also injured in attack at Club Q, and suspect in custody after patrons confronted and subdued him, police say.</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/news/nation/2022/11/20/colorado-springs-nightclub-shooting/10744036002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patron hit attacker with his own gun in deadly Colorado Springs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTzioPumEB33YztRzIX60utCPtSS3FbDFHx80BeWPeqnWVhy9Toz_G1CpOmVZH2fGhpu-tiOKoe" alt="Patron hit attacker with his own gun in deadly Colorado Springs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At least five people were killed and more than a dozen injured in a shooting at Club Q in Colorado Springs, Colorado. police said. Live updates.</p></div>
            </div>
        </a>
        </Template></>;
}