import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sports</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sports"/>
        <meta name="description" content="Trending News about Sports" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sports</h1>
            <Image width={800} height={500} src="https://www.netherlandsandyou.nl/binaries/large/content/gallery/netherlandsandyou/content-afbeeldingen/united-states/new-images/dutch-showcase-cover.png" alt="Sports"/>
            <h3>Recent News</h3>
            <a href='https://www.netherlandsandyou.nl/latest-news/news/2022/10/04/dutch-sports-innovation-showcase'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dutch Sports Innovation Showcase</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ_3jRW_V4yQiR6tSg20v-wC1SGDR08OMnkhym1YsbsejJFbPL7EOxl8cEBspfaRSSwCblWochc" alt="Dutch Sports Innovation Showcase" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sports connect. The Kingdom of the Netherlands and the United States are strong, innovative trade partners in the field of sports. Show options&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/news/11095/12711963/womens-euros-record-breaking-365m-people-watched-tournament'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Women&#39;s Euros: Record-breaking 365m people watched tournament</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQDH_wLu1XqZ7ELWePu6HOyF1sWWaDCRm6S1-Gm4TGJE0A6nwDKUynhuls_KP0L8SM-M3ez2HFc" alt="Women&#39;s Euros: Record-breaking 365m people watched tournament" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There was an average match attendance of 18544 across all games at the Womens Euros, with a total of 574875 spectators; the value of television rights&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/sport-others/sreeshankar-tejaswin-shankar-real-icons-academics-neeraj-chopra-8189510/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sreeshankar and Tejaswin real icons, they combine both academics ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkyE9kC37V-uVdzYGbB_xDsWjXDsABGOOh0xI0U-dHgyq5brJSJuUTnFYLzrP1odRzNYqy4EAc" alt="Sreeshankar and Tejaswin real icons, they combine both academics ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Though I excelled in sports, I could not give much attention to my studies. So both of you are real icons for the youth of this country,&quot; Neeraj Chopra&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/cities/delhi/sports-bike-enthusiast-loving-father-college-topper-friends-and-family-remember-45-year-old-killed-in-hit-and-run-8189995/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sports bike enthusiast, loving father, college topper – friends and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSNs8N0piROQypE_edoRSDKLnnoCf5UuYRBwx2lgzLmATfSkwHixhFTsJaYVQPt3pTB-W8rcNfO" alt="Sports bike enthusiast, loving father, college topper – friends and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rishab Gulshan (45), a director at the Boston Consulting Group, died on Sunday night while returning to his Gurgaon home from a trip to Udaipur with his&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news18.com/news/sports/federation-of-indian-fantasy-sports-onboards-spice-fantasy-as-a-start-up-member-6095761.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Federation of Indian Fantasy Sports Onboards Spice Fantasy as a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSgVcPUDT4JVC-lfbYRQ4MqRUOt8evAVRGylBNM6ComZtS9fn_bsJPRRKfJ7ZASKqWIRl9JsmgK" alt="Federation of Indian Fantasy Sports Onboards Spice Fantasy as a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Federation of Indian Fantasy Sports (FIFS) has onboarded Spice Fantasy, an up-and-coming fantasy sports platform, as its member in the Start-up category.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/jammu-and-kashmir/kathua/sports-kathua-news-jmu2694875164'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>मढ़ीन को हराकर हीरानगर का एलजी रोलिंग ट्रॉफी पर कब्जा</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS0Lan9ifJJcDfSWsKrS3w6vR_Lv_UjrE_Zf3K8lLRaGG48w3ZpIv954v7xRCAFpJ6cdrd2MSEq" alt="मढ़ीन को हराकर हीरानगर का एलजी रोलिंग ट्रॉफी पर कब्जा" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>आठवें ओवर में 62 रनों के स्कोर पहला विकेट गिरने के बाद भी टीम के कप्तान मान&nbsp;...</p></div>
            </div>
        </a><a href='https://indiaeducationdiary.in/siberian-federal-university-333-participants-took-part-in-the-university-sports-conference/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Siberian Federal University: 333 participants took part in the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRPuEjw086ABXG479kkVKy5JGkFa1xpKLRaAN0v6ygr615BOkpEvayPhGFWLlWNwu6eWhtBe1oY" alt="Siberian Federal University: 333 participants took part in the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Science and sport are not a contradictory combination. And here is the evidence — there are 11 sections at the 1st International Scientific-Practical&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}