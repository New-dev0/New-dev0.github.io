import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Shyam Rajak</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Shyam Rajak"/>
        <meta name="description" content="Trending News about Shyam Rajak" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Shyam Rajak</h1>
            <Image width={800} height={500} src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/10/09/ccc520441529249978b384b3d008cf501665316211495432_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628" alt="Shyam Rajak"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/india-news/bihar-who-is-shyam-rajak-whom-tej-pratap-accused-of-abusing-know-what-happened-in-the-rjd-meeting'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bihar: कौन हैं श्याम रजक? जिन पर तेज प्रताप ने गाली देने का आरोप लगाया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Bihar: कौन हैं श्याम रजक? जिन पर तेज प्रताप ने गाली देने का आरोप लगाया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>तेज प्रताप का आरोप है कि श्याम रजक ने उनकी बहन को गाली दी। मीडिया से बातचीत में तेज&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/india/rjd-leader-shyam-rajak-faints-after-ruckus-in-meeting-of-rjd-s-national-executive-ann-2234172'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bihar Politics: राष्ट्रीय कार्यकारिणी की बैठक में बवाल के बाद आरजेडी नेता ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSFmxVzFbGyyNrt32JDwVc-Ll2iVEReIyEYSIrxfIVgfxV1kB5hO-Ey13eTFmEkFE1DCkUMFo3p" alt="Bihar Politics: राष्ट्रीय कार्यकारिणी की बैठक में बवाल के बाद आरजेडी नेता ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RJD News: बिहार सरकार के मंत्री तेज प्रताप यादव ने आरजेडी की राष्ट्रीय कार्यकारिणी में&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/bihar/patna-city-tej-pratap-said-on-angry-at-shyam-rajak-in-delhi-i-will-tell-the-status-i-will-release-the-audio-in-front-of-the-people-of-bihar-23129371.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>दिल्ली में श्याम रजक पर गुस्साए तेजप्रताप बोले-हैसियत बता दूंगा, बिहार की ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQxZzONkKtU-HKsjt6POMSCfFqaUKdmXIv19-n9d6N4dD_BZeY70Yg1TPtSLoiDJJ6spiGlqpvv" alt="दिल्ली में श्याम रजक पर गुस्साए तेजप्रताप बोले-हैसियत बता दूंगा, बिहार की ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>राजद की बैठक से मंत्री तेज प्रताप यादव गुस्से में बाहर निकल गए। उन्होंने मीडिया के&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/state/bihar/patna/rjd-shyam-rajak-health-deteriorated-after-tej-pratap-got-angry-ans'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RJD की राष्ट्रीय कार्यकारिणी बैठक में बिगड़ी श्याम रजक की तबीयत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2jDyG5rEiB3hv4YpeXLt6uOyvq3cz4RxWoNAlOG9AeG6d3Odrmdrv4Z8kNiX1F_2TfPHtCgFu" alt="RJD की राष्ट्रीय कार्यकारिणी बैठक में बिगड़ी श्याम रजक की तबीयत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>तेज प्रताप द्वारा लगाए गए आरोपों के बाद अब खबर आ रही है कि राजद के राष्ट्रीय महासचिव&nbsp;...</p></div>
            </div>
        </a><a href='https://www.opindia.com/2022/10/tej-pratap-yadav-accuses-rjd-leader-shyam-rajak-of-abusing-him-and-his-sister/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tej Pratap Yadav storms out of RJD&#39;s national convention midway ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ68CG69IbaJk7HTbiEiBheurCk6YIS4wPiuiHI-MaQaBU2ZiPXkzHYWyutRM13bBBCzZrbXtel" alt="Tej Pratap Yadav storms out of RJD&#39;s national convention midway ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tej Pratap Yadav said that senior RJD leader Shyam Rajak yelled obscenities at his sister and personal assistant.</p></div>
            </div>
        </a><a href='https://www.firstpost.com/politics/abused-me-my-sister-rjds-tej-pratap-yadav-accuses-shyam-rajak-of-misbehaving-with-him-11414851.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Abused me, my sister...&#39;: RJD&#39;s Tej Pratap Yadav accuses Shyam ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSmA6MeC7DMkALvATua2MUxxqjb_UQueEEoPkSHNEb6VptZe9beDiVjCzxiY1aTFXfXI5rxY5dL" alt="&#39;Abused me, my sister...&#39;: RJD&#39;s Tej Pratap Yadav accuses Shyam ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The two-day national executive meeting of RJD is being held in New Delhi. Notably, the party&#39;s state president Jagdanand Singh has not attended the meeting.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/india/bihar-jharkhand/patna/rjd-shyam-rajak-admitted-in-safdarganj-hospital-after-dispute-with-tej-pratap-yadav/1387439'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>बिहार: तेजप्रताप से विवाद के बाद बिगड़ी श्याम रजक की तबीयत, सफदरगंज ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRe3A5LaQCH1fO_m7s04tcAntJsg2QinMFDVIu0iPY_wSEhzQECtBGJv5qhODPv468jXJOwUU3t" alt="बिहार: तेजप्रताप से विवाद के बाद बिगड़ी श्याम रजक की तबीयत, सफदरगंज ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shyam Rajak: आरजेडी के राष्ट्रीय महासचिव श्याम रजक की तबीयत खराब होने के बाद राजधानी दिल्ली&nbsp;...</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/state/bihar/patna/rjd-shyam-rajak-health-deteriorated-after-dispute-with-lalu-yadav-son-tej-pratap-watch-video/articleshow/94742432.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>तेज प्रताप से गाली-गलौज के बाद RJD की राष्ट्रीय कार्यकारिणी बैठक में ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTW_8TspwxCbRtV5uPr8aGI5MJPV-nAmmYHYdkNlgfTNJ7QmW80xiei29Lsr-CDGXEpGE7AIXqu" alt="तेज प्रताप से गाली-गलौज के बाद RJD की राष्ट्रीय कार्यकारिणी बैठक में ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>बताया जाता है कि बैठक में गाली-गलौज हुई है। बिहार के वन एवं पर्यावरण मंत्री तेज प्रताप&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/india/abused-me-my-sister-tej-pratap-accuses-general-secretary-shyam-rajak-storms-out-of-rjd-meet-2519838.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Abused me, my sister...: Tej Pratap accuses general secretary ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTT11SW_qmFQJovjYtEAjdqMe4d9QVJ3aPvPUMqV_mNPnb2L9OnUatfaI55WpPS2-5aaYX0bmCf" alt="Abused me, my sister...: Tej Pratap accuses general secretary ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tej Pratap Yadav alleged that Shyam Rajak abused him as well as his sister who is also a minister in the Bihar cabinet. Yadav also said he has proofs and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/india/story/tej-pratap-yadav-storms-out-of-rjd-meet-senior-party-leader-hurled-abuses-at-his-sister-assistant-2283036-2022-10-09'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tej Pratap Yadav storms out of RJD meet, says senior party leader ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFm3Fl45HVpEIZE__MZZ-E9l-r283gN6WqzZg1U5n78DDq9k9Fpd4OmHbzRVG0T3tqU-64poy-" alt="Tej Pratap Yadav storms out of RJD meet, says senior party leader ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rashtriya Janata Dal (RJD) leader Tej Pratap Yadav stormed out of the party&#39;s national meet on Sunday alleging that RJD senior leader Shyam Rajak used&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}