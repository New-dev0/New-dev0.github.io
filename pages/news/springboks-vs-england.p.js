import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Springboks vs England</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Springboks vs England"/>
        <meta name="description" content="Trending News about Springboks vs England" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Springboks vs England</h1>
            <Image width={800} height={500} src="https://www.sarugbymag.co.za/wp-content/uploads/2022/11/Screen-Shot-2022-11-25-at-13.10.34.png" alt="Springboks vs England"/>
            <h3>Recent News</h3>
            <a href='https://www.sarugbymag.co.za/saturday-quiz-boks-vs-england/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saturday Quiz: Boks vs England!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_LD7qsjBqZbW7QkwDRWS1W0LHaWGKvMQqXUOR7gMTtmFklZFscmLn_CerGw9ywncxC7MWG6VE" alt="Saturday Quiz: Boks vs England!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>How well do you know the history of the rivalry between the Springboks and England? Take this quiz to find out! Photo: Twitter/@Springboks.</p></div>
            </div>
        </a>
        </Template></>;
}