import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Black Friday deals</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Black Friday deals"/>
        <meta name="description" content="Trending News about Black Friday deals" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Black Friday deals</h1>
            <Image width={800} height={500} src="" alt="Black Friday deals"/>
            <h3>Recent News</h3>
            <a href='https://www.iol.co.za/business-report/economy/look-the-best-deals-from-sas-biggest-retailers-this-black-friday-b0d4f2f4-7daf-47bd-bead-451e0aea16f8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Look: The best deals from SA&#39;s biggest retailers this Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdrndT4DhamdXddQr_22psEAJSuuG5651anmcaG4JMsEG5F-HOuIRs7tT2BBQ5NlrZYf9JqmQj" alt="Look: The best deals from SA&#39;s biggest retailers this Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Instead, many shoppers might be scouring the internet looking for specials on daily essentials. We took a look at offers from Shoprite, Pick n Pay, Spar and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gsmarena.com/black_friday_deals_roundup-news-56659.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday deals roundup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfZerE6qS-WW9glRSrzelphpbeB_vxWwpN3RAjt-lWvz6tCioAXniPTdklfwhn11fUnG2mQogu" alt="Black Friday deals roundup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;ve curated a list of the best offers for smartphones, tablets, headphones and other gadgets.</p></div>
            </div>
        </a><a href='https://www.macrumors.com/2022/11/24/best-black-friday-ipad-deals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday iPad Deals Still Available</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCDKFh69Bj3-AFQopk5rSckDUJn7VvC68wtSczLQV_YLJf-a7PDX9DFu-WKWHf9Wj8qwqpe7y5" alt="Best Black Friday iPad Deals Still Available" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Need Help Deciding? &middot; More Black Friday Deals &middot; iPad &middot; iPad Air (2022) &middot; iPad mini 6 &middot; 11-Inch iPad Pro &middot; 12.9-Inch iPad Pro &middot; Top Rated Comments.</p></div>
            </div>
        </a><a href='https://www.aboutamazon.com/news/retail/amazon-black-friday-cyber-monday-deals-2022-echo-kindle-fire-tv-ring'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 11 best Black Friday deals on Amazon devices right now</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWWcxFMzRz1jXLwu83Ce1zs3dueVMLgpJgWtbj4eut2WqKztj1CaZ0w08vWge52dzTo2sfCKXe" alt="The 11 best Black Friday deals on Amazon devices right now" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday 2022 deals are here, including deep discounts on the Echo Show 15, Ring Video Doorbell, Fire TV Stick 4K Max, and other Amazon devices.</p></div>
            </div>
        </a><a href='https://www.zdnet.com/article/live-blog-black-friday-deals-november-25-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday deals live 2022: 95+ hottest tech sales in real time</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQv5G-MVAtNA1bIfDS3bRO-QHjuu-HzxE8kyebHuj3kKfyiVHWUFZMaYqNBXQanMNTmLB17Oapp" alt="Best Black Friday deals live 2022: 95+ hottest tech sales in real time" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday deals started earlier than ever, with retailers offering the lowest prices of the year. ZDNET is surfacing the latest and best sales online&nbsp;...</p></div>
            </div>
        </a><a href='https://petri.com/best-black-friday-2022-deals-it-pros/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday Hardware and Software Deals for IT Pros</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTo50ctT7XeAhG3JCwmLo81FzG-cHDhjRsv3fhAIIjeugSpsBw7QeotzBIEKlXEIJQb_cqly-YK" alt="Best Black Friday Hardware and Software Deals for IT Pros" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The shopping season is finally here. That&#39;s right, Black Friday deals and offers are already live at popular online retailers such as Amazon, Best Buy,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}