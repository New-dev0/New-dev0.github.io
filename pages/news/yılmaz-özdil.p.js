import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Yılmaz Özdil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Yılmaz Özdil"/>
        <meta name="description" content="Trending News about Yılmaz Özdil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Yılmaz Özdil</h1>
            <Image width={800} height={500} src="https://www.diken.com.tr/wp-content/uploads/2021/10/gunun_11.jpg" alt="Yılmaz Özdil"/>
            <h3>Recent News</h3>
            <a href='https://www.diken.com.tr/yilmaz-ozdil-salondakilerin-suratina-cay-poseti-firlatmayi-bile-dusunemediler-birader/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yılmaz Özdil: Salondakilerin suratına çay poşeti fırlatmayı bile ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRGlmbQDtuu7UsxYweklD5rW0-Gkrz00JN29ob1-g6G-jwB9aM1TN-MdIlCalEgY1xSx7O35Fiz" alt="Yılmaz Özdil: Salondakilerin suratına çay poşeti fırlatmayı bile ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>04/12/2022 - Chp, bilimsel kalkınma vizyonu açıkladı. Gerçekten bu işi bilmiyorlar. Maraş dondurmacıları gibi kafasında püsküllü fesle dolaşan tımarhanelik&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}