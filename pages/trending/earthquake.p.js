import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Earthquake</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Earthquake"/>
        <meta name="description" content="Trending News about Earthquake" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Earthquake</h1>
            <Image width={800} height={500} src="https://th-i.thgim.com/public/news/ujivp6/article66112992.ece/alternates/FREE_1200/WhatsApp%20Image%202022-11-09%20at%2002.13.39.jpeg" alt="Earthquake"/>
            <h3>Recent News</h3>
            <a href='https://www.thehindu.com/news/national/earthquake-tremors-felt-in-delhi/article66112993.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>6.3 magnitude earthquake hits Nepal; tremors felt in Delhi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQK9kkLDqXPHxx57T04d4zLdPU4ptMtZ6ysGuH5dBcAzQpMfC6xeuEkVlnoHlsPGESop5D1Vo28" alt="6.3 magnitude earthquake hits Nepal; tremors felt in Delhi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The National Centre for Seismology (NCS) said the epicenter of the earthquake was in Nepal, about 90 km east-southeast of Pithoragarh in Uttarakhand, and it&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/india-news/3-killed-in-house-collapse-as-earthquake-hits-nepal-strong-tremors-in-delhincr-101667952353328.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>6 killed in house collapse as earthquake hits Nepal; strong tremors ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT2Bip3UaNXayX22wTzlJMgoMOSPz1WKE3ji6dFm6pBpxnoBWybs_6IROjXJJAs9mqUtB2K-biJ" alt="6 killed in house collapse as earthquake hits Nepal; strong tremors ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There were two earthquakes and one aftershock in Nepal. Strong tremors were felt in Delhi-NCR as the second earthquake hit Nepal at 1.57am.</p></div>
            </div>
        </a><a href='https://www.jagran.com/news/national-earthquake-strong-tremors-of-earthquake-felt-in-delhi-ncr-magnitude-5-measured-23191646.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake: दिल्ली-NCR व UP में महसूस किए गए भूकंप के जोरदार झटके ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRkxdDGjCU7FoqeDwpmSY5JDBRPdtBhBBmeHQNSX5seNCSh6S4HQevDJgS-kQuuv6WOqj5CVIxB" alt="Earthquake: दिल्ली-NCR व UP में महसूस किए गए भूकंप के जोरदार झटके ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earthquake देर रात दिल्ली में भूकंप के झटके महसूस किए गए। देर रात 1 बजकर 58 मिनट पर भूकंप के&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/delhi-ncr/earthquake-tremors-felt-in-delhi-ncr-on-tuesday-night'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake: दिल्ली-एनसीआर समेत उत्तर भारत में देर रात आया भूकंप ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRuZdHtMo5n40_S3fRkEVBv2QRzL6Was4kqhq6GfQ-ArSNlcDlYeqpv0o4gz1iV4er2xRfmk3_b" alt="Earthquake: दिल्ली-एनसीआर समेत उत्तर भारत में देर रात आया भूकंप ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>दिल्ली-एनसीआर समेत पूरे उत्तर भारत में मंगलवार की देर रात भूकंप (&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/india/story/tremors-felt-in-delhi-ncr-2294991-2022-11-09'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake of 6.3 magnitude hits Nepal, tremors felt in Delhi-NCR</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ13BD6kSCKokNsZdnIVvdFsgsFBKKs8Yyd6qixafa73pv6Tw1hLv_PUUuzR7hP_68iYxQF9_1-" alt="Earthquake of 6.3 magnitude hits Nepal, tremors felt in Delhi-NCR" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An earthquake of 6.3 magnitude hit Nepal in the wee hours of Wednesday. The tremors were felt in parts of Delhi-NCR region.</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/metro/lucknow/development/north-india-trembled-by-strong-tremors-of-earthquake-strong-tremors-from-delhi-to-lucknow-nepal-was-center/articleshow/95387613.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake: भूकंप के तेज झटकों से कांपा उत्तर भारत, दिल्ली से लखनऊ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT4OZtWk8R7eCATsnsJCEFZVYLV1I2RmvLpoBSu_FTZtb51y9m65FtNY1D_7b798xr6j01JJhpF" alt="Earthquake: भूकंप के तेज झटकों से कांपा उत्तर भारत, दिल्ली से लखनऊ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earthquake in India: देश के उत्तरी भाग में भूकंप के तेज झटके महसूस किए गए। रात करीब 1.57 बजे भूकंप&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/india/magnitude-6-3-earthquake-strikes-nepal-tremors-felt-in-delhi-8257237/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Magnitude 6.3 earthquake strikes Nepal, tremors felt in Delhi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8vEFN7wTvbeZBWI5vo3WBJcI-AFYLs-J0w9ky8ulhF-WUiUpmuhsvemVqgLfygknORqqX3jVg" alt="Magnitude 6.3 earthquake strikes Nepal, tremors felt in Delhi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An earthquake with an estimated magnitude of 6.3 struck Nepal, the early hours of Wednesday. The capital city of Delhi and surrounding regions were also&nbsp;...</p></div>
            </div>
        </a><a href='https://www.india.com/hindi-news/delhi/earthquake-tremor-felt-in-delhi-ncr-5732020/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake: दिल्ली-NCR में भूकंप के तेज झटके, रिक्टर पैमाने पर 6.3 मापी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQh3rK7YBBVeBbmTh01UojHKqoVsqanq769LnkbKC0tPWpvlRZzpj3DKnFPpwwGsWS_HHMyJrl-" alt="Earthquake: दिल्ली-NCR में भूकंप के तेज झटके, रिक्टर पैमाने पर 6.3 मापी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi-NCR Earthquake: दिल्ली-NCR में मंगलवार देर रात भूकंप के तेज झटके महसूस किये गए.</p></div>
            </div>
        </a><a href='https://theprint.in/india/earthquake-in-delhi-ncr-locals-recount-experience-of-tremors/1205596/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi-NCR, locals recount experience of tremors</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ_zjilh7WM8-eOPYS-Pn98eC3FtUWJllXsjiDZqCn5z8T6EmQ9MN-5yzMP4bee0vriWmlII4ws" alt="Earthquake in Delhi-NCR, locals recount experience of tremors" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Speaking to ANI, a passenger at the New Delhi railway station said, “We were getting off an auto when we felt the tremors. The auto driver also got scared, and&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/nation/earthquake-in-delhi-ncr-and-shaked-north-india-epicenter-in-nepal-6-3-magnitude-4865059.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake : देर रात आए भूकंप से दिल्‍ली-एनसीआर समेत हिला उत्‍तर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSPs-tWlVM8f1OdqHmNIHl3NWLpzerKAJkiDAD8vQXA0MJwA5Eio0XB3Oyh0X8m9z2ZprVgIfH6" alt="Earthquake : देर रात आए भूकंप से दिल्‍ली-एनसीआर समेत हिला उत्‍तर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>EarthQuake in Delhi-NCR: नेपाल में मंगलवार-बुधवार की देर रात 1.57 बजे आए 6.3 तीव्रता के भूकंप के&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}