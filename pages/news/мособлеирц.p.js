import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>МосОблЕИРЦ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,МосОблЕИРЦ"/>
        <meta name="description" content="Trending News about МосОблЕИРЦ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>МосОблЕИРЦ</h1>
            <Image width={800} height={500} src="http://inelstal.ru/upload/gallery/416/126416_a6278a7ae7a1359deca4103068de9ca4a45a6fda.jpg" alt="МосОблЕИРЦ"/>
            <h3>Recent News</h3>
            <a href='https://inelstal.ru/novosti/plata-za-zhku-i-rabota-eirc/mosobleirc-prinimaet-na-obsluzhivanie-novyh-abonentov-v-g-o-elektrostal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>МосОблЕИРЦ принимает на обслуживание новых абонентов в г ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSGZvjmMIzITzxLtW9bFs5x_NLtvFLCSvcl5UMIZUrA9-V_yoQy17BivlA2JF63ZIdPSIfIVyLq" alt="МосОблЕИРЦ принимает на обслуживание новых абонентов в г ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>МосОблЕИРЦ начинает обслуживать жителей многоквартирных домов, расположенных по адресам: проспект Ленина, д. 08, д. 08А и Ногинское шоссе, д. 36, корпус 4.</p></div>
            </div>
        </a>
        </Template></>;
}