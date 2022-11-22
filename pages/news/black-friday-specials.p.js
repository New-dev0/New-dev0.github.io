import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Black Friday specials</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Black Friday specials"/>
        <meta name="description" content="Trending News about Black Friday specials" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Black Friday specials</h1>
            <Image width={800} height={500} src="https://media.architecturaldigest.com/photos/636d09cd76e30f37cfff50e2/16:9/w_1280,c_limit/bfcm-bundle-4.jpg" alt="Black Friday specials"/>
            <h3>Recent News</h3>
            <a href='https://www.architecturaldigest.com/story/best-black-friday-furniture-deals-2022-1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>27 Best Black Friday Furniture Deals 2022 to Outfit Your Space for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJbCkjsUXr-ZOUSfuF0V0T5U42MDGenjKPfCLjx0y0KzjoeR0rqRdGbMd8x2oGo3gtXQDi_gXV" alt="27 Best Black Friday Furniture Deals 2022 to Outfit Your Space for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Enter 2023 with everything your home needs. There are stellar Black Friday furniture deals on everything from sofas and chairs to tables, lamps, and rugs.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/forbes-personal-shopper/2022/11/21/best-black-friday-deals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 34 Best Black Friday Deals That Are Already Live</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQC-08kvZNAQFYhHS2dN2S8rFslxhCe8ILpTUMHjCGSMofrtPG7RcvM8qGKlWT-rQlaswyy0ljR" alt="The 34 Best Black Friday Deals That Are Already Live" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Many of this year&#39;s Black Friday deals have already launched. Here&#39;s your chance to save big on furniture, clothing, electronics and more.</p></div>
            </div>
        </a><a href='https://www.capetownetc.com/events/black-friday-deals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>It&#39;s almost Black Friday. Which deals should you look out for?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTC3qA8ibmCbYRwrnvDF_Kwn7X4Cqzi3dysEQRuYRO75v1fuAvS95IQipW5v6sbxSI4_ypta3vK" alt="It&#39;s almost Black Friday. Which deals should you look out for?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Many retailers have run month-long Black Friday specials, or have week-long deals starting now. There are both online and in-store sales with various&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/cnn-underscored/deals/apple-black-friday-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The best Apple Black Friday deals you can get right now</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQyEyugjmMf4Nir9d4vAH6LY4WmNRcyJSXicTIzdWpqNDDXJzk1ZclLF9R1zd5DnZyq5RY6cKF" alt="The best Apple Black Friday deals you can get right now" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here are the best Apple Black Friday deals we&#39;ve spotted so far, including big savings on MacBooks, AirPods, Apple Watches and more.</p></div>
            </div>
        </a><a href='https://www.wired.com/story/early-target-black-friday-deals-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>55 Early Target Black Friday Deals (2022): Video Games ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJEOfBE_YOEtY4YEex-VAwffRoR-y2-xSErGV0WeX_JELCTYrwUDhNODmnPy-FRDS-YT_r833E" alt="55 Early Target Black Friday Deals (2022): Video Games ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The retailer has a price match guarantee for anything bought until December 24, so get ahead of your holiday shopping list without worry.</p></div>
            </div>
        </a><a href='https://www.cnn.com/cnn-underscored/deals/amazon-black-friday-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>We found the best early Black Friday deals at Amazon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRCDIxVHanKldZa_IE4OCA9j3ekXjRBTmiZv9wKflj3FnuWLRDCj3muHWHNrcoS7bJJwq7mWmEZ" alt="We found the best early Black Friday deals at Amazon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Want more deals? Visit CNN Underscored&#39;s Guide to Black Friday for wall-to-wall coverage of the best discounts to be found during the biggest shopping event&nbsp;...</p></div>
            </div>
        </a><a href='https://nypost.com/2022/11/21/best-coach-black-friday-deals-2022-handbags-shoes-and-more/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Don&#39;t miss the best deals of the Black Friday 2022 Coach sale</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5RVEbKncwOJRvmyDfITjF5WsIierdai8ihR1d07rUmPhPWpnqvVH2iKw_TbBxki9aYr1G27wc" alt="Don&#39;t miss the best deals of the Black Friday 2022 Coach sale" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shop the Coach Black Friday sale for deals on shoes, handbags, accessories and fashions for both men and women, now up to 50% off.</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/money/reviewed/2022/11/21/bed-bath-beyond-black-friday-sale/8303885001/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shop Bed Bath &amp; Beyond Black Friday deals and save up to 50% on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ4mcv-0FWqEqsHM8HB8ZW6ngzw2EjlL5l3BOuVde9SGcPQBdyZSIFfrBYyD2mABeBGCInhINqk" alt="Shop Bed Bath &amp; Beyond Black Friday deals and save up to 50% on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Whether you need home essentials, festive decor or kitchen equipment, these Bed Bath &amp; Beyond Black Friday deals have you covered.</p></div>
            </div>
        </a><a href='https://nymag.com/strategist/article/target-black-friday-sale-best-deals-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>All the Best Target Black Friday Deals</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTe1LRizA6_idF92m5ZBL4Gc4Arc8BR4MHUW7Fgn6WpzHIHIBwKeKwGV-IAY6UQ22Et4WrXU4fp" alt="All the Best Target Black Friday Deals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We found the best home, fashion, toy, and tech deals at Target&#39;s Black Friday sale — including items from brands like KitchenAid, Eufy, iRobot&#39;s Roomba line&nbsp;...</p></div>
            </div>
        </a><a href='https://www.self.com/story/best-amazon-black-friday-deals-2022-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>75 Best Amazon Black Friday Deals to Shop Right Now 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEUzZ9sMg-VjyK3HM6rbdyyZRIG1-EYeFtN0p0rnkUnjGuklf3v9Zb2sq19-Xj0XOKXEbWe0MW" alt="75 Best Amazon Black Friday Deals to Shop Right Now 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shop the best early Amazon Black Friday deals and save on Roomba robot vacuums, air fryers, Fitbit fitness trackers, Revlon dryers, Bose headphones,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}