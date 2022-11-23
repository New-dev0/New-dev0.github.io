import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cricket</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cricket"/>
        <meta name="description" content="Trending News about Cricket" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cricket</h1>
            <Image width={800} height={500} src="https://www.thehindu.com/theme/images/og-image.png" alt="Cricket"/>
            <h3>Recent News</h3>
            <a href='https://www.thehindu.com/sport/cricket/what-do-they-know-of-cricket-who-only-mens-cricket-know/article66169469.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What do they know of cricket who only men&#39;s cricket know?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTz299AbzWMrEH4CqJK8mP9ufOqXh9tsuzH89k_JrQkXHC0LfeSqBhRpqFOcn8bsxbV6ehITcl0" alt="What do they know of cricket who only men&#39;s cricket know?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aayush Puthran&#39;s Unveiling Jazbaa looks at Pakistan&#39;s society and politics and how they have affected cricket (and vice versa)</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/suryakumar-in-white-hot-form-backed-to-play-test-cricket-101669125939126.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suryakumar, in white-hot form, backed to play Test cricket</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRI2OMEaj7NCS1H1_V7mz6ccHHXQKyuw6LylhGb9Xl2NJKtDHH9BPSrDW_XQzymtVEHK9tE9ooV" alt="Suryakumar, in white-hot form, backed to play Test cricket" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former India coach Ravi Shastri and former Test opener Wasim Jaffer, his first Mumbai skipper, believe the explosive batter must be picked for the longest&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/laurie-evans-tests-positive-for-banned-substance-england-cricketer-banned-by-perth-scorchers-big-bash-league-2022-11-22-905127'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doping in Cricket: इंग्लैंड के अनुभवी क्रिकेटर पर लगा डोपिंग का दाग ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSEZ66o60L5qfq_3ghePOysIUIAe6lZiQC73VkNxkZ8V4xZ9D8hHeP4UTpj7wSjrig1yoVi5z0Y" alt="Doping in Cricket: इंग्लैंड के अनुभवी क्रिकेटर पर लगा डोपिंग का दाग ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doping in Cricket: इंग्लैंड के एक अनुभवी क्रिकेटर पर डोपिंग का दाग लगा है जिसके चलते&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportspromedia.com/news/england-women-cricket-boycott-aramco-sponsorship-icc-t20-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England women&#39;s cricket stars could boycott Aramco-sponsored ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQA7IoSDuW66G-DoMnOWSX7sVBejlyk6GIzRUszI0cpjCaJBeiEzDBCKF7-4QLgn3glis1v-7mw" alt="England women&#39;s cricket stars could boycott Aramco-sponsored ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The England women&#39;s team players have reportedly expressed concerns over the ICC&#39;s sponsorship deal with Saudi Arabian energy firm Aramco.</p></div>
            </div>
        </a><a href='https://www.dailythanthi.com/News/State/district-level-cricket-tournament-842725'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>மாவட்ட அளவிலான கிரிக்கெட் போட்டி</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBkel_2w3eKR9eSaOWZ1PMvgG8T395V9FV8y2-9rpEECjCxCCu2f9fb1Cn6ZRjmB6aafVUzksO" alt="மாவட்ட அளவிலான கிரிக்கெட் போட்டி" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>சிவகாசியில் மாவட்ட அளவிலான கிரிக்கெட் போட்டி நடைபெற்றது. விருதுநகர். சிவகாசி,. சிவகாசி&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailythanthi.com/Sports/OtherSports/district-cricket-match-coonoor-team-won-842429'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>மாவட்ட கிரிக்கெட் போட்டி:குன்னூர் அணி வெற்றி</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRFg3x_UU9w_kYqH8UWrv7YTOFdZpqBVuIalvTIjJRH9pJE4zDKkXT_Kp2JKjN7LrKPcRhqvPig" alt="மாவட்ட கிரிக்கெட் போட்டி:குன்னூர் அணி வெற்றி" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>இந்தப் போட்டியில் முதலில் பேட்டிங் செய்த டான் பிராட்மேன் கிரிக்கெட் அணி 35 ஓவர்கள்&nbsp;...</p></div>
            </div>
        </a><a href='https://www.scoopwhoop.com/sports/female-cricket-unrewarding-job-twitter-thread/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>This Journalist&#39;s Thread About How Covering Women&#39;s Cricket Is An ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSNJkzJIQAj9Lhrvy9ZMV5qwNi1Evg9ANPgQsRFgyWCbf3OA2RxldIKmpl_6NrJOwWFPpIZVyN0" alt="This Journalist&#39;s Thread About How Covering Women&#39;s Cricket Is An ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A freelance journo, Annesha Ghosh, has shared a Twitter thread calling out how covering women&#39;s cricket in India becomes a thankless &amp; unprofitable job.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/uttar-pradesh/muzaffarnagar/muzaffarnagar-defeated-saharanpur-in-cricket-muzaffarnagar-news-mrt6146848156'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Muzaffarnagar News: क्रिकेट में मुजफ्फरनगर ने सहारनपुर को हराया</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRgKrFV9nYabJ29oQoylLY4kYVt8AFoO5S72lqDYD5uKlKC73d1udhZs1uEXmO89BsvsIp32viP" alt="Muzaffarnagar News: क्रिकेट में मुजफ्फरनगर ने सहारनपुर को हराया" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>खतौली (मुजफ्फरनगर)। स्वर्गीय मुलायम सिंह यादव की स्मृति में आयोजित&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/uttar-pradesh/kanpur-city-upca-give-acceptance-for-ranji-cricket-match-series-in-green-park-stadium-kanpur-news-23220782.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cricket News: कानपुर में तीन साल बाद टूटा ग्रीनपार्क का वनवास, नए साल ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQa6Msv7CJVn-A0zfOn0yaEz0H5CpSXa9wFRBzxL1E4O7MAUGtQA3YAZrgK_tDrsd1vQvZMLJvu" alt="Cricket News: कानपुर में तीन साल बाद टूटा ग्रीनपार्क का वनवास, नए साल ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>कानपुर में अंतर्राष्ट्रीय स्टेडियम ग्रीन पार्क में घरेलू मैचों की अनुमति मिल गई है।</p></div>
            </div>
        </a><a href='https://www.sakshi.com/telugu-news/business/vutelevisions-launches-43inch-tv-rs-29999-cricket-cinema-mode-1504211'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>క్రికెట్‌, సినిమా మోడ్‌తో అదిరిపోయే వీయూ టీవీ, ధర రూ. 30 వేలే!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSuLypMiEcC_VxEOXeDAabVTRk9xqKLMZWycxu8gmwgUsD0FA09TQWc4HGODZggvLDP5SFIJhYC" alt="క్రికెట్‌, సినిమా మోడ్‌తో అదిరిపోయే వీయూ టీవీ, ధర రూ. 30 వేలే!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vu GloLED TV: క్రికెట్‌, సినిమా మోడ్‌తో అదిరిపోయే వీయూ టీవీ, ధర రూ. 30 వేలే! 22 Nov, 2022 17:09 IST|Sakshi.</p></div>
            </div>
        </a>
        </Template></>;
}