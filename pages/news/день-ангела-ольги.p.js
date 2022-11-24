import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День ангела ольги</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День ангела ольги"/>
        <meta name="description" content="Trending News about День ангела ольги" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День ангела ольги</h1>
            <Image width={800} height={500} src="https://radiotrek.rv.ua/uploads/media/12/b6/12b60db12cfcfec1e11a59bdc82a1ffe_orig.jpg" alt="День ангела ольги"/>
            <h3>Recent News</h3>
            <a href='https://radiotrek.rv.ua/news/23-listopada-hto-sogodni-svyatkuie-den-angela_298874.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>23 листопада: Хто сьогодні святкує День ангела?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQfeyShA52jpg9fPp6ghQkivMTr3ud16M1LxObKXpofsOL4NHNX7LCKQ2Ec7_eS0bmmuebggGHy" alt="23 листопада: Хто сьогодні святкує День ангела?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Привітання! Сьогодні, 23 листопада, День ангела святкують власники таких імен: Ганна, Борис, Георгій, Денис, Єфрем, Іван, Костянтин, Михайло, Микола,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}