import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Apple</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Apple"/>
        <meta name="description" content="Trending News about Apple" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Apple</h1>
            <Image width={800} height={500} src="https://h2g6j3q2.rocketcdn.me/wp-content/uploads/2022/11/Untitled-design.png" alt="Apple"/>
            <h3>Recent News</h3>
            <a href='https://www.techcityng.com/apple-ceo-tim-cook-wants-to-buy-manchester-united-for-6-9-billion/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple CEO, Tim Cook wants to buy Manchester United for $6.9 billion</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQDHCWs0Sd8vhdPIenkXyklC44aIOk3VLCWvkI6JQ9tlaZ1CP46Nhsvs1a-xiAIWz0n16U-7M4O" alt="Apple CEO, Tim Cook wants to buy Manchester United for $6.9 billion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to the available reports on Manchester United&#39;s sale, Apple CEO Tim Cook is looking to purchase the football club.</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/apple-interested-in-buying-manchester-united-in-5-8billion-deal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple interested in buying Manchester United in £5.8billion deal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLo4EMIdW-aStK4RYbnjflOx44PyP5EHhv_aDQWJ2_w2q0gDoIvj3y32iR0YPN8LlsdU-R1Pyd" alt="Apple interested in buying Manchester United in £5.8billion deal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The tech firm has never previously owned a major sports team, but the commercial opportunities provided by United are reported to be factors fueling their&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wired.com/story/apple-black-friday-deals-2022-1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>32 Best Apple Black Friday Deals (2022): Apple Watch, iPads, AirPods</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMvgHRIpmOLsIDafPWnCQ2d-mpdeNp-5e7Ndju3e-ms9gUwsIeiewBuCWFuqvJ2y_zgEVCX0gf" alt="32 Best Apple Black Friday Deals (2022): Apple Watch, iPads, AirPods" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Need a new Apple Watch or iPhone case? Now&#39;s the time to snag one with Apple&#39;s Black Friday Deals.</p></div>
            </div>
        </a><a href='https://www.reuters.com/technology/many-shoppers-cant-find-apples-latest-iphones-black-friday-2022-11-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Many shoppers can&#39;t find Apple&#39;s latest iPhones on Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTAYyVVU4tIwHSHo6icc0glypPDfJlHvELBDepO9pXfkJIHZIV7DzENkJysf_mFxc-LhY7g27WF" alt="Many shoppers can&#39;t find Apple&#39;s latest iPhones on Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Among them were Sally Gannon and her son Michael, who were visiting an Apple store in Bethesda, where they found no iPhone Pros in stock. Similarly, Abisha&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/essentials/best-black-friday-deals-apple-watch-these-watches-have-never-been-cheaper-2022-11-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday deals on Apple Watch: These watches have never ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYru7MGnrSyfXMSGNn3zk2dd19riYjJqaiufi2cEi6PODZafSOkyT_tj9jqAFNYzL4L_04oQ3Q" alt="Best Black Friday deals on Apple Watch: These watches have never ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Forget the Apple Store. The best deals on Apple tech this Black Friday are at Walmart and Amazon. That&#39;s especially true for Apple Watches: We spotted the&nbsp;...</p></div>
            </div>
        </a><a href='https://theloadstar.com/apple-supply-chain-disrupted-by-foxconn-protests-and-more-covid-lockdowns/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple supply chain disrupted by Foxconn protests and more Covid ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTyMePPBgkksIg1f8Omnhi7W7-FMudizceLReth5KrO4VfEQcs5VAEOkkmjlCgAiXR8hxVP8qQV" alt="Apple supply chain disrupted by Foxconn protests and more Covid ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Violent protests have erupted at Foxconn&#39;s iPhone factory in Zhengzhou, prompting renewed concerns over Chinese supply chains.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/essentials/amazon-black-friday-sale-get-apple-airpods-pro-2-at-their-all-time-best-price-2022-11-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon Black Friday sale: Get Apple AirPods Pro 2 at their all-time ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLzB4bUWNUcVPZ8U0QmZhzxagvF5zfVS4wqBI8rj_XRzedjv1J8LBI8rndQhKuD3N3V0V7rUCS" alt="Amazon Black Friday sale: Get Apple AirPods Pro 2 at their all-time ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CBS Essentials is created independently from the CBS News staff. We may receive commissions from some links to products on this page. Promotions are subject to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/news/apple-iphone-14-major-shortages-zero-covid/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple faces &quot;major shortages&quot; of iPhone 14, analyst says</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQaaR-r9c2HNVbQS0R-oOhuhXpN_LnOwrefwf_rkEcqsLKUEiStxggMtdXts4PAnWk2gs_xppIs" alt="Apple faces &quot;major shortages&quot; of iPhone 14, analyst says" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Holiday shoppers could struggle to find the tech giant&#39;s new iPhone as COVID-19 surge in China hampers production.</p></div>
            </div>
        </a><a href='https://www.mentalfloss.com/posts/best-apple-black-friday-deals-amazon'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 15 Best Apple Black Friday Deals On Amazon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRoIrfVKzF1naYIXsKKlKKa6dIqSFKlF9bMkYsHkrHKrt2AgQM5KD1efEtibGpcyoMdhgNkT3a4" alt="The 15 Best Apple Black Friday Deals On Amazon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon has got some of the best prices of the year on the Apple products the loved&nbsp;...</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/money/reviewed/2022/11/25/black-friday-deal-series-8-apple-watch-sale-amazon/10706392002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Save on the Apple Watch Series 8 at Amazon during Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT4KNbgh5QcA4OQozzYMcDIP3tk-InChursgDksVO1MQTKhmWZbZ90oBtXTUHABgLRPOJLWCdH3" alt="Save on the Apple Watch Series 8 at Amazon during Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Recommendations are independently chosen by Reviewed&#39;s editors. Purchases made through the links below may earn us and our publishing partners a commission.</p></div>
            </div>
        </a>
        </Template></>;
}