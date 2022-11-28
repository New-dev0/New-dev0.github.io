import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tinubu news</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tinubu news"/>
        <meta name="description" content="Trending News about Tinubu news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tinubu news</h1>
            <Image width={800} height={500} src="https://media.premiumtimesng.com/wp-content/files/2022/10/Asiwaju-Bola-Ahmed-Tinubu-is-attending-KADInvest-7-e1665901975688.jpg" alt="Tinubu news"/>
            <h3>Recent News</h3>
            <a href='https://www.premiumtimesng.com/news/top-news/567704-2023-apc-women-leader-targets-40m-votes-for-tinubu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2023: APC Women Leader targets 40m votes for Tinubu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS8ljEh2dfr4xOVFUcEDyWwgAtCnVuf6bWBKq1YAljv1gdWsnYrqi2WyXV0sXJ_UKZO_xOjEKo2" alt="2023: APC Women Leader targets 40m votes for Tinubu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Betta Edu says Tinubu and his running mate did exceptionally well as governors in their respective states and should be given...</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/tinubu-to-voters-retire-atiku-in-2023/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TINUBU TO VOTERS: Retire Atiku in 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5EpzOYUfxWlqSh1jhoWKeHlexyOCuKWbJS1czLaOBetvIiakWowMsILvtHF-7_WU57bAVvB6V" alt="TINUBU TO VOTERS: Retire Atiku in 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PRESIDENTIAL Candidate of the ruling All Progressives Congress, APC, Asiwaju Bola Ahmed, yesterday, promised to run an inclusive progressive government,&nbsp;...</p></div>
            </div>
        </a><a href='https://punchng.com/tinubu-bags-chieftaincy-titles-in-delta-ebonyi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tinubu bags chieftaincy titles in Delta, Ebonyi - Punch Newspapers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ9ERpZuOi6jBy_q-TH81VbauDVa5BZUSshH0fLnqFeK99eQgqTi3zOUUAxZpPpHIc3C0subdlq" alt="Tinubu bags chieftaincy titles in Delta, Ebonyi - Punch Newspapers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Getting decorated with chieftaincy titles and other honours are not new to a former Governor of Lagos State and the presidential candidate of the All&nbsp;...</p></div>
            </div>
        </a><a href='https://punchng.com/dont-allow-pdp-return-to-power-tinubu-tells-nigerians/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Don&#39;t allow PDP return to power, Tinubu tells Nigerians</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Don&#39;t allow PDP return to power, Tinubu tells Nigerians" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The presidential candidate of the All Progressives Congress, Asiwaju Bola Tinubu, on Saturday asked Nigerians not to allow the Peoples Democratic Party near&nbsp;...</p></div>
            </div>
        </a><a href='https://leadership.ng/2023-tinubu-nigerias-best-option-akinfolarin/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2023: Tinubu Nigeria&#39;s Best Option–Akinfolarin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRWVP-u6M6FVxfSHLPAts5g7UZFRI-qn6oj06qfqz_n0zdHo8dLTeT4-4DM5_CHWGtas_-IOqXH" alt="2023: Tinubu Nigeria&#39;s Best Option–Akinfolarin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahead of the 2023 presidential election, a member of the federal House of Assembly representing Odigbo, Oke-Igbo, Ile-Oluji Constituency, Ondo State,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/2023-tinubus-good-product-will-end-igbo-marginalisation-uzodimma/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2023: Tinubu&#39;s good product, will end Igbo marginalisation ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUcwLkZvmeMoHgSoSSvv03kqbFwLEqnG1LEhYsHBCBeXwl7MdO9kbKQEPJopu2h7THDPx0YFUZ" alt="2023: Tinubu&#39;s good product, will end Igbo marginalisation ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As crime reporters honour Imo gov for fighting insecurity. By Nnamdi Ojiego. Governor Hope Uzodimma of Imo State has described the presidential candidate of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/2023-osinbajo-group-endorses-tinubu-receives-apc-letter-of-recognition/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2023: Osinbajo group endorses Tinubu, receives APC letter of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRYI-ne7jlCGdeB0GGRanIXk1-N3Xu1VbZ9SKQ14JB-sTLWDTq-S1mWfNphuEQ0kryN6rWt6tDh" alt="2023: Osinbajo group endorses Tinubu, receives APC letter of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Faithful Group(TFG), a political group loyal to Vice-President Yemi Osinbajo, has declared support for the presidential candidate of the All&nbsp;...</p></div>
            </div>
        </a><a href='https://punchng.com/yoruba-elders-yet-to-decide-on-tinubu-atiku-obi-ex-yce-secretary-general/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yoruba elders yet to decide on Tinubu, Atiku, Obi – Ex-YCE ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkXSPkonS-3twgaxdNteU1LtQ2dvtpV8yY5jXMBEEbixgwR6NdzW8wgpJosGYvc2x7eaMM1yxa" alt="Yoruba elders yet to decide on Tinubu, Atiku, Obi – Ex-YCE ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The immediate past Secretary General of Yoruba Council of Elders, Dr Kunle Olajide, speaks with ADEMOLA ADEGBITE about 2023 election, insecurity,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/meet-tinubus-late-mum-to-verify-his-age-gbajabiamila-tells-critics/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meet Tinubu&#39;s late mum to verify his age, Gbajabiamila tells critics</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5R74s3qXYSgePDpmjgeBfHgvB4WCmdFc5xzGWlfJ2YBzxYaiNTy4D8JS6JotFgZMBDdZMJNYe" alt="Meet Tinubu&#39;s late mum to verify his age, Gbajabiamila tells critics" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Speaker of the House of Representatives, Hon. Femi Gbajabiamila on Saturday directed critics who are doubting the age of the presidential candidate of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thecable.ng/get-your-apv-apc-and-you-must-vote-tinubu-suffers-yet-another-gaffe-at-rally'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Get your APV, APC and you must vote&#39; — Tinubu suffers yet another ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRB-14Ul3FHpJGloc8bOUCnBHY3M7-IsEfooTChe4bvvRzXyNXe-eN2FjQXuCa0YxvXQ-QaDqP8" alt="&#39;Get your APV, APC and you must vote&#39; — Tinubu suffers yet another ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bola Tinubu, standard bearer of the All Progressives Congress (APC), erroneously referred to the permanent voters cards (PVCs) as the name of his party.</p></div>
            </div>
        </a>
        </Template></>;
}