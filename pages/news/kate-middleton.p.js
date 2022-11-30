import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kate Middleton</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kate Middleton"/>
        <meta name="description" content="Trending News about Kate Middleton" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kate Middleton</h1>
            <Image width={800} height={500} src="https://pagesix.com/wp-content/uploads/sites/3/2022/11/duchess-kate-black-outfit.jpg?quality=75&strip=all&w=1200" alt="Kate Middleton"/>
            <h3>Recent News</h3>
            <a href='https://pagesix.com/2022/11/29/the-one-outfit-kate-middleton-always-has-to-pack-on-a-royal-tour/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The one outfit Kate Middleton always has to pack on a royal tour</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSrpR9QUA8WB8LkNwK8YqOMASiEwi29s9VHdwdswEf3ExJRXNJn-Cd54ZB5bnpPGyFX8G5NPkwg" alt="The one outfit Kate Middleton always has to pack on a royal tour" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The custom started after Queen Elizabeth II made a rare royal fashion snafu — she traveled to Kenya in 1952 without mourning dress and her father, King George&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/lifestyle/uk-news/2022/11/28/6384dfa3ca47415d168b45e7.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kate Middleton and Prince William&#39;s USA trip details revealed</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQoRZVgs4Lb_3imVoUHG_Lnm2n9sVtsmYjcvAUu8v2E68atdCBEULHL2JPLgTv_COU1212T8hUG" alt="Kate Middleton and Prince William&#39;s USA trip details revealed" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The details of Prince William and Kate Middleton&#39;s trip to the United States of America have been revealed as they are set to make an official visit to the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wickedlocal.com/story/regional/massachusetts/2022/11/29/prince-william-kate-middleton-royal-visit-somerville-cambridge-harvard-earthshot-award-nov-2022/69682205007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prince William, Kate Middleton coming to Boston Nov. 30 for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqW1OsbqFy_M7Q7Nac2BqCnXHuVew4Qe-_L3W_W5tsp5gkoXe7kTgWYqpWaRjZR4DfmL08B7QE" alt="Prince William, Kate Middleton coming to Boston Nov. 30 for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prince William and Kate Middleton will visit the Boston area this week. They aren&#39;t the only famous people to stop by for the &quot;Earthshot&quot; awards.</p></div>
            </div>
        </a><a href='https://www.elle.com/culture/celebrities/a42096168/kate-middleton-prince-william-not-seeing-meghan-markle-prince-harry-us-trip/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kate Middleton and Prince William Reportedly No Longer Planning ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcROgsmPAx_zT6qhMBg2Ajl47VVl4RX49TG_EENH7XTvs-acJHi2dCK5rwqU_MoWUCGqq423KYD-" alt="Kate Middleton and Prince William Reportedly No Longer Planning ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kate Middleton and Prince William will return to the U.S. next week to visit Boston for the Earthshot Prize awards ceremony, but despite Meghan Markle and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wmur.com/article/prince-william-princess-kate-boston-visit-preview/42096832'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>William and Kate, prince and princess of Wales, visiting Boston this ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSq0mBC7FqWts44Zw_13rqa1XfP-yhY6qMH68bwIjagBIe9_A2ND9eHIXDB5U9kjDvSO6eCH1Pk" alt="William and Kate, prince and princess of Wales, visiting Boston this ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Preparations are underway in Boston for the arrival of the prince and princess of Wales, who are expected to touch down in the city on Wednesday.</p></div>
            </div>
        </a><a href='https://www.hellomagazine.com/fashion/royal-style/20221129158376/does-kate-middleton-require-black-outfit-boston-tour/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Kate Middleton has to pack black mourning outfit for Boston tour</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSeWI27G98Fq2L5MjBUTNFHGST5YDqHzDsL-g5UT-w6A2Ku0o-NYXKM5xv-czNjJtFLpPJTagHV" alt="Why Kate Middleton has to pack black mourning outfit for Boston tour" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Princess of Wales joined her husband the Prince of Wales to attend his Earthshot Prize awards ceremony being hosted by the US city of Boston.</p></div>
            </div>
        </a><a href='https://www.hellomagazine.com/royalty/20221129158319/kate-middleton-prince-william-us-tour-boston-travel-royal-doctor/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kate Middleton &amp; Prince William&#39;s US tour: Their unusual travel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR2amODU8WSCH4MlAcbc6MEbiXgvGzJElntt0pLmgGiOSAtLyUIDorxquMgv1d13M6FJ9zJncff" alt="Kate Middleton &amp; Prince William&#39;s US tour: Their unusual travel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kate Middleton and Prince William&#39;s US tour: Their surprising travel companion for trip to Boston is revealed.</p></div>
            </div>
        </a><a href='https://www.foxnews.com/entertainment/prince-william-kate-middleton-have-no-plans-see-meghan-markle-prince-harry-during'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prince William, Kate Middleton have &#39;no plans&#39; to see Meghan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQa6E2wdkvAlPzQMsT-81ihSGM7j_5dJmm62T5YdCjgbnvTZ5wVEw0RrLKUK629jc6ytGApXq9t" alt="Prince William, Kate Middleton have &#39;no plans&#39; to see Meghan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Duke and Duchess of Sussex are expected to be in New York shortly after the Prince and Princess of Wales touch down in Boston, Massachusetts,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cambridge-news.co.uk/news/uk-world-news/kate-middleton-shares-unexpected-ancestry-25627594'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kate Middleton shares her unexpected ancestry</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcReglKtQBcEYjMaedj-Jv1mEZEk7bwlRYEs2UFhAPmE3Z9qHDzw0yZFBU4auoh8T5NpzSrcu5Eq" alt="Kate Middleton shares her unexpected ancestry" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Princess of Wales once let it slip that her ancestors were rare-breed goat farmers.</p></div>
            </div>
        </a><a href='https://www.justjared.com/2022/11/29/catherine-princess-of-wales-aka-kate-middleton-must-always-travel-with-this-1-outfit/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Catherine, Princess of Wales (aka Kate Middleton) Must Always ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSO7ibRgpqJGTVVp3nhRNxv4-CGbAXtw1JkQObO5V7-FwQ2_QONu6sDc1s5FqFfldRLMHVpR3ST" alt="Catherine, Princess of Wales (aka Kate Middleton) Must Always ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A royal history expert is now revealing that the Princess will be traveling with 1 outfit in particular, and likely brings it with her on any overnight trip.</p></div>
            </div>
        </a>
        </Template></>;
}