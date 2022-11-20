import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rassie Erasmus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rassie Erasmus"/>
        <meta name="description" content="Trending News about Rassie Erasmus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rassie Erasmus</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7712/0a8f97ddb2f84547babf1a922670043a.jpg" alt="Rassie Erasmus"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/sport/rugby/springboks/explainer-what-does-rassie-erasmuss-ban-entail-20221118'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EXPLAINER | What we know about Rassie Erasmus&#39; latest ban ... for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRsOzWhCMrBA5Fs-dgCfXVyONkyZMost8NFikWPNUvozipEC1kP384XDU5jEIGQPG1kIXbv10P3" alt="EXPLAINER | What we know about Rassie Erasmus&#39; latest ban ... for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For the second time as SA Rugby director of rugby, Rassie Erasmus has had the book thrown at him by World Rugby for publicly highlighting officiating issues&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymaverick.co.za/article/2022-11-17-world-rugby-bans-bok-supremo-rassie-erasmus-again-after-ref-criticisms/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Rugby bans Bok supremo Rassie Erasmus again after ref ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQH7s2i4UogdCjK1z3oXxdUXGmWXdTjjY57PihX3e8In9P1m-7aY6lbOzxqBq3HAzDc4kfQgZ32" alt="World Rugby bans Bok supremo Rassie Erasmus again after ref ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Rugby has banned SA&#39;s director of rugby, Rassie Erasmus, for the second time in a year for his off-field antics and attacks on match officials.</p></div>
            </div>
        </a><a href='https://www.world.rugby/news/777605/world-rugby-statement-rassie-erasmus-social-media-commentary-on-match-officials'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Rugby statement: Rassie Erasmus social media commentary ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRplbU2Iijo9Ol9luRVWGPFbIgSMBbTckLj2ihH7787NmBpUGjnxl3xaP8xC1DJ3DnlHQUsC4dZ" alt="World Rugby statement: Rassie Erasmus social media commentary ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Rugby has issued SA Rugby Director of Rugby Rassie Erasmus with a ban on all match day activities for two matches as a result of recent social media&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iol.co.za/saturday-star/news/carping-point-rassie-erasmus-is-at-real-risk-of-ruining-his-deserved-reputation-d81eeb28-73bd-40ef-aa0d-2d69b51615a8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carping Point: Rassie Erasmus is at real risk of ruining his deserved ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmWTK1l3188uFJtnkSo_QqjBiFcOm2453BTEwaXCjHrqTXyDHf54aVJPi39z-pRyiI60iRPNpJ" alt="Carping Point: Rassie Erasmus is at real risk of ruining his deserved ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Gauteng Lions&#39; Rugby Union is running out of referees.</p></div>
            </div>
        </a><a href='https://www.sarugbymag.co.za/mallet-rassies-tweets-harm-good/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mallett: Rassie&#39;s tweets doing more harm than good</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSvuFXPTmaj9aRTwvsuba5VVNtR3Pdmqu9fBtI56wwusDTMJdyQzOhr9NC_QO8n5f-K0bTC9gfM" alt="Mallett: Rassie&#39;s tweets doing more harm than good" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nick Mallett says Rassie Erasmus is to blame for the Springboks being the “least-liked team in the world” and not getting the 50-50 calls from referees.</p></div>
            </div>
        </a><a href='https://ewn.co.za/2022/11/17/rassie-erasmus-banned-for-two-games-over-latest-referee-tweets'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rassie Erasmus banned for two games over latest referee tweets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ5xEFhIgP0jdL3MilcZ6u-p7jzVRvNNHkPHXfrWrpF2W79oAlhGJQnmcYv9w9Q5XrSyxK9zlsL" alt="Rassie Erasmus banned for two games over latest referee tweets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Africa director of rugby Rassie Erasmus was suspended by World Rugby on Thursday following his criticism of refereeing decisions during the ongoing&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}