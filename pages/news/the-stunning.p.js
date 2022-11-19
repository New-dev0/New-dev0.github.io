import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The stunning</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The stunning"/>
        <meta name="description" content="Trending News about The stunning" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The stunning</h1>
            <Image width={800} height={500} src="https://i2-prod.belfastlive.co.uk/incoming/article25553004.ece/ALTERNATES/s1200/0_Lisa-Jameson-L-GM-Teeling-Whiskey-Distillery-Bianca-Divito-R-Stained-Glass-Designer-Stained-Glass.jpg" alt="The stunning"/>
            <h3>Recent News</h3>
            <a href='https://www.dublinlive.ie/whats-on/food-drink-news/teeling-whiskey-distillery-unveils-artwork-25552955'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Teeling Whiskey Distillery unveils artwork for stunning new stained ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKvNm3OBaqz3Fk-ru250PsTyOTlM1B-tgZAykyct7UT99xzDj-tIV-JFEcyVq00ibCYoAf1fgk" alt="Teeling Whiskey Distillery unveils artwork for stunning new stained ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Artist Bianca Divito said, “Working with Teeling Whiskey has been such a harmonious collaboration; much like me, they focus on their craft, rooted in tradition&nbsp;...</p></div>
            </div>
        </a><a href='https://carlow-nationalist.ie/2022/11/18/stunning-artwork-brings-a-welcome-splash-of-colour-to-bridewell-lane/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stunning artwork brings a welcome splash of colour to Bridewell Lane</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Stunning artwork brings a welcome splash of colour to Bridewell Lane" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mayor of Carlow Municipal District cllr Fintan Phelan unveils the new artwork at Bridewell Lane, Carlow with artist Gala Hutton and Connie Byrne of Pure&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}