import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Donald Trump</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Donald Trump"/>
        <meta name="description" content="Trending News about Donald Trump" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Donald Trump</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/Election_2024_Republicans_93806-109fe.jpg" alt="Donald Trump"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/explained/explained-sci-tech/donald-trump-twitter-account-restored-explained-8280478/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Donald Trump&#39;s Twitter account has been restored</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnZXwUlTOT0nIYfHSoVFz706FFhS1laoojqLCeKtGtN67m2q0nXhQQL5ewjf2tAfZKCRD6lDLH" alt="Why Donald Trump&#39;s Twitter account has been restored" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elon Musk recently asked if Trump&#39;s account should be reinstated via a Twitter poll, where a slim majority of 51.8 per cent voted &#39;Yes&#39;.</p></div>
            </div>
        </a><a href='https://www.bizzbuzz.news/industry/donald-trump-back-on-twitter-1180879'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump back on Twitter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRDQI7Q04I8ZFvDlwqifeT3HZGiaH_LTYz3n7hcNBpnNnhnYIwXrvPzx85V0dMJjFH1rOXnQSLn" alt="Donald Trump back on Twitter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Based on a poll, Twitter CEO Elon Musk on Sunday announced that former US President Donald Trump has been allowed to rejoin the micro-blogging platform.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/magazines/panache/elon-musk-reinstates-donald-trumps-twitter-account-paytm-boss-has-this-to-say/articleshow/95653508.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk reinstates Donald Trump&#39;s Twitter account; Paytm boss ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJOSA-ef6z5RL029LxPnavZR0ENWPchcNtKOZLQS7Q8WMpfUXrTAAt4uypr5AMSKEOPBofUXYG" alt="Elon Musk reinstates Donald Trump&#39;s Twitter account; Paytm boss ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Musk started a poll, titled &#39;Reinstate former President Trump&#39;, during the weekend.</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/technology/news/story/i-dont-see-any-reason-for-it-donald-trump-refuses-to-tweet-after-elon-musk-brings-him-back-on-twitter-353494-2022-11-21'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;I don&#39;t see any reason for it&#39;: Donald Trump refuses to tweet after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTcySKPsA2s5asrebqfoab09uRRQvsYxdhScnIrA6fdxTN8IKjSc2Pay7jCjAaECk6PAYl9CR6t" alt="&#39;I don&#39;t see any reason for it&#39;: Donald Trump refuses to tweet after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter chief Elon Musk re-instated Donald Trump on the social media platform past weekend. Elon Musk decided to bring back the former president of US after&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/world/donald-trump-rebukes-twitter-after-elon-musk-announces-reactivation-of-ex-president-account'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump: &#39;ट्विटर&#39; का नाम सुनते ही बुरी तरह झल्लाए ट्रंप, कहा- मुझे ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSMtd6eV-usYMq6O0oq3OOX62SJK-Ih_7TeWaF-7fPV9x9MaHxhVM2TQqno3tzQEXrD8uqBIRC" alt="Donald Trump: &#39;ट्विटर&#39; का नाम सुनते ही बुरी तरह झल्लाए ट्रंप, कहा- मुझे ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump Rebukes Twitter after Elon Musk announces reactivation of ex-president accountकरीब 22 महीने बाद ट्विटर अकाउंट बहाल&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/international/ban-reversed-but-donald-trump-to-stay-away-from-twitter/article66163420.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ban reversed, but Donald Trump to stay away from Twitter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTtF7TiUdWk5vQuqZFYCOtgXiNAM3mpQN2r_37EowpL0vgPiqePxQY6Ac4tl2mS6pN-C__BTe4" alt="Ban reversed, but Donald Trump to stay away from Twitter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump, who on Tuesday launched a bid to regain the White House in 2024, praised Elon Musk and said he had always liked him.</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/world/donald-trump-confirms-he-will-not-return-on-twitter-elon-musk-2263785'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter पर वापसी नहीं करेंगे डोनाल्ड ट्रंप, बोले- मेरे पास कोई वजह नहीं, यहां ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRyZ6RH4naXN2kAPp2-kfL2hiXuseMGLTSkzjh6joFjAZnduxvdonmKCkrxNWm_jxEn9-T5lAA4" alt="Twitter पर वापसी नहीं करेंगे डोनाल्ड ट्रंप, बोले- मेरे पास कोई वजह नहीं, यहां ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elon Musk ने अमेरिका के पूर्व राष्ट्रपति डोनाल्ड ट्रंप के ट्विटर अकाउंट को रिस्टोर कर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thedispatch.in/elon-musk-asks-twitter-users-to-vote-on-reinstatement-of-donald-trump/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk asks Twitter users to vote on reinstatement of Donald ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQL8ZOeY9PlOO87mr_JVRZO1ReTN6d_E-PP2zolYUmzfYj-vzLbmxRhX50mWkHiKV_VagF4XJa2" alt="Elon Musk asks Twitter users to vote on reinstatement of Donald ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>San Francisco: Elon Musk posted a poll on Twitter on Friday evening asking users to vote on whether former U.S. President Donald Trump, who was banned from&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/technology/tech-news-donald-trump-twitter-followers-are-increasing-at-the-speed-of-5g-23216152.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump: 5G की स्पीड से बढ़ रहे हैं ट्रंप के ट्विटर पर फॉलोवर्स ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGUlMeaoODHZ57IE2uaps_ZXnhfM_BKCoWA-DSd8AimY9IgglxQUtcTR6QWvK5spJ8t2xu9U5A" alt="Donald Trump: 5G की स्पीड से बढ़ रहे हैं ट्रंप के ट्विटर पर फॉलोवर्स ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump का ट्विटर अकाउंट बैन के बाद फिर से शुरू हो चुका है। लेकिन बड़ी बात यह है कि&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/technology/tech-news/story/donald-trump-twitter-account-restore-by-elon-musk-people-are-sharing-funny-memes-ttec-1579522-2022-11-20'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RRR स्टाइल में Donald Trump के ट्विटर अकाउंट की वापसी तो किसी ने बना ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSMeKF7VOmUTi2fDY8fk7UiospOrbwJ0rc6k8tsewBE4Nxin175AAQvkzyubMoR5zNFC85VKb3F" alt="RRR स्टाइल में Donald Trump के ट्विटर अकाउंट की वापसी तो किसी ने बना ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump के ट्विटर अकाउंट को Elon Musk ने रिस्टोर कर दिया है. इसको लेकर एक पोल भी करवाया गया&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}