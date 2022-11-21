import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Govinda</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Govinda"/>
        <meta name="description" content="Trending News about Govinda" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Govinda</h1>
            <Image width={800} height={500} src="http://hindi.news24online.com/wp-content/uploads/2022/11/govinda-ranveer.png" alt="Govinda"/>
            <h3>Recent News</h3>
            <a href='https://hindi.news24online.com/entertainment/govinda-ranveer-dance-on-the-special-demand-of-this-person-govinda-and-ranveer-singh-did-a-great-dance/92089/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Govinda Ranveer Dance: इस शख्स की स्पेशल डिमांड पर गोविंदा और ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcfZYAe-VoQtSTA__4cTm836GkuXJ4rJUt44BtJ5LucFzAXJST5MZHWmL-iNN5ES3pyrK9zs0V" alt="Govinda Ranveer Dance: इस शख्स की स्पेशल डिमांड पर गोविंदा और ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Govinda Ranveer Dance: इस वक्त सोशल मीडिया पर बॉलीवुड एक्टर रणवीर सिंह और गोविंदा के कई वीडियोज&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/entertainment/bollywood/ranveer-singh-grooves-with-govinda-two-bollywood-entertainers-set-stage-on-fire-watch-video-2263602'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Video: ताबड़तोड़ डांस से रणवीर सिंह और Govinda ने स्टेज पर लगाई आग ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwdDX83aN4hVMz2hxOZWglbesVXz2GnjpZJU9XUQUA-h4BzvfIqWsatYXZcZ_SfNxGqHMKLEkt" alt="Video: ताबड़तोड़ डांस से रणवीर सिंह और Govinda ने स्टेज पर लगाई आग ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Govinda-Ranveer Dance Video: दुबई में आयोजित हुए फिल्म फेयर अचीवर्स नाइट में गोविंदा ने धमाकेदार&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/entertainment/pakistani-actor-fahad-mustafa-touch-govinda-feet-in-award-night-at-dubai-video-viral-on-social-media'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Video: इवेंट के बीच पाकिस्तानी एक्टर ने गोविंदा के छुए पैर, स्टेज पर खड़े ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTPrLeOKDLVb4U1TVmR56uBNpDeNp68g3WJrefb3A2qlFrBBRaw9xKeEdpNJ5LJq9yhdOulxWeI" alt="Video: इवेंट के बीच पाकिस्तानी एक्टर ने गोविंदा के छुए पैर, स्टेज पर खड़े ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>पाकिस्तानी अभिनेता फहाद मुस्तफा का एक वीडियो सोशल मीडिया पर तेजी से वायरल हो रहा है,&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/entertainment/bollywood/pakistani-actor-fahad-mustafa-touched-feet-of-bollywood-actor-govinda-video-viral-ranveer-singh-must-watch/1450123'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Viral: पाकिस्तानी एक्टर ने गोविंदा के पैर छूकर कही दिल छू जाने वाली बात ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSxgyx8cpkYdeCCUohYGZ6sJB5Ilrnn4WIFHOOAovyac89wjXNE968JE_UzDGDzFgcL5WYzASiy" alt="Viral: पाकिस्तानी एक्टर ने गोविंदा के पैर छूकर कही दिल छू जाने वाली बात ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Govinda: पाकिस्तान में भी बॉलीवुड एक्टर्स की फैन फॉलोइंग कुछ कम नहीं है. सोशल मीडिया (Social&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/entertainment/story-pakistan-actor-fahad-mustafa-touched-govinda-feet-at-a-dubai-event-7379782.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>पाक एक्टर फहाद मुस्तफा ने गोविंदा के छुए पैर, कहा- उम्मीद है पाकिस्तान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSalshL9k2sbi_4Rb1iLBUEpMFTQP62mzIjfF1SnQ_ICKLgkp5Hbmc09-WlrUzoMxGWRBIltZC1" alt="पाक एक्टर फहाद मुस्तफा ने गोविंदा के छुए पैर, कहा- उम्मीद है पाकिस्तान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>दुबई में एक इवेंट में पाकिस्तानी एक्टर फहाद मुस्तफा (Fahad Mustafa) अवॉर्ड लेने के लिए&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/entertainment/bollywood-pakistani-actor-fahad-mustafa-touch-govinda-feet-video-viral-23216387.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>गोविंदा का जबरा फैन है ये पाकिस्तानी एक्टर, अभिनेता के पैर छूकर कहा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0QJUF_wnkm0nssi7-HROtx57D2z_c4sxXC7WcC5VZF8GClWkvF9owDHU5GdtqevQFkqW4b-CC" alt="गोविंदा का जबरा फैन है ये पाकिस्तानी एक्टर, अभिनेता के पैर छूकर कहा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Govinda Fahad Mustafa Video गोविंदा इन दुबई में हैं। उन्होंने शनिवार को फिल्मफेयर मिडिल ईस्ट&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/entertainment/bollywood-news/story/govinda-dance-on-nacho-sare-arjun-kapoor-ranveer-singh-ayushmann-khurrana-touch-actor-feet-video-tmovb-1579637-2022-11-20'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>गोविंदा के पैरों पर लेट गये अर्जुन कपूर-रणवीर सिंह, इवेंट की रात ऐसा क्या ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5LLVRLThqml9DxrPbJ1YGM7QIaVluiWyoGq8Vpo9iKWEUZRT0ZcPe66GGNVw0xN4JvVECLOlp" alt="गोविंदा के पैरों पर लेट गये अर्जुन कपूर-रणवीर सिंह, इवेंट की रात ऐसा क्या ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>गोविंदा बॉलीवुड के उन एक्टर में से हैं, जो अपने डांस से संमा बांधना जानते हैं.</p></div>
            </div>
        </a>
        </Template></>;
}