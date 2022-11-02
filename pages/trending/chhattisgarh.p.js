import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chhattisgarh</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chhattisgarh"/>
        <meta name="description" content="Trending News about Chhattisgarh" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chhattisgarh</h1>
            <Image width={800} height={500} src="" alt="Chhattisgarh"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/india-news/chhattisgarh-govt-seeks-cancellation-of-forest-clearance-for-parsa-coal-block-101667304170823.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chhattisgarh govt seeks cancellation of forest clearance for Parsa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZB9Oz39iv74CTxl_cl0sGfil_UyhwvWt7dKsxcBoOLIgpvj1-tjwk2y9-FYn4bSxuieOgH2LB" alt="Chhattisgarh govt seeks cancellation of forest clearance for Parsa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Chhattisgarh government has written to the Union environment ministry seeking cancellation of the forest clearance given to the Parsa coal block in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/chhattisgarh/former-cm-raman-singh-said-that-bjp-did-not-boycott-rajyotsav'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chhattisgarh: पूर्व सीएम डॉ. रमन सिंह बोले, &#39;भाजपा ने नहीं किया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Chhattisgarh: पूर्व सीएम डॉ. रमन सिंह बोले, &#39;भाजपा ने नहीं किया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chhattisgarh: पूर्व सीएम डॉ. रमन सिंह बोले, &#39;भाजपा ने नहीं किया&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/agriculture/chhattisgarh-government-plan-to-develop-bastar-naxalite-area-has-best-coffee-hub-of-world-2249988'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coffee Farming: नक्सली इलाके से दुनियाभर में फैलेगी &#39;बस्तरिया कॉफी&#39; की ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_l-puRthuvePEJk4slbQale3BcQqU11HrB_CbEYt3at7pWrHxNz79vl9_hEOeq_Ir_EV2Mwz8" alt="Coffee Farming: नक्सली इलाके से दुनियाभर में फैलेगी &#39;बस्तरिया कॉफी&#39; की ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bastariya Coffee: कॉफी का क्वालिटी प्रॉडक्शन के लिए बस्तर 70 से अधिक आदिवासी किसान दिन-रात&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/current-affairs/chhattisgarh-govt-asks-centre-to-cancel-parsa-coal-mine-s-forest-clearance-122110101134_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chhattisgarh govt asks Centre to cancel Parsa coal mines forest ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Chhattisgarh govt asks Centre to cancel Parsa coal mines forest ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In light of the protest against clearance given to coal mines in the biodiversity-rich Hasdeo Arand region, the Chhattisgarh government has urged the Centre&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}