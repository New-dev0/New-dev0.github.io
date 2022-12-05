import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tyson Fury</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tyson Fury"/>
        <meta name="description" content="Trending News about Tyson Fury" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tyson Fury</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd4e452c513dd3e87/638c4d54542a0c3ac2814500/goal---web-two-way-split--c7054de5-be15-46bf-8f63-a0ee4f4c7bfa.png" alt="Tyson Fury"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-za/news/man-utd-wayne-rooney-tyson-fury-knighted-WBC-world-heavyweight-title-win/bltc47e9329494d4ab1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man Utd legend Wayne Rooney calls for Tyson Fury to be knighted ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQtyVyzRKY2CPbNF8F0oHy6S_To3GtDNz8G2AZRd-eat-5aM7wUM0-IJDGdD7bta0QP4j2KQ8QW" alt="Man Utd legend Wayne Rooney calls for Tyson Fury to be knighted ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wayne Rooney believes that heavyweight champion Tyson Fury should be knighted following his victory over Derek Chisora on Saturday night.</p></div>
            </div>
        </a><a href='https://www.dazn.com/en-ZA/news/boxing/tyson-fury-advises-derek-chisora-to-retire/7q55gjnle9or15saytzejzd4t'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tyson Fury advises Derek Chisora to retire</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQItUSAFuSHvR5rkXeAlyH4dzzv6IE88Nu22SUAacmkBf3D0mCkmeXi0zg6nYLrG2b2VDga5ZIA" alt="Tyson Fury advises Derek Chisora to retire" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fury defended his belt on Saturday night at the Tottenham Hotspur Stadium, leaving Chisora facing another tough defeat. While the 38-year-old had beaten Kubrat&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/sport/boxing/tyson-fury-derek-chisora-fight-28650468'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Derek Chisora refuses to make retirement decision after brutal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgZFJ-tsRbKZuLrow5xxZ-DF-UQpDQ212JruAR5hupnwfoIe6E0ejstvOFocEgJbuGTO-NjFgN" alt="Derek Chisora refuses to make retirement decision after brutal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>British heavyweight Chisora has continued to vow that he will &quot;fight on&quot; despite losing in a hugely one-sided clash with Fury last night, which sees him now&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/sport/boxing/tyson-fury-oleksandr-usyk-wilder-28650876'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tyson Fury borrows Deontay Wilder catchphrase to call out ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQGO4-ZzCSVAEBG1py3rwoVHvr1EoZTfp8_B-PBsJSuvYo23vWNJkSBq2qCzwNcaEOfXyPazwc" alt="Tyson Fury borrows Deontay Wilder catchphrase to call out ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tyson Fury defeated Derek Chisora in his latest heavyweight outing before confronting potential undisputed title opponent Oleksandr Usyk, who was ringside&nbsp;...</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/boxing/2022/12/04/tyson-fury-vs-oleksandr-usyk-fight-confirmed-next-couple-weeks/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tyson Fury vs Oleksandr Usyk: Fight to be confirmed in &#39;next couple ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQcQH7g-RsxOCuGo-uFahFm833lFEyI5j2AL1tlaNG_j-D5bn88DESoK-xLGXWVHPootyRpLNNx" alt="Tyson Fury vs Oleksandr Usyk: Fight to be confirmed in &#39;next couple ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fury&#39;s promoters Frank Warren and Bob Arum disclosed to Telegraph Sport that they expect the contest to be confirmed in &#39;a couple of weeks&#39;</p></div>
            </div>
        </a><a href='https://talksport.com/sport/boxing/1266728/ksi-thinks-tyson-fury-vs-derek-chisora-poor-stoppage-praises-del-boy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;He would&#39;ve gone out on his shield&#39; – KSI thinks Tyson Fury vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRzv-y1MhFQOCh4yLQGJKoJn5nKkvjg7D1TzOtDYJuRSaeqDhOq3jTqjsfnK0X7ABIwF8hlbT-i" alt="&#39;He would&#39;ve gone out on his shield&#39; – KSI thinks Tyson Fury vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>KSI was not pleased with the referees decision to stop Derek Chisora&#39;s fight with Tyson Fury in the tenth round.The social media star was ringside for.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/dec/03/tyson-fury-retains-heavyweight-title-after-stopping-derek-chisora'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tyson Fury turns focus to Usyk after dominating Derek Chisora to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTKLARs-j2soB6Xmyl46ie7M0JHkpkCohRQHFQNY1x8SF7WWrAajOHW5yl2OSScHnbOdD7oG6ch" alt="Tyson Fury turns focus to Usyk after dominating Derek Chisora to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tyson Fury retained his WBC heavyweight title after stopping fellow Briton Derek Chisora in the 10th round at the Tottenham Hotspur Stadium.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/boxing/2022/12/04/638d1ae5268e3ec7128b457d.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tyson Fury offers undercard spot to Jake Paul on Usyk fight</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2dviLaKsmGA7xUTJxY6RaFPKLhV-K_YcSgQKHVL-CIONcMAcz3ARYDsKwup--cWsb_AF0Sw7I" alt="Tyson Fury offers undercard spot to Jake Paul on Usyk fight" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tyson Fury was speaking with the media during the post-fight press conference after defeating Derek Chisora. He was asked over the Jake Paul vs.</p></div>
            </div>
        </a><a href='https://www.skysports.com/boxing/news/12183/12761177/tyson-fury-reveals-what-next-after-derek-chisora-victory-either-oleksandr-usyk-early-in-2023-or-joe-joyce-at-wembley'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tyson Fury reveals what next after Derek Chisora victory: Either ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7fDhc8K5Ll1AFmJy9X-Oxb8xVVa-aqePYfOonW8xe8a6-SCo2zAQwV7XTXEDQsC8XAEYhjqqw" alt="Tyson Fury reveals what next after Derek Chisora victory: Either ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tyson Fury wants undisputed clash with Oleksandr Usyk; but the WBC champion explains why Joe Joyce would be a harder fight for him; after winning in London&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/boxing/article-11499245/Lennox-Lewis-says-wise-Tyson-Fury-used-Derek-Chisora-prepare-Oleksandr-Usyk.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lennox Lewis says &#39;wise&#39; Tyson Fury used Derek Chisora to prepare ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRu--Ca4xO4smneOE-PJiqjcjmFT75yiIYgxdslEIL_O5ONQZZDB3_jtV8W1vOYUimv2WjI7AR0" alt="Lennox Lewis says &#39;wise&#39; Tyson Fury used Derek Chisora to prepare ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fury completed his hat-trick of wins over a hapless Chisora at the Tottenham Hotspur Stadium on Saturday night, with referee Victory Laughlin eventually&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}