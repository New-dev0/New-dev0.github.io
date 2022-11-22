import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Qatar World Cup</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Qatar World Cup"/>
        <meta name="description" content="Trending News about Qatar World Cup" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Qatar World Cup</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/Iran-3.jpg" alt="Qatar World Cup"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/football/qatar-world-cup-iran-players-make-powerful-statement-by-their-silence-8281637/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar World Cup: Iran players make powerful statement by their ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQkBDq1v93sXFma4-1r_45-LAQTfGixd1xC5XGU62orvBcALoFC1Vhs9kNm-f9HwOydP17fe5my" alt="Qatar World Cup: Iran players make powerful statement by their ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team supports protests back home, stays silent during national anthem before game against England.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/21/qatar-world-cup-2022-teams-ax-pro-lgbtq-armbands-after-fifa-threats.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;We are very frustrated&#39;: World Cup teams in Qatar ax pro-LGBTQ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS49QJ7PObsBOuQ294vmYdSKe9wAmoiU24QCqu6QlBDSCz0sS8Yip4Qc08N_mqji620e7a6hNl7" alt="&#39;We are very frustrated&#39;: World Cup teams in Qatar ax pro-LGBTQ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA, which has vocally defended Qatar in the face of criticism, rejected the &quot;OneLove&quot; campaign and instead has promoted its own &quot;No Discrimination&quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/world-cup/2022/11/21/637b538946163f829e8b45b5.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>European teams abandon plan to wear rainbow armbands at Qatar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSsU2DubGDksjXvA_sA7DQTDx1-4P_H1sx6fBI52lL8WQ8jYyWHA_IadxM5ExgesWBmYpuGHRhX" alt="European teams abandon plan to wear rainbow armbands at Qatar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The captains of seven European nations will not wear anti-discrimination armbands in World Cup games after threats from FIFA to show yellow cards to the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/2022/11/21/european-teams-say-wont-wear-onelove-world-cup-armband'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seven European teams ditch &#39;OneLove&#39; armband World Cup plan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTTe9s2x_O-i7SjvFSDgis41gfzOKsDwyIY25APxsSC1xkIIMaG5US1C1weVScU8ZlkM3a0HLMB" alt="Seven European teams ditch &#39;OneLove&#39; armband World Cup plan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>U-turn comes after FIFA threatens to hand out yellow cards to players taking part in the initiative.</p></div>
            </div>
        </a><a href='https://www.jagran.com/news/national-kerala-family-spent-23-lakh-rupees-to-watch-fifa-qatar-world-cup-2022-all-together-23216359.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA Qatar World Cup 2022 की ऐसी दिवानगी, मैच देखने को एक परिवार ने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBtx5XoaOhdV0de75Z1sjI36TFeeeOMM9UioG5U0UXOj4ukDB6ZenYbAX16LeAz8TWCjvxxNgk" alt="FIFA Qatar World Cup 2022 की ऐसी दिवानगी, मैच देखने को एक परिवार ने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA Qatar World Cup 2022 के फैंस भारत में भी कम नहीं हैं। इस वर्ल्‍ड कप का बुखार इसके चाहने वालों&nbsp;...</p></div>
            </div>
        </a><a href='https://www.insider.com/qatar-world-cup-nations-reverse-decision-to-wear-rainbow-armbands-2022-11'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar World Cup: Teams won&#39;t wear rainbow armbands for fear of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQYm_ZAPmoBzaaGNMwC0PWqyP_PDwTrJT5l3QMyjPyChQd1MFZAgGQTZajy0Z0s7r_O7IpXnrAX" alt="Qatar World Cup: Teams won&#39;t wear rainbow armbands for fear of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;We can&#39;t put our players in a position where they could face sporting sanctions,&quot; said a joint statement from seven European nations.</p></div>
            </div>
        </a><a href='https://deadline.com/2022/11/qatar-world-cup-england-iran-armband-anthem-1235178414/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar World Cup: Protests &amp; Non-Protests Loom Large Over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTC8bCWwbaq00UvfxX_vyB5VvR9V9_vw19b46bHjMa5RCDC4K8o1k9aboj1h0MKrKOixsUDZBfN" alt="Qatar World Cup: Protests &amp; Non-Protests Loom Large Over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iran&#39;s national football team refused to sing Iranian national anthem at the #FIFAWorldCup in solidarity with ongoing protest against the regime in Iran. The&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theweek.in/news/sports/2022/11/21/qatar-world-cup-iran-team-refuses-to-sing-national-anthem-in-support-of-mahsa-amini-protests.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar world cup: Iran team refuses to sing national anthem in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRaN8opWFpwTP2WtSe9IDJjxaTwr7MHpp-wBVSBFFjlmkZQVYedIpLiPze12_hJie_O4ee6yZOY" alt="Qatar world cup: Iran team refuses to sing national anthem in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Iran football team refused to sing the national anthem as it was played ahead of the team&#39;s match against England today.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/qatar-world-cup-bbcs-alex-scott-wears-rainbow-armband-during-england-vs-iran-match-see-why/articleshow/95670410.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar World Cup: BBC&#39;s Alex Scott wears rainbow armband during ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRj0ZVQsHe_7dhv-5QzfB8yYqBtgr5QOarzx6FmMWRnDxVGHZ3_gYmWgR6pDZhyOaHQcVYhRoh5" alt="Qatar World Cup: BBC&#39;s Alex Scott wears rainbow armband during ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BBC Pundit Alex Scott opts to wear a rainbow armband to show solidarity with Qatar&#39;s LGBTQ+ people. She wore it while presenting the coverage of the first&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/2022/11/21/iran-refuse-to-sing-national-anthem-in-world-cup-opener'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran refuse to sing national anthem in World Cup opener</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRZ9CasJe6OCe9y48_EvxPJLWqnoZWQIuyk-LLnJLrp_x3D8yD1Q02oGKO9WragogljfTuZQreJ" alt="Iran refuse to sing national anthem in World Cup opener" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The national team shows support for the anti-government protests taking place after Mahsa Amini&#39;s death.</p></div>
            </div>
        </a>
        </Template></>;
}