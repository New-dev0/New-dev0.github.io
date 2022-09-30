import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Match</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Match"/>
        <meta name="description" content="Trending News about Match" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Match</h1>
            <Image width={800} height={500} src="https://spiderimg.amarujala.com/assets/images/2021/12/09/750x506/pele_1639021701.jpeg" alt="Match"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/sports/football/football-players-got-emotional-after-remembering-a-45-year-old-match-with-pele-the-match-was-drawn-2-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Football: पेले के साथ 45 साल पुराना मैच याद कर भावुक हुए फुटबॉल खिलाड़ी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTveC35jE8-aKszrb9hMymwbu_fLw11Zo6haj1zXXIjD_B3T4OPK2GWzvT2Tj0FXw4T-XRkiu4n" alt="Football: पेले के साथ 45 साल पुराना मैच याद कर भावुक हुए फुटबॉल खिलाड़ी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>45 साल पहले हुए इस मैच को देखने के लिए इडेन गार्डन पर 75 हजार से ज्यादा दर्शक मैदान पर&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}