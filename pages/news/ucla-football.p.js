import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>UCLA football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,UCLA football"/>
        <meta name="description" content="Trending News about UCLA football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>UCLA football</h1>
            <Image width={800} height={500} src="https://www.si.com/.image/t_share/MTk0MDA4NzUwNzUzODUwODg1/usatsi_19501184.jpg" alt="UCLA football"/>
            <h3>Recent News</h3>
            <a href='https://www.si.com/college/ucla/football/ucla-football-holds-on-to-beat-california-in-regular-season-finale'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UCLA Football Holds On to Beat California in Regular Season Finale</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8wwptfi_U1zfjt-CKkSeMBS7qYb_koRU9wYYeOvFbs2qSv9Hdj1uWqHlynbGMdzAcKIISWeY-" alt="UCLA Football Holds On to Beat California in Regular Season Finale" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bruins came through in the clutch to secure the come-from-behind victory and reach nine wins for the first time since 2014.</p></div>
            </div>
        </a><a href='https://writeforcalifornia.com/p/cal-ucla-football-insta-recap-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cal vs. UCLA Football Insta-Recap &amp; Rate the Game: Bears Lose to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQzepi0l6Q3Aefq4aC8qRVr166BO8Rbv-25sfYCR6MiAKncXerJ0I50uh82QvKEvu8vr08p2EQX" alt="Cal vs. UCLA Football Insta-Recap &amp; Rate the Game: Bears Lose to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cal ends its 2022 college football season with a 4-8 record.</p></div>
            </div>
        </a><a href='https://www.ocregister.com/2022/11/25/no-17-ucla-football-vs-cal-live-updates-from-california-memorial-stadium/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No. 17 UCLA football vs. Cal: Live updates from Berkeley</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTCHDOwUiyoRitpNvkY_TnuLapBiM26ejQcoV8FA2LCuc4RP4bRD17oETTNRijIokNAzemw9juJ" alt="No. 17 UCLA football vs. Cal: Live updates from Berkeley" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quarterback Dorian Thompson-Robinson will lead UCLA in his last Pac-12 Conference game as the Bruins visit the Cal Golden Bears on the road.</p></div>
            </div>
        </a><a href='https://www.latimes.com/sports/ucla/liveblog/ucla-cal-live-updates'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dorian Thompson-Robinson rallies UCLA to road win over Cal in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS1A9Be1mLlI1eQIFPPs6luWohzLMYK4IV0WSXID1R7kosrRRDHaH2isSPZT-9fNrpdPsjrfSk9" alt="Dorian Thompson-Robinson rallies UCLA to road win over Cal in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No. 18 Bruins rally in the second half and hold on for 35-28 win over Cal, as Dorian Thompson-Robinson throws one touchdown pass and rushes for two more.</p></div>
            </div>
        </a><a href='https://uclabruins.com/news/2022/11/25/football-no-17-ucla-runs-past-california-35-28.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No. 17 UCLA Runs Past California, 35-28</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-jk7exSBbSlc7QAJASkVHnY0X5gKily_ZevBO7dKxzVluCd4imp_JTn7Qst2ubvWZFBqRVlGG" alt="No. 17 UCLA Runs Past California, 35-28" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bruins rushed for 352 yards on a season-high 64 carries to defeat California.</p></div>
            </div>
        </a>
        </Template></>;
}