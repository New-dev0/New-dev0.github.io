import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hardik Pandya</title></Head><Template>
            <h1 style={{fontSize: "30"}}>Hardik Pandya</h1>
            <Image width={800} height={500} src="https://aniportalimages.s3.amazonaws.com/media/details/ANI-20220924065049.jpg" alt="Hardik Pandya"/>
            <h3>Recent News</h3>
            <a href='https://www.aninews.in/news/sports/cricket/hardik-pandya-thanks-ground-staff-for-their-efforts-in-making-second-t20i-against-australia-happen-despite-rain20220924122111'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hardik Pandya thanks ground staff for their efforts in making second ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSOJNhcrg0L6r1Qc2BP29VkuU_AbqDkI8TNAbozCRJoa10Z5vRPJ0ElpQpiejl251sjLVcK5plZ" alt="Hardik Pandya thanks ground staff for their efforts in making second ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nagpur (Maharashtra) [India], September 24 (ANI): Following his side&#39;s six-wicket win over Australia in the second T20I in Nagpur, star Indian all-rounder&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/india-vs-australia-2022/ind-vs-aus-hardik-pandyas-tweet-for-nagpur-groundsmen-goes-viral-3373176'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Australia, 2nd T20I: Hardik Pandya&#39;s Tweet For Nagpur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3ZGLAwIqp0D2vkEQoH7eyTRgeLQpPprXwT2Xg-LgT5Di5k-4-L3GqfPvipjnLgFUQ1tRfdU_t" alt="India vs Australia, 2nd T20I: Hardik Pandya&#39;s Tweet For Nagpur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India all-rounder Hardik Pandya took to Twitter to make a special mention for the groundstaff, thanking them for making the match possible.</p></div>
            </div>
        </a><a href='https://thecricketlounge.com/trending-cricket-news/IND-vs-AUS-Hardik-Pandya-Showed-Why-He-Is-A-Man-With-Golden/cid8592328.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs AUS: Hardik Pandya Showed Why He Is A Man With Golden ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzeWVBIgMX-xSdNj53Z1PEGEeHO-lUk7QHr3WBNDOAWaG0UKgQmiHxwq0uFJ2ba78vC9CxGBNM" alt="IND vs AUS: Hardik Pandya Showed Why He Is A Man With Golden ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While everyone is talking about the Indian players after India&#39;s win over Australia in Nagpur, Hardik Pandya was the first to take note of and praise the&nbsp;...</p></div>
            </div>
        </a><a href='https://sportscafe.in/cricket/articles/2022/sep/23/going-to-call-the-debate-between-hardik-pandya-and-glenn-maxwell-a-draw-declares-ricky-ponting'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Going to call the debate between Hardik Pandya and Glenn Maxwell ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Going to call the debate between Hardik Pandya and Glenn Maxwell ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ricky Ponting chose the easier way out when asked to weigh in on the debate between Hardik Pandya and Glenn Maxwell, stating neither was ahead of the other&nbsp;...</p></div>
            </div>
        </a><a href='https://brandequity.economictimes.indiatimes.com/news/advertising/hardik-pandya-shreyas-iyer-ask-to-scan-qr-in-bourbons-new-ad/94401225'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hardik Pandya, Shreyas Iyer ask to scan QR in Bourbon&#39;s new ad</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWznqbBZ5HNXAnwvi2WHVGKbWNZXSDc3C1x3HcVlEWrnwo2SL4KmT0E8_2n5V5VpnBD_JsF0RC" alt="Hardik Pandya, Shreyas Iyer ask to scan QR in Bourbon&#39;s new ad" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This campaign activates the brand&#39;s purpose by creating a platform that brings best friends together through an innovative AR experience.</p></div>
            </div>
        </a>
        </Template></>;
}