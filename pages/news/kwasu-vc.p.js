import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>KWASU VC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,KWASU VC"/>
        <meta name="description" content="Trending News about KWASU VC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>KWASU VC</h1>
            <Image width={800} height={500} src="https://dailypost.ng/wp-content/uploads/2022/11/IMG-20221121-WA0071.jpg" alt="KWASU VC"/>
            <h3>Recent News</h3>
            <a href='https://dailypost.ng/2022/11/21/late-kwasu-vc-professor-muhammed-akanbi-buried-in-ilorin/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Late KWASU VC, Professor Muhammed Akanbi buried in Ilorin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_ASQRHtN82kSwQNNUyhFu7hItTczrHDRuW3yyRu6ummfvTJpPDNKujZRbsudtP9UbmnJnB8TN" alt="Late KWASU VC, Professor Muhammed Akanbi buried in Ilorin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Late Vice-Chancellor of Kwara State University, Malete, KWASU, Professor Muhammed Mustapha Akanbi, SAN, was buried in Ilorin on Monday. He was buried at.</p></div>
            </div>
        </a><a href='https://punchng.com/breaking-kwasu-vc-prof-akanbi-is-dead/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BREAKING: KWASU VC, Prof Akanbi, is dead</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTEoDXcyk0baMlI2qfqy-y6p9OYDHXoEgnkFWWzvYVbb23tdlxn6O_N1e5Bqh_VNKya4gCiq5sg" alt="BREAKING: KWASU VC, Prof Akanbi, is dead" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Vice-Chancellor of Kwara State University, Malete, Professor Muhammed Akanbi (SAN), is reportedly dead.</p></div>
            </div>
        </a><a href='https://tribuneonlineng.com/kwasu-vc-prof-akanbi-dies-at-51-gov-abdulrasaq-others-mourn/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>KWASU VC, Prof Akanbi dies at 51, Gov Abdulrasaq, others mourn</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSfdM0_u4nRNmhInibIQ-N-YHvdukNHSTztUApo7jlTVg8MCC8wJTWaYU_FiZZIRpyx8R1tD3ef" alt="KWASU VC, Prof Akanbi dies at 51, Gov Abdulrasaq, others mourn" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vice Chancellor of the Kwara State University (KWASU), Malete, Professor Muhammed Mustapha Akanbi (SAN), is dead.</p></div>
            </div>
        </a><a href='https://theeagleonline.com.ng/kwasu-vc-prof-akanbi-is-dead-burial-time-venue-announced/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>KWASU VC, Prof. Akanbi is dead, burial time, venue announced -</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRqJhKnJbDxgfc-aoYjOsL__YaFPcqRReoUKn69L3Z-UqDaKff0FWaNHBVpG51lCFR6QhW7wyTp" alt="KWASU VC, Prof. Akanbi is dead, burial time, venue announced -" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Registrar of the university, Kikelomo Salle, confirmed the development in a statement issued in Ilorin on Sunday.</p></div>
            </div>
        </a><a href='https://thenationonlineng.net/kwasu-vc-dies/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>KWASU VC dies The Nation Newspaper</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRpUCsu-V4Jr2WZoewGh0074si95VFLimjo8RqiCAYiHCXL04X1LZaI5trelSjot4N9t0baGWbI" alt="KWASU VC dies The Nation Newspaper" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Vice Chancellor of Kwara State University (KWASU), Malete, Prof. Muhammed Mustapha-Akanbi, is dead.</p></div>
            </div>
        </a>
        </Template></>;
}