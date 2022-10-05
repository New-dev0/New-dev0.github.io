import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Live Score</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Live Score"/>
        <meta name="description" content="Trending News about Live Score" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Live Score</h1>
            <Image width={800} height={500} src="https://spiderimg.amarujala.com/assets/images/2022/10/04/750x506/india-vs-south-africa-3rd-t20-live_1664900228.jpeg" alt="Live Score"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/live/cricket/cricket-news/india-vs-south-africa-live-cricket-score-ind-vs-sa-3rd-t20-2022-match-at-holkar-stadium-news-in-hindi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ind vs Sa 3rd T20: दक्षिण अफ्रीका ने भारत को 49 रन से हराया, टीम इंडिया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTxknMw5-PQhqIQOBT92Av3K0fnuG4m1uGRXHyYDSi3pmWzXVuqg4GLjJ_Bx6d6AH3vdSKbBbuK" alt="Ind vs Sa 3rd T20: दक्षिण अफ्रीका ने भारत को 49 रन से हराया, टीम इंडिया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>दक्षिण अफ्रीका ने तीसरे टी20 में भारत को 49 रन से हरा दिया है। टॉस हारकर पहले बल्लेबाजी&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-india-vs-south-africa-3rd-t20-live-score-4-oct-2022-match-latest-update-in-hindi-7175236.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ind vs SA 3rd T20 Highlights: दक्षिण अफ्रीका की 49 रन से शानदार जीत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRj7QdC_GpRryFM6sI7_Et-S2pPmlCquu1jNVCA5n8C-TCGYymklQyxzPiOz0St1CLMqgL2Y8lD" alt="Ind vs SA 3rd T20 Highlights: दक्षिण अफ्रीका की 49 रन से शानदार जीत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>3rd T20: 228 रन के लक्ष्य के जवाब में भारतीय टीम 18.3 ओवराें में 178 रन ही बना सकी और उसे तीसरे&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/india-vs-south-africa-3rd-t20-match-live-score-indore-rohit-sharma-rishabh-pant-virat-kohli-temba-bavuma-live-cricket-score-in-hindi-tspo-1549633-2022-10-04'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ind Vs Sa 3rd T20 Live Score: इंदौर में डूबी टीम इंडिया की लुटिया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQY-L0g28ZcPbnDm_KuVSivfynyPLYWTt09lPclsLr3EOu3gAqfuBZlw0ze28VlS0UfR8rBjIxG" alt="Ind Vs Sa 3rd T20 Live Score: इंदौर में डूबी टीम इंडिया की लुटिया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टीम इंडिया ने इंदौर में हुए आखिरी टी-20 मैच को गंवा दिया है, लेकिन इस सीरीज पर 2-1 से कब्जा&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/ind-vs-sa-score-live-updates-india-vs-south-africa-3rd-t20-cricket-match-live-telecast-commentary-online-tv-2230493'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs SA 3rd T20: तीसरा टी20 दक्षिण अफ्रीका के नाम, भारत को 49 रनों ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT8Meg5bOyZ_YTWPvqzPR_PIV6RGtXYOze5D_5CptBFZPTaqFdIL4lzdkt6RgUrbHZz10G9fdCb" alt="IND vs SA 3rd T20: तीसरा टी20 दक्षिण अफ्रीका के नाम, भारत को 49 रनों ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs SA Score Live: यहां आपको भारत और दक्षिण अफ्रीका के तीसरे टी20 का लाइव स्कोर और मुकाबले से&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/zee-hindustan/sports-news/live-updates/india-vs-south-africa-2022-3rd-t20i-live-cricket-score-commentary-match-updates/1380068'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live IND vs SA Score: साउथ अफ्रीका के खिलाफ क्लीन स  </h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqLICsPvPiAssD5DiMq8tHCe6V_TV9dvOSNL_OEepVjdNuKnwamBRJ9UpOle807BYSCh1QM-Xk" alt="Live IND vs SA Score: साउथ अफ्रीका के खिलाफ क्लीन स  " height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारत और साउथ अफ्रीका की टीम के बीच खेली जा रही 3 मैचों की टी20 सीरीज का आखिरी मैच इंदौर&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.thequint.com/sports/all-sports/india-vs-south-africa-live-score-ind-vs-sa-3rd-t20i-match-latest-updates-in-hindi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND Vs SA Highlight: साउथ अफ्रीका 49 रन से आखिरी मुकाबला जीता ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQKR3dQcdHUnba49uCxgp96iwzsSAt1oM3ckiwnRG2RFVSVzIiiJOmiKYsZcMLRcLR_cFuDpT7gvQ" alt="IND Vs SA Highlight: साउथ अफ्रीका 49 रन से आखिरी मुकाबला जीता ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India Vs south Africa 3rd T20I Match: साउथ अफ्रीका ने दिया था 228 का लक्ष्य, भारतीय टीम 178 पर ऑलआउट हुई.</p></div>
            </div>
        </a>
        </Template></>;
}