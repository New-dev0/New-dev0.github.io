import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gujarat Election</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gujarat Election"/>
        <meta name="description" content="Trending News about Gujarat Election" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gujarat Election</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/12/01/600x338/Gujarat-election_1669866895027_1669866895379_1669866895379.jpg" alt="Gujarat Election"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/elections/assembly-elections/gujarat-assembly-election-2022-live-updates-phase-i-voting-today-key-playersconstituencies-11669857767385.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Voting ends in first phase of Gujarat Assembly elections 2022: Live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQfvZftzFOhJdVp2V-UwF7mRjjyMadzijNhk96nzYj29Kwv-gimFK_Z8vhhf_luj3CiCs0tXvZk" alt="Voting ends in first phase of Gujarat Assembly elections 2022: Live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gujarat poll LIVE Updates Phase-I: The ruling BJP is exuding confidence in retaining the 27-year-long rule in the state while AAP is making a gamble by&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/gujarat/ahmedabad-gujarat-election-voting-2022-live-phase-1-chunav-news-updates-first-phase-of-voting-today-89-seats-will-go-to-polls-lb-23238217.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gujarat Election 2022 Voting: पहले चरण की 89 सीटों के लिए वोटिंग पूरी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSKEQ6infJtn0agXFeg2P2jN8KYo1QeIXEidas9-gXXvweYw2gbSl5L5vLSXlzOTkQdZFB9mVky" alt="Gujarat Election 2022 Voting: पहले चरण की 89 सीटों के लिए वोटिंग पूरी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Voting Gujarat Election 2022 Phase 1 News Updates: गुजरात विधानसभा चुनाव में पहले चरण के लिए 89 सीटों पर मतदान&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/elections/gujarat-assembly-elections-2022-live-updates-bjp-aap-congress-modi-kejriwal-8298825/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gujarat Assembly Election Voting Live Updates: Over 60% voter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQFfXBcD8PpP-vIjhcrATGhnA42DA_tctHF3_j_S4IIkBqsboz5d0rvVDX-8HFLmpWbL6_Jt2dm" alt="Gujarat Assembly Election Voting Live Updates: Over 60% voter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gujarat Assembly Elections 2022 Live Updates, December 1, 2022: Meanwhile, PM Narendra Modi, Home Minister Amit Shah, and BJP chief JP Nadda are campaigning&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/live/gujarat-elections-2022-voting-live-updates-first-phase-gujarat-chunav-bjp-congress-aap-latest-news-prt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gujarat Elections Voting Live: पहले चरण में शाम 5 बजे तक 56.88 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTDhXvYu4lsu6qXsnWQJKFdlnnuNIKTIk-VWql-4-X7KbBxMV9aCU-Pq9XNUZsGbX2ufxUgBn4t" alt="Gujarat Elections Voting Live: पहले चरण में शाम 5 बजे तक 56.88 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gujarat Elections 2022 Voting Live Updates: गुजरात विधानसभा चुनाव में आज पहले चरण की वोटिंग हो रही है.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/india-news/gujarat-elections-62-89-percent-vote-turnout-in-first-phase-election'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gujarat Elections: 62.89 फीसदी प्रथम श्रेणी से पास हुए मतदाता, पर नहीं ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQjNBtPSH5eKsfG0_T2Em0WPD0i-v0NxeJ9E2zRp0rk2drgGKwf6P2s0eQfONLHN4rAXKk-osYP" alt="Gujarat Elections: 62.89 फीसदी प्रथम श्रेणी से पास हुए मतदाता, पर नहीं ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>गुजरात विधानसभा चुनाव के पहले चरण में बृहस्पतिवार को हुए मतदान में 62.89 फीसदी मतदाताओं ने&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndtv.com/india-news/gujarat-assembly-elections-crucial-gujarat-election-begins-today-10-points-3567842'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gujarat Elections Day 1 Sees 60% Turnout, 6% Lower Than Last ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS62BGgrXAr9LYgxdhGZeDHF-ey8ZpnNTpiBCb6y1I47UGkG4ci3bsWfnaIb1yYw3y4juU6Dp05" alt="Gujarat Elections Day 1 Sees 60% Turnout, 6% Lower Than Last ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>89 assembly seats went to polls today in the first phase of assembly polls in Gujarat. Surat is among the key areas that voted today.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/elections/gujarat-assembly-election/gujarat-election-2022-first-phase-voting-live-updates-gujarat-assembly-polls-news-latest-update-bjp-congress-aap-ghatlodia-surat-porbandar-rajkot-morbi-101669853218994.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gujarat polls: PM Modi holds massive roadshow in Ahmedabad</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhOl7pdr6ux8Xm54d8o5Dqa8UlwrOj6bwfKQsv8xaWEWiiFwHDL-WtYGtJX1dvPAMK-dd2osyU" alt="Gujarat polls: PM Modi holds massive roadshow in Ahmedabad" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gujarat Assembly election first phase voting: The second phase of the election to 93 seats will take place on December 5, with results for both phases due&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/photo-gallery/news/india-first-phase-of-gujarat-election-2022-is-over-there-is-photo-gallery-of-election-2271997'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gujarat Election 2022: गुजरात चुनाव के पहले फेज में 60 फीसदी वोटिंग, कई ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSt5ztC9WVvCrDXQ1YOynnr6w5QOV192Rr4Sf8ubmpmclqo2dDawh3sbET7CTOCAG6h4Js-HtO9" alt="Gujarat Election 2022: गुजरात चुनाव के पहले फेज में 60 फीसदी वोटिंग, कई ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>गुजरात राज्य विधानसभा की कुल 182 सीटों में से 89 सीटों पर चुनाव के पहले चरण के तहत मतदान&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/trending/politics/news-gujarat-election-date-2022-phase-2-details-eligible-voters-result-date-bjp-vs-aap-vs-congress-in-assembly-polls-210571'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gujarat Election Date 2022: Phase 2 Details, Eligible Voters, Result ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZCa_bS9kP6fmddS-sOlXVsd0JHiFB4x0PkMQHr3oWbvK_qMjiIc1NXJR1JcZF8rDNbyfeNnvS" alt="Gujarat Election Date 2022: Phase 2 Details, Eligible Voters, Result ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gujarat Election Date 2022: The 2nd phase of elections for the 182-member Gujarat Assembly will be held on December 5. Get more Politics News and Business&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/elections/assembly-elections/gujarat/gujarat-elections-2022-turnout-recorded-at-34-48-pc-till-1-pm-in-phase-1-polls/articleshow/95909251.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gujarat Election 2022 Highlights: Turnout recorded at 60.23 pc in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSGFFe0paPg4Ty1-SZjxEDoA4QZmHeNIaVdc5EzOXYybD9C2Ow67FDQo3AhVYbGv0HgwPLaEK-x" alt="Gujarat Election 2022 Highlights: Turnout recorded at 60.23 pc in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The counting of votes will be done on December 8. Results of the Himachal Pradesh Assembly elections will also be declared on the same day.</p></div>
            </div>
        </a>
        </Template></>;
}