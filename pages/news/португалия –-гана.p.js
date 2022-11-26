import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Португалия – Гана</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Португалия – Гана"/>
        <meta name="description" content="Trending News about Португалия – Гана" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Португалия – Гана</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/183/1839804/large.jpg" alt="Португалия – Гана"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/world/2022/news/portugaliya-gana-3-2-rezultat-matcha-chempionata-mira-gruppa-h-24-noyabrya-2022-goda-2002778/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Исторический гол Роналду принес Португалии победу над Ганой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvEw6u31NwhhLVGJnsC5G-DgywzExolVNATdKgOueCBct7dqrM47o5QdJmuvAPC7vIn5HQNX73" alt="Исторический гол Роналду принес Португалии победу над Ганой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Португалии победила команду Ганы в матче 1-го тура группового этапа чемпионата-2022 в Катаре со счетом 3:2.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/article-4904211-portugaliya-gana-3-2-obzor-i-statistika-matcha-goly-ronaldu-ajyu-feliksa-24-noyabrya-2022-chempionat-mira-po-futbolu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Роналду был в ужасе! Португалии дико повезло в лучшем матче ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS2zIpVYQmWESHYtE2ya884qpCjlT2caSUrPE0TntGXE1QujLpalhgesMk9PChNeRsnFkcyGTpA" alt="Роналду был в ужасе! Португалии дико повезло в лучшем матче ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Нападающий сборной Ганы почти повторил трюк Аршавина. Наконец-то огненная игра в Катаре!</p></div>
            </div>
        </a><a href='https://suspilne.media/324482-portugalia-u-rezultativnomu-matci-obigrala-ganu-na-starti-cs-2022-tablica/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Португалія у результативному матчі обіграла Гану на старті ЧС ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS8dRgiN3pNH5Uh2JcT2YXe-X2aCC2xNvxjhh5XkVIULOfxKU1qotVvVE8LumEDyXvwUDGF0L2L" alt="Португалія у результативному матчі обіграла Гану на старті ЧС ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Португалія - Гана: результат матчу з п&#39;ятьма голами на чемпіонаті світу-2022 з футболу, хто став переможцем поєдинку та лідером групи.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/portugaliya-golom-ronaldu-peregrala-zbirnu-1669312769.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Португалия с голом Роналду обыграла сборную Ганы на ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQunvN2weg7aMbFrX8dnmPfLEYbpHcupAxCoBDHKsj9ya2AxHWvyaV15xk6Es0R1g7BpfJL2Udt" alt="Португалия с голом Роналду обыграла сборную Ганы на ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Результативный матч между сборной Португалии и национальной команды Ганы завершился победой представителя Европы на чемпионате мира-2022.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4904163-portugaliya-gana-feliks-vyvel-portugalcev-vperyod.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Португалия — Гана: Феликс вывел португальцев вперёд</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIY-gn11Fhs4L-m2Z81TTGi5YxWTbxHApEQ0_yGjNu1ZAy3vQuBwj8n5X654ZfQaxmLTUw3O5e" alt="Португалия — Гана: Феликс вывел португальцев вперёд" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В эти минуты в Дохе на стадионе «Стэдиум 974» проходит матч 1-го тура группового этапа чемпионата мира по футболу 2022 года, в котором встречаются сборные&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.unian.ua/football/portugaliya-gana-prognoz-bukmekeriv-i-de-divitisya-match-chs-2022-z-futbolu-12055752.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Португалія - Гана: прогноз букмекерів і де дивитися матч ЧС ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGVqiIVJunx_2gRtDUnXU_dbb3tADsVUcejug3s1LZZb3N5EbKjvkSQCu3og8-qPUU0oMa7IIc" alt="Португалія - Гана: прогноз букмекерів і де дивитися матч ЧС ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>3 хв. Посилання скопійовано. https://sport.unian.ua/football/portugaliya-gana-prognoz-bukmekeriv-i-de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ua-football.com/ua/foreign/worldcup/1669279163-portugaliya-gana-divitisya-onlayn-live-pryamu-videootranslyaciyu-matchu-chs-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Португалія - Гана. Дивитися онлайн LIVE пряму ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmUL-DGD1Cy0C4fzG6S7z-qRNvOQatzbTj82kwxKHeJz13IAGfIMykEZDMSn-gUEPR8UjNzbzg" alt="Португалія - Гана. Дивитися онлайн LIVE пряму ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Португалія - Гана ⚽ 24.11.2022 ⚽ Дивитись онлайн трансляцію матчу ✓ ЧС-2022 ✓ Футбольні відеотрансляції ☛ Матчі чемпіонату Світу 2022 на UA-Футбол.</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ua/sport/20221124-portugaliya-obigrala-ganu-a-ronaldu-vstanovyv-unikalne-dosyagnennya-v-istoriyi-chs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Португалія обіграла Гану, а Роналду встановив унікальне ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSb2_ITlFn1DjoydJwwglrjlKCNfBD09XJtO45Q1z1xvb63nUnVJUS_exBBLkfh47If9YsW_4jm" alt="Португалія обіграла Гану, а Роналду встановив унікальне ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Дивіться онлайн огляд Португалія - Гана, матч від 24.11.2022 чемпіонат світу 2022 у Катарі. Відео матчу Португалія - Гана.</p></div>
            </div>
        </a><a href='https://www.ua-football.com/foreign/worldcup/1669310160-chm-portugaliya-gana.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧМ. Португалия - Гана 3:2. Спасибо арбитру за ошибку?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTq6P0Nawmnx4O9IhBWTFb53Hx-OT2pzI4pbnVJsFXu4RU1G00XD1Ql0P2BorfcznG6ZbgFGglb" alt="ЧМ. Португалия - Гана 3:2. Спасибо арбитру за ошибку?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>24-11-2022 ✓ Чемпионат мира FIFA. Селесао начинает драматичной победой: Чемпионат Мира. Группа Н. Первый тур Доха. Стадиум 974 Португалия - Гана 3:2 Голы:&nbsp;...</p></div>
            </div>
        </a><a href='https://ua.tribuna.com/football/1000000027374-portugaliya-gana-32-obzor-matcha-i-video-golov/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Португалия – Гана - 3:2: обзор матча и видео голов</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFa6664HrQOr4_vvCjN7-oO_0oOFoGPfWZTYQum-RenWKggmEzVF80AR5AZex2RCdUXGAdBNiU" alt="Португалия – Гана - 3:2: обзор матча и видео голов" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Обзор матча ЧМ-2022 Португалия – Гана, 24 ноября.В 1-м туре группы Н ЧМ-2022 Португалия победила Гану (3:2).</p></div>
            </div>
        </a>
        </Template></>;
}