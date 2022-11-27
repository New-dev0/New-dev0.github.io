import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Крис Ву</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Крис Ву"/>
        <meta name="description" content="Trending News about Крис Ву" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Крис Ву</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/BDD5/production/_127779584_gettyimages-1320609318.jpg" alt="Крис Ву"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/news-63758897'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Китайско-канадский поп певец Крис Ву приговорен к 13 годам по ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTt-GWHYM4ruXC34uWWiymR6qCiJUkS7gSNRFovIjYMFfYVZmGaFpnHhEVEMWv1Nq9F4iuDY6cW" alt="Китайско-канадский поп певец Крис Ву приговорен к 13 годам по ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Китайско-канадский поп певец Крис Ву приговорен к 13 годам по обвинению в изнасилованиях. Рейчел Расселл; BBC News. 25 ноября 2022.</p></div>
            </div>
        </a><a href='https://www.starhit.ru/novosti/zvezdu-k-pop-krisa-vu-otpravili-v-tyurmu-na-13-let-za-iznasilovanie-851230/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Звезду K-Pop Криса Ву отправили в тюрьму на 13 лет за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSys6pk2pdL1wzw-EbGt8yybIvUDnTXI-wQvdZGzC3wTim38Ny7bC5E2f_wYHgtQDu83HuXrKXN" alt="Звезду K-Pop Криса Ву отправили в тюрьму на 13 лет за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Крис Ву известен как участник корейской группы EXO, а также он прославился в качестве модели. Сегодня его приговорили к 13 годам лишения свободы.</p></div>
            </div>
        </a><a href='https://super.ru/a/kris_wu_prison'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кей-поп-звезду Криса Ву приговорили к 13 годам тюрьмы за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQLg23xAq-RcJYdsR7jFyjp7AI6LtV8qWrc8LEX1e5SyyuK8xremAqBC4m7Uv7bpwaYDYiUwjYg" alt="Кей-поп-звезду Криса Ву приговорили к 13 годам тюрьмы за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Экс-участник кей-поп-группы EXO, певец китайско-канадского происхождения Крис Ву получил длительный тюремный срок за три изнасилования и один случай «сбора&nbsp;...</p></div>
            </div>
        </a><a href='https://readovka.news/news/122323'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бывший участник EXO Крис Ву получил 13 лет тюрьмы в Киате ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS80FMuv9t-P5ww0FIZePrMjXzd0arXofXD5lAt2vlktIUCISErfaklZiLuINrYdkVwrCuRL7d-" alt="Бывший участник EXO Крис Ву получил 13 лет тюрьмы в Киате ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Крис Ву, китайско-канадский рэпер, ему 22 года, он наиболее известен по выступлению в популярной поп-группе EXO. Певца приговорили к 13 годам лишения&nbsp;...</p></div>
            </div>
        </a><a href='https://newizv.ru/news/world/25-11-2022/v-pekine-za-iznasilovanie-i-amoralku-posadili-pop-zvezdu-azii-krisa-vu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Пекине за изнасилование и аморалку посадили поп-звезду ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQn2AGcByV7eS-XAd7We2qNzCVI2ePa-Q1YCKGXdfhQJcRDZNa5RS28JOog2dcqDPdynVd0Xggt" alt="В Пекине за изнасилование и аморалку посадили поп-звезду ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пекинский суд в пятницу приговорил поп-звезду Азии китайского происхождения Криса Ву к 13 годам тюремного заключения. Его обвиняют как минимум в трех&nbsp;...</p></div>
            </div>
        </a><a href='https://aussiedlerbote.de/2022/11/pop-zvezda-kris-vu-priznan-vinovnym-v-iznasilovanii/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Поп-звезда Крис Ву признан виновным в изнасиловании</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4fDhAt1Tlx8UsGNHhcRp-LRT7TLFXOrhkvO3U7OJgtMaOB7Wm6Wa2fjjjhGpEKxdmqELOBsY7" alt="Поп-звезда Крис Ву признан виновным в изнасиловании" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Поп-звезда Крис Ву признан виновным в изнасиловании. Обвинительный приговор 32-летнему певцу Крису Ву вынесен за изнасилование трех женщин.</p></div>
            </div>
        </a><a href='https://rtvi.com/news/kanadsko-kitajskij-reper-poluchil-13-let-tyurmy-po-delu-ob-iznasilovaniyah/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Канадско-китайский рэпер получил 13 лет тюрьмы по делу об ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_oVhVMaI5ktT8NRENPdrba6SN14VTaDCOEfpTovlFzcKANHAe8oWyv_VKZnMnHYGhl7Y9-x7y" alt="Канадско-китайский рэпер получил 13 лет тюрьмы по делу об ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Китайско-канадский рэпер Крис Ву получил 11,5 года тюрьмы по делу об изнасиловании, пишут Sixth Tone и The Paper. Дополнительно суд приговорил его к 22&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}