import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ajay Devgn</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ajay Devgn"/>
        <meta name="description" content="Trending News about Ajay Devgn" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ajay Devgn</h1>
            <Image width={800} height={500} src="https://images.news18.com/ibnkhabar/uploads/2022/10/Ajay-Devgn-Education-Qualification-166638213016x9.jpg" alt="Ajay Devgn"/>
            <h3>Recent News</h3>
            <a href='https://hindi.news18.com/photogallery/education/celeb-education-bollywood-actor-ajay-devgn-education-qualification-thank-god-release-date-4782269.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celeb Education: ग्रेजुएट हैं अजय देवगन, बॉलीवुड में प्रैंक मास्टर के तौर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRfztFWORwc4c5WSkxgClSj4Gk3GWfhphGcy_wme9BnRvFG16QkyXqHRUvjFnAznR6Pmj24JnWN" alt="Celeb Education: ग्रेजुएट हैं अजय देवगन, बॉलीवुड में प्रैंक मास्टर के तौर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Celeb Education, Ajay Devgn Education Qualification: बॉलीवुड के लोकप्रिय एक्टर अजय देवगन (Bollywood Actor Ajay Devgn)&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}