import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ireland vs Australia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ireland vs Australia"/>
        <meta name="description" content="Trending News about Ireland vs Australia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ireland vs Australia</h1>
            <Image width={800} height={500} src="https://static.independent.co.uk/2022/11/19/22/SEI134357896.jpg?quality=75&width=1200&auto=webp" alt="Ireland vs Australia"/>
            <h3>Recent News</h3>
            <a href='https://www.independent.co.uk/sport/rugby/rugby-union/ireland-australia-live-stream-score-result-b2228776.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ireland vs Australia LIVE: Rugby result and reaction from autumn ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS09OZHnofF0wZE8ogT9BHoNGineTcfV4jlAcvdBIdYvZsTaTJloG8yaFXA1CwIQhHC9sy_utF4" alt="Ireland vs Australia LIVE: Rugby result and reaction from autumn ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ireland 13-10 Australia: Ross Byrne&#39;s late pressure penalty was enough for the hosts to edge to victory after Bundee Aki got their only try.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/ca/rugby-union/news/ireland-vs-australia-live-stream-tv-channel-highlights-2022/stw13wb63ufy6rwkrmzffv3g'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ireland vs. Australia result, highlights and analysis as hosts win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSAgIT2VedDbMni8WdgQJEUK0R3QQqYR6umIrsaVxaDjL2roqLNR6lsVxbOD5xZSSzg7wnMLRJm" alt="Ireland vs. Australia result, highlights and analysis as hosts win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ireland take on Australia in Dublin, with Andy Farrell&#39;s unbeaten side looking to win their third straight game of the autumn internationals.</p></div>
            </div>
        </a><a href='https://www.belfastlive.co.uk/sport/rugby/ireland-vs-australia-live-score-25558815'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ireland vs Australia live score updates from the Autumn Nations Series</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT7eVCIEWlB-UFENGcJiV9wUlL2mbWU6mzHMyYgiO8URXQP1rKVzn9Plj6nIKyJfKLSEUsLMy5Y" alt="Ireland vs Australia live score updates from the Autumn Nations Series" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ireland take on Australia at Aviva Stadium on Saturday night - kick-off is 8pm.</p></div>
            </div>
        </a><a href='https://www.rugbypass.com/news/ireland-ratings-vs-australia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ireland player ratings vs Australia | Autumn Nations Series</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTS2PpyMVxOH5Xw_lcudcoGGjewHOfsYbhzbENzWP2KJFd2nR4bQWvX9rVQaZLmd1cRwfpMUzgT" alt="Ireland player ratings vs Australia | Autumn Nations Series" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The second half opened up with Ireland ultimately winning the arm wrestle. The fans won&#39;t mind. By claiming a clean sweep of the southern hemisphere giants&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}