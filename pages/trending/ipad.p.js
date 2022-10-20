import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>iPad</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,iPad"/>
        <meta name="description" content="Trending News about iPad" /></Head><Template>
            <h1 style={{fontSize: "30"}}>iPad</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/10/iPad-2022-FB.jpg" alt="iPad"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/technology/tech-news-technology/apple-ipad-2022-faq-your-biggest-questions-answered-8217434/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple iPad 10th gen FAQ: Your biggest questions, answered</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfNoH_wZcgmie95JqFXdT46gzv0XmBuOH8MpaKLwkRucKEuqzgUqepi5a952kV4bsK0zlYPPX8" alt="Apple iPad 10th gen FAQ: Your biggest questions, answered" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apple&#39;s most popular tablet got a much-needed redesign, complete with bold colour options, a bigger screen and support for Magic Keyboard Folio.</p></div>
            </div>
        </a><a href='https://hindi.moneycontrol.com/news/tech/gadgets/apple-ipad-2022-launched-in-india-with-a14-bionic-chip-check-price-and-specification-839701.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple iPad 2022 भारत में लॉन्च, होम बटन हुआ गायब, जानिए कीमत और ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQiqfRIEK8kzIagGMMPGqv96r9HEJE5FVKFydnFPhoX47bJNNgGDNMV-fsHr0O5i9zyGa66mEcL" alt="Apple iPad 2022 भारत में लॉन्च, होम बटन हुआ गायब, जानिए कीमत और ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारत में 10th Gen Apple iPad के वाई-फाई वेरियंट की कीमत 44900 रुपये है, जबकि वाई-फाई प्लस सेल्युलर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/technology/apple-ipad-pro-with-m2-chip-launched-in-india-know-its-price-2241572'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple iPad Pro: M2 चिप के साथ एप्पल आईपैड प्रो भारत में लॉन्च, जानें ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSq8_9W_EXBe-8IEfwcVnSPTSGxH6mtGWVZzwCJIzKoGHTvQMODSO-wsQ-N78c6YWtW6IXSgMAU" alt="Apple iPad Pro: M2 चिप के साथ एप्पल आईपैड प्रो भारत में लॉन्च, जानें ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apple iPad Pro launched: Apple ने एप्पल आईपैड प्रो को दो साइजों 11-इंच और 12.9-इंच में भारतीय बाजार में&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gsmarena.com/apple_ipad_mini_2021_prices_quietly_went_up_yesterday-news-56221.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple iPad mini (2021) prices quietly went up yesterday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJ4swm-FChHeMuz9DS_S2hGb_WNZMHb9A_fobqs0loz2xGNVQaVJ8wjjWdP37vlY8UR3xsK5E7" alt="Apple iPad mini (2021) prices quietly went up yesterday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The mini tablet costs the same as it did at launch in the US and Canada, but it suddenly got more expensive in Europe and Asia.</p></div>
            </div>
        </a><a href='https://www.apple.com/ipad-10.9/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>iPad 10.9-inch (10th generation)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1EXZ2YHoupp4fMphQjKObPNsveHwJNKf-JUiI4C-RzJVIAtKjKx3uLFgXp7Ah7YDX9HBHOdUU" alt="iPad 10.9-inch (10th generation)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The all-new iPad has an all-screen design, A14 Bionic chip, landscape front camera, and four colors. Works with Apple Pencil and Magic Keyboard Folio.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/technology/gadgets/apple-ipad-pro-2022-launched-in-india-with-apple-m2-soc-price-and-specifications'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>iPad Pro (2022) भारत में हुआ लॉन्च, 2TB स्टोरेज और Apple M2 से है लैस</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="iPad Pro (2022) भारत में हुआ लॉन्च, 2TB स्टोरेज और Apple M2 से है लैस" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IPad Pro (2022) में 5G कनेक्टिविटी दी गई है। इसके अलावा इसमें Wi-Fi 6E भी है। नए टैब के साथ Apple Pencil&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sci-tech/technology/gadgets/apple-launches-redesigned-ipad-and-two-new-ipad-pro-models/article66030646.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple launches redesigned iPad and two new iPad Pro models</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSE4UZc6cjei8eLV71Sgemkf1I2GLnxSukk_n-lUY7MeRBcBR9gR4LILE86VwzALosRS5tDbxP3" alt="Apple launches redesigned iPad and two new iPad Pro models" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While the Pro models will be powered by the M2 chip, the redesigned iPad comes with the A14 Bionic chip.</p></div>
            </div>
        </a><a href='https://www.livemint.com/technology/gadgets/apple-brings-redesigned-ipad-in-india-at-rs-44-900-onwards-details-11666159017779.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple brings redesigned iPad in India at ₹44900 onwards: Details ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRXYiiiZg2qYWswvtvayZhghsuTpIOXk3MLpXWiGuqVqDrVBjBLKW2SjO-FoRNVeHyqoM1zNeMD" alt="Apple brings redesigned iPad in India at ₹44900 onwards: Details ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apple iPad (2022) model has a 10.9-inch Liquid Retina display with 2360x1640-pixel resolution, nearly 4 million pixels, 500 nits of brightness,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/technology/apple-announces-new-ipad-ipad-pro-know-price-specs-availability-details-122101900470_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple announces new iPad, iPad Pro: Know price, specs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Apple announces new iPad, iPad Pro: Know price, specs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The iPad and iPad Pro are powered by Apple A14 Bionic and Apple M2, respectively. both the iPads are up for orders on Apple store online with availability&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/gadgets/story-ipad-pro-2022-launched-know-features-and-specifications-7240126.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>पावरफुल प्रोसेसर के साथ आया ऐपल का iPad Pro 2022, शानदार डिस्प्ले के ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQEH93D_slTMjAg-xkujBLJZmlFYUqP-nIj9AizuodGZYigdur_ngEmraEPgYHZCfNx2NAu3r9-" alt="पावरफुल प्रोसेसर के साथ आया ऐपल का iPad Pro 2022, शानदार डिस्प्ले के ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>आईपैड प्रो (2022) की एंट्री हो गई है। यह दो डिस्प्ले साइज में आता है। कंपनी ने इसे वाई-फाई&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}