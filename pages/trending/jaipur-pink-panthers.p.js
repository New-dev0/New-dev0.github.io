import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jaipur Pink Panthers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jaipur Pink Panthers"/>
        <meta name="description" content="Trending News about Jaipur Pink Panthers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jaipur Pink Panthers</h1>
            <Image width={800} height={500} src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-02/16/full/1644980529-4896.jpg" alt="Jaipur Pink Panthers"/>
            <h3>Recent News</h3>
            <a href='https://www.business-standard.com/article/sports/pkl-arjun-deshwal-stars-in-jaipur-pink-panthers-win-over-haryana-steelers-122101500008_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PKL: Arjun Deshwal stars in Jaipur Pink Panthers win over Haryana ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZcvT5Dcpbtz_aDlKU1d0Nw_trGXG_cHriYIXFi8Vza9Txlj1WOBV0NKbRNMhXyjiCE8a7oZdb" alt="PKL: Arjun Deshwal stars in Jaipur Pink Panthers win over Haryana ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jaipur Pink Panthers rode on a brilliant performance from raider Arjun Deshwal to earn their second win of PKL Season 9, as they went past Haryana Steelers&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/other-sports/live-updates/haryana-steelers-vs-jaipur-pink-panthers-pro-kabaddi-2022-season-9-highlights-arjun-deshwal-sunil-kumar-shine-as-jaipur-pink-panthers-beat-haryana-steelers-2521917'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Haryana Steelers Vs Jaipur Pink Panthers Pro Kabaddi 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTjY9my5ZTn8-Tn2DMH-CGPLJYAx0pCHHWXx3QgALL73IXKUL-K22xKQgS1Z9MMUvaBbXva1r4N" alt="Haryana Steelers Vs Jaipur Pink Panthers Pro Kabaddi 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HAR vs JAI, Vivo Pro Kabaddi League 2022 LIVE Scorecard: Follow all the live action from Haryana vs Jaipur.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/kabaddi/pro-kabaddi-league/pro-kabaddi-live-score-haryana-steelers-vs-jaipur-pink-panthers-squads-commentary-update-stats-records-pkl-streaming-info/article66009601.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PKL 9 Highlights, Haryana Steelers 31-44 Jaipur Pink Panthers ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpNGOvDI7n2aqXkr4QjzUwtVZXKhJ8p0Z-YXBKrW4Xv-J5FuimKOiuZANzL5D4Qz5W9qbA-a_z" alt="PKL 9 Highlights, Haryana Steelers 31-44 Jaipur Pink Panthers ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PKL 9: Follow highlights, score, commentary and statistics from the 2nd match of 14th October of the Pro Kabaddi League between Haryana Steelers and Jaipur&nbsp;...</p></div>
            </div>
        </a><a href='https://www.insidesport.in/pkl-2022-live-unbeaten-haryana-steelers-look-to-continue-winning-momentum-as-they-face-jaipur-pink-panthers-in-pro-kabaddi-league-2022-follow-haryana-steelers-vs-jaipur-pink-panthers-live-updates/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PKL 2022 LIVE: Jaipur Pink Panthers defeats Haryana Steelers in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1_4-pzeZ28iiBpPEzUnfwxSLLn0fHoDUV23ENw7DUL_y5jU9UNmEje3w8x4WzHPoZGh2tuzo0" alt="PKL 2022 LIVE: Jaipur Pink Panthers defeats Haryana Steelers in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PKL 2022 LIVE: Jaipur Pink Panthers hand first defeat to Haryana Steelers in Pro Kabaddi League 2022- Check Highlights.</p></div>
            </div>
        </a>
        </Template></>;
}