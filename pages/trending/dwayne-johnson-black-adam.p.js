import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dwayne Johnson Black Adam</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dwayne Johnson Black Adam"/>
        <meta name="description" content="Trending News about Dwayne Johnson Black Adam" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dwayne Johnson Black Adam</h1>
            <Image width={800} height={500} src="" alt="Dwayne Johnson Black Adam"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/entertainment/hollywood/black-adam-first-reviews-call-dwayne-johnson-film-visually-confounding-but-fun-101666167764645.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Adam first reviews call Dwayne Johnson film &#39;visually ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSEyfdqA_ptXBHv9-BNJsB4wIDXEgx1irlGtY0psA-Z7SrKRl87q_avl5ReG-oPQ-Vg1hE2RYcO" alt="Black Adam first reviews call Dwayne Johnson film &#39;visually ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The first reviews for Dwayne Johnson&#39;s Black Adam are mixed, praising the actors and action but criticising the depth of the story and the editing.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/entertainment/hollywood/dwayne-johnson-shares-black-adam-first-announcement-15-years-ago-8219268/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dwayne Johnson shares Black Adam&#39;s first announcement from 15 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVYT4-gw82oV0JFO86q6ha0qfnWuJK4bOLSaEdrjGt0zC2sNPnJJJHKsmKtYaKxmhCT23s5P54" alt="Dwayne Johnson shares Black Adam&#39;s first announcement from 15 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Rock shared the photo that was used 15 years ago to announce his association with the movie. He also mentioned how for years, studio executives kept&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theatlantic.com/culture/archive/2022/10/black-adam-movie-review-dwayne-johnson/671789/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Black Adam&#39; Is Dwayne Johnson at His Most Charmless</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT-TiK78ZxE-e0qNb4rR8wEvKo_bmDFimQ26u2_LT64NnsOKElQKTgXJ-l7r3lgPU-lK2n0kFT6" alt="&#39;Black Adam&#39; Is Dwayne Johnson at His Most Charmless" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dwyane Johnson delivers a charmless performance in his latest movie.</p></div>
            </div>
        </a><a href='https://telanganatoday.com/dwayne-johnsons-black-adam-opens-low-among-review-aggregators'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dwayne Johnson&#39;s &#39;Black Adam&#39; opens low among review aggregators</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQXM2VXDLftojwGsJfr9S_zCLPlWlFvnJuvC4xvpGM4ZWjhfN6A_QNXcQEmJjtw2o_BwkTmb7s5" alt="Dwayne Johnson&#39;s &#39;Black Adam&#39; opens low among review aggregators" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The hierarchy of power in the DC Universe may be about to change with &#39;Black Adam&#39;, but the Dwayne Johnson star vehicle is landing low on the hierarchy of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/entertainment/movies/2022/10/19/black-adam-dwayne-johnson-wwe-heel-dc-movie/10531948002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Fate does not make mistakes&#39;: Dwayne Johnson finally brings &#39;Black ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTZCpblX0iJB2a-KSH5sAvU7So9169mXpGyIfYzbEaZts68g8fkQq9OmTf0JIyp7QxBXUBSzWQk" alt="&#39;Fate does not make mistakes&#39;: Dwayne Johnson finally brings &#39;Black ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Channeling his old WWE bad guy for his newest role, Dwayne Johnson said no to every other DC comic-book character in order to play &#39;Black Adam.&#39;</p></div>
            </div>
        </a>
        </Template></>;
}