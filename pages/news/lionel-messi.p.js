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
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95646040,width-1070,height-580,imgsize-46622,overlay-economictimes/photo.jpg" alt="Lionel Messi"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/international/uk/lionel-messi-vs-cristiano-ronaldo-football-legends-play-chess-in-new-advertisement-see-who-is-winning/articleshow/95646033.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi Vs Cristiano Ronaldo: Football legends play chess in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRO9kGAFDC_bb2MRudCCsHBtmyQjs11zRAVPmUcDz0HoTvOQgjFnAcPk2ktOiK0SKR5cO5DxJrg" alt="Lionel Messi Vs Cristiano Ronaldo: Football legends play chess in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Louis Vuitton advertisement has been making waves on the internet as the football legends, Cristiano Ronaldo and Lionel Messi, are featured in it.</p></div>
            </div>
        </a><a href='https://www.si.com/extra-mustard/2022/11/20/photo-lionel-messi-cristiano-ronaldo-playing-chess-viral-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Photo of Lionel Messi, Cristiano Ronaldo Playing Chess Goes Viral</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJBIfpEbP1uI2PxNrsQs3XPtQlr3g4M9ZsMos5LKhqujQca72zP7RFrbU1Sz_Qfc3JawehmopI" alt="Photo of Lionel Messi, Cristiano Ronaldo Playing Chess Goes Viral" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One day before the 2022 FIFA World Cup kicked off, soccer legends Lionel Messi and Cristiano Ronaldo went viral with an Instagram photo.</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/navbharatgold/day-today/know-about-footballer-lionel-messi-income/story/95641677.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi Income: मेसी की कमाई में पूरी क्रिकेट टीम खड़ी हो जाए</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpzaBzye7wBge3-pxytWqLxKXE7ZdZK5GqErMrU-ydsYP30XHC58i7DhMkzGFm6HjUFTKUT8wuDQ" alt="Lionel Messi Income: मेसी की कमाई में पूरी क्रिकेट टीम खड़ी हो जाए" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Know about Lionel Messi Income: ऑस्ट्रेलिया में अभी टी-20 विश्व कप खत्म हुआ और कतर में फुटबॉल विश्व कप&nbsp;...</p></div>
            </div>
        </a><a href='https://hypebeast.com/2022/11/cristiano-ronaldo-lionel-messi-louis-vuitton-campaign-twitter-reacts'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter Reacts to Cristiano Ronaldo and Lionel Messi&#39;s Louis Vuitton ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTndJw3ZjUbyfwOPpakV4-cEOcMFnAzRHngeiJaRu5AnHqyT7oZCzbf69e3TpB-gQ4j-PO-1Hzz" alt="Twitter Reacts to Cristiano Ronaldo and Lionel Messi&#39;s Louis Vuitton ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter Reacts to Cristiano Ronaldo and Lionel Messi&#39;s Louis Vuitton Campaign: An iconic fashion-sports moment in the making.</p></div>
            </div>
        </a><a href='https://www.dnaindia.com/sports/report-was-cristiano-ronaldo-and-lionel-messi-s-iconic-picture-edited-check-out-behind-the-scenes-footage-3004035'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Was Cristiano Ronaldo and Lionel Messi&#39;s iconic picture edited ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNT2J45q0T3u2mn6DrlTMn5EiOZPZnGuZLWPMQPgyBLG8gf-BHIOH_foTGoNJ7jL2J97R6o8wE" alt="Was Cristiano Ronaldo and Lionel Messi&#39;s iconic picture edited ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At no point are the greats together in the same, which means Photoshop or an alternative programme is likely to have been used to for this image.</p></div>
            </div>
        </a><a href='https://www.marketing-interactive.com/louis-vuitton-pairs-up-cristiano-ronaldo-lionel-messi-ad'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Louis Vuitton pairs up Cristiano Ronaldo and Lionel Messi in latest ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS89l9D9soqpyg7LL4IIySi5r2va1lOzJIdUO0sCR1pQ--N9V01P_3bOiG1j98rJMoYLusmUtPF" alt="Louis Vuitton pairs up Cristiano Ronaldo and Lionel Messi in latest ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;In addition to a long tradition of crafting trunks for the world&#39;s most coveted sporting trophies, the Maison celebrates two of the most talented football&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/blog-the-toe-poke/story/4807183/cristiano-ronaldo-lionel-messi-break-the-internet-with-instagram-chess-photo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo, Messi break the internet with Instagram chess photo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSuOMEeell-AszsrB7xauHRwwE2L0kOIrmyeBZX0MUfTHqyXpMHMPzUKwcV_t6Rwejhm_ETheIr" alt="Ronaldo, Messi break the internet with Instagram chess photo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi and Cristiano Ronaldo are used to breaking records on and off the pitch, but the pair almost broke the internet on Saturday night.</p></div>
            </div>
        </a>
        </Template></>;
}