import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>House of the Dragon Season 2</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,House of the Dragon Season 2"/>
        <meta name="description" content="Trending News about House of the Dragon Season 2" /></Head><Template>
            <h1 style={{fontSize: "30"}}>House of the Dragon Season 2</h1>
            <Image width={800} height={500} src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/10/house-of-the-dragon-matt-smith-emma-darcy-1.jpg" alt="House of the Dragon Season 2"/>
            <h3>Recent News</h3>
            <a href='https://collider.com/house-of-the-dragon-season-2-based-on-fire-blood/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What Might &#39;House of the Dragon&#39; Season 2 Look Like Based on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSED_zZm1RgGUQ0gFIGKKEE0oI-T_IW-O6tE5VE2op38Icw7rb-0Ha6YiRFzNcWmSVd_rpsurmw" alt="What Might &#39;House of the Dragon&#39; Season 2 Look Like Based on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Dance of the Dragons that Martin is referring to is the war of succession between Aegon II (Tom Glynn-Carney) and Rhaenyra Targaryen told in the six&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/paultassi/2022/10/24/everything-we-know-about-house-of-the-dragon-season-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Everything We Know About &#39;House Of The Dragon&#39; Season 2</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSuxFTbWL3DxXd4bWwaU3abpjIy27tmXTXbvBVqNfL3ulr0uzggmzRDk_z7RVKlRYGplPeECd3U" alt="Everything We Know About &#39;House Of The Dragon&#39; Season 2" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>House of the Dragon was renewed for season 2 before the second episode of the series even aired, as it&#39;s the kind of hit HBO wanted, and a revival of the&nbsp;...</p></div>
            </div>
        </a><a href='https://time.com/6224266/house-of-the-dragon-season-2-questions/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>10 Questions &lt;i&gt;House of the Dragon&lt;/i&gt; Season 2 Needs to Answer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRZoegyn-6CDH4aQEHga0gam-u6PQ8HIesCbdEY2b0A4Bh9HTT5EsQSD2RJ2fOicHzmAteHDJbz" alt="10 Questions &lt;i&gt;House of the Dragon&lt;/i&gt; Season 2 Needs to Answer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Will Rhaenyra become the Mad Queen? Who is going to ride that big dragon? And will Aemond tell his family about Lucerys?</p></div>
            </div>
        </a><a href='https://www.ign.com/articles/house-of-the-dragon-season-2-will-feel-like-the-middle-run-of-game-of-thrones'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>House of the Dragon Season 2 Will Feel Like the &#39;Middle Run of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZKOA4-r_OkjFyPwuYjneo_X2nI_nrxHpdnINL2-d4YePxdLpG8_0In60zBHpLXUIhtMW3h5Qx" alt="House of the Dragon Season 2 Will Feel Like the &#39;Middle Run of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>House of the Dragon&#39;s second season may not arrive until 2024, but showrunner Ryan Condal has said that it will feel much more like the &quot;middle run of Game&nbsp;...</p></div>
            </div>
        </a><a href='https://www.denofgeek.com/tv/house-of-the-dragon-season-2-will-finally-address-biggest-fan-complaint/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>House of the Dragon Season 2 Will Finally Address Biggest Fan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQNNCSMElIfYQUjGAo_ul2vv1uTWexcyIp0xcBM2cjVQhr2BefuZt8RRLBE5TKaBPKPJGv-l8Ww" alt="House of the Dragon Season 2 Will Finally Address Biggest Fan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fan backlash comes with the territory of shows like House of the Dragon. Not only does it continue the adaptation of a beloved series by author G.R.R. Martin,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}