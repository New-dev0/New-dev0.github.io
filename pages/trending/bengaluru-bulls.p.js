import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bengaluru Bulls</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bengaluru Bulls"/>
        <meta name="description" content="Trending News about Bengaluru Bulls" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bengaluru Bulls</h1>
            <Image width={800} height={500} src="https://newsroomodisha.com/wp-content/uploads/2022/10/a4430190326f008bf42265328a276ce8-BmNRiL.jpeg" alt="Bengaluru Bulls"/>
            <h3>Recent News</h3>
            <a href='https://newsroomodisha.com/pkl-9-bharats-inspiring-performance-helps-bengaluru-bulls-stun-u-mumba/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PKL 9: Bharat&#39;s inspiring performance helps Bengaluru Bulls stun U ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6kP0pnYaUtNemcBDUBHurm5FXUvMqUeVshv5sG8xwYF7egGZbdwmshMS8xwfGYj_iEuTYk3Qi" alt="PKL 9: Bharat&#39;s inspiring performance helps Bengaluru Bulls stun U ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bengaluru: U Mumba were in a fantastic position at 24-11 at the end of the first half, but Bengaluru Bulls&#39; raider Bharat put up a stupendous performance&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/others/pro-kabaddi-league-bharat-s-inspiring-performance-helps-bengaluru-bulls-stun-u-mumba-101666454477735.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pro Kabaddi League: Bharat&#39;s performance helps Bengaluru Bulls ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSGmebx5ChSJ4mOZPiy27rrtGYI_rNaBEBR0iv0uxcthgguF1TXxVb9jolwq7IiIHIwwnVc3fhW" alt="Pro Kabaddi League: Bharat&#39;s performance helps Bengaluru Bulls ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bharat reduced the U Mumba side to two players before the Bulls inflicted another all out to seal a comprehensive victory.</p></div>
            </div>
        </a><a href='https://www.firstpost.com/sports/pro-kabaddi-league-2022-bengaluru-bulls-down-u-mumba-jaipur-pink-panthers-gujarat-giants-win-11501131.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pro Kabaddi League 2022: Bengaluru Bulls down U Mumba; Jaipur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2fqHGS7QfJ4_g8VdfT95HXFhYRWRD9MrYsPy5KUPgjLwwiO6SfcIbPSNpR3jL42tiXp0F-3_F" alt="Pro Kabaddi League 2022: Bengaluru Bulls down U Mumba; Jaipur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A clinical performance by the Jaipur Pink Panthers earned them a massive 51-27 victory over Telugu Titans in the second game of the day.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/kabaddi/pro-kabaddi-league/pro-kabaddi-live-score-u-mumba-vs-bengaluru-bulls-squads-starting-7-commentary-update-stats-records-pkl-streaming-info-guman-surinder-vikash-bharat/article66043367.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>U Mumba 32-42 Bengaluru Bulls, Highlights Pro Kabaddi 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRepa6dU_hqnIFTouQIHl8iTTbwdsggOx1Rxz8tID5ZeulewbmbPLMnh_31jmtQ4Oet8CBX617W" alt="U Mumba 32-42 Bengaluru Bulls, Highlights Pro Kabaddi 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PKL 9: Follow highlights, score, commentary and statistics from the 1st match of 22nd October of the Pro Kabaddi League between U Mumba and Bengaluru Bulls&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/other-sports/u-mumba-vs-bengaluru-bulls-pkl-live-streaming-when-and-where-to-watch-pro-kabaddi-league-season-9-live-coverage-on-live-tv-online-2525467.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>U Mumba vs Bengaluru Bulls PKL Live Streaming: When and Where ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSvu0qHXY8kgrKmckLEdZGUsk0UkoS5qGpFC5_9cu8dfEaKOmzFi6R_kiO0i5jWCKeoLelECIts" alt="U Mumba vs Bengaluru Bulls PKL Live Streaming: When and Where ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Know when, where, and how to watch the live streaming of the Pro Kabbadi League Season 9 match between U Mumba and Bengaluru Bulls.</p></div>
            </div>
        </a><a href='https://www.firstpost.com/sports/pro-kabaddi-2022-live-score-and-updates-u-mumba-face-bengaluru-in-first-game-11500461.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pro Kabaddi 2022, Highlights: Bengaluru Bulls beat U Mumba; Pink ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzLunVRKA-d9yv7aT6qWSz7SGLdls-BtWLnCQWF7r4Uj1NShu6Z3JVbnnCqcw9SHm2EUVMRy2x" alt="Pro Kabaddi 2022, Highlights: Bengaluru Bulls beat U Mumba; Pink ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pro Kabaddi 2022, Highlights: U Mumba and Haryana Steelers suffered defeatswhile Jaipur Pink Panthers notched up their fifth win to go top of the table.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/pkl-2022-live-in-form-bengaluru-bulls-set-to-lock-horns-with-u-mumba-in-pro-kabaddi-league-2022-follow-bengaluru-bulls-vs-u-mumba-live-updates/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PKL 2022 LIVE: Bengaluru Bulls defeat U Mumba in Pro Kabaddi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3bck6TeOdFv8ixPZAgNkehVN01Bbc5YSFyfYeeKZb-daed3La6o6s_h_hxZb0rY3NqXI4Y92U" alt="PKL 2022 LIVE: Bengaluru Bulls defeat U Mumba in Pro Kabaddi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PKL 2022 Highlights: Bengaluru Bulls clinch terrific come-from-behind victory against U Mumba in Pro Kabaddi League 2022 - Check Highlights.</p></div>
            </div>
        </a><a href='https://sportsmintmedia.com/bengaluru-bulls-appoint-dhaba-as-official-restaurant-partner/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengaluru Bulls appoint Dhaba as official restaurant partner ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS1RuKimoWnKNlxvi1zxEO_0DkfNiRnaKnEoe9RroHUz-KMDFMUAXsk0Is_TG4V74EA-8ivIhYB" alt="Bengaluru Bulls appoint Dhaba as official restaurant partner ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Pro Kabaddi League (PKL) team, Bengaluru Bulls, has signed a new partnership with a Delhi-based food outlet, Dhaba.</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/sports/mum-vs-blr-pro-kabaddi-league-dream-11-prediction-fantasy-tips-for-u-mumba-vs-bengaluru-bulls-match-article-95032284'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MUM VS BLR Pro Kabaddi League Dream 11 prediction: Fantasy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRw43m5inboXErFaGIH7wZBnUy4rMbBQyIuO52_mtr8yw3SLMN9qTlDij7LIuk5_2P13VHaP0ce" alt="MUM VS BLR Pro Kabaddi League Dream 11 prediction: Fantasy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>U Mumba and Bengaluru Bulls are placed 6th and 5th in the points table with an equal score of 16 points but with a difference in score points of -1 and 8&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportskeeda.com/kabaddi/pro-kabaddi-2022-u-mumba-vs-bengaluru-bulls-who-will-win-today-s-pkl-match-33-telecast-details'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pro Kabaddi 2022, U Mumba vs Bengaluru Bulls: Who will win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3W1mEaBD8X7a0B4s9nRrzBhe_9-4bpgmz5DesvXgSKH2rPB2ahTpcdR5z4x-VTwJ1LFQkm4CP" alt="Pro Kabaddi 2022, U Mumba vs Bengaluru Bulls: Who will win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>U Mumba will lock horns with the Bengaluru Bulls in the 33rd match of the Pro Kabaddi League 2022 on Saturday (22nd October). Let&#39;s take a look at the U&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}