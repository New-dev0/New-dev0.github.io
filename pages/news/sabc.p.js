import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SABC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SABC"/>
        <meta name="description" content="Trending News about SABC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SABC</h1>
            <Image width={800} height={500} src="https://variety.com/wp-content/uploads/2016/07/sabc-south-african-broadcasting-corporation-logo.jpg?w=1000&h=562&crop=1" alt="SABC"/>
            <h3>Recent News</h3>
            <a href='https://variety.com/2022/tv/global/sabc-streamer-launch-south-africa-1235435403/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South African Public Broadcaster Launches Streamer SABC+ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3rBUyKIBTp90-a3Bh41BgyxYlEujzvI2ErVxIpHhOFCfJhfKCp6AMvrPdZhDB1dimqX1wWg2n" alt="South African Public Broadcaster Launches Streamer SABC+ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Africa&#39;s public broadcaster has launched its long-gestating streamer, naming it SABC+ with a target of 2 million users over the next year.</p></div>
            </div>
        </a><a href='https://memeburn.com/2022/11/sabc-launches-sabc-plus-new-streaming-app-platform/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SABC launches SABC Plus, new streaming app platform</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7X2_kmqpr4OxFUufe0sLzyIjqaYgjtIsMtUW7xuj651q6r4kfGSY6gQqVmDwBnguBop2XjyjE" alt="SABC launches SABC Plus, new streaming app platform" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Television channels SABC 1, SABC 2, SABC 3 and other sports channels will also come part of the package.</p></div>
            </div>
        </a><a href='https://www.dailymaverick.co.za/article/2022-11-17-sabc-still-without-a-new-board-as-state-security-agencys-vetting-of-candidates-drags-on/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SABC still without a new board as State Security Agency&#39;s vetting of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRP4paVWyVlYLiFQKBgIHAMdou5X-dwk8UQfLHXmHZZKaeLhRo_J2wE4aWvjSeMH6WmLjmcwtyE" alt="SABC still without a new board as State Security Agency&#39;s vetting of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A layer of governance at the South African Broadcasting Corporation disappeared when the term of the outgoing board came to an end on 15 October.</p></div>
            </div>
        </a><a href='https://htxt.co.za/2022/11/telkomone-is-now-sabc-plus/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TelkomONE is now SABC Plus - Hypertext</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ4w0T1j1QkTWOOcy6RidnwlqWsHLEG9hsjNnGcGUEbfBUvjy1zvL8xGlrk2MXXNkxfYXgLtnSM" alt="TelkomONE is now SABC Plus - Hypertext" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This streaming service is free to access and use and will feature a variety of live sport including 29 FIFA World Cup 2022 matches. SABC Plus still offers the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sowetanlive.co.za/entertainment/2022-11-17-sabc-launches-a-streaming-platform-in-time-for-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SABC launches a streaming platform in time for World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxgq2J5Q9w9bqXiAq7-n8C6A6-csBKh4XGoC-rjAsVArOyf-KRQlLN_Gmi3fx882EiAVijPtCy" alt="SABC launches a streaming platform in time for World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The SABC has launched SABC+ app, a streaming platform that will, among other things, give soccer lovers 28 World Cup games for free.</p></div>
            </div>
        </a><a href='https://en.prnasia.com/releases/apac/sabc-and-hisense-partner-to-launch-the-new-sabc-streaming-service-sabc-to-the-public-384138.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SABC AND HISENSE PARTNER TO LAUNCH THE NEW SABC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="SABC AND HISENSE PARTNER TO LAUNCH THE NEW SABC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>JOHANNESBURG, Nov. 18, 2022 /PRNewswire/ -- The South African Broadcasting Corporation (SABC), the leading public broadcaster on the African continent,&nbsp;...</p></div>
            </div>
        </a><a href='https://advanced-television.com/2022/11/17/sabc-to-launch-ott-service/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SABC to launch OTT service</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQEQg3APal1ecIrJytak8YD3swjUyKEhLtCu41yXSSSfRKkLcwwHypE8PC7JuJDPARCjTJjkZhe" alt="SABC to launch OTT service" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Africa&#39;s SABC is to launch a new streaming service branded SABC+. The public broadcaster is taking over responsibility for existing OTT services from&nbsp;...</p></div>
            </div>
        </a><a href='https://stuff.co.za/2022/11/17/sabc-hisense-sabc-south-africa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SABC and Hisense launch SABC+ streaming service in South Africa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7UVvPEuNsS7UrMeaW7p1cXzlxb3yQ-BZr3um6VSWofppfdwT1lV5cufc9OoCGc6S1XRlVyvy7" alt="SABC and Hisense launch SABC+ streaming service in South Africa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Telkom announced that it was handing the reigns for the TelkomONE streaming service over to the SABC. The service has been renamed to SABC+.</p></div>
            </div>
        </a>
        </Template></>;
}