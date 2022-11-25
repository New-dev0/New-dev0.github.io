import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>McDonalds</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,McDonalds"/>
        <meta name="description" content="Trending News about McDonalds" /></Head><Template>
            <h1 style={{fontSize: "30"}}>McDonalds</h1>
            <Image width={800} height={500} src="https://peoplesdispatch.org/wp-content/uploads/2022/11/24-11-McDonalds-Workers-Serbia.jpg" alt="McDonalds"/>
            <h3>Recent News</h3>
            <a href='https://peoplesdispatch.org/2022/11/24/solidarity-pours-in-for-workers-of-mcdonalds-in-serbia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Solidarity pours in for workers of McDonald&#39;s in Serbia : Peoples ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZh7GElRc17iBuQC0yFaK9wEn1gHMV8Fdqd5pXWhckdKxH--D0hz1SsqJldtMFwI5AZWDb9xYk" alt="Solidarity pours in for workers of McDonald&#39;s in Serbia : Peoples ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trade unions and progressive political parties in Serbia have extended support and solidarity to the workers of US-based fast food chain McDonald&#39;s who are&nbsp;...</p></div>
            </div>
        </a><a href='https://krdo.com/news/2022/11/24/surprise-delivery-mcdonalds-managers-help-deliver-baby-in-the-restaurant-bathroom/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Surprise delivery: McDonald&#39;s managers help deliver baby in the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Surprise delivery: McDonald&#39;s managers help deliver baby in the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ATLANTA, Georgia (WANF) — Sha&#39;querria Kaigler, Keisha Blue-Murray, and Tunisia Woodward helped to safely deliver a baby at the local Atlanta McDonald&#39;s during&nbsp;...</p></div>
            </div>
        </a><a href='https://muddyrivernews.com/commmunities/adams-county-illinois/quincy/two-quincy-teachers-recognized-as-mcdonalds-outstanding-educators/20221124110000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Two Quincy teachers recognized as McDonald&#39;s outstanding ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRevXw2DBpAxx1BkSd_oBBaNIZBzCR_h8LRRdGh8OhuH6HjksN2nPavZjfqkkZlnxEQYABcY7y-" alt="Two Quincy teachers recognized as McDonald&#39;s outstanding ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>QUINCY — McDonald&#39;s of Quincy director of operations Ashley Orscheln recently recognized Autumn Lomax from Quincy Junior High School and Trudy Willis from&nbsp;...</p></div>
            </div>
        </a><a href='https://www.11alive.com/article/news/local/mcdonalds-baby-girl-little-nugget/85-ebf52abf-42aa-4fc2-99e9-7f707f840668'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;I told my crew, we&#39;re having a baby today&#39; | Employees, fiancé help ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6AzH3V7GgBItEA0Ozbla7UbTuBshOPmzyjWaTpEihN03rVnNiB6jUMAJasXrLRkeNCFJ0Ca4Y" alt="&#39;I told my crew, we&#39;re having a baby today&#39; | Employees, fiancé help ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The couple had just moved to Georgia on Saturday and stayed in an Airbnb about 45 minutes from the hospital.</p></div>
            </div>
        </a>
        </Template></>;
}