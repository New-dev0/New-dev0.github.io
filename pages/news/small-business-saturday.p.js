import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Small Business Saturday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Small Business Saturday"/>
        <meta name="description" content="Trending News about Small Business Saturday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Small Business Saturday</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/small-business-saturday-lead.jpg?c=16x9&q=w_800,c_fill" alt="Small Business Saturday"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/cnn-underscored/deals/best-small-business-saturday-sales-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shop Small Business Saturday 2022 for deals on unique gifts and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSA7KeZTNZapyv6quv4EKZ9UAW0Juppah_gbzSrAsk8_ysmt8sGFtOAcBc53jNaC2BjjIOIfhSz" alt="Shop Small Business Saturday 2022 for deals on unique gifts and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For many, Black Friday conjures an image of throngs of shoppers waiting outside major retailers hoping for deals on big ticket items like TVs and laptops.</p></div>
            </div>
        </a><a href='https://gvwire.com/2022/11/26/small-business-saturday-barber-shop-prospers-on-revitalized-fulton/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Small Business Saturday: Barber Shop Prospers on Revitalized ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmMuiY8To74M1aL5w0P5UAkfZ94ZJH647cf04Tsdi2ozvElXVJOQJXxIIzPkZSaKXCyox5SldZ" alt="Small Business Saturday: Barber Shop Prospers on Revitalized ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today is Small Business Saturday, a day to celebrate and support small businesses and all they do for the greater Fresno community.</p></div>
            </div>
        </a><a href='https://www.mlive.com/news/kalamazoo/2022/11/kalamazoo-residents-visitors-turn-out-downtown-to-support-small-business-saturday.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kalamazoo residents, visitors turn out downtown to support Small ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRWG1KWJMV9EVlwhNTy968n5BXBV3YkEXBksDNZWBRSMSvQZ7zznwCnvYTFY_COwra6ZAgN-6TI" alt="Kalamazoo residents, visitors turn out downtown to support Small ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Representatives from Consumers Energy handed out free $10 certificates, cookies and tote bags to shoppers on Kalamazoo Mall from 11 a.m. to 1 p.m. to encourage&nbsp;...</p></div>
            </div>
        </a><a href='https://www.architecturaldigest.com/story/small-business-saturday-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>17 Small Business Saturday Sales to Support This Weekend</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQFbdJ3Kb0aMSF1NLfuD_zq0jqZhgCgoaTqfdFthXFgGtTtqJ38G5RQBViAnfAeqRNfX8Q_qT76" alt="17 Small Business Saturday Sales to Support This Weekend" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The best shopping Saturday of the year, let&#39;s celebrate some of our favorite brands running promotions for Small Business Saturday.</p></div>
            </div>
        </a><a href='https://www.wdbj7.com/2022/11/26/community-supports-locally-owned-shops-during-small-business-saturday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Community supports locally owned shops during Small Business ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRq8YWcU5C7Lkf2xZw-keLdDI-ZFKEiheGG5-PHu7TFsE7-CZwIxQCFs_hB3XqpKbrJC1wEc1rg" alt="Community supports locally owned shops during Small Business ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Without them, we wouldn&#39;t be in business,” said Smith Mountain Lake Coffee House Co-owner Kevin Gray. The Gray family launched the coffee shop in 2019. And&nbsp;...</p></div>
            </div>
        </a><a href='https://www.inquirer.com/news/small-business-saturday-philadelphia-community-20221126.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>On Passyunk Avenue, Small Business Saturday was a low-key affair ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcStgIezTe-Cukvt09aYQnYBb84vQTj9iJ4ciU9FwZcR_aiySyuwVsWiH7DjiEKHsd1ebC-B5z4B" alt="On Passyunk Avenue, Small Business Saturday was a low-key affair ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The special shopping day, first celebrated nationwide in 2010, was expected to attract more holiday shoppers than Black Friday.</p></div>
            </div>
        </a><a href='https://spectrumnews1.com/ma/worcester/news/2022/11/26/local-alpaca-farm-invites-shoppers-to-a-unique-small-business-saturday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rutland alpaca farm invites shoppers to a unique Small Business ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZh4Un3goGJiIuLug_-T19dzFgcOomztQr3AgZJ5AdFD9MHepzQUOhA_FHOM_sN09aZ5or42_U" alt="Rutland alpaca farm invites shoppers to a unique Small Business ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For people looking to avoid the hustle and bustle of downtown shopping, one local farm offered a unique Small Business Saturday experience.</p></div>
            </div>
        </a><a href='https://www.nbcconnecticut.com/news/local/small-business-saturday-encourages-shoppers-to-support-local-businesses/2923627/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Small Business Saturday Encourages Shoppers to Support Local ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUXHhIaf3EeAp8rD9V4g28vC0UC4G_d8fqQ7MZJMH1WIvqSCsSGtbhEwRuwwJCM6ai5Lwq7mk0" alt="Small Business Saturday Encourages Shoppers to Support Local ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Small Business Saturday is a day for celebrating and supporting locally owned shops. American Express founded the movement in 2010 as a way to give back to.</p></div>
            </div>
        </a><a href='https://www.wcnc.com/article/money/business/small-business/charlotte-offering-plenty-of-shopping-options-for-small-business-saturday/275-0194db26-ebf1-4e3c-9a85-ce0ecb203b09'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Charlotte area offers plenty of shopping options for Small Business ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ37MiQRRVEUote6alNYlGxVonQj3r3ADLyV9mkiJUL3hCspITr1xzuSPZNOKBK-z9J2eTeAK02" alt="Charlotte area offers plenty of shopping options for Small Business ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s a crucial day for some small businesses in our area as many are still recovering from the COVID-19 pandemic.</p></div>
            </div>
        </a><a href='https://www.dakotanewsnow.com/2022/11/26/sioux-falls-community-celebrates-small-business-saturday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sioux Falls community celebrates Small Business Saturday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSaV6t6-9xxTJU6QvL_gdPQIlt7EjdeU_vnWxyDuDh3kmdmhRJI4R7aMsK6D8txy8FfZta3arKm" alt="Sioux Falls community celebrates Small Business Saturday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Business owners throughout Sioux Falls were eager to open their doors today to celebrate Small Business Saturday.</p></div>
            </div>
        </a>
        </Template></>;
}