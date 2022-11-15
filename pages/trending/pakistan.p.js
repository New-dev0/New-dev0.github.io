import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pakistan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pakistan"/>
        <meta name="description" content="Trending News about Pakistan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pakistan</h1>
            <Image width={800} height={500} src="https://spiderimg.amarujala.com/assets/images/2022/11/15/750x506/cpec-projects_1668458539.jpeg" alt="Pakistan"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/world/pakistan-angry-protesters-rally-in-gwadar-threatens-to-block-cpec-projects'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan: गुस्साए प्रदर्शनकारियों ने पाकिस्तान के ग्वादर में की रैली ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShZGbytH_wn4P5x7C2sRt5dxLz9yOGPo_UaMg7owCNyjoy7Hsw36XHrqj9MdTkFOmFIpUWexih" alt="Pakistan: गुस्साए प्रदर्शनकारियों ने पाकिस्तान के ग्वादर में की रैली ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pakistan: Angry protesters rally in Gwadar, threatens to block CPEC projects पाकिस्तान के बंदरगाह शहर ग्वादर में&nbsp;...</p></div>
            </div>
        </a><a href='https://www.opindia.com/2022/11/singer-adnan-sami-says-he-was-harassed-by-pakistan-govt/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;I left Pakistan because of the establishment, will expose them soon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTYGS_6aFz2SgIMo1KL7ALBZi4VPLiOi9whwX-vE6-mzH4irMnt6ndplknpjQldHlUDPK3GIkUC" alt="&#39;I left Pakistan because of the establishment, will expose them soon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adnan Sami gave up his citizenship in Pakistan in 2015 and became an Indian citizen in 2016. | OpIndia News.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/india-news/ht-this-day-nov-16-1959-pakistan-to-vacate-tukergram-today-101668422943436.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HT This Day: Nov 16, 1959 -- Pakistan to vacate Tukergram today</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcScJ0cadwTxMAfJ5DR2CmV5MiYYY-9t8-WTVjbCmx16XxEI6Bohz-zS0kI4wfOaqKhwE9FnAtoH" alt="HT This Day: Nov 16, 1959 -- Pakistan to vacate Tukergram today" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tukergram, the tiny border village which was occupied by Pakistan in September last year, will be handed back to India tomorrow. | Latest News India.</p></div>
            </div>
        </a><a href='https://www.bbc.com/travel/article/20221114-pakistans-lost-city-of-40000-people'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan&#39;s lost city of 40000 people</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkeRvc7fvJEWOJyEFHqA8Dvzqd3zrtbGjs-_8_DsbRRaOmSD8UjY1uyjYX2UIm-xw5m3-gAJlV" alt="Pakistan&#39;s lost city of 40000 people" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the dusty plains of present-day Sindh in southern Pakistan lie the remains of one of the world&#39;s most impressive ancient cities that most people have&nbsp;...</p></div>
            </div>
        </a><a href='https://theprint.in/go-to-pakistan/one-place-in-pakistan-where-blasphemy-laws-wont-haunt-you-in-your-dreams/1215659/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>One place in Pakistan where blasphemy laws won&#39;t haunt you—in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFKFwcQM_27ViRfJipm052Hf_8cJ1w1hq59Jutgm9RyaH2V0LDOcDxlLOQNfUl10Mk0Iq9qYzj" alt="One place in Pakistan where blasphemy laws won&#39;t haunt you—in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pakistanis may be able to dream in peace without worrying about whether they are guilty of blasphemy. The Lahore High Court has ruled that the country&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/opinion/keeping-a-close-watch-on-pakistan-s-economy-101668432926334.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Keeping a close watch on Pakistan&#39;s economy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSdOIr8oY8qvgBXKe3i4SZsl4NFseiRLJ0iqkQMV9QNyssxtkxO3ZBGZO_PQ0UR5EOvqLcR6XT-" alt="Keeping a close watch on Pakistan&#39;s economy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Given that Pakistan is entering a protracted period of turmoil, with Army Chief General Qamar Bajwa set to retire at the end of the month and Imran Khan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/entertainment/music/adnan-sami-says-he-intends-to-expose-the-reality-of-what-pakistan-did-to-him-101668413029561.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adnan Sami says he intends to &#39;expose the reality&#39; of what Pakistan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTdJ_eLr3BFZuNzKi7ZC6T_y35IMNfqZE9hWWE_DO70ClI_DmDPfy5vs_Zr57nqhfGKjAqQYtpv" alt="Adnan Sami says he intends to &#39;expose the reality&#39; of what Pakistan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adnan Sami has minced no words in a recent note attacking the Pakistan establishment for allegedly harrassing him and saying he will expose all that in due&nbsp;...</p></div>
            </div>
        </a><a href='https://www.opindia.com/2022/11/pakistan-joyland-queer-theme-film-banned-oscar-entry/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan bans the film Joyland, its official Oscar entry, because of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcThCXRTFW_VnTJOdX8QptdQYjw7AKzp0K2nVq7UlJUJDDUydz9_MxBfHjhXrBRG_QrMKN9CVO7p" alt="Pakistan bans the film Joyland, its official Oscar entry, because of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joyland, a film based on queer theme, and Pakistan&#39;s official entry to the Oscars, banned by the country over &#39;highly objectionable&#39; content | OpIndia News.</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/2022/11/14/joyland-banned-in-pakistan-cannes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan bans its official Oscar entry Joyland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0Ov2y5rbbDnuTzzuv_cCME7GJr9H3sgoEvw9oPnLuo7hlzIa30ipPMKLAWGz_Ru4id60FOUrM" alt="Pakistan bans its official Oscar entry Joyland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The film, which received accolades for the portrayal of a trans love affair, is banned for &#39;objectionable material&#39;.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/world/2022/nov/14/joyland-pakistan-bans-oscar-contender-film-about-trans-love-affair'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Joyland: Pakistan bans Oscar contender film about trans love affair</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdb2g18Ak853X62nItdi6CqcYoDf24wYncMNrdDIPQdxEc-8L1GUMuHgF231AiKfe6n4r8PB1x" alt="Joyland: Pakistan bans Oscar contender film about trans love affair" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Islamic groups denounce film that won prestigious jury prize at Cannes and has Malala Yousafzai as executive director.</p></div>
            </div>
        </a>
        </Template></>;
}