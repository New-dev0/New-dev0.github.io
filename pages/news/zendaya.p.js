import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zendaya</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zendaya"/>
        <meta name="description" content="Trending News about Zendaya" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zendaya</h1>
            <Image width={800} height={500} src="" alt="Zendaya"/>
            <h3>Recent News</h3>
            <a href='https://webnewsobserver.com/are-tom-holland-and-zendaya-planning-to-settle-down-soon-deets-inside/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Are Tom Holland and Zendaya planning to settle down soon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSH1PI-kkF6-QlhE6C9V9d_QHBdEzMXVQDspEAbT5jEFyQbFYy4Q3yp15stvhm-930OdlxUMVVCTQ" alt="Are Tom Holland and Zendaya planning to settle down soon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zendaya turned a year older a few months ago in September, and she decided to spend her special day with her loved ones in New York.</p></div>
            </div>
        </a><a href='https://www.bhpioneer.com/lifestyles/entertainment/zendaya-and-tom-holland-are-planning-for-the-future/article_3c9b3940-cf0e-5478-a883-02ee4d65560b.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zendaya and Tom Holland are &#39;planning&#39; for the future</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9EXVg7KYvtKJTrzo6DIaARAuyBCFvdg6QkBjQkbLpHSdJwjpc83laJE2D3NGYomtHNr8SKArG" alt="Zendaya and Tom Holland are &#39;planning&#39; for the future" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Hollywood couple first met on the set of their movie &#39;Spider-Man: Homecoming&#39; in 2016 - which saw Tom take on the role of the titular superhero and Zendaya&nbsp;...</p></div>
            </div>
        </a><a href='https://www.firstpost.com/entertainment/tom-holland-and-zendaya-planning-to-settle-down-soon-reports-11697401.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tom Holland and Zendaya to “settle down” soon: Reports</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTfK5bm-j2bIM0a1BxtCJnhcYZFCDIxyhp5nFo8UAbTxNkHKWdo86UNYLfnj4rjcKmeHHPvmDOH" alt="Tom Holland and Zendaya to “settle down” soon: Reports" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>However, after a year and a half of making their relationship official, Tom and Zendaya are reportedly planning on “settling down.”</p></div>
            </div>
        </a><a href='https://english.jagran.com/entertainment/are-tom-holland-zendaya-planning-to-settle-down-together-10055366'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Are Tom Holland &amp; Zendaya Planning To Settle Down Together ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQNP91HzDKSKGmX87DnpGBkOEXb1GQT9SL2uafxeYQqlqUDj40MGqHi3b7KBHgaM03YJfirlmAd" alt="Are Tom Holland &amp; Zendaya Planning To Settle Down Together ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Popular Hollywood couple Zendaya and Tom Holland, who have been dating since 2021, are &quot;planning for the future together.&quot; The reports have been doing rounds&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.com/zendaya-tom-holland-getting-serious-152923908.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zendaya and Tom Holland are getting &#39;serious,&#39; planning for a &#39;real ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRaEZH2TrHHmry-XH8ynnlCDZinpQfJMlX-30blnzOEe3tuJazO6bf_ZDzoPxAhjS3pNXR-8k_D" alt="Zendaya and Tom Holland are getting &#39;serious,&#39; planning for a &#39;real ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Spider-Man: Homecoming&quot; actors Zendaya and Tom Holland are ready to take their romance to the next level, as reports claim the couple seem &quot;serious and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}