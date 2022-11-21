import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lionel Messi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lionel Messi"/>
        <meta name="description" content="Trending News about Lionel Messi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lionel Messi</h1>
            <Image width={800} height={500} src="https://www.si.com/.image/t_share/MTkzODg4OTM1MzkzMzcxNjMy/cristiano-ronaldo-lionel-messi.jpg" alt="Lionel Messi"/>
            <h3>Recent News</h3>
            <a href='https://www.si.com/extra-mustard/2022/11/20/photo-lionel-messi-cristiano-ronaldo-playing-chess-viral-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Photo of Lionel Messi, Cristiano Ronaldo Playing Chess Goes Viral</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRicIfonmWsYMAWr6KmLyKH6rQ-wG5QBCD9gXWyfgpPlFtWs4M-dnzoDuSLHWAtf22liTzn0J18" alt="Photo of Lionel Messi, Cristiano Ronaldo Playing Chess Goes Viral" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One day before the 2022 FIFA World Cup kicked off, soccer legends Lionel Messi and Cristiano Ronaldo went viral with an Instagram photo.</p></div>
            </div>
        </a><a href='https://www.90min.com/posts/lionel-messi-and-cristiano-ronaldo-take-part-in-photoshoot-together'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi and Cristiano Ronaldo take part in photoshoot together</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTpJDpkN8xEaoTVBuMKE8aWgjm7le1xkQSJrYPUJcC11qufhg6N4RPvdzthrbJYK02_1QS0WFh" alt="Lionel Messi and Cristiano Ronaldo take part in photoshoot together" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While the two players widely considered to be the two greatest footballers ever&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportbible.com/football/lionel-messi-cristiano-ronaldo-louis-vuitton-20221120'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Behind-the-scenes footage of Lionel Messi and Cristiano Ronaldo&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3nmANFVt7fOq_4YzE6VueLD5lSJvDAaw6mqbNQ6bKIEZGQlel0xz4CPPb_h6fP_Skh1mV0QiA" alt="Behind-the-scenes footage of Lionel Messi and Cristiano Ronaldo&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The pair took part in a photo shoot ahead of the World Cup.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/uk/lionel-messi-vs-cristiano-ronaldo-football-legends-play-chess-in-new-advertisement-see-who-is-winning/articleshow/95646033.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi Vs Cristiano Ronaldo: Football legends play chess in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRO9kGAFDC_bb2MRudCCsHBtmyQjs11zRAVPmUcDz0HoTvOQgjFnAcPk2ktOiK0SKR5cO5DxJrg" alt="Lionel Messi Vs Cristiano Ronaldo: Football legends play chess in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Louis Vuitton advertisement has been making waves on the internet as the football legends, Cristiano Ronaldo and Lionel Messi, are featured in it.</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/sport/football/messi-ronaldo-chess-advert-goat-b1041252.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fans look for clues to reveal the true GOAT as Lionel Messi and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTG9IekyjycimC63Rj_U0xUwU3q33Jbk2C2B5zRosyT65bXlvp-nHTkDQU_yoYPtBsOLu3DRIfz" alt="Fans look for clues to reveal the true GOAT as Lionel Messi and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A new eye-catching advert for Louis Vuitton has taken the internet by storm, showing Lionel Messi and Cristiano Ronaldo squaring off in a game of chess on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.elfutbolero.us/news/Georginas-incredible-reaction-to-Lionel-Messis-photo-with-Cristiano-Ronaldo-20221119-0032.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgina&#39;s incredible reaction to Lionel Messi&#39;s photo with Cristiano ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNUoTQsMC78CMOES9QeuRBZSuSyJN_KzX-wwIQmjHkBSwLt2_0Cckn8CD4UxjT7DTVy3TJH9GK" alt="Georgina&#39;s incredible reaction to Lionel Messi&#39;s photo with Cristiano ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi and Cristiano Ronaldo starred in a campaign that blew up social networks, mostly Instagram. The Louis Vuitton brand brought together world&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}