import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Apple Black Friday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Apple Black Friday"/>
        <meta name="description" content="Trending News about Apple Black Friday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Apple Black Friday</h1>
            <Image width={800} height={500} src="https://images.macrumors.com/t/Re_p42G3wFtPXljLnQlOdGxnapI=/2500x/article-new/2022/11/General-Black-Friday-Deals-2022-Green.jpg" alt="Apple Black Friday"/>
            <h3>Recent News</h3>
            <a href='https://www.macrumors.com/2022/11/25/apple-black-friday-deals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>All the Apple Black Friday Deals You Can Still Get</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPxzdSoAbqSr-5fIXpVnVwRUTDQvTNr5K_vOwLgGYjcoLo0tuEHsUmQEeD007jHG3TbldgYIKg" alt="All the Apple Black Friday Deals You Can Still Get" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday is winding down for 2022, but many Apple products are still seeing major discounts. In this article, you&#39;ll find every Apple device...</p></div>
            </div>
        </a><a href='https://www.wired.com/story/apple-black-friday-deals-2022-1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>32 Best Apple Black Friday Deals (2022): Apple Watch, iPads, AirPods</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMvgHRIpmOLsIDafPWnCQ2d-mpdeNp-5e7Ndju3e-ms9gUwsIeiewBuCWFuqvJ2y_zgEVCX0gf" alt="32 Best Apple Black Friday Deals (2022): Apple Watch, iPads, AirPods" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Need a new Apple Watch or iPhone case? Now&#39;s the time to snag one with Apple&#39;s Black Friday Deals.</p></div>
            </div>
        </a><a href='https://www.today.com/shop/apple-black-friday-2022-t270589'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>21 Apple Black Friday 2022 deals to shop right now: AirPods, iPads ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQFbIzZ8WMsqEX5thT4nJIVkasy5L_FV2uhC8Vja8KLXK-jUk-4Lx32Qd7qTMY4rVuaDJsTSV53w" alt="21 Apple Black Friday 2022 deals to shop right now: AirPods, iPads ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Discover the best Apple Black Friday deals live right now. Shop products from AirPods, Apple Watches, iPads and more.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/essentials/best-black-friday-deals-apple-watch-these-watches-have-never-been-cheaper-2022-11-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday deals on Apple Watch: These watches have never ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYru7MGnrSyfXMSGNn3zk2dd19riYjJqaiufi2cEi6PODZafSOkyT_tj9jqAFNYzL4L_04oQ3Q" alt="Best Black Friday deals on Apple Watch: These watches have never ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Forget the Apple Store. The best deals on Apple tech this Black Friday are at Walmart and Amazon. That&#39;s especially true for Apple Watches: We spotted the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/essentials/best-black-friday-deals-on-apple-airpods-apple-earbuds-are-their-lowest-price-ever-2022-11-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday deals on Apple AirPods: Apple earbuds are their ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTyHY9H4PAEON08JlKVoVYElu3he8m4exCrEUlIpDG5i4Unfl06M881igwFNw22A4fPBTXOnegC" alt="Best Black Friday deals on Apple AirPods: Apple earbuds are their ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CBS Essentials is created independently from the CBS News staff. We may receive commissions from some links to products on this page. Promotions are subject to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/essentials/best-black-friday-deals-on-apple-ipad-tablet-amazon-walmart-sale-2022-11-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday deals on Apple iPad: Get best-ever pricing on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSVw6kZYzs8UzWvn_ms_eui0nV6lQiG3Cx-44_-QARtOYvG8iXu-Ie88EUoiourJb2tVbXeLgwk" alt="Best Black Friday deals on Apple iPad: Get best-ever pricing on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We found the best Black Friday deals on all Apple iPad models, including the new-for-2022 Apple iPad Pro 6.</p></div>
            </div>
        </a><a href='https://www.mentalfloss.com/posts/best-apple-black-friday-deals-amazon'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 15 Best Apple Black Friday Deals On Amazon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRoIrfVKzF1naYIXsKKlKKa6dIqSFKlF9bMkYsHkrHKrt2AgQM5KD1efEtibGpcyoMdhgNkT3a4" alt="The 15 Best Apple Black Friday Deals On Amazon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon has got some of the best prices of the year on the Apple products the loved&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/forbes-personal-shopper/2022/11/25/ipad-black-friday-deals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday iPad Deal: Score The Apple Tablet For $270 Right Now</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROUV2NOp_1gL57rM7qQVMpawEAEQes32qKcOQjWfxK5sfiuD2Ne1tFr5BPV9-tkWM0zK0vMp5P" alt="Black Friday iPad Deal: Score The Apple Tablet For $270 Right Now" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday is by far one of the best sale events of the year. Get the 9th generation Apple iPad for only $270 from Amazon.</p></div>
            </div>
        </a><a href='https://arstechnica.com/gadgets/2022/11/best-black-friday-apple-deals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The best Black Friday deals for Apple devices</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTcsbzIDzH_wVakqoS4FaN8RaoOWrtq7ccErKGymjUNK2K0_cWeQ7Uv129Fe-ipsDafr8TYO9ql" alt="The best Black Friday deals for Apple devices" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apple devices are notoriously expensive, and you typically don&#39;t see many discounts throughout the year. Fortunately, Black Friday brings notable Apple deals&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ign.com/articles/apple-black-friday-deal-apple-watch-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Get an Apple Watch for Only $149 With This Walmart Black Friday ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSq4SJStC1qAguDVI7jTCV7IROWdQ2vtZuOt9xZZtjxZFsO_XftUkAvIaKXEOP-jxXed5-qIabP" alt="Get an Apple Watch for Only $149 With This Walmart Black Friday ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Apple Watch SE sports a gorgeous Retina OLED display. It&#39;s powered by the same S5 chipset that you&#39;d find in the Apple Watch 5. Its sleek aluminum casing is&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}