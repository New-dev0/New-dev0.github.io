import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Silver Price</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Silver Price"/>
        <meta name="description" content="Trending News about Silver Price" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Silver Price</h1>
            <Image width={800} height={500} src="https://images.news18.com/ibnkhabar/uploads/2022/10/Gold-Price-Today-1-166632460816x9.jpg" alt="Silver Price"/>
            <h3>Recent News</h3>
            <a href='https://hindi.news18.com/news/uttarakhand/haldwani-gold-silver-price-in-haldwani-22-october-2022-diwali-dhanteras-localuk-cgnt-4784995.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gold-Silver Price in Haldwani Today: सोना-चांदी खरीदने का अच्छा मौका ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROvYKMcbWLOGPn2YOhLuf_hyyfHgjxY_Yvi0CPpQEtx-WdEoevnz-4qtrWTtDbsG1rgPYGYZ-I" alt="Gold-Silver Price in Haldwani Today: सोना-चांदी खरीदने का अच्छा मौका ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>हल्द्वानी में इस हफ्ते के पहले दिन यानी सोमवार को 24 कैरेट सोने के दाम 52,300 रुपये प्रति 10&nbsp;...</p></div>
            </div>
        </a><a href='https://www.naidunia.com/madhya-pradesh/indore-gold-and-silver-price-in-mp-gold-jumps-by-rs-900-and-silver-by-rs-1750-on-dhanteras-7905456'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gold and Silver Price in MP : धनतेरस पर सोना 900 और चांदी 1750 रुपये ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRqNAnaynjGMT32p6UsMETqahx7vNNPYbhSxwMVR91_wYiftcAx7V4gn1-kYDkEi4I_Nu-H914m" alt="Gold and Silver Price in MP : धनतेरस पर सोना 900 और चांदी 1750 रुपये ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gold and Silver Price in MP : शनिवार को इंदौर के सराफा बाजार में सोना कैडबरी 900 रुपये उछलकर 52200&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/bihar/patna-city-gold-silver-price-today-gold-and-silver-prices-increased-on-the-day-of-dhanteras-this-rate-in-the-market-of-patna-23157228.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gold Silver Price Today: धनतेरस के दिन बढ़े सोना और चांदी के भाव, पटना ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTydKWeDI9r4FUydX8penVVnbXAzACx1PU8IsLmwJVOG22LZcd-anI073yR8TTjTMyu7hzuY4-F" alt="Gold Silver Price Today: धनतेरस के दिन बढ़े सोना और चांदी के भाव, पटना ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>पटना, जागरण संवाददाता। Gold Silver Price Today: धनतेरस व दीपावली की खरीदारी से गुलजार स्थानीय पटना&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/rajasthan/story-rajasthan-gold-silver-price-today-gold-becomes-expensive-on-dhanteras-silver-is-close-to-60-thousand-7254795.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rajasthan Gold Silver Price Today :धनतेरस पर महंगा हुआ सोना-चांदी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQlMEpdBPP0sNK2VrrTpyQEUY4-evsmyLhYk0moLoSzH6i3N_SUqC_UMgfScqLK-rTnOfS1cwC8" alt="Rajasthan Gold Silver Price Today :धनतेरस पर महंगा हुआ सोना-चांदी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>राजस्थान में धनतेरस के अवसर पर सोना-चांदी के दामों में उछाल है। जयपुर के सर्राफा बाजार&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.thequint.com/business/business-news/gold-silver-price-today-know-the-latest-price-of-23-24-carat-22-10-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gold Silver Price Today: धनतेरस आज, सोना सस्ता हुआ, जानें अपने शहर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS5uuKxlZScP2i6bycfMiHVR5BlLQJg9fuiGexSemiJzuaY2bu-N2lCkYNtsBllv39hwd3leXWE" alt="Gold Silver Price Today: धनतेरस आज, सोना सस्ता हुआ, जानें अपने शहर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gold Silver Price: 999 कैरेट वाला सोना 50062 के आसपास खुला, वहीं चांदी 55555 के भाव पर आज कारोबार कर रही&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haribhoomi.com/automobiles-and-gadget/gold-silver-price-down-on-dhanteras-22-october-2022-diwali-sone-chandi-purity-wise-rates-check-latest-ibja-rate-483347'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gold Price On Dussehra: धनतेरस के दिन सस्ता हुआ सोना-चांदी, खरीदारी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdCxrSz68VEByjz_Ac2sJ_jpQt2sT6jEXX-RN-9dMB86UlVsnUaK_GLMtKO77J7QrIARGclYbs" alt="Gold Price On Dussehra: धनतेरस के दिन सस्ता हुआ सोना-चांदी, खरीदारी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>धनतेरस का पर्व 22 अक्टूबर, 2022 की शाम 6 बजकर 2 मिनट से शुरू हो गया है। धनतेरस के मौके पर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.msn.com/hi-in/autos/news/gold-silver-price-in-haldwani-%E0%A4%B8-%E0%A4%A8-%E0%A4%9A-%E0%A4%82%E0%A4%A6-%E0%A4%96%E0%A4%B0-%E0%A4%A6%E0%A4%A8%E0%A5%87-%E0%A4%95-%E0%A4%85%E0%A4%9A%E0%A5%8D%E0%A4%9B-%E0%A4%AE-%E0%A4%95/ar-AA13fYR4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gold-Silver Price in Haldwani: सोना-चांदी खरीदने का अच्छा मौका</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSvug3o3sHak7nrLX90FqrJxSjaeOKy97s9fcAdHF-Qlrtz285dNWPEyn6-yWadaQ7pjy54Ir3l" alt="Gold-Silver Price in Haldwani: सोना-चांदी खरीदने का अच्छा मौका" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>पवन सिंह कुंवर/हल्द्वानी. अगर आप सोने-चांदी की खरीदारी के लिए बाजार जा रहे हैं, तो आज (22&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}