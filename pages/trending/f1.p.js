import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>F1</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,F1"/>
        <meta name="description" content="Trending News about F1" /></Head><Template>
            <h1 style={{fontSize: "30"}}>F1</h1>
            <Image width={800} height={500} src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1111%2Fr1089693_1296x729_16%2D9.jpg" alt="F1"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/f1/story/_/id/35003940/kevin-magnussen-lauds-haas-incredible-first-f1-pole'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Magnussen lauds Haas for &#39;incredible&#39; first F1 pole</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-BuQD-NbHmueXeoHUfKhhDEPgvxQpwWEpmhDOE39fKjfZysoA18uEVIGq_3Mh1h6fWDeQlYJK" alt="Kevin Magnussen lauds Haas for &#39;incredible&#39; first F1 pole" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Magnussen paid tribute to his Haas team after they claimed a shocking and memorable pole position in Brazil.</p></div>
            </div>
        </a><a href='https://www.autosport.com/f1/news/f1-brazilian-gp-sprint-race-start-time-how-to-watch-more/10398360/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 Brazilian GP sprint race - Start time, how to watch &amp; more</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCU27T3_9vh7brwqN-A_e2NA9Qc7dcvG8WgBBJd3PmGJJlQUePm4mfXGSHloN_gLCnlhxnFjYS" alt="F1 Brazilian GP sprint race - Start time, how to watch &amp; more" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Magnussen took a shock pole position in wet qualifying ahead of the Formula 1 Brazilian Grand Prix sprint race. Here&#39;s how and when to watch the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.motorsport.com/f1/news/magnussen-not-even-close-to-dreaming-of-shock-first-f1-pole/10398286/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Magnussen &#39;not even close&#39; to dreaming of shock first F1 pole</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6k6j1BG7HVcSOtpvHXfbRCLfzaHT-XXiC4_kmUVqOn8uDsOpgopROGNezHTXda4cGksCP9_bJ" alt="Magnussen &#39;not even close&#39; to dreaming of shock first F1 pole" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Magnussen was “not even close” to thinking of scoring his maiden Formula 1 pole position ahead of qualifying in Brazil before his shock result for&nbsp;...</p></div>
            </div>
        </a><a href='https://racingnews365.com/magnussen-secures-bizarre-first-f1-pole-in-brazil'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Magnussen secures bizarre first F1 Pole in Brazil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxixcO_cdeK7qYLyPq_5yamr1KCs6He76zl90sKhIT0RgOO5RLZjBnIVY0VYAg9GYbkWY9jIFb" alt="Magnussen secures bizarre first F1 Pole in Brazil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Magnussen took a surprise first F1 Pole Position ahead of Red Bull&#39;s Max Verstappen in a bizarre Brazilian Grand Prix qualifying session.</p></div>
            </div>
        </a><a href='https://www.skysports.com/f1/news/12433/12744793/sao-paulo-gp-qualifying-kevin-magnussen-takes-maiden-f1-pole-after-george-russell-spins-in-rain'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sao Paulo GP Qualifying: Kevin Magnussen takes maiden F1 pole ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7zYjQk7prdPEUBMnX2LKaAOWNNX55dezg71pMe7AFcXT8TMLRCexF_oCKUBV2dK_dBZvHCTES" alt="Sao Paulo GP Qualifying: Kevin Magnussen takes maiden F1 pole ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Magnussen claimed both his and Haas&#39; first Formula 1 pole as wet conditions set up a thrilling upset in Qualifying at the Sao Paulo Grand Prix.</p></div>
            </div>
        </a><a href='https://www.wsj.com/livecoverage/stock-market-news-today-11-11-2022/card/mercedes-f1-team-suspends-ftx-partnership-SlnznJ8MBHdtSiBT8K3o'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stock Market Today: Dow Inches Up After 1200 Point Thursday Rally ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7o45Cj8LfeNbRlu1O5QpPt4P1_OPWl7iPwNp-ZPYF70QYLPmgJ0i3yBR8EP19bzQfbwBHoykO" alt="Stock Market Today: Dow Inches Up After 1200 Point Thursday Rally ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Mercedes-AMG Petronas Formula One team said it is suspending its partnership with FTX as the crypto exchange grapples with a massive funding shortfall&nbsp;...</p></div>
            </div>
        </a><a href='https://www.motorsport.com/f1/news/mercedes-suspends-ftx-sponsor-deal-removes-logos-from-f1-cars/10398017/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mercedes suspends FTX sponsor deal; removes logos from F1 cars</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlGW8TWZPOpOmzNT-7lk9LFXgROGc7ohfsZKeCZaDrVbI7NDGL3JTm82F4dYmbOkOE-lbeG8EZ" alt="Mercedes suspends FTX sponsor deal; removes logos from F1 cars" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mercedes has now suspended its Formula 1 sponsorship deal with crisis-hit crypto exchange FTX, meaning the company&#39;s logos will be removed from the team&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://theprint.in/sport/motor-racing-magnussen-takes-stunning-first-f1-pole-for-haas-in-brazil/1212214/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Motor racing-Magnussen takes stunning first F1 pole for Haas in Brazil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTN11hRqQDTDqKCf5DO5MSfZnh_YkXzYfUDYfzpz60Lro84rbV7qBeVTs633Sw4QZzw7c8z81oa" alt="Motor racing-Magnussen takes stunning first F1 pole for Haas in Brazil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By Gabriel Araujo SAO PAULO (Reuters) – Kevin Magnussen took a sensational first career Formula One pole position, in his 100th race for the Haas team,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/f1/2022/11/11/636e44c4e2704ee0548b4574.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 Brazilian GP: Schedule and where to watch practice, qualifying ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTiPwkPxFFvwlIG5QH2lWBEz7difyujnIDFWm7fHZyvgGYT0J0XcHgPDKn29gQZRGMz-Qg_kMnG" alt="F1 Brazilian GP: Schedule and where to watch practice, qualifying ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following the rather drab Mexican Grand Prix, the Formula 1 roadshow heads to Interlagos for the penultimate race of the season. The Brazilian Grand Prix is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/11/11/mercedes-f1-team-drops-ftx-crypto-bankrupt-tom-brady-gisele/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mercedes F1 Team Suspends Deal W/ Crypto Giant FTX, Removes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFixAXKyrbLI8SO_YfsgChQ6ByiA86yFnO0Bemdlw6nRHVy9I7JhqP5OtTe7KAa01kJzbMfYD6" alt="Mercedes F1 Team Suspends Deal W/ Crypto Giant FTX, Removes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Crypto giant FTX filed for bankruptcy on Friday and everyone from Tom Brady and Gisele to Mercedes&#39; F1 team are feeling the effects of the company going&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}