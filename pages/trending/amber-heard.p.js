import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amber Heard</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amber Heard"/>
        <meta name="description" content="Trending News about Amber Heard" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amber Heard</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95303642,width-1070,height-580,imgsize-24388,overlay-etpanache/photo.jpg" alt="Amber Heard"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/magazines/panache/amber-heard-reportedly-deactivates-twitter-account-after-ex-beau-elon-musks-takeover/articleshow/95301378.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amber Heard reportedly deactivates Twitter account after ex-beau ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQvtNTkWP0rpbLiiXWuKLO6ThMv6ZbE-f6wsnMojUrK1OBKoLQagLqgfN4Vpf6_yCibyhCct4vB" alt="Amber Heard reportedly deactivates Twitter account after ex-beau ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Tesla and SpaceX CEO became the new owner of Twitter last week. Agencies Since her Twitter exit went viral, Amber Heard has been at the centre of many&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/entertainment/hollywood/did-amber-heard-exit-twitter-after-elon-musk-took-over-reins-of-company-find-out-8248737/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Did Amber Heard exit Twitter after Elon Musk took over reins of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6NmoCKjMG-CUjvDCJr16Ts8zaOS1C9kYXfGIH8T1KRrGMiOmqdaZfCtHo_5XEaeRRGHYh4TbK" alt="Did Amber Heard exit Twitter after Elon Musk took over reins of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Many on social media believe that Amber Heard has deleted her Twitter after Elon Musk took over Twitter as the new boss. The actor is still subject to&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.moneycontrol.com/news/india/trends/amber-heard-twitter-ex-girlfriend-amber-heard-account-disappeard-as-soon-as-elon-musk-twitter-takeover-people-raised-questions-866601.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amber Heard Twitter Account: क्या एलॉन मस्क के कारण एम्बर हर्ड ने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMJv5GaED9lIMTeIa6064s2xuYMUlb0KQHEmajOpjRjeYodch0t1nzdugFUb4wt-sF03CeK-hi" alt="Amber Heard Twitter Account: क्या एलॉन मस्क के कारण एम्बर हर्ड ने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amber Heard Twitter Account: यूं तो एलॉन मस्क के ट्विटर की कमान संभालने के बाद से ही कई नामचीन&nbsp;...</p></div>
            </div>
        </a><a href='https://www.avclub.com/johnny-depp-appeals-amber-heard-defamation-trial-win-1849743843'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sore winner Johnny Depp appeals $2 million granted to Amber ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTK98oR4ijNvmfck3U6yhpKPc60ocR11530Qomp9U8DMoI0bKxJQgiYeIVGGW_Sn4m2zL0jeo1a" alt="Sore winner Johnny Depp appeals $2 million granted to Amber ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a new filing, Johnny Depp calls $2 million awarded to ex-wife Amber Heard in the Virginia defamation trial &quot;erroneous&quot;</p></div>
            </div>
        </a><a href='https://www.koimoi.com/hollywood-news/johnny-depp-vs-amber-heard-to-happen-again-pirates-actor-challenges-the-mighty-2-million-defamation-verdict/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Johnny Depp Vs Amber Heard To Happen Again? Pirates&#39; Actor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQk-iAex1w4CiJR7CNILKDFFXfrDgFApcvHbYznXHBc1y8mNOz3dOqjuxRTrPcfnC-xj1a2iq3t" alt="Johnny Depp Vs Amber Heard To Happen Again? Pirates&#39; Actor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Reportedly, Johnny Depp is likely to challenge the court&#39;s verdict and re-examine it. Are we going to witness history again? Read on.</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/world/amber-heard-leaving-twitter-related-to-elon-musk-taking-over-find-out-here-11667489849341.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amber Heard leaving Twitter related to Elon Musk taking over? Find ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTdzVLny6fsZ-NkRo3v0i0k2TXYZPCAY0r3uN82MUyssucUOTzxwKEiFX4lqsMioC2EYOg1EeUu" alt="Amber Heard leaving Twitter related to Elon Musk taking over? Find ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If Amber Heard&#39;s much publicised defamation trial with former husband Johnny Depp wasn&#39;t enough, now Twitter is abuzz to understand if the Aquaman actress&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/entertainment/hollywood/amber-heard-deleted-her-twitter-account-after-ex-boyfriend-elon-musk-takes-over-micro-blogging-site'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amber Heard: एक्स बॉयफ्रेंड एलन मास्क के आते ही एम्बर हर्ड ने ट्विटर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTmrSxlEhFQBgHF5uTzISZYkmtWvgwjqwZG6YaoG3z3MzDech-FiMYM6xRjnbqihOj1PIf1GhLx" alt="Amber Heard: एक्स बॉयफ्रेंड एलन मास्क के आते ही एम्बर हर्ड ने ट्विटर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>एलन मस्क की एक्स गर्लफ्रेंड रहीं हॉलीवुड अभिनेत्री एम्बर हर्ड ने अपना ट्विटर अकाउंट&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jansatta.com/photos/news-gallery/elon-musk-ex-girlfriend-and-jihny-depp-ex-wife-actress-amber-heard-delete-her-twitter-account-know-the-reason/2457092/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amber Heard: एंबर हर्ड ने डिलीट किया अपना ट्विटर अकाउंट, क्या एलन ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdSm9Kvtd0SqB1XCQVGc5z9wEkDg3M4fmyxDxZkYF4WfQOKzqWg-6IzaNn1UE_g5ocU4954Rvt" alt="Amber Heard: एंबर हर्ड ने डिलीट किया अपना ट्विटर अकाउंट, क्या एलन ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amber Heard Twitter Acount: जॉनी डेप (Johny Depp) से मानहानि केस हारने के बाद हॉलीवुड एक्ट्रेस एंबर हर्ड&nbsp;...</p></div>
            </div>
        </a><a href='https://www.siasat.com/amber-heard-deletes-twitter-account-after-elon-musks-takeover-2449279/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amber Heard &#39;deletes Twitter account&#39; after Elon Musk&#39;s takeover</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0ibhWGdcQOICcyvkWZfBfZwr_VIADwkP9HRGYkR53O2swhXLedmZG0Vebo3J9ut3QLUAJJqwc" alt="Amber Heard &#39;deletes Twitter account&#39; after Elon Musk&#39;s takeover" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Angeles: Actress Amber Heard appears to have deleted her Twitter account, just days after her former beau Elon Musk&#39;s controversial takeover. He.</p></div>
            </div>
        </a><a href='https://stylecaster.com/amber-heard-elon-musk-relationship/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amber&#39;s Twitter Just Mysteriously Vanished After Elon Bought The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtId8pjGSbDSWJUh7hYlNwlF9jmqFNsyq9Ud969MaiUxUeCCNvLmeOdY5tHqZ_vQicz3AhRA2K" alt="Amber&#39;s Twitter Just Mysteriously Vanished After Elon Bought The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After becoming the new CEO of Twitter, many people are speculating that he deleted ex-girlfriend&#39;s Amber Heard&#39;s Twitter.</p></div>
            </div>
        </a>
        </Template></>;
}