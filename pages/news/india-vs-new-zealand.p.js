import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>India vs New Zealand</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,India vs New Zealand"/>
        <meta name="description" content="Trending News about India vs New Zealand" /></Head><Template>
            <h1 style={{fontSize: "30"}}>India vs New Zealand</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/Untitled-design-64-2.jpg" alt="India vs New Zealand"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/cricket/india-vs-new-zealand-2nd-odi-live-score-updates-8291554/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs New Zealand highlights: Match has been called off</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPNFjW5d92wBHt8WXvWQiy7y8eY3AeBsqZF5lxz2dQaoYwoDXexH82EIRO1i16L1CkSwfDcjp1" alt="India vs New Zealand highlights: Match has been called off" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ 2022, 2nd ODI highlights: The second ODI between India and New Zealand has been abandoned due to rain. We had five overs when the play was stopped&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/live/india-vs-new-zealand-live-score-updates-ind-vs-nz-2nd-odi-cricket-match-in-hamilton-jst'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ 2nd ODI Highlights: बारिश में धुला दूसरा वनडे मुकाबला, भारत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQOYEi75o7e3vT7NbST-fYFL_FK7Z88yIdaROO8hAq7KxDJAZDOQbQCn5TpEfxU_ZIyMDSWk8tL" alt="IND vs NZ 2nd ODI Highlights: बारिश में धुला दूसरा वनडे मुकाबला, भारत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ 2nd ODI Highlights: भारत और न्यूजीलैंड के बीच तीन मैचों की वनडे सीरीज का दूसरा मुकाबला&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/live-score-india-vs-new-zealand-2nd-odi-2022-ind-vs-nz-latest-match-updates-at-hamilton-101669506301134.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs New Zealand Highlights: IND vs NZ 2nd ODI called off due ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS3M_8ox2Bh1ZmhuBE_pUpuXVj_fMFGsV9-FkcRi0sTwnZ57cREW9BtSNu_j0EyGJtGuJIgaJxv" alt="India vs New Zealand Highlights: IND vs NZ 2nd ODI called off due ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs New Zealand 2nd ODI Highlights: The second ODI between India and New Zealand has been called off due to rain in Hamilton. Catch the Highlights of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/live/cricket/cricket-news/ind-vs-nz-live-cricket-score-india-vs-new-zealand-2nd-odi-2022-match-at-seddon-park-stadium-news-in-hindi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ 2nd ODI: बारिश के कारण मैच रद्द, न्यूजीलैंड सीरीज में 1-0 से ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRs77KnD_PCrVbLVhNppKFp2bDVtnvq_w5_r9SyqGyGKqK628-9tSqUwQxvGrGz09zx3b6P3bQO" alt="IND vs NZ 2nd ODI: बारिश के कारण मैच रद्द, न्यूजीलैंड सीरीज में 1-0 से ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>बारिश की वजह से दूसरा वनडे मैच रद्द कर दिया गया है। इस मुकाबले में कुल 12.5 ओवर का खेल हो&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espncricinfo.com/series/india-in-new-zealand-2022-23-1322272/new-zealand-vs-india-2nd-odi-1322279/match-preview'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Can India stop New Zealand&#39;s home juggernaut in high-scoring ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRsScQyb7FqUK7SKf0Mg1anSeFQ2Qe98VVVx8O6mJuFsHw1ZNB28RlmAaxjrbK3TxjlT-jk5sha" alt="Can India stop New Zealand&#39;s home juggernaut in high-scoring ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With 16 matches, New Zealand have played the second-fewest ODIs of any team in the ongoing World Cup Super League. But just one more win, and they can&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/cricket/india-vs-new-zealand-2nd-odi-live-streaming-when-where-to-watch-ind-vs-nz-live-in-india-online-tv-telecast-details/article66188942.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs New Zealand 2nd ODI 2022 Live Streaming Info: When and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRXNEILoArL7f60HhU0i16VNTe0oPqn4T0aUXLHZVYIo0iUk83zvT_fPO5xG-jwR7KKiaWihz1m" alt="India vs New Zealand 2nd ODI 2022 Live Streaming Info: When and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ 2nd ODI Live Streaming: Get Live streaming info and telecast details as India takes on New Zealand in the 2nd ODI at Seddon Park in Hamilton.</p></div>
            </div>
        </a><a href='https://www.tv9hindi.com/sports/cricket-news/india-vs-new-zealand-live-cricket-score-ind-vs-nz-2nd-odi-today-match-playing-xi-latest-news-in-hindi-au115-1579433.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>इंडिया Vs न्यूजीलैंड, 2nd ODI, Highlights: बारिश के कारण मैच रद्द</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT2UNb0ekRVWMgoLLXDrHVpAoORsSyKs6iLnGKM3IW2WGhygmFt4OgTF-pm__UcLMriZk7Clfql" alt="इंडिया Vs न्यूजीलैंड, 2nd ODI, Highlights: बारिश के कारण मैच रद्द" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND Vs NZ, 2nd ODI, LIVE Updates : ऑकलैंड में खेले गए पहले वनडे मैच में भारत को न्यूजीलैंड के खिलाफ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-nz-vs-ind-2nd-odi-match-live-score-updates-india-vs-new-zealand-hamilton-odi-match-hindi-commentary-live-7411026.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NZ vs Ind 2nd ODI Match called off: हैमिल्टन में दिखा सूर्या-गिल का ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRebGiVmmxpPCGIJXW5LDaE5yFUeAj1V3YFrJy-tZ82r_tLImp4uLkjBqvicVdrMtSRELy3B1HM" alt="NZ vs Ind 2nd ODI Match called off: हैमिल्टन में दिखा सूर्या-गिल का ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NZ vs Ind 2nd ODI Match Called Off: हैमिल्टन में भारत और न्यूजीलैंड के बीच दूसरा वनडे मैच बारिश के&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/new-zealand-vs-india-2022-23/india-vs-new-zealand-2nd-odi-match-ind-vs-nz-live-score-updates-3555257'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs New Zealand, 2nd ODI Highlights: Match Abandoned Due ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR59mmjlJMRajnKRPtZ8KSqf6h0tsAXFzcHZjMW5swnUQUfffjHDNzwolIC0SIcIeEY1PTLNeJK" alt="India vs New Zealand, 2nd ODI Highlights: Match Abandoned Due ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ Highlights, 2nd ODI: India were 89 for 1 in 12.5 overs when the rain interrupted the play to see the game eventually being called off.</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/latest/trends/story/india-vs-new-zealand-2nd-odi-latest-update-india-bats-first-rain-interrupts-play-354328-2022-11-27'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs New Zealand 2nd ODI Latest Update: India bats first, rain ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_xSI9DNluQ3THlkXHsqic6GAg9tjqJI72R4unXTOsswTYF4yanBlWWQ1qw9E5eYP7iccfpg7h" alt="India vs New Zealand 2nd ODI Latest Update: India bats first, rain ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Blackcaps have already won the first ODI by 7 wickets to take a 1-0 series lead. In the first ODI against India, Tom Latham&#39;s 145 not out off 104 balls&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}