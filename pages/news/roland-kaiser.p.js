import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Roland Kaiser</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Roland Kaiser"/>
        <meta name="description" content="Trending News about Roland Kaiser" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Roland Kaiser</h1>
            <Image width={800} height={500} src="https://static.schlager.de/uploads/2022/08/www.schlager.de-h-02111576-scaled-e1661426056736.jpg" alt="Roland Kaiser"/>
            <h3>Recent News</h3>
            <a href='https://www.schlager.de/news/2022/12/08/roland-kaiser-tochter-annalena-arbeitet-mit-papa-zusammen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roland Kaiser: Tochter Annalena arbeitet mit Papa zusammen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT40DZwpNjJYtH2ObB9Y68ZE8DssXmBv9DHbMT9F7aBDNJrMtZgX7LThbRbivJQj0XmbkUlwadI" alt="Roland Kaiser: Tochter Annalena arbeitet mit Papa zusammen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Roland Kaiser ist eine Ikone des deutschen Schlagers. Seine Tochter Annalena will zwar nicht singen, aber trotzdem Karriere machen. Wie? Lesen Sie hier!</p></div>
            </div>
        </a>
        </Template></>;
}