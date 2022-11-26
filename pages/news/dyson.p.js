import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dyson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dyson"/>
        <meta name="description" content="Trending News about Dyson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dyson</h1>
            <Image width={800} height={500} src="https://photos5.appleinsider.com/gallery/51577-102155-dyson-xl.jpg" alt="Dyson"/>
            <h3>Recent News</h3>
            <a href='https://appleinsider.com/articles/22/11/25/black-friday-sale-knocks-up-to-200-off-select-dyson-vacuums-fans'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday sale knocks up to $200 off select Dyson vacuums, fans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQhm1WRRd8hfFGB1kIEOSa-hZlqxyLWAZ9BjUx5imFgWg_qii_-loXf57q8-uHF2zyv9uzQ_b1h" alt="Black Friday sale knocks up to $200 off select Dyson vacuums, fans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Black Friday sales event is underway at Best Buy, and a selection of Dyson products are available at a discount. Cordless stick vacuums and tower fans&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/forbes-personal-shopper/2022/11/25/dyson-hair-dryer-black-friday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dyson Hair Dryer Black Friday Deal: Save 20% Right Now</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1W1k-8NGHqMH_sflZh5GxIV0F24bFWpNeIx0bvh1lv4zcVmaKlZl1n6CN_CoT1WJj-az_s6q-" alt="Dyson Hair Dryer Black Friday Deal: Save 20% Right Now" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After thoroughly testing 10 hair dryers, we named Dyson&#39;s Supersonic hair dryer the best luxury option based on its lightweight design, versatile drying&nbsp;...</p></div>
            </div>
        </a><a href='https://www.purewow.com/home/dyson-v8-black-friday-sale'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>We&#39;re Calling It: The Dyson Black Friday Sale Is the Best Time to Buy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmzPvay5Lm2h1G7KASjUi6XTG8xY-UWMqHuMDyx3PtzXaMkcfmotd_mFyvHPgBFfcgjcM2lWjk" alt="We&#39;re Calling It: The Dyson Black Friday Sale Is the Best Time to Buy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Dyson Black Friday sale 2022 features one incredible deal on the Dyson V8, which can suck up everything from stubborn pet hair in your carpets to barely&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sfgate.com/shopping/article/dyson-v8-vbsolute-black-friday-deal-17610389.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Get a Dyson V8 Absolute for the lowest price this Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1IywEiE0S9To1_dNkfcpuScU9yOnYqf-h6ZjSgOsvBptGR90H6q44R3Sux34iz-eq9RuuEsSj" alt="Get a Dyson V8 Absolute for the lowest price this Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of the most popular vacuums from Dyson is actually the V8 Absolute Cordless Stick Vacuum, which is on sale during Black Friday for only $279.99 ($220&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/select/shopping/dyson-black-friday-deals-2022-ncna1301146'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Before they&#39;re gone, shop the best Black Friday Dyson deals today</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwF1R3sGgJImJ50yLduZo0B5DuID-mN0JLpOawp3OoRgMoOKO_q47ICHjYxXOYHFnV2t8Ga3rO" alt="Before they&#39;re gone, shop the best Black Friday Dyson deals today" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get Dyson Black Friday deals on bestselling air purifiers and vacuums before they sell out. Shop discounts from Best Buy, Amazon, Target and more.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/essentials/walmart-deals-for-days-score-200-off-the-dyson-v10-absolute-cordless-vacuum-during-black-friday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Walmart Deals for Days: Score $200 off the Dyson V10 Absolute ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_GMc7U59rn5mbFiyu31ENsWEOdHM8s6L8l2pCa288sB2ldSr9WmR9j0mEwi2Xw9EbJcTS8eP-" alt="Walmart Deals for Days: Score $200 off the Dyson V10 Absolute ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Walmart&#39;s best Black Friday 2022 deals are live now -- including this deal on a Dyson V10 Absolute cordless vacuum.</p></div>
            </div>
        </a><a href='https://www.businessinsider.com/guides/deals/dyson-airwrap-black-friday-deal-11-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday Dyson Airwrap deals 2022: Bundles to help you save</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSOMykGd6n4AXq0UwS0FC-8tHUoaKeYRY7HE6T7mWGshQBpJ1TJfiMZsXmhruiFKNcUuvOn_eic" alt="Black Friday Dyson Airwrap deals 2022: Bundles to help you save" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday 2022 Dyson Airwrap deal: A women getting her hair styled at the hair. Dyson/Insider. When you buy through our links, Insider may&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}