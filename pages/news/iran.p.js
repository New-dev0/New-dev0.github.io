import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Iran</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Iran"/>
        <meta name="description" content="Trending News about Iran" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Iran</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/26/ap22330483023739_wide-c3a2bb6535af547101b00c8b6e81ebf3f71b1f82-s1400-c100.jpg" alt="Iran"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/26/1139278680/iran-leader-praises-force-tasked-with-quashing-dissent'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran leader praises force tasked with quashing dissent</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVeUlvZUkB8R_gmJr5uoDAvfhNMKqX8_Jn4OG0Gl1Ju20gUj5KNU53hfP0oqh7gN_DB9CoXZAm" alt="Iran leader praises force tasked with quashing dissent" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ayatollah Ali Khamenei said paramilitary volunteers &quot;sacrificed themselves&quot; to protect people from &quot;rioters,&quot; as eye doctors warn that demonstrators have&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/26/middleeast/iran-supreme-leader-praises-crackdown-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran&#39;s supreme leader praises paramilitary for crackdown on &#39;rioters ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1TttCBuM47kJRMCeWKX6mLCZUHGRjZnkCSy9RZUFVm87GyR_HYPqcE9QareIT_8rERpI2F75w" alt="Iran&#39;s supreme leader praises paramilitary for crackdown on &#39;rioters ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iranian Supreme Leader Ali Khamenei speaks on the protests all around the country in Tehran, Iran on November 19, 2022. Iranian Leader Press Office/Anadolu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/middle-east/irans-khamenei-praises-basij-forces-confronting-riots-tv-2022-11-26/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran&#39;s Khamenei praises Basij forces for confronting &#39;rioters&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfJtXUpDqe7d1eWXWN842oAHk6kZN3CZRbW077usfIDpm9S2ifXk9xkdyP4lEfSUNwqNVv2h16" alt="Iran&#39;s Khamenei praises Basij forces for confronting &#39;rioters&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Supreme Leader Ayatollah Ali Khamenei said on Saturday Iran&#39;s Basij militia forces have sacrificed their lives in what he called riots, the wave of protests&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iranintl.com/en/202211265492'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Workers, Students, Diaspora Hold Protests Against Iran Regime</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZ9a86BNDw72y8aWT0vN0dUFImhT6YMlOJWyuR1Kbq_J7nQ5lgo41KlZ4ZQx7gz1Zv4lEUNDhF" alt="Workers, Students, Diaspora Hold Protests Against Iran Regime" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following the publication of a joint call by seven universities in Tehran to hold gatherings in support of the people of Kurdish regions, the students of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxnews.com/world/iran-protests-un-human-rights-council-votes-investigate-regimes-violent-response'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran protests: UN Human Rights Council votes to investigate ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQvJxnEBgW2m7240IxaVhRJC6hJcrRk04oc0-sS4REqjYuR14iX5OJW24FZCqOhSGuUT8RDmijj" alt="Iran protests: UN Human Rights Council votes to investigate ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Residents in Iran&#39;s Kurdish city of Mahabad have had their power and internet access cut as the regime fights back against demonstrations. The U.N. voted to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/henryflynn/2022/11/25/during-civil-unrest-irans-world-cup-team-becomes-a-divisive-symbol/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>During Civil Unrest, Iran&#39;s World Cup Team Becomes A Divisive ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfPGCx0Lox0nJkTPe_kbj0biUAt4CVSHetuoP6LpVciK4JpAbfPZU63chcl9_Z1jaw88S9X7PN" alt="During Civil Unrest, Iran&#39;s World Cup Team Becomes A Divisive ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In most instances, a dramatic World Cup victory would ignite nationwide celebration in a soccer country like Iran. Given what&#39;s been happening in the&nbsp;...</p></div>
            </div>
        </a><a href='https://apnews.com/article/womens-soccer-world-cup-iran-sports-0584e3e37e03babc19f04d79c8843ca0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran government supporters confront protesters at World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQoSnDX3b_tIPj3DM31VQmBOvksjFaqYymbAmNBcwuoYhCnlk1CBxZw_hO54GSW2GfisyX1-GAy" alt="Iran government supporters confront protesters at World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AL RAYYAN, Qatar (AP) — Tensions ran high at Iran&#39;s second match at the World Cup on Friday as fans supporting the Iranian government harassed those&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtontimes.com/news/2022/nov/26/iran-shuts-out-noise-at-world-cup-but-united-state/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran shuts out noise at World Cup but United States looms</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTPZQFmQyztb8HgNaxsvbbkNcwFU2F4Idf8b_yEq_bPv5YD0BMlWBN9uJtjUf5u880JGAhDI9YP" alt="Iran shuts out noise at World Cup but United States looms" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After a World Cup start clouded by a disastrous loss and persistent questions about the civil unrest back home, Iran is celebrating the prospect of its&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iranintl.com/en/202211260138'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran&#39;s Khamenei Tries To Boost Confidence Among Loyal Forces</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUSoLhYZlDRqNyXVUr2_eupDcUT4r9dst_impJm1FOtQaQBKMbBhuDR5JYxsYAXHOzUhhAOT27" alt="Iran&#39;s Khamenei Tries To Boost Confidence Among Loyal Forces" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a speech to loyal Basij forces Saturday, Supreme Leader Ali Khamenei tried to reinforce his ideology among followers amid popular protests threatening&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-middle-east-63762276'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup: Iran protesters confronted at World Cup game against ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcToC2MpZcVw87q2iWAVOZnpomB0PMK9jvNp1D3BsAMvaVSMsd1iinqxBPn-gMr2Jcx3ymyaLWYu" alt="World Cup: Iran protesters confronted at World Cup game against ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Confrontations between pro-Iran government fans and protesters broke out at the country&#39;s second World Cup match in Qatar on Friday.</p></div>
            </div>
        </a>
        </Template></>;
}