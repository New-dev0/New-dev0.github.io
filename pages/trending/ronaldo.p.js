import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ronaldo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ronaldo"/>
        <meta name="description" content="Trending News about Ronaldo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ronaldo</h1>
            <Image width={800} height={500} src="https://spiderimg.amarujala.com/assets/images/2022/09/25/750x506/nations-league-cristiano-ronaldo-ronaldo-ronaldo-injured-portugal-vs-czech-republic-portugal-c_1664101053.jpeg" alt="Ronaldo"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/sports/nations-league-cristiano-ronaldo-was-badly-injured-against-the-czech-republic-blood-came-out-portugal-won'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nations League: चेक गणराज्य के खिलाफ बुरी तरह घायल हुए क्रिस्टियानो ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR7rhChT1BO5kVHXt0Bbt2K1UAIBuP7ikRWC_ISrKQwhK--FuFKO8tIetd-BoieAq_7CEctpl6yvg" alt="Nations League: चेक गणराज्य के खिलाफ बुरी तरह घायल हुए क्रिस्टियानो ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nations League Cristiano Ronaldo was badly injured against the Czech Republic blood came out Portugal won: पुर्तगाल पांच मैच में 10&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}