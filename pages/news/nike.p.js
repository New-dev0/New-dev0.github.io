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
            <Image width={800} height={500} src="https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_620%2Cx_2421%2Cy_1344/MTk0MDA5MTUxMjU5NTUxMjM3/usatsi_19499859.jpg" alt="Nike"/>
            <h3>Recent News</h3>
            <a href='https://www.si.com/fannation/sneakers/news/gregg-berhalter-wears-exclusive-nike-shoes-at-world-cup'>
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
        </a><a href='https://www.sportskeeda.com/pop-culture/5-best-nike-air-force-1-colorways-released-40th-anniversary-celebrations-sneaker-model'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5 best Nike Air Force 1 colorways released for 40th anniversary ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFnpu0KKim29gxl2ahosBOs7dEVNZpFjCzTshtQuq1Jp-ijLMVDojCT9wc_NG24nNUHTugdfr4" alt="5 best Nike Air Force 1 colorways released for 40th anniversary ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nike offers new and innovative sneaker designs quite often, but there are only a few, such as Air Force 1 and Dunk Low shoes, that have received innumerable&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fool.com/investing/2022/11/25/nike-is-going-all-in-on-web3-heres-how-investors-c/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nike Is Going All In on Web3. Here&#39;s How Investors Can Benefit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQP5Wnbt_NT8RevWBVZzus1-40Mlw0nB3Rpmq14pNv09QYBQ55J3qUazURZZAQFuex29Kk7I0mQ" alt="Nike Is Going All In on Web3. Here&#39;s How Investors Can Benefit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The launch of .Swoosh will serve as a hub for all of Nike&#39;s virtual apparel and digital assets. Users will be able to purchase Nike brand clothing and shoes for&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}