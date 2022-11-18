import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Charlize Theron</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Charlize Theron"/>
        <meta name="description" content="Trending News about Charlize Theron" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Charlize Theron</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_news/25C2/production/_127666690_gettyimages-1203620718.jpg" alt="Charlize Theron"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/news/world-africa-63642042'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Charlize Theron condemned for saying Afrikaans is dying language</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQt1IkWRJa0fLiV4A1YsIqf9d9RQwSdARX51H6nLtRvpKXWy84GpxaNstz2WwzTxDkVHxHmfZ4L" alt="Charlize Theron condemned for saying Afrikaans is dying language" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Hollywood star grew up speaking Afrikaans - many fellow South Africans are outraged by her comments.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/world/2022/nov/17/charlize-theron-sparks-anger-after-claiming-afrikaans-facing-oblivion'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Charlize Theron sparks anger after claiming Afrikaans facing oblivion</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQVPZYg_PLQ2szh63ci3T1RXFMYqEnAuohETta2sDIViDgvLA10uqHooObUUzkexOIwIDyGSgdg" alt="Charlize Theron sparks anger after claiming Afrikaans facing oblivion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Charlize Theron has prompted anger in her native South Africa after suggesting that Afrikaans, a language descended from Dutch colonial settlers,&nbsp;...</p></div>
            </div>
        </a><a href='https://ewn.co.za/2022/11/17/nee-man-charlize-actor-slammed-by-fans-for-calling-afrikaans-a-dying-language'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nee man Charlize! Actor slammed by fans for calling Afrikaans a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJfKcn2b44rPeOWRzxWtEieCJ1md7MZd8axJa60HOeAyK9WY3ubHohuFqFfUBADd7oXmdZtO_X" alt="Nee man Charlize! Actor slammed by fans for calling Afrikaans a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Oscar-winning South African actress joked that &#39;there&#39;s about 44 people still speaking it” in an interview with SmartLess podcast.</p></div>
            </div>
        </a><a href='https://www.news24.com/channel/celebrities/local-tv-stars-respond-to-charlize-theron-afrikaans-is-alive-and-kicking-20221117'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Local TV stars respond to Charlize Theron: &#39;Afrikaans is alive and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQbZdpxIZcMj9rUhnxatwMfSHy8BQTSsqPWD4unSNYKT6a0x31eB_QDRfpIMlDIl1ZiVxucy52m" alt="Local TV stars respond to Charlize Theron: &#39;Afrikaans is alive and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A flippant comment made by South African actor Charlize Theron on an American podcast has caused a rumble back home.</p></div>
            </div>
        </a><a href='https://www.iol.co.za/the-star/news/afriforum-slams-charlize-theron-for-proclaiming-the-death-of-afrikaans-a92f312c-7025-4489-8e07-8b5129d64682'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AfriForum slams Charlize Theron for proclaiming the death of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS8j5e95lTvWHMXcMIw6MunccUgSNw-gBIj1gnCfZKgo9j3zadTAx7BgeA0aI0eqULrhFB6gtM2" alt="AfriForum slams Charlize Theron for proclaiming the death of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This comes after Theron, in a recent interview, told the hosts of a popular podcast show that she found Afrikaans to be a dying and unhelpful language.</p></div>
            </div>
        </a><a href='https://www.sapeople.com/2022/11/18/fuming-south-africans-still-crack-lekker-jokes-about-charlize-therons-afrikaans-remarks/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fuming South Africans Still Crack Lekker Jokes About Charlize ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSIBbVXHwYoyzrqyMncvKmG7x1oPAWbPABeFYznVDStBFCjDV6g6X7Qkmwtl8aZWE8yhMi6DfKF" alt="Fuming South Africans Still Crack Lekker Jokes About Charlize ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the podcast, the South African born and raised actress from Benoni teased Arnett for his terrible Afrikaans impersonation, and said: “There&#39;s about 44 people&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timeslive.co.za/tshisa-live/tshisa-live/2022-11-17-watch-5-times-charlize-theron-spoke-dying-language-afrikaans-in-hollywood/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH | 5 times Charlize Theron spoke &#39;dying language&#39; Afrikaans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTzJOailIJxLPyPb4x2usQnitZWYeoZgWwfkHMhuoQYipU1XSqo1eHubtuyGvUBVTUhBYQck4yh" alt="WATCH | 5 times Charlize Theron spoke &#39;dying language&#39; Afrikaans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In 2011, Charlize said it was difficult to be an Afrikaans speaker when there was only one other person who spoke the language around her.</p></div>
            </div>
        </a>
        </Template></>;
}