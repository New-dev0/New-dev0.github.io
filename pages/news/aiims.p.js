import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>AIIMS</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,AIIMS"/>
        <meta name="description" content="Trending News about AIIMS" /></Head><Template>
            <h1 style={{fontSize: "30"}}>AIIMS</h1>
            <Image width={800} height={500} src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1661094752.jpg?utm_source=fb" alt="AIIMS"/>
            <h3>Recent News</h3>
            <a href='https://www.outlookindia.com/business/aiims-ransomware-attack-cyber-attack-derails-aiims-delhi-services-how-data-of-patients-is-in-danger-news-241071'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyber Attack Derails AIIMS Delhi Services: How Data Of Patients Is ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTL6nrNQC7Lhyi_0jvW1PlvchG3mulZ02yiF59_vlb8cQXa27JNuaTWGafMkweEJvE85Vzotuzg" alt="Cyber Attack Derails AIIMS Delhi Services: How Data Of Patients Is ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The cyberattack has frozen everyday work at AIIMS, including appointments and registration, billing, laboratory report generation.</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/education/jobs-junction/aiims-recruitment-2022-out-for-group-a-group-b-and-group-c-posts-check-details-here/articleshow/95826689.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS Recruitment 2022: एम्स दिल्ली में ग्रुप A,B और ग्रुप C पदों पर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQT7dJQ9bkjlEM2Z9Bnx_IB6EehvT-47gCFWlfKOZ-6j0TeQ3cfeg5fHdL85i39bZYCAkHy4ZDN" alt="AIIMS Recruitment 2022: एम्स दिल्ली में ग्रुप A,B और ग्रुप C पदों पर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AIIMS Delhi Vacancy 2022: एम्स दिल्ली के ग्रुप ए,बी और ग्रुप सी पदों पर भर्ती के लिए उम्मीदवारों&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/india/aiims-delhi-says-e-hospital-data-being-restored-services-still-on-manual/articleshow/95862820.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS Delhi says e-hospital data being restored, services still on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXNUwJHpsBZCffjDjY3dIBHg62WcQD_OPKfhP_2oxHM4RRqAAHNVaxk2cexrykhGzcxLiiBKqO" alt="AIIMS Delhi says e-hospital data being restored, services still on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AIIMS said that cyber security measures are being implemented. All hospital services, including outpatient, in-patient, laboratories, etc continue to run on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/india/nia-may-investigate-aiims-server-hack-high-level-meeting-in-home-ministry-2270444'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS Server Issue: एम्स सर्वर हैक मामले की NIA कर सकती है जांच, गृह ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSc1CGKwbC9wFA4gxnOImJ-6jx5qQpeuXkTcaXO1PiYba4imlWij6vFQW1SoaaW3kn_jgqwPSN1" alt="AIIMS Server Issue: एम्स सर्वर हैक मामले की NIA कर सकती है जांच, गृह ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>राजधानी दिल्ली स्थित देश के सबसे बड़े अस्पताल अखिल भारतीय आयुर्विज्ञान संस्थान के&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/cities/delhi/amid-cyber-attack-aiims-seeks-a-helping-hand-from-drdo-8297062/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amid cyber attack, AIIMS seeks a helping hand from DRDO</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzaGvgyhfNOkdPRKOqAIqUA-AsrDyaYI7nUUC-4481D-rd4uGUR3ziURUNUAgJzuY9zH2bcLni" alt="Amid cyber attack, AIIMS seeks a helping hand from DRDO" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to official sources, a meeting was conducted by the director of the institute, Dr M Srinivas, with all department heads, where it was decided that&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/india/aiims-delhi-cyber-attack-server-remains-down-for-7th-day-10-updates-11669712650210.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS Delhi cyber attack: Server remains down for 7th day. 10 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRlj4G6_Ee2_58y-CgtSfveSpkiomPzviMSCa-V5F8jakGGPKA4beCmzS4C2MJWdOyxHCZSKEzM" alt="AIIMS Delhi cyber attack: Server remains down for 7th day. 10 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The servers of the All India Institute of Medical Sciences (AIIMS) remains hacked for the seventh day in a row. The hospital authority on Monday issued a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/cities/Delhi/aiims-continues-silence-on-media-reports-of-200-crore-demand-by-hackers/article66201742.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS continues silence on media reports of ₹200-crore demand by ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcThmbPn4h0J6mSnMqA2lWT9BsUGnphGcfOSb4r3vzNgQFnbC3-3dWKoWDlsTVIaI0BmFKTZmLBx" alt="AIIMS continues silence on media reports of ₹200-crore demand by ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On November 23, AIIMS said the National Informatics Centre team working at the institute had informed that the servers were down and that it might be&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/india/story/aiims-server-down-home-ministry-chairs-high-level-meet-ehospital-data-restored-2303363-2022-11-29'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS server down: Home ministry chairs high-level meet, eHospital ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTXS1I1W1U68ahgAZspLnIiyw27_JpfZNtqDRhllfDQWIcgyxJYASAVJFnwF9n4Zc3Rh6R81mZ5" alt="AIIMS server down: Home ministry chairs high-level meet, eHospital ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Servers of the All India Institute of Medical Science (AIIMS), New Delhi, server remained out of order for the seventh consecutive day.</p></div>
            </div>
        </a><a href='https://www.jagran.com/delhi/new-delhi-city-ncr-delhi-aiims-s-server-not-worked-seventh-day-hacking-will-investigation-from-terrorist-angle-in-case-of-aiims-ransomware-attack-23235720.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS Ransomware Attack: दिल्ली एम्स का सर्वर सातवें दिन भी रहा ठप ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQbViKMbIe0ks5IywyznfEBmQWM68DX_NkUJh_mxIT3hbZSFPNMoUEfC99-w-x_REOVMzExqpmZ" alt="AIIMS Ransomware Attack: दिल्ली एम्स का सर्वर सातवें दिन भी रहा ठप ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AIIMS Ransomware Attack एनआइसी ई-हास्पिटल डाटाबेस और ई-हास्पिटल के लिए एप्लिकेशन सर्वर बहाल कर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/explained/story/aiims-delhi-server-down-ib-cbi-investigations-hackers-demand-200-crore-cryptocurrency-ransom-all-you-need-to-know-ntc-1585455-2022-11-29'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS में सर्वर हैकिंग, 200 करोड़ की फिरौती की मांग और 4 करोड़ मरीजों के ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR_Erj2JPCaOVwMQrBcGVI4shl7O83XUEdAybS8hjOLqWpRWq3NCP2upRbQza6P0qMNECd4zU3V" alt="AIIMS में सर्वर हैकिंग, 200 करोड़ की फिरौती की मांग और 4 करोड़ मरीजों के ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>एम्स दिल्ली का सर्वर अब तक डाउन है. लगभग एक हफ्ते होने वाले हैं और सर्वर पूरी तरह से ठीक&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}