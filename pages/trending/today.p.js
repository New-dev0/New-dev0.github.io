import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Today</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Today"/>
        <meta name="description" content="Trending News about Today" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Today</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/09/students-express-1.jpg" alt="Today"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/cities/delhi/delhi-news-rains-live-updates-arvind-kejriwal-aap-bjp-8171180/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi News Highlights: CUET-PG result to be declared on Monday ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRbdb1l9u_9vpgILH1cNWkgBy2FSzjAawLxOIHR401ySC58VCgijoLnCrPPhbqMXgzibC-rJ9tj" alt="Delhi News Highlights: CUET-PG result to be declared on Monday ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi-NCR Rain News, Delhi News Live Updates, September 25, 2022: The results of the Common University Entrance Test (CUET) for admission to PG programmes&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/india/madhya-pradesh-chhattisgarh/chhattisgarh/live-updates/mpcg-news-live-update-today-cm-shivraj-bhopal-indore-cm-bhupesh-baghel-craipur-bilaspur-25-september-mpap/1366204'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MPCG News Live Today: उज्जैन में होगी शिवराज कैबिन  </h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ76_It0Us0ArtQgKLPZc3XKhaOgsOQn7uolTBfJZYtgbpswk_w1XjtcQL28cyElhTMuIbYDvHL" alt="MPCG News Live Today: उज्जैन में होगी शिवराज कैबिन  " height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>मध्य प्रदेश और छत्तीसगढ़ के आज के ताजा समाचार जानने के लिए यहां जुड़े रहें.</p></div>
            </div>
        </a><a href='https://telugu.samayam.com/astrology/panchangam/today-telugu-panchangam-26-september-2022-monday-know-today-shubh-muhurat-and-ashubh-muhurat-in-telugu/articleshow/94440648.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Today Panchangam 26 September 2022 నవరాత్రుల్లో తొలిరోజు శుభ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKjHTnCjGw3vsAcIpkhmf7BdSi6IVRqxXSdw3T9JTrhcrO2xdfhmTer7uEragXEnl6eF9MM9FP" alt="Today Panchangam 26 September 2022 నవరాత్రుల్లో తొలిరోజు శుభ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>panchangamtoday telugu panchangam హిందూ మత విశ్వాసాల ప్రకారం, తిథి, వారం, నక్షత్రం, కరణం,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.naidunia.com/chhattisgarh/bilaspur-today-in-bilaspur-navratri-will-start-the-birth-anniversary-of-maharaj-agrasen-will-be-celebrated-7839990'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Today in Bilaspur: नवरात्र होगा प्रारंभ महाराज अग्रसेन की मनेगी जयंती</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQdpa--9Kj6xad3tvNGrwx_BkdbbmPiCL_NRHNjxuEziy5--3pnChQPmvu8gy7pkbfITtUNzVF4" alt="Today in Bilaspur: नवरात्र होगा प्रारंभ महाराज अग्रसेन की मनेगी जयंती" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>बिलासपुर में सोमवार को भी विभिन्न आयोजन होंगे इनमें आप शामिल होकर अपने दिन को खास बना&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.indianexpress.com/tamilnadu/tamil-news-today-live-modi-5-g-ponniyin-selvam-dmk-515770/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tamil news Highlights : வடகிழக்கு பருவமழை ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMMIOkZHKtnNk-yBthpScQtJaJHE9vfqsxUf4oz1dhR8C7hmpMDSXEwPzugMGSOs6TQuRu9pyC" alt="Tamil news Highlights : வடகிழக்கு பருவமழை ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tamil Nadu News, Tamil News, Petrol price Today – 25 Sep 2022- இன்று நடக்கும் அனைத்து செய்திகளையும் உடனுக்குடன்&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}