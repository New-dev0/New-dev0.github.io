import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cristiano Ronaldo news</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cristiano Ronaldo news"/>
        <meta name="description" content="Trending News about Cristiano Ronaldo news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cristiano Ronaldo news</h1>
            <Image width={800} height={500} src="https://assets.manutd.com/AssetPicker/images/0/0/17/212/1168590/GettyImages_14173281801669136002490_large.jpg" alt="Cristiano Ronaldo news"/>
            <h3>Recent News</h3>
            <a href='https://www.manutd.com/en/news/detail/man-utd-official-statement-on-cristiano-ronaldo-22-november-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo to leave United</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRR1Cb_zi2OwmEeN_HnuigNSKDG1nYbIHG-HqQM7E1VkdDjGS8wQAU8AyI98F4XHiABPXaqZOKR" alt="Ronaldo to leave United" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo is to leave Manchester United by mutual agreement, with immediate effect. The club thanks him for his immense contribution across two&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-ng/news/man-utd-confirm-cristiano-ronaldo-leave-club-mutual-agreement-with-immediate-effect/blt9b38d46bfb9a5947'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man Utd confirm Cristiano Ronaldo is set to leave club by mutual ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTA2ffubNwjJ99DXRzNd7iPEbIRWeAJH4b-ifFcJrf5ftYCf2iZ__4b3bQTKhkXdkgfmFvzHwef" alt="Man Utd confirm Cristiano Ronaldo is set to leave club by mutual ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo will leave Manchester United with immediate effect after reaching a mutual agreement with the Red Devils.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/soccer-transfers/story/4810330/cristiano-ronaldo-leaves-man-united-by-mutual-agreement'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo leaves Man United by &#39;mutual agreement&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEIFpwGgIzHti_81tgGyUGdMF9mj1S8MBcgw5loPOmxcYRW_TV9NqqIewl6r72W2NxAZJQQF_E" alt="Cristiano Ronaldo leaves Man United by &#39;mutual agreement&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United have confirmed that Cristiano Ronaldo has left the club effective immediately following his outspoken interview with Piers Morgan.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63720774'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo to leave Man Utd with immediate effect</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7naMKiZPNKY4IkfltqmEguZRcuEFPTQzOUy9eD2bKrGO2Meck2Ak5VtxlcCeKNJ1l-jL2HYII" alt="Ronaldo to leave Man Utd with immediate effect" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>United are fifth in the Premier League in Ten Hag&#39;s first season as manager, with the season taking a break for the World Cup in Qatar. Ronaldo is with Portugal&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/news/11667/12753309/cristiano-ronaldo-manchester-united-forward-to-leave-immmediately-by-mutual-consent'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo: Manchester United forward to leave club ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxY-UQC2e4NPUSnocY655hTJUMQ37B269lcqyhB4Q_px0CtY3oqx4RH3y_3i9LkWygmzxJWF8r" alt="Cristiano Ronaldo: Manchester United forward to leave club ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Man Utd issued a statement on Tuesday announcing they had reached a mutual agreement with Cristiano Ronaldo to terminate his contract; Ronaldo said: I love&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}