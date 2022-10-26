import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>WhatsApp News</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,WhatsApp News"/>
        <meta name="description" content="Trending News about WhatsApp News" /></Head><Template>
            <h1 style={{fontSize: "30"}}>WhatsApp News</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/10/Whatsapp-new-Explained-1.jpg" alt="WhatsApp News"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/explained/explained-sci-tech/whatsapp-outage-explained-8228980/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp outage: why were services down?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpQbb0ytsSl13PhRBUZSz5TzMpYMhT-vlvOyhSQ_iQXYw-6mXqeo5kk9lhI4n2uCtFBzJhjE2b" alt="WhatsApp outage: why were services down?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WhatsApp Outage: There is no official statement yet. But these outages are becoming increasingly common. The user bases of services like WhatsApp and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theweekendleader.com/Headlines/77602/whatsapp-apologises-fixes-2hour-outage-issue.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp apologises, fixes 2-hour outage issue</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTKignK6bL5DGzS87ktMPhETsJJtxDS_uEunZwnYo-6klnbSvQ61TX_yJNyE5eAXv0uongSkDIl" alt="WhatsApp apologises, fixes 2-hour outage issue" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meta-owned WhatsApp, which suffered a global outage including in India that lasted for over two hours, on Tuesday said it has fixed the issue and the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/10/25/1131281823/users-are-reporting-problems-sending-and-receiving-whatsapp-messages'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp says its service is back after an outage disrupted messages</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQbrKZ953gp_j-TABISMk0EyVypn_48FNxaW7fwEUumVAcLMfT31wjJlMNtfWq_OwdOaRNO0Cc4" alt="WhatsApp says its service is back after an outage disrupted messages" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The popular chat app has been restored following a brief outage Tuesday that left people around the world complaining that they couldn&#39;t send or receive&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/tech/trendspotting/whatsapp-outage-users-unable-to-send-or-receive-messages/articleshow/95075451.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp services resume after messaging app&#39;s longest outage ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR5SyrzymALRbZvLeWyGFw7fmW5CbiCGmPyyjvTysohDCC29ekAkYW46_3py6BxC_f5GGJimrDB" alt="WhatsApp services resume after messaging app&#39;s longest outage ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While 69% of the faced problems with sending messages, 24% has troubles with server connection and 7% had issues with the overall app. &quot;The brief outage was a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/world/whatsapp-down-top-5-outages-that-disrupted-the-world-11666687792717.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp down: Top 5 outages that disrupted the world | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTG7jwtta68ohgiavVkBx7HZMtDmYUh4UnVovSsncUMQGngQwGBy5F_Uwqdkc5QBCF6Ms0NeHIz" alt="WhatsApp down: Top 5 outages that disrupted the world | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>About 69% reported that messages were not going through, while others reported server disconnection and the app crashing altogether.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/business/whatsapps-biggest-outage-has-been-resolved-but-meta-doesn-t-say-what-broke-101666695291446.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp&#39;s biggest outage has been resolved, but Meta doesn&#39;t say ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKUz0nNBEeevQME2LG6yJrn5AqlvscQ307g1CYazkkaid_WfKk0kCygU19J-sQKq4pjHmEYJ6V" alt="WhatsApp&#39;s biggest outage has been resolved, but Meta doesn&#39;t say ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WhatsApp was unavailable for users for about two hours, making this the longest outage the service has faced.</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/world/social-media-whatsapp-down-user-reacts-on-twitter-about-it-2245236'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp Down: 2 घंटे बाद व्हाट्सएप की सर्विस बहाल, सर्वर ठप होने से ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTAssQz2C8vdQ2cuB67Ezxa7U1upOFWTYTQFgf4wBSanFAXpjNz5vtfIN7ZA8U1Uy_eSyT4-AfO" alt="WhatsApp Down: 2 घंटे बाद व्हाट्सएप की सर्विस बहाल, सर्वर ठप होने से ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WhatsApp Outage: व्हाट्सएप सर्वर डाउन के करीब 2 घंटे के बाद मेटा कंपनी की सर्विस दोबारा शुरू&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/technology/tech-diary/whatsapp-server-down-users-facing-problem'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Whatsapp Down: दो घंटे बाद चालू हुआ व्हाट्सएप, यूजर्स को मैसेज भेजने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR4HcoP4-U32YzmK3KvR1YIv2kIow3iEE2t36xM693b4LhyJB64PXIPtp0XvB2oFwQoBiEKGmGm" alt="Whatsapp Down: दो घंटे बाद चालू हुआ व्हाट्सएप, यूजर्स को मैसेज भेजने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>सोशल मीडिया मैसेजिंग प्लेटफॉर्म व्हाट्सएप का सर्वर डाउन हो गया है। भारत में यूजर्स को&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/technology/tech-news-whatsapp-down-many-parts-in-india-know-the-details-here-23161585.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp Outage: भारत सहित दुनिया के कई हिस्सों में ठप हुआ था ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShhDnKh5rUaWgpsi-vxeEaJpIhWAS6iZQX-5AeMBIeEGotH9lHb0A8ujsLFkP9zvU9bVGnwmAe" alt="WhatsApp Outage: भारत सहित दुनिया के कई हिस्सों में ठप हुआ था ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WhatsApp Outage News In Hindi रिपोर्ट से पता चला है कि मेटा का मैसेजिंग ऐप WhatsApp काम नहीं कर रहा है।</p></div>
            </div>
        </a><a href='https://www.aajtak.in/technology/tech-news/story/whatsapp-down-reason-behind-instant-messaging-app-outage-ttec-1562326-2022-10-25'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>आखिर क्यों डेढ़ घंटे तक बंद रहा WhatsApp? सामने आईं ये 3 वजहें, पहले भी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTLkHGfdDD0ICzV0Gn87vO1V8FUAf1WJbCufRE9Xfben2mMxyI_hen_aDOr8CjrtBKq4gknJCdk" alt="आखिर क्यों डेढ़ घंटे तक बंद रहा WhatsApp? सामने आईं ये 3 वजहें, पहले भी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WhatsApp पर मैसेज भेजने की रफ्तार आज अचानक थम गई. लोग WhatsApp पर मैसेज सेंड नहीं कर पा रहे थे.</p></div>
            </div>
        </a>
        </Template></>;
}