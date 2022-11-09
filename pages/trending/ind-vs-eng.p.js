import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>IND vs ENG</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,IND vs ENG"/>
        <meta name="description" content="Trending News about IND vs ENG" /></Head><Template>
            <h1 style={{fontSize: "30"}}>IND vs ENG</h1>
            <Image width={800} height={500} src="" alt="IND vs ENG"/>
            <h3>Recent News</h3>
            <a href='https://www.livehindustan.com/cricket/story-t20-world-cup-2022-2nd-semifinal-ind-vs-eng-mark-wood-likely-to-be-ruled-out-from-semi-final-match-against-india-7324341.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs ENG : सेमीफाइनल से पहले इंग्लैंड चोटों से परेशान, टूर्नामेंट में ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRCdni_RI0XXih0LCOMsj7jaJe9cDI6qhvDvQnIa_82qXgzDWz7bfNrOJ7OzECw4TqFqoN-5h7K" alt="IND vs ENG : सेमीफाइनल से पहले इंग्लैंड चोटों से परेशान, टूर्नामेंट में ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इंग्लैंड के तेज गेंदबाज मार्क वुड एडिलेड ओवल में भारत के खिलाफ सेमीफाइनल मुकाबले से&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-t20-world-cup-2022-mark-wood-injury-concern-for-england-ahead-of-the-semi-final-vs-india-4862671.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs ENG: भारत के खिलाफ सेमीफाइनल से पहले इंग्लैंड को दोहरा झटका ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRA_5-G2p081MqCmp6SLUzx9A7QSu7xOSOn1NIp3Q1_MUNWSdrjPLTGf7j0pq-YlVaMlz15zkie" alt="IND vs ENG: भारत के खिलाफ सेमीफाइनल से पहले इंग्लैंड को दोहरा झटका ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs England Semi Final 2022: इंग्लैंड को टी20 वर्ल्ड कप के दूसरे सेमीफाइनल में 10 नवंबर को भारत के&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/t20-world-cup-2022-2nd-semi-final-ind-vs-eng-know-who-will-replace-dawid-malan-for-england-vs-india'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs ENG: विस्फोटक फिल साल्ट या यह अनुभवी ऑलराउंडर, डेविड मलान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQb8ANUtqcnNkoo-C7ApjehzoqgPN36yj3NHGZcjfNKQHlwctcvx1STLqInkrUePcAmNZqEgvcS" alt="IND vs ENG: विस्फोटक फिल साल्ट या यह अनुभवी ऑलराउंडर, डेविड मलान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T20 World Cup 2022 2nd Semi-Final IND vs ENG Know Who will Replace Dawid Malan for England vs India: आईसीसी टी20 रैंकिंग में&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/ind-vs-eng-mark-wood-will-miss-semifinal-match-against-india-in-t20-world-cup-due-to-injury-2022-11-08-900758'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs ENG: सेमीफाइनल से पहले टीम इंडिया की &#39;बल्ले बल्ले&#39;, नहीं खेल ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTfJyRAkLRssEDgxQtBsGJzROJMM_4rbEVvlStVtzJKjbe6K63DsXGw2ZoygTIkX0XIh_xYOs--" alt="IND vs ENG: सेमीफाइनल से पहले टीम इंडिया की &#39;बल्ले बल्ले&#39;, नहीं खेल ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs ENG: टी20 वर्ल्ड कप के सेमीफाइनल में भारत और इंग्लैंड की टीमें आमने-सामने होंगी।</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/sports/cricket/ind-vs-eng-phil-salt-replace-dawid-malan-india-vs-england-t20-world-cup-2022/1431370'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs ENG: भारत-इंग्लैंड मैच से पहले हुआ बड़ा बदलाव, इस धाकड़ खिलाड़ी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQ_SQHDkChMY086HIuDG4KjjXAoA6EhcMycDtZM3_GUnupSz03vQBE0FD0JNBzF_wOvlRFMk-V" alt="IND vs ENG: भारत-इंग्लैंड मैच से पहले हुआ बड़ा बदलाव, इस धाकड़ खिलाड़ी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टीम इंडिया और इंग्लैंड (India vs England) के बीच टी20 वर्ल्ड कप 2022 (T20 World Cup 2022) का सेमीफाइनल मैच&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tv9hindi.com/photo-gallery/cricket-photos/mark-wood-suffering-from-stiff-body-india-vs-england-semi-final-t20-world-cup-2022-au244-1547609.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs ENG: सेमीफाइनल से पहले ही गिरे इंग्लैंड के 2 &#39;विकेट&#39;, अंग्रेज परेशान</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcThrSgFl64lT6BZXzZ5syrFMlP8rnREd3EhuE5-cctUQXpKxE1600BpbTBziLl71F-4pWYZJ2j1" alt="IND vs ENG: सेमीफाइनल से पहले ही गिरे इंग्लैंड के 2 &#39;विकेट&#39;, अंग्रेज परेशान" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T20 वर्ल्ड कप 2022 के दूसरे सेमीफाइनल में इंग्लैंड और भारत की टक्कर होने वाली है.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/cricket/t20-world-cup/ind-eng-semifinal-mark-wood-fitness-malan-india-vs-england/article66110829.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs ENG T20 World Cup: England sweats over Mark Wood and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0OekDbZ40r55x-A6PLqi1fGft9vEdfwyKPLwvv_ApvXNH7xXzKyEBmn4Ts4H86PqPo1N5-zRm" alt="IND vs ENG T20 World Cup: England sweats over Mark Wood and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meanwhile, Dawid Malan is set to miss the clash due to a groin injury. Phil Salt is his likely replacement.</p></div>
            </div>
        </a><a href='https://www.indiatvnews.com/sports/cricket/ben-stokes-on-suryakumar-yadav-and-virat-kohli-india-vs-england-semifinal-t20-world-cup-2022-adelaide-oval-2022-11-08-822305'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs ENG, T20 World Cup: We can try and shut Suryakumar down ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzb7YvAFGyRF7Qed0yrdhR21nr7CV7gPsLWhKKlFn-y1DWTXRGzBPUzbiY0oWXJCfPp078WWfi" alt="IND vs ENG, T20 World Cup: We can try and shut Suryakumar down ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stokes showered praise for Indian legend Virat Kohli, who he thinks has &#39;earned the right to be never written off&#39;.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/tactically-i-thought-rohit-sharma-was-jos-buttler-issues-huge-statement-ahead-of-india-vs-england-semi-final-clash-at-t20-world-cup-2022-101667897120783.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Rohit was...&#39;: Buttler issues huge statement ahead of IND vs ENG ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxj1NVsshNA2yPTcZcARtUSv1pIuNzyfzTcWEQSMBZLBlly_GoHOauvYFCYVbEM-1z6Lj1rKQV" alt="&#39;Rohit was...&#39;: Buttler issues huge statement ahead of IND vs ENG ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England&#39;s Jos Buttler has shared his views about the strong leadership style of Team India&#39;s all-format captain Rohit Sharma. India will meet England in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dnaindia.com/cricket/report-ind-vs-eng-semi-final-to-be-played-on-used-pitch-know-how-it-will-make-a-difference-3000436'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs ENG semi-final to be played on used pitch, know how it will ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTxnFmvEbvITw9CtZCvufDrFqr3Z-6-RUo5XfnsiXbHQYqDG7O5Jo36aDViZaahvDmD7UZmxjQN" alt="IND vs ENG semi-final to be played on used pitch, know how it will ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indian team will take on England in the semi-final 2 of ICC World Cup 2022 and the match will be played in Adelaide Oval cricket stadium.</p></div>
            </div>
        </a>
        </Template></>;
}