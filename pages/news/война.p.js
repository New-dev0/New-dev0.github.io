import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Война</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Война"/>
        <meta name="description" content="Trending News about Война" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Война</h1>
            <Image width={800} height={500} src="https://static.gazeta.ua/img/original/avatar/95/95977.jpg" alt="Война"/>
            <h3>Recent News</h3>
            <a href='https://gazeta.ua/ru/blog/58334/cim-zakinchitsya-druga-holodna-vijna'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чем закончится Вторая холодная война</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRSS3I3lRzTqlbl6ifimT-3fQE19-WIulkPdLnxinQk2kpwnzI-kU_S-wo9IUXQ6GPPGEOA4TN0" alt="Чем закончится Вторая холодная война" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У новой холодной войны, в отличие от прошлой, к сожалению, не может быть мирного решения. Холодная война между СССР и Западом была вызвана конфликтом двух&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}