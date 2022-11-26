import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nike</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nike"/>
        <meta name="description" content="Trending News about Nike" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nike</h1>
            <Image width={800} height={500} src="https://www.masslive.com/resizer/KlpMaTtUS8eDJ-OvKKtVW-vslTU=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/S734REKBAJHZDNQDTSVJC55754.webp" alt="Nike"/>
            <h3>Recent News</h3>
            <a href='https://www.masslive.com/shopping-deals/2022/11/nike-black-friday-sale-get-up-to-60-off-sneakers-hoodies-and-more.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nike Black Friday sale: Get up to 60% off sneakers, hoodies and more</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWisNYCUuq_7JzHqYN6-wDNQdTZMc5pVgk0unSkTD4RVj28S-5iWQa68V-UyKMwYYHKbLxtqSH" alt="Nike Black Friday sale: Get up to 60% off sneakers, hoodies and more" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nike will feature sales on many different sneakers, pants, sports bras and other activewear items. Shoppers can save an extra 20% off select items when they use&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/select/shopping/nike-black-friday-2022-ncna1301114'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Nike Black Friday deals: up to 60% sale ends tonight</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZDZdQ-Oac6RWeD46aTqaP4e0-yedJzV1xhBYYZMVs6QRJu1lWtV-CXTtoLkuthMJcSzlLsp1o2w" alt="Best Nike Black Friday deals: up to 60% sale ends tonight" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nike&#39;s Black Friday sale is on with deals up to 60% off. Grab discounts now on leggings, sneakers, running gear, socks and more.</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/sneakers/news/gregg-berhalter-wears-exclusive-nike-shoes-at-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gregg Berhalter Wears Exclusive Nike Shoes at World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxABiVSI2MGVYaruLCGzovkyyo4p-lgALIyZPxOjp2hmO0HVtrG9iTBgxvNNnWLXmxqGQUIRnP" alt="Gregg Berhalter Wears Exclusive Nike Shoes at World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>USMNT coach Gregg Berhalter wore rare Nike shoes during the FIFA World Cup match against England on November 25.</p></div>
            </div>
        </a><a href='https://sneakernews.com/2022/11/25/nike-zoom-vomero-5-photon-dust-chrome-gridiron-sail-fd0884-025/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nike Zoom Vomero 5 &quot;Photon Dust&quot; FD0884-025 | SneakerNews.com</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRbfj9NJtEOWrGzlChwo38tm2fDpHiI-jaz4jdRCrXXF15oGny3xhpz8XhnFKy-8LDA3JrRa8ww" alt="Nike Zoom Vomero 5 &quot;Photon Dust&quot; FD0884-025 | SneakerNews.com" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thanks to co-signs from A-COLD-WALL* back in 2018, the sneaker has enjoyed a cult-like following amongst fashion enthusiasts over the last handful of years,&nbsp;...</p></div>
            </div>
        </a><a href='https://sneakernews.com/2022/11/25/nike-cortez-grey-navy-fd0653-001/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nike Cortez &quot;Georgetown&quot; FD0653-001 | SneakerNews.com</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQkiZQnpo7WUc3l0x6VFyWs0UE_kOg28-OhvpuMx_pOTGm1YBnmTDJE5v_k9SHC4PbjcAW32ZKN" alt="Nike Cortez &quot;Georgetown&quot; FD0653-001 | SneakerNews.com" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dark navy&#39;s enter the fold through outfitting the smooth leather midfoot Swooshes and “NIKE” branded heel tabs whereas the tucked away insoles proffer a titular&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fool.com/investing/2022/11/25/nike-is-going-all-in-on-web3-heres-how-investors-c/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nike Is Going All In on Web3. Here&#39;s How Investors Can Benefit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQP5Wnbt_NT8RevWBVZzus1-40Mlw0nB3Rpmq14pNv09QYBQ55J3qUazURZZAQFuex29Kk7I0mQ" alt="Nike Is Going All In on Web3. Here&#39;s How Investors Can Benefit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The launch of .Swoosh will serve as a hub for all of Nike&#39;s virtual apparel and digital assets. Users will be able to purchase Nike brand clothing and shoes for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportskeeda.com/pop-culture/5-best-nike-air-force-1-colorways-released-40th-anniversary-celebrations-sneaker-model'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5 best Nike Air Force 1 colorways released for 40th anniversary ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFnpu0KKim29gxl2ahosBOs7dEVNZpFjCzTshtQuq1Jp-ijLMVDojCT9wc_NG24nNUHTugdfr4" alt="5 best Nike Air Force 1 colorways released for 40th anniversary ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nike offers new and innovative sneaker designs quite often, but there are only a few, such as Air Force 1 and Dunk Low shoes, that have received innumerable&nbsp;...</p></div>
            </div>
        </a><a href='https://www.golfmonthly.com/buying-advice/tiger-woods-nike-jumpers-are-50-off-this-black-friday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tiger Woods Nike Jumpers Are 50% Off This Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSnV-ssXM-QuOy_5I6SQVt9Q6DAi2keKwr9kHoT2zWqzRlwbP2TE6kOGp7FzATLeTY5XJyCAXLm" alt="Tiger Woods Nike Jumpers Are 50% Off This Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From jumpers to tee shirts to mock polos, there is an array of clothing for any Tiger Woods fan out there. We&#39;ve listed some of our favorites down below&nbsp;...</p></div>
            </div>
        </a><a href='https://www.coachmag.co.uk/news/hallelujah-nike-black-friday-sale-delivers-but-deals-are-going-fast'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Nike Black Friday Deals With Up To 60% Off</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTCPwy-Ef4D2EuPBYO1yYhu-Iavsct1VnX9NOdAj6MTmDPnBBLsniJFCzD9ePBAkX4ThOB5mCLm" alt="Best Nike Black Friday Deals With Up To 60% Off" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nike&#39;s Black Friday sale has delivered the goods, but stock is flying off the shelves. Skip to the best bits with our top picks.</p></div>
            </div>
        </a><a href='https://www.hitc.com/en-gb/2022/11/26/shoppers-annoyed-as-nike-website-is-down-during-black-friday-2022-sales/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shoppers annoyed as Nike website is down during Black Friday ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwgu3DGtb1yh3X-lb0Mb8fiidrNPmIjNHDKHiyUGrYfkwx31x0bNpZTEcf48iL1SekPH9sqRa7" alt="Shoppers annoyed as Nike website is down during Black Friday ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>People had been waiting for a long time to nab the best deals from Nike during Black Friday 2022, but many of them are left disappointed as the shopping&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}