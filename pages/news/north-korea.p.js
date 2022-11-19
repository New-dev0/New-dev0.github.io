import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>North Korea</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,North Korea"/>
        <meta name="description" content="Trending News about North Korea" /></Head><Template>
            <h1 style={{fontSize: "30"}}>North Korea</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221116185739-kim-jong-un-october-17.jpg?c=16x9&q=w_800,c_fill" alt="North Korea"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/17/asia/north-korea-ballistic-missile-friday-intl-hnk/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Korea claims Friday&#39;s launch was a &#39;new kind of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRsCfOpDVf6juOKp6exNcXpVXkLRdxzNvNtFE89_jgS0y7Z04EmQVRGPF5eEGZSUlYOlNaffO6B" alt="North Korea claims Friday&#39;s launch was a &#39;new kind of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>North Korean leader Kim Jong Un has ramped up missile tests this year. Korean Central News Agency/Korea News Service/AP/FILE. Seoul, South&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-18/north-korea-s-kim-attended-nov-18-icbm-launch-with-family'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Korea&#39;s Kim Attended Nov. 18 ICBM Launch With His Family</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTCc0hiF81HNE8LbA5rmiXcwYzZUMRKeZ_jgsSh7vAyYfDYe8DmxM5-ggGcI8jgMd-Ttij3COEi" alt="North Korea&#39;s Kim Attended Nov. 18 ICBM Launch With His Family" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>North Korea fired a “a new type” intercontinental ballistic missile on Nov. 18 with the country&#39;s Supreme Leader Kim Jong Un and his family present at the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/asia-pacific/north-koreas-kim-says-launch-new-icbm-calls-more-strategic-weapons-kcna-2022-11-18/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Korea&#39;s Kim oversees ICBM test, vows more nuclear weapons</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4jXFHGEVooVILksLaWD1RGSOgFL3VFJfCJRna0JuGso9q-dyDdXRMxbJRymeAOx26rbetxrWA" alt="North Korea&#39;s Kim oversees ICBM test, vows more nuclear weapons" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>North Korean leader Kim Jong Un pledged to counter U.S. nuclear threats with nuclear weapons as he inspected a test of the country&#39;s new intercontinental&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pbs.org/newshour/politics/north-korea-test-fires-ballistic-missile-with-range-to-strike-entire-u-s'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Korea test-fires ballistic missile with range to strike entire U.S.</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ5KkAYf8PKq2UjY-mTUp1i7n6NBDLIqnlgyLaWMfi-Ypg0vOiFxVl9FUdxoGryNJQt9KbxflRs" alt="North Korea test-fires ballistic missile with range to strike entire U.S." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>North Korea has fired an intercontinental ballistic missile that landed near Japanese waters in its second major weapons test this month that showed a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.axios.com/2022/11/18/north-korea-ballistic-missile-japan'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Korea test-fires missile with range to strike U.S. mainland ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTNp5HI4suhXXgRgV6TdBkvuEcMPbacNHL2feyLflt5yQUnIp2FsNBkqwMWsH59Q_JZqElqr5er" alt="North Korea test-fires missile with range to strike U.S. mainland ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The launch came a day after North Korean officials warned of warned of a &quot;fiercer&quot; response to the U.S. and its allies.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/news/north-korea-news-fires-icbm-missile-today-us-south-korea-drills/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Korea launches ICBM with range to hit anywhere in U.S. ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSvH0SWim8Fm95CyZuhPW5_Hprx0SDZXl6AzwWiy6H2jAqmLJ5Cwn9cNkeOOBMDIPrLcqmkvkW" alt="North Korea launches ICBM with range to hit anywhere in U.S. ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>North Korea fired an intercontinental ballistic missile that landed near Japanese waters Friday in its second major weapons test this month, South Korea and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}