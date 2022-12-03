import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Monaco</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Monaco"/>
        <meta name="description" content="Trending News about Monaco" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Monaco</h1>
            <Image width={800} height={500} src="https://www.getfootballnewsfrance.com/assets/fbl-fra-ligue1-monaco-rennes-5-scaled.jpg" alt="Monaco"/>
            <h3>Recent News</h3>
            <a href='https://www.getfootballnewsfrance.com/2022/monacos-ismail-jakobs-attracting-interest-from-german-clubs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Monaco&#39;s Ismaïl Jakobs attracting interest from German clubs – Get ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4fqOo6kucvX3RufD5JOm_Nju1d0VnKet6fjylxmaPq6b-2WWnIlbVIqHhi_ylBQ0AyaOfz6Ab" alt="Monaco&#39;s Ismaïl Jakobs attracting interest from German clubs – Get ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sport Bild are reporting that AS Monaco left-back Ismaïl Jakobs (23) is attracting interest from German clubs Bayer Leverkusen, Borussia Mönchengladbach and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/femail/article-11496533/Princess-Charlene-Monaco-takes-seven-year-old-twins-Christmas-village.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Princess Charlene of Monaco takes her seven-year-old twins to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSshkOQEAGywAaYkA9TH3Qj-3YmEZHRXWI0dKTtbBzvUfUC1mVPqCa33j8phcMWVr29A2RBspqQ" alt="Princess Charlene of Monaco takes her seven-year-old twins to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prince Charlene has got into the festive spirit, taking her seven-year-old twins, Prince Jacques and Princess Gabriella, to Monaco&#39;s Christmas village,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leeds-live.co.uk/sport/leeds-united/leeds-united-as-monaco-friendly-25660661'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leeds United to face AS Monaco in a friendly at Elland Road before ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTP8vDvhgKJMhKV89QQQU_pZ4m5wiOX4-xhjmLM8Gdu7PH4W9TmxODvS3fyDOElJxqggt3NLwEt" alt="Leeds United to face AS Monaco in a friendly at Elland Road before ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leeds have pencilled in a third friendly ahead of their Premier League return.</p></div>
            </div>
        </a>
        </Template></>;
}