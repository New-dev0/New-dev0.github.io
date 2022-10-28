import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sports</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sports"/>
        <meta name="description" content="Trending News about Sports" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sports</h1>
            <Image width={800} height={500} src="" alt="Sports"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/ht-insight/economy/how-sports-can-be-a-marker-for-holistic-development-101666856968178.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How sports can be a marker for holistic development</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcThv9qK7JJAK4nVrJkyN32OZQuyp9b034vp2Om0AmcYMWEvbnn57GPocu7cYkhDdDwYp3ezBgi5" alt="How sports can be a marker for holistic development" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the Commonwealth Games 2022, India won 61 medals. We have steadily progressed in the past decade thanks to additional funding and government support for&nbsp;...</p></div>
            </div>
        </a><a href='https://orissadiary.com/why-is-an-air-track-tumbling-mat-useful-for-sports-training/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Is An Air Track Tumbling Mat Useful For Sports Training?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRfLe-h0E-BuaL5xDoRqGpesg0n2BrBGcddB1P0zN4KcXBoyKSsxatIKz-Nm1qKSV7t-h3oZ5TS" alt="Why Is An Air Track Tumbling Mat Useful For Sports Training?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Athletes know that it&#39;s essential to train in order to keep their skills sharp and improve their performance in order to succeed at their sport.</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/cities/puducherry/sports-facility-built-at-a-cost-of-7-crore-remains-idle/article66060158.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sports facility built at a cost of ₹7 crore remains idle</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTU3LnU0xHVuhax99VBhiDqw9_lXDYE22kD7_L7XCH1W1G5AHtalR8dPLrWuX2tMhTsgen1O3Uw" alt="Sports facility built at a cost of ₹7 crore remains idle" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After almost four years since its inauguration, the indoor hall remains out of bounds for sports enthusiasts largely due to official apathy in providing&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/uttarakhand/nainital/dk-sports-academy-won-the-match-kaladungi-news-hld480165748'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>डीके स्पोर्ट्स एकेडमी ने मैच जीता</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQYNyJ4_Q8cbNvz6b31Q9o5Tbtpz4cFGulKPKbfdkUDsG20-8z1OM4TvDJKUaGA-_9pBBl1WlkF" alt="डीके स्पोर्ट्स एकेडमी ने मैच जीता" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>पहले बल्लेबाजी करने उतरी वैंडी एकलव्य एकेडमी ने 31 ओवर में सभी विकेट खोक&nbsp;...</p></div>
            </div>
        </a><a href='https://arunachal24.in/arunachal-8-am-sports-diet-scholarship-22022-launched/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arunachal: 8 AM Sports Diet Scholarship-22022 launched</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZsWP-52zMyDnZYteVJ4-aOqSe-YY1tvMNpVNj9cmjkf7dqRlJdAKnv5ZcLam4OhOTcAxa9D4W" alt="Arunachal: 8 AM Sports Diet Scholarship-22022 launched" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ITANAGAR- “8 AM Sports Diet Scholarship-22022”, first of its type in India, an initiative of NGO Helping Hands and sponsored by VRIPL was launched.</p></div>
            </div>
        </a><a href='https://www.healthline.com/health/what-is-a-sports-hernia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What Is a Sports Hernia?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSlPb97e1MPUdyV19XV1yhAyVzV7Qxr0zcdMfO9DyB8mMTMHgE3VsgPT1jP8QT_gnMhtWLgeVxI" alt="What Is a Sports Hernia?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A sports hernia is a painful athletic injury that affects the tendons or muscles of the lower groin. It&#39;s often caused by forceful or repetitive movements&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/brettknight/2022/10/27/red-bull-adidas-and-the-76ers-this-weeks-most-interesting-sports-business-stories/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Red Bull, Adidas And The 76ers: This Week&#39;s Most Interesting ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-McT87LEdnsFkpm02lX8tMb1fxx37NYZJ8yyjTNP1BJ8yHOaf28XDeFmHwPz7yYkq2eYuLbOk" alt="Red Bull, Adidas And The 76ers: This Week&#39;s Most Interesting ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In this week&#39;s SportsMoney Playbook: the Yankees&#39; new billionaires, a Formula 1 owner&#39;s $20 billion legacy and IndyCar&#39;s 16-year-old driver.</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/uttarakhand/haldwani/story-dk-sports-beat-wendy-eklavya-7272304.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>डीके स्पोर्ट्स ने वेंडी एकलव्य को हराया</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="डीके स्पोर्ट्स ने वेंडी एकलव्य को हराया" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टॉस जीतकर पहले बल्लेबाजी करने उतरी वेंडी एकलव्य एकेडमी ने 31 ओवर में 52 रन बनाए। लक्ष्य का&nbsp;...</p></div>
            </div>
        </a><a href='https://arunachaltimes.in/index.php/2022/10/28/8-am-sports-diet-scholarship-launched/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;8 am sports diet scholarship&#39; launched | The Arunachal Times</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRtaMlPG7sEv5oXz2sU8ugYURg-JJowQZJ_soBWi0JFfI9kmAa1S_cSr_8lzUCJa8Zv4qLz8qi3" alt="&#39;8 am sports diet scholarship&#39; launched | The Arunachal Times" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ITANAGAR, 27 Oct: &#39;8 AM Sports Diet Scholarship-2022&#39;, an initiative of NGO Helping Hands (HH), sponsored by Gurgaon-based VR Industries Private Limited&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/bihar/purnia/story-204-clubs-participated-in-the-panorama-sports-competition-7274203.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>204 क्लबों ने पनोरमा स्पोर्ट्स प्रतियोगिता में भाग लिया</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="204 क्लबों ने पनोरमा स्पोर्ट्स प्रतियोगिता में भाग लिया" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>पनोरमा ग्रुप द्वारा निर्मित पनोरमा स्पोर्ट्स कॉम्प्लेक्स परिसर ई होम्स पूर्णिया में&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}