import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ICC T20 World Cup</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ICC T20 World Cup"/>
        <meta name="description" content="Trending News about ICC T20 World Cup" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ICC T20 World Cup</h1>
            <Image width={800} height={500} src="https://resources.pulse.icc-cricket.com/ICC/photo/2022/10/12/941b5929-02d2-4d39-8cd5-c17a327127f3/SL-v-ZIm-warm-up.jpg" alt="ICC T20 World Cup"/>
            <h3>Recent News</h3>
            <a href='https://www.icc-cricket.com/media-releases/2849062'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Media Information for ICC Men&#39;s T20 World Cup 2022 – Thursday 13 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTC_CY6RbjDQDZMRyCVXlblB-Ve6un5LOvjlNV9I_9XZr3z1N6anOpALJhjcbU_TlUQySkpFKUH" alt="Media Information for ICC Men&#39;s T20 World Cup 2022 – Thursday 13 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Official ICC Cricket website - live matches, scores, news, highlights, commentary, rankings, videos and fixtures from the International Cricket Council.</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/icc-t20-world-cup-2022-five-highlights-from-previous-editions-news-229525'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC T20 World Cup 2022: Five Highlights From Previous Editions</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTVVT3-lh02nM1Vnib1cFSLidwwdtIZ36QMxd79YL6D1QVrn45FJVj4hZ1Q14z9d3lYkqTdYxEL" alt="ICC T20 World Cup 2022: Five Highlights From Previous Editions" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The tournament has thrown up some unforgettable moments – such as Yuvraj&#39;s perfect over, the Dutch shocking England in their own den and Misbah&#39;s flop&nbsp;...</p></div>
            </div>
        </a><a href='https://www.patrika.com/car-news/icc-men-t20-world-cup-2022-official-car-is-nissan-magnite-7817182/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC T20 World Cup: यह होगी टूर्नामेंट की ऑफिशियल कार</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRttkQHRiNwa5Cf6HjOemZ2y20wO6aB2lqo59iiE0UjFqMlk3lK85p3Tj-xHvmuD2pheOb5trd4" alt="ICC T20 World Cup: यह होगी टूर्नामेंट की ऑफिशियल कार" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ऑस्ट्रेलिया में 16 अक्टूबर से शुरू होने वाले टी-20 वर्ल्ड कप की ऑफिशियल कार की घोषणा कर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/auto/cars/story-nissan-magnite-has-been-named-the-official-car-of-2022-icc-t20-world-cup-7209549.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup की ये है ऑफिशियल कार, फीचर्स शानदार और देखने में ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTL5EM3A5gtzYHBZeUhxEhohA-41yWcvvqpRKCUGxW1tZJ6LAUTS5HoJcJTOcZvWZPLKzoW2e8b" alt="T20 World Cup की ये है ऑफिशियल कार, फीचर्स शानदार और देखने में ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इस ICC T20 World Cup के ली चुनी गई ऑफिशियल कार की घोषणा कर दी गई है। निसान की सस्ती और दमदार&nbsp;...</p></div>
            </div>
        </a><a href='https://news.abplive.com/sports/cricket/t20-world-cup-2022-all-you-need-to-know-about-points-table-format-of-icc-mega-event-1557781'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup 2022 — All You Need To Know About Points Table ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRpEsKI-OGos6wWMC0zWiy6g33V3zX4LazmZWJ9igroRsYQyVMpho8BtFIAFzXC1F_63uHD5LQs" alt="T20 World Cup 2022 — All You Need To Know About Points Table ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We are just four days away from the start of the ICC T20 World Cup that is set to take place in Australia. Initially, the mega event was supposed to be held&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.samayam.com/automobiles/cars/nissan-magnite-becomes-official-car-of-the-icc-t20-world-cup-2022-this-year-details-here-in-tamil/articleshow/94813479.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC T20 World Cup 2022 உலகக்கோப்பை காராக மாறிய ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS6ENxz4Q3g_ORkB4ygmpjXdhCaQ8EgNmf4P0ruVCKLlyoIGEJHcbev_3c_NOKDf-boYI3Hr-fZ" alt="ICC T20 World Cup 2022 உலகக்கோப்பை காராக மாறிய ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ஹைலைட்ஸ்: இந்த கார் விலை 5.97 லட்சம் ரூபாய் (எக்ஸ் ஷோரூம்) விலையில் தொடங்கி 10.79 லட்சம்&nbsp;...</p></div>
            </div>
        </a><a href='https://www.firstpost.com/firstcricket/sports-news/t20-world-cup-complete-list-of-injured-and-ruled-out-players-11434761.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup: From Jasprit Bumrah to Shaheen Afridi - List of ruled ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQWPqGuHFobChAlNpNGfWmn8OjTbmPelvAxcc0Eo0EfPg-CZ-ohiaYD9E5u0gfaqmvcV56c528G" alt="T20 World Cup: From Jasprit Bumrah to Shaheen Afridi - List of ruled ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It is worth noting that 15 October is the cut-off date for the participating teams to replace an injured player or make any changes in the squad without ICC&nbsp;...</p></div>
            </div>
        </a><a href='https://www.icc-cricket.com/news/2849004'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Caps keen to go one better at T20 World Cup - New Zealand ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWp2oaJ79YAqqXR4vSPH1Ts8A9ixsG1V9RKL6i-dc3drbaPm-PIYPTtsYp-w41PMZD-45ozeq1" alt="Black Caps keen to go one better at T20 World Cup - New Zealand ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kane Williamson (c), Tim Southee, Ish Sodhi, Mitchell Santner, Glenn Phillips, Jimmy Neesham, Daryl Mitchell, Adam Milne, Martin Guptill, Lachlan Ferguson,&nbsp;...</p></div>
            </div>
        </a><a href='https://cricketaddictor.com/icc-t20-world-cup-2022/icc-t20-world-cup-2022-schedule-warm-up-matches-india-team-groups-warm-up-matches-schedule-india-squad-points-table-squad-teams-match-list-live-score-live-streaming-details-live-telecast-ch/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC T20 World Cup 2022 Schedule, Warm Up Matches, India Team ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSwgKaH6Bjx2DAfsTwWta_uyW4TbFyHZIc70JpNOGsWBCHl8BByp5s085rcR6YozPhmThvdga97" alt="ICC T20 World Cup 2022 Schedule, Warm Up Matches, India Team ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ICC T20 World Cup 2022 Schedule, Warm Up Matches, India Team, Groups, Warm Up Matches Schedule, India Squad, Points Table, Squad, Teams, Match List,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.firstpost.com/firstcricket/sports-news/t20-world-cup-india-vs-western-australia-xi-live-streaming-updates-11435521.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Western Australia XI T20 World Cup practice match: When ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWdABS13sL4vpQOecG1yytQGV18Ww8nXtzuFq29gNuEvcP8lbjA6HJit-PvnapOY3jS-MlZALz" alt="India vs Western Australia XI T20 World Cup practice match: When ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India will be up against Western Australia XI in their second warm-up match. The Men in Blue had a good outing in the last encounter after they won the match by&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}