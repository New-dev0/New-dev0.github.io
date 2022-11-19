import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ДТЭК</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ДТЭК"/>
        <meta name="description" content="Trending News about ДТЭК" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ДТЭК</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/4/f/4f35889a_fd00_42b7_99f4_b05f66d1f16c_1300x820_1_1300x820_74_1300x820.jpg" alt="ДТЭК"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/energetiki-y-shahtari-pratsyuyut-maksimumi-1668785182.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Энергетики и шахтеры работают на максимуме для ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQ3yimAbOz27gajTOcANn3YaJl7AZF0c68TE19Gn6gI3rVVR0PZLxnl8sPOleM9gdiG1WDmhZe" alt="Энергетики и шахтеры работают на максимуме для ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Все предприятия &quot;ДТЭК Энерго&quot; работают на максимум для стабилизации ситуации в энергосистеме, несмот... - Новости - ДТЭК - Электроэнергия.</p></div>
            </div>
        </a><a href='https://www.stopcor.org/section-suspilstvo/news-u-kievi-ochikuyutsya-ekstrenni-vidklyuchennya-svitla-dtek-18-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Киеве ожидаются экстренные отключения света: ДТЭК (детали ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1sFQK5KunBSjZj8jzewRgBk9FUjBgreqtT10-W-PE4LFphm0lcU4_0HIgLZStsB5g5ZM0uY5w" alt="В Киеве ожидаются экстренные отключения света: ДТЭК (детали ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября ДТЭК сообщило, что жителей Киева ожидают экстренные отключения электроэнергии. Информация обнародована на странице Facebook &#39;&#39;ДТЭК Киевские э.</p></div>
            </div>
        </a><a href='https://focus.ua/ukraine/537707-otklyuchenie-elektroenergii-v-ukraine-lyudyam-obyasnili-nastupit-li-blekaut'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Отключение света в Украине на 10 дней: ДТЭК ответил на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcThk6wmWiI5bS90dMXeB_Ean-P-4vK3f-vNO65ejLOJ9MjOI248VcX-deGllvdvzGYgbGJRn_OH" alt="Отключение света в Украине на 10 дней: ДТЭК ответил на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По словам директора Центра исследований энергетики Александра Харченко, украинцы могут быть без света 7-10 дней, если энергетическая система страны не&nbsp;...</p></div>
            </div>
        </a><a href='https://prm.ua/ru/vozmozhen-ly-v-ukrayne-poln-y-blekaut-ob-iasnenye-dt-k/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Возможен ли в Украине полный блекаут — объяснение ДТЭК</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVz6zXgkwUWgqYgw7m-2Zh4AHnCzjv60qFMtF0loN9ZwrIxAKiIDhCwgm0f7rkwuuUBb4HpTJD" alt="Возможен ли в Украине полный блекаут — объяснение ДТЭК" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Несмотря на российские атаки на объекты энергетической инфраструктуры, в Украине не ожидается тотального отключения электроэнергии.</p></div>
            </div>
        </a><a href='https://v-variant.com.ua/ru/dt-k-sostavyl-hrafyk-otkliuchenyia-lektro-nerhyy-v-donetskoy-oblasty/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ДТЭК составил график отключения электроэнергии в Донецкой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJwwJgq4LKMlh9kKAZQkdK7cNQHNjnxW1g4YQr3GB_0hAhymC2fh17t85ZJjsbXaFRUgb1kCcS" alt="ДТЭК составил график отключения электроэнергии в Донецкой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Здесь сделали удобную схему поиска по вашему населенному пункту: В пресс-службе также добавили, что в графиках отключения возможна небольшая погрешность во&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ato/mozhet-li-ukraine-ugrozhat-blekaut-chto-ob-etom-govoryat-v-dtek-2204983.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Может ли Украине угрожать блэкаут: что об этом говорят в ДТЭК</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYVYl_Sbmji4V-a28-yHeJM5KmGpeK8d_slTVP5oNnAD25ChLJWAn0q1bqz594uu2cWBJz9sqe" alt="Может ли Украине угрожать блэкаут: что об этом говорят в ДТЭК" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Директор ДТЭК Дмитрий Сахарук сообщил, что несмотря на большое желание России, чтобы Украина оказалась в полной темноте, такой сценарий маловероятен.</p></div>
            </div>
        </a><a href='https://gordonua.com/news/war/energetiki-i-shahtery-dtek-ahmetova-rabotayut-na-maksimume-dlya-stabilizacii-situacii-v-energosisteme-gendirektor-1636766.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Энергетики и шахтеры ДТЭК Ахметова работают на максимуме ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-iJ1jFQkHL97xfhrYJs4093h6A6PUb4sNldGmbyYfPfQya_w1L0c7kXx8qNlNrFzvRCz3KX0z" alt="Энергетики и шахтеры ДТЭК Ахметова работают на максимуме ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Все предприятия ДТЭК Энерго Рината Ахметова работают на максимуме для стабилизации ситуации в энергосистеме,...</p></div>
            </div>
        </a><a href='https://kp.ua/politics/a659744-hlava-dtek-zaveril-chto-polnoho-blekauta-v-ukraine-ne-budet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Глава ДТЭК заверил, что полного блэкаута в Украине не будет</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRcao8HvFPHqTEHuTg3oDPqN5o7MM27GjUyvnQMW0ai6Uzd0Lns067bKQYdyjEqidTxugGti2He" alt="Глава ДТЭК заверил, что полного блэкаута в Украине не будет" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Россияне продолжают наносить удары по объектам энергетики, но наши специалисты прилагают все усилия для восстановления энергосистемы.</p></div>
            </div>
        </a><a href='https://kosatka.media/category/elektroenergiya/news/v-dtek-predlagayut-perevesti-na-voennye-relsy-zaporozhtransformator'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В ДТЭК предлагают перевести на военные рельсы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSxKtDxAgpktmQWMbeb7SHFHs7YaWNZX96WKp00lgUEHdFa5sNtj4CbAfRON_oIerwjhPVMoOjy" alt="В ДТЭК предлагают перевести на военные рельсы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Размещение заказов по производству необходимого для ремонтов высоковольтных сетей оборудования на ЧАО «Запорожтрансформатор» (ЗТР) было бы правильным&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/economics/energetics/blekaut-v-ukrajini-maloymovirniy-de-zaraz-naygirsha-situaciya-zi-svitlom-12049956.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блэкаут в Украине маловероятен: в ДТЭК рассказали, где сейчас ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDo2jO__dsARS38dcNxQhVyyASL2PGG27MB2kdlVZ_JQUsUu_DM4jAvRqaoPLLLoPgmL_zseYw" alt="Блэкаут в Украине маловероятен: в ДТЭК рассказали, где сейчас ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Блэкаут в Украине возможен, говорят в ДТЭК, но его можно избежать, если вовремя отремонтировать разрушения. Но для полного восстановления системы требуется&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}