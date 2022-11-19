import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Özge Yağız</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Özge Yağız"/>
        <meta name="description" content="Trending News about Özge Yağız" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Özge Yağız</h1>
            <Image width={800} height={500} src="https://televizyongazetesi.com/wp-content/uploads/2022/10/baba-21-hakankurtas-ozgeyagiz22e.jpg" alt="Özge Yağız"/>
            <h3>Recent News</h3>
            <a href='https://televizyongazetesi.com/baba-dizisi-zorlanirken-ozge-yagizin-yukselisi-resmen-parliyor/1343353'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Baba dizisi zorlanırken Özge Yağız&#39;ın yükselişi resmen parlıyor!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTALIqWJllZKsSCtVs5usNRkMM3aPUcR5TzqgGpMI-p_M-zN9Qy5GiGjFZYPtdOF0O8WuEslnZO" alt="Baba dizisi zorlanırken Özge Yağız&#39;ın yükselişi resmen parlıyor!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Haluk Bilginer gibi usta bir ismin dizide yer alıyor olması zaten pek çok izleyici için dizinin iddiasını büyütüyordu. Genç kuşağın başarılı isimlerinden Tolga&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}