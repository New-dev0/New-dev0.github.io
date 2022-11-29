import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eddy Mitchell</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eddy Mitchell"/>
        <meta name="description" content="Trending News about Eddy Mitchell" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eddy Mitchell</h1>
            <Image width={800} height={500} src="https://www.objeko.com/wp-content/uploads/2022/11/B9729071856Z.1_20211121184422_000G4GJCMUJ3.1-0.png" alt="Eddy Mitchell"/>
            <h3>Recent News</h3>
            <a href='https://www.objeko.com/people/eddy-mitchell-fait-son-mea-culpa-apres-avoir-atomise-la-star-academy-je-regrette/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eddy Mitchell fait son mea-culpa après avoir atomisé la Star ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQbGocSGOAEzmSfj_na11lSylNmtB3s5YWdrUFNi0z5BHowgvwb2vd597rLoCXBaKWHa2UtvzaG" alt="Eddy Mitchell fait son mea-culpa après avoir atomisé la Star ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Star Academy : Eddy Mitchell n&#39;a pas eu que des propos élogieux envers l&#39;école d&#39;artistes. En effet, on revient sur ses mots assez cashs.</p></div>
            </div>
        </a>
        </Template></>;
}