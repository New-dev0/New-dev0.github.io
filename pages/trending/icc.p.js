import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ICC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ICC"/>
        <meta name="description" content="Trending News about ICC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ICC</h1>
            <Image width={800} height={500} src="https://resources.pulse.icc-cricket.com/ICC/photo/2022/09/29/759c3596-a435-4af3-bfc7-b653a2d6cda5/GettyImages-1209185432.jpg" alt="ICC"/>
            <h3>Recent News</h3>
            <a href='https://www.icc-cricket.com/news/2809507'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New ICC Training and Education programmes launched</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRqdzj9vGYExdqq5wvqJHX5qjZcjLPBEUE13YTmItLGscmHGcubKQ_4HHpnGUNj4LXj8GEplFDU" alt="New ICC Training and Education programmes launched" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The ICC Coaching Foundation Certificate - an entry-level coaching course - was the first programme made available to aspiring coaches and more than 3,200&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/icc-is-set-to-release-itt-media-rights-for-australia-us-west-indies-canada/articleshow/94537654.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC is set to release ITT media rights for Australia, US, West Indies ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkxpP9WlKCATg2JkR4rEnMnWAMiVjaybFO_TUXse_5M-7w1G8pt-lEMyZQht8cyjppuq9Rae7k" alt="ICC is set to release ITT media rights for Australia, US, West Indies ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After selling ITT media rights in India, ICC is now proceeding to the next phase of market sales for the US, Canada, and other countries.</p></div>
            </div>
        </a><a href='https://www.india.com/hindi-news/sports-hindi/icc-rule-for-bat-size-australian-batsman-used-oversized-bat-in-english-county-cricket-durham-county-club-fined-5660212/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC Rule for Bat Size: बड़े साइज का बल्‍ला इस्‍तेमाल करता पकड़ा गया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTXAZYvIEEncG0adLlIxhKhOrztuci9lqbZWF3nxYyhGeI54CoUQMUC3jhPy-PTCChGlJasIZix" alt="ICC Rule for Bat Size: बड़े साइज का बल्‍ला इस्‍तेमाल करता पकड़ा गया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>डरहम काउंटी क्‍लब पर इस गलती के लिए 10 प्‍वाइंट का जुर्माना लगाया गया है। इस महीने में डरहम&nbsp;...</p></div>
            </div>
        </a><a href='https://sportsmintmedia.com/icc-unveils-itt-for-media-rights-in-usa-australia-caribbean-and-canada/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC unveils ITT for media rights in USA, Australia, Caribbean and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUjuz0o4o0sXxl2KvOP9tirnJdjm2HzE1wsRT0ahlHK2BGlPteArmJJpwvyxKE25AU-ZCM880Q" alt="ICC unveils ITT for media rights in USA, Australia, Caribbean and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ICC has unveiled an Invitation To Tender (ITT) for media rights for the USA, Australia, Caribbean and Canada markets.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/icc-coaching-course-icc-launches-first-ever-training-and-education-programmes-to-improve-the-cricket-playing-experience-in-associate-nations-check-details/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC Coaching Course: ICC launches training and education ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTffADLoEKOGyE2k_c5I5EAW-5nFAWSoUzszVJeBtLFJfmRX8Bx1A5tp-ax4h82ChvHKYEDKtUy" alt="ICC Coaching Course: ICC launches training and education ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ICC Coaching Course: ICC launches first ever training and education programmes to improve the cricket playing experience in associate nations, ICC training&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}