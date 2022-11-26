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
                <h3>Dyson Hair Dryer Black Friday: Save $86 At Best Buy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTfiObAJPb6H0XbWIkoeKtGR0cByESSl_znc4LA2JuRa8ej_11J9R4jzEGTApcWv-LR1ooX2utL" alt="Dyson Hair Dryer Black Friday: Save $86 At Best Buy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After thoroughly testing 10 hair dryers, we named Dyson&#39;s Supersonic hair dryer the best luxury option based on its lightweight design, versatile drying&nbsp;...</p></div>
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
                <h3>Best Dyson Black Friday deals 2022: Vacuums, air purifiers and more</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwF1R3sGgJImJ50yLduZo0B5DuID-mN0JLpOawp3OoRgMoOKO_q47ICHjYxXOYHFnV2t8Ga3rO" alt="Best Dyson Black Friday deals 2022: Vacuums, air purifiers and more" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get Dyson Black Friday deals on bestselling air purifiers and vacuums before they sell out. Shop discounts from Best Buy, Amazon, Target and more.</p></div>
            </div>
        </a><a href='https://www.purewow.com/home/dyson-v8-black-friday-sale'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>We&#39;re Calling It: The Dyson Black Friday Sale Is the Best Time to Buy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmzPvay5Lm2h1G7KASjUi6XTG8xY-UWMqHuMDyx3PtzXaMkcfmotd_mFyvHPgBFfcgjcM2lWjk" alt="We&#39;re Calling It: The Dyson Black Friday Sale Is the Best Time to Buy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Dyson Black Friday sale 2022 features one incredible deal on the Dyson V8, which can suck up everything from stubborn pet hair in your carpets to barely&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hollywoodreporter.com/lifestyle/shopping/best-dyson-deals-sales-1235266466/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Best Dyson Deals to Shop During Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSotAQ5Au1kLBqZw0JqLPn-FmGNEKpEuKWW5n5Cz_7kaaf5RMAdZMnGnwTpjaYnzzc4ESmXoLli" alt="The Best Dyson Deals to Shop During Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;ve rounded up the best sales on Dyson vacuums, Airwrap stylers, air purifiers and more gadgets to shop during Black Friday and Cyber Monday.</p></div>
            </div>
        </a><a href='https://www.albanyherald.com/arena/the-dyson-v8-absolute-cordless-stick-vacuum-is-279-99-at-wayfair/article_ff79fa86-5cb9-5f9c-8ec6-33adaa2c5d5e.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Dyson V8 Absolute Cordless Stick Vacuum is $279.99 at Wayfair!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSlMjW9B0vjQa-IyapuKvi9Kh2DKubuceGf4QTBRk1n-aial4fY4Iu6u_ZUhUWUs3t06XKHeH-R" alt="The Dyson V8 Absolute Cordless Stick Vacuum is $279.99 at Wayfair!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Now&#39;s the time to take advantage of an amazing discount on a popular Dyson stick vacuum!</p></div>
            </div>
        </a>
        </Template></>;
}