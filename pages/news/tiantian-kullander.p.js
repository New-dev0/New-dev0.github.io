import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tiantian Kullander</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tiantian Kullander"/>
        <meta name="description" content="Trending News about Tiantian Kullander" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tiantian Kullander</h1>
            <Image width={800} height={500} src="" alt="Tiantian Kullander"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/11/amber-group-crypto-founder-tiantian-kullander-dies-at-30/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amber group Crypto founder, Tiantian Kullander dies at 30</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTiSNMDPDscWVVvzRmLyF0IIkNF9xIPR8pqsAPHMPugKMwrUu6k84JbX08QHhH7bgFyjxoBcN2r" alt="Amber group Crypto founder, Tiantian Kullander dies at 30" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By Biodun Busari. The co-founder of Hong Kong-based digital asset company Amber Group, Tiantian Kullander has died at the age of 30 while sleeping.</p></div>
            </div>
        </a><a href='https://saharareporters.com/2022/11/28/crypto-founder-tiantian-kullander-dies-30'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Crypto Founder, Tiantian Kullander, Dies At 30 | Sahara Reporters</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQi64C5vZiwjTZCfIjsCYob2rfKiKIqbDHWwdM2YKJuchFTk59wIkf6VyIkj-1JJVDJn91iGb3p" alt="Crypto Founder, Tiantian Kullander, Dies At 30 | Sahara Reporters" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tiantian Kullander, the influential young founder of cryptocurrency startup Amber Group, died unexpectedly in his sleep on November 23.</p></div>
            </div>
        </a><a href='https://people.com/human-interest/crypto-company-founder-tiantian-kullander-dead-30-amber-group-says/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>$3 Billion Crypto Company Says Founder&#39;s &#39;Legacy Will Live On ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTltK7W_m6uRH3BRc77VGvgwiiCM-f_CP2CeHQ6h60QSepd7w4I1MsMnQQX4hwy4WeY7rOJLtSy" alt="$3 Billion Crypto Company Says Founder&#39;s &#39;Legacy Will Live On ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tiantian Kullander, founder of $3 billion cryptocurrency company Amber Group, died in his sleep at 30.</p></div>
            </div>
        </a><a href='https://www.coindesk.com/video/amber-group-co-founder-tiantian-kullander-dies-at-30/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amber Group Co-Founder Tiantian Kullander Dies at 30</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9OpQaqxS-tmgnQ2QnMEVntuJO1zzg8zdwLvDvLwcL29NwucovKwrkjTBvQ9iUN_caWME6JpAK" alt="Amber Group Co-Founder Tiantian Kullander Dies at 30" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tiantian Kullander, co-founder of digital asset company Amber Group, has died. He was 30 years old. According to a statement posted to the company&#39;s website&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eonline.com/ca/news/1356069/crypto-founder-tiantian-kullander-unexpectedly-dead-at-30'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Crypto Founder Tiantian Kullander “Unexpectedly” Dead at 30</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQxu1_B2mosDd_POISwkziPuWJrPi4_aAdm2dWdibcjmr_80SjJwlepLs_7-JGU3i1_AD_ZbVsF" alt="Crypto Founder Tiantian Kullander “Unexpectedly” Dead at 30" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tiantian Kullander, a co-founder of the asset company Amber Group, died in his sleep Nov. 23. See the touching statement shared from the organization on his&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}