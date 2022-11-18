import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Italy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Italy"/>
        <meta name="description" content="Trending News about Italy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Italy</h1>
            <Image width={800} height={500} src="" alt="Italy"/>
            <h3>Recent News</h3>
            <a href='https://www.bloomberg.com/news/articles/2022-11-17/italy-s-meloni-is-ready-to-present-30-billion-budget-to-cabinet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy&#39;s Meloni Is Ready to Present €30 Billion Budget to Cabinet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTqZR4TsabEvbT2U27S65krbTv7pwdYInLVESq-OQ-NnQoor6jI6Y3rvovXh0vExFTLh3jqy-Im" alt="Italy&#39;s Meloni Is Ready to Present €30 Billion Budget to Cabinet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Giorgia Meloni&#39;s government will devote about €30 billion ($31 billion) for extra spending in her first budget law as Italian prime minister, according to&nbsp;...</p></div>
            </div>
        </a><a href='https://leadership.ng/minister-urges-celebrated-italian-based-chef-to-help-nigerian-women-in-italy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Minister Urges Celebrated Italian-based Chef To Help Nigerian ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvZhFlX1RLMBvWOVS0eRCjLwl2qazKJV5wWnvjqvFW6gRUG2epglPajA5SPcajp9T1SghBIZwA" alt="Minister Urges Celebrated Italian-based Chef To Help Nigerian ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Minister of women affairs and social development, Pauline Tallen, has applauded Nigerian-born celebrated chef in Italy, Tracy Eboigbodin, for changing the.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/world/italy-cracks-down-on-high-speed-migrant-traffickers/2022/11/17/596ec20a-6661-11ed-b08c-3ce222607059_story.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy arrests 12 in high-speed migrant smuggling ring</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9AQc9YNnSssmX73JE5is7ICzzWcZehQlvnd20h6-c0LrjyrGzCw_GKmwe2SZ8ePYNVQ0LTdUa" alt="Italy arrests 12 in high-speed migrant smuggling ring" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Italian police have issued 18 arrest warrants for Italians and Tunisians accused of operating a migrant-trafficking route on high-speed boats between&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/world/2022/nov/17/italy-church-report-into-sexual-abuses-a-joke-say-victims-groups'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy church report into sexual abuses a &#39;joke&#39; say victims&#39; groups</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSw0dPIAvDU7G7k_jkOK_Yok2fmRBx55JLUJq2r_60NS0iPRDo9pgt4gM5f6kG_wWeqAK9fmCot" alt="Italy church report into sexual abuses a &#39;joke&#39; say victims&#39; groups" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Victims&#39; advocates say report, which identified 68 alleged abusers between 2020-21, excludes key data and figures.</p></div>
            </div>
        </a><a href='https://www.infomigrants.net/en/post/44811/italy-welcoming-has-its-limits-we-need-a-new-european-migration-policy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy: &#39;Welcoming has its limits, we need a new European migration ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxx-8p0JIQn37lVoOHhTgrlhQ4iZI3x_psl_hPLrEUQ57dsPyYA5O3hbZpNf1dLvNSB1o8Q2NC" alt="Italy: &#39;Welcoming has its limits, we need a new European migration ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Italy&#39;s interior minister made some concillatory noises towards France but said that welcoming migrants &#39;had its limits&#39; and that what was needed was a &quot;new&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/europe/victims-call-italy-churchs-abuse-report-shamefully-limited-2022-11-17/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Victims call Italy Church&#39;s abuse report &#39;shamefully&#39; limited</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2w7KavYSKAWs5NfIvZ8c-i1N5t-JA4KnaHQsfFTns9lD_G5U4zmUHk98iIfHQVuIzwMbBrUhv" alt="Victims call Italy Church&#39;s abuse report &#39;shamefully&#39; limited" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Italy&#39;s Catholic Church on Thursday released its first report on alleged sexual abuse of minors and vulnerable individuals but victims&#39; advocates said the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tasnimnews.com/en/news/2022/11/17/2805804/italy-cracks-down-on-high-speed-migrant-traffickers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy Cracks Down on High-Speed Migrant Traffickers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQedZEDTmj1QBz96Ny042VqHZ-LTfYurbv7CuHCN4Qr50mYhYcLZLZ4WeV4VOoZ1rv_KjqoKfDc" alt="Italy Cracks Down on High-Speed Migrant Traffickers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TEHRAN (Tasnim) – Italian police issued 18 arrest warrants for Italians and Tunisians who are suspected of running a migrant trafficking route between the&nbsp;...</p></div>
            </div>
        </a><a href='https://english.alarabiya.net/News/north-africa/2022/11/17/Police-bust-alleged-Tunisia-Italy-migrant-traffickers-'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Police bust alleged Tunisia-Italy migrant traffickers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqPMxPBKdEHsWYOOTw0l1wHxDJUnrTf98sqYn7MX5SEBG-xcXz7m7nHEwoyO2_lIZNU4RZkb6W" alt="Police bust alleged Tunisia-Italy migrant traffickers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Police in Italy said Thursday they had arrested 12 people allegedly involved in a ring that transported migrants from Tunisia to Sicily, with six suspects.</p></div>
            </div>
        </a><a href='https://www.euronews.com/2022/11/17/time-to-air-the-dirty-laundry-italys-bishops-reveal-600-sex-abuse-cases-sent-to-vatican'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Time to air the dirty laundry&#39;: Italy&#39;s bishops reveal 600 sex abuse ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShfUSwfC6dKqNRuAlWbzU7b0-HHEuiAqh5vIyuFnEuOhVR_-Oj07Nd41nFesBxXP6berlJfTzq" alt="&#39;Time to air the dirty laundry&#39;: Italy&#39;s bishops reveal 600 sex abuse ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Catholic bishops in Italy revealed Thursday that over 600 cases of sexual abuse by priests in the country were on file at the Vatican since 2000.</p></div>
            </div>
        </a><a href='https://apnews.com/00f4694f9b902ed1d095b62190660cf9'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy church releases abuse accounting, but only for 2 years</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4kGLaafz3mLfqhurlbv-LNbVSPUwdimUP7z3H1wkrCzjfYUzQXDkP5AX1_jJHREGMHiHHgJt9" alt="Italy church releases abuse accounting, but only for 2 years" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VATICAN CITY (AP) — Italy&#39;s Catholic bishops on Thursday provided their first-ever accounting of clergy sexual abuse, but Italy&#39;s main survivor advocate&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}