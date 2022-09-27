import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Croma</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Croma"/>
        <meta name="description" content="Trending News about Croma" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Croma</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/09/26/600x338/Apple-iPhone13_1646912229120_1664189482206_1664189482206.jpg" alt="Croma"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/technology/gadgets/croma-diwali-sale-deals-on-iphone-13-apple-watch-se-and-more-11664186868506.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Croma Diwali Sale: Deals on iPhone 13, Apple Watch SE and more ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSge-KIh7DZo9HdAFh1fXl5LDqN3_-ViB18F9qOS_SMYkSG7YIXz_RgnI-NvA_rQASDOZyPJ89m" alt="Croma Diwali Sale: Deals on iPhone 13, Apple Watch SE and more ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Croma has announced a Diwali festival sale on its platform and it is offering big discounts on smartphones and other electronics. Interestingly, the iPhone&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/technology/apple-iphone-13-diwali-offer-2022-tata-croma-offers-iphone-13-in-festive-sale-for-rs-51990-2514641.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple iPhone 13 Diwali Offer 2022: Tata Croma offers iPhone 13 in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrmMN-nmYtdvsxyUC8lz2soVwLzAFiF7ZJrVEVDtyPrh7-OAYFsNlwfYr38UbBGFBVM0ais_O_" alt="Apple iPhone 13 Diwali Offer 2022: Tata Croma offers iPhone 13 in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The iPhone 13 is available in all colours and those willing to buy it will have to visit Croma.com, the Tata Neu app or Croma offline stores.</p></div>
            </div>
        </a><a href='https://telecomtalk.info/iphone-13-to-come-at-a-special-price-on-croma-and-tata-neu-today-details/572236/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>iPhone 13 to Come at a Special Price on Croma and Tata Neu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSN91B_RGL29Va40dkwUMjm_IuuRIWgn62J0nUSsTdbHGDgNSxfX94I7Mz0rX_2ZyH8715meQHO" alt="iPhone 13 to Come at a Special Price on Croma and Tata Neu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The price of Rs 51999 for the iPhone 13 has been confirmed by Croma. The price of the package includes a number of bank cards and other promotions.</p></div>
            </div>
        </a><a href='https://m.economictimes.com/magazines/panache/croma-announces-rs-18k-price-cut-on-iphone-13-lucrative-deals-on-apple-watch-se-samsung-galaxy-fe-5g/articleshow/94458734.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>iPhone 13 Price: Croma announces Rs 18K price cut on iPhone 13 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTiC2yB5Mj4OPHaSVDMKSwOR68KarYfjWsyLJxU8aMnq_E8BM4XBBivXBOMFl4JXEzm_5Oy2F3G" alt="iPhone 13 Price: Croma announces Rs 18K price cut on iPhone 13 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Apple Watch Se is available at Rs 19990 on Croma.</p></div>
            </div>
        </a><a href='https://www.91mobiles.com/hub/iphone-13-rs-51999-croma-deal-price/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Get iPhone 13 at Rs 51999 on Croma today if you missed Flipkart deal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRq1nXYk124POsXrnxlA2RT0xk4-4j7LavzG_bN9cuzw4Sjn2mmJqdx0A_zzSJMZyppi-IWT2_R" alt="Get iPhone 13 at Rs 51999 on Croma today if you missed Flipkart deal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apple iPhone 13 will be available for a price of Rs 51999 on Croma starting at 4:45 PM IST.</p></div>
            </div>
        </a><a href='https://www.news18.com/news/tech/apple-iphone-13-offer-price-at-rs-51999-on-tata-neu-app-and-croma-how-to-buy-6040483.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple iPhone 13 Offer Price At Rs 51999 On Tata Neu App and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSP0hgnrrNgnCKfvLxNO8SOGJkHttbJIZB9WftbWfWRzw_2GGaL3x4rsidX8nX-dqpVSUDDVz3L" alt="Apple iPhone 13 Offer Price At Rs 51999 On Tata Neu App and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apple iPhones are selling like hot cake this festive season in India, thanks to multiple sales and deal offers. The iPhone 13 has been eyed by quite a few&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bgr.in/best-deals/iphone-13-available-for-as-low-as-rs-51990-in-cromas-festival-of-dreams-sale-1327925/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tata Croma store is offering iPhone 13 for Rs 51 990 Apple Watch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpjJLQYcDC7mpPH0DZrdRq02dLJ_BsOLUXRgvhkvG_SBwBlJcvb2o7CXicGsv9MH_x-AhRdvqg" alt="Tata Croma store is offering iPhone 13 for Rs 51 990 Apple Watch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tata&#39;s Croma store has announced the Festival of Dreams sale on its online and offline platforms where the iPhone 13 costs only Rs 51,990.</p></div>
            </div>
        </a>
        </Template></>;
}