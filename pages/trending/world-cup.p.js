import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup"/>
        <meta name="description" content="Trending News about World Cup" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup</h1>
            <Image width={800} height={500} src="https://resources.pulse.icc-cricket.com/ICC/photo/2022/10/04/a2cd648c-a57d-4fd0-87f7-7d02b3b65e07/16.9.jpg" alt="World Cup"/>
            <h3>Recent News</h3>
            <a href='https://www.icc-cricket.com/news/2837595'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Upstox Greatest XI – Choose your dream T20 World Cup team</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS6RHrcSogaPfkzmcnPU7PaLl9sO2uyDgBVcttBQ_lTZMuotL5556doj-vgv_Rt15lvTWWU9hTl" alt="Upstox Greatest XI – Choose your dream T20 World Cup team" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Be it the dream opening combination of Rohit Sharma and David Warner or the pace battery of Lasith Malinga, Umar Gul and Dale Steyn or the middle-order of Kevin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/sports/football/ukraine-joins-spain-portugal-in-bid-to-host-2030-fifa-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup: स्पेन, पुर्तगाल के साथ 2030 फीफा विश्व कप की मेजबानी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="FIFA World Cup: स्पेन, पुर्तगाल के साथ 2030 फीफा विश्व कप की मेजबानी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>फीफा के इस संस्करण पर निर्णय 2024 फीफा कांग्रेस में लिया जाएगा, इसके लिए मतदान में लगभग&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailythanthi.com/Sports/Football/junior-womens-world-cup-football-india-team-announcement-808209'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ஜூனியர் பெண்கள் உலக கோப்பை கால்பந்து - இந்திய ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQmlVN6kYhyabNIcDJeIdkbkNJ35oAiDG3pTwu2Fn9dE03arY75GoNYFVQaMaV_-OlsBBTbuVlJ" alt="ஜூனியர் பெண்கள் உலக கோப்பை கால்பந்து - இந்திய ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ஜூனியர் பெண்கள் உலக கோப்பை கால்பந்து போட்டிக்கான இந்திய அணி அறிவிக்கப்பட்டுள்ளது.</p></div>
            </div>
        </a>
        </Template></>;
}