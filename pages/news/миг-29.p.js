import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>МиГ-29</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,МиГ-29"/>
        <meta name="description" content="Trending News about МиГ-29" /></Head><Template>
            <h1 style={{fontSize: "30"}}>МиГ-29</h1>
            <Image width={800} height={500} src="https://defence-ua.com/media/illustration/articles/6b4638245d57a181.jpg" alt="МиГ-29"/>
            <h3>Recent News</h3>
            <a href='https://defence-ua.com/news/bolgarija_mozhe_vzjati_v_orendu_mirage_2000_rafale_chi_gripen_dlja_zamini_svojih_mig_29-9784.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Болгарія може взяти в оренду Mirage 2000, Rafale чи Gripen для ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTOoIvCkPd__gf6Ut1xPUcFvQ_MOJQ3kVx8bMs5cgbYBRmndW7qSlBx5qZPWcNQMcxHkKq0FNYG" alt="Болгарія може взяти в оренду Mirage 2000, Rafale чи Gripen для ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Уряд Болгарії хоче взяти в оренду винищувачі західного виробництва після того, як в 2023 році їм доведеться списати свої МиГ-29. Ймовірний строк оренди – до&nbsp;...</p></div>
            </div>
        </a><a href='https://mil.in.ua/uk/news/bolgariya-shukaye-vynyshhuvachi-dlya-orendy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Болгарія шукає винищувачі для оренди</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQdB0gCKFiD8xUBdROcp1ps8VBkKwvOqzi-7-UIgH1EcVUhT41dwyWGrvuvhzSVbK7bmfa_7ISG" alt="Болгарія шукає винищувачі для оренди" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За даними Breaking Defense, переговори тривають зі Швецією та Францією. Представник міністерства оборони Болгарії повідомив, що перемовини перебувають на ранніх&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}