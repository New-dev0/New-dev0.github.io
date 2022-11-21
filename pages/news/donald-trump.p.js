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
            <Image width={800} height={500} src="https://www.bizzbuzz.news/h-upload/2022/11/20/1619501-trump.jpg" alt="Donald Trump"/>
            <h3>Recent News</h3>
            <a href='https://www.bizzbuzz.news/industry/donald-trump-back-on-twitter-1180879'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump back on Twitter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRDQI7Q04I8ZFvDlwqifeT3HZGiaH_LTYz3n7hcNBpnNnhnYIwXrvPzx85V0dMJjFH1rOXnQSLn" alt="Donald Trump back on Twitter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Based on a poll, Twitter CEO Elon Musk on Sunday announced that former US President Donald Trump has been allowed to rejoin the micro-blogging platform.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/tech/technology/donald-trump-snubs-twitter-after-elon-musk-announces-account-reactivation/articleshow/95634182.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump snubs Twitter after Elon Musk announces account ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-alX0xZ4QRbQdUqZ7OSUKQ2jIy9LtWdQfpTc2xCsoietVHlzfZJrVGq3YXDVQSIDjyjx5bWqI" alt="Donald Trump snubs Twitter after Elon Musk announces account ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump said he would stick with his new platform Truth Social, the app developed by his Trump Media &amp; Technology Group (TMTG) startup, which he said&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/photo-gallery/technology/social-network/donald-trump-scam-in-twitter-followers-number-of-followers-different-in-devices'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump: ट्रंप के ट्विटर फॉलोअर्स में घोटाला? डिवाइस में अलग ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTr-1DUvqS9DLZ2_Zjj3T3FAqKLxeUZTijgesWHQkaNdVjW2vFMPe-Eg0EGtwiEOzI-VUGXLyfw" alt="Donald Trump: ट्रंप के ट्विटर फॉलोअर्स में घोटाला? डिवाइस में अलग ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>अमेरिका के पूर्व राष्ट्रपति डोनाल्ड ट्रंप की ट्विटर पर वापसी हो गई है। ब्लू टिक के साथ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.opindia.com/2022/11/elon-musk-donald-trump-twitter-account-reinstated/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump is back on Twitter, 22 months after he was ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQFo-leI24pi4PunSD22xAX9tI1h7aqbibqG0-j2EXGcwVSrM_thK2JvIfSGFE-aPDuhXyt_t6b" alt="Donald Trump is back on Twitter, 22 months after he was ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former US President Donald Trump&#39;s Twitter account reinstated after people voted in favour of bringing him back on microblogging website | OpIndia News.</p></div>
            </div>
        </a><a href='https://www.theatlantic.com/ideas/archive/2022/11/elon-musk-donald-trump-twitter/672195/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk and Trump&#39;s Terrifically Stupid Return to Twitter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSb7wvp03eoAM-11D9LnpCAqSTg7mDHFP42NH6X3_4cr8PZM2UdcBwApYhCqgQyhnEuOvFxJG_X" alt="Elon Musk and Trump&#39;s Terrifically Stupid Return to Twitter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Like the monster miraculously resuscitated to terrorize the heroes in a horror-movie sequel, Donald Trump is back. No, I&#39;m not talking about his November 15&nbsp;...</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/latest/world/story/donald-trump-to-be-back-on-twitter-announces-elon-musk-after-poll-353457-2022-11-20'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump to be back on Twitter, announces Elon Musk after poll</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQz8ycFg8BG_jvCkStaEL7NdBetiQ1wuVBaTI2rTICsa6mrV-4uJuUOQc1jFixvkBBDCOMzndZb" alt="Donald Trump to be back on Twitter, announces Elon Musk after poll" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter had suspended Trump&#39;s account two days after a mob backing Trump stormed the US Capitol on January 6, 2021.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/johnbbrandon/2022/11/20/elon-musk-reinstated-donald-trump-on-twitter-now-the-real-drama-begins/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk Reinstated Donald Trump On Twitter. Now The Real ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSyPj_le3_P3m8Tc0SwdXQpN4Vi0NZMzWy6AFCXz8FdPrm7Ur2L4SOVBGQyFqzstGHMuUQZF6WR" alt="Elon Musk Reinstated Donald Trump On Twitter. Now The Real ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former President “rocked the vote” and was a significant favorite among Twitter users, most of whom voted because they follow Musk.</p></div>
            </div>
        </a><a href='https://www.jagran.com/technology/tech-news-donald-trump-twitter-followers-are-increasing-at-the-speed-of-5g-23216152.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump: 5G की स्पीड से बढ़ रहे हैं ट्रंप के ट्विटर पर फॉलोवर्स ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGUlMeaoODHZ57IE2uaps_ZXnhfM_BKCoWA-DSd8AimY9IgglxQUtcTR6QWvK5spJ8t2xu9U5A" alt="Donald Trump: 5G की स्पीड से बढ़ रहे हैं ट्रंप के ट्विटर पर फॉलोवर्स ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump का ट्विटर अकाउंट बैन के बाद फिर से शुरू हो चुका है। लेकिन बड़ी बात यह है कि&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/tech-and-auto/donald-trump-twitter-account-to-be-restored-by-elon-musk-after-holding-polls-on-twitter-sbh'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump की दोबारा Twitter पर एंट्री, Elon Musk ने बताई अकाउंट ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR65LeM6DDissPnuXLSa3MsQLYj0i7nsHSqL4YlbfzZACTy0THdGg3tzvK1gQnP0pDCIeqpEkGX" alt="Donald Trump की दोबारा Twitter पर एंट्री, Elon Musk ने बताई अकाउंट ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump Twitter Account: Elon Musk ने अमेरिका के पूर्व राष्ट्रपति Donald Trump का अकाउंट दोबारा से Twitter&nbsp;...</p></div>
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