import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>T 20 cricket match</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,T 20 cricket match"/>
        <meta name="description" content="Trending News about T 20 cricket match" /></Head><Template>
            <h1 style={{fontSize: "30"}}>T 20 cricket match</h1>
            <Image width={800} height={500} src="https://www.jagranimages.com/images/newimg/27102022/27_10_2022-woman_t_20_23165918.jpg" alt="T 20 cricket match"/>
            <h3>Recent News</h3>
            <a href='https://www.jagran.com/uttar-pradesh/lucknow-city-senior-women-t20-cricket-match-starts-at-ekana-stadium-from-eight-november-in-lucknow-23165918.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Women T-20 Cricket Match: इकाना स्टेडियम में सीनियर महिलाओं का टी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQMpsHZa7dBAVtC1HO0Ym1j8ccBbr2f0S0P1CdM2xki6c2HaQzqSrEAWaoiLWlmOiaufT9or12Q" alt="Women T-20 Cricket Match: इकाना स्टेडियम में सीनियर महिलाओं का टी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारत रत्न अटल बिहारी वाजपेयी अंतरराष्ट्रीय क्रिकेट स्टेडियम यानी कि इकाना स्टेडियम&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}