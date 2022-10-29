import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amazon share price</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amazon share price"/>
        <meta name="description" content="Trending News about Amazon share price" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amazon share price</h1>
            <Image width={800} height={500} src="https://imageio.forbes.com/specials-images/imageserve/635b9aa5aac1b11c7e08fd16/0x0.jpg?format=jpg&width=1200" alt="Amazon share price"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.com/sites/petercohan/2022/10/28/46-below-peak-amazon-stock-will-fall-on-sputtering-growth/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>46% Below Peak, Amazon Stock Will Fall On Sputtering Growth</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSBy-qtaxGoDTcUXJs5LDPBW0_6UVIYIA66I-u9ElEJbTiDeaFMi4yqEbbVw4ugqGpIMXHOXVdC" alt="46% Below Peak, Amazon Stock Will Fall On Sputtering Growth" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon stock is likely to keep falling until the economy gets more robust — that is not likely until 2024 at the earliest.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/10/28/amazon-stock-tumbles-after-downbeat-sales-forecast.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon shares fall 7% on weak fourth-quarter forecast</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSfKEtsUnmU4nrHrSXdG6DMa5sRBAgzI1UQRqpdd0jCw-mClKSPxVW-qDXsomS8e0rYEPeBM2k4" alt="Amazon shares fall 7% on weak fourth-quarter forecast" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon gave weak guidance for the fourth quarter, and its third-quarter revenue fell short of expectations.</p></div>
            </div>
        </a><a href='https://uk.finance.yahoo.com/news/amazon-share-price-sinks-10-145800525.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon share price sinks 10%! Should I buy this retail giant now?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTRYJRDVHxdpYbkObujGwqU7bP68ZUX_9koMwh8v91JrrN3KRNDsy7sWzeQ9WQxhSz0pYDFKHxr" alt="Amazon share price sinks 10%! Should I buy this retail giant now?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Overnight trading sees a sharp drop in the Amazon share price. Our writer looks at what happened and whether it&#39;s an opportunity. The post Amazon share&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/markets/stocks/news/wall-st-loses-over-200-billion-in-value-after-report-from-amazon/articleshow/95133526.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wall St loses over $200 billion in value after report from Amazon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSO2CUk4rfz30-tcRhKsDw7-c1mz6kZZnU1WDa1_cm5zDnAA1UGbWLxOxmDAp8HvBbI6cqxRQZD" alt="Wall St loses over $200 billion in value after report from Amazon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon&#39;s weak report sent Nasdaq futures tumbling about 3%, showing traders expect Wall Street to open with a deep decline on Friday.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/technology/2022/oct/27/amazon-shares-drop-after-company-predicts-weaker-holiday-sales'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon shares drop nearly 20% after company predicts weaker ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQr12gU2x6TOJIKe3QI8C5wijKMQKCKuRtvlc_FlZn4ysSwSYVfixmAPeZrBDVpArXLJN7Fh9Kx" alt="Amazon shares drop nearly 20% after company predicts weaker ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Company sees drop in after-hours trading after issuing guidance on the holiday quarter that worried investors.</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-10-27/amazon-plunges-after-projecting-lackluster-holiday-sales'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon Shares Plunge on Forecast for Sluggish Holiday Sales</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWo-h2gH8IJfAx6y69t9R4T8_uFmaoElzuPoWqr1NTKdH5MH7xQdyPHqbaAmjcLH1Z0-mx8vOs" alt="Amazon Shares Plunge on Forecast for Sluggish Holiday Sales" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon.com Inc., shocking Wall Street, projected the slowest holiday-quarter growth in the company&#39;s history, sending the shares tumbling about 11% Friday&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fool.com/investing/2022/10/28/why-amazon-stock-is-getting-crushed-today/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Amazon Stock Is Getting Crushed Today</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZJ0yoCaXRpbb2eg-ynwhUsgVOt0J70SB4ULsa-og8OW2p55l12JtqJdtgts4gzFN_b5W4vu-8" alt="Why Amazon Stock Is Getting Crushed Today" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon met top- and bottom-line expectations in Q3, but Q4 guidance was much worse than expected. &middot; The company expects revenue growth of just 2%-8% in the&nbsp;...</p></div>
            </div>
        </a><a href='https://ceoworld.biz/2022/10/28/day-one-is-ending-for-amazon-now-what/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Day One is ending for Amazon. Now what? - CEOWORLD magazine</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSsAA4klvt3FyBiRA_TBvPd9cz3uCQzbGmyNzdGFZjN6AFsiBu3VBDdxM3KYNv7-N1CIjGWIgTs" alt="Day One is ending for Amazon. Now what? - CEOWORLD magazine" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For more than 20 years, Jeff Bezos fought against the entropy inherent in large organizations. He demanded that Amazon always act as a startup,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}