import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Willow</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Willow"/>
        <meta name="description" content="Trending News about Willow" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Willow</h1>
            <Image width={800} height={500} src="https://s3.amazonaws.com/static.rogerebert.com/uploads/blog_post/primary_image/streaming/willow-tv-review-2022/homepage_TKF-FF-000395.jpg" alt="Willow"/>
            <h3>Recent News</h3>
            <a href='https://www.rogerebert.com/streaming/willow-tv-review-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Willow Reboot on Disney Plus Makes for a Surprisingly Fun Ride ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTVl3-C8vpwXgCoCGbrnMelXDGHrlMEpF7N5P-iDJ2l9FJJqJDZMTGhd9BLGZiBm5CajF1WDW_k" alt="Willow Reboot on Disney Plus Makes for a Surprisingly Fun Ride ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A review of the newest Disney+ reboot series, based on Ron Howard&#39;s Willow.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/simonthompson/2022/11/30/heres-what-you-should-know-about-willow-on-disney-plus/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Here&#39;s What You Should Know About &#39;Willow&#39; On Disney Plus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGTmiWSGukYJwR1uL2wugfz97iF4mprcZY_h-idGn-v19-0TTf0MILWSfeLp59Y3v5WzdKa9U5" alt="Here&#39;s What You Should Know About &#39;Willow&#39; On Disney Plus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The series, inspired by the 1988 movie of the same name, has debuted on Disney+.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/30/entertainment/willow-review/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Willow&#39; revives the Lucasfilm fantasy with a more contemporary ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRzmfLdtcvhjf0sbMVI-l3TyKlIbuMEAoT-8JoDelG4hY7yD41H7syXshDZFTwzlw3gtGZDKjnC" alt="&#39;Willow&#39; revives the Lucasfilm fantasy with a more contemporary ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disney&#39;s press materials refer to the original 1988 movie &quot;Willow&quot; as &quot;beloved,&quot; which despite its admirers feels like nostalgic inflation of a pretty&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/tv-and-radio/2022/nov/30/willow-review-warwick-davies-fantasy-reboot-is-lots-of-fun-until-he-appears'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Willow review – Warwick Davis&#39;s fantasy reboot is lots of fun … until ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQt5V566w-_7_MwlkaaHz2Wa2pBLAa2f6baUZsj5vAxGi2QngAl7KGH0Et0zBgJzoH0QsHpCzxb" alt="Willow review – Warwick Davis&#39;s fantasy reboot is lots of fun … until ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Disney+ revamp of the 80s movie is a sassy, brisk coming-of-age caper. Then the lead actor appears, fantasy gubbins bogs the action down – and the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.avclub.com/willow-review-season-1-episodes-1-and-2-1849832873'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Willow&#39;s two-episode premiere takes a while to find its magic</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFgpXOqtQeojab-v1J-N2B29HnIEgrlIUFzWVS4GrHDY06TDSpBITGJNnxePxlXXg7vqHaxAwN" alt="Willow&#39;s two-episode premiere takes a while to find its magic" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Can our heroes defeat “the withered crone who dwells in the immemorial city beyond the Shattered Sea”?</p></div>
            </div>
        </a><a href='https://www.radiotimes.com/tv/fantasy/willow-disney-plus-release-schedule/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Willow release schedule: When is episode 3 streaming on Disney ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRpfkAda-TU2Lz58nOGzW9NwOBrMrgcPKI0VjQ1OI5wv68n945SssazCB63jJRSEFQVrXFo00UC" alt="Willow release schedule: When is episode 3 streaming on Disney ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1988 fantasy film Willow has finally been given a sequel, a Disney Plus series of the same name. But when will each new episode debut on the platform?</p></div>
            </div>
        </a>
        </Template></>;
}