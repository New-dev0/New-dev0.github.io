import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>रोहित शर्मा</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,रोहित शर्मा"/>
        <meta name="description" content="Trending News about रोहित शर्मा" /></Head><Template>
            <h1 style={{fontSize: "30"}}>रोहित शर्मा</h1>
            <Image width={800} height={500} src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/04/30/e83b03f9b75b4dc64ca7a5d60710c6c3_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628" alt="रोहित शर्मा"/>
            <h3>Recent News</h3>
            <a href='https://www.abplive.com/sports/rohit-sharma-became-fifth-india-batter-to-score-a-fifty-while-batting-at-no-9-in-men-s-odis-2277669'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN: रोहित शर्मा ने हासिल की बड़ी उपलब्धि, ऐसा करने वाले बने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTPN3Fvadfuz6xL_JRvHn6IaL9U1TQwFWm4OR3njzPh8QWu1walCvQ2m-qYZVIL2tnq4vP6nNo4" alt="IND vs BAN: रोहित शर्मा ने हासिल की बड़ी उपलब्धि, ऐसा करने वाले बने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rohit Sharma: बांग्लादेश के खिलाफ खेले गए दूसरे वनडे मुकाबले में बाएं हाथ का अंगूठा चोटिल&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-ind-vs-ban-rohit-sharma-said-players-need-to-give-more-than-100-for-india-5018281.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN: सीरीज गंवाने के बाद रोहित शर्मा का फूटा गुस्सा, कहा- अगर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGSzTz6aEe7cuX3iAH1pVHk_6yZJ1dluWrQgcn4XkT-prGC-sST8T4csXjus9i0qWUICqfgwPx" alt="IND vs BAN: सीरीज गंवाने के बाद रोहित शर्मा का फूटा गुस्सा, कहा- अगर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs BAN: भारत को दूसरे वनडे मुकाबले में 5 रन से हार का सामना करना पड़ा. रोहित शर्मा और&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/rohit-sharma-injury-update-test-series-replacement-abhimanyu-easwaran-ind-vs-ban-tspo-1591145-2022-12-08'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rohit Sharma Ind Vs Ban: टेस्ट सीरीज से भी बाहर होंगे रोहित शर्मा? ये ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTd-IwoCwm83arHoG2ffGVw3jBVukggJz9VD1qjbVX46O54k68rQb0pMJtsmW8191gDKDaTkemk" alt="Rohit Sharma Ind Vs Ban: टेस्ट सीरीज से भी बाहर होंगे रोहित शर्मा? ये ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>बांग्लादेश के खिलाफ दूसरे वनडे में अंगूठे पर चोट लगवा चुके रोहित शर्मा अब टेस्ट सीरीज&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/rohit-sharma-warning-to-nca-after-injury-concerns-unfit-players-in-team-india-india-vs-bangladesh-series'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN: रोहित शर्मा ने NCA पर उठाए सवाल? सीरीज हारने के बाद बोले ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQriaDmgGbAE-uKJVMH2cJd7bUwTGIOg2ihmm21bWC3MRNiu3t2mEUWMgor1b7phSoZSgjCMJK6" alt="IND vs BAN: रोहित शर्मा ने NCA पर उठाए सवाल? सीरीज हारने के बाद बोले ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs BAN: रोहित शर्मा ने NCA पर उठाए सवाल? सीरीज हारने के बाद बोले- अनफिट खिलाड़ी भी देश के लिए&nbsp;...</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/sports/cricket/cricket-news/abhimanyu-easwaran-likely-to-replace-rohit-sharma-in-bangladesh-test-series/articleshow/96089827.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN: चोटिल रोहित शर्मा की जगह लेने के लिए तैयार &#39;कप्तान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_JUmmhbis4I44c5VPYrc9koXqxNMmyTJw57m_r92uIQq8fsQV8dmQx84pP-icrTHcGMtSm0kn" alt="IND vs BAN: चोटिल रोहित शर्मा की जगह लेने के लिए तैयार &#39;कप्तान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rohit Sharma Injury India vs Bangladesh: भारतीय टीम के कप्तान रोहित शर्मा बांग्लादेश दौरे पर चोटिल हो गए&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-suryakumar-yadav-tweet-went-viral-after-rohit-sharma-fighting-inning-vs-bangladesh-2nd-odi-did-you-see-it-ind-vs-ban-7460068.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>रोहित शर्मा की जुझारू पारी के बाद वायरल हुआ सूर्यकुमार यादव का ये ट्वीट ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2qziif0Mbnyk6iW8QdCv2NAFrJAshVulMuN8pYlhWGgVJyq81yh7OJoafwaM2LDPFCHzD6-k2" alt="रोहित शर्मा की जुझारू पारी के बाद वायरल हुआ सूर्यकुमार यादव का ये ट्वीट ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>रोहित शर्मा की इस पारी को देखने के बाद सोशल मीडिया पर उनकी जमकर तारीफ हो रही है।</p></div>
            </div>
        </a><a href='https://hindi.crictoday.com/cricket-hindi/cricket-hindi-news/ban-vs-ind-rohit-sharma-gave-a-big-statement-regarding-the-fitness-and-workload-of-the-players/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BAN vs IND: रोहित शर्मा ने खिलाड़ियों की फिटनेस और वर्कलोड को लेकर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_m4HIEga3mK2SyoVH9UZUCf0zAGsFe13DY2qkCDwzFzgTKY5qSmdi1zmUgowcBWeovs9oZ5yf" alt="BAN vs IND: रोहित शर्मा ने खिलाड़ियों की फिटनेस और वर्कलोड को लेकर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इसके अलावा उन्होंने कहा कि खिलाड़ी बहुत ज़्यादा क्रिकेट खेल रहे हैं और हमें उनके&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/ind-vs-ban-five-players-who-played-despite-being-injured-rohit-sharma-anil-kumble-2277711'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rohit Sharma: चोटिल होने के बावजूद रोहित ने की बल्लेबाजी, पहले भी ये पांच ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR8luHtkNd-sNNM5RBn_kb4FGL09XrImoEQZWnVh0ErBnklimwQc8xcnlBXUac9w2la-VESN913" alt="Rohit Sharma: चोटिल होने के बावजूद रोहित ने की बल्लेबाजी, पहले भी ये पांच ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rohit Sharma: भारतीय कप्तान रोहित शर्मा ने चोटिल अंगूठे के साथ बांग्लादेश के खिलाफ दूसरे&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/short-videos/video/cricket-news-tam-india-captain-rohit-sharma-will-not-play-test-match-mmt-1591448-2022-12-08'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rohit Sharma Ind Vs Ban: रोहित शर्मा नहीं खेलेंगे टेस्ट मैच?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYICfDWtCdv7CXWHgtmKnGrWXzZbcm2zLfdL95SCPG1B8UbwFyuULOLBGRD0woWaO6uiWMy0hT" alt="Rohit Sharma Ind Vs Ban: रोहित शर्मा नहीं खेलेंगे टेस्ट मैच?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rohit Sharma Ind Vs Ban: टेस्ट सीरीज से भी बाहर होंगे रोहित शर्मा? ये स्टार प्लेयर करेगा रिप्लेस.</p></div>
            </div>
        </a><a href='https://www.thelallantop.com/sports/post/indvsban-rahul-dravid-statement-after-loss-is-only-shielding-players-rohit-sharma-has-to-answer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>असली विलेन राहुल द्रविड़ हैं लेकिन जवाब तो रोहित शर्मा को भी देना होगा..!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1T3wAzIyef1VYmgH1kZ4SQ3ddDy__-5MKhhf5aWYrqh5AmPWYkYZrkdsbNVGfDEtDBqkhsWWk" alt="असली विलेन राहुल द्रविड़ हैं लेकिन जवाब तो रोहित शर्मा को भी देना होगा..!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>असली विलेन राहुल द्रविड़ हैं लेकिन जवाब तो रोहित शर्मा को भी देना होगा..! परफॉर्म नहीं भी&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}