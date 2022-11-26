import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Black Friday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Black Friday"/>
        <meta name="description" content="Trending News about Black Friday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Black Friday</h1>
            <Image width={800} height={500} src="https://image.cnbcfm.com/api/v1/image/107157059-1669387437647-gettyimages-1245081353-BLACK_FRIDAY_2022.jpeg?v=1669421655&w=1920&h=1080" alt="Black Friday"/>
            <h3>Recent News</h3>
            <a href='https://www.cnbc.com/2022/11/25/black-friday-online-sales-to-hit-new-record-expected-to-top-9-billion.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday online sales to hit new record, expected to top $9 billion</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQk3nGJscGmTfGWTOKxujJtIsoF9Ot8k5hBzo6iQzllasfcJtu53zAoVNXtHaen0jdaJFthiNF7" alt="Black Friday online sales to hit new record, expected to top $9 billion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday shoppers bought Apple products, espresso machines and gaming consoles, as well as toys from Funko, Hatchimals and Squishmallows.</p></div>
            </div>
        </a><a href='https://www.gsmarena.com/black_friday_deals_roundup-news-56659.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday deals roundup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfZerE6qS-WW9glRSrzelphpbeB_vxWwpN3RAjt-lWvz6tCioAXniPTdklfwhn11fUnG2mQogu" alt="Black Friday deals roundup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;ve curated a list of the best offers for smartphones, tablets, headphones and other gadgets.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/25/economy/black-friday-mall-of-america/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The mall where Black Friday refuses to die</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSNwonj_qWqXzGWK-uqltm23dl-AeDgSZTqRpbA-dPS6CGHRhid2wb5oygn51Kbd_TkBxCyYSYj" alt="The mall where Black Friday refuses to die" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The rise of e-commerce in recent years has taken its toll on in-person shopping, felling brick-and-mortar stores and once popular malls in the process.</p></div>
            </div>
        </a><a href='https://www.wired.com/story/best-black-friday-phone-deals-tablet-watch-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>60 Best Black Friday Phone Deals (2022): Phones, Cases, Tablets ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQy7-D1IYAzPS0N-zAkwrPsbxs1PnfQyJyFuuwb8zPWoTpZsdt-PzE4Ifll29ZRBEdiWwxJeKvU" alt="60 Best Black Friday Phone Deals (2022): Phones, Cases, Tablets ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Treat yourself to a bargain as we serve up a platter of irresistible Black Friday discounts on small screens and mobile accessories.</p></div>
            </div>
        </a><a href='https://www.reuters.com/business/retail-consumer/more-black-friday-shoppers-return-stores-chasing-deals-2022-11-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thin Black Friday crowds mark U.S. holiday shopping kickoff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1wKgIrHP4y9F1YXumZfXNcJMV8YAPVpbWbITTCa0i2yV6xV-Foqy6lHYgltY-rnpEO6Mc6weM" alt="Thin Black Friday crowds mark U.S. holiday shopping kickoff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thin crowds of inflation-weary consumers hunted for Black Friday deals at stores in big cities including New York, Los Angeles, Chicago and other locales,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.today.com/shop/amazon-black-friday-deals-2022-1125-t270581'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>60+ best Amazon Black Friday deals to shop before they&#39;re gone</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTz6r-ASw9SC1hik0EWlLx0OwsdmKyvTTNyo6I0j79rry7SqwoJdTE-B2MZbGCOiggslf_QBmos" alt="60+ best Amazon Black Friday deals to shop before they&#39;re gone" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon&#39;s 2022 Black Friday sale starts now. We have details on the biggest savings (up to 60%) from brands like Acer, Samsung, Shark, Casper, Revlon and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/25/business/black-friday-shopping.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday Shoppers Worry About Economy as Retailers Push Sales</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ97Uol0d0I3tl-5XBTiBsVrZ1AVT0D9i0UtwvFfHkhgHoGHqhOcRahLoXn78O0U-AISEbKnmqm" alt="Black Friday Shoppers Worry About Economy as Retailers Push Sales" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday deals returned, drawing shoppers back into stores, but inflation worries left many companies unsure what the holiday shopping season would look&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-25/black-friday-deals-bring-small-crowds-for-us-retailers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Shoppers Kick Off Holiday Season With a Muted Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSmIYUlBVDEGoHNpP-Tc_3ImbmUNBgTJxNKaKf-of87R8bGbM8gumUtuofTl-oyPvuyPwpzMnE0" alt="US Shoppers Kick Off Holiday Season With a Muted Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US Shoppers Kick Off Holiday Season With a Muted Black Friday &middot; Heavy discounts to clear inventory appear to draw small crowds &middot; &#39;I have to spend more for it to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wired.com/story/best-best-buy-black-friday-deals-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>71 Great Best Buy Black Friday Deals (2022): iPads, Apple Watches ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0ZMMxB-xq8S1q_Ldg47vvmFwTJ7d9T3kPI8nO9Ax91K3fE0OmoaIG5XaRM_f4X53HBH0PNhMF" alt="71 Great Best Buy Black Friday Deals (2022): iPads, Apple Watches ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From iPads to mirrorless cameras, here are the shiniest deals we could find from this popular retailer.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/25/1139202319/inflation-looms-large-as-black-friday-shoppers-head-to-the-stores'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inflation looms large as Black Friday shoppers head to the stores</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTL-rPjAtnXBHEsb8igquNrtQC1uU7O-gmD7mSYQoIzVgyrtACYs7GpZTa6uAsxiwOpUaMkjt2s" alt="Inflation looms large as Black Friday shoppers head to the stores" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>More than 60% of shoppers say the economy is affecting their holiday plans. Many say they&#39;ll be more selective in their purchases, going for cheaper goods&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}