import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Boston Bruins</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Boston Bruins"/>
        <meta name="description" content="Trending News about Boston Bruins" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Boston Bruins</h1>
            <Image width={800} height={500} src="https://bostonhockeynow.com/wp-content/uploads/sites/3/2021/11/PastrnakAP-scaled.jpg" alt="Boston Bruins"/>
            <h3>Recent News</h3>
            <a href='https://bostonhockeynow.com/2022/12/08/haggs-boston-bruins-must-avoid-bogaerts-situation-with-pastrnak/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Haggs: Boston Bruins Must Avoid Bogaerts Situation With Pastrnak</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWlfVORWUt07FvkHe3VrNhKUjhKNfC5I5ZMo6ak5NIcaI5G_HOJgCyTi23t4RA9f1le1IM63u5" alt="Haggs: Boston Bruins Must Avoid Bogaerts Situation With Pastrnak" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Boston Bruins fans have to be wincing a little bit watching the Xander Bogaerts situation play out with David Pastrnak in his walk year.</p></div>
            </div>
        </a>
        </Template></>;
}