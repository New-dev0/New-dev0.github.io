import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Earthquake today</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Earthquake today"/>
        <meta name="description" content="Trending News about Earthquake today" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Earthquake today</h1>
            <Image width={800} height={500} src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/Earthquake-sixteen_nine_10.jpg?VersionId=iIUteeuvlLiFBRCJvO.KMf6MEUsNH4Q_" alt="Earthquake today"/>
            <h3>Recent News</h3>
            <a href='https://www.indiatoday.in/india/story/earthquake-tremors-felt-in-delhi-ncr-2296522-2022-11-12'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tremors felt in Delhi-NCR as 5.4 magnitude earthquake jolts Nepal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTVpls8HV24v6DKVA9WhknQjTasBqRBlPTOBXiV1qfgMS7CijDztqKc2tvbb8gKnCwZSJ3fFfKl" alt="Tremors felt in Delhi-NCR as 5.4 magnitude earthquake jolts Nepal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Strong tremors were felt in Delhi-NCR on Saturday evening after an earthquake of magnitude 5.4 on the Richter scale hit Nepal.</p></div>
            </div>
        </a><a href='https://www.jagran.com/delhi/new-delhi-city-ncr-earthquake-tremors-felt-across-delhi-ncr-23200016.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi: सप्ताह भर में दूसरी बार आया दिल्ली NCR में भूकंप ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQXJnb-V69XyLuNpL_I2ElWstHDNDvbxYw0_SM9kBD4h-I44nqqcD6R5XvbnsraAPQwPo9tQUd5" alt="Earthquake in Delhi: सप्ताह भर में दूसरी बार आया दिल्ली NCR में भूकंप ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earthquake in Delhi NCR दिल्ली एनसीआर में सप्ताह भर के अंदर एक बार फिर से तेज भूकंप के झटके महसूस&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/india/earthquake-tremors-delhi-ncr-8265048/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Another earthquake shakes north India, epicentre Nepal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZ4W6fzONid5HDuTERe4JWffhTFw7WdhFhJ1qUbJbUPwbHv2oz7LozjR827fl1UAnPw3q_hQ3f" alt="Another earthquake shakes north India, epicentre Nepal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An earthquake with a magnitude of 5.4 on the Richter scale jolted parts of Delhi-NCR on Saturday evening. The epicentre of the quake was recorded in Nepal,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndtv.com/india-news/earthquake-tremors-felt-in-delhi-neighbouring-areas-3514800'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake Tremors Felt In Delhi, Neighbouring Areas; Second ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQukr9dj7Wai0VnC8mrdGTfV_8tD_-1-w_9SkUoYpYxb7pmLGQdludOsIlOzSf8clR3_zDdFLD-" alt="Earthquake Tremors Felt In Delhi, Neighbouring Areas; Second ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Strong tremors were felt in Delhi and adjoining cities around 8 pm today, prompting many to rush out of their houses and offices.</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/hindi/india/earthquake-termors-felt-in-delhi-and-noida-103790'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake In Delhi: एक हफ्ते में दूसरी बार दिल्ली-एनसीआर में कांपी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9hn7EBCMAxSsfkViu-G8Ym1bT1KnKZeizyW_WF-dtn4oUpiXW0NWr78hVmkmeDv7gLlKf3Q2A" alt="Earthquake In Delhi: एक हफ्ते में दूसरी बार दिल्ली-एनसीआर में कांपी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earthquake Today: दिल्ली-NCR में शनिवार को एक बार फिर भूकंप के तेज झटके महसूस किए गए. भूकंप करीब&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/india/earthquake-tremors-felt-in-delhi-noida-11668263397092.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi: 5.4 magnitude earthquake strikes Nepal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQAybq_knAe7nJD8IxzL_MM56IKiwqMQKVNbnTckSDQp-1xJvZYrMc5z8wSxBC4VTowkCGS8zkq" alt="Earthquake in Delhi: 5.4 magnitude earthquake strikes Nepal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi, NCR and some other northern states witnessed earthquake tremors on Saturday. The tremors were felt as an earthquake measuring 5.4 jolted Nepal,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/latest/trends/story/breaking-earthquake-tremors-felt-in-delhi-ncr-other-parts-of-north-india-352712-2022-11-12'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Breaking: Earthquake tremors felt in Delhi, NCR, other parts of North ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQalCkBSKXBuO3Qeij91zVtRT-WlMfHE5LMk-eiqF2dPrzbj3BGpK80uDw0wxI6BGXjSA9UrgSO" alt="Breaking: Earthquake tremors felt in Delhi, NCR, other parts of North ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to the National Center for Seismology, the earthquake was of magnitude 5.4 on richter scale. It also showed that source of the earthquake was 10 km&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/india/live-updates/earthquake-in-delhi-ncr-strong-tremors-felt-in-noida-ghaziabad-gurgaon-details-here-2534499'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi-NCR LIVE UPDATES: Strong tremors felt in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTw9b-vvEwxRmXvDF2XRjLTzvIIsr29D17ecrI49eezJQEAu91GbPr6aKZjbbqcqz286oWrFTRX" alt="Earthquake in Delhi-NCR LIVE UPDATES: Strong tremors felt in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>5.4 Magnitude Earthquake in Delhi-NCR Live Updates: Mild earthquake tremors were in Delhi-NCR today. People in the Delhi&#39;s adjoining cities - Noida,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/india/breaking-news-earthquake-today-tremors-felt-in-delhi-ncr-2258028'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi-NCR: दिल्ली-NCR में महसूस किए गए भूकंप के तेज ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQZ6B0z9EpLgNpl1mmSmBSA3YvHaS-w06NLRcX7qEY5s0kXzmxaEKHw45Y6XtN5rcqRI2KbctE" alt="Earthquake in Delhi-NCR: दिल्ली-NCR में महसूस किए गए भूकंप के तेज ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earthquake in Delhi-NCR: दिल्ली एनसीआर में एक बार फिर भूकंप आया है. हफ्ते में ये दूसरी बार है कि&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/uttar-pradesh/kanpur-city-earthquake-today-kanpur-people-are-afraid-and-iit-experts-comment-on-mild-tremors-of-earthquake-in-up-23200522.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake In Kanpur: तीन दिन बाद फिर भूकंप के हल्के झटके से घबराए ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRCy2hK_ik6ARFjNbPfgCUKMrLbZG_BULDjMHASuwbcmNm1FSa6pBioq3Vu1p1d79hRiSZx197s" alt="Earthquake In Kanpur: तीन दिन बाद फिर भूकंप के हल्के झटके से घबराए ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>earthquake today kanpur कानपुर में मंगलवार की रात के तीन दिन बाद शनिवार की शाम भूकंप का झटका&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}