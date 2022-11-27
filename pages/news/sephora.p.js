import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sephora</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sephora"/>
        <meta name="description" content="Trending News about Sephora" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sephora</h1>
            <Image width={800} height={500} src="https://wwd.com/wp-content/uploads/2022/11/WWD_LeadArt-1sephora-sale.png?w=911" alt="Sephora"/>
            <h3>Recent News</h3>
            <a href='https://wwd.com/shop/shop-beauty/sephora-black-friday-2022-cyber-monday-1235428986/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sephora Black Friday 2022 Sale: Top Deals on Fenty Beauty, Tarte ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSy_ncIE4aoqU6T6mBdSzIKvZ5M4LQtNyT4-xv402nKM6pzS48iirpB9JNBRN0PL1LFzTuJzhUh" alt="Sephora Black Friday 2022 Sale: Top Deals on Fenty Beauty, Tarte ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sephora&#39;s Black Friday 2022 sale has begun with deals on top beauty brands like Fenty Beauty, Urban Decay, Tarte Cosmetics, Tom Ford, Amika, and more for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mlive.com/business/2022/11/find-great-black-friday-beauty-deals-holiday-bundles-at-ulta-beauty-sephora.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Find great Black Friday beauty deals, holiday bundles at Ulta Beauty ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ5jydzkOLvTYzznME4jA5ZnR9HkCHL1vcQ5ty5_i00ow-Ojbb5mF8G_Z_81eaKLy0zAe64ibLj" alt="Find great Black Friday beauty deals, holiday bundles at Ulta Beauty ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stock your beauty essentials and snag gifts for loved ones during Ulta Beauty and Sephora&#39;s Black Friday beauty deals.</p></div>
            </div>
        </a><a href='https://www.allure.com/story/sephora-black-friday-sales-2022-1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>23 Best Sephora Black Friday Sales 2022 to Restock Your Beauty ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdLdSp-SULG4EA5M3kzcxx1gKA0Apbjm8G80foESJYPL0LcTu2nDFnTuGwF89sU3ehyZeXzfZZ" alt="23 Best Sephora Black Friday Sales 2022 to Restock Your Beauty ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The best Sephora sales are going live daily, thanks to the retailer&#39;s Cyber Week savings event. Shop now to spot a slew of deals on Peter Thomas Roth,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.masslive.com/shopping-deals/2022/11/black-friday-beauty-sales-shop-these-products-from-sephora.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday beauty sales: Shop these products from Sephora</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRwH0Tph-v58e1UB37uPw0xcQOuj4d3_dMAB3SgZ9IuzZ9jDrlQhEq95LWuGwcDmyvDo63eqzYY" alt="Black Friday beauty sales: Shop these products from Sephora" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday is here and with the return of the annual shopping holiday, comes with deals and sales. Beauty stores like Sephora are having their own sales&nbsp;...</p></div>
            </div>
        </a><a href='https://www.glamourmagazine.co.uk/article/sephora-black-friday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Sephora Black Friday Deals 2022: Save £££ On Makeup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTY9MUbLJHJfLwgiddipMPdXrgbE8_LPJ8tvzAHF4sJ-wcJEb7d4mSvjDHgp5tcUy1mC7DDHrP" alt="Best Sephora Black Friday Deals 2022: Save £££ On Makeup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Discover the best Sephora Black Friday deals in 2022 and stock up on everything from Dior, Huda Beauty, Elemis, Urban Decay and more.</p></div>
            </div>
        </a><a href='https://www.yahoo.com/lifestyle/epic-new-black-friday-deals-from-sephora-like-drew-barrymores-game-changing-eye-cream-080045167.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Epic New Black Friday Deals from Sephora (like Drew Barrymore&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQSV0cPQxbD_KCofIHgYQm4lSKUWsjMyA279K5vKr4a9EW1E7hGV_f2BLdVbambRaPugeAYBkzZ" alt="Epic New Black Friday Deals from Sephora (like Drew Barrymore&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A photo of Drew Barrymore. Drew Barrymore called the Sunday Riley Autocorrect eye cream a &quot;game-changer.&quot; It&#39;s on sale at Sephora for Black Friday!</p></div>
            </div>
        </a><a href='https://www.popsugar.com/beauty/best-sephora-black-friday-deals-2022-49020963'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shop Sephora Best Black Friday Deals 2022 | POPSUGAR Beauty</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQyz6jktx9OUANz93XjCZfGcmkQriqYgH0PIkoPFp5X99-U9OeQCdBDEk2vtATsEKQ3bnroSNx_" alt="Shop Sephora Best Black Friday Deals 2022 | POPSUGAR Beauty" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We rounded up the best Black Friday deals from Sephora, including discounts on skin care, makeup, hair care, and beauty tools.</p></div>
            </div>
        </a>
        </Template></>;
}