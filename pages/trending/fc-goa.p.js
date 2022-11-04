import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FC Goa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FC Goa"/>
        <meta name="description" content="Trending News about FC Goa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FC Goa</h1>
            <Image width={800} height={500} src="https://assets.khelnow.com/news/uploads/2022/11/FC-Goa-vs-Jamshedpur-FC-ISL-2022-23-lead.jpg" alt="FC Goa"/>
            <h3>Recent News</h3>
            <a href='https://khelnow.com/football/2022-11-indian-football-isl-2022-23-fc-goa-vs-jamshedpur-fc-live-commentary'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISL 2022-23 Live Commentary: FC Goa vs Jamshedpur FC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQy3vChQ7m4MiUTXWxlzzNvQKKIIqNgNxfzaZ1pSTJDcpXmuAv3rc8lsq3ioPTkikE0EJDxnsy6" alt="ISL 2022-23 Live Commentary: FC Goa vs Jamshedpur FC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FC Goa vs Jamshedpur FC, ISL 2022-23: Follow the live action and match updates minute by minute here on Khel Now.</p></div>
            </div>
        </a><a href='https://theprint.in/sport/fc-goa-celebrate-first-home-match-with-3-0-drubbing-of-jamshedpur-fc/1196326/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FC Goa celebrate first home match with 3-0 drubbing of Jamshedpur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="FC Goa celebrate first home match with 3-0 drubbing of Jamshedpur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Margao, Nov 3 (PTI) FC Goa&#39;s first home game of this Indian Super League (ISL) season was a joyous one as they defeated Jamshedpur FC 3-0 at the Jawaharlal&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiansuperleague.com/news/our-fighting-spirit-was-amazing-fc-goa-head-coach-carlos-pena'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Our fighting spirit was amazing: FC Goa head coach Carlos Pena</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcROzuk2VocKTsZg1LTqXWF0l0LIom2xFAyshhzNe-c7sQbOHL1YiWyj9nqh8mJ9ZLkJFBkwR37k" alt="Our fighting spirit was amazing: FC Goa head coach Carlos Pena" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FC Goa head coach Carlos Pena praised his team&#39;s fighting spirit as they beat Jamshedpur FC 3-0 in the Hero Indian Super League (ISL) at the Jawaharlal&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fcjamshedpur.com/news/jamshedpur-fc-suffers-3-0-loss-against-fc-goa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>#FCGJFC: Jamshedpur FC suffers 3-0 loss against FC Goa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRIH-fV7pZ69_gb-Q8H59D7e8NkL97zRwudEwzIIA2jTjnJC_rZtFEb8ng7XKqYoSx-f7k-cVCr" alt="#FCGJFC: Jamshedpur FC suffers 3-0 loss against FC Goa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jamshedpur FC changed defense with Eli Sabia coming in to replace Pratik Chaudhari. Harry Sawyer dropped to the bench, and Jitendra Singh came into the midfield&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/isl-2022-23-fc-goa-win-their-first-home-game-with-clean-sheet-win-over-jamshedpur-fc-news-234597'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISL 2022-23: FC Goa Maintain Clean Sheet Over Jamshedpur FC In ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRR6srGYK9-YClrWdTCOFsbL4RpBsCxpMpPTFBQkETjFmM8Qf0C753y1mOBiFzu5VUpozRFm63h" alt="ISL 2022-23: FC Goa Maintain Clean Sheet Over Jamshedpur FC In ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iker Guarrotxena, Noah Wail Sadaoui and Brison Fernandes scored the goals for Goa to win their first match of ISL 2022. FC Goa will face Kerala Blasters in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.firstpost.com/sports/football-news/isl-2022-23-fc-goa-celebrate-fatorda-homecoming-with-3-0-drubbing-of-jamshedpur-fc-11568181.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FC Goa beat Jamshedpur FC 3-0 in ISL</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9SOBwrxEvIhIBrotaRMLQmOjWd4HfNBWrBo-cCq_QhsmQSIGx-Nk18IiKCy_Ql5zlUC9Ixzi1" alt="FC Goa beat Jamshedpur FC 3-0 in ISL" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Before the Red Miners could capitalise on this opportunity, the Gaurs established a two-goal cushion just two minutes after the substitution.</p></div>
            </div>
        </a><a href='https://www.mathrubhumi.com/special-pages/isl-2022-23/isl-2022-23-fc-goa-beat-jamshedpur-fc-1.8014590'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ജംഷേദ്പുരിനെ തകർത്ത് രണ്ടാം ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThY06GQDAYYFMVPifr5XFaxmTRvapDVF2RqrG2Z4Zy2cLn_1KqOFtOhtqOyUGd-bf25MmiHr9z" alt="ജംഷേദ്പുരിനെ തകർത്ത് രണ്ടാം ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Content Highlights: ISL 2022-23 FC Goa beat Jamshedpur fc &middot; Share this Article &middot; ഐഎസ്എല്‍: നോര്‍ത്ത്ഈസ്റ്റിനെ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asianetnews.com/football-sports/isl-2022-23-fcg-vs-jfc-fc-goa-beat-jamshedpur-fc-by-3-0-rks4ir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ജംഷഡ്‍പൂരിനെ മൂന്നടിയില്‍ വീഴ്ത്തി ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQB8YjPckOQ5fbf90tedN8Jsup3niVaSnnqvA3D_mkrSTe-jAuFJoZf88myPC46YXB3rECF_YAo" alt="ജംഷഡ്‍പൂരിനെ മൂന്നടിയില്‍ വീഴ്ത്തി ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ISL 2022 23 FC Goa vs Jamshedpur FC Match Result. ആദ്യപകുതിയില്‍ 12 മിനുറ്റുകള്‍ക്കുള്ളില്‍ തന്നെ ഇരട്ട&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}