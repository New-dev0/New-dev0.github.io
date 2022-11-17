import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Райан Рейнольдс</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Райан Рейнольдс"/>
        <meta name="description" content="Trending News about Райан Рейнольдс" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Райан Рейнольдс</h1>
            <Image width={800} height={500} src="https://thecity.m24.ru/b/d/SYketSivf4k9L_TObLLBFlFNEhluPXn9kZxNbycGshjv55OD3HWFWh2pL8EsPwl5DpSHzm95vRzNbdeHauL5EWcJ5w9e=2eweh_lJJ4i5us9vTdlIMw.jpg" alt="Райан Рейнольдс"/>
            <h3>Recent News</h3>
            <a href='https://thecity.m24.ru/news/6639'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Райан Рейнольдс и Уилл Феррелл спели и станцевали в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRlzVvJl5aZY-kW2UgbzpvQxQqUhT2O3MIz9Er0QF_5Uti8Esj0ICDhibItOVpvFHWDprcCSBZI" alt="Райан Рейнольдс и Уилл Феррелл спели и станцевали в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сюжет основан на повести Чарльза Диккенса «Рождественская песнь» и рассказывает о том, как к эгоистичному Клинту Бриггсу приходят духи прошедшего, настоящего и&nbsp;...</p></div>
            </div>
        </a><a href='https://kanobu.ru/news/rajan-rejnolds-i-uill-ferrell-speli-v-otryivke-komedii-v-duhe-rozhdestva-ot-apple-459263/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Райан Рейнольдс и Уилл Феррелл спели в отрывке комедии «В ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_VsU1l__F7kCG9PUv3M2g1m38CVmnse1jlQqfZDaRfDwBMityJH-VYJa8Ha7JO2tBnI96emZOEg" alt="Райан Рейнольдс и Уилл Феррелл спели в отрывке комедии «В ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Издание Variety поделилось эксклюзивным отрывком из музыкальной комедии «В духе Рождества» (Spirited), где главные роли исполняют Райан Рейнольдс и Уилл&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}