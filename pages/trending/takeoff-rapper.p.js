import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Takeoff rapper</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Takeoff rapper"/>
        <meta name="description" content="Trending News about Takeoff rapper" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Takeoff rapper</h1>
            <Image width={800} height={500} src="" alt="Takeoff rapper"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/world-news/takeoff-rapper-of-grammy-nominated-trio-migos-killed-in-houston-shooting-101667310505082.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Takeoff, rapper of Grammy-nominated Migos, killed in Houston ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxY2D8I_J0zB6OsQjUJOmD1SL4-hrrmhAs1AeIgoIs9qwlMnRYBfqZuVPShm2haXUXhdQSq-e1" alt="Takeoff, rapper of Grammy-nominated Migos, killed in Houston ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two other people were shot and taken to area hospitals in private vehicles, police said. | World News.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/01/1133115916/takeoff-migos-dead-at-28'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Takeoff, member of Atlanta rap group Migos, has died at 28</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQr8dnkBIdWu8srNE887c_O-gh_ybchprx6ZlVu9kFsoeWlQ6IvgFXIEZEqjbsCQda5xq00Lerl" alt="Takeoff, member of Atlanta rap group Migos, has died at 28" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The rapper, part of Migos, the Atlanta group that was hugely commercially popular and both formally and culturally influential, was reportedly shot and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/entertainment-arts-63470684'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Takeoff: Tributes to Migos rapper shot dead in Houston at 28</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQhMyV5I367-62S4VyiAg8RuRDCyoUySgnA8GVyGWpqTfDi3vMvNID3aovlBiyNk2JfZhoXGkpu" alt="Takeoff: Tributes to Migos rapper shot dead in Houston at 28" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Takeoff was a member of the influential US rap trio who had hits like Bad and Boujee and Stir Fry.</p></div>
            </div>
        </a><a href='https://www.ndtv.com/world-news/28-year-old-rapper-takeoff-member-of-migos-shot-dead-in-houston-3480662'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>American Rapper Shot Dead At Bowling Alley After Fight Over Dice ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWebS843w3ZaivDzxu9djnJYzvBgtQFd9CvRj02LpF-sQJess1BK3TWusmByMq9AuFgh67QzAO" alt="American Rapper Shot Dead At Bowling Alley After Fight Over Dice ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rapper Takeoff was a member of hip-hop group Migos that soared to prominence off their viral 2013 hit &quot;Versace,&quot; which Drake remixed.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/01/entertainment/takeoff-migos-dead/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Takeoff, member of rap group Migos, fatally shot outside private ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS6P8pEvoMt_6NNjiFQG8f3v4dmYyPvbhEaCeZkZ0sotYzVlGGw_QdUFKWIWOZ1X5lSO_vJgq49" alt="Takeoff, member of rap group Migos, fatally shot outside private ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Takeoff, who was one-third of the platinum-selling rap group Migos, was shot and killed early Tuesday in Houston, Texas, a source close to the group&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/nation/2022/11/01/rapper-takeoff-migos-shooting-houston/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Migos rapper Takeoff fatally shot in Houston</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ38wJwmYEXM3HO_qXYyBLyZd8rs8frnkmn_G0V2dhFYN7Y_r2V-ruL4K9y19LMSXrvtUwD8zB0" alt="Migos rapper Takeoff fatally shot in Houston" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Takeoff, who rose to prominence as one-third of the hip-hop trio Migos, was killed at a private party, his representative told the Associated Press.</p></div>
            </div>
        </a>
        </Template></>;
}