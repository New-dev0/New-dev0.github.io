import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Novak Djokovic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Novak Djokovic"/>
        <meta name="description" content="Trending News about Novak Djokovic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Novak Djokovic</h1>
            <Image width={800} height={500} src="https://i.eurosport.com/2022/11/21/3494280-71232768-2560-1440.jpg" alt="Novak Djokovic"/>
            <h3>Recent News</h3>
            <a href='https://www.eurosport.com/tennis/atp-finals/2022/goran-ivanisevic-issues-warning-to-novak-djokovic-s-rivals-following-atp-finals-glory-he-s-going-to-_sto9238500/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Goran Ivanisevic issues warning to Novak Djokovic&#39;s rivals following ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTnXJl25COVQc_rgtIOUWSQ1v-PghhiOOTwTu6cvXR4m-sLKJbIcPCykkN2wn583BeDiAG-M3uy" alt="Goran Ivanisevic issues warning to Novak Djokovic&#39;s rivals following ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At the age of 35, the 21-time Grand Slam champion broke the record for the oldest champion in tournament history when he clinched the Nitto ATP Finals trophy&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tennis.com/news/articles/novak-djokovic-hasn-t-been-knocked-off-the-atp-throne-just-yet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic hasn&#39;t been knocked off the ATP throne just yet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPOHbiaI2VeQKPhZo1j0KhqhRq1vE_BI82r9GLlPWMnI5dYLAfwFmxTaIWQqwS9Nil1F2h6r_y" alt="Novak Djokovic hasn&#39;t been knocked off the ATP throne just yet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In my mind I always see myself as the best player in the world,” said the Serbian, who beat opponents ranked No. 3, 4, 7, 8 and 9 in the world, with the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/sport/tennis/tennis-novak-djokovic-atp-finals-28546553'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic highlights importance of ATP Finals win as he ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSUnX0JGthwVmPj5X7IwtlS6RIAq8mAv-7Kqe8LCJ4NCCXzvy6KJaz-43c4aAZWBeK_AdNyu8_7" alt="Novak Djokovic highlights importance of ATP Finals win as he ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic has opened up on his latest ATP Finals victory after defeating Casper Ruud to equal Roger Federer&#39;s record at the season-ending championships&nbsp;...</p></div>
            </div>
        </a><a href='https://www.express.co.uk/sport/tennis/1699384/Novak-Djokovic-violent-tremors-ATP-Finals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic explains why violent tremors could happen again ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTY5yc3Ds7pnK0YupMC5KIpGHrsSzHb_3yfcbThhfEIcaf-zkEu699wLu1WRqM-ptDepNMM8gxp" alt="Novak Djokovic explains why violent tremors could happen again ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic won his sixth ATP Finals title after beating Norwegian Casper Rudd in the final.</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/tennis/article-11454373/Djokovic-Nadal-look-dominant-supermen-new-generation-just-weak.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Djokovic and Nadal still look so dominant... so are they supermen or ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJdZhSIp1KzEqFcdLq3awYmbFXW3JHUqGFt3uPJ9QnzyTm6OZrcLFyfPPcCUFl7kMaqs9RpZAA" alt="Djokovic and Nadal still look so dominant... so are they supermen or ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the wake of Novak Djokovic&#39;s triumph at the ATP Finals in Turin, nobody would be surprised if the men&#39;s honour roll at 2023&#39;s first three Slams reads&nbsp;...</p></div>
            </div>
        </a><a href='https://newsonair.com/2022/11/21/novak-djokovic-defeats-casper-ruud-to-win-sixth-atp-finals-title-in-italy-equals-federers-record/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic wins sixth ATP Finals title, matches Roger Federer&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTomOSNaJPwu3_D0uw8QouIGVdS3IkktiaRk-KgH7mTbf7GMy45F8uUKk96ep-Hp4_d68T0ZRe-" alt="Novak Djokovic wins sixth ATP Finals title, matches Roger Federer&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Tennis, Novak Djokovic has defeated Norway&#39;s Casper Ruud to collect a record-equalling sixth ATP Finals title in Turin, Italy. Djokovic defeated Rudd in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.planetsport.com/tennis/news/novak-djokovic-focused-trophies-records-retirement'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic focused on trophies and records, not retirement</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQwgSeSQuhzGUqYxtgPGy86pEEXIEm8xFjCuCkOIQQzvhWE8z_BA4nW9unJguYBnbchmlqbVhML" alt="Novak Djokovic focused on trophies and records, not retirement" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 21-time Grand Slam winner ended his mini drought at the ATP Finals as he won his first title in seven years by defeating Casper Ruud in Sunday&#39;s final.</p></div>
            </div>
        </a><a href='https://uk.sports.yahoo.com/news/footage-emerges-novak-djokovic-early-002155560.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Footage emerges of Novak Djokovic&#39;s early tennis lesson</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTE73Fmb42Bg0fXiyfcPUXIfQOG2-HBO2nbR25YrdYi-9N_j3nqK0JBUyKa5_b1Wpoehg_3YQtx" alt="Footage emerges of Novak Djokovic&#39;s early tennis lesson" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Djokovic won a record-equalling sixth ATP Finals title as he beat Casper Ruud in impressive fashion in Turin, as he joined Roger Federer as the most successful&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tennisworldusa.org/tennis/news/Novak_Djokovic/124379/novak-djokovic-explains-why-he-has-always-been-humble-with-his-money-/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic explains why he has always been humble with his ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTFDwXWEURIku75TXwG0b9TbcJSqOMeWR4onEzElJrG5_SLnzfVgfUwGSsgc-bbjA1pkU23bJN3" alt="Novak Djokovic explains why he has always been humble with his ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Djokovic earned himself another big payday by winning the ATP Finals.</p></div>
            </div>
        </a><a href='https://www.tennisworldusa.org/tennis/news/Novak_Djokovic/124381/coach-goran-ivanisevic-reacts-to-novak-djokovic-winning-atp-finals-/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coach Goran Ivanisevic reacts to Novak Djokovic winning ATP Finals</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWTFWF7dq8xWRTv3LI9bbE1DZRfO9Nmhqm-fMCVXm6zLHv-TdQZlCEiL-TdbbKVGEea0ysk8xv" alt="Coach Goran Ivanisevic reacts to Novak Djokovic winning ATP Finals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Djokovic defeated Casper Ruud for his sixth ATP Finals title.</p></div>
            </div>
        </a>
        </Template></>;
}