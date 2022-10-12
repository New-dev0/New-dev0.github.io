import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Shikhar Dhawan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Shikhar Dhawan"/>
        <meta name="description" content="Trending News about Shikhar Dhawan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Shikhar Dhawan</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/10/Dhawan-2.jpg" alt="Shikhar Dhawan"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/cricket/watch-shikhar-dhawan-leads-team-indias-dressing-room-dance-celebrations-post-south-africa-series-win-8203238/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Shikhar Dhawan leads Team India&#39;s dressing room dance ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSNI76vevrcoZ9NttC2bkdkZe_UJs1J9zA33azNjnQ7kncXbtIp3aK_0SMm7wrx2GohpzS_TWsY" alt="WATCH: Shikhar Dhawan leads Team India&#39;s dressing room dance ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team India head coach for the series, VVS Laxman took to his Twitter to post a video of the 36-year-old choreographing the steps for his teammates to follow. “@&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/indian-cricketer-shikhar-dhawan-will-soon-make-his-bollywood-debut-with-huma-qureshi-and-sonakshi-sinha-2235663'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shikhar Dhawan Movie: शिखर धवन जल्द करेंगे बॉलीवुड डेब्यू, हुमा कुरैशी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSiCXY74XrLZn3oxyY8R0vliLoOPeaiOIDlSBsxTbXjbB-LZxTnbc5QsvZUD1MK5snBW2oQx_PV" alt="Shikhar Dhawan Movie: शिखर धवन जल्द करेंगे बॉलीवुड डेब्यू, हुमा कुरैशी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारतीय क्रिकेटर शिखर धवन जल्द बॉलीवुड डेब्यू करने वाले हैं. शिखर धवन के साथ इस मूवी&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/shikhar-dhawan-to-debut-in-acting-with-huma-qureshi-and-sonakshi-sinha-will-be-seen-in-double-xl-film'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Double XL: हुमा कुरैशी-सोनाक्षी सिन्हा के साथ एक्टिंग में डेब्यू करेंगे ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHzzUYH3MigJ_vv5VytNnYioMDV49MTu1pFiL4mptowjFhW1Wv_uXOQElFxP5u6okrdMG2C8A2" alt="Double XL: हुमा कुरैशी-सोनाक्षी सिन्हा के साथ एक्टिंग में डेब्यू करेंगे ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>धवन अभिनेत्री हुमा कुरैशी और सोनाक्षी सिन्हा के साथ &#39;डबल एक्सएल&#39; फिल्म में नजर आने वाले&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/watch-shikhar-dhawan-leads-team-india-s-epic-dressing-room-celebrations-after-series-win-over-south-africa-101665504127952.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Dhawan leads India&#39;s epic dressing room celebrations after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSO0gHC-pEX2s2jq-hYKigPq0IYm1jpW5EIm7hh4nSFXDl_nnYfv7L1TQDH2yZW45xLqjRGRAZs" alt="Watch: Dhawan leads India&#39;s epic dressing room celebrations after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stand-in skipper Shikhar Dhawan shared a video of Team India&#39;s wild celebrations after the Men In Blue defeated South Africa in the 3rd ODI on Tuesday.</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-shikhar-dhawan-flop-as-batter-but-shines-as-captain-who-won-another-trophy-for-india-7204413.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>शिखर धवन ने टीम इंडिया को ट्रॉफी जरूर जिताई, लेकिन अपनी ही परेशानी बढ़ाई</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZmdjKc5BGQB9RiRGwYJeVcWn6i6rNZaHu5uZ4M8KYXGDNkZGpaEGK1gn4PChla2OXDXQGff1Y" alt="शिखर धवन ने टीम इंडिया को ट्रॉफी जरूर जिताई, लेकिन अपनी ही परेशानी बढ़ाई" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टीम इंडिया के सलामी बल्लेबाज शिखर धवन ने बतौर कप्तान साउथ अफ्रीका के खिलाफ टीम इंडिया&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/entertainment/bollywood/shikhar-dhawan-to-be-seen-in-sonakshi-sinha-and-huma-qureshis-double-xl-in-special-appearance-8201977/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shikhar Dhawan to be seen in Sonakshi Sinha and Huma Qureshi&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT_Sv39zeoLBjUDcAqqrDVEJTNausriA8AYFx9v7H-7NE0TDzExtcCo-jSQC2IGIsRudRDFnaLT" alt="Shikhar Dhawan to be seen in Sonakshi Sinha and Huma Qureshi&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shikhar Dhawan says he agreed to do the guest appearance instantly after he heard the story of Double XL, explores the journey of two plus-size women.</p></div>
            </div>
        </a><a href='https://www.tribuneindia.com/news/entertainment/shikhar-dhawan-has-special-role-in-sonakshi-sinha-huma-qureshis-double-xl-440339'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shikhar Dhawan has special role in Sonakshi Sinha, Huma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQR4ISq598lvUtFXJi9YVH7w9ylMlI07NsutP_u1vBJUgf9BwYojWtChZQOBKPyoXAkId9Y7ABI" alt="Shikhar Dhawan has special role in Sonakshi Sinha, Huma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indian cricketer Shikhar Dhawan, will be soon seen performing for the camera in the upcoming movie &#39;Double XL&#39;, which stars Bollywood actresses Sonakshi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/entertainment/bollywood/indian-cricketer-shikhar-dhawan-will-be-seen-in-this-film-the-film-will-hit-the-theaters-in-november-2022-10-11-892132'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shikhar Dhawan: इस फिल्म में नज़र आएंगे भारतीय क्रिकेटर शिखर धवन ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRkRvKoau55E1pLymfN0JJOZvHh-35RptEGvrwrLxArgGY7TeN9ADT52f8uuT1q5HEaNCELLeSf" alt="Shikhar Dhawan: इस फिल्म में नज़र आएंगे भारतीय क्रिकेटर शिखर धवन ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shikhar Dhawan: शिखर धवन जल्द ही फिल्मों में नजर आने वाले हैं। ये फिल्म 4 नवंबर को रिलीज होगी।</p></div>
            </div>
        </a><a href='https://www.telegraphindia.com/entertainment/shikhar-dhawan-to-be-seen-in-double-xl-in-a-special-appearance/cid/1891397'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shikhar Dhawan to be seen in Double XL in a special appearance</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQtwR3mk8Um39EuxdNydIjNDS9-5jZzmCk5_lsgbTceLK8RpdqdT9Pz3oz4RsZwADpuy70ZHiev" alt="Shikhar Dhawan to be seen in Double XL in a special appearance" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The comedy drama Double XL, which is about two plus-sized women played by Sonakshi Sinha and Huma Qureshi, will have a special appearance from National team&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/entertainment/bollywood/shikhar-dhawan-dances-hand-in-hand-with-huma-qureshi-in-his-debut-film-double-xl-101665470605596.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shikhar Dhawan dances hand in hand with Huma Qureshi in his ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQuNws2PGe6xcOoGDgxoW3BDIGdWACJStIb6jO6fZF_N4zxgO6Yl-PsRGdcvaerzM_5_MCQHLHU" alt="Shikhar Dhawan dances hand in hand with Huma Qureshi in his ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A new still from Sonakshi Sinha and Huma Qureshi&#39;s upcoming film Double XL shows Shikhar Dhawan in a pivotal role. The cricketer will be making his&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}