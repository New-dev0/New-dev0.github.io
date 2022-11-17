import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Free Fire MAX</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Free Fire MAX"/>
        <meta name="description" content="Trending News about Free Fire MAX" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Free Fire MAX</h1>
            <Image width={800} height={500} src="https://st1.bgr.in/wp-content/uploads/2022/08/Free-Fire-MAX-0.jpg" alt="Free Fire MAX"/>
            <h3>Recent News</h3>
            <a href='https://www.bgr.in/hi/games/free-fire-max-moco-store-live-with-booyah-sparks-and-many-reward-know-here-how-to-get-1341090/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Free Fire MAX में आया नया मोको स्टोर मिल रहे कई धमाल रिवॉर्ड- Free ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQUomapigFuRD_VlKQv3ZquWaHSbKMieAuZgpg1uh1lvdsIiwaYmQv5Vv2BC5Xf5wudapQPw6z2" alt="Free Fire MAX में आया नया मोको स्टोर मिल रहे कई धमाल रिवॉर्ड- Free ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Free Fire MAX में एक नया मोको स्टोर लाइव हो गया है। इसमें प्लेयर्स को फ्री रिवॉर्ड पाने का&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}