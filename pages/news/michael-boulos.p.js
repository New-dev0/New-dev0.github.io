import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Michael Boulos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Michael Boulos"/>
        <meta name="description" content="Trending News about Michael Boulos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Michael Boulos</h1>
            <Image width={800} height={500} src="" alt="Michael Boulos"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/11/trumps-daughter-tiffany-marries-nigerian-lebanese-fiance-michael-boulos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump&#39;s daughter, Tiffany marries Nigerian-Lebanese fiancé ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR6fCsjYDZBcUjoHeXn-_84qb5j_EeyMDiaOFXgITyjT-mlRBgPRFAHOH41SosgTLTAfHEjRBrw" alt="Trump&#39;s daughter, Tiffany marries Nigerian-Lebanese fiancé ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tiffany Trump, daughter of the former United States President, Donald Trump on Saturday married her Nigerian-bred lover Michael Boulos.</p></div>
            </div>
        </a><a href='https://saharareporters.com/2022/11/13/trumps-daughter-marries-nigerian-lebanese-fiance-michael-boulos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump&#39;s Daughter Marries Nigerian-Lebanese Fiancé, Michael ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTD-OeFwS_spB4dYH1TK7ZM8Kzygh5dU3ywEA4-zO6h7yTQxCDHfTVHqxyyjyMQWbCYnJRvcQaS" alt="Trump&#39;s Daughter Marries Nigerian-Lebanese Fiancé, Michael ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tiffany Trump, daughter of former United States President, Donald Trump, has married her Nigerian-Lebanese fiancé, Michael Boulos.</p></div>
            </div>
        </a><a href='https://www.bbc.com/pidgin/articles/cjl86g2p2x7o'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michael Boulos: Tiffany Trump, Donald Trump daughter marry her ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS4S8rbFtX7Nd87J3elRtWiY4i9cw3CVttw26By3WzK6meMVThRJFdqxelJP5UKg6awawg_mUiP" alt="Michael Boulos: Tiffany Trump, Donald Trump daughter marry her ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tiffany Trump don marry her Nigerian-Lebanese bobo, Michael Boulos on Saturday, 12 November, 2022 for Palm Beach, Florida.</p></div>
            </div>
        </a><a href='https://punchng.com/trumps-daughter-marries-nigerian-bred-fiance-in-florida/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump&#39;s daughter marries Nigerian-bred fiancé in Florida</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Trump&#39;s daughter marries Nigerian-bred fiancé in Florida" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tiffany Trump, the daughter of former United States President, Donald Trump, married her lover, a Nigerian-bred Michael Boulos, on Saturday.</p></div>
            </div>
        </a><a href='https://www.townandcountrymag.com/society/politics/a41936605/tiffany-trump-michael-boulos-wedding-details/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tiffany Trump Gets Married at Mar-a-Lago</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvmgyVnf4cd8SJGcCov8K0u9id_FUCjUKxRRKLWVPfWuBXbAuIPku-TiJ8dWiDlVXpBVjfPlwT" alt="Tiffany Trump Gets Married at Mar-a-Lago" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump&#39;s daughter Tiffany married Michael Boulos today in Palm Beach. Here&#39;s everything we know about their Florida nuptials.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/lifestyle/celebrities/2022/11/13/6370fb20268e3e345a8b45a6.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inside Tiffany Trump and Michael Boulos&#39; luxury wedding</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYBYcdKGyY3kYECyP35V9276I9-jrEdhv6ioZVlvU0tgHBtz6Vta1fXKVhaULKClrjRFmrJp3l" alt="Inside Tiffany Trump and Michael Boulos&#39; luxury wedding" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tiffany Trump and Michael Boulos tied the knot in spectacular style with a breathtaking wedding ceremony on Saturday in Florida. The youngest daughter of&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}