import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>MS Dhoni</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,MS Dhoni"/>
        <meta name="description" content="Trending News about MS Dhoni" /></Head><Template>
            <h1 style={{fontSize: "30"}}>MS Dhoni</h1>
            <Image width={800} height={500} src="https://navbharattimes.indiatimes.com/photo/msid-94433607,imgsize-27366/pic.jpg" alt="MS Dhoni"/>
            <h3>Recent News</h3>
            <a href='https://navbharattimes.indiatimes.com/sports/cricket/cricket-news/ms-dhoni-launches-oreo-biscuits-and-describes-connection-with-world-cup/articleshow/94433609.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MS Dhoni press conference: दुनिया लगा रही थी संन्यास का अंदाजा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQg60tKEbaWhQ57AZnTCAqfJoDIk5MYtfiWHqrb_eOl1vh6hSl1VFrSY7egiO71aS8nQOkbhQ70" alt="MS Dhoni press conference: दुनिया लगा रही थी संन्यास का अंदाजा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mahendra Singh Dhoni BIG Announcement: लॉन्चिंग के दौरान धोनी अपनी हेयरस्टाइल भी 2011 की तरह ही सेट करके&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/ms-dhoni-live-announcement-oreo-fans-relieved-csk-captian-no-retirement-world-cup-tspo-1544153-2022-09-25'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MS Dhoni: करना था &#39;बड़ा ऐलान&#39; लेकिन लाइव में बिस्कुट प्रमोट कर चले गए ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRAuZq_mVD2zGjYo9TOnm4cnaU-fQVwlJG_Sau79Y_Ygjx_tJRreDzlR3SL9W4js5OerkJyznoe" alt="MS Dhoni: करना था &#39;बड़ा ऐलान&#39; लेकिन लाइव में बिस्कुट प्रमोट कर चले गए ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>एमएस धोनी के आईपीेएल रिटायरमेंट को लेकर चल रहे अटकलों पर ब्रेक लग गया है.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/new-updates/well-played-captain-cool-ms-dhoni-surprises-his-fans-yet-again/articleshow/94436258.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Well played &#39;Captain Cool&#39;: MS Dhoni surprises his fans, yet again</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4e9bMXI0GbnBTQ0Ec__uYDM6aMuZEXUSFVKYc3SYT-VnMmRs7HeLpjC263Qd-ZtdNNcJtwRiE" alt="Well played &#39;Captain Cool&#39;: MS Dhoni surprises his fans, yet again" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The latest message has had his fans in a tizzy as many expected that Dhoni might announce his retirement from franchise cricket also.</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-live-ms-dhoni-announcement-updates-ms-dhoni-today-announcement-retirement-from-csk-live-updates-7131862.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MS Dhoni Announcement Updates : CSK से संन्यास लेने की रिपोर्ट ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQksbY75Yhu17UNtT2BHFENd73Fl-mjtL3A2Ua1lraquvFK1NXEStbsiskQruOT_mmt1fkTHfy4" alt="MS Dhoni Announcement Updates : CSK से संन्यास लेने की रिपोर्ट ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LIVE MS Dhoni Announcement Updates भारतीय टीम के दिग्गज कप्तान रहे एमएस धोनी को लेकर सोशल मीडिया पर चल&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/cricket/headlines-ms-dhoni-told-interesting-thing-about-wicketkeeping-dhoni-said-he-gave-me-freedom-to-do-wicketkeeping-in-his-own-style-23097212.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>विकेटकीपिंग को लेकर MS Dhoni ने बताई दिलचस्प बात, आखिर किस खिलाड़ी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9vbNBJVt35saXqsIUkkqNmadx6Zcq_nFmnQqLkkqwzkbMUKtQTaMsviqfRQon2P10N9KjHGm6" alt="विकेटकीपिंग को लेकर MS Dhoni ने बताई दिलचस्प बात, आखिर किस खिलाड़ी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>विकेट के पीछे जिस गति से धौनी स्टंपिंग करते थे और किसी भी मुश्किल कैच को जिस आसानी से&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/cricket/ms-dhoni-stumps-everyone-by-making-this-announcement-fans-say-he-has-scammed-us-again-2514101.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MS Dhoni STUMPS everyone by making THIS announcement, fans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ9IwgeEMAPMdeQK78sKHixChKE4PyRRzJFhrgNTtE140tJP72QgI4HazeSFN9fj0TJJy_JI3Po" alt="MS Dhoni STUMPS everyone by making THIS announcement, fans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Is MS Dhoni retiring from IPL? All of the build up to his Facebook LIVE turned out to be a marketing campaign and relieved fans blamed Dhoni for giving them&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/hindi/trending/ms-dhoni-launches-oreo-biscuit-will-continue-to-play-in-ipl-for-chennai-super-kings-97248'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MS Dhoni: फैंस को लगा अब IPL से भी संन्यास ले लेंगे महेंद्र सिंह धोनी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTyY8dFrjThPgGRZupzC8j9GgXwHXska-R91G9E1xchGG41p0QcYhA7CsdgLp7M8quOrJsCjr4F" alt="MS Dhoni: फैंस को लगा अब IPL से भी संन्यास ले लेंगे महेंद्र सिंह धोनी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MS Dhoni Oreo: टीम इंडिया के पूर्व कप्तान महेंद्र सिंह धोनी (MS Dhoni) ने शनिवार, 24 सितंबर को&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/sports/cricket/ms-dhoni-announced-a-campaign-with-oreo-fans-relieved-as-csk-captain-no-on-retirement/1366761'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MS Dhoni: बड़ी खबर के चक्कर में टकटकी लगाए बैठे थे लोग, महेंद्र सिंह ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTyPDyzcjkRrSGvvFhy4kK61uHfrvLTYUTDEesc_6B5BaDBwbbPkvtXtXfTXIcXDpK0FdgmEzVB" alt="MS Dhoni: बड़ी खबर के चक्कर में टकटकी लगाए बैठे थे लोग, महेंद्र सिंह ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारत को अपनी कप्तानी में दो बार वर्ल्ड चैंपियन बनाने वाले दिग्गज विकेटकीपर महेंद्र&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/live/livesports-ms-dhoni-facebook-live-today-25th-september-2022-ipl-retirement-or-any-big-surprise-jst'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MS Dhoni Facebook Live: बड़ी खबर को तैयार बैठे लोगों को महेंद्र सिंह ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSj0jdPb801QWt8qFGId3fMySaNrCrALqKRhgknQul9-f_L4WUZlUJK5Oa2OQ5NxIX-cAuBB04R" alt="MS Dhoni Facebook Live: बड़ी खबर को तैयार बैठे लोगों को महेंद्र सिंह ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MS Dhoni Facebook Live Updates: भारत के पूर्व कप्तान महेंद्र सिंह धोनी (MS Dhoni) के रविवार (25 सितंबर) को&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/cricket/story/ms-dhoni-ends-suspense-features-in-new-advertisement-for-biscuit-brand-2004545-2022-09-25'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MS Dhoni ends suspense, features in new advertisement for biscuit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTD7ClbMb4fy9Tmxv3lOMlFqx6jWbeH9iuG1jf04aZb2Pt36FhPf6zzvQYiLm0anOEULXeHEWy2" alt="MS Dhoni ends suspense, features in new advertisement for biscuit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MS Dhoni ended a suspense, featuring in a new advertisement for the biscuit brand. Regarded as one of the best wicket-keepers in the world, Dhoni kept his&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}