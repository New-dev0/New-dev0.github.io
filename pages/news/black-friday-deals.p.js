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
            <Image width={800} height={500} src="https://assets.bonappetit.com/photos/619cf7d06bfa9b6cf706cd2f/16:9/w_1280,c_limit/EComm_BlackFridayAmazon.jpg" alt="Black Friday deals"/>
            <h3>Recent News</h3>
            <a href='https://www.bonappetit.com/story/black-friday-amazon-kitchen-deals-2022-1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>15 Best Black Friday Amazon Kitchen Deals (2022) to Shop Now</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_qmgSBekfg0cTmq9W27ituPVB07gkV6TOQsX6Zz-99Pn_-3P9iANhUPanFJy5yI5fMzWXoA5u" alt="15 Best Black Friday Amazon Kitchen Deals (2022) to Shop Now" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shop the best Black Friday Amazon deals on Vitamix blenders, Le Creuset Dutch ovens, and Bon Appétit&#39;s favorite air fryer.</p></div>
            </div>
        </a><a href='https://www.aboutamazon.com/news/retail/amazon-black-friday-cyber-monday-deals-2022-echo-kindle-fire-tv-ring'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 11 best Black Friday deals on Amazon devices right now</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWWcxFMzRz1jXLwu83Ce1zs3dueVMLgpJgWtbj4eut2WqKztj1CaZ0w08vWge52dzTo2sfCKXe" alt="The 11 best Black Friday deals on Amazon devices right now" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday 2022 deals are here, including deep discounts on the Echo Show 15, Ring Video Doorbell, Fire TV Stick 4K Max, and other Amazon devices.</p></div>
            </div>
        </a><a href='https://www.wired.co.uk/article/best-black-friday-deals-under-50-uk'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday 2022 Deals Under £50 in the UK: Anker, Logitech ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdO-e_0JhHCCYRUtvD40H21ZQ4dW5bt6-jl9fjXMMthnZLTstKFlmvnk41NqdEXP8WL-7-DHFM" alt="Best Black Friday 2022 Deals Under £50 in the UK: Anker, Logitech ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A collection of affordable gifts ranging from an electric toothbrush to ear pods and smart speakers. ILLUSTRATION: YADI LIU.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/essentials/best-black-friday-deals-on-apple-airpods-apple-earbuds-are-their-lowest-price-ever-2022-11-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday deals on Apple AirPods: Apple earbuds are their ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTyHY9H4PAEON08JlKVoVYElu3he8m4exCrEUlIpDG5i4Unfl06M881igwFNw22A4fPBTXOnegC" alt="Best Black Friday deals on Apple AirPods: Apple earbuds are their ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CBS Essentials is created independently from the CBS News staff. We may receive commissions from some links to products on this page. Promotions are subject to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/business/retail-consumer/more-black-friday-shoppers-return-stores-chasing-deals-2022-11-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thin Black Friday crowds mark U.S. holiday shopping kickoff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1wKgIrHP4y9F1YXumZfXNcJMV8YAPVpbWbITTCa0i2yV6xV-Foqy6lHYgltY-rnpEO6Mc6weM" alt="Thin Black Friday crowds mark U.S. holiday shopping kickoff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thin crowds of inflation-weary consumers hunted for Black Friday deals at stores in big cities including New York, Los Angeles, Chicago and other locales,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wired.com/story/apple-black-friday-deals-2022-1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>32 Best Apple Black Friday Deals (2022): Apple Watch, iPads, AirPods</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMvgHRIpmOLsIDafPWnCQ2d-mpdeNp-5e7Ndju3e-ms9gUwsIeiewBuCWFuqvJ2y_zgEVCX0gf" alt="32 Best Apple Black Friday Deals (2022): Apple Watch, iPads, AirPods" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Need a new Apple Watch or iPhone case? Now&#39;s the time to snag one with Apple&#39;s Black Friday Deals.</p></div>
            </div>
        </a><a href='https://www.wired.com/story/best-amazon-black-friday-deals-2022-1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>69 Best Amazon Deals For Black Friday (2022): iPads, Apple ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSMH9E42F-mTB49w_2y-n0K4E9BfwTvWzVz62wPszwvndHU6OKtNuYgJ6gsywgK1fTF3RwiM3FG" alt="69 Best Amazon Deals For Black Friday (2022): iPads, Apple ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;ve rounded up the best deals on everything you need for the holidays and more, from long-lasting cookware to Apple earbuds.</p></div>
            </div>
        </a><a href='https://www.architecturaldigest.com/story/black-friday-home-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>36 Black Friday Home Deals 2022 You Won&#39;t Want to Miss From ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRDqIu7Rw_j1Jevj0eTkCyyxsxq0pPRRsluy3r1I7_2q9_msl0_KmmGBzkxXw5mhKNkToOu0E3xLQ" alt="36 Black Friday Home Deals 2022 You Won&#39;t Want to Miss From ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From rugs to storage, the best Black Friday home deals are never-ending this year. Shop our favorite picks.</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-25/black-friday-deals-bring-small-crowds-for-us-retailers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Shoppers Kick Off Holiday Season With a Muted Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSmIYUlBVDEGoHNpP-Tc_3ImbmUNBgTJxNKaKf-of87R8bGbM8gumUtuofTl-oyPvuyPwpzMnE0" alt="US Shoppers Kick Off Holiday Season With a Muted Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US Shoppers Kick Off Holiday Season With a Muted Black Friday &middot; Heavy discounts to clear inventory appear to draw small crowds &middot; &#39;I have to spend more for it to&nbsp;...</p></div>
            </div>
        </a><a href='https://nymag.com/strategist/article/strategist-favorite-things-black-friday-deals-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Everything We&#39;ve Written About That&#39;s on Sale for Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRyWSGe5RnYyd2M046tzjbhGjgrkoAuQpU7Vu2kDDIAG3Y1zu35UWm16lDs5ZAicKBLpFdks49c" alt="Everything We&#39;ve Written About That&#39;s on Sale for Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The best discounts in one place for Black Friday 2022, based on items we&#39;ve written about on the Strategist, including Vitamix, Great Jones, Bose, Theragun,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}