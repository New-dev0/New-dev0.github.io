import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FTX</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FTX"/>
        <meta name="description" content="Trending News about FTX" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FTX</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/11/09/600x338/crypto_1668013966755_1668013985003_1668013985003.jpg" alt="FTX"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/market/cryptocurrency/ftx-liquidity-woes-to-impact-indian-crypto-exchanges-11668013864678.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FTX liquidity woes to impact Indian crypto exchanges | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTI16ztbGboAB76i4XnwFdzgPpXp0hJT4gdpe8duUEm3G6SQbDXbCGg3pY5hCMPCFPi5z6N0JQH" alt="FTX liquidity woes to impact Indian crypto exchanges | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Tuesday, Sam Bankman-Fried, chief executive of US cryptocurrency exchange FTX, tweeted that the company has reached a “strategic transaction&quot; with Binance,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/business-63564364'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FTX: Cryptocurrency market rocked by near-collapse of exchange</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSIUCqI6CMrHu3BpbSl2crxboszPRgOCereYwutJBFFLxj-Y3FOfPhjzvEKxZLj9Gt6tommkEbx" alt="FTX: Cryptocurrency market rocked by near-collapse of exchange" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FTX struck a bailout deal with larger rival Binance as it faced a &quot;significant liquidity crunch&quot;.</p></div>
            </div>
        </a><a href='https://www.cnbctv18.com/cryptocurrency/binance-to-buy-rival-ftx-in-bailout-as-cryptocurrency-market-crumbles-15120981.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Binance to buy rival FTX in bailout as crypto market crumbles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRKo6k8vEKxQEj3vuzOVCHXRLbSAUfDh4tecSJkK-UHOAXAtWLEuA55ow3cyRol01HPDNWnIbw3" alt="Binance to buy rival FTX in bailout as crypto market crumbles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Binance CEO Changpeng Zhao said on Twitter Tuesday that his company had signed a letter of intent to buy FTX because the smaller exchange was experiencing a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-09/binance-seen-likely-to-balk-at-ftx-deal-after-spotting-deep-hole'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Binance Backs Out of FTX Rescue, Citing Finances, Investigations</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS9tzms31LlqxzlSeRB2CTbzPzcc7tozsyJUioWrtTLjYuX248O5IvjV4rjNI10PIXH8epKesaH" alt="Binance Backs Out of FTX Rescue, Citing Finances, Investigations" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Binance Backs Out of FTX Rescue, Citing Finances, Investigations &middot; Crypto exchange reverses decision a day after announcing it &middot; FTX customers could now be on the&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/tech/technology/us-probes-ftx-empire-over-handling-of-client-funds-and-lending/articleshow/95410357.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US probes FTX empire over handling of client funds and lending</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7iHKwfTg7YKGtNu49wMrWIVSreDd3NITbE8EoN1W7IAYyaQvvn8JE61XP4uuCofDpeL_PUNti" alt="US probes FTX empire over handling of client funds and lending" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The investigations by the Securities and Exchange Commission and the Commodity Futures Trading Commission relate to the liquidity crisis at the trading&nbsp;...</p></div>
            </div>
        </a><a href='https://decrypt.co/114063/ftx-bankruptcy-likely-ceo-sbf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FTX Bankruptcy Likely Without Cash Injection, Says CEO SBF: Report</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQKDTqXC2N12mi_dCmjztWQSGEYqDd2p2cBh2LrqDdFzMLU_uivXybMIaMO5c_2lWT_OxlDJbTH" alt="FTX Bankruptcy Likely Without Cash Injection, Says CEO SBF: Report" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The liquidity crunch threatens to send FTX into bankruptcy, Sam Bankman-Fried reportedly told investors this afternoon.</p></div>
            </div>
        </a><a href='https://www.coindesk.com/web3/2022/11/09/ftx-blowup-puts-trove-of-prized-bored-apes-at-risk-of-liquidation/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FTX Blowup Puts Trove of Prized Bored Apes at Risk of Liquidation</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRsIE25mhGIJhueofoJp1_7XYp1ECIQwtPjZNvNHtLry6C7DU08tywIpyVrtvMwS2_d3DMIY-qX" alt="FTX Blowup Puts Trove of Prized Bored Apes at Risk of Liquidation" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yuga Labs, the NFT collective behind the majority of tokens held in the crypto empire&#39;s wallet, has previously raised capital from FTX Ventures,&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.moneycontrol.com/news/world/binance-to-acquire-rival-ftx-signed-a-non-binding-letter-of-intent-details-here-874001.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Binance का राइवल FTX को खरीदने का ऐलान, किया नॉन बाइंडिंग एग्रीमेंट</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSHBgOF2-KPpssVDtT2MC1i-tkj3DN6DIJ8yZoyzPHInDjlO93iAyPuu7ie6EiP3eZT9Ht00MBb" alt="Binance का राइवल FTX को खरीदने का ऐलान, किया नॉन बाइंडिंग एग्रीमेंट" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FTX CEO सैम बैंकमैन फ्राइड (बायें) और Binance CEO चांगपेंग झाओ. Binance to acquire FTX : क्रिप्टोकरेंसी&nbsp;...</p></div>
            </div>
        </a><a href='https://yourstory.com/hindi/worlds-largest-crypto-exchange-binance-to-acquire-major-rival-ftx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FTX को खरीदने की तैयारी में दुनिया का सबसे बड़ा क्रिप्टो एक्सचेंज Binance</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSkzzikkm0UuwypNhZdlnom4JELEfRTPiW-9wJiEWUltqmwrgPVExbIwqRcbNy0OBC1raWt65Vn" alt="FTX को खरीदने की तैयारी में दुनिया का सबसे बड़ा क्रिप्टो एक्सचेंज Binance" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Binance के सीईओ चांगपेंग झाओ (Changpeng Zhao) ने मंगलवार को कहा कि कंपनी ने क्रिप्टोकरेंसी&nbsp;...</p></div>
            </div>
        </a><a href='https://hi.investing.com/news/cryptocurrency-news/article-43574'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FTT टोकन में गिरावट क्योंकि Binance CEO ने FTX बेलआउट के लिए ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQGkw7VSAQKCDx86zdAJsClXaXKDCd9MjzR5D8kiMHg5KRfPCG09S6AgpkU0GzNEf_bJYT5cUq" alt="FTT टोकन में गिरावट क्योंकि Binance CEO ने FTX बेलआउट के लिए ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Investing.com -- FTX टोकन बुधवार को भारी दबाव में रहा, एक कठोर अनुस्मारक के बाद कि&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}