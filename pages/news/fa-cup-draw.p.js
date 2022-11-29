import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FA Cup draw</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FA Cup draw"/>
        <meta name="description" content="Trending News about FA Cup draw" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FA Cup draw</h1>
            <Image width={800} height={500} src="https://www.independent.ie/sport/soccer/63202/42180360.ece/AUTOCROP/w1240h700/Pep" alt="FA Cup draw"/>
            <h3>Recent News</h3>
            <a href='https://www.independent.ie/sport/soccer/fa-cup-draw-man-city-and-chelsea-set-for-third-round-clash-42180361.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FA Cup draw: Man City and Chelsea set for third-round clash</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTUHvqWJk_XROM3z03PKAJcNWnJ349jE-dkwNzJB5XvDIztlwoO8jxav6uX8-veK480bdqH_nDZ" alt="FA Cup draw: Man City and Chelsea set for third-round clash" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea face the sternest of tests if they are to reach a fourth straight FA Cup final after being drawn away to Premier League rivals Manchester City in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thefa.com/news/2022/nov/28/emirates-fa-cup-third-round-proper-draw-20222811'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emirates FA Cup third round draw</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSNyWU3qY1EfDDZqmnlmFdkxC6I1JvbII8_2k0O_hsnjrSf7Iy5IznugMEOSZYGsyx6elLzxmqM" alt="Emirates FA Cup third round draw" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Clubs from the Premier League and EFL Championship joined the 2022-23 competition, as third round draw is made.</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/sport/soccer/fa-cup-3rdround-draw-live-28605059'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FA Cup draw live as Man Utd and Arsenal discover third round ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT89aMHgolYP7LN-h61BlgvuO1XNM0iGCcVz_sKi2x5E8I3GnCYsFBzgh8t8lFdWZTljWss-Uay" alt="FA Cup draw live as Man Utd and Arsenal discover third round ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All 20 Premier League clubs enter the draw in the FA Cup third round with big hitters Manchester United, Arsenal and Liverpool among the 64 teams in total&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/news/11095/12757473/fa-cup-third-round-draw-man-city-play-chelsea-manchester-united-host-everton-while-arsenal-go-to-oxford-united'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FA Cup third round draw: Man City play Chelsea, Manchester United ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZoMhhEks05M2q-voNqIlPvPjcSn5_KIPMC07aAuTgoH9JBCERCEJe8YvTfqGQub2sUZ5_8QN4" alt="FA Cup third round draw: Man City play Chelsea, Manchester United ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester City have been drawn against Chelsea in the FA Cup third round; elsewhere in the draw: Oxford United vs Arsenal, Manchester United vs Everton,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wrexhamafc.co.uk/news/2022/november/fa-cup-draw--wrexham-learn-third-round-opponents/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FA CUP DRAW | Wrexham learn Third Round opponents</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQe6PW3ctd5xZYnGbRg6ow4GQ24Kjmqv4IT6TbxHi6tqgEiEAzSGC70pvoo5WWNw8V3dbfei32Z" alt="FA CUP DRAW | Wrexham learn Third Round opponents" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wrexham AFC will face Coventry City away in the FA Cup Third Round, following this evening&#39;s draw at Anfield.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63786875'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man City host Chelsea in FA Cup third round</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-vnIWsS8Fz0on1Y-cgUmNlN4lZfmGXHvnwGu0Z__SrPpbJ89E9B6Z4ribX_dobTCOEWVqxW8U" alt="Man City host Chelsea in FA Cup third round" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elsewhere, holders Liverpool will welcome Wolverhampton Wanderers to Anfield, while Manchester United are at home to Everton in another all-Premier League tie.</p></div>
            </div>
        </a>
        </Template></>;
}