import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Martin Scorsese</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Martin Scorsese"/>
        <meta name="description" content="Trending News about Martin Scorsese" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Martin Scorsese</h1>
            <Image width={800} height={500} src="https://images.hindustantimes.com/img/2022/11/17/1600x900/martin_scorsese_1668681670904_1668681671041_1668681671041.webp" alt="Martin Scorsese"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/entertainment/hollywood/did-you-know-martin-scorsese-once-wanted-to-cast-srk-and-dicaprio-in-a-film-101668681675460.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Did you know Martin Scorsese once wanted to cast SRK and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTy4aoOehGKU4F-6k9XDlpNxV2UYsMh-1Ua5eAspxH7ijlAP51pF0Yjo0bZ7yYNhJyRuxdZptB2" alt="Did you know Martin Scorsese once wanted to cast SRK and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Martin Scorsese has long harboured a love for Indian cinema. On his birthday, we look back at his connection with the country. | Hollywood.</p></div>
            </div>
        </a><a href='https://variety.com/lists/best-martin-scorsese-movies-ranked/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Martin Scorsese Turns 80: Ranking All 25 of His Narrative Features ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTcpfnmCM0LUeVfTYHSYeimxFMMNmWALNfcJevaWLIa8VA_IjvPKhKB6kSXs9mwgFGEOrcCgLg6" alt="Martin Scorsese Turns 80: Ranking All 25 of His Narrative Features ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Legend. Master. The OG of modern-day cinema in its infinite glory. Director, writer and producer Martin Scorsese is undoubtedly one of the most influential and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gqindia.com/entertainment/content/martin-scorseses-5-best-scenes-ranked'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Martin Scorsese&#39;s 5 best film scenes, ranked</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT2XA3gwkEWsuAI4K8gICYyloX4q0ZfcFC-JKYTf5qKYcJMyKDHOI0GU_AA96Q8v8iYpfg0GZBy" alt="Martin Scorsese&#39;s 5 best film scenes, ranked" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Film in the 20th century, it&#39;s the American art form, like jazz.” So says Martin Scorsese who, in a career that has straddled that century and this one&nbsp;...</p></div>
            </div>
        </a><a href='https://aframe.oscars.org/what-to-watch/post/essential-martin-scorsese-films-to-watch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Essential Martin Scorsese Films to Watch | A.frame</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSM2Bc76dHMKxEefg28tiEl40wwwSySkLDNWGcvGEjd4Z2wjWmCqRtmoe6KOei_YHkP6kbfEYbn" alt="Essential Martin Scorsese Films to Watch | A.frame" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From a psychological thriller such as Taxi Driver, to crime dramas such as GoodFellas and Casino, to a dark comedy like The Wolf of Wall Street, Scorsese has&nbsp;...</p></div>
            </div>
        </a><a href='https://www.worldofreel.com/blog/2022/11/zvajecrjh9jll8fd7pg2mgwy82dfyh'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Martin Scorsese Celebrates 80th Birthday With DeNiro and Dicaprio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFTXOGPf5HHvSfpFJLYdjY0C_X4B0TZz320ihsz5PLGbdzoIrknSzL2WAR5fYtH14FzNI6hjjJ3Q" alt="Martin Scorsese Celebrates 80th Birthday With DeNiro and Dicaprio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Variety&#39;s Clayton Davis was given the task of ranking all of Scorsese&#39;s films. Why? The resulting list is definitely a peculiar one.</p></div>
            </div>
        </a><a href='https://people.com/movies/martin-scorsese-life-in-photos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Martin Scorsese&#39;s Life in Photos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTl-HBpt_kZdXRfG2yW30qzO-h0aK0a4An6NnLHRgl1Aqax-12zRlK7VGRj8mJ8Ypiz3e7KzwAL" alt="Martin Scorsese&#39;s Life in Photos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following Who&#39;s That Knocking at My Door, he was invited to work on the music documentary Woodstock alongside director Michael Wadleigh and Schoonmaker (above).</p></div>
            </div>
        </a><a href='https://www.timesunion.com/movies/article/Movie-Quiz-Blowing-out-140-candles-with-Martin-17586501.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Movie Quiz: Martin Scorsese and Jodie Foster</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJvvDHJ9M6Guu5iUpd23RDhHA3xe14Ds4vi7ilgZbLAUaQ9Ww5uK5OxcKZd6T0yojhpUcGd43I" alt="Movie Quiz: Martin Scorsese and Jodie Foster" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Master filmmaker Martin Scorsese turns 80 years old on Thursday, Nov. 17, while his “Taxi Driver” star and fellow director Jodie Foster celebrates her 60th&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}