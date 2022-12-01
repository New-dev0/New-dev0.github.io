import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Janusz Waluś</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Janusz Waluś"/>
        <meta name="description" content="Trending News about Janusz Waluś" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Janusz Waluś</h1>
            <Image width={800} height={500} src="https://images.theconversation.com/files/497963/original/file-20221129-14-aex9ak.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop" alt="Janusz Waluś"/>
            <h3>Recent News</h3>
            <a href='https://theconversation.com/janusz-walus-and-parole-for-prisoners-serving-life-sentences-in-south-africa-the-weaknesses-of-the-courts-decision-195403'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Janusz Walus and parole for prisoners serving life sentences in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQd-DqxmDGC2V7rU4uiHlmn180a3v4x9YmPaW-UFczFgRVazuzewlW3KSUKpIG33L8RlBjGdyuU" alt="Janusz Walus and parole for prisoners serving life sentences in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The decision is likely to be relied on by courts to order the Department of Correctional Services to grant offenders parole.</p></div>
            </div>
        </a><a href='https://www.news24.com/news24/southafrica/news/inmate-accused-of-stabbing-janusz-walus-behind-bars-for-murdering-sandf-officer-20221130'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inmate accused of stabbing Janusz Walus behind bars for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsI6Rc7VF8OUGNL8DOIRZVMqniUZVIR57Alwf9wE_Ksvb-CUSmup7qZHlnW02autshMD2cWa-o" alt="Inmate accused of stabbing Janusz Walus behind bars for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A source confirmed to News24 that the man accused of stabbing 69-year-old Walus in his upper body on Tuesday afternoon, is a former SA Air Force sergeant&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iol.co.za/news/crime-and-courts/janusz-walus-parole-do-not-impose-reconciliation-on-us-says-panyaza-lesufi-0a5b710c-f0ce-4771-b206-3a0b2345e4ae'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Janusz Walus parole: Do not impose reconciliation on us, says ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQSu6s-H0vAgdySXgWebxAfCMeQZup8umoqjXxhg3Dtb8n1HhFY0ndwq99QfGX-vjRhKRgTghzc" alt="Janusz Walus parole: Do not impose reconciliation on us, says ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lesufi, the Gauteng ANC chairperson and the province&#39;s premier, led a protest across the Pretoria CBD, saying the pain caused to South Africans by Janusz&nbsp;...</p></div>
            </div>
        </a><a href='https://www.enca.com/news/janusz-walus-court-process-was-abused-sacp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Janusz Waluś | Court process was abused - SACP</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYIJoElotqaiDhSrhbBz82XyEFd5pHY3FeHSuxoQ59fKr2zPNpKsPQDUzPPDC5xcuAxbFplkoA" alt="Janusz Waluś | Court process was abused - SACP" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SACP leader, Solly Mapaila say Janusz Walus&#39;s lawyers have never apologised to Chris Hani&#39;s family. He believes the entire process has been abused.</p></div>
            </div>
        </a><a href='https://www.businesslive.co.za/bd/national/2022-11-30-watch-hani-killer-janusz-walu-parole-in-focus/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Hani killer Janusz Waluś&#39; parole in focus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8QUy37lJMM-YBtb85_QMvBmkJzbMTllbo591FDM8rqHJsy4SVnqbldRyQu2HKygWRSGIIj2sr" alt="WATCH: Hani killer Janusz Waluś&#39; parole in focus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While he recovers, the ANC, SACP and Cosatu staged a protest march against his release. Business Day TV spoke to Sowetan political editor Fikile Moya for his&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timeslive.co.za/politics/2022-11-30-hundreds-march-to-protest-release-of-chris-hanis-murderer-janusz-walus/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hundreds march to protest release of Chris Hani&#39;s murderer Janusz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBRSRy8c44g2vYvbqjgDoSSaGkAlwMG1wH5yGpf6M2xZL83KD_FFq0RtXih8U9kf_iGnTnTtFX" alt="Hundreds march to protest release of Chris Hani&#39;s murderer Janusz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The SACP is asking for a stay in the release on parole of Janusz Walus, the murderer of its leader Chris Hani, pending the outcome of its application to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}