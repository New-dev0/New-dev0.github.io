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
            <Image width={800} height={500} src="https://medicaldialogues.in/h-upload/2022/11/30/192537-aiims-delhi.jpg" alt="AIIMS"/>
            <h3>Recent News</h3>
            <a href='https://medicaldialogues.in/news/health/hospital-diagnostics/delhi-aiims-cyberattack-two-system-analysts-suspended-over-alleged-dereliction-of-duty-103190'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi AIIMS Cyberattack: Two system analysts suspended over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS8cpTzA5LF2gleIR78iKUzI9K4_uxmv4gdK6WZV35EBFzcpceMZNT78hgb4tolZe4P7qTKiyD9" alt="Delhi AIIMS Cyberattack: Two system analysts suspended over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;AIIMS has around 40 physical and 100 virtual servers. Five have shown signs of virus. These servers are also being set up for scanning and new servers with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/business/aiims-ransomware-attack-cyber-attack-derails-aiims-delhi-services-how-data-of-patients-is-in-danger-news-241071'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyber Attack Derails AIIMS Delhi Services: How Data Of Patients Is ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTL6nrNQC7Lhyi_0jvW1PlvchG3mulZ02yiF59_vlb8cQXa27JNuaTWGafMkweEJvE85Vzotuzg" alt="Cyber Attack Derails AIIMS Delhi Services: How Data Of Patients Is ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The cyberattack has frozen everyday work at AIIMS, including appointments and registration, billing, laboratory report generation.</p></div>
            </div>
        </a><a href='https://www.jagran.com/delhi/new-delhi-city-ncr-delhi-aiims-ransomware-attack-claim-to-restore-the-data-of-e-hospital-on-the-server-digital-services-of-aiims-will-start-soon-23236741.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS Cyber Attack: ई-हास्पिटल के डाटा को सर्वर पर बहाल करने का दावा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTGboeDnMCc16we8PpvMO8fyknSFMHTI5O-LR9w3oVeumkUHXByxLgrgG0JrPqo6rVXFEh14d8X" alt="AIIMS Cyber Attack: ई-हास्पिटल के डाटा को सर्वर पर बहाल करने का दावा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AIIMS Ransomware Attack साइबर सुरक्षा के लिए भी जरूरी कदम उठाए गए हैं। इसके तहत दिल्ली स्थित एम्स&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/cities/delhi/amid-cyber-attack-aiims-seeks-a-helping-hand-from-drdo-8297062/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amid cyber attack, AIIMS seeks a helping hand from DRDO</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzaGvgyhfNOkdPRKOqAIqUA-AsrDyaYI7nUUC-4481D-rd4uGUR3ziURUNUAgJzuY9zH2bcLni" alt="Amid cyber attack, AIIMS seeks a helping hand from DRDO" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to official sources, a meeting was conducted by the director of the institute, Dr M Srinivas, with all department heads, where it was decided that&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/national/aiims-server-down-stalled-for-seventh-consecutive-day-e-hospital-data-restored-zzz'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS Server Down: एम्स के सर्वर में सेंधमारी, लगातार सातवें दिन भी रहा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWkC_cLkGNoqTLgZo7hq7vWXOKO9a8_slHbFbWcuzxy5y39gAYK9dQQnElwFO4GKVSHAKEvFSi" alt="AIIMS Server Down: एम्स के सर्वर में सेंधमारी, लगातार सातवें दिन भी रहा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>लगातार सातवें दिन अखिल भारतीय आयुर्विज्ञान संस्थान (एम्स) दिल्ली का सर्वर ठप रहा.</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/india/nia-may-investigate-aiims-server-hack-high-level-meeting-in-home-ministry-2270444'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS Server Issue: एम्स सर्वर हैक मामले की NIA कर सकती है जांच, गृह ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSc1CGKwbC9wFA4gxnOImJ-6jx5qQpeuXkTcaXO1PiYba4imlWij6vFQW1SoaaW3kn_jgqwPSN1" alt="AIIMS Server Issue: एम्स सर्वर हैक मामले की NIA कर सकती है जांच, गृह ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>राजधानी दिल्ली स्थित देश के सबसे बड़े अस्पताल अखिल भारतीय आयुर्विज्ञान संस्थान के&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/india/aiims-delhi-cyber-attack-server-remains-down-for-7th-day-e-hospital-data-restored-2541819.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS Delhi cyber attack: Server remains down for 7th day, e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSoKPCgVy5DA5XRFhGKEXmVWM0sDIszbNSXGiNHoSrlPYTLlLdXDe01H8V3Bq-AbMz-MXwJQnbq" alt="AIIMS Delhi cyber attack: Server remains down for 7th day, e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi AIIMS server remained out of order for the 7th consecutive day, though e-hospital data has been restored, measures are being taken to avert future&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/india/aiims-delhi-says-e-hospital-data-being-restored-services-still-on-manual/articleshow/95862820.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS Delhi suspends two system analysts over failing to tackle ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlSDu6i4j0WPoz_CwFHTKYmuQuzm14_UKRS0jjDtAh8W1jNe9E04OuWml0nhJbsmcL14s_AXFR" alt="AIIMS Delhi suspends two system analysts over failing to tackle ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;The eHospital data has been restored on the servers. Network being sanitized before services can be restored. The process is taking some time due to the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/india/aiims-cyber-attack-hospital-data-has-been-restored-say-authorities-11669740226639.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS cyber attack: Hospital data has been restored, say authorities ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRr81Kqg4RHoD_w6zWImfwGA5o2hdUvWUuuX45XbEMkYD2IcCIr3RNxoYYqKRD-XTDeo0_eW4H9" alt="AIIMS cyber attack: Hospital data has been restored, say authorities ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The All India Institute of Medical Sciences (AIIMS), Delhi, late on Tuesday said that all eHospital data has been restored on the hospital servers.</p></div>
            </div>
        </a><a href='https://www.aajtak.in/explained/story/aiims-delhi-server-down-ib-cbi-investigations-hackers-demand-200-crore-cryptocurrency-ransom-all-you-need-to-know-ntc-1585455-2022-11-29'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AIIMS में सर्वर हैकिंग, 200 करोड़ की फिरौती की मांग और 4 करोड़ मरीजों के ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZ4m_fAWT0FjcAmtgPFjukqtbwj17ce3KY9EN0c9ZPam_gT2Z4Rn5cMB-xCAopg6gaKuo4iBzD" alt="AIIMS में सर्वर हैकिंग, 200 करोड़ की फिरौती की मांग और 4 करोड़ मरीजों के ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>एम्स दिल्ली का सर्वर अब तक डाउन है. लगभग एक हफ्ते होने वाले हैं और सर्वर पूरी तरह से ठीक&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}