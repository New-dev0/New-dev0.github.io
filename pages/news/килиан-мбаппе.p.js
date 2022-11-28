import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Килиан Мбаппе</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Килиан Мбаппе"/>
        <meta name="description" content="Trending News about Килиан Мбаппе" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Килиан Мбаппе</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/img-gen/%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB+%5C%5C+%D0%A7%D0%B5%D0%BC%D0%BF%D0%B8%D0%BE%D0%BD%D0%B0%D1%82+%D0%BC%D0%B8%D1%80%D0%B0+%5C%5C+%D0%A7%D0%9C-2022/%D0%9C%D0%B1%D0%B0%D0%BF%D0%BF%D0%B5+%D1%81%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BB%D1%81%D1%8F+%D1%81%C2%A0%D0%B4%D0%BE%D1%87%D0%B5%D1%80%D1%8C%D1%8E+%D0%A2%D1%80%D0%B0%D0%BC%D0%BF%D0%B0+%D0%B8%C2%A0%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BB%D1%81%D1%8F+%D0%BD%D0%B0%C2%A0%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0%D1%85+%D0%B4%D0%BB%D1%8F+%D0%B5%D0%B5%C2%A0%D0%B4%D0%B5%D1%82%D0%B5%D0%B9+%D0%BF%D0%BE%D1%81%D0%BB%D0%B5+%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D1%8B+%D0%BD%D0%B0%D0%B4+%D0%94%D0%B0%D0%BD%D0%B8%D0%B5%D0%B9.jpg" alt="Килиан Мбаппе"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/world/2022/news/mbappe-sfotografirovalsya-s-docheryu-trampa-i-raspisalsya-na-futbolkah-dlya-ee-detey-posle-pobedy-nad-daniey-2004023/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мбаппе сфотографировался с дочерью Трампа и расписался на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQtiuAXMdlAEwqlN4u4Hy835MuXQXRCbMDwZzxm9UhWamDRxUg62tZzV7hhmUwT5uf5ycA0yO_V" alt="Мбаппе сфотографировался с дочерью Трампа и расписался на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Нападающий сборной Франции Килиан Мбаппе сфотографировался с Иванкой Трамп, дочерью бывшего президента США Дональда Трампа, после матча ЧМ-2022 с Данией.</p></div>
            </div>
        </a><a href='https://telegraf.com.ua/sport-cat/2022-11-27/5724219-doch-donalda-trampa-sfotografirovalas-s-geroem-sbornoy-frantsii-na-chm-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Дочь Дональда Трампа сфотографировалась с героем сборной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT7reBXWWRaqqiBiXdqriQE5SuHU-Vii80ZOy2Qt-S92jZpLyWfer5OIZ59reFvz9r6Sj3kbLtw" alt="Дочь Дональда Трампа сфотографировалась с героем сборной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборна Франции обыграла Данию и досрочно вышла в 1/8 финала ЧМ-2022. Героем встречи стал Килиан Мбаппе, который забил два гола.</p></div>
            </div>
        </a>
        </Template></>;
}