import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>New Zealand</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,New Zealand"/>
        <meta name="description" content="Trending News about New Zealand" /></Head><Template>
            <h1 style={{fontSize: "30"}}>New Zealand</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/Hockey-.jpg" alt="New Zealand"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/hockey/rampaging-india-thrash-new-zealand-7-4-in-fih-mens-pro-league-8250342/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rampaging India thrash New Zealand 7-4 in FIH Men&#39;s Pro League</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSoZI4ekGygi1bk5dZI75rXo9MCvZidZ-7niQSORFJ4u-ADEOCDapy2nhfYhi2HRGjT84AJxiYV" alt="Rampaging India thrash New Zealand 7-4 in FIH Men&#39;s Pro League" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India also had 56 per cent ball possession and 12 shots at opposition goal as against six of the visiting team.</p></div>
            </div>
        </a><a href='https://www.espncricinfo.com/story/mens-t20-world-cup-ire-vs-nz-secret-behind-new-zealand-s-run-at-icc-events-clear-communication-says-wiliiamson-1343332'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Secret behind New Zealand&#39;s consistency at ICC events? Clear ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT2e9lF9H16C0a3PtEAtol6DoWHcob8Jq_o3SiJe9V5bkiWOTsJddK4tVTnD1J-qbd--G1T3SzT" alt="Secret behind New Zealand&#39;s consistency at ICC events? Clear ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Secret behind New Zealand&#39;s consistency at ICC events? Clear communication, says Williamson. NZ are better than other sides at reading conditions, and that&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t20worldcup.com/news/2889974'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Little hat-trick in vain as New Zealand seal semi-final berth</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVtb1e-VCII7NJF3rAgSGkILn4Cfz_0fXzSkrgThf3tXalg_K6aR9zO52XqohZyNfgiVyniI5Z" alt="Little hat-trick in vain as New Zealand seal semi-final berth" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Josh Little&#39;s hat-trick overshadowed Kane Williamson&#39;s return to form as New Zealand qualified for the semi-finals of the ICC Men&#39;s T20 World Cup with a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/live-score-ireland-vs-new-zealand-t20-world-cup-2022-ire-vs-nz-today-match-latest-scorecard-at-adelaide-oval-101667527011138.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ireland vs New Zealand Highlights, T20 World Cup: NZ crush IRE ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNMKpCBmExXQ_J2ppRbTsFNYz1Lcl_dc9rwlwF7txo3whYG77_SFGB8wjRtBtmoTrCM7ufjZXi" alt="Ireland vs New Zealand Highlights, T20 World Cup: NZ crush IRE ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Highlights Ireland vs New Zealand, T20 World Cup 2022: New Zealand registered a 35-run win vs Ireland in Adelaide. Follow HIGHLIGHTS of IRE vs NZ from the&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/new-zealand-vs-ireland-live-score-updates-t20-world-cup-2022-8248268/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New Zealand vs Ireland Highlights: New Zealand beat Ireland by 35 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5IWvsTf_0xkwOcVCRYjz6CPltDQOwwDPJ8_9wbLCcTA0ODBe2oZW2-hhB5VHpPO8EoLPEOgEP" alt="New Zealand vs Ireland Highlights: New Zealand beat Ireland by 35 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New Zealand vs Ireland Super 12 T20 World Cup 2022 Live Score Updates: NZ to play Ireland in Adelaide. NZ vs IRE Higlights, T20 World Cup 2022 37th Match: New&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/new-zealand-first-team-to-seal-t20wc-semifinal-spot-8249721/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New Zealand first team to seal T20 World Cup semifinal spot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTxwhZPzXjXlmorQOdA4frlrxBjMBfDxDWDPqTAtIxKVw9KGMVqafcZEsk6Pn95_DpPTJuf_XxO" alt="New Zealand first team to seal T20 World Cup semifinal spot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New Zealand had reached the final of the last edition, where they lost to Australia by eight wickets.</p></div>
            </div>
        </a><a href='https://argusnews.in/article/sports/t20-wc-new-zealand-beat-ireland-become-first-semifinalists'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Latest Odisha News, Latest India News, Breaking News Today ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRcRKKSKoPSN5bbVpwWdsJmFad_GHTVTHk3rjAFCdsLGmIi_-zyAOz3iawLSk3qZzN7WiAecmI5" alt="Latest Odisha News, Latest India News, Breaking News Today ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adelaide, Nov 4: All round New Zealand powered by performances from skipper Kane Williamson and bowlers finished their group stage campaign on top of Group&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/sports/t20-world-cup-little-s-hat-trick-in-vain-as-new-zealand-beat-ireland-122110400820_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup: Littles hat-trick in vain as New Zealand beat Ireland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRujWYJ8DdatjX3yYB85xO5zviSYLEQJs5ezcgQYZ4kiN6TiyYv-G56ghbKGBMonnM2uJFqUt9O" alt="T20 World Cup: Littles hat-trick in vain as New Zealand beat Ireland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ireland left-arm pacer Josh Little&#39;s hat-trick went in vain as New Zealand took a big step towards qualifying for the semifinals of Men&#39;s T20 World Cup with&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/hockey/ind-vs-nz-pro-league-india-triumphs-over-win-new-zealand-score/article66096906.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ, Pro League: India triumphs over New Zealand 7-4</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTu3_qxUOdw15MoCQyOjUYpZ3kVLHegbO5MoFHE1TweodmwLmMu3h4XJAz3kB6og8R0wsAMCxq6" alt="IND vs NZ, Pro League: India triumphs over New Zealand 7-4" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Harmanpreet Singh and Karthi Selvam scored braces as India thrashed New Zealand 7-4 in its third FIH Pro League game at the Kalinga Stadium in Bhubaneswar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/t20-world-cup-points-table-how-did-new-zealand-become-first-to-reach-semifinals-despite-australia-defeating-afghanistan-101667561186670.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup Points Table: Australia in danger after New Zealand ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNP8ujPD7bETOqNupEmHIhRvDAUVY4lQKSEG2s--SjQJ6eKsHZN9EbwMbQXi0SNE3RIvZ2TV6Q" alt="T20 World Cup Points Table: Australia in danger after New Zealand ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New Zealand on Friday became the first team out of the 12 currently playing the T20 World Cup to qualify for the semi-finals. | Cricket.</p></div>
            </div>
        </a>
        </Template></>;
}