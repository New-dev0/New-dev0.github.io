import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nasdaq</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nasdaq"/>
        <meta name="description" content="Trending News about Nasdaq" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nasdaq</h1>
            <Image width={800} height={500} src="https://www.reuters.com/resizer/rCwy7mHTF_JeUP1Hc3MCzeV15M8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6C56CDETQ5K2RGMHQXHLRXWERY.jpg" alt="Nasdaq"/>
            <h3>Recent News</h3>
            <a href='https://www.reuters.com/markets/us/futures-point-fresh-gains-wall-street-2022-11-11/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nasdaq, S&amp;P 500 end sharply higher, fueled by inflation optimism</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTb1BCYbfPmBBZb7kXUooxhTFMSXUmU91VtugGRrJwGAejYAjjI76HAgk2RvGngFIak1UnznV9h" alt="Nasdaq, S&amp;P 500 end sharply higher, fueled by inflation optimism" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Growth stocks lead value, Nasdaq rallies &middot; Nasdaq and S&amp;P 500 gain for second day &middot; Indexes end: S&amp;P 500 +0.93%, Nasdaq +1.88%, Dow +0.10%.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/10/stock-market-futures-open-to-close-news.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nasdaq adds 1.9%, S&amp;P 500 closes nearly 1% higher and notches ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQHX9zjg1CfbT4SuDeMSmtfauEuNzVRushvTXPijoHfiiu_-01Zkt0kt4P9laSOnoQHk45yU-HP" alt="Nasdaq adds 1.9%, S&amp;P 500 closes nearly 1% higher and notches ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The broader market index added 0.9% on Friday. The Nasdaq Composite added 1.9% as investors snapped up tech shares on hopes interest rates would ease. The Dow&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneycontrol.com/news/business/markets/nasdaq-100-adds-700-billion-in-value-as-us-inflation-eases-9493151.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nasdaq 100 adds $700 billion in value as US inflation eases</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQyyhWgq50uz5LGhDqZaMHU-x2zOGZTTQWySMnPcmiD7i6ANBP1FH8CxGV5aWa50X35Hd6b8lQ" alt="Nasdaq 100 adds $700 billion in value as US inflation eases" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Major US technology and internet stocks soared on Thursday, adding hundreds of billions of dollars in market value, after investors welcomed the latest&nbsp;...</p></div>
            </div>
        </a><a href='https://finance.yahoo.com/news/us-stocks-nasdaq-p-500-211124399.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US STOCKS-Nasdaq, S&amp;P 500 end sharply higher, fueled by ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcREL95UkxCmtTSXJqbhll0D7q0kISMBy9_C5tR2Ij7IETelysa_sex1i7cegOnB61x3d5M059cs" alt="US STOCKS-Nasdaq, S&amp;P 500 end sharply higher, fueled by ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The S&amp;P 500 and Nasdaq ended sharply higher on Friday, extending a rally started the day before after a soft inflation reading raised hopes the Federal&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kitco.com/news/2022-11-11/S-P-500-Nasdaq-extend-gains-on-Fed-slowdown-bets.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>S&amp;P 500, Nasdaq extend gains on Fed slowdown bets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5nWEPTQWJnRfG9Lj1RBzvxfCAi7UVz6mf4GocUfaU1mX9eBzbJsXYjJaFbDcAwqG6dWyNfBd3" alt="S&amp;P 500, Nasdaq extend gains on Fed slowdown bets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nov 11 (Reuters) - The S&amp;P 500 and the Nasdaq rose on Friday, extending a rally that was triggered by the expectations of smaller interest rate hikes by the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.proactiveinvestors.com/companies/news/998108/dow-s-p-500-and-nasdaq-fall-at-the-open-as-investor-optimism-fades-998108.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nasdaq, S&amp;P see risk-on sentiment firm into the weekend</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcdqGAf5hQ8oQjIO6X1r_ogmrTWo8epqHpRm64OFEnWTuc2QDFg0I7fafGAmIrH_FoHCFs5d44" alt="Nasdaq, S&amp;P see risk-on sentiment firm into the weekend" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nearing midday, the S&amp;P 500 was up by 0.1% at 3960, the Nasdaq Composite was up by 0.6% at 11183, while the Dow Jones slid by 0.7% to...</p></div>
            </div>
        </a><a href='https://www.deccanherald.com/business/business-news/nasdaq-soars-as-cooling-inflation-spurs-bets-of-smaller-rate-hikes-1161178.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nasdaq soars as cooling inflation spurs bets of smaller rate hikes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTOfWunDvoCkp_819dl3H2QCctQl4S4xANIklnhFC8s_8rdoIt89Z2ZhVpUNBn2R57ZNWNHz3pq" alt="Nasdaq soars as cooling inflation spurs bets of smaller rate hikes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The tech-heavy Nasdaq surged 5 per cent on Thursday as data showed US consumer prices increased less than expected in October, spurring hopes that the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.devdiscourse.com/article/business/2248362-us-stocks-nasdaq-and-sp-500-end-higher-fueled-by-inflation-optimism'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US STOCKS-Nasdaq and S&amp;P 500 end higher, fueled by inflation ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSGcm7GHMuggJmhkKD9W71X2MVLWGqvlAVBoj5-VW6OyNtjyKyRPf2reAsVRk5f6AkPqqY5tGEA" alt="US STOCKS-Nasdaq and S&amp;P 500 end higher, fueled by inflation ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Thursday, the S&amp;P 500 and the Nasdaq racked up their biggest daily percentage gains in more than 2-1/2 years as annual inflation slipped below 8% for the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/money/business/2022/11/10/s-p-500-dow-nasdaq-slowing-inflation-treasury-yields/8322936001/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dow up 1200 points on cooling inflation, market soared to best day ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQLApaQcmpT03iWEClvYRxSC8nlzkgMVSxLukCJnphB6IPu-LmZzxsFqL39KHIFKZooP5ee8aUW" alt="Dow up 1200 points on cooling inflation, market soared to best day ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>S&amp;P 500, Dow and Nasdaq indices rally after October inflation slowed more than expected, igniting hopes the Fed will slow its rate hikes. Yields dip.</p></div>
            </div>
        </a><a href='https://www.fool.com/investing/2022/11/10/why-nasdaq-is-soaring-inflation-remains-high/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why the Nasdaq Is Soaring Even as Inflation Remains High</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT0Qzg3-pYpxYqoVat_b8-LU5eOBoCqza7Xc-VgaOwca00GXc8vh0bxaenXYH_FdxmCyKNk5DZw" alt="Why the Nasdaq Is Soaring Even as Inflation Remains High" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The stock market has gotten hit hard throughout 2022, and inflation has played a big role in the bear market. The Nasdaq Composite (^IXIC 1.88%) has been&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}