import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Snow Ireland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Snow Ireland"/>
        <meta name="description" content="Trending News about Snow Ireland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Snow Ireland</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001cf8b4-1600.jpg" alt="Snow Ireland"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/news/weather/2022/1209/1340874-weather-ireland/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Met Éireann warns of &#39;long cold spell&#39; into next week</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvWvWD1y_YesF-4rrbmWyFpvi1pWDErfF4Gf3wiQJieffaYuPXTjbw5NXLDJBnXOO7QRVLi3Ye6g" alt="Met Éireann warns of &#39;long cold spell&#39; into next week" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Most counties remain under weather warnings tonight, with a mixture of scattered sleet and showers as well as icy stretches and freezing fog adding to a day&nbsp;...</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/ireland/snow-falls-across-parts-of-the-country-as-cold-snap-to-continue-next-week-1403421.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weekend temperatures will struggle to get past freezing, says Met ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRGY3UQnFUOeFcLyn0JznpuUvk7TAkCQEmjHgIHAHRqu_lpbW55U2QsuiGRj0tF5DR232lOa-b" alt="Weekend temperatures will struggle to get past freezing, says Met ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Updated 7pm. Yellow warnings for freezing fog and ice in place for the Republic; Separate yellow warning for snow and ice also in place for Donegal; Antrim,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.corkbeo.ie/news/local-news/snow-hits-parts-ireland-met-25710699'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Snow hits parts of Ireland while Met Eireann forecast more on way ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJm6mSfqbcDoVWusi4ZUHtoMKuVWRwgA78B-HxaELs5YQKp1j_sB4i5g0AFdns6m2axnMZXhxO" alt="Snow hits parts of Ireland while Met Eireann forecast more on way ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Icy stretches, some lying snow, and patches of freezing fog in parts&#39;</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/ireland/snow-and-cold-weather-disrupts-dublin-public-transport-1403495.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Snow and cold weather disrupts Dublin public transport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQg6whvjzCf7E6Zcbs_RQBCErRSAekPAYwSj0fbvJvIueGJ0AOL0EcakvDhzV1B-140JH4ga2gq" alt="Snow and cold weather disrupts Dublin public transport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There are no Dart rail services between Howth and Howth Junction, with Dublin Bus accepting valid tickets.</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/ireland/2022/12/09/ireland-weather-latest-snow-cold-icy-conditions/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Freezing weather leads to 143 flight cancellations and hazardous ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRcANZelNHdEdzDtX14IOGLtUTGImTqqTTMWbRcoZl2UolH9hQSPnalQM2yky8MUGdb2gUnQOle" alt="Freezing weather leads to 143 flight cancellations and hazardous ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dublin Airport is refusing to rule out more flights being grounded in the run-up to Christmas because of the cold snap after 143 flights were cancelled on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/news/irish-news/passengers-report-six-hour-waits-28695391'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dublin Airport passengers report six-hour waits on planes as snow ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSFXgh8z6ZezcDjKwSXIqhivUakCgOQhSDAnBgPc0yNSm82tBKYtA7coK9XyxyoHQ4h7C0YYHEv" alt="Dublin Airport passengers report six-hour waits on planes as snow ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The daa confirmed that a number of flights have been cancelled on Friday due to snow and ice at Dublin Airport.</p></div>
            </div>
        </a><a href='https://www.thesun.ie/news/9873980/first-snow-pictures-met-eireann-ireland-temperatures-plummet/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ireland&#39;s first snow pictures as Met Eireann say MORE white stuff on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQFEkIADyd1W7KT4b9kmkf6ajl5oDAFBv65iulLbAdcKbS4JgXO59Obe0NNb-4DxaZUYEjrN9Q-" alt="Ireland&#39;s first snow pictures as Met Eireann say MORE white stuff on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lows of 0C and highs of a mere 4C are predicted as Ireland sees the winter weather. Most read in Irish News&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kilkennypeople.ie/news/weather/984158/snow-falls-in-parts-of-ireland-as-forecasters-warn-of-wintry-weekend-kilkenny-live.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Snow falls in parts of Ireland as forecasters warn of wintry weekend ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSuUzhS5C-wpibg9r3VxCdt8FH4GgtfuEEDQBXxoxu8nsW3EVgune8we9hK0nT0-W1x2XnYnCHs" alt="Snow falls in parts of Ireland as forecasters warn of wintry weekend ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Parts of Ireland have been blanketed in snow with forecasters warning that freezing conditions are set to continue. Temperatures dropped well below zero in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/news/irish-news/gallery/ireland-weather-met-eireann-snow-28692450'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Snow blankets Ireland as temperatures hit -4C - with more to come</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQyW_uS3a5cRIc_1lfF70IefWsh7xsTHPEew-VYtTSuZKX4s8czCo5x5e9o7BzS7wZ8dXdpbbNH" alt="Snow blankets Ireland as temperatures hit -4C - with more to come" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The &#39;Troll of Trondheim&#39; plunged the country into a big freeze and Met Eireann says the cold weather is likely to continue over the weekend.</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/news/arid-41024963.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Freezing fog and ice warning issued as cold snap to continue ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTBOOqiUAKEQ6LnlNYrbmLDgLIb5zSnVEZEmelgzyB9SxbslH38msgcfW2WHxgVRajFVKrAeEyv" alt="Freezing fog and ice warning issued as cold snap to continue ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Taoiseach Micheál Martin said the cold winter weather could put a tightness on the availability of the State&#39;s energy supply.</p></div>
            </div>
        </a>
        </Template></>;
}