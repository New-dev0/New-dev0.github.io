import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Adelaide Weather</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Adelaide Weather"/>
        <meta name="description" content="Trending News about Adelaide Weather" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Adelaide Weather</h1>
            <Image width={800} height={500} src="https://www.insidesport.in/wp-content/uploads/2022/10/0b3f2d46-b26c-456b-bf01-5cc17bf432df.jpg?w=809" alt="Adelaide Weather"/>
            <h3>Recent News</h3>
            <a href='https://www.insidesport.in/ind-ban-adelaide-weather-bad-news-for-team-india-as-rain-expected-in-adelaide-on-nov-2-likely-to-impact-india-vs-bangladesh-t20-wc-clash-follow-live-updates/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND BAN Adelaide Weather: Good NEWS, No RAIN since morning ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTjByjeT-dR_ipWP8f9WaKC2BGUVQVRKuIAFFB_hpRqFKlllaMWEu2t9maVa3275dod4wBWpMsm" alt="IND BAN Adelaide Weather: Good NEWS, No RAIN since morning ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND BAN Adelaide Weather, India vs Bangladesh LIVE on Wednesday, Adelaide Weather forecast, PITCH Report, playing XI, ICC T20 World Cup 2022 LIVE.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/cricket/t20-world-cup/adelaide-weather-forecast-today-india-vs-bangladesh-wednesday-nov-2-rain-updates/article66082987.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adelaide weather forecast, India vs Bangladesh today: Will rain play ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQX1VXrvQSLCwGea_d0R5xO6CIlzIZhSKMzLRO7gnG9_0xIZwsM1QiUIiFeaUXphEujdE8WAbKG" alt="Adelaide weather forecast, India vs Bangladesh today: Will rain play ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND BAN Adelaide weather forecast: The threat of rain interruptions hangs over Wednesday afternoon&#39;s Super 12 match between India and Bangladesh at the&nbsp;...</p></div>
            </div>
        </a><a href='https://weather.com/en-IN/india/news/news/2022-11-01-t20-world-cup-weather-india-vs-bangladesh-at-risk-due-to-rain'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup Weather: India vs Bangladesh Clash At Risk, As ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTANWvSWtJjUa0UhfjPyHaxNsA25MIC6iOKAAf4lLoFgEIO36ec9XDKd70mjLVZPBH3eQuS0FaN" alt="T20 World Cup Weather: India vs Bangladesh Clash At Risk, As ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If the match goes on uninterrupted, the fast bowlers could be in for a treat. - Articles from The Weather Channel | weather.com.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/india-vs-bangladesh-adelaide-weather-report-ind-vs-ban-t20-world-cup-rain-prediction-101667308684352.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Will rain dent India&#39;s WC semi-final hopes? Check Adelaide&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5n2Es9lLA4NXoBXxV_tSzThKkXdrV3zpq9a3hQfhtvGZmbvneNNJwAfdBGhpybPDeyzQsHlr5" alt="Will rain dent India&#39;s WC semi-final hopes? Check Adelaide&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India have a golden chance to book the semifinal ticket as they lock horns with Shakib Al Hasan&#39;s Bangladesh in Adelaide on Wednesday. | Cricket.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/cricket/ind-vs-ban-t20-world-cup-2022-weather-report-on-november-1-in-adelaide-oval-rain-likely-to-play-spoilsport-2529560.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN Weather Report from Adelaide Oval: Rain and cold ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJZOOxv9O525Vx4XnoeipFyvsE7LQsQPDjz_4ekUXKDtQFHJ7WvjXFIhHF3-qOd5kvA1JAAYBS" alt="IND vs BAN Weather Report from Adelaide Oval: Rain and cold ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On the eve of the match, Adelaide was greeted by cold weather and rains, which made the capital of South Australia look like a city from Europe.</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-adelaide-weather-will-rain-spoil-the-fun-of-icc-t20-world-cup-2022-ind-vs-ban-match-7295652.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adelaide Weather: क्या बारिश बिगाड़ेगी ICC T20 World Cup 2022 IND ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGjHupYYAdLmGthw6gJIV_UXjTlIuSiOP_mT2p3d_cePDMpwZoI17vl0LP0SSZShD1lxIpdlJz" alt="Adelaide Weather: क्या बारिश बिगाड़ेगी ICC T20 World Cup 2022 IND ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारत और बांग्लादेश के बीच आज एडिलेड ओवल मैदान पर मैच खेला जाना है। एडिलेड में मैच से एक&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportstiger.com/news/t20-world-cup-india-bangladesh-adelaide-wednesday-november-2-2022-weather-forecast-rain-updates-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Today Adelaide Weather Forecast | IND vs BAN Weather Report ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQijetvysyxhhv_J8ul8C39cFRQFVhHe7i3zybtv0-KGNLghR_tC2xwxitBT7Thpk9pCayKCV7M" alt="Today Adelaide Weather Forecast | IND vs BAN Weather Report ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today Adelaide Weather Forecast November 1: According to weather.com, the temperature is expected to be around 16 degrees Celsius with 60% humidity in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/ind-vs-ban-this-is-the-weather-condition-in-adelaide-wether-report-2022-11-01-898308'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN : एडिलेड में ऐसा है मौसम का हाल, जानिए बारिश की संभावना</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ2zNQzxzYeDKDtIS4rakxHHrxXUBABNmA4R7PAOaxs1UwWZo2ggm-YcC2ZgrTAEqTrOO-5GPi5" alt="IND vs BAN : एडिलेड में ऐसा है मौसम का हाल, जानिए बारिश की संभावना" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ind vs Ban Adelaide Weather Report : भारत और बांग्लादेश के बीच होने वाले मैच में बारिश भी खलल डालने के&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/india-vs-bangladesh-rain-predictions-weather-forecast-adelaide-t20-world-cup-ind-vs-ban-2022-tspo-1566289-2022-11-01'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ind Vs Ban T20 WC: एडिलेड में झमाझम बारिश, कहीं रद्द ना हो जाए भारत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR5R9wiWbNh_0X3smiBmKU1Y0O38D8H47tc6t1FW2zOqHqri0e9ba5h1rYVzvcZTk264HdMZJe4" alt="Ind Vs Ban T20 WC: एडिलेड में झमाझम बारिश, कहीं रद्द ना हो जाए भारत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारत और बांग्लादेश के बीच होने वाले मैच पर बारिश का साया है. एडिलेड में मंगलवार को&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tv9hindi.com/sports/cricket-news/india-vs-bangladesh-35th-match-pitch-report-in-hindi-adelaide-oval-adelaide-weather-forecast-report-live-au149-1535539.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND Vs BAN Weather Report: एडिलेड में नहीं हो पाएगा मैच? अंक बांटने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQThgAW_cmofy4b9fbnY8gH_sdaNkvAYEmpMg8FI3iDcJHpTS4gf-tOSz9wwKgvP98cDjEaRRrI" alt="IND Vs BAN Weather Report: एडिलेड में नहीं हो पाएगा मैच? अंक बांटने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND Vs BAN T20 वर्ल्ड कप 2022 वेदर रिपोर्ट: एडिलेड में होने वाले इस मैच में मौसम दोनों टीमों के&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}