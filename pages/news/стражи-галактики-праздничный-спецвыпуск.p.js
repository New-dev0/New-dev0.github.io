import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Стражи галактики: Праздничный спецвыпуск</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Стражи галактики: Праздничный спецвыпуск"/>
        <meta name="description" content="Trending News about Стражи галактики: Праздничный спецвыпуск" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Стражи галактики: Праздничный спецвыпуск</h1>
            <Image width={800} height={500} src="https://pluggedin.ru/images/22-file_2022_11_27_10_37_18.jpeg" alt="Стражи галактики: Праздничный спецвыпуск"/>
            <h3>Recent News</h3>
            <a href='https://pluggedin.ru/open/kameo-marka-hemmila-v-straghah-galaktiki:-prazdnichnyy-specvypusk-razocharovalo-fanatov-41001'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Камео Марка Хэмилла&#39; в «Стражах галактики: Праздничный ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpJLDd0B5cZn0wQohZc8y50exwg_jYBKdQCkEU1D4jhjbY-BEgyRTFL2-vDzkGmx_HVwNewfma" alt="&#39;Камео Марка Хэмилла&#39; в «Стражах галактики: Праздничный ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В «Стражах Галактики: Праздничный спецвыпуск» зрители увидели &#39;камео Марка Хэмилла&#39;. Позже последовало разочарование. Фанаты Marvel были уверены,&nbsp;...</p></div>
            </div>
        </a><a href='https://pluggedin.ru/open/obyyasneno-radikalynoe-izmenenie-gruta-v-straghah-galaktiki:-prazdnichnyy-specvypusk-41004'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Объяснено радикальное изменение Грута в «Стражах галактики ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-HCpQjF3WAD0sZoGOaz3PH1Wga8UU1gScE4ZMcF21oOG4Z5fA4zs9D1_OmFyqNzNC8RsI4E0B" alt="Объяснено радикальное изменение Грута в «Стражах галактики ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>С момента своего дебюта в «Стражах галактики» Грут претерпел некоторые радикальные изменения за годы, проведенные в киновселенной Marvel, чему Джеймс Ганн&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}