import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Elizabeth Holmes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Elizabeth Holmes"/>
        <meta name="description" content="Trending News about Elizabeth Holmes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Elizabeth Holmes</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001cd98e-1600.jpg" alt="Elizabeth Holmes"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/news/2022/1118/1336981-elizabeth-holmes-theranos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Theranos founder sentenced to over 11 years for fraud</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTlhxDE5M-3DQQtAwJd4qx0ft45YXqZJKdoHIPF-idm7DLHqeq-2NRr_aq03xjaheYlMKsBHoW0" alt="Theranos founder sentenced to over 11 years for fraud" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A California judge has sentenced Theranos founder Elizabeth Holmes to 11 years and three months in prison for defrauding investors in her now-defunct&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/world/arid-41010296.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Theranos founder Elizabeth Holmes sentenced to more than 11 years</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3oRPCkYmvWjpgTQpFr8aIbjpzaRfBJIEK6lTPC0eQzkhGvoNfiRamU5b2e-jaM6VqDZBLLvGI" alt="Theranos founder Elizabeth Holmes sentenced to more than 11 years" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Theranos founder was convicted on four counts of defrauding nearly $121m after her blood testing firm collapsed.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/us-news/2022/nov/18/elizabeth-holmes-theranos-trial-sentencing'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Theranos founder Elizabeth Holmes sentenced to more than 11 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYzfjPaGCa31o3l7DgfxtKTXA16wwg75WNNL-1d5usriRhjeM8K8L5XIeW6xA4pbSD8kD48xO5" alt="Theranos founder Elizabeth Holmes sentenced to more than 11 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>She was convicted in January on four counts of deceiving investors with fraudulent claims on her blood testing startup.</p></div>
            </div>
        </a><a href='https://www.kosu.org/technology/2022-11-18/elizabeth-holmes-sentenced-to-11-years-in-prison-for-theranos-fraud'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elizabeth Holmes sentenced to 11 years in prison for Theranos fraud</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTGzUpY4INZPT3gPC7B2m-H9bMEbWaVeTICe79Tv_xAs7lLA4GRgQySWdeYcfNESuGmbmsrDF3g" alt="Elizabeth Holmes sentenced to 11 years in prison for Theranos fraud" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Theranos CEO Elizabeth Holmes arrives for her sentencing at federal court with her partner Billy Evans in San Jose, California. Holmes was convicted of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ft.com/content/3ab080c9-c13d-40b3-a697-9c58fd9e218c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elizabeth Holmes sentenced to more than 11 years for Theranos fraud</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRpG2JKnWSPWo8vHMFTNOj27YMmtuTjzpT96-b4cTLg_YFiLqK7ogrXP2JmFxNyn1ZIZdh1NwZo" alt="Elizabeth Holmes sentenced to more than 11 years for Theranos fraud" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Judge&#39;s decision caps blood-testing company saga that put a spotlight on Silicon Valley start-up culture.</p></div>
            </div>
        </a><a href='https://www.independent.ie/world-news/north-america/elizabeth-holmes-gets-more-than-11-years-in-prison-for-theranos-scam-42156567.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elizabeth Holmes gets more than 11 years in prison for Theranos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRo40ntS0HNGJLJXJyU1ArIcCQI6UH8ofDdWeg4mD5g_8lcFbZbPd9djUr3AUNjr5UcgYZp1q2N" alt="Elizabeth Holmes gets more than 11 years in prison for Theranos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A federal judge has sentenced disgraced Theranos chief executive Elizabeth Holmes to more than 11 years in prison for duping investors in the failed&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}