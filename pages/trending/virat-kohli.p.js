import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Virat Kohli</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Virat Kohli"/>
        <meta name="description" content="Trending News about Virat Kohli" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Virat Kohli</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-94446560,width-1070,height-580,imgsize-974819,overlay-economictimes/photo.jpg" alt="Virat Kohli"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/new-updates/watch-virat-kohlis-celebration-with-rohit-sharma-tells-the-story/articleshow/94446190.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Virat Kohli&#39;s celebration with Rohit Sharma tells the story</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzcF6Y7bd3gu-nxo2PwXH_t1_-wjhFYGcuR3KNZXQi_bMKMJFeuEPXU2FoEtcu2tWCSC_0sWYr" alt="Watch: Virat Kohli&#39;s celebration with Rohit Sharma tells the story" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Virat Kohli played a major role in India chasing down Australia&#39;s total in the series decider at Hyderabad.</p></div>
            </div>
        </a><a href='https://www.royalchallengers.com/rcb-cricket-news/news/i-am-working-hard-on-my-process-virat-kohli'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I am working hard on my process: Virat Kohli</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFvbdVPtdw0sGT932dxBCX952CCikpIQ7fUVobOGwy_y8z9LYLCVP5-BCMpXcRKJgVWcUZbn63" alt="I am working hard on my process: Virat Kohli" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After a silent couple of games, Virat Kohli roared back to life in the series decider against the Aussies as the former Indian skipper pumped out a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/photo-gallery/cricket/cricket-news/sanju-samson-deepak-hooda-and-sreysh-iyer-career-was-destroyed-due-to-virat-kohli'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Virat Kohli: विराट कोहली की वजह से खत्म हो रहा इन तीन खिलाड़ियों का ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT7YnsZQC_sNBnt0rmFjj-2V7uEmRx6s3Xcd2VKfi7DMz_FxzJTAAIERiiLKj6_7LpbbDO5RMty" alt="Virat Kohli: विराट कोहली की वजह से खत्म हो रहा इन तीन खिलाड़ियों का ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>लगभग पिछले 10 वर्षों से विराट कोहली भारतीय टीम के नियमित सदस्य हैं। वह लगातार भारत को मैच&nbsp;...</p></div>
            </div>
        </a><a href='https://english.jagran.com/cricket/virat-kohli-rohit-sharmas-reaction-to-indias-last-over-win-is-epic-watch-10050225'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Virat Kohli, Rohit Sharma&#39;s Reaction To India&#39;s Last Over Win Is Epic ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfoG4M-UVaujuJcoUq-rj3B7t52A0Oxlsf_LRArj_4-n9HuoBjGIWAZM0SLsCT7vIyu5Ou0-EI" alt="Virat Kohli, Rohit Sharma&#39;s Reaction To India&#39;s Last Over Win Is Epic ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The celebration of Rohit and Virat is going viral on social media as both the batters were seen shouting and smiling while patting each other&#39;s back after&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/watch-rohit-sharma-and-virat-kohli-break-into-wild-celebration-after-hardik-pandya-hits-winning-boundary-8173171/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Rohit Sharma and Virat Kohli break into wild celebration after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3hEyin1K5N3PFDnGiAVKSY6e2fy46Ys-pxcwJlKDQLFz1tc30vpnEgcaAeKmT8KD2LpEhrNIo" alt="Watch: Rohit Sharma and Virat Kohli break into wild celebration after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India beat Australia by six wickets in Sunday&#39;s third and final T20I in Hyderabad. With the win, India sealed their first home T20 series victory against&nbsp;...</p></div>
            </div>
        </a><a href='https://www.firstpost.com/firstcricket/sports-news/watch-virat-kohli-rohit-sharmas-wild-celebrations-as-india-win-t20i-series-against-australia-11332281.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Virat Kohli, Rohit Sharma&#39;s epic celebration as India beat Australia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSXJTN20yBpHMTfBw8pRjvKahUJQjAhk8C3deA2-unRXRK97BtlNWYvI-bfkfGg8YKRDsBmirrR" alt="Virat Kohli, Rohit Sharma&#39;s epic celebration as India beat Australia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Virat Kohli and Rohit Sharma celebrated India&#39;s T20I series win over Australia with an epic reaction that has gone viral on Twitter.</p></div>
            </div>
        </a><a href='https://www.jagran.com/cricket/bouncer-virat-kohli-king-kohli-is-the-most-successful-run-chase-master-of-t20i-and-he-has-scored-the-most-runs-in-the-world-with-an-average-of-more-than90-23099264.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Virat Kohli: T20I के रन चेज मास्टर हैं किंग कोहली, 90 से ज्यादा की औसत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTeJ_ndsmNmSVRN6FmBuUUJe9-ZGxVQ3-0X_pYsMfgJyP5jmJ48A-6A7dUG2AaddYCKDOVD1bba" alt="Virat Kohli: T20I के रन चेज मास्टर हैं किंग कोहली, 90 से ज्यादा की औसत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>विराट कोहली टी20 इंटरनेशनल क्रिकेट में सफल रन चेज करते हुए सबसे ज्यादा रन बनाने वाले&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/virat-kohli-breaks-rahul-dravid-record-become-the-2nd-indian-with-most-runs-2224118'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Virat Kohli ने राहुल द्रविड़ को पछाड़ा, सचिन के बाद सबसे ज्यादा रन बनाने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-e-g0Mj-BvlzyuFFpFXYvsqt6vb87pxnIV9fjj4KNrbW0g_TLZyT7GGeQpEmKLiRI6nSiIA0H" alt="Virat Kohli ने राहुल द्रविड़ को पछाड़ा, सचिन के बाद सबसे ज्यादा रन बनाने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>विराट कोहली ने अपनी 63 रन की पारी के साथ बेहद ही खास मुकाम हासिल किया है.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/cricket/ind-vs-aus-3rd-t20i-anushka-sharma-cant-keep-calm-as-chasemaster-virat-kohli-hits-another-fifty-posts-this-message-for-husband-check-2514640.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anushka Sharma posts THIS for husband Virat Kohli after Team ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1ylEh7CQ_seJARuR4SyLrvVmMt5yllCZq9yFQLaiMcFgkP0nGdGgcGbg9Ytqf2GEiFyrsMh4h" alt="Anushka Sharma posts THIS for husband Virat Kohli after Team ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Now, Kohli has 16004 runs across T20I and ODI formats. These runs have come in 369 matches in white-ball cricket across 352 innings at an average of 55.95.</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/virat-kohli-rohit-sharma-hug-celebration-india-vs-australia-t20-viral-video-tspo-1544549-2022-09-26'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Virat Kohli-Rohit Sharma: फिफ्टी पर शाबाशी, जीत पर झप्पी... रोहित ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxGk7LCM3LcCixf1nIJgii0s9qWAohUTfDguYDgqiRVoNj7zcpRM4-3je0nrxnM6kC7dCMhMw7" alt="Virat Kohli-Rohit Sharma: फिफ्टी पर शाबाशी, जीत पर झप्पी... रोहित ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारतीय टीम ने ऑस्ट्रेलिया को तीसरे टी-20 में 6 विकेट से हराकर सीरीज़ अपने नाम कर ली है.</p></div>
            </div>
        </a>
        </Template></>;
}