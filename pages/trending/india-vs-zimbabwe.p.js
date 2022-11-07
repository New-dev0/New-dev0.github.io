import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>India vs Zimbabwe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,India vs Zimbabwe"/>
        <meta name="description" content="Trending News about India vs Zimbabwe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>India vs Zimbabwe</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/ind-vs-zim-AP.jpg" alt="India vs Zimbabwe"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/cricket/ind-vs-zim-live-india-vs-zimbabwe-live-cricket-score-t20-world-cup-2022-8252050/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Zimbabwe, T20 World Cup 2022: SKY, pacers power IND to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSSgsPSNNOcR-19G06N5YlmJFZqIkSWUL8j_gfD0QFBa3tX3CZh7_mtPbJfgiEOE3lcfncpHcnR" alt="India vs Zimbabwe, T20 World Cup 2022: SKY, pacers power IND to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T20 World Cup 2022, India vs Zimbabwe Live Scorecard: India have qualified for the semifinals after the Netherlands stunned South Africa by 13 runs.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/india-vs-zimbabwe-live-cricket-score-t20-world-cup-2022-ind-vs-zim-latest-scorecard-at-melbourne-101667711360146.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Zimbabwe Highlights, T20 World Cup: IND beat ZIM by 71 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJpKD03qICiPyNKZTBDVtRbObvpH2cWwF1DuytUdFDkY4sspQ7-Oqnk-PXiyL64iHReAoPJOij" alt="India vs Zimbabwe Highlights, T20 World Cup: IND beat ZIM by 71 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs Zimbabwe T20 World Cup 2022 Highlights: India beat Zimbabwe by 71 runs with Suryakumar Yadav and R Ashwin emerging as the star performers of the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/live/cricket/cricket-news/ind-vs-zim-live-cricket-score-t20-world-cup-2022-super-12-india-vs-zimbabwe-t20i-match-at-melbourne'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs ZIM T20: भारत ने जिम्बाब्वे को 71 रन से हराया, सेमीफाइनल में ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFU3Q7C4X0EKS5eIuIOBHWfFK95pc75Zxq_Zd4g_I1HDBf8rLnA0lQuQ-eqoo1R3I-WDT-NQEV" alt="IND vs ZIM T20: भारत ने जिम्बाब्वे को 71 रन से हराया, सेमीफाइनल में ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Live Cricket Score (IND vs ZIM) India vs Zimbabwe T20 World Cup: नमस्कार, अमर उजाला के लाइव ब्लॉग में आपका स्वागत&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-india-vs-zimbabwe-t20-world-cup-2022-live-cricket-score-and-updates-4851089.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Zimbabwe Highlights: भारत की जिम्बाब्वे पर बड़ी जीत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2ICJhoXiCp58rQ6ODWeYijWbqf5ZBAtuNvBN_QAL18vZPq93-bjqJDGjZ2xurSYXvvu_F30R1" alt="India vs Zimbabwe Highlights: भारत की जिम्बाब्वे पर बड़ी जीत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs Zimbabwe LIVE Scorecard: भारत ने जिम्बाब्वे को टी20 विश्व कप सुपर 12 के आखिरी मुकाबले में 71 रन&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/au/cricket/news/india-vs-zimbabwe-live-updates-highlights-and-result-t20-world-cup-match/d7guo5bzve5fgmfx4amci9dx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Zimbabwe T20 World Cup result: Suryakumar Yadav ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ6OcwYg8oNL3qsWuAGuOb5fejGR2qLrv2sX2zfNnd9oZvnJ2R4rELBWFb6OubDI0_L3st-b5HT" alt="India vs Zimbabwe T20 World Cup result: Suryakumar Yadav ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India have continued their strong run of form in the T20 World Cup, sealing top spot in their group with a comprehensive 71-run victory over Zimbabwe on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/live-updates/magazine/sports/india-vs-zimbabwe-icc-t20-world-cup-2022-super-12-live-scores-melbourne-cricket-ground--235124'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Zimbabwe, ICC T20 World Cup 2022, Super 12, India Beat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfJ161X2CX36KUbImK0k20KYkE9YVrOyFa9SwxQIKLa3njdMy_wfVAKgXzniz1VLlsiYBrWxab" alt="India vs Zimbabwe, ICC T20 World Cup 2022, Super 12, India Beat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India outplayed Zimbabwe in all departments securing the top spot in the Group 2 table. Suryakumar Yadav was adjudged the Player of the Match for his 61*.</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-india-vs-zimbabwe-live-score-icc-mens-t20-world-cup-2022-today-match-live-updates-in-hindi-7314377.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ind vs Zim Highlights: ZIM को भारत ने 71 रनों से धोया, इंग्लैंड से होगा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSs5GoBPycDimb9aegm7RN_-mtRToXS7v0pBd0QANceFumlg7Mha58zYZIUR31ys4G1ls0MVEMu" alt="Ind vs Zim Highlights: ZIM को भारत ने 71 रनों से धोया, इंग्लैंड से होगा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टीम इंडिया और जिम्बाब्वे के बीच मेलबर्न क्रिकेट ग्राउंड पर टी20 वर्ल्ड कप 2022 के सुपर-12&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/cricket/t20-world-cup/news/india-vs-zimbabwe-live-streaming-score-update-melbourne-today-match/article66100518.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs ZIM Highlights, T20 World Cup: India beats Zimbabwe, to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTmD0AhzVTQGWoykU2MOTSiGgBRvHHg7ml0fNqoQerIdB9J5CnTfhCpgPmqdDcDaAoRwIslrO5V" alt="IND vs ZIM Highlights, T20 World Cup: India beats Zimbabwe, to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here are the highlights of IND vs ZIM in T20 World Cup 2022, following which India entered the semifinals. The Men in Blue will meet England.</p></div>
            </div>
        </a><a href='https://www.cnbctv18.com/sports/india-vs-zimbabwe-live-score-t20-world-cup-2022-ind-vs-zim-match-updates-melbourne-15103551.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Zimbabwe Highlights, T20 World Cup 2022: IND win by 71 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGWNWg8b4GXYXJnoBNkojerHquUD9lVn7Uif5MhWE72vg5osF1yhIPboeHYBn2g_mrAZRizXUp" alt="India vs Zimbabwe Highlights, T20 World Cup 2022: IND win by 71 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs Zimbabwe Live Score Updates: Catch T20 world cup 2022 Ind vs Zim live updates, full scorecard, latest scorecard updates at CNBCTV18.</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/sports/cricket/icc-t20-world-cup-2022/india-vs-zimbabwe-live-cricket-score-ind-vs-zim-match-in-melbourne-jst-aml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ind vs Zim Highlights: भारत ने जिम्बाब्वे को 71 रनों से हराया, सेमीफाइनल ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmpJni8MQfCSMXfOc8x6dWFKX69UOeVUMQRietL0x1Zzrj0fD9SutE8SSUKcWbZtlbsQXy33HF" alt="Ind vs Zim Highlights: भारत ने जिम्बाब्वे को 71 रनों से हराया, सेमीफाइनल ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs Zimbabwe Live: टी20 वर्ल्ड कप 2022 में आज भारत और जिम्बाब्वे के बीच सुपर-12 का आखिरी मैच खेला&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}