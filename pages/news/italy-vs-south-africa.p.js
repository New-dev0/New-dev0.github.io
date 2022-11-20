import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Italy vs South Africa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Italy vs South Africa"/>
        <meta name="description" content="Trending News about Italy vs South Africa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Italy vs South Africa</h1>
            <Image width={800} height={500} src="https://static.independent.co.uk/2022/11/19/13/SEI134278749.jpg?quality=75&width=1200&auto=webp" alt="Italy vs South Africa"/>
            <h3>Recent News</h3>
            <a href='https://www.independent.co.uk/sport/rugby/rugby-union/italy-south-africa-live-stream-watch-online-b2227261.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy vs South Africa live stream: How to watch autumn international ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSttRqCj6Ix0OH34YIdu75BPFUNTpX5xck3Rks3TnuUWUHsLD3cJsw8ARNOIJFRWcUgGurQKdTs" alt="Italy vs South Africa live stream: How to watch autumn international ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Springboks face the Azzurri in Genoa looking for their first win of a frustrating autumn.</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/rugby-union/2022/11/19/italy-v-south-africa-live-score-autumn-internationals-2022-latest/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Africa turn on the style in second half to slam plucky Italy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZBBaU-zP0FirnHzV6gUUXVoV_3pRWc8ohoa50PsBlbYgqVVxrb63aPzNIAIZvhJHFlKQedMvp" alt="South Africa turn on the style in second half to slam plucky Italy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On paper, it might look as if the Springboks pummelled their Italian counterparts in Genoa, bouncing back to form with the sort of raw, rugged rugby which has&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/rugby-union/63689448'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Africa thrash Italy with nine-try win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRG5NaGbakKmEFvmYrKI0WeOW9ne3k3qW9gJN8eJJgcTv05dsZyoDYqcs9EGg5OHNrGiaU5DTGS" alt="South Africa thrash Italy with nine-try win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Italy grabbed their second try through Niccolo Cannone, but scores from Steven Kitshoff, Damian Willemse and Cobus Reinach sealed a dominant win that followed&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.com/italy-vs-south-africa-live-122327820.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy vs South Africa LIVE: Rugby result and reaction from autumn ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYwaud39LrZz5QVuSCvAuE3x-tRE9wIIRXMSqTyyK5L2ZqrbNBkgvkqZlYM7G8t3Ls78oKyCha" alt="Italy vs South Africa LIVE: Rugby result and reaction from autumn ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Springboks travel to Genoa looking to pick up their first win of the autumn after defeats by Ireland and France.</p></div>
            </div>
        </a><a href='https://www.rugbypass.com/news/springboks-player-ratings-vs-italy-autumn-nations-series/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Springboks player ratings vs Italy | Autumn Nations Series</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-r2NwfEWuIumkLVc8M1P7905_rDy39MKhYbVSMFC8rpzwzyKUFc7fM2vriS5GJbXiVhO1TbI6" alt="Springboks player ratings vs Italy | Autumn Nations Series" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Springboks player ratings: It is six years to the day that Italy beat South Africa in Florence, but there was to be no repeat of that...</p></div>
            </div>
        </a><a href='https://www.news24.com/sport/rugby/springboks/live-italy-v-springboks-20221118-5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nine-try Springboks turn on the style in second half to hammer Italy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRB-hjkHkN19GyfhZM1t5K2g_LmS05-JvpVjjkZsu2lwey-Tgyk3eEX3_a0vUDawhfpRIs_33ZK" alt="Nine-try Springboks turn on the style in second half to hammer Italy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LIVE scoring and interactive commentary on the Test between Italy and South Africa from Genoa.</p></div>
            </div>
        </a>
        </Template></>;
}