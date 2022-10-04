import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Alfaaz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Alfaaz"/>
        <meta name="description" content="Trending News about Alfaaz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Alfaaz</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/10/03/600x338/Alfaaz_1664772921822_1664772935522_1664772935522.jpg" alt="Alfaaz"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/news/india/punjabi-singer-alfaaz-hospitalised-after-attack-honey-singh-says-out-of-danger-now-11664770747910.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Punjabi singer Alfaaz hospitalised after &#39;attack&#39;, Honey Singh says ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpXFtnJNXMf-Kr7-fouhVimu-og61RUa5VDEc_O1afNDg0peg0Kn-FYBOuGucHqRl4AnM-_Ps-" alt="Punjabi singer Alfaaz hospitalised after &#39;attack&#39;, Honey Singh says ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Punjabi singer Alfaaz aka Amanjot Singh Panwar, was rushed to a private hospital in Mohali with injuries after being allegedly rammed into by a vehicle at a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/crime/police-and-intelligence/story/punjab-punjabi-singer-alfaaz-attack-attempt-to-kill-sidhu-moosewala-murder-threats-conspiracy-revealed-police-protection-crime-lno-1549073-2022-10-03'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>पहले हमला... फिर ऊपर चढ़ा दी गाड़ी... जानें, सिंगर अमनजोत उर्फ Alfaaz पर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmYXGNdJDOplf9aOQFwd0uF7Ep9OreBsM-wd8rLzDsswCtzeEl9ejuCS8K-xtbZpgv5ucCFvOh" alt="पहले हमला... फिर ऊपर चढ़ा दी गाड़ी... जानें, सिंगर अमनजोत उर्फ Alfaaz पर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>सिद्धू मूसेवाला हत्याकांड के बाद भी ऐसे मामले थमने का नाम नहीं ले रहे हैं.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/entertainment/bollywood/singer-alfaaz-singh-hospitalised-after-getting-attacked-at-eatery-honey-singh-gives-health-update-8186803/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Singer Alfaaz Singh hospitalised after getting attacked at eatery ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRe6xh6b4L7z6SnA2G6a4TKN-nIihp6TBSWwh8nTdFInnvTL0yF3gtPuCHdxYrSnXlc_WJVg8oY" alt="Singer Alfaaz Singh hospitalised after getting attacked at eatery ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yo Yo Honey Singh&#39;s close friend and singer Alfaaz Singh suffered multiple injuries after a temp traveller hit him on Saturday.</p></div>
            </div>
        </a><a href='https://www.tribuneindia.com/news/punjab/singer-alfaaz-still-serious-yo-yo-honey-singh-seeks-prayers-437724'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Punjabi singer Alfaaz still serious; Yo Yo Honey Singh asks fans to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSrFg6hbBdibdYpGMT7v3cGKvJ3AIRKaKnncnsXTeHc9hVN-RbwsjTJBGG_WIU1SF_9y3e_D7tl" alt="Punjabi singer Alfaaz still serious; Yo Yo Honey Singh asks fans to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Singer-rapper Honey Singh through an Instagram post shared that Punjabi actor-singer Alfaaz was still serious in the ICU of a private hospital.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/india/punjabi-singer-alfaaz-hospitalised-after-being-attacked-accused-vicky-arrested/videoshow/94624310.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Punjabi singer Alfaaz hospitalised after being attacked; accused ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Punjabi singer Alfaaz hospitalised after being attacked; accused ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Punjabi singer Alfaaz&#39;s health condition is stable after he was admitted to a hospital in Mohali on Saturday night, police said on Monday.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cities/others/reversing-vehicle-at-mohali-dhaba-leaves-punjabi-singer-alfaaz-injured-101664731188064.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reversing vehicle at Mohali dhaba leaves Punjabi singer Alfaaz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_9M_8hR6RChu1Uyc6O2YZviYUpxci7ZhsHM7bc5HSEtz6tjLK2phCgpZTzW5RdQtVngowun3J" alt="Reversing vehicle at Mohali dhaba leaves Punjabi singer Alfaaz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The vehicle was being driven by a former employee of the dhaba, who was trying to flee with it over a payment dispute with the eatery&#39;s owner;&nbsp;...</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/entertainment/news-from-bollywood/who-is-punjabi-singer-alfaaz-aka-amanjot-singh-panwar-yo-yo-honey-singh-said-he-is-still-serious-in-icu/articleshow/94615351.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alfaaz Singh: कौन हैं पंजाबी सिंगर अल्फाज सिंह, जिनपर नेकी करने के बदले ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQymDiVpitnzjzVB_xaLV1tW_wcp0jJEqmjOBk6TBu9TtD0Dx9kIKw87H-KnndQZ1REzG-Kd6Xc" alt="Alfaaz Singh: कौन हैं पंजाबी सिंगर अल्फाज सिंह, जिनपर नेकी करने के बदले ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>जानें कौन हैं पंजाबी सिंगर अल्फाज, यो यो हनी सिंह ने बताया कि जानलेवा हमले के बाद&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/movies/regional-cinema/story/punjabi-singer-alfaaz-hospitalised-after-being-attacked-in-mohali-all-you-need-to-know-about-him-2007724-2022-10-03'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Punjabi singer Alfaaz hospitalised after being attacked in Mohali. All ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJyNtk_-hH184LL65wmFI9Naullkqqd4Kv17g-Y5-cQciAU8MygZ4lombOZVQvAdFsXipf0eLU" alt="Punjabi singer Alfaaz hospitalised after being attacked in Mohali. All ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alfaaz was injured after being hit by a vehicle. Here is a look at his life and career.</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/punjab/chandigarh-punjab-punjabi-singer-alfaaz-said-that-not-attacked-but-he-was-injured-in-the-accident-accused-arrested-from-panchkula-4686071.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Punjabi Singer Alfaaz Attacked: पंजाबी सिंगर पर कथित हमले का आरोपी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTgD6JXN5h_3k463sCh3nfP31e6j4xOFofZHEVLdZuobuGfMhW3TCf2_6slOJPpnr1klityyiAQ" alt="Punjabi Singer Alfaaz Attacked: पंजाबी सिंगर पर कथित हमले का आरोपी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Punjabi Singer Alfaaz Attacked: पंजाबी अभिनेता-गायक अमनजोत सिंह पंवार उर्फ अल्फाज ने उन पर हमला होने&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/entertainment/bollywood/after-sidhu-moose-wala-punjabi-singer-alfaaz-attacked-by-goons-honey-singh-shares-post'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Singer Alfaaz: पंजाबी सिंगर अल्फाज पर जानलेवा हमला, हनी सिंह ने पोस्ट ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSU5zeSh_LrCRbOfE4DoA5zNmnzLZFLq2MtOEeqgjbpXFxYo4JtI0f6oQ4im5ZvJeWbvVgjZXTy" alt="Singer Alfaaz: पंजाबी सिंगर अल्फाज पर जानलेवा हमला, हनी सिंह ने पोस्ट ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Singer Alfaaz: पंजाबी सिंगर सिद्धू मूसेवाला की हत्या के सदमे से फैंस अभी उबरे भी नहीं कि&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}