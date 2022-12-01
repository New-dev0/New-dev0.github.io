import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Phil Foden</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Phil Foden"/>
        <meta name="description" content="Trending News about Phil Foden" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Phil Foden</h1>
            <Image width={800} height={500} src="https://i.dailymail.co.uk/1s/2022/11/30/15/65092553-0-image-a-17_1669822785642.jpg" alt="Phil Foden"/>
            <h3>Recent News</h3>
            <a href='https://www.dailymail.co.uk/sport/football/article-11486233/Phil-Foden-admits-DID-feel-pressure-perform-against-Wales-fans-pleaded-start.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Phil Foden admits he DID feel pressure to perform against Wales ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSaZou09PKLLtP9T8_dDi0sciK0_wT7ftQFSd7xxXSNR-Q7gonWzRfZJYH4iCFM1-qYQx9M4vSK" alt="Phil Foden admits he DID feel pressure to perform against Wales ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Phil Foden felt under pressure to perform against Wales on Tuesday evening as Gareth Southgate decided to start him for England&#39;s final group game.</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/man-city-phil-foden-england-25641485'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man City star Phil Foden shares motivation that helped him seize ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTW72X5S_g3OJeNtYfxegmO0o_KCvSHUVoqZov7LF1IPZU7CWPkWesoHWKHlIOiluAc0NMGN8uH" alt="Man City star Phil Foden shares motivation that helped him seize ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Phil Foden blocked out the noise and let his football do the talking to seize his World Cup opportunity.</p></div>
            </div>
        </a><a href='https://strettynews.com/2022/11/30/video-phil-foden-names-marcus-rashford-as-top-three-in-the-world-at-one-thing/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>(Video) Phil Foden names Marcus Rashford as &#39;top three in the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR3cXX0MjVzHaHHuzqr6A2ZCnKW2ynCKm3Of028UKjRc0lI3YsNYcJiUJwiAKvRPSNpGRm7krRf" alt="(Video) Phil Foden names Marcus Rashford as &#39;top three in the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A number of Manchester United players are enjoying stellar World Cup campaigns and all three of the Reds included in Gareth Southgate&#39;s 26-man England squad&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/football/article-11483667/World-Cup-John-Terry-says-Phil-Foden-Marcus-Rashford-given-Gareth-Southgate-problem.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup: John Terry says Phil Foden and Marcus Rashford have ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRq8C8_YoVFYyxYCYQMJJBfkvKmfqt4CTJtFjsxzEU5VHpEdEZF_RVYr26nCMyf9h4KhAmW_Wkd" alt="World Cup: John Terry says Phil Foden and Marcus Rashford have ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Both players were brought into the starting line-up for the first time at the World Cup and didn&#39;t disappoint, with Rashford scoring a brace while Foden&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/news/11095/12758348/phil-foden-stars-for-england-against-wales-world-cup-goal-from-the-left-reflects-man-city-mans-game-right-now'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Phil Foden stars for England against Wales: World Cup goal from ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRn9pIyiM8vi3i_avBAx-SMsQn8vdhd6IMUcLvrw9j7rH4KWQUd6Vt8LeJVWRyPW8ESaUhMhjQz" alt="Phil Foden stars for England against Wales: World Cup goal from ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Phil Foden delivered a goalscoring performance on his return to the starting line-up for Englands 3-0 win over Wales at the World Cup.</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/rashford-foden-england-united-city-25636495'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Phil Foden says Manchester United&#39;s Marcus Rashford is &#39;top three ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRWWsbmtCJQZ_0zUVLUwrEYvzBMGIahpWeEHdf63tUfe2IBu-OtZE4cUs5q9hjoEtWB3tVVer4c" alt="Phil Foden says Manchester United&#39;s Marcus Rashford is &#39;top three ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United&#39;s Marcus Rashford scored twice and Man City hero Phil Foden scored another as England beat Wales at the World Cup.</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/man-city-foden-bellingham-england-25640049'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jude Bellingham praises Phil Foden for proving what Man City fans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQxXOzK5fFzFYClsyJD07mj5Xp9sA8HHmQbA2rI888pGaLXbe43Ddx8PT0fO51Pg-NaDyN_hXQI" alt="Jude Bellingham praises Phil Foden for proving what Man City fans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Phil Foden lived up to the hype by playing a key role in England&#39;s 3-0 defeat of Wales on Tuesday.</p></div>
            </div>
        </a><a href='https://www.chardandilminsternews.co.uk/sport/national/23160190.phil-foden-felt-pressure-perform-england-fans-call-start-wales-game/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Phil Foden felt pressure to perform after England fans&#39; call to start ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTqUQacAdxZxpZ2k97d_eWspMUw54_LtuLXq4IsQDvbCj6R_o2IMNXng2njuvZm1Xc__tg63Bdj" alt="Phil Foden felt pressure to perform after England fans&#39; call to start ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Southgate gave the 22-year-old his first World Cup start and he duly delivered.</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/sport/football/news/england-southgate-foden-rashford-worldcup-28617997'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Phil Foden and Marcus Rashford have given Gareth Southgate a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQBaYUYPR1xPmGiyUegTSdmjwtw9P8uJcCuzJ2gPPUOZxWtKEYnCCW78V42qXSeDlkwyuM_Eu8F" alt="Phil Foden and Marcus Rashford have given Gareth Southgate a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gareth Southgate rung the changes before England&#39;s World Cup win over Wales, with Phil Foden and Marcus Rashford underlining their cases to remain in the&nbsp;...</p></div>
            </div>
        </a><a href='https://theathletic.com/3951855/2022/11/30/phil-foden-england-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England is in love with Phil Foden – but has he won over Gareth ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTIqQbKU-_3TUvvNjxB87bhljfa6HaMa1Hf6ofNNNsuUJyDy6JFVGdA8NKFBN0Id7Fu1MBX_UUu" alt="England is in love with Phil Foden – but has he won over Gareth ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A goal against Wales has enhanced clamour for the Manchester City star to start against Senegal, but that call is far from nailed on.</p></div>
            </div>
        </a>
        </Template></>;
}