import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rohit Sharma</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rohit Sharma"/>
        <meta name="description" content="Trending News about Rohit Sharma" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rohit Sharma</h1>
            <Image width={800} height={500} src="https://navbharattimes.indiatimes.com/photo/msid-94666077,imgsize-42092/pic.jpg" alt="Rohit Sharma"/>
            <h3>Recent News</h3>
            <a href='https://navbharattimes.indiatimes.com/sports/cricket/india-vs-south-africa/rohit-sharma-superfan-crosses-all-limits-to-meet-india-captain-in-indore-watch-video-ind-vs-sa-2022/articleshow/94666043.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rohit Sharma fan: स्टेडियम की पहली मंजिल से कूदा, जोखिम में डाली जान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRDX8vFQ7oYAx-HtNDmii7Jaxt4A581RFP10LY-x_yuRTxOg2fBnHIb6G3xj3NBR9zy0HFPd_Oz" alt="Rohit Sharma fan: स्टेडियम की पहली मंजिल से कूदा, जोखिम में डाली जान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ind vs Sa 2022 Rohit Sharma Fan: तिरुवनंतपुरम में खेले गए पहले मैच में भी फैंस के बीच गजब उत्साह था।</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/indian-cricket-team-rohit-sharma-suryakumar-yadav-big-concern-2231359'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suryakumar Yadav की फॉर्म हमारे लिए सबसे बड़ी चिंता का विषय, Rohit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS1RZNMNQohARdISenPOF5KT1GkqUgSiGA_IcTSq_6JEEgii0Qf_S71uzZvI738JB0bT4VZDe0b" alt="Suryakumar Yadav की फॉर्म हमारे लिए सबसे बड़ी चिंता का विषय, Rohit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारतीय टीम की चिंता को लेकर पूछे गए सवाल पर रोहित शर्मा ने Suryakumar Yadav का नाम लेते हुए&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/rohit-sharma-create-history-after-winning-series-against-south-africa-2231395'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs SA: दक्षिण अफ्रीका से सीरीज जीतकर रोहित शर्मा बनाया खास ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTV7qQuF6F-Yey3aPwM42n_Hwmjj7bi_hXXwib8ci65UzHotFEnzwjfdT6l0z6ThIR0jSA6VCve" alt="IND vs SA: दक्षिण अफ्रीका से सीरीज जीतकर रोहित शर्मा बनाया खास ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rohit Sharma: दक्षिण अफ्रीका के खिलाफ टी20 सीरीज जीतकर भारतीय कप्तान रोहित शर्मा ने इतिहास&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-rohit-sharma-completes-10-bilateral-series-wins-after-taking-charge-as-full-time-captain-of-team-india-7177787.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>रोहित शर्मा का परफेक्ट 10, फुल टाइम कैप्टन बनने के बाद से जारी है हिटमैन ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTx-ev-9-QkxIHpNF4JWgfzxPiS4ST1L1OrnLxKhyfuc7q8tJIKECGOe97riCoW5uEEpBZT8Yg6" alt="रोहित शर्मा का परफेक्ट 10, फुल टाइम कैप्टन बनने के बाद से जारी है हिटमैन ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>रोहित शर्मा ने लगातार 10वीं द्विपक्षीय सीरीज जीतने का कमाल किया है। फुल टाइम कैप्टन&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.insidesport.in/latest/rohit-sharma-after-winning-the-series-against-south-africa-rohit-created-history-the-captain-victory-chariot-continues-check-out-503937/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rohit Sharma: साउथ अफ्रीका के खिलाफ सीरीज जीतने के बाद रोहित ने रचा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5pog7mzjM9Be2XLLkBKk2r4WG2Nro52zHlF-IkoCPrSz_h7sL7V3GYU9ZCn8khyBK5I2zH2Wc" alt="Rohit Sharma: साउथ अफ्रीका के खिलाफ सीरीज जीतने के बाद रोहित ने रचा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rohit Sharma: टी20 वर्ल्ड कप 2021 (T20 World Cup 2021) के बाद से जब से रोहित शर्मा (Rohit Sharma) ने सभी फॉर्मेट&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/t20-world-cup-2022-rohit-sharma-is-in-such-form-this-year-have-a-look-at-the-figures-2022-10-05-890316'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup 2022: रोहित शर्मा इस साल ऐसे फार्म में हैं, आंकड़ों पर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS2f0RXXz4GwlgD5K3BYejQsXhrFMAZj_W0gZFxUpap1hpOMtbm-8ipqhoar5hSNRU8KaZOS6CT" alt="T20 World Cup 2022: रोहित शर्मा इस साल ऐसे फार्म में हैं, आंकड़ों पर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T20 World Cup 2022: टी20 विश्व कप 2022 में भारतीय टीम पहले ही मैच में 23 अक्टूबर को पाकिस्तान के&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/rohit-sharma-broke-virat-kohli-embarrassing-record-ms-dhoni-never-did-this-work-2022-10-05-890221'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>रोहित शर्मा ने तोड़ा विराट कोहली का शर्मनाक रिकॉर्ड, एमएस धोनी ने कभी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQa-booXERscvyhBzAnZ9eQWuURUFGC6_j4f1rWZEoH1XOmZBzeM0yW7OSZ-FekGJymEkvAzqX9" alt="रोहित शर्मा ने तोड़ा विराट कोहली का शर्मनाक रिकॉर्ड, एमएस धोनी ने कभी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारत बनाम दक्षिण अफ्रीका सीरीज के आखिरी मैच में विराट कोहली और केएल राहुल को रेस्ट&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-rohit-sharma-becomes-second-most-successful-captain-in-t20-format-4697905.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>कोहली-धोनी को पछाड़ने के बाद क्या रोहित शर्मा लाएंगे वर्ल्ड कप ट्रॉफी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRY-0_Jm8i_qPD1CgXyv9OvG0e9HuTRib0NDsj9V_B0zS2GW2Oc7oq-3l8wrLJ9GZ4YZGslNEK9" alt="कोहली-धोनी को पछाड़ने के बाद क्या रोहित शर्मा लाएंगे वर्ल्ड कप ट्रॉफी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>नई दिल्ली. रोहित शर्मा (Rohit Sharma) की कप्तानी में टीम इंडिया ने अभी तक बेहतरीन प्रदर्शन&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-rohit-sharma-give-incredible-reaction-after-sarcastic-concern-remark-on-suryakumar-yadav-form-7177693.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>रोहित शर्मा ने सूर्यकुमार यादव की फॉर्म को बताया चिंता का विषय, फिर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSLodzXR6z6y2oBpjE6JfE8Oa-jwPiOgx5HDh-W2Z0GqXOz7p6kK86zQOdyPBIEi10qMr9_3eGu" alt="रोहित शर्मा ने सूर्यकुमार यादव की फॉर्म को बताया चिंता का विषय, फिर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टीम इंडिया के कप्तान रोहित शर्मा ने सूर्यकुमार यादव की फॉर्म को चिंता का विषय बताया,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.agniban.com/shameful-record-registered-in-the-name-of-rohit-sharma-was-out-on-zero/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>रोहित शर्मा के नाम दर्ज है शर्मनाक रिकार्ड, जीरो पर हुए थे आउट</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTt33S8QBG0jMu_D3V5BbYoFWR8anbtfkb7-P-700O8gDfUD-AzJ_5sjS5RY0DCKcH0o8YyVqC0" alt="रोहित शर्मा के नाम दर्ज है शर्मनाक रिकार्ड, जीरो पर हुए थे आउट" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>मुंबई। भारतीय टीम के कप्तान रोहित शर्मा (Indian team captain Rohit Sharma) का फॉर्म टीम के लिए थोड़ा&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}