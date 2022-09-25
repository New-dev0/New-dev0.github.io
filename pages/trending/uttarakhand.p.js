import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Uttarakhand</title>
        <meta name="description" content="Trending News about Uttarakhand" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Uttarakhand</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/09/24/600x338/ANI-20220924073-0_1664036928967_1664036928967_1664036945295_1664036945295.jpg" alt="Uttarakhand"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/news/india/ankita-bhandari-murder-uttarakhand-govt-shuts-down-5-resorts-for-flouting-norms-key-updates-here-11664036829281.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ankita Bhandari murder: Uttarakhand govt shuts down 5 resorts for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3Ku4tcV2TgsQaxz3WdHrG5sEVUSrauA6l95LuE9TJdnZrr5Bw4UGkLk8Hle8toUGC78i48oje" alt="Ankita Bhandari murder: Uttarakhand govt shuts down 5 resorts for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CM Dhami has asserted that those who disturb the atmosphere in the state will not be tolerated, no matter how influential they are.</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/national/other-states/uttarakhand-cm-dhami-orders-sit-probe-in-19-year-old-womans-murder-bjp-expels-father-brother-of-accused-from-party/article65930425.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uttarakhand CM Dhami orders SIT probe in Ankita Bhandari murder</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRDUYmTMmu4V7fNJFU0YcpoMpx2R75D1hejtisCNMgvbxtcsiTixqJeKnCFVEknzUtDXEo91r0h" alt="Uttarakhand CM Dhami orders SIT probe in Ankita Bhandari murder" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CM Pushkar Singh Dhami orders demolition of resort owned by main accused Pulkit Arya, son of a former Minister.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cities/dehradun-news/uttarakhand-teen-murder-5-resorts-sealed-cm-dhami-assures-strictest-punishment-101664034843910.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uttarakhand teen murder: 5 resorts sealed; CM Dhami assures ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQuZDuEeVXpoAJbkJv7qCvd6pK3TUftKY49jIIaDwP4GRoWX8NpNiYHaU1DGlLl2xnXIm9jSk8" alt="Uttarakhand teen murder: 5 resorts sealed; CM Dhami assures ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Uttarakhand government said on the instructions of chief minister Pushkar Singh Dhami, five resorts in Dhanachuli area of ​​Nainital district have been&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/india/they-killed-her-even-before-she-got-her-first-salary-says-relative-8171050/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uttarakhand receptionist&#39;s murder: They killed her even before she ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSiKhjjtQn5yL5hIiXlsJ4pyw-yjSx6G4BtKhctjJLZIAKewP32RbFHeGyGgqhfzMH2gUfT-nCy" alt="Uttarakhand receptionist&#39;s murder: They killed her even before she ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SHE WAS the daughter of a former security guard and an anganwadi worker. She had completed Class 12, and was keen to go to college.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/india/story/ankita-bhandari-murder-aap-to-hold-protests-bjp-demand-uttarakhand-cm-resignation-2004425-2022-09-25'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ankita Bhandari murder: AAP to hold protests against BJP, demands ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcStyY4qHpZZvEktKwvV9J9tLRFERDLRK4eijOkckOY4Zp2U2bp1vMjQRaeOri7wcyMzNQt8yRfy" alt="Ankita Bhandari murder: AAP to hold protests against BJP, demands ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Aam Aadmi Party (AAP) has planned to hold a protest at the BJP headquarters in Delhi on Sunday demanding the resignation of CM Pushkar Singh Dhami after&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/national/uttarakhand-receptionist-killed-as-she-refused-to-have-sex-with-guests-report-news-225536'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uttarakhand Receptionist Killed As She Refused To Have Sex With ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-XuhiQDemK66AYKw8jtIAgV4Qz9JBP9XxkucSUcHY_2_j4G0U9VHDCNCh9KLx2VOU-za7I9-U" alt="Uttarakhand Receptionist Killed As She Refused To Have Sex With ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uttarakhand: A friend of a slain receptionist has now claimed that she had called him the night she was killed to tell him she was in &#39;trouble&#39;,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/states/up-uk/uttarakhand-congress-corruption-allegations-against-badri-kedar-temple-committee-ann-2223230'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uttarakhand News: बद्री-केदार मंदिर समिति पर लगे भ्रष्टाचार के आरोप ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRMln1PE6Z1NXDY8MlJxC9_R3yqXc4BPxFslX6JaN-tCN7P-QaJv8pbHA940OP-X5rhBy3mYAiw" alt="Uttarakhand News: बद्री-केदार मंदिर समिति पर लगे भ्रष्टाचार के आरोप ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Badri-Kedar Temple Corruption: प्रदेश में यूके ट्रिपल एससी (UKSSSC), सहकारिता और विधानसभा भर्ती घोटालों&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/uttarakhand/dehradun/story-uttarakhand-vidvat-sabha-gave-mass-tarpan-to-the-martyrs-7128015.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>उत्तराखंड विद्वत सभा ने शहीदों को दिया सामूहिक तर्पण</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="उत्तराखंड विद्वत सभा ने शहीदों को दिया सामूहिक तर्पण" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>उत्तराखंड विद्वत सभा ने देश व राज्य के शहीद आंदोलनकारी वीर सपूतों का सामूहिक तर्पण&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}