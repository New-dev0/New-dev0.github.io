import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Man Utd</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Man Utd"/>
        <meta name="description" content="Trending News about Man Utd" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Man Utd</h1>
            <Image width={800} height={500} src="https://assets.manutd.com/AssetPicker/images/0/0/15/79/1003373/Pennyhill_Training_23_07_2021_191670518729699_large.jpg" alt="Man Utd"/>
            <h3>Recent News</h3>
            <a href='https://www.manutd.com/en/news/detail/man-utd-doctor-steve-mcnally-leaves-club-after-16-years'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dr Steve McNally steps down after 16 years</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTlAlMnZZ2LMrIG1EnIWSZso_TrSgAl234gNzkGaqbBa1M5l9zyPFeyS1wCSyh0EJfJe4kq6GGm" alt="Dr Steve McNally steps down after 16 years" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>McNally will leave his position as head of football medicine &amp; science at the end of January to become performance support director for PGMOL. He joined United&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manutd.com/en/news/detail/talking-points-from-cadiz-v-man-utd-friendly-on-7-december'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What we noticed from our Cadiz friendly</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQo1MSrZyEOjjLoLAFhsqbCAjgfWAqFBZTxu9nm7u9jxMm7p2aGPL_vkqpiE0uE62uXkU_KKj1w" alt="What we noticed from our Cadiz friendly" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erik ten Hag&#39;s Manchester United team returned to action for the first time in 24 days, with a friendly against La Liga side Cadiz CF in Spain.</p></div>
            </div>
        </a><a href='https://www.goal.com/en/news/live/transfer-news-and-rumours-live/blt49baf2c936272584'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Transfer news and rumours LIVE: Real Madrid eager to sign Man ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSV9L-q15Rc-VevX5u6JnDV4itvv0qT30YjQgzsoMenAHRj1gBaBsEqqkH0by_Y8RBTzHUlTfj5" alt="Transfer news and rumours LIVE: Real Madrid eager to sign Man ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mikel Arteta says Arsenal will look at their options up front after Gabriel Jesus sustained a knee injury. The striker will be absent for around a month after&nbsp;...</p></div>
            </div>
        </a><a href='https://www.90min.com/posts/psg-president-admits-interest-in-man-utd-star'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG president admits interest in Man Utd star</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRip5VReEBKRFACxYmQlLqmgQ5xnnRNIiA2U_HBJlpeJdPKr-r6_zIQFDZsF_ouUPh9ckM9g3yy" alt="PSG president admits interest in Man Utd star" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paris Saint-Germain president Nasser Al-Khelaifi has admitted that he would be interested in signing Marcus Rashford as a free agent next summer.</p></div>
            </div>
        </a><a href='https://www.teamtalk.com/manchester-united/franck-kessie-man-utd-seething-step-down-claim-arsenal-suitable'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man Utd left seething as transfer target warned Old Trafford move ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQe6eaOGwnqJLA8jGn20WlqwjIY2txx4NLFsHkNH7LpN4LCLbtNct5rYyStjJHyi8MMgmR5pGMS" alt="Man Utd left seething as transfer target warned Old Trafford move ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erik ten Hag and Manchester United will likely be angry after a midfield target was urged to snub their advances and instead join a Premier League rival&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-us/news/ten-hag-blasts-unacceptable-man-utd-performance-friendly-defeat-la-liga-strugglers-cadiz/bltb941d89977e6f765'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ten Hag blasts &#39;unacceptable&#39; second-string Man Utd performance ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSpnXisftwboy-QngT46fqxmOFv3MaIxbWlYAsWLfwjg9t2TWjMjyPXv10NhZJtnjLKH26pwabq" alt="Ten Hag blasts &#39;unacceptable&#39; second-string Man Utd performance ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United boss Erik ten Hag was not impressed by his second-string squad in their 4-2 friendly defeat to Cadiz on Wednesday.</p></div>
            </div>
        </a><a href='https://www.90min.com/posts/who-is-kobbie-mainoo-things-to-know-about-man-utd-talent'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Kobbie Mainoo? Things to know about Man Utd talent</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGuKkk86HFCt8AZNt1WcKNmogcA-4_v8xmE-QQAdebzVuQrTYhyFzivw_IwVvQjTJH5RzZ_IjG" alt="Who is Kobbie Mainoo? Things to know about Man Utd talent" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 17-year-old played the second half of the club&#39;s mid-season friendly against Cadiz on Wednesday night and impressed by scoring only two minutes after coming&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-ng/news/no-spanish-holiday-man-utd-miss-martinez-varane-friendly-loss-cadiz/bltd53574a2b0310ac2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No Spanish holiday! Man Utd miss Lisandro Martinez and Raphael ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSaak3oJ8lSFa9SuYu-vX0ZMddZ7pz74sk_thpL9sI1ajEql8-UbzZx6yNSKG4k9EsDPRGybGhG" alt="No Spanish holiday! Man Utd miss Lisandro Martinez and Raphael ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erik ten Hag demanded full focus during Manchester United&#39;s mid-season friendlies, but didn&#39;t get it in a 4-2 loss to Cadiz on Wednesday.</p></div>
            </div>
        </a><a href='https://www.teamtalk.com/manchester-united/psg-president-unveils-plans-poach-amazing-man-utd-attacker-impossible-cristiano-ronaldo-admission'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG president unveils plans to poach &#39;amazing&#39; Man Utd attacker ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQShPklt8_EVyMH6tTQbpGQ83OTgCa41iuZGrO3gSVXjkTkTMI6pKolUkLG8RpbDNFjVagsatVE" alt="PSG president unveils plans to poach &#39;amazing&#39; Man Utd attacker ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paris Saint-Germain president Nasser Al-Khelaifi has made no secret of their interest in signing the &quot;amazing&quot; Marcus Rashford if he leaves Man Utd.</p></div>
            </div>
        </a><a href='https://www.football365.com/news/fearful-man-utd-80m-rashford-price-real-madrid-psg-contract'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Fearful&#39; Man Utd set huge Rashford price tag with Real Madrid ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTPj1emGDOSC7hmbylgUfLmYn-YXKHTo1pKaNISmDHfTo6Iv-9te_inYhKn49VJM4I4eC1b0c_d" alt="&#39;Fearful&#39; Man Utd set huge Rashford price tag with Real Madrid ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United have reportedly told interested clubs to pay £80million for Marcus Rashford with his contract set to expire next year.</p></div>
            </div>
        </a>
        </Template></>;
}