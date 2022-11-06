import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Twitter Layoffs</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Twitter Layoffs"/>
        <meta name="description" content="Trending News about Twitter Layoffs" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Twitter Layoffs</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/Explained-global-twitter-1-1.jpg" alt="Twitter Layoffs"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/explained/explained-global/mass-layoffs-twitter-lawsuit-concerns-misinformation-8251767/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mass layoffs at Twitter: The lawsuit, and concerns of increasing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqyx0wmC03LRnNvFD_NaK-Ks1mPXyieh8w8nj5Fduf28ojxzaDxrFKX_8R-38rEM8rQRSIUC2V" alt="Mass layoffs at Twitter: The lawsuit, and concerns of increasing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Why has Twitter fired almost half its employees, what is the lawsuit it has attracted, and what has Elon Musk said?</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/nri/migrate/mass-twitter-layoffs-put-h-1b-visa-holders-in-an-immigration-limbo/articleshow/95319316.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mass Twitter layoffs put H-1B visa holders in an immigration limbo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTt9u7uzoGTN0xKHd0GakHqOvIlCtROoJAJq5gD05OZp71XQk-XwzeBLKkT4_qdWw6bfoueYYBC" alt="Mass Twitter layoffs put H-1B visa holders in an immigration limbo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to a National Foundation for American Policy analysis of US Citizenship and Immigration Services (USCIS) data, there are about 625 to 670 Twitter&nbsp;...</p></div>
            </div>
        </a><a href='https://tech.hindustantimes.com/tech/news/twitter-layoffs-spur-concerns-about-us-midterms-human-rights-71667641428010.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter Layoffs Spur Concerns About US Midterms, Human Rights</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTM_xSZFJUED6fZ2M3lTRLrVtWy3ye-VLRq5rSRiQGYnSNlp7D6s7dAZK-hyAIJAh0Rr5DWROve" alt="Twitter Layoffs Spur Concerns About US Midterms, Human Rights" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elon Musk&#39;s broad-based cuts at Twitter Inc. are leading current and former employees to question whether the social network will have the resources to keep&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sci-tech/technology/no-choice-says-musk-on-worldwide-twitter-layoffs/article66100035.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;No choice&#39;, says Musk on worldwide Twitter layoffs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRbDbT4AHl1y8CU7vQEwJvScpJQzHIO74EgKRxYpHo098HPXygh7UF01cz5f28Hel7ButS55rus" alt="&#39;No choice&#39;, says Musk on worldwide Twitter layoffs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following Elon Musk&#39;s takeover of Twitter, the entire marketing department of India was fired on Friday.</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/technology/top-story/story/jack-dorsey-apologies-for-massive-layoffs-at-twitter-takes-responsibility-351975-2022-11-05'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jack Dorsey apologies for massive layoffs at Twitter, takes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRu6A7wbgmkfwZ0ZTa3TtQgjjJYOtpezzRi3qkm5LUJ8DjknZy2acMNsqNqXLRJc5dwiwkmYvzc" alt="Jack Dorsey apologies for massive layoffs at Twitter, takes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter co-founder Jack Dorsey on Saturday took responsibility for mass layoffs at the company under Elon Musk. Dorsey, in a tweet, apologised and said,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndtv.com/world-news/how-will-twitter-manage-content-moderation-after-layoffs-employee-answers-3493349'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Will Twitter Moderate Content After Mass Layoffs? Employee ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdNaFVY9CgdTVmVzZ7msgkkEWGzsuWox-vuU9mXDsF-VeUkqMFbHuAZMUdLSw8U3_5Ey2aHSOx" alt="How Will Twitter Moderate Content After Mass Layoffs? Employee ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter sacked nearly half of its 7500 employees a week after billionaire Elon Musk acquired the microblogging platform.</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/tech-and-auto/elon-musk-twitter-employee-layoff-reason-rjv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter Layoffs: ट्विटर में कर्मचारियों की छंटनी की Elon Musk ने बतायी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQl_kBsH_n9wRaTJ7M4fF2G018JjQXKaeF4NVpKCTqApMb_EHCp5_7n7DiiDJnpEQGGu5L1d4i6" alt="Twitter Layoffs: ट्विटर में कर्मचारियों की छंटनी की Elon Musk ने बतायी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elon Musk Explain Twitter Layoffs Reason: ट्विटर का अधिग्रहण करने के बाद कर्मचारियों की छंटनी के फैसले&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/business/business-diary/twitter-layoffs-employees-getting-fired-from-twitter-are-getting-this-compensation-know-what-musk-said'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter Layoffs: ट्विटर से बाहर किए जाने वाले कर्मचारियों को मिल रहा इतना ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcThs2Gwehdl41Db6seb-6MVNXno6iX8zY6DyqYNOc8-4Fb2UaB_jngJGwRIKugdxL9ZVW-ohveL" alt="Twitter Layoffs: ट्विटर से बाहर किए जाने वाले कर्मचारियों को मिल रहा इतना ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Layoffs in Twitter: ट्विटर में छंटनी की खबरों के बीच एलन मस्क ने कहा है कि यह दुख की बात है कि&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/business/elon-musk-twitter-employees-layoff-on-severance-being-offered-for-3-months-twitter-chief-reveals-in-a-tweet-2252918'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter Layoffs: ट्विटर से निकाले गए कर्मचारियों को कितना मिल रहा है ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTRbFmIMEwi7aymjPlQULwu1E4MotAt6WhYnWNp8ptT4InxQCxAiK2Q0l24lQJbUcR8K0JAIbtZ" alt="Twitter Layoffs: ट्विटर से निकाले गए कर्मचारियों को कितना मिल रहा है ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elon Musk के ट्विटर में आने से पहले 7500 कर्मचारी काम कर रहे थे. लेकिन बड़ी संख्या में&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/business/biz-twitter-lay-off-elon-musk-tweet-company-loosing-4-million-dollar-per-day-23183484.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter Layoffs: ट्विटर में छंटनी पर बोले मस्क- नहीं बचा कोई विकल्प ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRnLI6EFgmt3jek36ln8tBNnm6kShl_dA7QuH6W651lajMpg0g1Q7GbBMlflSgSTLUTe7Edl-8Bdw" alt="Twitter Layoffs: ट्विटर में छंटनी पर बोले मस्क- नहीं बचा कोई विकल्प ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter Layoffs News ट्विटर में छंटनी के बाद कंपनी के नए बास एलन मस्क ने ट्वीट कर इस फैसले का&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}