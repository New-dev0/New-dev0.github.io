import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lakers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lakers"/>
        <meta name="description" content="Trending News about Lakers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lakers</h1>
            <Image width={800} height={500} src="https://ca-times.brightspotcdn.com/dims4/default/c09d417/2147483647/strip/true/crop/3521x1848+166+0/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc5%2F44%2Ffa4df07448c0a91a26c0b94142f3%2F1222372-sp-1128-lakers-pacers-ajs-001.jpg" alt="Lakers"/>
            <h3>Recent News</h3>
            <a href='https://www.latimes.com/sports/lakers/story/2022-11-29/lebron-james-lakers-pacers-takeaways-nba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LeBron James on decline? Inside Lakers star&#39;s shooting woes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRWFNVt__anuHmIjysSAMA7Na0CGdBgTqb-7sdhoOcyRvRkJXbDv87xR7MSjSOR8CiviIeoeMA_" alt="LeBron James on decline? Inside Lakers star&#39;s shooting woes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LeBron James has struggled to come up big for the Lakers in &#39;clutch&#39; time. Here&#39;s how the Indiana Pacers took advantage of that to mount a comeback.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/losangeles/news/lucky-lakers-fan-sinks-half-court-shot-to-win-75000-james-murry/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lucky Lakers fan sinks half-court shot to win $75000</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTnUkKc3xiUS0b1UFzIN5pxSU3zmc8Q6SoFB3wLhl6wUlPYbKvgh9A6h_mvsGpMRr4V-cAtO6Vh" alt="Lucky Lakers fan sinks half-court shot to win $75000" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Los Angeles Lakers may have lost last night, but for one fan it was the best day of his life. With $75,000 on the line, lucky fan Jamie Murry rubbed his&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nba/lakers/news/last-nights-most-exciting-shot-for-la-fans-happened-during-a-timeout-ak1987'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers News: Last Night&#39;s Most Exciting Shot For L.A. Fans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQvRoOqCvkIzZaVKrA_GZupgJWVcsZE44tvwNpvEmaaKd4t3W9PITM2zQewEWu5IwDwlY8lkive" alt="Lakers News: Last Night&#39;s Most Exciting Shot For L.A. Fans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Your Los Angeles Lakers botched an incredibly winnable game last night, fumbling a 17-point fourth quarter advantage to eventually forfeit the contest to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ocregister.com/2022/11/29/lakers-still-collapsing-in-close-games-it-just-takes-effort'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers still collapsing in close games: &#39;It just takes effort&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTZfyLB-_d0Vc7QjhE-sermuAXBpNUnq6_1PpEpPmV8sovEoIIEpbAXQvmbna9BQ_9JXdbXGOpw" alt="Lakers still collapsing in close games: &#39;It just takes effort&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Missed shots on iffy offensive possessions. Miscommunication on defense. LeBron James and Russell Westbrook forcing late attempts, while Anthony Davis hardly&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/kendrick-perkins-lebron-james-isn-030108828.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kendrick Perkins: LeBron James isn&#39;t best player on Lakers anymore</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTj5-UnOYylP5oYIectQrnyiJ6cN_AkAUPfDStTa95T8206L9Y3t4l7nKoneQ-SdB4TPIVFsxAo" alt="Kendrick Perkins: LeBron James isn&#39;t best player on Lakers anymore" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kendrick Parkins, a former teammate of LeBron James, said the Lakers superstar needs to &quot;give the keys to the car&quot; to Anthony Davis.</p></div>
            </div>
        </a><a href='https://www.sbnation.com/nba/2022/11/29/23483878/lakers-fan-chugging-beer-prosthetic-leg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>This Lakers fan chugging beer out of her prosthetic leg is the fan of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJyZyDO2qlRphFShDKMo7_7IYwoGyWOqJyDTmMud0JdPTPAjaZjwUg39eXE3wGjO4dnJW-ZV_Y" alt="This Lakers fan chugging beer out of her prosthetic leg is the fan of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There&#39;s a lot of pressure when the camera is on you at a game to be entertaining. Most people just play it off as embarassing and are desperate to see the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/basketball/nba/los-angeles-lakers/2022/11/29/63866a05e2704ef9788b456e.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nine ex-Lakers from last season without an NBA team right now</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR-S6gdcfxMxhk0jy1Fvd9ZA6yv_OIN9V3FvBWMC7jeBnf1OcuB_UqGcUEez-fOurHPIIUzg187" alt="Nine ex-Lakers from last season without an NBA team right now" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Last season for the LA Lakers was one of their worst since the arrival of LeBron James. The Purple and Gold were the 21st worst team on defense,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportsgrid.com/video/lakers-suffer-another-embarrassing-loss-as-pacers-win-at-buzzer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers Suffer Another Embarrassing Loss As Pacers Win At Buzzer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRw15D_MEIz3dH6mFQNBPVONKrY9qPwgXNBCPJLiSWBIDB_XTjLLgCp5wUCKBSsprkrVm1p6SNS" alt="Lakers Suffer Another Embarrassing Loss As Pacers Win At Buzzer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bryan Fonseca joins Ben to discuss the loss for the Los Angeles Lakers to the Indiana Pacers on Monday night at home.</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/11/29/marine-veteran-chugs-beer-prosthetic-leg-laker-game/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marine Veteran Chugs Beer Out of Prosthetic Leg At Lakers Game</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTRSC7wSZ35Ey1Yhwp_Fwab8nCdiH-xm9KSRoH9JSLa-rRCHB-eWBT4YqSKqIDxfwX0t-8APQLI" alt="Marine Veteran Chugs Beer Out of Prosthetic Leg At Lakers Game" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A U.S. Marine Corps vet filled her prosthetic leg with beer and chugged it at the Laker game on Monday.</p></div>
            </div>
        </a><a href='https://lakersnation.com/lakers-video-fan-chugs-beer-out-of-prosthetic-leg-while-another-makes-first-half-court-shot-since-jan-2020/2022/11/29/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers Video: Fan Chugs Beer Out Of Prosthetic Leg While Another ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtCtStCs7ozZUz_S-eAv91WHPq5tGcC8DvIA4ky559iJRN-FwLNT_rBUzGZyOF812p6gDWrg_Q" alt="Lakers Video: Fan Chugs Beer Out Of Prosthetic Leg While Another ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Angeles Lakers video of one fan chugging a beer from her prosthetic leg while another won $75000 hitting a half court shot.</p></div>
            </div>
        </a>
        </Template></>;
}