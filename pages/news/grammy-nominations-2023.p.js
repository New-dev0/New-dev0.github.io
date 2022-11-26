import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Grammy nominations 2023</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Grammy nominations 2023"/>
        <meta name="description" content="Trending News about Grammy nominations 2023" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Grammy nominations 2023</h1>
            <Image width={800} height={500} src="https://cdn.punchng.com/wp-content/uploads/2022/07/02171316/20220702_132402-e1656778396751.jpg" alt="Grammy nominations 2023"/>
            <h3>Recent News</h3>
            <a href='https://punchng.com/full-list-burna-boy-gets-2023-grammys-nominations/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Full list: Burna Boy gets 2023 Grammys nominations - Punch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQBEOVhrjcjrOM_SFrJgy6GpTHRDrq5jMXBwI8YQtZFCxeZa1aHqhCLRyxxu87lfvoe9RdLq0AM" alt="Full list: Burna Boy gets 2023 Grammys nominations - Punch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Music star, Burna Boy, has been nominated in the 2023 Recording Academy Awards, popularly known as the Grammys. The nomination list was released by the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/music/2022/nov/15/grammy-nominees-list-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grammy nominations 2023: Beyoncé leads race with nine</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcToXPFgvIwJ-cBBp31RnaXv8TBNrf-2_vpFcDFHx0fdIWkVtK8zzdMPatcM2Z1-3hCssLLrsDJb" alt="Grammy nominations 2023: Beyoncé leads race with nine" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Singer has now received 88 Grammy nominations in her career, tying only with husband Jay Z as most nominated artist.</p></div>
            </div>
        </a><a href='https://guardian.ng/life/grammy-awards-2023-the-full-list-of-nominees/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grammy Awards 2023: The Full List of Nominees</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRyAoaaaF5MEGmSq7u6ZKZrEHRce3b9ps7jxStEVIaw2KQ3vnTLS-5aYshkeGwcCznSAD3NjNU8" alt="Grammy Awards 2023: The Full List of Nominees" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beyoncé takes the number one spot as top nominee for the 65th annual Grammy Awards, with nine nominations, eight of which are for her album “Renaissance”&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/15/1136765793/beyonce-leads-2023-grammy-award-nominations'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beyoncé leads nominations for the 2023 Grammy Awards</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKLg0niw1Jl25Z6Cw-4siWpnI-6AxdrPewg1hFx1ui-ELPxZaYpa7qwHBVppbN58dKrUx29vUM" alt="Beyoncé leads nominations for the 2023 Grammy Awards" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beyoncé is the top artist nominated in the 65th annual Grammy Awards, set for Feb. 5 at the Crypto.com center in Los Angeles. The full list of nominees is&nbsp;...</p></div>
            </div>
        </a><a href='https://pitchfork.com/news/grammy-nominations-2023-beyonce-kendrick-lamar-adele-lead-nominees/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grammy Nominations 2023: Beyoncé, Kendrick Lamar, and Adele ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTC3MSK6aHw8GTdMX_FKJiBec8Hz4yrw3bvpj5yxAZ3pl6mH8RyDO61tZxf5p1ImgyKHz3nTpoM" alt="Grammy Nominations 2023: Beyoncé, Kendrick Lamar, and Adele ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brandi Carlile, ABBA, Harry Styles, Taylor Swift, Future, Mary J. Blige, DJ Khaled, and more are eligible for awards at the upcoming ceremony.</p></div>
            </div>
        </a>
        </Template></>;
}