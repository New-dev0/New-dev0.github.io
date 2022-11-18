import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hakeem Jeffries</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hakeem Jeffries"/>
        <meta name="description" content="Trending News about Hakeem Jeffries" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hakeem Jeffries</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221117141427-hakeem-jeffries-1115.jpg?c=16x9&q=w_800,c_fill" alt="Hakeem Jeffries"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/17/politics/hakeem-jeffries-next-democratic-leader/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Democrats poised to pick Hakeem Jeffries as Nancy Pelosi&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSbvGI2gE5qjCm_ggnmCN3A9WRtWHvHHR07U3CrQlte7GS-CokyaGSDARs_CHDEs5UDF73_6QYk" alt="Democrats poised to pick Hakeem Jeffries as Nancy Pelosi&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>House Democrats appear likely to choose New York Rep. Hakeem Jeffries to succeed Speaker Nancy Pelosi, a potentially historic move to elect the first Black&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/politics/2022/11/17/hakeem-jeffries-pelosi-house/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Hakeem Jeffries?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFv-txL3psrlHC_bupzaJ0B8qhjVd9_MyCY9_0JWnVf4-UrUjPXjCgenpGusbVRpYcP_cUwJF_" alt="Who is Hakeem Jeffries?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If elected, the 52-year-old chair of the House Democratic Caucus would become the first Black lawmaker to lead a party in Congress.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/17/us/elections/hakeem-jeffries-house-democrats-pelosi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hakeem Jeffries Is Poised to Succeed Nancy Pelosi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-qKoD2dHkzDtt6-VNgvzMVJl_XnZ3zwLBPR29O6ZennzUHovNTEHuaHUA7tafrIKYAdBjl4Kz" alt="Hakeem Jeffries Is Poised to Succeed Nancy Pelosi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mr. Jeffries, a Democrat, would be the first Black politician to head a House or Senate caucus for either major party.</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-us-canada-63665352'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hakeem Jeffries: The Democrat who could succeed Nancy Pelosi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSTU7P2xaP7QYcqwy76e2dhY_vyblLbJnXm47zKZwnL6l39vzeZSO1A_AUNqPmM3ISnLYMb8FEQ" alt="Hakeem Jeffries: The Democrat who could succeed Nancy Pelosi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But he would be minority leader, not speaker. Republicans regained a slim majority in the House of Representatives, the lower chamber of Congress, in last&nbsp;...</p></div>
            </div>
        </a><a href='https://www.axios.com/pro/health-care-policy/2022/11/17/what-to-know-jeffries-health-care'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What to know on Jeffries and health care</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRafM5ovDUHMhBgVkXtkCe0r7JsXIJqqPmUCo6HvtG10G_iqZlm4kPhUA8DI_QMEV5rqSvpYGDu" alt="What to know on Jeffries and health care" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jeffries&#39; current health care staffer has focused on prescription drug cost reform, obesity prevention policy and efforts to protect safety net hospitals, a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/us/hakeem-jeffries-favored-lead-us-house-democrats-after-pelosi-exit-2022-11-17/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hakeem Jeffries favored to lead U.S. House Democrats after Pelosi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHw8fZ1nYmOb6JJCYerLBBEAbxhglZoddHuY7yIHXHJxe-3ANsiF_ZBMr6M8OycSFAVW05D7Kz" alt="Hakeem Jeffries favored to lead U.S. House Democrats after Pelosi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>U.S. House of Representatives Speaker Nancy Pelosi&#39;s decision to step down from her leadership role after her fellow Democrats lost their majority in last&nbsp;...</p></div>
            </div>
        </a><a href='https://abcnews.go.com/Politics/hakeem-jeffries-pelosis-successor-house-democratic-leader/story?id=93489303'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What to know about Hakeem Jeffries, Pelosi&#39;s likely successor as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtycoxlD9W00i1UDgaH3q9JpOmn3Y5wEeyxnsJ_YOXh4OUxfOFQwSkcBo10Ho2WpQapUTrv3s-" alt="What to know about Hakeem Jeffries, Pelosi&#39;s likely successor as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With Nancy Pelosi stepping down, New York Rep. Hakeem Jeffries, chair of the House Democratic Caucus, is her likely successor as Democratic leader.</p></div>
            </div>
        </a>
        </Template></>;
}