import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rohff</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rohff"/>
        <meta name="description" content="Trending News about Rohff" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rohff</h1>
            <Image width={800} height={500} src="https://www.13or-du-hiphop.fr/wp-content/uploads/2022/11/rohff-maes-45.jpg" alt="Rohff"/>
            <h3>Recent News</h3>
            <a href='https://www.13or-du-hiphop.fr/2022/11/16/rohff-est-une-legende-maes-lui-adresse-un-message/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rohff est une légende, Maes lui adresse un message</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSA3mQemWf9vPEWA1y7WoRu1br2KWC8qrXSW1sGq4khYKJIpYj6f9fFc3rVHznG--izQ7TX4W_7" alt="Rohff est une légende, Maes lui adresse un message" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maes s&#39;adresse à Rohff avec un message puissant Alors que l&#39;amitié entre Booba et Maes a récemment pris fin, les deux rappeurs français sont désormais&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}