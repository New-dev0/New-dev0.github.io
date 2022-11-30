import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Balenciaga</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Balenciaga"/>
        <meta name="description" content="Trending News about Balenciaga" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Balenciaga</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/11/29/600x338/FiSVlSmX0AAqxvY_1669711887634_1669711898761_1669711898761.jfif" alt="Balenciaga"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/news/world/explained-balenciaga-s-controversial-ad-promoting-child-porn-and-why-is-kim-kardashian-being-criticized-11669707372909.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Explained: Balenciaga&#39;s controversial ad promoting child porn and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQNwL5zfd-VVpSJ0c3b57sAxZ9G-g0LycBKbceyVnJO9-NY7ZOxdHPrgh2-AHkTp6bOfHtdjJqH" alt="Explained: Balenciaga&#39;s controversial ad promoting child porn and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The luxury fashion house Balenciaga is receiving flak for its recent ad featuring children holding teddy bears wearing what critics called bondage gear.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/explained/explained-global/balenciagas-holiday-campaign-controversy-kimkardashian-8294887/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amid backlash for &#39;sexualising kids&#39;, Balenciaga apologises, files ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_0AUMAy25GOXqDQUuIBo9oRov_utbbvO28mrmn4jSuXm9SD3MLUB4lciiyTvZ-mp57t_fRluI" alt="Amid backlash for &#39;sexualising kids&#39;, Balenciaga apologises, files ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The French high-fashion label Balenciaga has recently issued an apology for two of its ad campaigns, and also sued the producers of one. Amid the backlash&nbsp;...</p></div>
            </div>
        </a><a href='https://www.opindia.com/2022/11/lotta-volkova-balenciaga-shoot-children-fashion-industry/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meet Lotta Volkova – The alleged brains behind the controversial ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ3mwsd0_ICYe5e0v5ZPWgkLX9HZJNoGPmAT-ejqogFNsMsqtTJH-g5vENZ7T2USY3cL7pxkBlS" alt="Meet Lotta Volkova – The alleged brains behind the controversial ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter user alleged stylist Lotta Volkova was behind the controversial shoot of luxury brand Balenciaga that has seen a huge backlash online.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/fashion/2022/nov/29/balenciaga-apologises-for-ads-featuring-bondage-bears-and-child-abuse-papers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Balenciaga apologises for ads featuring bondage bears and child ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSid8ii4k-AeB6vnPMfz2Ur2i8dipYUKX20Ngx9hDM9LqN8b8yKgXRNzgsXNVTtgExdtcFm9pbO" alt="Balenciaga apologises for ads featuring bondage bears and child ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brand admits &#39;grievous errors&#39; after backlash to campaigns that included images of children holding BDSM teddies.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/kim-kardashian-speaks-out-against-the-balenciaga-holiday-campaign/slideshow/95860265.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kim Kardashian Speaks Out Against the Balenciaga Holiday ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpHgZpnxNkZphXmFaj6D_sLDiNBWTUd0nHbC_uW9te0aLrOfztvFu_bW_6Khwr_P1TDdqjb84v" alt="Kim Kardashian Speaks Out Against the Balenciaga Holiday ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The reality personality addressed the company&#39;s most recent campaign, which showed kids holding teddy bear bags embellished with bondage gear,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/28/1139499381/balenciaga-north-six-lawsuit-ad-controversy-kim-kardashian'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Balenciaga is suing the producers of its own ad campaign after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR9913QvOg1yXcNhzNdDKTjW_-HJO6N7f0CuDa-7ZiyMlVZI8a54FSDwsbR7PXPlKovmZhvJUTb" alt="Balenciaga is suing the producers of its own ad campaign after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The luxury fashion house is taking legal action against the production company North Six after back-to-back ad campaigns have left the luxury fashion house&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}