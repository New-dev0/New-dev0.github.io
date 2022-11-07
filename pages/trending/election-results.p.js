import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Election Results</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Election Results"/>
        <meta name="description" content="Trending News about Election Results" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Election Results</h1>
            <Image width={800} height={500} src="https://gumlet.assettype.com/Prabhatkhabar%2F2022-11%2F11616f46-e5ab-42d5-ab5e-5f5c40e2a585%2Fadampur_bypoll_result.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true" alt="Election Results"/>
            <h3>Recent News</h3>
            <a href='https://www.prabhatkhabar.com/live/by-election-results-2022-live-updates-andheri-east-adampur-gopalganj-mokama-munugode-gola-gokarannath-dhamnagar-amh'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>By Election Result: सात में से 4 सीटों पर बीजेपी की जीत, RJD, शिवसेना ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNIt5awsxtOfm5_vzzT0kXvAGPEb5rMRf7otcIp0gg3XVOGkTHVYxFsfUHL1S_8obpf5nMDLwZ" alt="By Election Result: सात में से 4 सीटों पर बीजेपी की जीत, RJD, शिवसेना ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By election Results: मुंबई की अंधेरी (पूर्वी) विधानसभा सीट पर हुए उपचुनाव में शिवसेना (उद्धव&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/india/by-election-results-2022-live-updates-six-bihar-mokama-gopalganj-up-gola-mumbai-andheri-ap-assembly-bypolls-winners-bjp-congress-rjd-shiv-sena-2253310'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>By-Election Results 2022 Live: 7 में से 4 सीटों पर जीती बीजेपी, अंधेरी पर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRH7q2c2BWqj__8e3JNdcjG7q4AQRrfrYQWP0Ksa88ZTtgr5KqPhoH62fjcmSrYKVI6PSw6P_i-" alt="By-Election Results 2022 Live: 7 में से 4 सीटों पर जीती बीजेपी, अंधेरी पर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By Election Results 2022: 6 राज्यों की 7 विधानसभा सीटों पर उपचुनाव 3 नवंबर 2022 को हुआ था.</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/india/munugode-telangana-by-election-results-2022-date-time-how-to-check-live-counting-results-online-article-95316291'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Munugode (Telangana) By-Election Results 2022: Date, time, how ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSRf-duOFAksOc76YpHS6gldwFumREXRvbLwzQpyjmIbDLxLi8A50wY7xM6NnPUqcN60sTBe3Vg" alt="Munugode (Telangana) By-Election Results 2022: Date, time, how ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Munugode By-Election Results 2022: The counting of votes polled in the high-stakes bypoll to the Munugode Assembly constituency in the Nalgonda district of&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/india/assembly-bypoll-results-live-updates-counting-of-votes-7-constituencies-8251424/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Assembly Bypoll Results Live Updates: BJP wins four of seven ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8sbyoKGZi8TwxrpfchRjBjYNtHF0nl3hVCAxbRro5IpRD6NCmcILunSsQzRsK1fzAK0HMSfroHA" alt="Assembly Bypoll Results Live Updates: BJP wins four of seven ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Assembly Bypoll Results 2022 Live Updates: Adampur in Haryana, Mokama and Gopalganj in Bihar, Andheri (East) of Maharashtra, Munugode of Telangana,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/politics/national-results-by-elections-assembly-seats-six-states-uttar-pradesh-bihar-haryana-know-who-from-where-leading-23185581.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>By-Election Results: गोला गोकर्णनाथ, गोपालगंज व आदमपुर सीट पर जीती ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSermhgNFMuvtVigcvxRf6kMkn9VUv0Da56pZJ1UCCcpYAPALZerb-uXiYFa4xs8LEqvjeJvRDx" alt="By-Election Results: गोला गोकर्णनाथ, गोपालगंज व आदमपुर सीट पर जीती ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By-Election Results 2022 उत्तर प्रदेश की गोला गोकर्णनाथ बिहार की मोकामा और गोपालगंज महाराष्ट्र&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gnttv.com/election/story/elections-held-seven-assembly-seats-six-states-bjp-won-four-seats-467440-2022-11-06'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>By-Election Results: छह राज्यों की सात विधानसभा सीटों पर हुए उपचुनाव के ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAlEBsjZNp0hPXoI_V04EYoQyRtLGvb5xP5B6j9zcOwttxlDnpGRSpo966IEQKL0kJC7BBbVVv" alt="By-Election Results: छह राज्यों की सात विधानसभा सीटों पर हुए उपचुनाव के ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>शिवसेना उद्धव (बाला साहब ठाकरे) पार्टी ने मुंबई की अंधेरी ईस्ट, आरजेडी ने मोकामा और&nbsp;...</p></div>
            </div>
        </a><a href='https://www.india.com/telangana/munugode-telangana-by-election-results-2022-counting-of-votes-komatireddy-rajagopal-reddy-palvai-sravanthi-reddy-kusukuntla-prabhakar-reddy-winners-losers-full-list-5726086/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Munugode Bypoll Result 2022: KCR&#39;s Party TRS Wins by Over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQMrCfkshq6Lsq5Oi3NUd4HvCUgcc0ogK4j6-VIqT_Exhwqs745c6d9JI51PoTlOWDIxIqnq306" alt="Munugode Bypoll Result 2022: KCR&#39;s Party TRS Wins by Over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Munugode Bypoll Result 2022: KCR&#39;s Party TRS Wins by Over 10,000 Votes &middot; Munugode Telangana By Election Results 2022 LIVE: There were a total of 47 candidates in&nbsp;...</p></div>
            </div>
        </a><a href='https://ndtv.in/india/by-election-results-live-updates-key-election-results-dhamnagar-mokama-gopalganj-andheri-east-munugode-gola-gorakhnath-bypoll-2022-results-3493901'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Election Results 2022 Updates : 7 सीटों में से 4 पर BJP का कब्जा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTMDCyE2y14Ug5RSjHIHP3lS1Ckl0BfpfhbVzqkjoa3Opp3U0mh-6Fu6ots7GtKDBp8QhKyiwaI" alt="Election Results 2022 Updates : 7 सीटों में से 4 पर BJP का कब्जा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Election Results 2022: बिहार के दोनों ही सीटों के परिणाम सामने आ गये हैं. मोकामा सीट राजद ने जीत&nbsp;...</p></div>
            </div>
        </a><a href='https://timesofindia.indiatimes.com/india/bypoll-election-result-2022-live-updates-mokama-gopalganj-adampur-munugode-dhamnagar-gola-gokrannath-november-6/liveblog/95328261.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Election Bypoll Results 2022 Live Updates: BJP bags 4 out of 7 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTUq3KRsSB9hm1gFNM4bMstlGrJiwmTQ0cZB2BI7fQGbVY8fddKF6ESGULbqdZxXOgsR9VOXwOj" alt="Election Bypoll Results 2022 Live Updates: BJP bags 4 out of 7 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Counting of votes is currently in progress for the by-election to seven assembly constituencies in six states. Polling was held in Mokama and Gopalga.</p></div>
            </div>
        </a><a href='https://hindi.moneycontrol.com/news/india/politics/bypoll-election-results-2022-live-news-updates-adampur-murugode-mokama-gopalganj-andheri-east-dhamnagar-bjp-rjd-trs-congress-aap-sp-gola-gorakhnath-869011.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bypoll Election Results: उपचुनाव में 7 में से 4 अहम सीटों पर BJP की जीत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSo-QrcZmpyR54gktyZWSpKvavjofNdeGH2jo1YZfT3A_6UDyxmxfab62qKo_MMadlDOzR-wou" alt="Bypoll Election Results: उपचुनाव में 7 में से 4 अहम सीटों पर BJP की जीत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bypoll Election Results: जिन सीटों पर 3 नवंबर को उपचुनाव कराया गया था, उनमें मोकामा (Mokama), गोपालगंज&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}