import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новости Днепра</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новости Днепра"/>
        <meta name="description" content="Trending News about Новости Днепра" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новости Днепра</h1>
            <Image width={800} height={500} src="https://zn.ua/img/article/5190/43_main-v1668672415.jpg" alt="Новости Днепра"/>
            <h3>Recent News</h3>
            <a href='https://zn.ua/UKRAINE/v-dnepre-est-postradavshie-v-rezultate-udara-povrezhden-juzhmash.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Днепре есть пострадавшие в результате удара, поврежден ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTcwt5NvkXJv2Z9Iidz_BjPtPPMU4lv8vSVTF6JBngD4fthDpmIbD0kfUMwPykvRjnLyAIP2HxM" alt="В Днепре есть пострадавшие в результате удара, поврежден ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премьер сообщил об атаке на Южмаш и газодобывающие месторождения Украины.</p></div>
            </div>
        </a><a href='https://dnepr.express/post/razbityj-trollejbus-i-povrezhdennye-doma-poyavilis-pervye-foto-posledstvij-rossijskoj-ataki-na-dnepr'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новости Днепра: последствия ракетного удара по Днепру – фото ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTy8FS98JNmXdsEnUsHD952IJfexR297NUEIZR9Jv11nGcoWG7EUQhsEVrLqzVQD8qFufn0BZkk" alt="Новости Днепра: последствия ракетного удара по Днепру – фото ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ракетный удар по Днепру 17 ноября – пострадали жилые дома, троллейбус, на месте удара работает полиция ➤ Читайте новости на сайте Днепр Оперативный.</p></div>
            </div>
        </a><a href='https://www.unian.net/war/dnipro-novini-17-listopada-rosiya-vdarila-po-dvom-infrastrukturnim-ob-yektam-u-dnipri-novosti-dnepra-12048189.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россия ударила по двум объектам в Днепре: количество раненых ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSR70O-0Ye0X4Gjuc6wSIL8_6yMyYxfpgZ3diqtJi7vGv06kRjVDIHfDQuiousyesH8XnCh0b0B" alt="Россия ударила по двум объектам в Днепре: количество раненых ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня утром Россия осуществила удар по двум инфраструктурным объектам в Днепре. В результате атаки 8 человек пострадали. На месте работают спасатели.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/17/7376730/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракетным ударом по Днепру поражены два инфраструктурных ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRK6hT7J-qBiXbhl_mx2xRecPk3hJs6fW302ateTsTmTXKecQKmPTSdwRk_xDyFineehGitv_3Z" alt="Ракетным ударом по Днепру поражены два инфраструктурных ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В городе Днепр в результате утреннего обстрела 17 ноября зафиксировано попадание в два инфраструктурных объекта.</p></div>
            </div>
        </a><a href='https://dnepr.express/post/stalo-izvestno-pochemu-na-zapravkah-kolomojskogo-v-dnepre-propal-gaz'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новости Днепра: на заправках в Днепре пропал газ – причины ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYpurWw6__cccI2Th3OL6KvCaK3E9aU1rURv8ol8EtNbo9rqpYkw_q1y6BG5fnsNn1raumyXfI" alt="Новости Днепра: на заправках в Днепре пропал газ – причины ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Днепре на заправках «Авиас», «Укрнафта», «Юкон» и «Рубикс» пропал газ, названы причины ➤ Читайте новости на сайте Днепр Оперативный.</p></div>
            </div>
        </a><a href='https://nashemisto.dp.ua/ru/2022/11/17/kommunalka-vo-vremja-vojny-kto-mozhet-ne-platit-i-chto-dlja-jetogo-nuzhno/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Коммуналка во время войны: кто может не платить и что для ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQDZVO7zQcV9QllrvKXhr-x-X9q42gtLQRxqbr1rMqxtCy1_rkaM3lGJc3V0dlsH4M3Ke2BVzBh" alt="Коммуналка во время войны: кто может не платить и что для ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Люди, вынужденные покинуть свои дома, могут рассчитывать на уменьшение или освобождение от оплаты жилищно-коммунальных услуг. ▻ Наше Місто.</p></div>
            </div>
        </a><a href='https://dnepr.express/post/v-dnepropetrovskoj-oblasti-vandaly-nadrugalis-nad-mogiloj-voennogo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новости Днепра: в Новомосковске надругались над могилой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPI2yueAihttt5UbTMOkb2eVbbtNCdxNNKwUgryi5jNBjkfipztQDRGw8LGtyd5DW1ufJJOEnV" alt="Новости Днепра: в Новомосковске надругались над могилой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Новомосковске Днепропетровской области вандалы надругались над могилой погибшего на фронте военного ➤ Читайте новости на сайте Днепр Оперативный.</p></div>
            </div>
        </a><a href='https://nashemisto.dp.ua/ru/2022/11/17/vyleteli-sotni-okon-postradal-trollejbus-chto-proishodit-na-meste-raketnogo-udara-v-dnepre/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вылетели сотни окон, пострадал троллейбус: что происходит на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSxSExcDR2UdIhq872-Yi1iS23A-bNGffWqE4EUAeF3G9-qz9zVAkBbTeoAbhzudwSy76bLmOgN" alt="Вылетели сотни окон, пострадал троллейбус: что происходит на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вылетели сотни окон, пострадал троллейбус: что происходит на месте ракетного удара в Днепре➤ Читайте новости Днепра на портале Наше Місто.</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ru/ukraine/20221117-rf-zapustyla-rakety-u-dnipri-prolunav-vybuh/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракетный удар по Днепру: 15 из 23 пострадавших – в больнице</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRLay48aU75z2KQ4bs4fgEif11KDG3YcjaAHUTiT70ne2GasdWC-oJ1he1mZfuW9ZmZbVmNcL3h" alt="Ракетный удар по Днепру: 15 из 23 пострадавших – в больнице" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Утром 17 ноября российские войска несколько раз попали в два инфраструктурных объекта Днепра. Обновлено в 15:55. 15 из 23 пострадавших от ракетных обстрелов&nbsp;...</p></div>
            </div>
        </a><a href='https://dnepr.express/post/v-kamenskom-babushka-vypala-s-4-etazha-i-okazalas-na-kondicionere'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новости Днепра: в Каменском пенсионерка выпала с балкона и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZJ48wVhzXjYHIYyHOzSuX77ualioAPlrUXFiQ_nfJqsatxxqRbrhHThAeRDF-HLNyhcOQRvWn" alt="Новости Днепра: в Каменском пенсионерка выпала с балкона и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>| dnepr.express. Все права защищены. При полном или частичном использовании материалов обязательна активная гиперссылка в первом абзаце. Редакция: Днепр, ул.</p></div>
            </div>
        </a>
        </Template></>;
}