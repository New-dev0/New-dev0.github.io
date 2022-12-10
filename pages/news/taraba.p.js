import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Taraba</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Taraba"/>
        <meta name="description" content="Trending News about Taraba" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Taraba</h1>
            <Image width={800} height={500} src="https://dailypost.ng/wp-content/uploads/2020/05/taraba.jpg" alt="Taraba"/>
            <h3>Recent News</h3>
            <a href='https://dailypost.ng/2022/12/09/unity-of-kwararafa-descendants-not-political-taraba-council-of-chiefs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Unity of Kwararafa descendants not political – Taraba Council of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR6uV1oEw3uYqy3o6iU0KdqTPzFsf8JsA3TMDt2ULd2wqWpXMFqyhTDsDr7s_97esRqpNAoupig" alt="Unity of Kwararafa descendants not political – Taraba Council of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Chairman of the Taraba State Council of Chiefs, Manu Ishaku Adda Ali, has said the unity of Kwararafa descendants across the country is not political.</p></div>
            </div>
        </a>
        </Template></>;
}