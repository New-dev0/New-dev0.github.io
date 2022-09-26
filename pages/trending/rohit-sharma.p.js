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
            <Image width={800} height={500} src="https://ss-i.thgim.com/public/incoming/bjm6m2/article65937246.ece/alternates/LANDSCAPE_615/1243497470.jpg" alt="Rohit Sharma"/>
            <h3>Recent News</h3>
            <a href='https://sportstar.thehindu.com/cricket/ind-vs-aus-rohit-sharma-bhuvneshwar-harshal-bowling-form-kohli-suryakumar-yadav/article65937257.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs AUS: Rohit Sharma on Bhuvneshwar-Harshal form, Kohli ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTntTxY62iO7RGekb93RAN_rzQzuC1krGpVPwMWQKryLcx_4AhRMz-OvseN202g9Kt6g-GRLYao" alt="IND vs AUS: Rohit Sharma on Bhuvneshwar-Harshal form, Kohli ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs AUS: Rohit Sharma has backed Bhuvneshwar Kumar and Harshal Patel to regain their form ahead of the T20 World Cup after lacklustre performances&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/just-feel-that-dinesh-needs-rohit-sharma-gives-verdict-on-karthik-vs-rishabh-pant-debate-after-australia-series-101664176661090.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rohit Sharma gives verdict on Karthik vs Pant debate after Australia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRinoPHdFxvj1MwTMWvbOekykoUAAxxQYLp4W7b4cPFpfuIafxB9jZU8-Cv9-cSUCrq9qnZiI9" alt="Rohit Sharma gives verdict on Karthik vs Pant debate after Australia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Speaking at the press conference after the conclusion of the Australia series on Sunday, Indian skipper Rohit Sharma asserted that Rishabh Pant and Dinesh&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/rohit-sharma-never-lose-a-single-series-in-rohit-sharma-captaincy-watch-his-record-as-permanent-captain-of-india-2022-09-26-887416'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rohit Sharma: रोहित के कप्तान बनते ही पलटी भारत की किस्मत, देखें भारत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRWEfFcy1JchX1tILBrF6tG16DIo8jRf_azs9QZLBpnAKZCBuNd_UTLNijpnh4j56nXv7KBKfu" alt="Rohit Sharma: रोहित के कप्तान बनते ही पलटी भारत की किस्मत, देखें भारत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rohit Sharma: भारत के परमानेंट कप्तान के रूप में रोहित शर्मा का रिकॉड शानदार रहा है।</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/watch-rohit-sharma-virat-kohli-go-bonkers-celebrate-wildly-after-india-win-t20i-series-vs-australia-519779'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Rohit Sharma, Virat Kohli go bonkers, celebrate wildly after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_82CIN6ESJV5tCPTu8YfjjCiYRm-bhqVK36i-13VU45PdjcPtSTuFMdpgiN2seGR80mkoa13T" alt="Watch: Rohit Sharma, Virat Kohli go bonkers, celebrate wildly after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India and Australia were involved in another high-scoring thriller in the third and final T20I, in Hyderabad, on Sunday evening (September 25).</p></div>
            </div>
        </a><a href='https://english.jagran.com/cricket/virat-kohli-rohit-sharmas-reaction-to-indias-last-over-win-is-epic-watch-10050225'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Virat Kohli, Rohit Sharma&#39;s Reaction To India&#39;s Last Over Win Is Epic ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfoG4M-UVaujuJcoUq-rj3B7t52A0Oxlsf_LRArj_4-n9HuoBjGIWAZM0SLsCT7vIyu5Ou0-EI" alt="Virat Kohli, Rohit Sharma&#39;s Reaction To India&#39;s Last Over Win Is Epic ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The celebration of Rohit and Virat is going viral on social media as both the batters were seen shouting and smiling while patting each other&#39;s back after&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/virat-kohli-rohit-sharma-hug-celebration-india-vs-australia-t20-viral-video-tspo-1544549-2022-09-26'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Virat Kohli-Rohit Sharma: फिफ्टी पर शाबाशी, जीत पर झप्पी... रोहित ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxGk7LCM3LcCixf1nIJgii0s9qWAohUTfDguYDgqiRVoNj7zcpRM4-3je0nrxnM6kC7dCMhMw7" alt="Virat Kohli-Rohit Sharma: फिफ्टी पर शाबाशी, जीत पर झप्पी... रोहित ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारतीय टीम ने ऑस्ट्रेलिया को तीसरे टी-20 में 6 विकेट से हराकर सीरीज़ अपने नाम कर ली है.</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/virat-kohli-and-rohit-sharma-celebrates-win-over-australia-in-t20-series-ind-vs-aus-3rd-t20i-2224351'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: 9 साल बाद ऑस्ट्रेलिया के खिलाफ सीरीज जीतते ही रोहित की पीठ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSelubrgbJRnOjngYrtDosu2ACpAiarnbm0Yk2yWvorokr9f7CTzuZv_HBnXicAn_VH1ai3kclw" alt="Watch: 9 साल बाद ऑस्ट्रेलिया के खिलाफ सीरीज जीतते ही रोहित की पीठ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs AUS T20 Series: टीम इंडिया ने ऑस्ट्रेलिया के खिलाफ तीन मैचों की टी20 सीरीज 2-1 से अपने नाम&nbsp;...</p></div>
            </div>
        </a><a href='https://news.abplive.com/sports/cricket/rohit-sharma-backs-bhuvneshwar-kumar-and-harshal-patel-ahead-of-t20-world-cup-1555348'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rohit Sharma Backs Bhuvneshwar Kumar And Harshal Patel Ahead ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT-jk5wYt9uFoOQ59Wa2lT1AUXNE3EwecLN3QTxFsVZWS8HQW25M4oQrh6zinMLDYA3j2BcdTde" alt="Rohit Sharma Backs Bhuvneshwar Kumar And Harshal Patel Ahead ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rohit Sharma was seen encouraging the UP-based bowler, despite his disappointing run in the recently concluded India vs Australia series.</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-rohit-sharma-overtakes-virat-kohli-to-become-second-most-successful-captain-for-india-in-t20is-7137091.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs AUS: रोहित शर्मा बने भारत के दूसरे सबसे सफल T20I कप्तान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTK6umxCOX-OkILSisDe2pr7QssRwyxwDyznDslYPSXlE7bjQShWwh7omTfEgkbZGFu7Bv0hv1w" alt="IND vs AUS: रोहित शर्मा बने भारत के दूसरे सबसे सफल T20I कप्तान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>रोहित की कप्तानी में भारत ने रविवार को ऑस्ट्रेलिया को तीन मैचों की टी20 सीरीज में 2-1 से&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tribuneindia.com/news/sports/rohit-sharma-praises-suryakumar-virat-for-their-partnership-against-australia-in-final-t20i-435497'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rohit Sharma praises Suryakumar-Virat for their partnership against ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQrT98qYVGB2SXwj3NPFh-FspVei66uc7dVB3MNI0-Kkf8Ty_-4lgFsXh29qPwV7is2MTL5uL7e" alt="Rohit Sharma praises Suryakumar-Virat for their partnership against ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following his side&#39;s six-wicket win over Australia in the third T20I, Indian skipper Rohit Sharma said that it was nice to see top-level batsmanship from&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}