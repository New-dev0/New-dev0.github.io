import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>МиГ-31</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,МиГ-31"/>
        <meta name="description" content="Trending News about МиГ-31" /></Head><Template>
            <h1 style={{fontSize: "30"}}>МиГ-31</h1>
            <Image width={800} height={500} src="https://i.stopcor.org/news/2022/9/11/raketa.jpg?size=2010x1050" alt="МиГ-31"/>
            <h3>Recent News</h3>
            <a href='https://www.stopcor.org/section-uanews/news-masshtabna-povitryana-trivoga-u-bilorusi-zletili-mig-31-01-12-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Масштабная воздушная тревога: в Беларуси взлетели МиГ-31 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTVPQ4kjMr7POYNrVtlkergVPd5Cci8OAb8h095wOJpmG3tB1JmAlWx0CkKSTLkIxo2m2FS2jY9" alt="Масштабная воздушная тревога: в Беларуси взлетели МиГ-31 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1 декабря в 14.22 почти во всех городах Украины раздался сигнал воздушной тревоги. В 14:23 мониторинговая группа &#39;&#39;Белорусский Гаюн&#39;&#39; сообщила о взлете.</p></div>
            </div>
        </a><a href='https://news.liga.net/politics/news/trevoga-byla-iz-za-mig-31-v-belarusi-oni-uleteli-no-bit-mogut-otkuda-ugodno-vsu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тревога была из-за МиГ-31 в Беларуси. Они улетели, но бить ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVb6QOCvMKtGE57lxgXLYkN3oPgpQlPXQZc4sL86nTlC3zDfbvuBzR2FmRrRU4ulJyIhsQnYOW" alt="Тревога была из-за МиГ-31 в Беларуси. Они улетели, но бить ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1 декабря воздушная тревога по Украине была объявлена из-за взлета МиГ-31 в Беларуси. Они &quot;куда-то улетели&quot;, но бить &quot;Кинжалами&quot; могут откуда угодно.</p></div>
            </div>
        </a><a href='https://www.unian.net/war/mig-31-i-rakety-kinzhal-vernulis-v-rf-ekspert-predupredil-ob-ugroze-12064029.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Истребители МиГ-31 с ракетами &quot;Кинжал&quot; вернулись в РФ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNLC1auhyiOkDZ6B7A5TDUnTzwTQxNi0vaNid_ASUhAdDdMYh8J9sHoTwyjVKJIJduqpvbXHmb" alt="Истребители МиГ-31 с ракетами &quot;Кинжал&quot; вернулись в РФ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>После возвращения в РФ из Беларуси группы истребителей МиГ-31, которые могут запускать гиперзвуковые ракеты Х-47М &quot;Кинжал&quot;, угроза новых ударов для не&nbsp;...</p></div>
            </div>
        </a><a href='https://nv.ua/world/geopolitics/v-belarusi-vzleteli-mig-31-v-ukraine-vozdushnaya-trevoga-poslednie-novosti-50287963.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Украине объявили воздушную тревогу. В Беларуси ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRoGwIL5mNSX3AiI7jZwN1K5iURIdZ24R_XdmPL0POSlm-MI6dDjvU1cap1PFIk8cNeQMFZIWU4" alt="В Украине объявили воздушную тревогу. В Беларуси ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Беларускі Гаюн сообщил, что в четверг, 1 декабря, в Беларуси был зафиксирован взлет двух МиГ-31, в Украине воздушная тревога.</p></div>
            </div>
        </a><a href='https://24tv.ua/ru/belarusi-podnjali-mig-31-jekspert-objasnil-kakuju-ugrozu-dlja_n2209486'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Беларуси подняли МиГ-31: эксперт объяснил, какую угрозу для ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTAzEwIBcwhD8fyq1BNf5K4oW7Zv5WilqH76ER2lqapn2LBcG9IBX6u8al6MfyFFK9gu9dlG6Bq" alt="В Беларуси подняли МиГ-31: эксперт объяснил, какую угрозу для ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Беларуси снова подняли истребители МиГ-31. О чем свидетельствует взлет и какую опасность несут эти самолеты - читайте пояснение военного эксперта в&nbsp;...</p></div>
            </div>
        </a><a href='https://gazeta.ua/ru/articles/np/_vozdushnye-sily-ob-yasnili-segodnyashnie-manevry-rossijskih-mig31-v-belarusi/1123212'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Воздушные силы объяснили сегодняшние маневры российских ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQXg0KCiFqwapaMVPzRrL_TlGhyWIwOe7mlZo2CxLe5aUIBZa_99HpcP_qeRGZG5C_PZwSBA6JW" alt="Воздушные силы объяснили сегодняшние маневры российских ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1 декабря в 14:00 в большинстве областей Украины была объявлена ​​воздушная тревога. Причиной стали маневры российского носителя крылатых ракет &quot;Кинжал&quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://glavred.info/ukraine/gruppa-istrebiteley-mig-31-uletela-obratno-v-rf-mozhno-vydohnut-10429826.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Группа истребителей МиГ-31 улетела обратно в РФ: можно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWRYDQxt-6mTEWlii17ZdZ2rGJFk0xop0IKbyvDc1M8cTh04Ev-emZ9nr5u5yYhPirujPoUyrR" alt="Группа истребителей МиГ-31 улетела обратно в РФ: можно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Со стороны Беларуси пуск Х-47М &quot;Кинжал&quot; менее вероятен, чем с восточного направления.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/masshtabna-povitryana-trivoga-ukrayini-shcho-1669897774.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Масштабная воздушная тревога в Украине: что известно об ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTM63PZft64TPXQ-jsN_OBH4Xf19zoGWroclSnkvGJOIeCBDFvdfHx-6bNn9auNp-vAeHT4weHU" alt="Масштабная воздушная тревога в Украине: что известно об ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По информации мониторинговой группы, все три сверхзвуковых истребителя-перехватчика Миг-31К, которые дислоцировались на аэродроме в Мачулищах с 16 октября 2022&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}