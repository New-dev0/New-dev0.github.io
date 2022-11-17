import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Donald Trump</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Donald Trump"/>
        <meta name="description" content="Trending News about Donald Trump" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Donald Trump</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_news/13EBA/production/_127649518_288a4451e01916c43c965c19597b796bec0d36690_223_5000_28141000x563.jpg" alt="Donald Trump"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/news/world-us-canada-63463738'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump says he&#39;ll run for president again in 2024</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-Wis0VLbPUEdb-FXtym4rzkUMlovRsDd5BcFvEOzHJNBuajxF1UVEvb0pITy8ZcaA-CxsOh1g" alt="Donald Trump says he&#39;ll run for president again in 2024" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mr Trump&#39;s announcement comes as some fellow Republicans blame him for the party&#39;s lacklustre performance in last week&#39;s midterm elections. President Joe Biden,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theatlantic.com/ideas/archive/2022/11/trump-used-be-bold-truth-teller/672141/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump Used to Be a Bold Truth-Teller</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGxOmyIS0W8hQwpsekO54y79zQpYxljjq-LmCum2FWkNB2STZ7bf3QFYUyS0FlvmdBh5SICM2F" alt="Trump Used to Be a Bold Truth-Teller" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The critical consensus on Donald Trump&#39;s 2024 campaign launch is that it was boring in both delivery—uninspired and listless—and content, mostly rehashing&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/16/politics/new-york-post-trump-2024-announcement/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The New York Post just brutally trolled Donald Trump</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQWQ-bQ5zZ-9hkxL8VTw74sl0RbfnsLeBurB-R1pvafS0dNUdREnvpdN8DUGHLup3sEPOswTTnN" alt="The New York Post just brutally trolled Donald Trump" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If you&#39;re looking for the most brutal treatment of Donald Trump&#39;s presidential announcement, look no further. The New York Post has won the title.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/16/1137076815/donald-trump-is-officially-running-for-president-in-2024'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump is officially running for president in 2024</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Donald Trump is officially running for president in 2024" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump, who tried to overthrow the 2020 presidential election results and inspired a deadly riot at the U.S. Capitol, announced Tuesday night that he&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/2022/11/16/caution-excitement-indifference-us-reacts-to-trumps-campaign'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Caution, excitement, indifference: US reacts to Trump&#39;s campaign</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTUKApPcrDDlGJur4M_kBOuMp2pqglA2I8vC7KRC0T56INkydbM7n1vWn2p8j091oH8go2hj0Oi" alt="Caution, excitement, indifference: US reacts to Trump&#39;s campaign" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As some Republicans distance themselves from the ex-president&#39;s 2024 bid, Democrats promise to ensure that he loses again. Trump. Former US President Donald&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rutgers.edu/news/should-media-stop-covering-donald-trump'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Should the Media Stop Covering Donald Trump?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQ5S27jo1sAZ52VApTmE8O3EkBzWLiu7FNM15o9JADCuHWluh82u8DCFOKB1jGjpL27FBh9fG0" alt="Should the Media Stop Covering Donald Trump?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After announcing that he will run for president in 2024 despite midterm results, Donald Trump continues to dominate the news cycle. But if he uses the same&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-16/billionaire-peterffy-adds-trump-caution-he-can-t-get-elected'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump &#39;Can&#39;t Get Elected,&#39; Billionaire Peterffy Says</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7aVIDa_bH-85g5v14lFYfr1p98yyrQ5vliDUSCX2dWL9jQBAjI0jZNj3sLDGJmIt17-6T28Mu" alt="Donald Trump &#39;Can&#39;t Get Elected,&#39; Billionaire Peterffy Says" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Billionaire Thomas Peterffy, founder of Interactive Brokers Group Inc., said it&#39;s time for the Republican Party to move on from Donald Trump.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/16/trump-ally-billionaire-megadonor-ronald-lauder-will-not-back-trumps-2024-run-for-president.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump ally, billionaire GOP megadonor Ronald Lauder won&#39;t back ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVSDrEq4TDXnFhlLF5xYRt3p0GzmLIXFjGkcR9MajT0-DwIQTvatj3jBEAnUq9ORXmuU_y9Ro3" alt="Trump ally, billionaire GOP megadonor Ronald Lauder won&#39;t back ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Billionaire and GOP megadonor Ronald Lauder will not finance Donald Trump&#39;s 2024 campaign for president.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/rrapier/2022/11/16/fact-checking-donald-trump-on-the-strategic-petroleum-reserve/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fact-Checking Donald Trump On The Strategic Petroleum Reserve</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ47SLcu7UK7KbKjtDvv_ASUJf0iS8jUGpG-_USJCaHCU1Er5TRbbEggnGuysZqlgkHk4TGu07H" alt="Fact-Checking Donald Trump On The Strategic Petroleum Reserve" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Last night, as expected, former President Donald Trump announced he is throwing his hat in the ring for the 2024 presidential election.</p></div>
            </div>
        </a><a href='https://www.ft.com/content/d17ad1c3-2be0-4a2e-94bf-8e7da3f23dc5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Blackstone&#39;s Schwarzman says he will not support Donald Trump&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdASe9qWmbzXX7Aq41KhZfm6oCT5LToe6kdQVU5EznZcSc7seEpnps6-yWMf6f0pBc53RqEKh6" alt="Blackstone&#39;s Schwarzman says he will not support Donald Trump&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;ll send you a myFT Daily Digest email rounding up the latest Donald Trump news every morning. Blackstone founder Stephen Schwarzman has said he will not&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}