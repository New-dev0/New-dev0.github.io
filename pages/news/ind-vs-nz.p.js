import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>IND vs NZ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,IND vs NZ"/>
        <meta name="description" content="Trending News about IND vs NZ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>IND vs NZ</h1>
            <Image width={800} height={500} src="https://www.jagranimages.com/images/newimg/21112022/21_11_2022-kane_williamson_nz_23217835.jpg" alt="IND vs NZ"/>
            <h3>Recent News</h3>
            <a href='https://www.jagran.com/cricket/headlines-ind-vs-nz-kane-williamson-pulled-out-from-third-t20i-tim-southee-will-lead-new-zealand-23217835.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ: तीसरे T20I से बाहर हुए कप्तान विलियमसन, इस खिलाड़ी को ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSeEkZ9u0NadNzSGh1C0Bs4e6CFXa0HtxOMbkCPJbr2bJSp-HSATYfsZgPnjDRHPo38MmteZwqX" alt="IND vs NZ: तीसरे T20I से बाहर हुए कप्तान विलियमसन, इस खिलाड़ी को ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ तीसरे और आखिरी टी20 मैच से पहले न्यूजीलैंड की टीम को बड़ा झटका लगा है।</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/big-blow-for-new-zealand-kane-williamson-to-miss-3rd-t20i-against-india-tim-southee-captain'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ 3rd T20: तीसरे टी20 से पहले न्यूजीलैंड को झटका, कप्तान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQDI7iglHDFZ9Omp7lBUCvyezB4bx_uUBIrotQIQNw5M8HDDzVN-LB0gzMobW2mEECz6h_wHceY" alt="IND vs NZ 3rd T20: तीसरे टी20 से पहले न्यूजीलैंड को झटका, कप्तान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>32 साल के विलियम्सन वनडे सीरीज से पहले टीम से जुड़ जाएंगे। टी20 सीरीज के बाद न्यूजीलैंड की&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/live/india-vs-new-zealand-live-score-updates-2nd-t20-ind-vs-nz-cricket-match-in-bay-oval-aml-jst'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs New Zealand Highlights: भारत ने न्यूजीलैंड को 65 रन से हराया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTm72nW8yYH4O8psqIMDQs6JJbiFejbA-5uT_A98lua9SOrCJHGKzstwkCOEYxHJe9HJNU0ixZt" alt="India vs New Zealand Highlights: भारत ने न्यूजीलैंड को 65 रन से हराया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs New Zealand t20 live score: भारत और न्यूजीलैंड के बीच आज तीन मैचों की टी20 सीरीज का दूसरा&nbsp;...</p></div>
            </div>
        </a><a href='https://lagatar24.com/ind-vs-nz-kane-williamson-to-miss-3rd-t20i-tim-southee-to-lead-team/132775/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ind vs NZ: Kane Williamson to miss 3rd T20I, Tim Southee to lead ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTbdck2IOZ1WD6QNSMXTLexOn-yrW4OOorTRBX4EHjwwUy5tNaydMWuAnfmf5R4-o46BOyCDoyn" alt="Ind vs NZ: Kane Williamson to miss 3rd T20I, Tim Southee to lead ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lagatar24 Desk. New Delhi, Nov 21: Kane Williamson won&#39;t be available for New Zealand&#39;s third and final T20I match against India on Tuesday, November 22 in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/ind-vs-nz-new-zealand-captain-kane-williamson-will-miss-third-t20i-against-india-2022-11-21-904607'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ: तीसरे टी20 से पहले न्यूजीलैंड को लगा बड़ा झटका, कप्तान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTBUrqXhrTeUTypS38YNECV5wVzGPU7hsrLHkzEpYxgPyTSOteBAleww8xGKnM7xhziwrSSzSFw" alt="IND vs NZ: तीसरे टी20 से पहले न्यूजीलैंड को लगा बड़ा झटका, कप्तान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ: भारत और न्यूजीलैंड के बीज तीन मैचों की टी20 सीरीज का अंतिम मुकाबला मंगलवार को&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/ind-vs-nz-kane-williamson-will-miss-the-3rd-t20-vs-india-know-the-reason-here-2263800'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ: तीसरे टी20 मुकाबले से पहले न्यूजीलैंड को लगा तगड़ा झटका ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQETWANFUWn7Omx3b00URs2sW5ZfJM_NCrSSJLHsn8Mf_g9v5dF2Mivi9UPhh9sKAapPFbKSzTR" alt="IND vs NZ: तीसरे टी20 मुकाबले से पहले न्यूजीलैंड को लगा तगड़ा झटका ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kane Williamson: भारत के खिलाफ तीसरे टी20 मुकाबले के पहले न्यूजीलैंड टीम को बड़ा झटका लगा है.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/zee-hindustan/sports-news/ind-vs-nz-2nd-t20i-series-live-hardik-pandya-opens-up-after-65-runs-victory-over-new-zealand-know-what-he-said/1450741'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ: कीवी टीम को रौंदने पर जानें क्या बोले कप्तान हार्दिक पांड्या ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT0NQlFjfYXe0rdOJyXvLcqnWEiKdJCUi9PEP7ryNH3jI24dbfgHTGXIMfL5sY9UHjVFCPQUisx" alt="IND vs NZ: कीवी टीम को रौंदने पर जानें क्या बोले कप्तान हार्दिक पांड्या ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारत और न्यूजीलैंड के बीच खेली जा रही 3 मैचों की टी20 सीरीज में भारतीय टीम ने बारिश से&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.insidesport.in/cricket-news/ind-vs-nz-dinesh-karthik-statement-said-it-is-starting-to-feel-like-suryakumar-yadav-is-playing-video-game-514926/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ: दिनेश कार्तिक का बयान, बोले-“ऐसा महसूस होने लगा है जैसे ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpgiXnuI0UVM79k79S0juU5oxczBkw31aolO6VWHGI1n42IrqYJ2IyOY_CDdTPwzfgovo5P3w-" alt="IND vs NZ: दिनेश कार्तिक का बयान, बोले-“ऐसा महसूस होने लगा है जैसे ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>वहीं इस मुकाबले के हीरो रहे सूर्यकुमार यादव (Suryakumar Yadav) के प्रदर्शन ने सभी का दिल जीत लिया&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-ind-vs-nz-2nd-t20i-suryakumar-yadav-2nd-indian-to-score-2-centuries-in-a-year-equals-rohit-sharma-record-4927973.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ: सूर्यकुमार यादव ने 2022 का दूसरा शतक जड़ा, रोहित शर्मा के ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTku4B3NNEYN-joCHAAnPEVji6dPvsNgKafalDW7ZuojqnPsWyc53ku1Gd0FHiv_iV-4iKJHmxb" alt="IND vs NZ: सूर्यकुमार यादव ने 2022 का दूसरा शतक जड़ा, रोहित शर्मा के ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ 2nd T20I: सूर्यकुमार यादव (Suryakumar Yadav) अपने करियर के सबसे बेहतरीन फॉर्म में चल रहे हैं.</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/ind-vs-nz-virat-kohli-tweet-on-suryakumar-yadav-century-inning-2022-11-20-904514'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ: विराट ने कहा- वीडियो गेम इनिंग, सूर्या ने भी दिया चौंकाने वाला ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQlI2XRzJqqhzhYT07T5vPFgn5EIUp9NQokuIX-cabsgWov83H815-rN8a39BVcEjbPCnRAzoig" alt="IND vs NZ: विराट ने कहा- वीडियो गेम इनिंग, सूर्या ने भी दिया चौंकाने वाला ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ: सूर्यकुमार यादव की शानदार शतकीय पारी पर विराट कोहली ने भी ट्वीट कर रिएक्शन दिया&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}