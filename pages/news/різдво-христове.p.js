import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Різдво Христове</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Різдво Христове"/>
        <meta name="description" content="Trending News about Різдво Христове" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Різдво Христове</h1>
            <Image width={800} height={500} src="https://img.tsn.ua/cached/630/tsn-15890496c3fba55a55e21f0ca3090d06/thumbs/1200x630/8f/c3/dfd3d22634fcd9e825e78f49dc0cc38f.jpeg" alt="Різдво Христове"/>
            <h3>Recent News</h3>
            <a href='https://tsn.ua/ukrayina/koli-pravilno-svyatkuvati-rizdvo-hristove-25-grudnya-chi-7-sichnya-2204062.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Коли правильно святкувати Різдво Христове: 25 грудня чи 7 січня</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS6-Z8RYPi5CBUnF2aWsA5yohIrd4ePv6VMmPkwj_QkXUX28_gOif1vR7RzwXJSnUknGZtCQJ_I" alt="Коли правильно святкувати Різдво Христове: 25 грудня чи 7 січня" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Серед вірян в Україні дата Різдва викликає безліч суперечок. Так коли ж правильно святкувати це велике свято? Давайте розбиратися.</p></div>
            </div>
        </a><a href='https://drohobych-rada.gov.ua/25-%D0%B3%D1%80%D1%83%D0%B4%D0%BD%D1%8F-%D1%87%D0%B8-7-%D1%81%D1%96%D1%87%D0%BD%D1%8F-%D0%BA%D0%BE%D0%BB%D0%B8-%D0%B2%D1%96%D0%B4%D0%B7%D0%BD%D0%B0%D1%87%D0%B0%D1%82%D0%B8-%D1%80%D1%96%D0%B7%D0%B4/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>25 грудня чи 7 січня: коли відзначати Різдво? Розпочинаємо ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQAWl7w3mt0NdM9m9bp4P-5hwVHzJa5onnw29QUDeT7MXkYN55O1pydUsprzoQFKBhgcp9Dede7" alt="25 грудня чи 7 січня: коли відзначати Різдво? Розпочинаємо ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В публічному просторі України вже тривалий час точаться дискусії відносно дати святкування Різдва Христового. Досі більшість українців продовжують&nbsp;...</p></div>
            </div>
        </a><a href='https://dailylviv.com/news/kultura/25-hrudnya-chy-7-sichnya-u-drohobychi-pochaly-konsultatsiyi-z-hromadoyu-pro-datu-svyatkuvannya-rizdva-104947'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>25 грудня чи 7 січня: у Дрогобичі почали консультації з громадою ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTIRpyTkOOpeolRrDzaXQ4IxL7O9T8HEJIPmeAx1aiES_lugPx7c47-w3iQa1kYS7dNNaSSsKpK" alt="25 грудня чи 7 січня: у Дрогобичі почали консультації з громадою ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Цьогоріч в Україні Священний Синод Православної Церкви дозволив, як виняток, за рішенням настоятеля та громади відзначати Різдво Христове за Новоюліанським&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lmn.in.ua/25-chy-7-starosambirshchyna-vyznachalas-koly-sviatkuvaty-rizdvo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>25 чи 7: Старосамбірщина визначалась, коли святкувати Різдво ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSyUmxLg-r7zEYQWL9AVZFZM8KGHIheQ-8Gv6rAJ9OX13SsBBMA4cYnTHFpTm9C2wZU-wjOybUE" alt="25 чи 7: Старосамбірщина визначалась, коли святкувати Різдво ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Цього року в Україні побільшає тих вірян, які святкуватимуть Різдво Христове 25 грудня. Адже 18 жовтня Синод ПЦУ дозволив проводити святкові богослужіння у&nbsp;...</p></div>
            </div>
        </a><a href='https://drohobych.city/articles/250593/koli-drogobichani-svyatkuvatimut-rizdvo-ta-chi-vstanovlyuvati-centralnu-yalinku-elektronne-opituvannya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Коли Дрогобичани святкуватимуть Різдво та чи встановлювати ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQLsvVBWYWpld_mnmTopmqmD3vjIc9asLQSd2-g4PBahsiKK7SkJfEzjfn-WToRk5HLj5zAGrgI" alt="Коли Дрогобичани святкуватимуть Різдво та чи встановлювати ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Дрогобицькій громаді вирішують, коли святкувати Різдво: де висловити свою думку – Дрогобич.City.</p></div>
            </div>
        </a><a href='https://znaj.ua/society/443315-mikolaya-6-grudnya-rizdvo-25-grudnya-a-vodohreshcha-6-sichnya-ukrajinci-golosuyut-za-noviy-kalendar-pravoslavnih-svyat'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Миколая 6 грудня, Різдво 25 грудня, а Водохреща 6 січня ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS0Vh-mMRJIsRTAnqBqTAreNj5QEMuVnwTO1fxNTLxul48xTlReWVPlos1Oivv3MIj6mHM4CjaN" alt="Миколая 6 грудня, Різдво 25 грудня, а Водохреща 6 січня ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Українці вважають, що ті, хто святкують Різдво Христове 7 січня перебувають під значно більшим впливом російської культури, ніж ті, хто читають Булгакова.</p></div>
            </div>
        </a>
        </Template></>;
}