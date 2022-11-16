import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Trump</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Trump"/>
        <meta name="description" content="Trending News about Trump" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Trump</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001cd4c9-1600.jpg" alt="Trump"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/news/us/2022/1116/1336373-trump-election-bid-latest/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump launches &#39;America&#39;s comeback&#39; in presidential bid</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTPLWDGNlxo_0tZDwgWb0tQ041D6AoYN4nBjUhHMIuIGIuJ912Pl2_9A3fV25YD3I7ZZ_5T--jq" alt="Trump launches &#39;America&#39;s comeback&#39; in presidential bid" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former US president Donald Trump announced a third White House run, setting the stage for a bruising Republican nomination battle after a poor midterm&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-us-canada-63463738'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump says he&#39;ll run for president again in 2024</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-Wis0VLbPUEdb-FXtym4rzkUMlovRsDd5BcFvEOzHJNBuajxF1UVEvb0pITy8ZcaA-CxsOh1g" alt="Donald Trump says he&#39;ll run for president again in 2024" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mr Trump&#39;s announcement comes as some fellow Republicans blame him for the party&#39;s lacklustre performance in last week&#39;s midterm elections. President Joe Biden,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/15/1044234232/trump-announces-run-president-2024'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump, who tried to overturn Biden&#39;s legitimate election ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1M4hYcplCBjm2o6eRvIIQR9wfHYqW9u2wwDsbXnnP767na070aLfrbATW5rn_J3_IILvYhxwX" alt="Donald Trump, who tried to overturn Biden&#39;s legitimate election ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump, who tried to overthrow the results of the 2020 presidential election and inspired a deadly riot at the Capitol in a desperate attempt to keep&nbsp;...</p></div>
            </div>
        </a><a href='https://www.politico.com/news/2022/11/15/trump-presidency-2024-candidate-00067130'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump announces he&#39;s running for president again</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSELLiKYLMXBUi9EhQiEK25LW4v92dxxe2iiH4icqbj1sV7EKhAF8Lf3htbLqWeTOej_nPsoJpK" alt="Trump announces he&#39;s running for president again" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PALM BEACH, Fla. — Donald Trump, who lost the 2020 election and left the White House under the cloud of impeachment for his role in the Jan.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/us-news/2022/nov/15/donald-trump-announces-presidential-run-2024-midterms-ron-desantis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump announces 2024 run for president nearly two years ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRbNUkmFLp6i5Cgr7WumtUv5iiytT6baUeSXPeizYZ9G92kn4TaFyuyTqYyoyU3Fe8wm4_GeCQp" alt="Donald Trump announces 2024 run for president nearly two years ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twice-impeached ex-president makes expected election announcement despite shaky midterms and surge from rival Ron DeSantis.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/15/politics/trump-2024-presidential-bid/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former President Donald Trump announces a White House bid for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTDPoGPp7x9F9Q___xFZSUZBwWEQnVA3FitF2-9VooA-lDsWXISDJiQEy67R42L-oBMKwDgf9Y2" alt="Former President Donald Trump announces a White House bid for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former President Donald Trump, aiming to become only the second commander-in-chief ever elected to two nonconsecutive terms, announced Tuesday night that he&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}