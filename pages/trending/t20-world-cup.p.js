import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>T20 World Cup</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,T20 World Cup"/>
        <meta name="description" content="Trending News about T20 World Cup" /></Head><Template>
            <h1 style={{fontSize: "30"}}>T20 World Cup</h1>
            <Image width={800} height={500} src="https://resources.pulse.icc-cricket.com/ICC/photo/2022/10/16/079cc4b6-3214-40ca-aff5-4de45a67f208/Namibia-win.jpg" alt="T20 World Cup"/>
            <h3>Recent News</h3>
            <a href='https://www.icc-cricket.com/news/2853736'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Namibia stun Sri Lanka to claim T20 World Cup opener</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRijQ6VtjMVmO5PAa2rIw3zHnmmVgl9JrCsRFxXkxEWOnrlp1QGhibgZzFZUQDr00CrIAHcxCT6" alt="Namibia stun Sri Lanka to claim T20 World Cup opener" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A strong team performance has helped Namibia register a stunning 55-run upset victory over Sri Lanka in the ICC Men&#39;s T20 World Cup clash opener in Geelong&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/t20-world-cup-2022-today-match-uae-vs-ned-and-sl-vs-nam-highlights-results-and-analysis-in-hindi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup: नामीबिया से हारा श्रीलंका, नीदरलैंड भी जीता, जानें टी20 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2Mlk4ONxhJ3ijDh4u7safjgl7Ip_hhQ9eK96SGULHWxZNj0OtLTj0dkcE0PVLrcQIU9nhCcPj" alt="T20 World Cup: नामीबिया से हारा श्रीलंका, नीदरलैंड भी जीता, जानें टी20 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>अंक तालिका की बात करें ग्रुप-ए में शीर्ष पर नामीबिया की टीम है। वहीं, दूसरे स्थान पर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/sports/cricket-news/t20-world-cup-2022-opening-ceremony-live-11665930132423.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup 2022 Opening Ceremony: Event to take place from 5 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcREC14V_aQZTV2oV5UTa7sdu6BlYh8OArQJYU5h7Kz0ZTx8NgMbRhWD6dyr9oxxI1sFh2CXA75a" alt="T20 World Cup 2022 Opening Ceremony: Event to take place from 5 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As per details, the cricketing fans in India can watch the opening ceremony the World Cup on their TV at Star Sports channel or on the Hotstar application.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/cricket/t20-world-cup/india-vs-australia-practice-match-t20-world-cup-warmup-live-streaming-online-tv-info-when-where-to-watch-match-time/article66016802.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Australia practice match T20 World Cup 2022 live streaming ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4E6etohfFLpi7AOD8f0Cy2IU6AC2tHMzCf6abb2eMAyL3DksDNMsIJlDcAPqCZ4XSKsDgYuL8" alt="India vs Australia practice match T20 World Cup 2022 live streaming ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs Australia, T20 World Cup 2022: Here is how you can watch India&#39;s first warm-up match of T20 World Cup 2022 between Australia and India on Monday.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/players-who-test-covid-positive-will-be-allowed-to-play-t20-world-cup-matches-8212477/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Players who test Covid positive will be allowed to play T20 World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQsy77J3u4Z4lc00Rcm61qorVFPdfjy5BWokRq48XEdV6MaSXMeq3Jc-6OgB9y2GjY41asd9djA" alt="Players who test Covid positive will be allowed to play T20 World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Teams will be permitted to make squad changes should a player return a positive report with the infected player then allowed to return to the squad upon&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/cricket/match-report-t20-world-cup-2022-namibia-made-a-big-upset-beat-sri-lanka-by-55-runs-23143937.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup 2022: पहले राउंड में नामीबिया ने किया बड़ा उलटफेर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQeaqpxj5DovLVcVUD7wru-QBAbrm9h3nurOb9rurSJ8bTBfqHxNJqirZIGjKmNGxz26eD0qVB9" alt="T20 World Cup 2022: पहले राउंड में नामीबिया ने किया बड़ा उलटफेर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>नामीबिया ने श्रीलंका को 55 रन से हरा दिया। गीलॉन्ग के सिमंड स्टेडियम में खेले गए इस मैच&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/t20-world-cup-2022-india-vs-australia-warm-up-match-live-streaming-when-and-where-to-watch-8212194/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup 2022: India vs Australia warm up match live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQu3pT9pBz08tLjrR3fKh1CF7TnVRM3MRmIu8PokQvTW3iSxllN50IaBats8FNT0DYvHOhjafrM" alt="T20 World Cup 2022: India vs Australia warm up match live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The men in blue come into the fixture on the back of two T20Is against Western Australia XI which went either way. Australia on the other hand, recently lost&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/oct/16/namibia-earn-shock-win-against-sri-lanka-cricket-t20-world-cup-opener'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Namibia earn shock win against Sri Lanka in T20 World Cup opener</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT2lj3-fPxhfG1vdj0rKZf8FVs-AvU49eJhpoeFrP0PqBB64AUiu2oRSY18rLTtdxhEuG_7SFmI" alt="Namibia earn shock win against Sri Lanka in T20 World Cup opener" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arriving as surprise Asia Cup champions, Sri Lanka had hoped to make an early statement against the African associate side in front of thousands of expectant&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/logan-van-beek-played-against-india-a-20-days-ago-from-new-zealand-a-now-playing-t20-world-cup-for-netherlands'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup: 20 दिन पहले भारत-ए के खिलाफ न्यूजीलैंड से खेला था यह ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTBfQYOsHupQcXoNUygs5pyt44bhs-KXls-52to169KFhlAHNrB8ZYWEAseUUsc5o9NY-3j3_Zo" alt="T20 World Cup: 20 दिन पहले भारत-ए के खिलाफ न्यूजीलैंड से खेला था यह ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Logan van Beek played against India A 20 days ago from New Zealand A now playing T20 World Cup for Netherlands: लोगन वान बीक की कहानी&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/t20-world-cup-2022-india-vs-australia-warm-up-match-live-streaming-when-where-and-how-to-watch-ind-vs-aus-live-online-101665933446345.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup, IND vs AUS Warm-up Match Live Streaming: All you ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSV2LNzjLTfn5ZPmJkS_WO8TuoacVa1RIE-2wPYT8w6ToyeIDkn5H4Fip522UZGk7fyjaaugElQ" alt="T20 World Cup, IND vs AUS Warm-up Match Live Streaming: All you ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T20 World Cup 2022, India Vs Australia Warm-up Match Live Streaming: India face Australia in a warm-up match in Brisbane. | Cricket.</p></div>
            </div>
        </a>
        </Template></>;
}