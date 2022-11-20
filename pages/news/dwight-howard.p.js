import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dwight Howard</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dwight Howard"/>
        <meta name="description" content="Trending News about Dwight Howard" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dwight Howard</h1>
            <Image width={800} height={500} src="https://www.si.com/.image/t_share/MTkzODYxODA5OTkwNTQyNzg3/dwight-howard.jpg" alt="Dwight Howard"/>
            <h3>Recent News</h3>
            <a href='https://www.si.com/nba/2022/11/19/dwight-howard-video-game-like-debut-taiwanese-pro-league-38-points'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dwight Howard Has Video Game-Like Debut in Taiwanese Pro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSA0HWU9nkGiJJ4-OyUOmPPDn2e4dKQSKNts8qStQdAh_tb3xZtDaXhApceIiAJn0W84_YhDfqi" alt="Dwight Howard Has Video Game-Like Debut in Taiwanese Pro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eight-time NBA All-Star Dwight Howard made his debut in Taiwan&#39;s T1 League with the Taoyuan Leopards on Saturday and put together a jaw-dropping performance&nbsp;...</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10056177-dwight-howard-delights-nba-twitter-with-38-point-25-rebound-debut-in-taiwan'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dwight Howard Delights NBA Twitter with 38-Point, 25-Rebound ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTAQl0wH5pIpXqRkNQJJypnxcQ4VU4pSd_Qwv6-9knMcDW80sSB3ElfXKx_Lqg27-VEgw_wE6mt" alt="Dwight Howard Delights NBA Twitter with 38-Point, 25-Rebound ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former NBA star Dwight Howard was dominant in his T1 League debut in Taiwan on Saturdf.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nba/news/dwight-howard-puts-on-a-show-in-his-taiwanese-debut-looks-like-some-kind-of-wilt-lebron-combination/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dwight Howard puts on a show in his Taiwanese debut, looks like ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXjwzEFi2OfSZ13n12wkq_ZEJhBXyptvtO0jUByYfoDHWwJtCwO3f8qZodE0F7PH5cC21oOssY" alt="Dwight Howard puts on a show in his Taiwanese debut, looks like ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>You have the see the highlights to believe them. Howard was out there looking like some freakish combination of Wilt Chamberlain and LeBron James (relative to&nbsp;...</p></div>
            </div>
        </a><a href='https://nypost.com/2022/11/19/dwight-howard-has-unreal-taiwanese-basketball-league-debut/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dwight Howard has unreal Taiwanese basketball league debut</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQzFeDrzvoJk8z-kAJBI_VvPTS7T5_afdwJOLLw9FJBcXkeKGEZFuxuXlfKOjD63MosILOu3-y9" alt="Dwight Howard has unreal Taiwanese basketball league debut" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dwight Howard may no longer be an NBA superstar, but that hasn&#39;t stopped him from stuffing the stat sheet elsewhere.</p></div>
            </div>
        </a><a href='https://hoopshype.com/2022/11/19/dwight-howard-debuts-in-taiwan-with-monster-game/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dwight Howard debuts in Taiwan with monster game</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSckHeN0vbZMb5EuyvN6b02MJbjGq4aaUs93dABSj4oyjCqgAzmCgzjUNY2zDSS8QE-70P8jOWP" alt="Dwight Howard debuts in Taiwan with monster game" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former NBA star Dwight Howard fell just short of a triple double in leading the Taoyuan Leopards to a pulsating comeback win Saturday in their T1 LEAGUE&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}