import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>विराट कोहली</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,विराट कोहली"/>
        <meta name="description" content="Trending News about विराट कोहली" /></Head><Template>
            <h1 style={{fontSize: "30"}}>विराट कोहली</h1>
            <Image width={800} height={500} src="https://www.jagranimages.com/images/newimg/02112022/02_11_2022-kohli_23177465.jpg" alt="विराट कोहली"/>
            <h3>Recent News</h3>
            <a href='https://www.jagran.com/cricket/headlines-t20-world-cup-2022-ind-vs-ban-virat-kohli-break-sachin-tendulkar-records-most-runs-in-australia-23177465.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 WC: विराट कोहली ने तोड़ा सचिन का रिकॉर्ड, ऑस्ट्रेलिया में सबसे ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSgfrba74rnX4RijGivTTUd8mb5mM07zAiaohRme6sYnGHXwJFNKdHM0sWUrFLezvG3BBluAuW6" alt="T20 WC: विराट कोहली ने तोड़ा सचिन का रिकॉर्ड, ऑस्ट्रेलिया में सबसे ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Virat Kohli टी20 वर्ल्ड कप 2022 की बात करें तो विराट कोहली शानदार फॉर्म में चल रहे हैं।</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-t20-world-cup-ind-vs-ban-why-does-virat-kohli-consider-the-adelaide-oval-ground-lucky-big-revelation-4834017.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDEO: एडिलेड ओवल ग्राउंड को क्यों लकी मानते हैं विराट कोहली? खुद किया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDd51guQsQVwf3D34gqtfTur0AYdFz2P258XlftWPN1KeOuBA8NRpvrPX_TW6Q2tonOSJR8egj" alt="VIDEO: एडिलेड ओवल ग्राउंड को क्यों लकी मानते हैं विराट कोहली? खुद किया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T20 World Cup IND vs BAN: विराट कोहली ने कहा कि जब उन्हें पता चला कि टी-20 वर्ल्ड कप ऑस्ट्रेलिया&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/t20-world-cup-2022-virat-kohli-record-india-vs-bangladesh-highest-scorer-mahela-jayawardene-t20-match-adelaid'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN: विराट कोहली टी20 वर्ल्ड कप में सबसे सफल बल्लेबाज बने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT4vjj7uZexvf_TxmH49BvjUmlgqsce-GyuTIGzW_3Rxlyddj4XSfND5ZUl5qAZVhJ5mY6qflEW" alt="IND vs BAN: विराट कोहली टी20 वर्ल्ड कप में सबसे सफल बल्लेबाज बने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>कोहली का यह पांचवां टी20 वर्ल्ड कप है। वह इस बार टूर्नामेंट में शानदार फॉर्म में हैं।</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/t20-world-cup-2022-india-vs-bangladesh-match-virat-kohli-shakib-al-hasan-bemused-no-ball-tspo-1567005-2022-11-02'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN T20 World Cup: विराट कोहली के नो-बॉल मांगने पर चिढ़ गए ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR9UXu-PTCLiG4H5RbQqk5KWjmu7GtXGVe6UTybiualAv3qYcra6SQ3ejRCcJIqKm0lFarFBXay" alt="IND vs BAN T20 World Cup: विराट कोहली के नो-बॉल मांगने पर चिढ़ गए ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टीम इंडिया के स्टार बल्लेबाज विराट कोहली टी20 वर्ल्ड कप में शानदार खेल दिखा रहे हैं.</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/virat-kohli-record-most-runs-in-t20-world-cup-history-kohli-india-vs-bangladesh-match-score-updates-tspo-1566957-2022-11-02'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Virat Kohli T20 World Cup: विराट कोहली ने रचा इतिहास, टी20 वर्ल्ड कप ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSdhOpnJKRTC9S0xTOu8hY7LGEXob_9_J3c1fPrwY3hM5oLRsiF7dVWQhcKx1J0aOhLIYaaiC6K" alt="Virat Kohli T20 World Cup: विराट कोहली ने रचा इतिहास, टी20 वर्ल्ड कप ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारतीय टीम ने टी20 वर्ल्ड कप 2022 में अपना चौथा मैच बुधवार को बांग्लादेश के खिलाफ एडिलेड&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-virat-kohli-becomes-highest-run-scorer-in-the-mens-t20-world-cup-7296179.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>विराट कोहली ने रचा इतिहास, टी20 वर्ल्ड कप में सबसे ज्यादा रन बनाने वाले ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7Y_Z-3YXbsx_0EuahfLRgoX8cS60pkH_dpML7s-1_r9v1zGprHgIGjTkWLYLoX_E0IS1bhII8" alt="विराट कोहली ने रचा इतिहास, टी20 वर्ल्ड कप में सबसे ज्यादा रन बनाने वाले ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>बांग्लादेश के खिलाफ जारी मैच में 16वां रन बनाते ही विराट कोहली टी20 वर्ल्ड कप में&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/t20-wc-2022-ind-vs-ban-big-statement-of-virat-kohli-after-his-knock-against-bangladesh-said-this-thing-2250909'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN: जानिए बांग्लादेश के खिलाफ रोमांचक मुकाबले में टीम इंडिया की ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQX54aq3ZuwgqIPOSQwYzQpbC_M5yLTMJSnL1U4mTv2tEaNgtxstvRc9-ywS4wthz0QrWsAS_4M" alt="IND vs BAN: जानिए बांग्लादेश के खिलाफ रोमांचक मुकाबले में टीम इंडिया की ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Virat Kohli: बांग्लादेश के खिलाफ 64 रनों की शानदार अर्धशतकीय पारी के बाद विराट कोहली ने कहा&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/sports/cricket/virat-kohli-vs-shakib-al-hasan-on-no-ball-controversy-ind-vs-ban-match/1422476'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN: विराट कोहली के इस एक इशारे पर भड़क उठे बांग्लादेशी कप्तान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTCXFYYPbsv9CGDTgMQWh9_JfeuSzHCUoS9SVXZqZkolAOUNXykfrS_fi2mNEZPHsrS8_NhPRzl" alt="IND vs BAN: विराट कोहली के इस एक इशारे पर भड़क उठे बांग्लादेशी कप्तान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टी20 वर्ल्ड कप 2022 (T20 World Cup 2022) में विराट कोहली (Virat Kohli) का बल्ला जमकर बोल रहा है.</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/t20-wc-2022-ind-vs-ban-dinesh-karthik-is-unhappy-from-virat-kohli-after-run-out-video-goes-viral-2250783'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN: रन आउट के बाद विराट कोहली से नाखुश नजर आए दिनेश ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTcqa-7DWL97FAJT6wzvVKYSyB_RTmFQeBuimXTRkLKv6YD1Yofprqap_1ZBiG94X6O7SrdGmsK" alt="IND vs BAN: रन आउट के बाद विराट कोहली से नाखुश नजर आए दिनेश ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dinesh Karthik: बांग्लादेश के खिलाफ 7 रनों पर रन आउट होने के बाद दिनेश कार्तिक विराट कोहली ने&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/ind-vs-ban-dinesh-karthik-was-unhappy-with-virat-kohli-after-getting-run-out-t20-world-cup-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN Video: रन आउट होने पर विराट कोहली से भिड़े दिनेश कार्तिक ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTl3ZXw3gnA-mqc6ZjOBH0jiQghkiz3kSRggZNxwAKT307i7o6HSuPqqskQ5oJ1fGS677J_7t18" alt="IND vs BAN Video: रन आउट होने पर विराट कोहली से भिड़े दिनेश कार्तिक ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs BAN Video: रन आउट होने पर विराट कोहली से भिड़े दिनेश कार्तिक, देखें मैदान पर क्या हुआ?</p></div>
            </div>
        </a>
        </Template></>;
}