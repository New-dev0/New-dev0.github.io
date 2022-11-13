import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eli Lilly</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eli Lilly"/>
        <meta name="description" content="Trending News about Eli Lilly" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eli Lilly</h1>
            <Image width={800} height={500} src="https://imgeng.jagran.com/images/2022/nov/reuterstwitter1668250898039.jpg" alt="Eli Lilly"/>
            <h3>Recent News</h3>
            <a href='https://english.jagran.com/trending/eli-lilly-pharmaceuticals-loses-usd-15-billion-after-fake-accounts-insulin-is-free-tweet-10054157'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eli Lilly Pharmaceuticals Loses $15 Billion After Fake Account&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4Im0kS1dIqJE5o23-RhlOx3ULZIgaAsVg3W7jDckPualbLirN3xHP3tVNOi4sAWxygk0EG7nu" alt="Eli Lilly Pharmaceuticals Loses $15 Billion After Fake Account&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Soon after the paid verification feature for Twitter rolled out, several fake accounts impersonated different brands and celebrities and started posting&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/brucelee/2022/11/12/fake-eli-lilly-twitter-account-claims-insulin-is-free-stock-falls-43/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fake Eli Lilly Twitter Account Claims Insulin Is Free, Stock Falls 4.37%</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDe20pQwzEX-DwtO6fpu6m-oxQqXPY8I1cRLKKVdaVvznH_6Vj_LNJ1-I06DtUN-Wmrbj_3WnZ" alt="Fake Eli Lilly Twitter Account Claims Insulin Is Free, Stock Falls 4.37%" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This week showed what can happen after Elon Musk instituted a new pay $8 and you can get a blue verified check mark from Twitter policy.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/technology/2022/11/12/636fc162e2704e7c2c8b4591.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk costs Eli Lilly millions of dollars because of Twitter&#39;s fake ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWFLSGr_iNJeFXz5AQW9yg7iBKerbD5bOd-4IoJrtjW9nbFKvKkbe2Nv4S0eqYoIwTcPZsGOby" alt="Elon Musk costs Eli Lilly millions of dollars because of Twitter&#39;s fake ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He hasn&#39;t been in charge for long, but Elon Musk has already encountered several problems within Twitter, the platform he recently acquired.</p></div>
            </div>
        </a><a href='https://mashable.com/article/eli-lilly-stock-dip-twitter'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eli Lilly stock hit by a fake company tweet announcing free insulin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQbpnoApK4XqS0WwYAo4oZR3h2xBEqRMkNYTfenCNajjqjANP7bq17lnfVTTG0dM2ibRYDHtOYL" alt="Eli Lilly stock hit by a fake company tweet announcing free insulin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As Elon Musk&#39;s Twitter changes continue to fail, companies and official entities quickly became the targets of impersonation, including pharmaceutical&nbsp;...</p></div>
            </div>
        </a><a href='https://medicaldialogues.in/news/industry/pharma/eli-lilly-gets-cdsco-nod-to-study-anti-diabetic-dulaglutide-102248'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eli Lilly Gets CDSCO Nod To Study Anti-diabetic Dulaglutide</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRY5WJi6dR89lKBIvuY-hawrCwS8-C2lwNWBlJG6tGzgzkLaRI9qtTv0wf4QueJGTx4swzc8FhD" alt="Eli Lilly Gets CDSCO Nod To Study Anti-diabetic Dulaglutide" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New Delhi: Pharmaceutical major, Eli Lilly has got the Subject Expert Committee (SEC) functional under Central Drug Standard Control Organization (CDSCO)&nbsp;...</p></div>
            </div>
        </a><a href='https://inshorts.com/en/news/eli-lilly-loses-$15-billion-in-market-cap-after-tweet-by-fake-account-with-$8-blue-tick-1668239996312'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eli Lilly loses $15 billion in market cap after tweet by fake account ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQx6YpFkz1PjNuwzDoSUkvobem9iXame_qyz5jDV2hC5SF1yt22OK5ehyTWPdv3xMUpXPVtWG2j" alt="Eli Lilly loses $15 billion in market cap after tweet by fake account ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>pharmaceutical giant eli lilly lost over 15 billion in market cap because of a tweet by a fake eli lilly account verified with a 8 blue tick quotwere&nbsp;...</p></div>
            </div>
        </a><a href='https://www.republicworld.com/business-news/international-business/us-pharma-giant-eli-lilly-sheds-billions-because-of-impostors-with-fake-twitter-blue-tick-articleshow.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US pharma giant Eli Lilly sheds billions because of impostors with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7KrW_zu6vRyaLbVm9Zgiqlohv8oREWRDtCdzLxLEhMmLJYNSJEAXAjFZ2xcMrD9B0v-S_UTQB" alt="US pharma giant Eli Lilly sheds billions because of impostors with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US pharma giant Eli Lilly lost billions on Friday as their stock plummeted after a fake Twitter account with a blue tick claimed &#39;insulin is free now.&#39;</p></div>
            </div>
        </a><a href='https://www.insidehook.com/daily_brief/tech/twitter-blue-eli-lilly-stock-price'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter Blue Set Eli Lilly&#39;s Stock Price Plunging This Week</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxBf_2Jvd5Cz5DArDJEl7toouSV0D4N3D_Reb5QyBdd9Jn0seVbLJk_jyTQOqRTKq-uf0GEUio" alt="Twitter Blue Set Eli Lilly&#39;s Stock Price Plunging This Week" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of the most noticeable changes that Elon Musk has implemented as the owner of Twitter was a revamped version of account verification, available to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}