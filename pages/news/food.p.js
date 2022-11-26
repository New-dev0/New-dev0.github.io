import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Food</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Food"/>
        <meta name="description" content="Trending News about Food" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Food</h1>
            <Image width={800} height={500} src="https://techcrunch.com/wp-content/uploads/2022/04/GettyImages-1239588817.jpg?resize=1200,800" alt="Food"/>
            <h3>Recent News</h3>
            <a href='https://techcrunch.com/2022/11/25/amazon-to-shut-down-food-delivery-business-in-india/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon to shut down food delivery business in India</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQzqCpqihckMW66d8aFUSOeIv9vLbZeqEc_jJYzW2i4B8OHXUToljFavcDiP7zKUCQgd9gU197D" alt="Amazon to shut down food delivery business in India" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Customers have been telling us for some time that they would like to order prepared meals on Amazon in addition to shopping for all other essentials. This is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneycontrol.com/news/business/startup/amazon-to-shut-food-delivery-service-in-india-9603441.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon to shut food delivery service in India</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ9B094P5nCDwiyWHdqh57x6FLmA8sspUocODiqykx7ylkC9sk9yOawY37Le-vDvMgKlUzFB2Ct" alt="Amazon to shut food delivery service in India" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Restaurant partners will have access to Amazon tools and reports till January 2023.</p></div>
            </div>
        </a><a href='https://www.jagran.com/uttar-pradesh/agra-city-fast-food-how-to-develop-food-habits-in-your-child-jagran-special-23226860.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fast Food: बच्चाें के शरीर में नहीं आ रही ताकत, फास्ट फूड भी है कुपाेषण का ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRwM5NVtwcQfIWk_BBvTxNWPzjaPYVwuhlzPvQ5z6lyMQffLaVY0MYjIij7BTZllrU-wzOVHHKk" alt="Fast Food: बच्चाें के शरीर में नहीं आ रही ताकत, फास्ट फूड भी है कुपाेषण का ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fast Food फास्ट फूड के सेवन से बच्चे हो रहे कुपोषित। छह माह से 23 माह तक के 10.6 प्रतिशत बच्चों&nbsp;...</p></div>
            </div>
        </a><a href='https://inc42.com/buzz/after-edtech-vertical-amazon-to-now-shut-food-delivery-business-in-india/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon To Shutdown Food Delivery Business In India</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRAZJYcDA_39Wo6wLEzbNN2cRH2xGVKVrCR3aRo-iNdpwsTJjYNx6HFAOwKnKVbnh-DXsekTtbZ" alt="Amazon To Shutdown Food Delivery Business In India" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon is reportedly told restaurants that it will meet all its payments and contractual obligations before winding up operations.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/lifestyle/brunch/rude-food-by-vir-sanghvi-india-s-10-best-young-chefs-101669393481398.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rude Food by Vir Sanghvi: India&#39;s 10 Best Young Chefs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7CmQAOqxo_z_-MMrkCq2HssWfYBhtnK0Y9Dou_Nk7yyYKI-l9cKMXF2xt-055WpwXN0HzlMnq" alt="Rude Food by Vir Sanghvi: India&#39;s 10 Best Young Chefs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We went past the generation of Ananda Solomon and Manjit Gill. Then we encountered the current generation where Manish Mehrotra is the king and such chefs&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/business/amazon-to-shut-down-food-delivery-business-in-india-report-101669394752300.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon to shut down food-delivery business in India: Report</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSdY23-4O_AEnuhCH59P-V9I4VdQl93zxYojJvTrUh4W43AjjI4m6_NlrHkCorbITGOog_CZlLM" alt="Amazon to shut down food-delivery business in India: Report" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon Food, a business the company was trialing in the southern Indian city of Bengaluru, would be discontinued, it said.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/business/companies/amazon-to-shut-down-food-delivery-business-in-india-8290221/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>After edtech, Amazon to shut food unit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTkzX5vns_hlOXjyIhEauPgmMhxUhtoMEIszCpL308oG86iDKwPL3fw0_MwDpTgVHEKtGTtKwjf" alt="After edtech, Amazon to shut food unit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The development comes a day after Amazon said that it is shutting down its edtech platform in the country. Globally, the company plans to lay off thousands&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/business/amazon-to-shut-food-delivery-in-india-report-news-240158'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon To Shut Food Delivery In India: Report</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTVYumAKEkyzRoOCl2b0KLGdw9G2guqqJBWivzIXyqQdsJIZYP5rj-Y8x8Dy63ht9bB9DNvbi0N" alt="Amazon To Shut Food Delivery In India: Report" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The business has assured restaurants that it is committed to fulfilling all of its financial and other contractual responsibilities.</p></div>
            </div>
        </a><a href='https://timesofindia.indiatimes.com/blogs/toi-editorials/be-punchy-on-munchy-processed-food-regulation-is-too-lenient-to-make-a-difference-to-snackings-serious-health-costs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Be punchy on munchy: Processed food regulation is too lenient to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Be punchy on munchy: Processed food regulation is too lenient to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Food regulator FSSAI should cut down on munchies. It&#39;s given the snack industry a long four-year-period before front of packet labelling (FOPL) becomes&nbsp;...</p></div>
            </div>
        </a><a href='https://finance.yahoo.com/news/food-shortages-could-continue-2023-123058552.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>These Food Shortages Could Continue Into 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQf0DU8b0dAQwemJLXVxzRwl8Ueb0YrGx3UfF47sH2LtqAChI7E0LUWPkMNk5mxYBST1FURLeJk" alt="These Food Shortages Could Continue Into 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Persistent supply chain issues, climate change and the Russia-Ukraine war are just some of the reasons why food shortages will likely continue in 2023.</p></div>
            </div>
        </a>
        </Template></>;
}