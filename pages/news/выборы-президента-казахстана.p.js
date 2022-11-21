import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Выборы президента Казахстана</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Выборы президента Казахстана"/>
        <meta name="description" content="Trending News about Выборы президента Казахстана" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Выборы президента Казахстана</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/08C9/production/_127694220_kaz_reu.jpg" alt="Выборы президента Казахстана"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/features-63679501'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Президентские выборы в Казахстане: Токаев против пяти ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSimNtso_Et4hqv0yvW2hhtFA0H5VfadsLa23WBNhh6bQPFrH_XdlHtwzKbxV6SaLd58LXOWOXx" alt="Президентские выборы в Казахстане: Токаев против пяти ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В воскресенье жители Казахстана голосуют на внеочередных президентских выборах. Решение об их проведении принял нынешний президент страны - 69-летний&nbsp;...</p></div>
            </div>
        </a><a href='https://www.svoboda.org/a/ekzit-poll-tokaev-pobezhdaet-na-vyborah-prezidenta-kazahstana/32139314.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Экзитпол: Токаев побеждает на выборах президента Казахстана</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT_d4YC71PcqhJRJArkU1g03M4vHvl5kyuZAXJZpiYTzZUImkXvjR6wc0w2K9XqNeQYZoOLnHs8" alt="Экзитпол: Токаев побеждает на выборах президента Казахстана" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На втором месте – &quot;против всех&quot;, за такой вариант отдали голос более 5 процентов участников выборов. В них участвовали ещё 5 кандидатов, набравшие по 2–3&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfm.ru/news/513384'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Экзитпол: Токаев лидирует на выборах президента Казахстана ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Экзитпол: Токаев лидирует на выборах президента Казахстана ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Явка составила почти 70%. Действующий президент Казахстана Касым-Жомарт Токаев побеждает на досрочных выборах главы государства. Об этом говорят результаты&nbsp;...</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/politika/20112022/523225'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Токаев побеждает на выборах президента Казахстана с 82,02 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQyZnWNaDKLw8nhf-f0-z7iavk-Kb2fxsKc0AD-8I-yYvTHlc3dQJf5h7o7v5SbazAKydh7gWCy" alt="Токаев побеждает на выборах президента Казахстана с 82,02 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Действующий президент Казахстана Касым-Жомарт Токаев, по предварительным данным exit poll, одерживает победу на внеочередных выборах главы республики с 82&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.ru/society/481362-ekzitpoly-prodemonstrirovali-pobedu-tokaeva-na-vyborah-prezidenta-kazahstan'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Экзитполы продемонстрировали победу Токаева на выборах ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTYLDVxJpUcDLy7-FJVqioF6BXw_216nFYcPhUWh22Q0aPuPXcHOYOGwSPB4L6neOSbM-ld13zO" alt="Экзитполы продемонстрировали победу Токаева на выборах ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Действующий президент Казахстана Касым-Жомарт Токаев на внеочередных президентских выборах 20 ноября получил, по данным экзитполов, более 82% голосов.</p></div>
            </div>
        </a><a href='https://www.interfax.ru/world/873360'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Токаев заявил, что выборы президента Казахстана прошли в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSy_u47s4BNd2cJaqgXP7lfj37LCuCcIQ5hcmwdx5wWMGTZc4Ui7yPq80cd0UXGb4yZnezFQZ3x" alt="Токаев заявил, что выборы президента Казахстана прошли в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 21 ноября. INTERFAX.RU - Состоявшиеся в Казахстане внеочередные выборы президента были справедливыми и открытыми, заявил президент Касым-Жомарт&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}