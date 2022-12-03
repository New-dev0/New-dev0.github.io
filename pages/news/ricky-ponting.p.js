import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ricky Ponting</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ricky Ponting"/>
        <meta name="description" content="Trending News about Ricky Ponting" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ricky Ponting</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/d247963c1b60f2f9f0995bee4ac7e9424bc78cc5/0_190_5712_3427/master/5712.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4f3e13c7a17b530e08e01aeeb51a9701" alt="Ricky Ponting"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/sport/2022/dec/02/ricky-ponting-australia-cricket-great-hospital-after-heart-scare'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia cricket great Ricky Ponting in hospital after heart scare</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQppVFMw4UD5lcqAWsy8bewtxxYg9draiuwuWQOS0FlA7RYDMvpe29twPHO8AMQ65SkOFnIvwx7" alt="Australia cricket great Ricky Ponting in hospital after heart scare" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ricky Ponting was taken to hospital on Friday after suffering a heart problem while commentating on Australia&#39;s Test against West Indies in Perth.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/ricky-ponting-hospital-australia-vs-west-indies-test-8302312/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ricky Ponting taken to hospital during Australia vs West Indies Test</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSNYEAiQeDUJsGlaKKTSLdA2Es_IBSUcwmExRR6neFjh4wA2eUUIvLkTiFlHS3d_ws-oYSqb8Cw" alt="Ricky Ponting taken to hospital during Australia vs West Indies Test" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Australia Test captain Ricky Ponting has been reportedly taken to a Perth hospital during the first Test between Australia and West Indies.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/ricky-ponting-admitted-to-hospital-during-australia-vs-west-indies-test-commentary'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ricky Ponting: लाइव मैच में कमेंट्री के दौरान रिकी पोंटिंग की तबीयत बिगड़ी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6zVYzmpHPHdhLWYHeXreRr-WmykaZyS3nFp4Ego5njgq2jiVjo8RhElHeivtAJ_CTwPWeEFAW" alt="Ricky Ponting: लाइव मैच में कमेंट्री के दौरान रिकी पोंटिंग की तबीयत बिगड़ी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>रिकी पोंटिंग को पर्थ के अस्पताल में भर्ती कराया गया है। मीडिया रिपोर्ट्स के मुताबिक,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/ricky-ponting-rushed-to-hospital-after-heart-scare-during-1st-australia-vs-west-indies-test-101669973896885.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ricky Ponting rushed to hospital after heart scare while commentating</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQoLD7L-W5rjidz-U9NTwuosXMs8IWoPVpqOUSPPKcYxXf-8lpldNxxvaTsHxtzxABlAM8xMhZS" alt="Ricky Ponting rushed to hospital after heart scare while commentating" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Australia skipper Ricky Ponting was taken to hospital on Friday after suffering a heart problem while commentating during day three of Australia&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/sports/cricket-news/exaustralia-skipper-ricky-ponting-taken-to-hospital-after-heart-scare-reports-11669974789530.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-Australia skipper Ricky Ponting taken to hospital after heart scare ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAIth7JJ2dOiN8MUEzOJWewCiVo-Xc8bxA74C6BSN6CCAQk0mExuovoNTFeUNbbQ6wsz8bTM-I" alt="Ex-Australia skipper Ricky Ponting taken to hospital after heart scare ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The world cup winning Australian skipper left the Perth Stadium around lunchtime after feeling unwell.</p></div>
            </div>
        </a><a href='https://www.espncricinfo.com/story/ricky-ponting-taken-to-hospital-during-third-day-s-play-in-perth-1347830'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ponting taken to hospital during third day&#39;s play in Perth</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9oiNeti9lGbtg3sTq5zdPhY56gRwUrjsJKrNpHWVRlWvisxT396-rDvN_PkpL-p707CrbbnHA" alt="Ponting taken to hospital during third day&#39;s play in Perth" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ponting was at Optus Stadium on Friday conducting his Seven Network commentary duties during the first Test against West Indies when he started feeling unwell.</p></div>
            </div>
        </a><a href='https://www.jagran.com/cricket/match-report-ricky-ponting-s-health-deteriorates-during-commentary-hospitalized-23240696.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ricky Ponting: कमेंट्री के दौरान ऑस्ट्रेलियाई पूर्व कप्तान रिकी पोंटिंग की ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQjnDFANWC_Glmoy6aleeYOYzyGiDrbjpQ3RrRNPdkArhhHfe-3bTcMYo5vHMnZgxWsfxNNqM5L" alt="Ricky Ponting: कमेंट्री के दौरान ऑस्ट्रेलियाई पूर्व कप्तान रिकी पोंटिंग की ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ऑस्ट्रेलिया के पूर्व कप्तान रिकी पोंटिंग को अचानक तबीयत खराब होने के कारण अस्पताल में&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/ricky-ponting-admit-in-hospital-after-suffering-heart-complications-during-the-australia-and-west-indies-test-commentary-tspo-1587558-2022-12-02'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>लाइव कमेंट्री के दौरान रिकी पोंटिंग की तबीयत खराब, अस्पताल में भर्ती कराया</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSN--QcPB7RCZhegt-b-qaybpV5rigb4K8b4Sbo-kCVO-YmjCu7WeaY8WuyQbhIdi6PybYjD1V0" alt="लाइव कमेंट्री के दौरान रिकी पोंटिंग की तबीयत खराब, अस्पताल में भर्ती कराया" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>पूर्व ऑस्ट्रेलियाई कप्तान रिकी पोंटिंग को अचानक तबीयत खराब होने के कारण अस्पताल में&nbsp;...</p></div>
            </div>
        </a><a href='https://telugu.news18.com/news/sports/ricky-ponting-rushed-to-hosipital-and-he-suffers-with-heart-attack-on-aus-vs-wi-test-srd-1525946.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ricky Ponting : కామెంట్రీ చెబుతూ కుప్పకూలిన ఆసీస్ దిగ్గజం.. రికీ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSvdF0Ykk_8m9zgR8jbblEcZ6ROpMz8g9fWzs1qR7ae-Ca4V3ovMFyaJlU-raiMMgUypqnVCC3L" alt="Ricky Ponting : కామెంట్రీ చెబుతూ కుప్పకూలిన ఆసీస్ దిగ్గజం.. రికీ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ricky Ponting Rushed To Hosipital and He Suffers With Heart Attack on Aus vs WI Test srd - Ricky Ponting : ఆస్ట్రేలియా లెజెండరీ&nbsp;...</p></div>
            </div>
        </a><a href='https://ndtv.in/cricket/ricky-ponting-rushed-to-hospital-after-suffering-health-scare-reports-hindi-3571996'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ricky Ponting Heart Scare: अचानक सीने में दर्द की शिकायत के बाद रिकी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKRqtXAygVPdL5dw7qszmUwatDiHrcWR9NYEWLZQdQz2xSZtKdYYLYnuoBjXplXHFsdRApA9UN" alt="Ricky Ponting Heart Scare: अचानक सीने में दर्द की शिकायत के बाद रिकी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ricky Ponting Heart Scare: अचानक सीने में दर्द की शिकायत के बाद रिकी पोंटिंग अस्पताल में भर्ती-&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}