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
                <h3>Amazon to shut down food delivery service in India</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ9B094P5nCDwiyWHdqh57x6FLmA8sspUocODiqykx7ylkC9sk9yOawY37Le-vDvMgKlUzFB2Ct" alt="Amazon to shut down food delivery service in India" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Restaurant partners will have access to Amazon tools and reports till January 2023.</p></div>
            </div>
        </a><a href='https://www.jagran.com/uttar-pradesh/agra-city-fast-food-how-to-develop-food-habits-in-your-child-jagran-special-23226860.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fast Food: बच्चाें के शरीर में नहीं आ रही ताकत, फास्ट फूड भी है कुपाेषण का ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRwM5NVtwcQfIWk_BBvTxNWPzjaPYVwuhlzPvQ5z6lyMQffLaVY0MYjIij7BTZllrU-wzOVHHKk" alt="Fast Food: बच्चाें के शरीर में नहीं आ रही ताकत, फास्ट फूड भी है कुपाेषण का ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fast Food फास्ट फूड के सेवन से बच्चे हो रहे कुपोषित। छह माह से 23 माह तक के 10.6 प्रतिशत बच्चों&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/lifestyle/brunch/rude-food-by-vir-sanghvi-india-s-10-best-young-chefs-101669393481398.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rude Food by Vir Sanghvi: India&#39;s 10 Best Young Chefs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7CmQAOqxo_z_-MMrkCq2HssWfYBhtnK0Y9Dou_Nk7yyYKI-l9cKMXF2xt-055WpwXN0HzlMnq" alt="Rude Food by Vir Sanghvi: India&#39;s 10 Best Young Chefs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We went past the generation of Ananda Solomon and Manjit Gill. Then we encountered the current generation where Manish Mehrotra is the king and such chefs&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/lifestyle/health/story-healthy-indian-food-breakfast-recipes-to-reduce-weight-7406768.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ब्रेकफास्ट के लिए 20-25 मिनट में बनने वाली इंडियन फूड रेसिपीज, वेट लॉस ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRojzEqOSqnY-iWPon5JdtLTBKVHxK9o393_2py4HnI_VFZi-RYFYann1daMlM-u0vfS3xH1Ezd" alt="ब्रेकफास्ट के लिए 20-25 मिनट में बनने वाली इंडियन फूड रेसिपीज, वेट लॉस ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Best Indian Foods Breakfast : लम्बे समय तक चाय और बिस्किट खाने से डाइजेशन की प्रॉब्लम हो सकती है।</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/companies/amazon-to-shut-its-food-delivery-business-in-india-from-december-29-122112501207_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon to pull down shutters in food-delivery business in India on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQfI3ZONb-FT8G7W8TpSYAZa5Ao9BCKa1UjHTwBEe3EFIJz8Wlt_VW9btmOGh_lTpviRW3331x9" alt="Amazon to pull down shutters in food-delivery business in India on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon Food had onboarded 3000 partners including QSR brands such as McDonald&#39;s and Domino&#39;s Pizza; some 25 people working on the project have all have been&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/business/companies/amazon-to-shut-down-food-delivery-business-in-india-8290221/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>After edtech, Amazon to shut food unit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTkzX5vns_hlOXjyIhEauPgmMhxUhtoMEIszCpL308oG86iDKwPL3fw0_MwDpTgVHEKtGTtKwjf" alt="After edtech, Amazon to shut food unit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The development comes a day after Amazon said that it is shutting down its edtech platform in the country. Globally, the company plans to lay off thousands&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindubusinessline.com/companies/amazon-to-discontinue-food-delivery-business/article66184641.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon to discontinue food delivery business</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwj0Lk_Lm3iStC1QjO34sHr5hf1-iy3grCDyofz08LRrGB8fIwkMlS-yxSXZmUM3h6N8c8lgQ2" alt="Amazon to discontinue food delivery business" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Global e-commerce giant Amazon has decided to discontinue its food delivery service Amazon Food in Bengaluru. While the company did not comment on the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.madhyamam.com/sports/football/qatarworldcup/madhyamam-food-in-ball-carnival-in-vengara-from-december-9-1100408'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>മാധ്യമം &#39;ഫുഡ്​ ഇൻ ബാൾ കാർണിവൽ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRTa_RO0kJnERTWhb5Yw2HF5DWqyKy9auud9TSu_PyqO2wvVy0PFuFZ2_9mQyC8bQvn_zsYlAYS" alt="മാധ്യമം &#39;ഫുഡ്​ ഇൻ ബാൾ കാർണിവൽ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>മ​ല​പ്പു​റം: ലോ​ക​ക​പ്പ്​ ഫു​ട്​​ബാ​ളി​ന്‍റെ തീ​പാ​റു​ന്ന അ​വ​സാ​ന റൗ​ണ്ട്​ മ​ത്സ​ര​ങ്ങ​ൾ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/business/amazon-to-shut-food-delivery-in-india-report-news-240158'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon To Shut Food Delivery In India: Report</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTVYumAKEkyzRoOCl2b0KLGdw9G2guqqJBWivzIXyqQdsJIZYP5rj-Y8x8Dy63ht9bB9DNvbi0N" alt="Amazon To Shut Food Delivery In India: Report" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The business has assured restaurants that it is committed to fulfilling all of its financial and other contractual responsibilities.</p></div>
            </div>
        </a>
        </Template></>;
}