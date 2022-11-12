import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rajiv Gandhi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rajiv Gandhi"/>
        <meta name="description" content="Trending News about Rajiv Gandhi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rajiv Gandhi</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/nalini-1-2.jpg" alt="Rajiv Gandhi"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/explained/rajiv-gandhi-assassination-case-explained-supreme-court-releases-convicts-8262742/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Rajiv Gandhi assassination case, and why Supreme Court has ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ7gFTx_DMg2p5IBnjeT0dC85sZcM8epcQ0R_apSnjSBKXlErE8kkZzD6oQN_WhAI6c89ijt7IW" alt="The Rajiv Gandhi assassination case, and why Supreme Court has ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Prime Minister Rajiv Gandhi was assassinated on the night of May 21, 1991, at Sriperumbudur in Tamil Nadu by a woman suicide bomber.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/india/story/rajiv-gandhi-assassination-investigation-clemency-petitions-pardon-apology-2296163-2022-11-11'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As Rajiv Gandhi killers walk free, here&#39;s a quick recap of the case</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTq4ApwlI2DVtHMhcriLXCd9oett0rD2vLyR4nJWTUwOmdTdUFIXZP2E1XIChrZ1VGWBmH2_L5Z" alt="As Rajiv Gandhi killers walk free, here&#39;s a quick recap of the case" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From death sentences and clemency pleas to apology by perpetrators and pardon, the Rajiv Gandhi assassination case saw it all.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/india-news/were-ostracised-lived-in-hiding-rajiv-gandhi-assassination-convicts-kin-101668193745101.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Were ostracised, lived in hiding: Rajiv Gandhi assassination ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTlDsTI_7-r5GcwDTbDDFZO5LUBQ1hzJYTumLTli0rEpovS4WFSKGJx1fDYNkjIKQXFrFV7_DbG" alt="Were ostracised, lived in hiding: Rajiv Gandhi assassination ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Friday, the Supreme Court ordered the release of six convicts in the Rajiv Gandhi assassination case, after the Tamil Nadu government controversially&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/national/tamil-nadu/sc-orders-release-of-rajiv-gandhi-assassination-case-convicts/article66123732.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rajiv Gandhi assassination case | Supreme Court orders release of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRoDZooRpcEcMtibjhcA5cxWx6ZUIgzTBH-yy2rwsEoRVmKotYW89628nid-q1uhYKuKtl884x1" alt="Rajiv Gandhi assassination case | Supreme Court orders release of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The six convicts of the assassination are: Nalini, Ravichandran, Jayakumar, Suthenthiraraja @ Santhan, Murugan and Robert Pius.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/india-news/rajiv-gandhi-assassination-how-did-rajiv-gandhis-killers-get-released'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rajiv Gandhi Assassination: राजीव गांधी के हत्यारों को किस नियम की ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQpT3LJHr_3wT3Xv1sg7T5gZsL9vHDm6rTwMj4hJkDKg3eknG9ZaloisNN-PYX9ix1rq8qwV8Gd" alt="Rajiv Gandhi Assassination: राजीव गांधी के हत्यारों को किस नियम की ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>आइए जानते हैं कि कोर्ट ने जिस अनुच्छेद 142 के तहत आरोपियों को रिहा किया वो क्या है?</p></div>
            </div>
        </a><a href='https://www.opindia.com/2022/11/congress-criticises-sc-over-releasing-rajiv-gandhi-killers-sonia-gandhi-letter-seeking-pardon/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As Congress outrages about the release of Rajiv Gandhi&#39;s killers ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcREwZtAKftGbbrZeRG0p8KjkIZO3bQOGVTTf-IYdJ4B4h04IY_9-cLdZoTsSYnh5mjhp0966Fwg" alt="As Congress outrages about the release of Rajiv Gandhi&#39;s killers ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earlier today, the Congress party expressed its disapproval after the Supreme Court of India ordered the release of all six convicts involved in the Rajiv&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/2022/11/11/india-top-court-frees-ex-pm-rajiv-gandhis-killers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India top court frees ex-PM Rajiv Gandhi&#39;s killers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS5N1AKgyTQ5jLT-BMspVOHwjQQiVxlB2k7P0CVFkD6reY6OUrpi-YZdW4yDx6pNT4j53C60kJf" alt="India top court frees ex-PM Rajiv Gandhi&#39;s killers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Supreme Court orders release of six people convicted over 1991 assassination carried out by Sri Lanka-based LTTE rebels.</p></div>
            </div>
        </a><a href='https://www.jagran.com/news/national-convicts-of-rajiv-gandhi-assassination-case-released-after-30-years-here-is-the-timeline-23197676.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rajiv Gandhi: राजीव गांधी हत्याकांड में 30 साल बाद सभी दोषी हुए रिहा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjEphCRN7gQ02YFqepNHGW9WJYjU_dnl7MgMiDTJCPfRb9KNGYg44_4eqEYB123_oM52XrBy7E" alt="Rajiv Gandhi: राजीव गांधी हत्याकांड में 30 साल बाद सभी दोषी हुए रिहा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>पूर्व प्रधानमंत्री राजीव गांधी हत्याकांड मामले में सुप्रीम कोर्ट ने शुक्रवार को&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.moneycontrol.com/news/india/rajiv-gandhi-assassination-i-am-not-a-terrorist-says-nalini-sriharan-after-being-released-in-rajiv-gandhi-assassination-case-by-sc-879901.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rajiv Gandhi Assassination: &#39;मैं आतंकवादी नहीं हूं&#39;, राजीव गांधी हत्याकांड ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR77H_E5ZbTwe5c1TJbTPrn448OYIbgNQEMKlXJ08w1usPkqDjeeEoz5qzljTSBgyZ27FpFPMvY" alt="Rajiv Gandhi Assassination: &#39;मैं आतंकवादी नहीं हूं&#39;, राजीव गांधी हत्याकांड ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rajiv Gandhi Assassination: नलिनी श्रीहरन (Nalini Sriharan) वर्तमान में पैरोल पर बाहर हैं।</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/india/why-supreme-court-has-release-all-the-convicts-of-the-rajiv-gandhi-assassination-case-2257268'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rajiv Gandhi Assassination Case: राजीव गांधी हत्याकांड के सभी दोषियों ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSTSVtjDCmByiO4lIcHZzDlDRQB3j01OrpOllEEXELCVjOHp3h9Wl4EMo2gn-3qE8mm-nkfr7hJ" alt="Rajiv Gandhi Assassination Case: राजीव गांधी हत्याकांड के सभी दोषियों ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rajiv Gandhi Assassination Case: राजीव गांधी हत्याकांड के सभी दोषियों को सुप्रीम कोर्ट ने क्यों किया&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}