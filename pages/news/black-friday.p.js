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
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/26/gettyimages-1064297296_wide-9fec9e5594076616fe5f7128e7818657106eb3ae-s1400-c100.jpg" alt="Black Friday"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/26/1139274449/black-friday-sales-inflation-online-shopping'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday sales rake in a record $9.12 billion from online shoppers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSoOuuOnlV0RztVB5hgW254fXfE3NLrCn8H4Excbfg3yx9M7hzD4321R8Dm8pyzkGhDYT9Auaem" alt="Black Friday sales rake in a record $9.12 billion from online shoppers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>More than 166 million Americans are expected to shop over the five days from Thanksgiving Day through Cyber Monday.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/26/black-friday-online-sales-top-9-billion-in-new-record.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday online sales top $9 billion in new record</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqlX6MzeDkjj72AhotKOyPh2J1IdwSHyO7hXHpr6z5-p_StkUOiWpAhQfn-ZDpfaP-ki4aUoog" alt="Black Friday online sales top $9 billion in new record" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Consumers spent a record $9.12 billion online shopping during Black Friday this year, according to Adobe.</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/money/shopping/2022/11/26/black-friday-2022-online-sales-record/10780279002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>$9.12 billion spent in a day: New Black Friday online spending ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5pQ2GZGB2kZUrdDA1OjgLK6NwjPEabPFIg5noVb0oZyXqq_deb0Zu6lyy3KG_pz7zyk-n8mLt" alt="$9.12 billion spent in a day: New Black Friday online spending ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a good sign for retailers, shoppers spent a record $9.12 billion online during Black Friday, according to Adobe Analytics.</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-25/black-friday-deals-bring-small-crowds-for-us-retailers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Shoppers Kick Off Holiday Season With a Muted Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSmIYUlBVDEGoHNpP-Tc_3ImbmUNBgTJxNKaKf-of87R8bGbM8gumUtuofTl-oyPvuyPwpzMnE0" alt="US Shoppers Kick Off Holiday Season With a Muted Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US retailers discounted heavily on Black Friday to clear out bloated inventories but customers responded with only modest traffic, leaving profitability in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wired.com/story/best-black-friday-laptop-deals-2022-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>68 Best Black Friday Laptop and Home Office Deals (2022): Office ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTvoe-X5r8cpHZvut5yS41ujR-yup8F_zHJrgGrHzqDGu4Mc7woQ6_FfNrzA_DYkPUpdBhwBfp-" alt="68 Best Black Friday Laptop and Home Office Deals (2022): Office ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get discounted office chairs, standing desks, and plenty more to furnish your remote workstation with these Black Friday and Cyber Monday deals.</p></div>
            </div>
        </a><a href='https://www.voanews.com/a/us-black-friday-online-sales-hit-9-billion-despite-inflation/6851317.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Black Friday Online Sales Hit $9 Billion Despite Inflation</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWzDBHhClWJj1zo1kUJ7WZQsu7lvAezy_rPD0qnE_T0EJG_7E9UOnCGv-W6NvwNlc1qrG0ViMD" alt="US Black Friday Online Sales Hit $9 Billion Despite Inflation" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adobe Analytics, which measures e-commerce by analyzing transactions at websites, has access to data covering purchases at 85% of the top 100 internet&nbsp;...</p></div>
            </div>
        </a><a href='https://www.xda-developers.com/best-mouse-keyboard-deals-black-friday-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>10 killer mouse and keyboard deals for Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3BR02U1h-X9wF3HajcTvsDRalMjx_0gOxICsz3sgfvN3wUy61q6UWswjGeC7YKPAXGPBkp9eH" alt="10 killer mouse and keyboard deals for Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Razer Huntsman Elite Gaming Keyboard — $100 ($100 off) &middot; Logitech G Pro Wireless — $88 ($42 off) &middot; Microsoft Bluetooth Keyboard - $19.99 ($30 off) &middot; Logitech K845&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/shelleykohan/2022/11/26/black-friday-traffic-up-29-as-shoppers-return-to-stores/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday Traffic Up 2.9% As Shoppers Return To Stores</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcReoN0IvGLITnhkXiqEtCLxuFJ1_uSARsvchvNU9X89U98UnQzfoJUTm-9XJR-xFEo2SFHuEWt7" alt="Black Friday Traffic Up 2.9% As Shoppers Return To Stores" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Consumers were back in stores on Black Friday as shopper visits increased by 2.9% compared to last year. Consumer sentiment data showed that price,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnet.com/tech/black-friday-sees-record-online-sales-with-deals-still-to-be-had/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday Sees Record Online Sales, With Deals Still Available</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9pO1_96YyvuAj3ZMX38xa3k9yDOMuL6vgm6r5Spt28gBupXB4Gc9tQdi8pKz1yN_8cqAbpNRv" alt="Black Friday Sees Record Online Sales, With Deals Still Available" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It expects Cyber Monday to see the best deals on computers, at 27% off list prices. Appliances, however, will hit 18% off on Thursday, Dec. 1. Cyber Monday is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/essentials/the-best-black-friday-deals-that-you-can-still-get-on-gaming-laptops-and-accessories/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The best Black Friday deals that you can still get on gaming laptops ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5WB3aa26uRxDrrVgldOneXcNKzm_q7DdKyaAuJzKcHRJeIbx8aiP7ORK86i6mudLGNP5ziYb5" alt="The best Black Friday deals that you can still get on gaming laptops ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday is over, but there are still tons of gaming laptop deals available at Walmart, Amazon and Best Buy.</p></div>
            </div>
        </a>
        </Template></>;
}