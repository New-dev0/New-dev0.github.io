import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ronaldo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ronaldo"/>
        <meta name="description" content="Trending News about Ronaldo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ronaldo</h1>
            <Image width={800} height={500} src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1115%2Fr1091422_1296x729_16%2D9.jpg" alt="Ronaldo"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/soccer/soccer-transfers/story/4803280/transfer-talk-psg-chelsea-mull-cristiano-ronaldo-amid-manchester-united-fury-over-interview'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Transfer Talk: PSG, Chelsea mull Ronaldo amid Man Utd fury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwzszPZ9P6x8hekvxUkaimbND98l3kwNOjUzsVAjDBeGkMtbrGuUFl15eZremvpAT5FB1umNG6" alt="Transfer Talk: PSG, Chelsea mull Ronaldo amid Man Utd fury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PSG are still interested in Cristiano Ronaldo while Chelsea are &quot;not unwilling&quot; to make a move for him. Transfer Talk is LIVE with the latest.</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/ronaldo-man-utd-rift-wont-affect-our-world-cup-chances-portugal-camp/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo-Man Utd rift won&#39;t affect our World Cup chances - Portugal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSCrOGEkLnitfqUxotmk4GeSiFdHdsaP3CcGnEBxPX9KMzQf_dLO8qdRgN27KAzlRJzWq_3Aszz" alt="Ronaldo-Man Utd rift won&#39;t affect our World Cup chances - Portugal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal midfielder Joao Mario has said that Cristiano Ronaldo&#39;s rift with Manchester United will not affect the country&#39;s World Cup campaign.</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/news/11667/12748048/cristiano-ronaldo-manchester-united-players-disappointed-with-behaviour-as-club-takes-legal-advice'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo: Manchester United players disappointed with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS9t2ZhX9yJigPWsnS4mxoiH0ZwmcWz--B7JcGJCg-gF0P7rLPR086sLleAFu7cbwpVcAGCYBwX" alt="Cristiano Ronaldo: Manchester United players disappointed with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo took part in an interview where he criticised Man Utd and manager Erik ten Hag; club will consider legal advice before responding to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/zakgarnerpurkis/2022/11/15/cristiano-ronaldo-protecting-his-brand-with-explosive-interview/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo Protecting His Brand With Explosive Interview</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwc_6lSyU2pcbUOs8WBHzDZqfntEUqgtqr7aWlHuBnnxPG9D8YSGRQ5HLaAr6LepWNH0P5Bzjp" alt="Cristiano Ronaldo Protecting His Brand With Explosive Interview" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Attention as much as action is probably what Ronaldo wants and, let&#39;s face it, for a man on a Michael Jordan level of sporting significance is also a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/2022/nov/15/joel-glazer-to-make-final-decision-on-cristiano-ronaldos-manchester-united-future'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Joel Glazer to &#39;make final decision&#39; on Cristiano Ronaldo&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSoqlr4nbhhxBjiQxI1AZv5eEIqHB9GdMq-ZzrddYXK6y6bJF-Ma23sG-j_IwhqLEwQaGFqdxMv" alt="Joel Glazer to &#39;make final decision&#39; on Cristiano Ronaldo&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joel Glazer will make the final decision about Cristiano Ronaldo&#39;s future, according to sources close to the Manchester United co-owner.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/world-cup/2022/11/15/6373853a46163f385b8b45a5.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruno Fernandes gives Cristiano Ronaldo frosty greeting after his ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTdWqbMgWRgk3nPMHJ7GGMCzoHfbZ8pAI-BkZBeEul9Nv_ZQjIl6owBtfSKvAsOE1qpokXeJDrQ" alt="Bruno Fernandes gives Cristiano Ronaldo frosty greeting after his ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo once again stole all the headlines this week after his interview with English journalist Piers Morgan rocked the world of football.</p></div>
            </div>
        </a>
        </Template></>;
}