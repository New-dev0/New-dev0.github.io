import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Мосэнергосбыт</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Мосэнергосбыт"/>
        <meta name="description" content="Trending News about Мосэнергосбыт" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Мосэнергосбыт</h1>
            <Image width={800} height={500} src="" alt="Мосэнергосбыт"/>
            <h3>Recent News</h3>
            <a href='https://riamo.ru/article/598010/mosenergosbyt-poluchil-status-garantiruyuschego-postavschika-v-istre'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Мосэнергосбыт» получил статус гарантирующего поставщика в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS3Ut1bixshr1k5KtHLvahQwPuB6hqhVuki_BhVrtCZ3mwRd9hlVDffdTKjyG6yZTymM4ppe_lF" alt="«Мосэнергосбыт» получил статус гарантирующего поставщика в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Подписывайтесь на РИАМО в: РИАМО - 15 ноя. Компания «Мосэнергосбыт» стала гарантирующим поставщиком на территории городского округа Истра, сообщает пресс-служба&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}