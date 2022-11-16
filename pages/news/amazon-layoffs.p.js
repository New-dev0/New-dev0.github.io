import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amazon Layoffs</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amazon Layoffs"/>
        <meta name="description" content="Trending News about Amazon Layoffs" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amazon Layoffs</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95539807,width-1070,height-580,imgsize-1386671,overlay-ettech/photo.jpg" alt="Amazon Layoffs"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/tech/technology/amazon-india-likely-to-axe-jobs-amid-global-layoffs/articleshow/95539763.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon India likely to axe jobs amid global layoffs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTS0L6I_la_Q8WQcBHy1X6Pb1cntBmCQmYVkmPZ9-ye8ZrcM2ICXCErhz1V4dSjqwdKA5WAxNia" alt="Amazon India likely to axe jobs amid global layoffs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Jeff Bezos-founded tech major – which operates various businesses in India including ecommerce, data centre under Amazon Web Services, and Prime Video&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/technology/tech-news-technology/amazon-reportedly-begins-mass-layoffs-alexa-and-cloud-gaming-division-impacted-8270880/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon reportedly begins mass layoffs; Alexa and cloud gaming ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQR7TOBSJyMhdSJWBI2oXiEf6bUC8p03_pKdZDCQ--OGjE0eMCEBgoquQPdfC7th3Q4J4NdbwUm" alt="Amazon reportedly begins mass layoffs; Alexa and cloud gaming ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After Twitter and Meta, Amazon is the latest company to sack thousands of employees. The job cuts are expected in the retail, devices and cloud gaming&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/business-economy/companies/amazon-layoffs-e-commerce-giants-india-unit-likely-to-sack-hundreds-across-division-article-95543695'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon layoffs: E-commerce giant&#39;s India unit likely to sack ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwMma7ApUFyOXpoUI7xOyggA1gjnUFcqK_LwS7jIaxPk34qFZY9Vokxt-6k6D1blOHjHsN7dT2" alt="Amazon layoffs: E-commerce giant&#39;s India unit likely to sack ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hundreds of Amazon India employees engaged in the shared services, back-office and retail operations, are under threat from the layoff exercise,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/15/amazon-starts-cutting-jobs-in-alexa-unit-and-cloud-gaming-division.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon starts cutting jobs, with layoffs hitting Alexa unit and cloud ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_kidrbo1I_Ic602uRlnHPoHEw2QL_G3MKB3gPniGQAAYvpdj2fsyKw0bx_IfnivVcsthLV5Ti" alt="Amazon starts cutting jobs, with layoffs hitting Alexa unit and cloud ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CEO Andy Jassy has moved aggressively to cut costs across Amazon, and the company previously said it would freeze hiring in its corporate workforce.</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/technology/news/story/after-meta-and-twitter-amazon-begins-mass-layoffs-fires-contract-workers-352904-2022-11-15'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>After Meta and Twitter, Amazon begins mass layoffs, fires contract ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQorI8maqLMTFeqQnSJxlM0-tqFSAJBNpXy1b_BKotE-zxNT-AsaTPds7T7znwKPOUURNgMsyRO" alt="After Meta and Twitter, Amazon begins mass layoffs, fires contract ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon has already begun the process of reducing its overall workforce. The first in line are the contractors working in recruiting jobs.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/technology/2022/11/15/amazon-massive-layoffs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon starts widespread layoffs in corporate ranks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROouW30VCjszvSYfgFao5KDXCbR7iM-eFPca03D6RF3_GQt0nlOrB-9aRoCzFZ9CzeM6meXmv2" alt="Amazon starts widespread layoffs in corporate ranks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a dramatic turnaround from its constant expansion of the past decade, Amazon began laying off corporate employees Tuesday, becoming the latest of the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/business/business-diary/report-amazon-plans-to-lay-off-10000-employees-as-losses-mount'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon Layoffs: अमेजन में 10000 कर्मचारियों की छंटनी की तैयारी, घाटा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTvJ0kH-5-bTJ1wZHiIlbCQnD4C5HFCy4KCqPdmdHSCvc4ovvDu6AlE0Bi35bIhq2vFo0G-rYMd" alt="Amazon Layoffs: अमेजन में 10000 कर्मचारियों की छंटनी की तैयारी, घाटा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon Layoffs: अमेजन में 10000 कर्मचारियों की छंटनी की तैयारी, घाटा बढ़ने की वजह से बनाई योजना.</p></div>
            </div>
        </a><a href='https://www.abplive.com/business/amazon-layoffs-2022-10k-employees-can-be-layoff-from-amazon-amid-largest-job-cuts-in-firm-history-2259413'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon Layoffs 2022: ट्विटर, मेटा और माइक्रोसॉफ्ट के बाद अमेज़न से ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_zlt7yH4HWxxIjlcWIyTsU717UlfzJwqNza2CU8gSXILl1rlrvFENHw95ybZ45rLAJfPe9cdR" alt="Amazon Layoffs 2022: ट्विटर, मेटा और माइक्रोसॉफ्ट के बाद अमेज़न से ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>अब Amazon भी अपने वर्किंग स्टाफ में 10 हज़ार कर्मचारियों की छंटनी करने जा रही है.</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/business/amazon-layoffs-amazon-to-lay-off-10000-employees-after-facebooktwitter-claims-report-bml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon Layoffs: फेसबुक-ट्विटर के बाद अब Amazon में 10000 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsVZArq-OSWWhDYpq0i6kas0b_OKYGtN9PHBUP0X9QatZhRsIjJcU5qRfnB7ecChv66cJ6ztqL" alt="Amazon Layoffs: फेसबुक-ट्विटर के बाद अब Amazon में 10000 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon Layoffs: ट्विटर-फेसबुक के बाद अब अमेजन से भी हजारों कर्मचारियों की नौकरी पर खतरा मंडरा&nbsp;...</p></div>
            </div>
        </a><a href='https://newstrack.com/business/amazon-plans-to-lay-off-10000-people-this-week-new-york-times-report-345763'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon Layoffs: दिग्गज ई-कॉमर्स कंपनी Amazon भी करेगी तगड़ी छंटनी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTktHS3ngoZ29UvQFmeUedbjrgNENj4EIm7gHhok0SDOcPhuvF6SzfLY4V4juBuhjQeXxXe0bEx" alt="Amazon Layoffs: दिग्गज ई-कॉमर्स कंपनी Amazon भी करेगी तगड़ी छंटनी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon Layoffs: कंपनी टेक्नोलॉजी के साथ कॉर्पोरेट फील्ड में छंटनी करने जा रही है।</p></div>
            </div>
        </a>
        </Template></>;
}