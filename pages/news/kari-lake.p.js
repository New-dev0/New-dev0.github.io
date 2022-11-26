import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kari Lake</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kari Lake"/>
        <meta name="description" content="Trending News about Kari Lake" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kari Lake</h1>
            <Image width={800} height={500} src="" alt="Kari Lake"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/news/world-us-canada-63627007'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump ally Kari Lake loses to Democrat Katie Hobbs in Arizona ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1IbzVlAKrQP1DdEFMhwZ7ilGHJg9pB7o0p9XvY0vlK20j41WuOFAThSQnJVTs_gCulrNvdcF1" alt="Trump ally Kari Lake loses to Democrat Katie Hobbs in Arizona ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Democratic candidate Katie Hobbs has defeated Republican Kari Lake in Arizona&#39;s race for governor, CBS News has projected. The result is a rebuke of Ms Lake&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/15/us/politics/kari-lake-arizona-republicans.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kari Lake Weighs Whether to Concede or Challenge the Election ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQi18ddvZWXgT88TKOti1RiHKHR4Q2g0er3EnK4eUED7pgOsrHfQLZTyCmDnQ7SKw4Qcz8mCmp1" alt="Kari Lake Weighs Whether to Concede or Challenge the Election ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The defeated candidate for governor is weighing whether to concede or mount a legal challenge. The choice is pitting old-guard Republicans against election&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wsj.com/livecoverage/midterm-elections-congress-house-results/card/kari-lake-holds-off-on-conceding-arizona-governor-race-yJ0vkVLEPAC5gLaoCsss'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump Launches His 2024 Presidential Campaign: Live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT4vZLPl_I5c4KOkeZAR6tZWH5ouylwPCu5cBfgDL3fAC74JNaTbVXdsFcxYdfbFMzXKU9mhY4r" alt="Donald Trump Launches His 2024 Presidential Campaign: Live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kari Lake, the Republican who lost a tight race to be Arizona&#39;s governor, hasn&#39;t conceded the contest, more than 20 hours after the Associated Press and TV&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newyorker.com/humor/borowitz-report/kari-lake-furious-after-arizona-awards-her-participation-trophy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kari Lake Furious After Arizona Awards Her Participation Trophy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTf5-29jldhgASDFf7FITYhziigobW3C-xgYYNHPa9jNSOtMUG8NtFhJfpgfaBQAwD37sd8XLTl" alt="Kari Lake Furious After Arizona Awards Her Participation Trophy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lake reportedly snarled at the six-inch plastic figurine and drop-kicked it across the room.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/politics/2022/11/15/arizona-kari-lake-governor-elections/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reality waits to see if it has a new supporter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR23Yd4Tmfoq3WV2TSrsAalJ2mGqZSirLG5B1uTQfQWjOvjQ0B9y0t_FhnnTh0C6XGJs7amXuWe" alt="Reality waits to see if it has a new supporter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For the past week, Arizona Republican gubernatorial candidate Kari Lake&#39;s Twitter feed has been a steady stream of optimism. In tweet after tweet,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kold.com/2022/11/16/why-kari-lake-lost-race-arizona-governor/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Kari Lake lost the race for Arizona governor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRfrqepusZrty7D2UqZHu4HBg5d7FB0fRW3wNuBE-Jg437ezTh0lHXvN0xYOYCafBmQTcs1R3Zu" alt="Why Kari Lake lost the race for Arizona governor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2020 midterm results were not what most people predicted. In a typical off year election, the President&#39;s party usually takes a shellacking.</p></div>
            </div>
        </a>
        </Template></>;
}