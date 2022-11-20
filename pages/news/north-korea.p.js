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
        </a><a href='https://www.cnn.com/2022/11/18/asia/north-korea-kim-jong-un-daughter-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kim Jong Un&#39;s daughter makes first public appearance at new ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQKzT0HkTLKPmbaS2D6gIKi6iblwjO5iW6j1JE_UmBP04AYA2nNugxOH2hGcNDm2kEl53ox0Q2E" alt="Kim Jong Un&#39;s daughter makes first public appearance at new ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>North Korean leader Kim Jong Un oversaw the launch of &quot;a new type&quot; of intercontinental ballistic missile Friday, alongside his young daughter,&nbsp;...</p></div>
            </div>
        </a><a href='https://abcnews.go.com/International/wireStory/kim-icbm-test-proves-capacity-us-threats-93585620'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Korea&#39;s Kim boasts new ICBM as US flies bombers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR3IZqb6HxqGA3HcLR9chiho6QclIaaKpc_R5zpHwHluGaFMr33CLkKde__l6lPthQxPI_jQyEh" alt="North Korea&#39;s Kim boasts new ICBM as US flies bombers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>North Korean leader Kim Jong Un says the test of a newly developed intercontinental ballistic missile confirmed that he has another “reliable and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-19/north-korea-s-kim-reveals-daughter-to-public-at-icbm-launch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Korea&#39;s Kim Reveals Daughter to Public at ICBM Launch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRgzutgm38K6ZzQo3kwfBGGA5J2EbnbwEx1Yhqu3n6503MTmPqzcuNxR1xWqHwhIpuWtC7NvAFd" alt="North Korea&#39;s Kim Reveals Daughter to Public at ICBM Launch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>North Korean leader Kim Jong Un oversaw the launch of a “new type” of intercontinental ballistic missile and brought along his daughter,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/asia-pacific/un-security-council-discuss-north-korea-monday-after-icbm-launch-2022-11-18/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>U.N. Security Council to discuss North Korea on Monday after ICBM ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS0amTCsoHGmuytlNG2beFTrrScbrQL7ZYcVo2WgGCptLJ6StvCnw-4fR_XaexMaPrmg0NfAHa8" alt="U.N. Security Council to discuss North Korea on Monday after ICBM ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The United Nations Security Council will discuss North Korea in a meeting on Monday at the request of the United States after Pyongyang tested an&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/world/2022/11/18/north-korea-missile-icbm-launch/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Korea fires intercontinental ballistic missile</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4MbXOLSvpbt0KBJK6C8sc9We-Gcldf-2syiwoBj5H3t8iLzI8LWmbexWRJee5IFkkYa8Wv9WQ" alt="North Korea fires intercontinental ballistic missile" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The latest suspected ICBM launch on Friday came amid rising tensions between Pyongyang and Washington.</p></div>
            </div>
        </a><a href='https://www.wgauradio.com/news/world/north-korea-unveils/EMOKRCFNSOCUAW6D6H3UJ6GMMI/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Korea unveils Kim&#39;s daughter at missile launch site</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRAL1eYchFY9O8nrYfROXb5-pN6pM63Rv1jd7Tzw3s0rF4bnfUYsLqMmoSqARgkPjjnpCzDpsij" alt="North Korea unveils Kim&#39;s daughter at missile launch site" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SEOUL, South Korea — (AP) — North Korea has unveiled the little-known daughter of its leader Kim Jong Un at a missile launch site, attracting keen attention&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-18/north-korea-s-kim-attended-nov-18-icbm-launch-with-family'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Korea&#39;s Kim Attended Nov. 18 ICBM Launch With His Family</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTCc0hiF81HNE8LbA5rmiXcwYzZUMRKeZ_jgsSh7vAyYfDYe8DmxM5-ggGcI8jgMd-Ttij3COEi" alt="North Korea&#39;s Kim Attended Nov. 18 ICBM Launch With His Family" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>North Korea fired a “a new type” intercontinental ballistic missile on Nov. 18 with the country&#39;s Supreme Leader Kim Jong Un and his family present at the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/2022/11/19/north-korean-leader-reveals-daughter-at-ballistic-missile-launch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Korea&#39;s Kim Jong Un reveals daughter at missile launch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTMkEY6v2nC8aBdm9lDBRxftU1JvITr-NyvRz2LmTZtQXJo3pcDSG6SSFW1rVTX30zamsVl7O5q" alt="North Korea&#39;s Kim Jong Un reveals daughter at missile launch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Photos released by North Korean news agency are first official confirmation of the existence of Kim Jong Un&#39;s daughter.</p></div>
            </div>
        </a><a href='https://www.jpost.com/international/article-722803'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Korea&#39;s Kim reveals daughter at ballistic missile test</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKnqK2tKr_2N7NkebqJooFH9hqB_kWBJ8_uT2jyq65taKK-sVPU9OloBlA_UDbgz7oQ8jzYnRY" alt="North Korea&#39;s Kim reveals daughter at ballistic missile test" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>North Korean leader Kim Jong Un gestures as he watches the test-firing of a new-type tactical guided weapon according to state media, North Korea, in this&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}