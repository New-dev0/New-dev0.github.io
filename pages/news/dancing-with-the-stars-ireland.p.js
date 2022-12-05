import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dancing with the stars Ireland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dancing with the stars Ireland"/>
        <meta name="description" content="Trending News about Dancing with the stars Ireland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dancing with the stars Ireland</h1>
            <Image width={800} height={500} src="https://i2-prod.rsvplive.ie/news/celebs/article26107930.ece/ALTERNATES/s1200/0_1-Pasquale-La-RoccaJPG.jpg" alt="Dancing with the stars Ireland"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/showbiz/irish-showbiz/dancing-stars-winner-pasquale-la-28645470'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dancing With The Stars winner Pasquale La Rocca &#39;sad&#39; about not ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSH9zmx513I69whGzegB47RdB2YBmVB73LQIWW7-1Ui-Lr2yDj78nNz4gEGXxNBD5RXObSqXEYw" alt="Dancing With The Stars winner Pasquale La Rocca &#39;sad&#39; about not ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The two-time champion, who lifted the glitterball trophy with broadcaster Lottie Ryan and jockey Nina Carberry, won&#39;t be returning when the show airs in January&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}