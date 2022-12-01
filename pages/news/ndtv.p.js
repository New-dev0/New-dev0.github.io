import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>NDTV</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,NDTV"/>
        <meta name="description" content="Trending News about NDTV" /></Head><Template>
            <h1 style={{fontSize: "30"}}>NDTV</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/ADANI-1.jpeg" alt="NDTV"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/explained/roys-have-exited-rrpr-board-does-it-mean-they-are-also-out-of-ndtv-8298945/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roys have exited RRPR board, does it mean they are also out of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRiFb8f4zEBkS284SRs62fhP-tl8egp1y07giiueUrPS7xXsnUxsbxL8hhtM7jmjDYTxFjTPhvt" alt="Roys have exited RRPR board, does it mean they are also out of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On November 22, Adani began the process of acquiring an additional 26 per cent stake in the company by launching an open offer that is open until December&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/india/ravish-kumar-resigns-ndtv-8298920/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senior journalist Ravish Kumar resigns from NDTV</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR89XB2hx5ndKK18NDjvpfzuiYjP8Apk2yK97ZhLGDdarxdQgQh7sNGYJ4fMkRQVCKqySi58cCZ" alt="Senior journalist Ravish Kumar resigns from NDTV" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ravish Kumar, a winner of the Ramon Magsaysay award, used to host a number of programs including the channel&#39;s flagship weekday show Hum Log, Ravish ki&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/companies/news/adani-now-in-position-to-name-directors-to-board-of-ndtv-11669830665559.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adani now in position to name directors to board of NDTV | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSIk4Tf5UFezAbnZI7munVMMOMGR72K0mN04nbJ3edWisX6VXsekEXu_dxP-GUitgLug_EhpVc6" alt="Adani now in position to name directors to board of NDTV | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adani Group has become the single largest shareholder of NDTV, taking it a step closer to wresting control of the company, founders of proxy advisory firms&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thedispatch.in/radhika-and-pranoy-roy-leave-their-ndtv-dream/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Radhika and Pranoy Roy leave their NDTV dream</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0Ex5P8nDTRQ3EBA67v_0hkHjn7S-qRQzSlploHBjiAW2bpolyEeGcqfO6mY69dQtVsXfF1bMA" alt="Radhika and Pranoy Roy leave their NDTV dream" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jammu: Thirty-four years after they founded India&#39;s iconic news and entertainment brand, the celebrated media couple Radhika and Pranoy Roy have eventually&nbsp;...</p></div>
            </div>
        </a><a href='https://www.opindia.com/2022/11/ravish-kumar-resigns-from-ndtv-after-adani-group-takes-over-it/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ravish Kumar resigns from NDTV India after Adani group acquired ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzqfQSFhT0BQ6DIEqufdPSMq5LoCEGL5XkOJZJPgxbT6cMx0kK6O_CEzSkG52vmMECf1JRKORw" alt="Ravish Kumar resigns from NDTV India after Adani group acquired ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Wednesday, 30th November 2022, veteran TV journalist Ravish Kumar resigned from NDTV India. Ravish Kumar was working as Senior Executive Editor of NDTV&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/national/senior-journalist-and-ramon-magsaysay-awardee-ravish-kumar-resigns-from-ndtv/article66206556.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senior journalist and Ramon Magsaysay awardee Ravish Kumar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrFJ63a1yb5B4fvdwruqt8C7aW6Br2aJpvJhaY8ZV2X8KMkzQxt9ucUdmE9Esa3KyP4os9Ahli" alt="Senior journalist and Ramon Magsaysay awardee Ravish Kumar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NDTV&#39;s promoter RRPR Holding on November 28, 2022 transferred shares constituting 99.5% of its equity capital to the Adani Group-owned Vishvapradhan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newslaundry.com/2022/11/30/day-after-roys-quit-ndtv-board-ravish-leaves-channel-with-immediate-effect'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Day after Roys quit NDTV promoter board, Ravish leaves channel</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRaoEAgnpimt3k8XNuGaVGuZ_1NWTcNBxwo283-ARjHp51Sv7n66y7o7FJEpq6XEPjbaMaIUaEy" alt="Day after Roys quit NDTV promoter board, Ravish leaves channel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A day after Prannoy Roy and Radhika Roy quit as the directors of the board of NDTV promoter RRPRH, noted journalist Ravish Kumar resigned from the channel&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/india/ravish-kumar-resigns-from-ndtv-following-adani-acquisition/articleshow/95891276.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ravish Kumar resigns from <b>NDTV</b> following Adani acquisition</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxslnNW-CR3BUmKoHszodse6Z_Fs05HvC_ktygkjUPLO_4em8-MJb7W1cUkDDRC-LZaGEV4RRT" alt="Ravish Kumar resigns from <b>NDTV</b> following Adani acquisition" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In an announcement through an internal mail within the channel as reported by several news agencies, <b>NDTV</b> said that the resignation was effective immediately. Suparna Singh, president, <b>NDTV</b> Group said in the internal email, “Few journalists have impacted&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jansatta.com/national/ravish-kumar-resigns-from-ndtv/2531207/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NDTV से रवीश कुमार का इस्तीफा, एक दिन पहले ही बोर्ड से हटे थे प्रणय ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTWwHPDmkt3XefsmsuIo-mijt5MrQhNQ9k5ffB75TBPR9WueAD5j1olJwqv1oyYWskB0PwRgjA2" alt="NDTV से रवीश कुमार का इस्तीफा, एक दिन पहले ही बोर्ड से हटे थे प्रणय ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इससे एक दिन पहले प्रणय रॉय (Prannoy Roy) और उनकी पत्नी राधिका रॉय (Radhika Roy) ने एनडीटीवी बोर्ड से&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/companies/ndtv-shares-continue-to-rally-for-the-fifth-day-surge-nearly-25-122113001234_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NDTV shares continue to rally for the fifth day, surge nearly 25%</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT5neB-M-oVMTJJDQokuT5hiYXJr60SLMJXyQ3HZ87heHCMyp3Wz0Mfw9nFzYr7kD08v9Gsl2m-" alt="NDTV shares continue to rally for the fifth day, surge nearly 25%" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NDTV Shares: This is the fourth straight day that the stock has hit the upper circuit, BSE data showed.</p></div>
            </div>
        </a>
        </Template></>;
}