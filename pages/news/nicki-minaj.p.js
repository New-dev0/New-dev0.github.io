import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nicki Minaj</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nicki Minaj"/>
        <meta name="description" content="Trending News about Nicki Minaj" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nicki Minaj</h1>
            <Image width={800} height={500} src="https://cdnph.upi.com/collection/fp/upi/13531/270d519a0cba7fb8a00e1f3e102649d2/Nicki-Minaj-turns-40-a-look-back_1_1.jpg" alt="Nicki Minaj"/>
            <h3>Recent News</h3>
            <a href='https://www.upi.com/Entertainment_News/Photos/Nicki-Minaj-turns-40-a-look-back/13531/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nicki Minaj turns 40: a look back - Photos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKUH3TsqGMTG9FMZpEu2q2I42W_JIDxvtlje4pQGRHOtQmftMeg_FFfbTioF8cHpOgWblj7HGJ" alt="Nicki Minaj turns 40: a look back - Photos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rapper and singer Nicki Minaj, best known for her hit songs &quot;Super Bass,&quot; &quot;Chun-Li,&quot; &quot;Anaconda&quot; and more, turns 40 on December 8, 2022.</p></div>
            </div>
        </a><a href='https://www.essence.com/beauty/nicki-minaj-best-hair-moments-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bombshell Batch: Our Favorite Nicki Minaj Hairstyles This Year</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSxYMOPPKEd9yV7tQ9p99bC8XnYfW57H0cHHPV2--pQnhkQ02OPlSTg2DDo6IWGmHNLYF5eEMsU" alt="Bombshell Batch: Our Favorite Nicki Minaj Hairstyles This Year" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ESSENCE celebrates rap artist Nicki Minaj&#39;s 40th birthday with a roundup of Minaj&#39;s best hair moments of the year.</p></div>
            </div>
        </a><a href='https://www.yahoo.com/entertainment/nicki-minaj-years-rap-queen-171001687.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nicki Minaj Through the Years: From Rap Queen to Mom and Beyond</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQEDhjyCYnlmG5OpMyGgL_1o79y3kIRkn6gvPqIIpiu7zEirE1qvCgA21GxePEzsexLDv2ThxEX" alt="Nicki Minaj Through the Years: From Rap Queen to Mom and Beyond" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nicki Minaj made a splash in the music industry with the launch of her rap career — and she has been taking the world by storm ever since.</p></div>
            </div>
        </a><a href='https://www.iheart.com/content/2022-12-08-december-8-in-hip-hop-history-nicki-minaj-is-born/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>December 8 In Hip-Hop History: Nicki Minaj Is Born</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQXzzZEho_7L3I2Euu3FsOhas1gSTY5Cg7B9ryOyHKadETaP9CwxZlen3Gs6mS0VDd7G4R8ic9G" alt="December 8 In Hip-Hop History: Nicki Minaj Is Born" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On December 8, 1982, Onika Tanya Maraj-Petty was born in the Saint James district of Port of Spain, Trinidad and Tobago to parents Robert and Carol Maraj. At&nbsp;...</p></div>
            </div>
        </a><a href='https://madamenoire.com/1330190/nicki-minaj-40th-birthday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>#She&#39;s40 Trends On Twitter As Nicki Minaj Celebrates Her 40th ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRlXGL7V6MtfbXRaBxKPC4b0WG4oqGLDlTOxpg3f7ysMS7GWwDVvV2gPJAcpF9f0oIKgH2Wn1II" alt="#She&#39;s40 Trends On Twitter As Nicki Minaj Celebrates Her 40th ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nicki Minaj celebrated her 40th birthday on Thursday, but some internet trolls were quick to poke fun at the rapper&#39;s age.</p></div>
            </div>
        </a><a href='https://www.intouchweekly.com/posts/nick-minaj-sexiest-outfits-photos-of-the-rappers-sexy-looks/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nicki Minaj&#39;s Sexiest Outfits Will Stop You in Your Tracks: Photos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRowo2mkws2TogQbpdYdLk-8OdrHNahczH_EM9ocVZNjy5hc59ar_75UbgmDtT9_yoale7oJ-RW" alt="Nicki Minaj&#39;s Sexiest Outfits Will Stop You in Your Tracks: Photos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nicki Minaj is the queen of rocking sexy looks! See the rapper&#39;s sexiest outfits on and off the red carpet, here.</p></div>
            </div>
        </a><a href='https://allhiphop.com/news/fans-defend-nicki-minaj-as-fatandforty-shes40-trend-on-rappers-birthday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fans Defend Nicki Minaj As #FatAndForty &amp; #Shes40 Trend On ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRO96KPNihYlRD9V-EIN4wBK46qSN0ozf9-tBt9hV5MWN3p426fJQOnT9VT32LMsTf1i8cT1Uwa" alt="Fans Defend Nicki Minaj As #FatAndForty &amp; #Shes40 Trend On ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Nicki Minaj trolls were out in full force for her 40th birthday, tweeting up a storm using the hashtags #Shes40 and #FatAndForty.</p></div>
            </div>
        </a>
        </Template></>;
}