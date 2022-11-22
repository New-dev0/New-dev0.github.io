import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Iran national football team</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Iran national football team"/>
        <meta name="description" content="Trending News about Iran national football team" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Iran national football team</h1>
            <Image width={800} height={500} src="https://image.cnbcfm.com/api/v1/image/107154991-1669048345952-gettyimages-1443296903-jf2_4126_z4740ogf.jpeg?v=1669049493&w=1920&h=1080" alt="Iran national football team"/>
            <h3>Recent News</h3>
            <a href='https://www.cnbc.com/2022/11/21/iran-soccer-team-silent-during-national-anthem-at-its-first-world-cup-game.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran soccer team silent during national anthem at its first World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSULCaFwq24hlxnIMZrdwudMG9BdGu-qAevlCV1qsuw5L54lgwSfBjtbYBNKFM51lVTGr0FYdxb" alt="Iran soccer team silent during national anthem at its first World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iran players line up for the national anthem prior to the FIFA World Cup Qatar 2022 Group B match between England and IR Iran at Khalifa International Stadium&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/21/football/iran-football-world-cup-protests-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England vs. Iran: For Iranians, this World Cup is about more than ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ768opbNzbZKxayPGwYqekzfytYqYYYZC71AW1YaQjk7QtdyvZggRciBISicfG-Sg1rygOA9HV" alt="England vs. Iran: For Iranians, this World Cup is about more than ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For the last few months, soccer in Iran has witnessed small acts of defiance against the country&#39;s regime amid widespread protests in the country;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/world/2022/11/21/iran-world-cup-protests-anthem/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>In the spotlight, Iran&#39;s World Cup team silently nods to protests at home</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSjO4Q7nmRe5Jnm6onen_hX4Qaf1TTzccLRqA3MLCP_QDQ_0PrUzUc9pdZsFihTXGIzGOtonSe2" alt="In the spotlight, Iran&#39;s World Cup team silently nods to protests at home" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The appearance of Team Melli in Qatar is being closely watched — and not just for how it performs, as each side in the divided country looks for their&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/2022/11/21/iran-refuse-to-sing-national-anthem-in-world-cup-opener'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran refuse to sing national anthem in World Cup opener</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRZ9CasJe6OCe9y48_EvxPJLWqnoZWQIuyk-LLnJLrp_x3D8yD1Q02oGKO9WragogljfTuZQreJ" alt="Iran refuse to sing national anthem in World Cup opener" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The national team shows support for the anti-government protests taking place after Mahsa Amini&#39;s death.</p></div>
            </div>
        </a><a href='https://www.rte.ie/news/world/2022/1121/1337452-iranian-protest-qatar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iranian football squad declines to sing national anthem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYXQCCAV_4P6Ke5_3vRan6qTQ3CjF95w-3ShrbdUdnM4FonI04KjGow1j3k6uR21AMVMFgGfjw" alt="Iranian football squad declines to sing national anthem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iran&#39;s World Cup football team declined to sing their national anthem before their opening match against England today after many fans back home accused the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/en/sports/iranian-national-football-team-refuses-to-sing-national-anthem-ahead-of-england-match-/2744353'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iranian national football team refuses to sing national anthem ahead ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9-ur7-1rxp9_f8IXThDaPQWxjEfefLqesovDrJ8HUJvJMzj93ZmX19MCUwvYBPqjd76auIoDu" alt="Iranian national football team refuses to sing national anthem ahead ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team players, along with Iranian fans, continue protest Mahsa Amini killing - Anadolu Agency.</p></div>
            </div>
        </a>
        </Template></>;
}