import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dermot Kennedy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dermot Kennedy"/>
        <meta name="description" content="Trending News about Dermot Kennedy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dermot Kennedy</h1>
            <Image width={800} height={500} src="https://www.irishtimes.com/resizer/YG41hMD585hyzZycMy5tpJVETRs=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/NQWU2Z2V2RE3ZDUHI6ORWN7X44.jpg" alt="Dermot Kennedy"/>
            <h3>Recent News</h3>
            <a href='https://www.irishtimes.com/culture/music/2022/11/22/dermot-kennedy-goes-back-to-his-busking-roots-to-launch-new-album-on-grafton-street/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dermot Kennedy goes back to his busking roots to launch new ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnz-2_pTmk_l8HDXOdl-tFlAIMzIxxte_eWFDkVyslmNHZRsFWwkhM3tb_HUQKvamgdI8MW5RL" alt="Dermot Kennedy goes back to his busking roots to launch new ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Rathcoole popstar says that despite his success, he still feels nervous about how his new songs will be received.</p></div>
            </div>
        </a><a href='https://highlandradio.com/2022/11/22/fans-hope-dermot-kennedy-will-take-to-grafton-street-for-a-busking-surprise/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fans hope Dermot Kennedy will take to Grafton Street for a busking ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS2CSDeyIcTVLNkbEzpSTvnnkjxhPbYHzITfv9GVPzYA7oCllJDcBYDgdR4ERvVl0qOTBdEHC1t" alt="Fans hope Dermot Kennedy will take to Grafton Street for a busking ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dermot Kennedy has returned to his home soil in Dublin today to promote his new album &#39;Sonder&#39;. The Irish singer announced two meet &amp; greet opportunities to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/showbiz/dermot-kennedy-lights-up-grafton-28560160'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dermot Kennedy lights up Grafton Street as thousands turn up to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSmPSNIrAwua-HgkyLc50jF_paOciRGURCfL01-_4k77HH27IYqydSr04YwEinkojma8QOOZzs5" alt="Dermot Kennedy lights up Grafton Street as thousands turn up to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thousands flocked to the busy shopping street to watch the Irish singing sensation, 30, perform on the balcony of Bewleys Cafe. Speaking before the last minute&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fm104.ie/news/buzz/dermot-kennedy-is-doing-a-pop-up-in-dublin-today/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dermot Kennedy is doing a pop-up in Dublin today</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRN-4ASLb5bsk5T0fQvYGCmX6MzhYKlvNsbDe-fT2NKJsL50YdIMrrPoSYe0Vt6i_qULikWR3Mn" alt="Dermot Kennedy is doing a pop-up in Dublin today" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Known for his busking and pop-ups, the Dublin singers fans are convinced he is going to be playing some of his famous songs in the city centre today.</p></div>
            </div>
        </a><a href='https://www.dublinlive.ie/news/dublin-news/dermot-kennedy-makes-young-fans-25578957'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dermot Kennedy makes young fan&#39;s &#39;dream come true&#39; with meeting ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRBJlF9KkDe0Pfy_QFp6mL4Y37iBzkRf_2XT262UD2dRUjFZ5NcJrDxe2cI2R-W4IabXbdK1nUI" alt="Dermot Kennedy makes young fan&#39;s &#39;dream come true&#39; with meeting ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Rathcoole singer is expected to busk on Grafton Street later this evening to promote his new album &#39;Sonder&#39;</p></div>
            </div>
        </a><a href='https://www.thesun.ie/tvandshowbiz/9777036/dermot-kennedy-dublin-street-standstill-impromptu-concert-charity/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dermot Kennedy brings Dublin street to standstill with impromptu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJ9_4jA9vXfqDxej7Kd5QslgV5E1jLpka4ozeH7CILnL3HouqZ9Xdrrz7sQpa_92mBTNUC1_Hq" alt="Dermot Kennedy brings Dublin street to standstill with impromptu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DERMOT Kennedy brought a Dublin street to a standstill with an impromptu concert.The singer made a huge gesture for charity tonight as he busked on Gr.</p></div>
            </div>
        </a>
        </Template></>;
}