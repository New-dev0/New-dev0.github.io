import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Курск</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Курск"/>
        <meta name="description" content="Trending News about Курск" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Курск</h1>
            <Image width={800} height={500} src="https://riakursk.ru/assets/cache_image/uploads/2022/11/1200px-triangle-de-presignalisation_500x300_8a8.jpg" alt="Курск"/>
            <h3>Recent News</h3>
            <a href='https://riakursk.ru/na-okraine-kurska-26-letniy-avtomobilist-postradal-v-dtp/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На окраине Курска 26-летний автомобилист пострадал в ДТП ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTqKBT1x9hjZOi6Nm6_qH9YmxcdJ4J6oMc2cZwk9rPxVrBrCt81ZQ_AuGEIWslh71P7Ne0PmHZQ" alt="На окраине Курска 26-летний автомобилист пострадал в ДТП ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Курской области 29 ноября произошло ДТП с пострадавшими. 26-летний водитель автомобиля &quot;Рено Симбол&quot; двигался по автодороге &quot;Москва-Белгород-&quot;Северный въезд в&nbsp;...</p></div>
            </div>
        </a><a href='https://46tv.ru/odnoj-strokoj/v-kurske/177910-u-novoj-trassy-na-severnom-vezde-v-kursk-avtomobil-vletel-v-ograzhdenie-dorogi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У новой трассы на Северном въезде в Курск автомобиль влетел ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRcd2RQ6OMwldwHXFTfd4gpwwciMtDtzq7tH70a0ZqRCFAs1o9wB2Mosfkn0ldTxba2lTeD-TzQ" alt="У новой трассы на Северном въезде в Курск автомобиль влетел ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Не успели в Курске ввести новую дорогу от проспекта Дериглазова с возможностью выезда на федеральную трассу М-2 Крым, как там начали фиксировать аварии.</p></div>
            </div>
        </a><a href='http://www.dddkursk.ru/lenta/2022/11/29/092439/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На выезде из Курска в аварии ранен водитель</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSIgUs05L4IasX-fh_sW2iY94yCt8UO0kc83T0MaLwPLvrL-qLJzEYlAGcu7j5_RD7K1Fj9RvX1" alt="На выезде из Курска в аварии ранен водитель" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ДТП произошло днем 29 ноября в пригородном Курском районе. По предварительным данным очевидцев, выложивших фото с места «Автокадр_46», на светофоре перед&nbsp;...</p></div>
            </div>
        </a><a href='https://kurskcity.ru/news/citynews/196595'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Курске 29 ноября 26-летний водитель врезался в стоящий ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTYTY-AHPDGtwUq1XsZmZHcuQtx5YVTtR4utbDq5H_TRzwFmcxWzJ7JhgHrxsbVT4siaLPapscv" alt="В Курске 29 ноября 26-летний водитель врезался в стоящий ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В ДТП пострадал водитель Рено, он был доставлен в городскую больницу. Сейчас полиция выясняет причины и обстоятельства происшествия, сообщило УМВД России по&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}