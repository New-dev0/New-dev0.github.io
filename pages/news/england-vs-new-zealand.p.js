import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>England vs New Zealand</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,England vs New Zealand"/>
        <meta name="description" content="Trending News about England vs New Zealand" /></Head><Template>
            <h1 style={{fontSize: "30"}}>England vs New Zealand</h1>
            <Image width={800} height={500} src="https://eu-cdn.rugbypass.com/wp/wp-content/uploads/2022/11/GettyImages-1244908212-1-1200x630.jpg?id=261290" alt="England vs New Zealand"/>
            <h3>Recent News</h3>
            <a href='https://www.rugbypass.com/news/england-player-ratings-vs-new-zealand-autumn-nations-series/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England player ratings vs New Zealand | Autumn Nations Series</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTj-wH0gHnbO3slMTqmzYYaTgaQkXY6NLQD4PV_p15q_iHa2-Rz6U3XLwpt9h9fXZkrC78V1nag" alt="England player ratings vs New Zealand | Autumn Nations Series" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The England player ratings on an incredible day where Eddie Jones&#39; team came from way behind to draw with three late tries.</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/sport/rugby/england-vs-new-zealand-live-stream-latest-score-2022-autumn-nations-series-watch-tv-result-lineups-b1041178.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England 25-25 New Zealand LIVE! Rugby match stream, result ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRj6irLkOo-RyhDvcFdTU5uRY2gJBXFV5vU877jJw2-UvXH9jvJeodTnIwbLeUraUHDq0iAx6A_" alt="England 25-25 New Zealand LIVE! Rugby match stream, result ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Replacement prop Will Stuart notched either side of a Freddie Steward try and Marcus Smith nailed two important conversions to earn a share of the spoils during&nbsp;...</p></div>
            </div>
        </a><a href='https://www.independent.co.uk/sport/rugby/rugby-union/england-new-zealand-live-stream-score-result-b2228748.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England vs New Zealand LIVE: Rugby result and reaction as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQf00OorhWb8f3LdgxnL9D6EpT-WC_jRr7lExcMLb3oXP-pZPMmWbrg7bhpcR9k7LZDQcvzCDNF" alt="England vs New Zealand LIVE: Rugby result and reaction as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England 25-25 New Zealand: Will Stuart scored two tries as England produced an incredible comeback from 25-6 down with nine minutes to go.</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/rugby-union/2022/11/19/england-v-new-zealand-player-ratings-freddie-steward-superb/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England v New Zealand player ratings: Who was &#39;taken to the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYrf-5ZWm-y-5G0bSMjovYOCXAQGyv1C2O4t32sBbvvn8NVauEbzJhxJD5sspTMhuPVwHU85hH" alt="England v New Zealand player ratings: Who was &#39;taken to the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England fought back late on to clinch a thrilling draw at Twickenham - here&#39;s how we rated the players on both sides.</p></div>
            </div>
        </a><a href='https://www.express.co.uk/life-style/science-technology/1698600/England-vs-New-Zealand-free-live-stream-how-to-watch-rugby-online'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England v New Zealand FREE live stream: How to watch Autumn ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNPBWwgtTDvt4KhBbgiGBokHi7pY9lGHGUAJTFc2OVZJUVXt4flkp2uXLpSMxo7n-CI7AUS5P9" alt="England v New Zealand FREE live stream: How to watch Autumn ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England are facing off against the All Blacks in a blockbuster Autumn Nations rugby union clash today. And if you&#39;re an Amazon Prime subscriber in the UK&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}