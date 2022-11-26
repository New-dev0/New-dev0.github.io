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
        </a><a href='https://www.nytimes.com/2022/11/25/business/black-friday-shopping.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday Shoppers Worry About Economy as Retailers Push Sales</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ97Uol0d0I3tl-5XBTiBsVrZ1AVT0D9i0UtwvFfHkhgHoGHqhOcRahLoXn78O0U-AISEbKnmqm" alt="Black Friday Shoppers Worry About Economy as Retailers Push Sales" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday deals returned, drawing shoppers back into stores, but inflation worries left many companies unsure what the holiday shopping season would look&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/business/retail-consumer/more-black-friday-shoppers-return-stores-chasing-deals-2022-11-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday crowds thin despite deals</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1wKgIrHP4y9F1YXumZfXNcJMV8YAPVpbWbITTCa0i2yV6xV-Foqy6lHYgltY-rnpEO6Mc6weM" alt="Black Friday crowds thin despite deals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Inflation-weary shoppers were expected to turn out in record numbers for deals on Black Friday. But thin crowds were seen outside many stores in New York,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.today.com/shop/amazon-black-friday-deals-2022-1125-t270581'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>50+ best Amazon Black Friday deals live updates: AirPods, Olaplex ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQiw3oe2Z2WDuVw2MPL-wrtKsXQFK0a5niMD_7cuWX6pyXd_8zaUY0Y1rJotgSX-e0kZ546B6cz" alt="50+ best Amazon Black Friday deals live updates: AirPods, Olaplex ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon&#39;s 2022 Black Friday sale starts now. We have details on the biggest savings (up to 60%) from brands like Acer, Samsung, Shark, Casper, Revlon and&nbsp;...</p></div>
            </div>
        </a><a href='https://nymag.com/strategist/article/best-black-friday-home-furniture-deals-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 38 Best Black Friday Furniture and Home Deals Right Now</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQVr9ms3Md72T8qJy87kVb1JF6pB_WAxz0FGJpfOT40l7UB4Ui_K2pH7wYmfNC6aQp-qhCIxs8g" alt="The 38 Best Black Friday Furniture and Home Deals Right Now" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But there&#39;s a lot to sort through. As the Strategist&#39;s de facto home writer, I&#39;ve covered my fair share of Black Friday sales in the decor and furniture space&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/25/1139202319/inflation-looms-large-as-black-friday-shoppers-head-to-the-stores'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inflation looms large as Black Friday shoppers head to the stores</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTL-rPjAtnXBHEsb8igquNrtQC1uU7O-gmD7mSYQoIzVgyrtACYs7GpZTa6uAsxiwOpUaMkjt2s" alt="Inflation looms large as Black Friday shoppers head to the stores" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>More than 60% of shoppers say the economy is affecting their holiday plans. Many say they&#39;ll be more selective in their purchases, going for cheaper goods&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ft.com/content/1cf176bf-2d15-4d38-b46a-27a5260c1f0c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday shoppers find deals as US retailers clear inventories</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQw8D-yhL82EnX3p8EDw9Ay-jmIvYkTbA4rJ1kWicGo-4ffSS5jbBer-yHJnZMXbx5q5xihefbS" alt="Black Friday shoppers find deals as US retailers clear inventories" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Price-conscious shoppers are finding fully stocked stores at the start of a US holiday retail season that will test consumers&#39; willingness to keep spending&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wired.com/story/best-black-friday-kitchen-and-home-deals-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>33 Best Kitchen and Home Deals for Black Friday (2022): Cookware ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS3B_DoZ5jJuSRtDz9G_BYiKDJSztzNYz9nCH2Q_rjyDQ5GmznMt3fgd3LV4Xg7WuvlO3Cxs4vF" alt="33 Best Kitchen and Home Deals for Black Friday (2022): Cookware ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Whether you need a new coffee maker or Smart Home gadget, here are the best 2022 Black Friday discounts on brands like All-Clad, KitchenAid and Honeywell.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/business/2022/11/25/black-friday-shopping/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday isn&#39;t what it used to be. Here&#39;s why.</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTSi4DIl7MvfbW8SSwHQfAIpQyjxOmCN98DCtaHEMLNXo4CjUwbBL1SmILRYiiiZgRMxy5db1Eu" alt="Black Friday isn&#39;t what it used to be. Here&#39;s why." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DALLAS — Americans hit malls and big box stores — or just stuck to their shopping apps — in hopes of snagging Black Friday deals as retailers braced for a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}