import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Man United vs Tottenham</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Man United vs Tottenham"/>
        <meta name="description" content="Trending News about Man United vs Tottenham" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Man United vs Tottenham</h1>
            <Image width={800} height={500} src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1020%2Fr1078515_1296x729_16%2D9.jpg" alt="Man United vs Tottenham"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/soccer/manchester-united-engman_utd/story/4776516/man-uniteds-cristiano-ronaldo-left-old-trafford-before-full-time-in-win-over-tottenham-sources'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo axed from Man United squad vs. Chelsea after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZZBpO28RAfPYs7ZOGxKu2KyqL-iAaOZ8e6k7Hx51KxTWDlyV0HeWuQtilmKPeer0BOY5M5mef" alt="Cristiano Ronaldo axed from Man United squad vs. Chelsea after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo has been axed from the Man United squad to face Chelsea on Saturday as punishment for his early exit in the win over Tottenham.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/watch-cristiano-ronaldo-left-fuming-angry-manchester-united-star-storms-down-tunnel-after-snub-vs-tottenham-101666251473527.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Cristiano Ronaldo left fuming, storms down tunnel after snub ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThnaqMX7XUVpQ4g_lcah-w6bfHHsJHODv2NqqXovej-oewnWTog_ZJtyAAgfQ4gRJ-52xRI8g3" alt="Watch: Cristiano Ronaldo left fuming, storms down tunnel after snub ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo was left fuming and stormed down the tunnel after a substitution snub during Manchester United&#39;s win vs Tottenham. | Football News.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/man-utd-drop-ronaldo-for-chelsea-clash-after-walkout-against-spurs/blt474c3019f2ffbdc9'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man Utd drop Ronaldo for Chelsea clash after forward&#39;s walkout ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSMGnfjjYElVUasd_MKHbpqiIDH6I0A6geRi-rDR4giLRvGirYp50JslY8cLEjnOypiM9TYXgHS" alt="Man Utd drop Ronaldo for Chelsea clash after forward&#39;s walkout ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United have confirmed that Cristiano Ronaldo will not travel with the squad to face Chelsea on Saturday.</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/man-utd-news-ronaldo-chelsea-25316404'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United drop Cristiano Ronaldo from squad vs Chelsea ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQiCPBT1OKNQWspZ-9hVe4G6Hne3VM3RSaE7o0Xac6AvVbZEDdinWDEI5cQTKzCX3z_FUgfWov" alt="Manchester United drop Cristiano Ronaldo from squad vs Chelsea ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Man Utd have taken disciplinary action against Cristiano Ronaldo after he walked down the tunnel early against Tottenham on Wednesday night.</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10053058-cristiano-ronaldo-out-vs-chelsea-after-leaving-manchester-united-vs-tottenham-early'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo Out vs. Chelsea After Leaving Manchester United ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR9-nPSbPYku8lI9kvH9vg3Vs4PenYPR7zl9H-gxGNAvMrMdnnMSpdIjgU-1QkjKlW9OjZt0C7W" alt="Cristiano Ronaldo Out vs. Chelsea After Leaving Manchester United ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo will not play in Manchester United&#39;s upcoming game against Chelsea on Saturday after leaving before the final whistle in the last match,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/soccer/manchesterunited/news/cristiano-ronaldo-refused-to-play-for-manchester-united-vs-tottenham'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo Refused To Play For Manchester United vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQyK7jp6uYoYE8UQzHwrRmho2y2OZP7y3ARKJH5SWgLXRcATUfam432DjnV77VD1_L5M_MRjSu1" alt="Cristiano Ronaldo Refused To Play For Manchester United vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo refused to come on as a substitute against Tottenham for Manchester United on Wednesday night.</p></div>
            </div>
        </a>
        </Template></>;
}