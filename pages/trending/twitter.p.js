import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Twitter</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Twitter"/>
        <meta name="description" content="Trending News about Twitter" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Twitter</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/10/28/600x338/Twitter-Musk_1666937825735_1667001270693_1667001270693.JPG" alt="Twitter"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/news/world/twitter-will-form-content-moderation-council-for-musk-11667000350249.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Twitter will form content moderation council for…&#39;: Musk | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTvJZCwsmzF2yUnlm61_Pp1iRq6h8b5G2dyW4Jm5S6ISXSmQyUFF0ZcuZse7Ab9nj1gQv-r-KQhig" alt="&#39;Twitter will form content moderation council for…&#39;: Musk | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Tesla CEO also instilled suspicion amongst social media users when he tweeted on his Twitter &#39;Let the good times roll&#39; shortly after he acquired the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/technology-63402338'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk takes control of Twitter in $44bn deal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRx8pyvTkdOOX8km9RdtrYmGYHf1QntPr1_MDvhctRCFmOvPy956tqIBI5KWq3PAZiSNZhH6SX6" alt="Elon Musk takes control of Twitter in $44bn deal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The New York Stock Exchange says the merger is &quot;effective&quot; as the billionaire axes executives.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/business/elon-musk-says-twitter-will-create-content-moderation-council-101666981947671.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk says Twitter will create content moderation council</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQI4mxwOD8Nu0FuqlwTMu6vDJEbDyfv-xkWflDuREICJzpMoF0D7dx8fR-9ysSOuBo0X5yHLMNnSw" alt="Elon Musk says Twitter will create content moderation council" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Musk said that no major content decisions or account reinstatements will happen before the council convenes.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/technology/2022/oct/28/elon-musk-twitter-hate-speech-concerns-stock-exchange-deal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk completes Twitter takeover amid hate speech concerns</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTTkOdaU10kTFQjn1Auo0CtOK8dr_e3g93lNbZXRm8Zb8VwBBEf8QKROo8IypXj773mQUEdHeO-" alt="Elon Musk completes Twitter takeover amid hate speech concerns" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shares delisted and top execs reportedly fired as world&#39;s richest man closes deal to buy social media platform.</p></div>
            </div>
        </a><a href='https://newsonair.com/2022/10/28/the-bird-is-free-what-next-for-twitter-as-musk-finalises-44-billion-deal-fires-top-executives/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“The Bird is Free,” What next for Twitter as Musk finalises 44 Billion ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQXHAKs1tRvdLDwdglMqISYXqeSvbS5ytnvIb8WMZil0dplObOrf28TG0NwJAHUJxJyzwAa5pH9PQ" alt="“The Bird is Free,” What next for Twitter as Musk finalises 44 Billion ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The long-drawn journey of the Twitter takeover by Tesla CEO Elon Musk took a new turn on 28 October 2022 when the SpaceX owner finalised his $44-billion&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndtv.com/world-news/after-elon-musk-takeover-twitter-users-test-free-speech-limits-3471115'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>After Elon Musk Takeover, Twitter Users Test Free Speech Limits</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7eEfxK_J_dsirz2SJpNklVWyqUhn4_M0IGSmbT0_I3eEmgTifFf9FnRGIVc3TknBbG4C9BJzf" alt="After Elon Musk Takeover, Twitter Users Test Free Speech Limits" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter users wasted no time Friday testing the limits of free speech on the platform under new owner Elon Musk, with posts questioning transgender identity&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/world/twitter-ceo-parag-agarwal-will-get-42-to-50-million-dollars-as-compensation'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter: ट्विटर से निकाले गए सभी अधिकारी होंगे मालामाल, पराग अग्रवाल को ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQxXqphEfB_3mK7vdB3Ww0WchHyK6MpUSi8OYiaThwtTBWOJ5tz6J7l15t3-qqsSZk-RLuUi6b1" alt="Twitter: ट्विटर से निकाले गए सभी अधिकारी होंगे मालामाल, पराग अग्रवाल को ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>दुनिया के सबसे अमीर और टेस्ला मोटर के मालिक एलन मस्क ने ट्विटर को खरीदने के तुरंत बाद&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/world/story/elon-musk-twitter-deal-explained-analysis-detail-ntc-1564226-2022-10-28'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>चिड़िया आजाद हुई या एक आदमी के पिंजरे में कैद? क्या Twitter से दुनिया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRN0semSP-f83UBh5ka2OuTjiuvhdyTKSs1383gDnm4wQgQUIdhTGVVQSNOvwMK78HJglwTbJeF" alt="चिड़िया आजाद हुई या एक आदमी के पिंजरे में कैद? क्या Twitter से दुनिया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>एलन मस्क ने ट्विटर को खरीदते ही कई बड़े वादे कर दिए हैं. वे कह रहे हैं कि अब चिड़िया&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/world/elon-musk-twitter-deal-parag-agarwal-and-other-top-executives-set-to-exit-will-get-100-million-dollar-payout-2247700'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter Deal: कंपनी को टर्मिनेट अधिकारियों को देने पड़ेंगे 100 मिलियन ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1MFuQB80g9y_35WhCDWxGtkusCTeIeZWN5G3xiPZVwr6QCtOScDPFqMciJvr_jUh1BoYT9bke" alt="Twitter Deal: कंपनी को टर्मिनेट अधिकारियों को देने पड़ेंगे 100 मिलियन ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elon Musk News: पराग अग्रवाल को कंपनी के सीईओ के रूप में नियुक्त किया था. अब उन्हें 12 महीनों&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.moneycontrol.com/news/world/elon-musk-to-pay-over-usd-200-million-as-severance-to-twitter-s-fired-top-executives-including-parag-agrawal-853981.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter के 3 अधिकारी टर्मिनेट होकर भी हो जाएंगे मालामाल, Elon Musk को ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTF1rqwJAhgt0LXDIeUpnqJqJ-r0JzXi_wKFxL46g_zzdI-Ax8kAz9b7N4kj4atSPAwOpdsNqA4" alt="Twitter के 3 अधिकारी टर्मिनेट होकर भी हो जाएंगे मालामाल, Elon Musk को ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इस प्रकार Vijaya Gadde को ट्विटर से सबसे ज्यादा 7.4 करोड़ डॉलर मिलेंगे। Parag Agrawal और Ned Segal को&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}