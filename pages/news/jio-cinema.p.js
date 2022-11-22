import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jio Cinema</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jio Cinema"/>
        <meta name="description" content="Trending News about Jio Cinema" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jio Cinema</h1>
            <Image width={800} height={500} src="https://spiderimg.amarujala.com/assets/images/2022/11/21/750x506/jio-cinema_1669025580.jpeg" alt="Jio Cinema"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/technology/tech-diary/fifa-world-cup-jio-cinema-livestream-reaction-india-football-fans-makes-memes-on-jio-and-jiocinema-app'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup की लाइव स्ट्रीमिंग पर जियो का बना मजाक, भड़के Jio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7TOjBEcCG181vU5G2EyWe5g5Ufw3raEAx6dlyKIrCDHCdWbhvb4YtZAuWftbGKcW5Ip-4B6Mr" alt="FIFA World Cup की लाइव स्ट्रीमिंग पर जियो का बना मजाक, भड़के Jio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>जियो ने खासतौर पर फीफा वर्ल्ड कप के लिए 5 नए इंटरनेशनल रोमिंग प्लान्स लॉन्च किए और जियो&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/companies/fifa-world-cup-fans-fume-at-jio-cinema-app-advertisers-optimistic-122112100420_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fifa World Cup: Fans fume at Jio Cinema app, advertisers optimistic</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS6VF6O_kIivyVtoGwaTD9O3iT6L9xzxrKdYgHw8zYrZ1aFAzAuupZZJGj5-N_6E69-YmOAyFRj" alt="Fifa World Cup: Fans fume at Jio Cinema app, advertisers optimistic" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Viacom18, the official broadcaster of the Fifa World Cup, appears to have sorted out the technical issues that plagued the JioCinema app on Sunday.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/technology/tech-news-technology/fifa-world-cup-2022-all-jiocinema-alternatives-you-can-use-to-stream-matches-8280418/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022: It&#39;s not just JioCinema… here are other ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtMJ0acJqLJTseX6GirvELwOpF4PJOg3WVfHEiA3S_j7UG3z2YxzpeBF5X7xz-M6GAIKZAkuD3" alt="FIFA World Cup 2022: It&#39;s not just JioCinema… here are other ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA 2022 World Cup: Here are all the JioCinema alternatives you can use in case you do not have a good experience with the streaming app.</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/world/jiocinema-apologises-after-awful-fifa-live-streaming-leaves-fans-disappointed-11669011921018.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JioCinema apologises after &#39;awful&#39; FIFA live-streaming leaves fans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQyeI_ZUAQdGo5uTSJOkspXPOOVqYK-2G2EXFh_eQn0JxP_iJYhoi32a3RzalFc70IHNilc3l9E" alt="JioCinema apologises after &#39;awful&#39; FIFA live-streaming leaves fans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Football fans in India had a lot of difficulties viewing the opening match of the FIFA World Cup 2022, the first-ever football world cup in the Middle East.</p></div>
            </div>
        </a><a href='https://thelogicalindian.com/story-feed/sports/jio-cinema-faces-streaming-issues-fifa-world-cup-qatar-vs-ecuador-38777'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar-Ecuador Opener: Jio Cinema Faces Streaming Service Issues ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSgOtA2YioT7iPyIcWmhzW6PTSl926u3ewA4aLdCsoXp1SvyRVmRTJo5-zaDJG7rhBCPxzc9F5u" alt="Qatar-Ecuador Opener: Jio Cinema Faces Streaming Service Issues ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of the biggest sporting events worldwide, the FIFA World Cup, commenced on Sunday in Qatar with an iconic opening ceremony. However, Indian fans were&nbsp;...</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/latest/trends/story/jiocinema-apologises-after-fans-complain-of-glitches-during-fifa-world-cup-live-streaming-353613-2022-11-21'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JioCinema apologises after fans complain of glitches during FIFA ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTessFwbanVGouooU6GjX2WFWZRks23f-uYXaNJzO1KUbMZOCStGGk_gwt4RdH_ax-63khpVYEQ" alt="JioCinema apologises after fans complain of glitches during FIFA ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On November 20, the FIFA World Cup 2022 began with a grand opening ceremony at Al Bayt Stadium in Qatar. After that, Ecuador and Qatar played their first&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/technology-science/jiocinema-not-working-here-are-your-alternatives-to-watch-the-fifa-worldcup-2022-article-95668345'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JioCinema not working? Here are your alternatives to watch the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS39SxFdrS9yI6_QArEbtIMC46K6iAGvM68-yzqpZQF6dEislFdG_c5pKpM7mPoXwkzth_KdRMT" alt="JioCinema not working? Here are your alternatives to watch the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today, two matches are set to be played. These include England playing Iran in Group B at the Khalifa International Stadium in Doha and Senegal playing the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/technology/tech-news/story/jio-cinema-poor-streaming-during-fifa-world-cup-opener-twitter-flooded-with-memes-ttec-1580071-2022-11-21'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;यही था तुम्हारा इंतजाम&#39;, FIFA World Cup स्ट्रीमिंग में दिक्कत पर भड़के ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRFUWWyY2dy8v-Q3Y7wZiU-_NmdkFKLNs8qXtEAnouGvkkEOk8uoIiAYFqP6Vc5yMGyiK6QTAli" alt="&#39;यही था तुम्हारा इंतजाम&#39;, FIFA World Cup स्ट्रीमिंग में दिक्कत पर भड़के ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World Cup को Jio Cinema पर स्ट्रीम किया जा रहा है. लेकिन, मैच के दौरान बार-बार बफरिंग होने से&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tv9hindi.com/technology/fifa-world-cup-live-stream-free-2022-jio-cinema-twitter-trends-troll-memes-enjoy-au485-1570245.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;बेटा तुमसे ना हो पाएगा&#39;, FIFA World Cup को लेकर Jio Cinema की क्यों ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRBMQ_HpDqZx-5aBWjIL4A-FhHhirOa5WilA3jtlK-UWwmvhwX7EF83YUm3C9ehnYCW8Sltz1BG" alt="&#39;बेटा तुमसे ना हो पाएगा&#39;, FIFA World Cup को लेकर Jio Cinema की क्यों ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jio Cinema कतर में चल रहे FIFA World Cup 2022 के मैच फ्री में दिखा रही है. हालांकि, फीफा वर्ल्ड कप के&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.oneindia.com/news/sports/cricket/jio-cinema-responds-with-hilarious-meme-to-fans-complaining-fifa-world-cup-2022-728860.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jio Cinema पर फुटबॉल वर्ल्ड कप Live देख भड़के फैंस, स्ट्रीमिंग में आई ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRUWAlpOPyE6gjyyACQVmHUiWMxnKz7SSKpPS_BjD2EMfdSw_R3jVSn60FtDA2bOMB2EVWR-FBV3w" alt="Jio Cinema पर फुटबॉल वर्ल्ड कप Live देख भड़के फैंस, स्ट्रीमिंग में आई ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>फुटबॉल वर्ल्ड कप 2022 का आगाज किया जा चुका है। रविवार 20 नवंबर को पहले मैच में इक्वाडोर ने&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}