import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wendys</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wendys"/>
        <meta name="description" content="Trending News about Wendys" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wendys</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001ce5af-1600.jpg" alt="Wendys"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/news/business/2022/1128/1338682-wendys-to-open-in-ireland/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wendy&#39;s burger chain set to enter Irish market</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR6J496n_QlsLsiOznTTcMxHCDtemGICGSSGYKjQJTZRTisODfm6P0lTKlRGG-QnxpFBxDVfjxt" alt="Wendy&#39;s burger chain set to enter Irish market" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>American hamburger chain Wendy&#39;s has announced plans to enter the Irish market to further expand its presence across Europe.</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/ireland/us-burger-chain-wendys-set-to-open-in-ireland-1398110.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US burger chain Wendy&#39;s set to open in Ireland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQyOsTZdyLFKg42ttQeRLBc3sj1QerNZbEW8zO-pkOopfeVDJ7wpUBi3VzFi8t1rQin9JU9R-va" alt="US burger chain Wendy&#39;s set to open in Ireland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Irish franchise candidates must have &quot;strong operations experience, local development expertise, ambition to grow quickly and a proven track record of growing&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/business/companies/arid-41016446.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US burger chain Wendy&#39;s to open in Ireland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ0UislXs0Owyl8a0UkckGjwUPF4RD-wHmlo2f1sZh48C_Fuc0Zojfkum1EZGAWhrSgJmD-aBbW" alt="US burger chain Wendy&#39;s to open in Ireland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The firm, best known for its made-to-order square hamburgers, reentered the UK market in June 2021 and currently has 25 restaurants there. Worldwide the firm&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/business/2022/11/28/burger-chain-wendys-cooks-up-plans-for-ireland/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Burger chain Wendy&#39;s cooks up plans for Ireland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRPvqKqbQgfob8XpKVZ-8KEFnxFwP6KjLH0U1fIbS2lvOMW_727eedNzZu8bZxeKd0SkIm3bq8o" alt="Burger chain Wendy&#39;s cooks up plans for Ireland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US-owned fast food &#39;actively seeking&#39; Irish franchisee candidates.</p></div>
            </div>
        </a><a href='https://highlandradio.com/2022/11/28/wendys-is-set-to-come-to-ireland/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wendy&#39;s is set to come to Ireland - Highland Radio - Latest Donegal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS03BD_0IGWSUbIvS09ySCesKEDGm8jEtY979s6Nou0qqQyEMMkK3h7kOnxjXKytZouC7PflX1O" alt="Wendy&#39;s is set to come to Ireland - Highland Radio - Latest Donegal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The hamburger chain is best known for its made-to-order square hamburgers and has over 7,000 outlets across the globe including 25 locations in the United&nbsp;...</p></div>
            </div>
        </a><a href='https://www.galwaydaily.com/life-style/food/american-hamburger-chain-wendys-set-to-enter-irish-market/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>American hamburger chain Wendy&#39;s set to enter Irish market ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRlsSaH9n_CR7JZO973jRxf2JCwFlQU2ljwalr19TW6hSwEtCv62DHZIOD7EFrMr-aN4pRAD_gM" alt="American hamburger chain Wendy&#39;s set to enter Irish market ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>American burger chain Wendy&#39;s has announced plans to enter the Irish market as it continues to expand across Europe.</p></div>
            </div>
        </a><a href='https://www.newstalk.com/news/us-burger-chain-wendys-is-coming-to-ireland-1406153'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US burger chain Wendy&#39;s is coming to Ireland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTngtvHuDHIFMVbEsnCuWvxcDEDeZbd6-p7ZpVZDHTLrLW9_CpHnUPZHjgqBAMnpViwerdeYDdX" alt="US burger chain Wendy&#39;s is coming to Ireland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The American brand has over 7000 outlets worldwide and is best known for its made-to-order square hamburgers.</p></div>
            </div>
        </a>
        </Template></>;
}