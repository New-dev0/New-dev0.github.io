import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gonzaga basketball</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gonzaga basketball"/>
        <meta name="description" content="Trending News about Gonzaga basketball" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gonzaga basketball</h1>
            <Image width={800} height={500} src="https://www.si.com/.image/t_share/MTk0MDExNzIzNjc2NTI2MDg1/mark-few-gonzaga-basketball.jpg" alt="Gonzaga basketball"/>
            <h3>Recent News</h3>
            <a href='https://www.si.com/college/gonzaga/basketball/how-to-watch-gonzaga-vs-purdue-in-pk85'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to watch Gonzaga vs. Purdue in PK85: Live stream online; TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZ8G5SHDuqny8PGp3GwTCwrYnaJy4wYUyfr4QZKu0zFmodfS3ad9ZWVen7cePwBYNd0Z-0fkp3" alt="How to watch Gonzaga vs. Purdue in PK85: Live stream online; TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No. 6 Gonzaga and No. 24 Purdue square off in the Phil Knight Legacy tournament semifinals.</p></div>
            </div>
        </a><a href='https://www.krem.com/article/sports/gonzaga-purdue-how-to-watch-friday-college-basketball/293-32eeba72-4038-4cd8-9903-78df003c2409'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gonzaga vs Purdue: How to watch Friday night&#39;s college basketball ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6bs_wdyH-nOiIlNhWtF48S08sxSmA-uU45ieTf2T67tcGVLGllZiixMaoMnYOC49deCscYbZd" alt="Gonzaga vs Purdue: How to watch Friday night&#39;s college basketball ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Gonzaga Bulldogs face Purdue in the semis of the Phil Knight Legacy tournament on Friday night. It&#39;s yet another top-25 matchup for the Zags.</p></div>
            </div>
        </a><a href='https://www.jconline.com/story/sports/college/purdue/basketball/2022/11/25/phil-knight-legacy-purdue-gonzaga-basketball-watch-live-tv-time/69677286007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Phil Knight Legacy: What to watch for when Purdue basketball plays ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQYBgT_ZZ26r316Ym1QkeLLW2ePnL89uDIE9-IOSlkgm_eNjIQePYHEZ1a7_qPjrv_KZEdZNt-" alt="Phil Knight Legacy: What to watch for when Purdue basketball plays ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PORTLAND, Ore. – Purdue can deliver an early season statement late Friday night. The 24<sup>th</sup>-ranked Boilermakers take on No. 6 Gonzaga in the semifinals of the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.slipperstillfits.com/2022/11/25/23477457/gonzaga-purdue-game-time-tv-schedule-how-to-stream-online'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gonzaga vs. Purdue: Game time, TV schedule, and how to stream ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4HJqBzNqywmaCRLR6OaOpZfax3n6jBhA1s5Nbs-H_ZXSepecjyFvJLbJmRWa1vNaYl4GRYk2q" alt="Gonzaga vs. Purdue: Game time, TV schedule, and how to stream ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Gonzaga Bulldogs face off against the Purdue Boilermakers in another late night PK 85 contest on Friday. Zach Edey dropped 24 points and grabbed 12&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kxly.com/saturdays-game-between-gonzaga-ewu-womens-basketball-postponed/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saturday&#39;s game between Gonzaga, EWU women&#39;s basketball ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRk65kQjboxUSpAkgYT060RRit9uk-4_GhKB4_BWKdU5ylfhqx-R9qGYYuR1KhqVSkryEXPKaWC" alt="Saturday&#39;s game between Gonzaga, EWU women&#39;s basketball ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SPOKANE, Wash. — The Gonzaga women&#39;s basketball team&#39;s game against Eastern Washington University has been postponed due to health concerns.</p></div>
            </div>
        </a><a href='https://www.krem.com/article/sports/gonzaga-eastern-washington-womens-basketball-game-postponed/293-3ea257c8-c8a2-4299-8a1b-4ae2cd7daac8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gonzaga and Eastern Washington women&#39;s basketball game ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpywVsyZNY2PkPuc7grLmfz4-dMYSzMUtxK2CwDjyhptQKlucU1AS6lCPxH70QUHfCxVrOjsDU" alt="Gonzaga and Eastern Washington women&#39;s basketball game ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The rescheduling was announced via press release from Gonzaga stating &quot;Due to institution health and safety protocols, both teams mutually agreed to postpone&nbsp;...</p></div>
            </div>
        </a><a href='https://gozags.com/news/2022/11/25/mens-basketball-mbb-faces-purdue-in-pk-legacy-semifinals-friday.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MBB Faces Purdue in PK Legacy Semifinals Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNa9tfZ45EJZB4LNgQTEnehxVu3YeedzAoeN6xgP58ktHVmbgMaq2MAJX7ttEFMlt9R4U1Aweq" alt="MBB Faces Purdue in PK Legacy Semifinals Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bulldogs also placed third in their bracket in the PK80 Invitational in 2017. Gonzaga is 5-1 all-time inside the Moda Center, four NCAA Tournament wins and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spokesman.com/stories/2022/nov/25/live-updates-no-6-gonzaga-takes-on-no-24-purdue-in/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live updates: No. 6 Gonzaga takes on No. 24 Purdue in Phil Knight ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLVTamZ1xYbVshmsSXOHGZU8jG3-al4tYWp77rDYxyFR1mLxNgDLi38BEFSZG-orVaJiSQqzEo" alt="Live updates: No. 6 Gonzaga takes on No. 24 Purdue in Phil Knight ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Follow along as the Bulldogs (4-1) and Boilermakers (4-0) clash at 8:30 p.m. on ESPN.</p></div>
            </div>
        </a><a href='https://bustingbrackets.com/2022/11/25/gonzaga-vs-purdue-2022-college-basketball-game-preview-tv-schedule/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gonzaga vs Purdue: 2022 college basketball game preview, TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQIpt5nG7W1fI4nSdE8KZeF3agUjz5nSOseWw36c92SONqfiV4WYDqdgzX16TigNwjZ3cqJlxTW" alt="Gonzaga vs Purdue: 2022 college basketball game preview, TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gonzaga has a &quot;tall&quot; task on its hands with the Purdue Boilermakers in the semis of the PK85 Legacy Tournament. Can the Bulldogs avoid the upset?</p></div>
            </div>
        </a><a href='https://www.spokesman.com/stories/2022/nov/25/gonzaga-womens-game-against-eastern-washington-on-/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gonzaga women&#39;s game against Eastern Washington on Saturday ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTvWn07LKNaEPY-7pPefj_TeWLs3lrv--vuUwli-_9JxMKAasCGwrKkYOs0yZT02tlRDANpcGH2" alt="Gonzaga women&#39;s game against Eastern Washington on Saturday ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The women&#39;s basketball game between Gonzaga and Eastern Washington, scheduled for Saturday at the McCarthey Athletic Center, has been postponed due to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}