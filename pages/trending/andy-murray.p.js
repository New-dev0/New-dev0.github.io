import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Andy Murray</title>
        <meta name="description" content="Trending News about Andy Murray" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Andy Murray</h1>
            <Image width={800} height={500} src="https://www.atptour.com/-/media/images/news/2022/09/23/20/38/demon-laver-cup-2022-friday.jpg" alt="Andy Murray"/>
            <h3>Recent News</h3>
            <a href='https://www.atptour.com/en/news/laver-cup-2022-friday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alex de Minaur Battles Past Andy Murray To Earn Team World First ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSn7iTb4g6vmkwZmGTaIF8TMFRsizeDWhR0J5ynunXUAs9OMIjuY6A4TS8U06_nhzx6VCX2JXV7" alt="Alex de Minaur Battles Past Andy Murray To Earn Team World First ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alex de Minaur earned Team World its first point at the Laver Cup on Friday evening, when he rallied past Andy Murray 5-7, 6-3, 10-7 in a bruising encounter&nbsp;...</p></div>
            </div>
        </a><a href='https://tennishead.net/andy-murray-describes-laver-cup-experience-as-one-of-the-most-special-matches-of-his-career/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Andy Murray describes Laver Cup experience as &#39;one of the most ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQMYdDRDNZchVS-pI3NkrMy-f5IixnCY1g7VOE7V8v4DYvh7J8APVW8B-VJ9gNJkr_O-Ks9jfxg" alt="Andy Murray describes Laver Cup experience as &#39;one of the most ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Andy Murray said his match against Alex de Minaur at the Laver Cup was one of the &#39;most special&#39; of his career despite losing it.</p></div>
            </div>
        </a><a href='https://www.express.co.uk/sport/tennis/1673905/Roger-Federer-Andy-Murray-Novak-Djokovic-Team-Europe-bench-doubles-Laver-Cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roger Federer and Andy Murray mimic Novak Djokovic after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcToMT1FIFLn09Ch9263kkXtm_uBIoOKvYkRF50z7aP85kFEPduS3VqQwjCF4oSdJK7SEP-HeYzP" alt="Roger Federer and Andy Murray mimic Novak Djokovic after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Djokovic and Matteo Berrettini had taken an early lead against the Team World duo, but Sock and De Minaur soon worked their way back into the first set with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.co.uk/tennis/laver-cup/2022/a-memory-ill-have-for-a-long-time-andy-murray-reflects-on-special-laver-cup-experience_sto9158397/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;A memory I&#39;ll have for a long time&#39; – Andy Murray reflects on special ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvhWMLLRsgZS3Iaf-whLpMogob5xv0B2CEXVdJio6VvfQrdeOX1JBf51IHmmhGV-9B29LVZm4H" alt="&#39;A memory I&#39;ll have for a long time&#39; – Andy Murray reflects on special ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Andy Murray reflected on a special opening day at the Laver Cup after receiving some incredible backing in his singles defeat to Alex de Minaur on Friday.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/tennis/story/laver-cup-roger-federer-rafael-nadal-share-priceless-tips-with-andy-murray-2004124-2022-09-24'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Laver Cup: Roger Federer, Rafael Nadal share priceless tips with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5_k1jjVQylSYiNPSYUsy2XNy8oHF4qVvKycj9q0lE15Y-WOeHOnlAn17eba7K5JlAdVW3IVW8" alt="Laver Cup: Roger Federer, Rafael Nadal share priceless tips with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Laver Cup 2022: Roger Federer and Rafael Nadal, on Friday, September 23, shared some priceless tips with Andy Murray during Team Europe&#39;s campaign.</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/tennis/article-11244723/Andy-Murray-loses-Alex-Minaur-despite-having-former-rival-Novak-Djokovic-offering-advice.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Andy Murray loses to Alex de Minaur despite having former rival ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRHVkGF88a8LOw71RsjjMQWJ7JkNQTqM9dRFHI0O7sgsuxgYZT7WxQ8JIAuUL9INc3-zqayiG1K" alt="Andy Murray loses to Alex de Minaur despite having former rival ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Andy Murray was finally back at London&#39;s O2 Arena on Friday night, a long time on from when his career arguably reached its peak.</p></div>
            </div>
        </a><a href='https://www.eurosport.com/tennis/laver-cup/2022/laver-cup-andy-murray-beaten-by-alex-de-minaur-as-team-world-get-first-point-on-board-after-gruellin_sto9157233/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Laver Cup: Andy Murray beaten by Alex de Minaur as Team World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRDiBKahhrWfW45qTLXbMH0hnzdJY6OsPNEhcY2ZCPSYa1ZGFa5aW_XMGze7BljFVV8x1gt8JWQ" alt="Laver Cup: Andy Murray beaten by Alex de Minaur as Team World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alex de Minaur fought back to beat Andy Murray in a gruelling match to give Team World their first win at the 2022 Laver Cup in London.</p></div>
            </div>
        </a>
        </Template></>;
}