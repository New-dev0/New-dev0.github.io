import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cricket</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cricket"/>
        <meta name="description" content="Trending News about Cricket" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cricket</h1>
            <Image width={800} height={500} src="https://assets.telegraphindia.com/telegraph/2022/Nov/1669822786_lead-8.jpg" alt="Cricket"/>
            <h3>Recent News</h3>
            <a href='https://www.telegraphindia.com/my-kolkata/events/actors-musicians-and-rjs-battle-it-out-on-the-pitch-at-entertainers-cricket-league-organised-at-outram-club-kolkata-photogallery/cid/1901185'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Actors, musicians and RJs battle it out on the pitch at Entertainer&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTX54Dp2HEZBx0_Paf6Jbi41AYrlDzB4be9x1tpz5PC3-ayi_zOIjJBIGzyfl1pCXGhsHkbOHCv" alt="Actors, musicians and RJs battle it out on the pitch at Entertainer&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Outram Club was lit up on November 26 and 27 with floodlights, as over 50 entertainers came together to battle it out on the cricket pitch at Entertainer&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mensxp.com/sports/cricket/123427-cricket-legends-who-owe-their-success-to-ms-dhoni.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5 Great Indian Cricketers Who Would Have Been Nothing Without ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRnx3t_8J8lN3oAn4N42uu0_5V4bpeJQILieNCAAUyYN7Q0StnjsVNfaa5j3ajHuKptUoDTLrgs" alt="5 Great Indian Cricketers Who Would Have Been Nothing Without ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From Rohit Sharma to Virat Kohli, here are five current Indian cricketers who, without MS Dhoni, would not have secured a spot on the Indian National Team.</p></div>
            </div>
        </a><a href='https://www.ptinews.com/pti/narayan-seva-sansthan-hosts-the-third-national-wheelchair-cricket-championship-in-udaipur-rajasthan/58651.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Narayan Seva Sansthan hosts the third National Wheelchair Cricket ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnEkpvvCeHPHA28Ccg999U0I5ojVc30kDa9awYfiLCRqg6sddea1C1dvGBkR4km0jHUIukGHsW" alt="Narayan Seva Sansthan hosts the third National Wheelchair Cricket ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The program started with the message broadcast by Union Home Minister Amit Shah, Rajasthan Chief Minister Ashok Gehlot, and the virtual inauguration address of&nbsp;...</p></div>
            </div>
        </a><a href='https://thesportsrush.com/cricket-news-upcoming-india-cricket-matches-india-upcoming-cricket-match-schedule-2023-full-list/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Upcoming India cricket matches: India upcoming cricket match ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTjQFruRIVg7A6BCJwuriyGi5_p9IQ_CvbRd1S2EooqsyXlg_fPAhWBFvmTNPkFbdyg06xPMpB5" alt="Upcoming India cricket matches: India upcoming cricket match ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Upcoming India cricket matches: Team India will next play against Bangladesh in an ODI series followed by two Test matches.</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/uttar-pradesh/meerut/story-drona-cricket-academy-pitch-will-be-inaugurated-soon-7428322.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>जल्द होगा द्रोण क्रिकेट एकेडमी पिच का उद्घाटन</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="जल्द होगा द्रोण क्रिकेट एकेडमी पिच का उद्घाटन" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>मेरठ। द्रोण क्रिकेट एकेडमी सरधना में काली मिट्टी से अंतरराष्ट्रीय मानकों को पूरा&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/off-beat/playing-gully-cricket-with-little-boy-as-making-him-ball-funny-video-viral/1464928'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gully Cricket: जब गेंद बन गया छोटा लड़का! गली क्रिकेट का यह मजेदार ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSweXSnYloZ84kY9Hca__lOqIgd-cFEBCUD41GdTfpuo7zD0TkFHICQ5TiN9uJtRTAyvMnapztV" alt="Gully Cricket: जब गेंद बन गया छोटा लड़का! गली क्रिकेट का यह मजेदार ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Viral Video: यह मजेदार वीडियो सोशल मीडिया पर जमकर वायरल हो रहा है. वीडियो देखकर आपको अपने&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dnaindia.com/hindi/sports/video-cricket-vs-football-which-better-sport-4063316'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Video- Cricket vs Football: कौन पड़ेगा किस पर भारी ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSMjsoGOZro84k1OO887KQ8e58WOlgX4pXeb9KuBJbuSsUVyl4qsxJD1xYwhp_1B3Ze7Q6bniFG" alt="Video- Cricket vs Football: कौन पड़ेगा किस पर भारी ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cricket vs Football: दो ऐसे Sports जिनके दुनियाभर में हैं अनगिनत फैंस, क्रिकेट 2020 वर्ल्ड कप हाल ही&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}