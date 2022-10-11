import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TCS</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TCS"/>
        <meta name="description" content="Trending News about TCS" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TCS</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/10/10/600x338/TCS_1665426099793_1665426099977_1665426099977.jpg" alt="TCS"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/companies/company-results/tcs-q2-net-profit-up-8-4-tops-estimates-11665425946692.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TCS Q2 net profit up 8.4%, tops estimates | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSRiQ3o40QaFLM4f8HOtu-cSYcOIWGf8CopNs65_W516bxT2_Xuyeai1tCdcWyBO1sPmJTz_PAh" alt="TCS Q2 net profit up 8.4%, tops estimates | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Firm wins more orders despite fears of clients cutting tech investments.TCS reported an order book of $8.1 billion, a growth of 15.4% from a year ago.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/tech/information-tech/70-of-tcs-employees-to-get-full-variable-pay-in-q2/articleshow/94768623.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>70% of TCS employees to get full variable pay in Q2</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvCpNsY5bYoywVeYIX81nbo1Cn04bRhE2sDA3YwSY2JKfvM7Pv21n1_L_wTyY1Hmfr7ghdHYgt" alt="70% of TCS employees to get full variable pay in Q2" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The company also said that it has brought onboard 20000 freshers this quarter, and “honoured” all the offers made amid a larger industry trend of delaying&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/markets/stocks/earnings/tcs-q2-results-profit-rises-8-yoy-to-rs-10431-crore-beats-estimates/articleshow/94758026.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3><b>TCS</b> Q2 Results: Profit rises 8% YoY to Rs 10431 crore, beats estimates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLjRJUiV8nsU7dJ79nJ7730O5zNv86c1zjgsALrRQLfQVtBpVYIYiZg2sdzTZQqSjoAXeKJHbn" alt="<b>TCS</b> Q2 Results: Profit rises 8% YoY to Rs 10431 crore, beats estimates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}><b>TCS</b> management on Q2 results, attrition rate, new talent hiring and more, watch! Attrition at <b>Tata Consultancy Services</b>(<b>TCS</b>) continues its upward trajectory in the September quarter, but the software major believes it&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/companies/tcs-q2-fy23-results-beat-street-estimates-net-profit-rises-8-3-122101000867_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TCS beats Street estimates in Q2, net rises 8.4%; attrition remains high</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQt-K1rCdpYsRjrtgPSm229mJGxLj0hhcECOO2b3ItyaZEosbf-G2QZNHrpdlohGNuca0QBK4Tl" alt="TCS beats Street estimates in Q2, net rises 8.4%; attrition remains high" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TCS Q2FY23 earnings beat street predictions, with net increasing 8.3% to Rs 10431 cr, This is the first time net profit has surpassed Rs 10000 cr.</p></div>
            </div>
        </a><a href='https://www.bizzbuzz.news/industry/tcs-q2-net-up-85-to-rs-10465-cr-1173018'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TCS Q2 net up 8.5% to Rs. 10465 cr</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5L96RQduBvJzxCXWnGfi8vPzpK3to6YuXiVDhMCXKh8osUF7BrGftriaTwGXz_DR1eq3SHvWN" alt="TCS Q2 net up 8.5% to Rs. 10465 cr" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Strong revenue growth: India&#39;s largest software exporter adds 9840 employees in Sept qtr taking total headcount to 6.16 lakh; Already onboarded 35000&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/companies/news/tcs-hr-head-provides-update-on-work-from-office-numbers-11665408026597.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TCS HR head provides update on work from office numbers | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQsC_80tIr9jWVif7A-9grAKVEhxDz-cTZ2ht_qZf83q27LIvnQmcCxOfW8uiPqFUeIx6qrdIJw" alt="TCS HR head provides update on work from office numbers | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After calling employees to work from office last month, Indian multinational information technology services and consulting giant Tata Consultancy Services&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/business/companies/tata-consultancy-services-net-up-revenue-jumps-8200818/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TCS profit rises 8.38%, crosses Rs.10000 cr in Q2</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTg5h4A32slzo_tGvUud_FBlzT-NojxbRlRXxWTlXZ8401jCdDEThZta3omWAAOpUkTAI7DhbFh" alt="TCS profit rises 8.38%, crosses Rs.10000 cr in Q2" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Total revenue for the quarter jumped 18 per cent to Rs 55309 crore from Rs 46867 crore. While constant currency revenue growth was at 15.4 per cent,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/business/Industry/tcs-q2-net-profit-climbs-84-to-10431-crore-on-sustained-demand-across-markets/article65993604.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TCS Q2 net profit climbs 8.4% to ₹10431 crore on &#39;sustained ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpaFWY-iGZ2GrtwrRFlgcnbZrIC-gKxoXmjMK_r7T84pIyPnSOz4Akx6NO8FrTE3hDy9xdIG2v" alt="TCS Q2 net profit climbs 8.4% to ₹10431 crore on &#39;sustained ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Revenue grew 18% to ₹55,309 crore. Constant-currency revenue growth was 15.4%. The company&#39;s board announced a dividend of ₹8 per share. With a net headcount&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.moneycontrol.com/news/business/tcs-hits-out-at-moonlighting-after-infosys-and-wipro-says-against-core-values-and-culture-822191.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>इंफोसिस और विप्रो के बाद अब TCS ने किया मूनलाइटिंग का विरोध, कहा- &#39;यह ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTZI86gs58sjuexkM0yKzmDHqVexUhNbcdGainVmqSqia3JzX5yCPYm6M5VAw7IaGgNGf3eHGB0" alt="इंफोसिस और विप्रो के बाद अब TCS ने किया मूनलाइटिंग का विरोध, कहा- &#39;यह ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टाटा कंसल्टेंसी सर्विसेज (TCS) ने सोमवार 10 अक्टूबर को एक बयान में मूनलाइटिंग (Moonlighting) को एक&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.moneycontrol.com/news/company/company-results/tcs-q2-result-profit-up-8-percent-to-rs-10465-crore-announced-dividend-of-rs-8-per-share-tcs-share-price-821671.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TCS Q2 result: मुनाफा 8% बढ़कर 10465 करोड़ रुपए रहा, 8 रुपये प्रति ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSRurDA9SLvoySfYNaa3oLD5NFdPRi3xDlKqe1al2w1te2F1Af43CZTsd2PFxuCgpv6jQnxr91K" alt="TCS Q2 result: मुनाफा 8% बढ़कर 10465 करोड़ रुपए रहा, 8 रुपये प्रति ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>30 सितंबर 2022 को खत्म हुई दूसरी तिमाही में कंपनी की कॉन्स्टेंट करेंसी रेवेन्यू ग्रोथ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}