import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Novak Djokovic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Novak Djokovic"/>
        <meta name="description" content="Trending News about Novak Djokovic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Novak Djokovic</h1>
            <Image width={800} height={500} src="https://e0.365dm.com/22/11/1600x900/skysports-novak-djokovic-tennis_5955621.jpg?20221105181323" alt="Novak Djokovic"/>
            <h3>Recent News</h3>
            <a href='https://www.skysports.com/tennis/news/12110/12739185/paris-masters-novak-djokovic-through-to-eighth-final-in-french-capital-where-holger-rune-awaits'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paris Masters: Novak Djokovic through to eighth final in French ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxgwUvW33kkiGUoPuH93YBsfjoOp9vI3VkIrUG87muKmyc9RgfSpNDOBd4VIzXfpnv1jAvUyGr" alt="Paris Masters: Novak Djokovic through to eighth final in French ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic beat Stefanos Tsitsipas to extend his winning win streak to 13 matches at the ATP Masters 1000 event; the former world No 1 will take on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.com/tennis/atp-paris/2022/novak-djokovic-battles-past-stefanos-tsitsipas-to-set-up-tasty-paris-masters-final-with-holger-rune_sto9215035/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic battles past Stefanos Tsitsipas to set up tasty Paris ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTs9HT0ECVlGDKFXmUTl9IfKmpxt_MtFbw75RzMi1gTrKst4HlKke2WWl-LEMMx0knS48vJw_jN" alt="Novak Djokovic battles past Stefanos Tsitsipas to set up tasty Paris ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic set up a Paris Masters final against Holger Rune by beating Stefanos Tsitsipas 6-2 3-6 7-6(4) to continue his outstanding recent run of form.</p></div>
            </div>
        </a><a href='https://www.tennis.com/news/articles/stat-of-the-day-novak-djokovic-650th-hard-court-win-tsitsipas-paris'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stat of the Day: Novak Djokovic records milestone 650th hard-court ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSf5L0yBFsaZBxXLfhk-H4loovuPH9FOVsfv0ganJCVFbph2CITZEoEQJoD4Hln1Ugpd7bAGos2" alt="Stat of the Day: Novak Djokovic records milestone 650th hard-court ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He hit that historic number with a thrilling 6-2, 3-6, 7-6 (4) victory over Stefanos Tsitsipas in the semifinals of the Rolex Paris Masters, which was also&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atptour.com/en/news/djokovic-tsitsipas-paris-2022-sf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Djokovic Wins Decisive TB To Continue Dominance Of Tsitsipas In ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQmyYEPNamh3yg2yOoNV5YVjh21sFUpdLrJ2wuw8uFYprIEgnIpC5BNJIG8Ajo46WQOUaAAQM2p" alt="Djokovic Wins Decisive TB To Continue Dominance Of Tsitsipas In ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic wins his eighth straight match against Stefanos Tsitsipas to return to the Paris final for an eighth time.</p></div>
            </div>
        </a><a href='https://www.express.co.uk/sport/tennis/1692725/Rafael-Nadal-world-No-1-Novak-Djokovic-Stefanos-Tsitsipas-Paris-Masters-tennis-news'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rafael Nadal&#39;s chances of ending 2022 as world No 1 helped by ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR8PDumtg_re-8Rsuw9sQiP40SwtmcHgHFKMNDj38UceVZEaY__We_UqKGu_sVezqdZ4zoFbck5" alt="Rafael Nadal&#39;s chances of ending 2022 as world No 1 helped by ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic has given Rafael Nadal a boost at becoming year-end world No 1 after beating Stefanos Tsitsipas.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/paris-masters-final-live-novak-djokovic-eyes-third-successive-atp-title-faces-teen-sensation-holger-rune-in-paris-masters-2022-summit-clash-follow-live-updates/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paris Masters Final LIVE: Novak Djokovic vs Holger Rune in Paris ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1ccEWzRatFj6ljB3566KEmJZAg3xxxHlizw1XkfJMnbBKepCyeRw2Q3jSDoUtiuqadN0dfUIP" alt="Paris Masters Final LIVE: Novak Djokovic vs Holger Rune in Paris ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paris Masters Final LIVE: Djokovic vs Rune LIVE – Novak Djokovic is all set to fight for his third successive ATP title this year as he takes on 19-year old&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}