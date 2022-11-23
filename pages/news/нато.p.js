import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>НАТО</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,НАТО"/>
        <meta name="description" content="Trending News about НАТО" /></Head><Template>
            <h1 style={{fontSize: "30"}}>НАТО</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/2/2/22a7c54-blinken-getty2.jpg" alt="НАТО"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/news/2022/11/22/7377528/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блінкен анонсував нові заходи підтримки України на зустрічі ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIb9JJ6amWGK3O-xCyIiNh_RGM_YhOARmjZhaLysOVxrkeT6LQsSjX9sqZXUyH4JMHoDyJoySg" alt="Блінкен анонсував нові заходи підтримки України на зустрічі ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Засідання Північноатлантичної ради на рівні міністрів закордонних справ відбудеться в Бухаресті 29-30 листопада 2022 року. Засідання проходитиме під&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-blinken-rozmova-stoltenberh/32144138.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блінкен провів телефонну розмову з Столтенбергом перед ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTfSDNLrbnWvC1BOfPEK6wPGDNIb2AotLfo31d8A4SBk3QBAzHripFP9-_H4HglOPJp8rPZBcz_" alt="Блінкен провів телефонну розмову з Столтенбергом перед ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Голова МЗС України Дмитро Кулеба також планує взяти участь у цій зустрічі. Міністр обіцяє порушити питання щодо постачання в Україну нових систем&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rada.gov.ua/news/razom/230475.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Резолюція ПА НАТО щодо визнання Росії державою-терористом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpiSD3y6TyeNbR4J-tX3Y-pJ3KgPYfZdvPZRQGC5OW6EUes9l8n8EVQVj9cGKukdkPqxEjGTvT" alt="Резолюція ПА НАТО щодо визнання Росії державою-терористом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Резолюція Парламентської асамблеї НАТО щодо визнання Росії державою-терористом – це політичне рішення наднаціонального парламенту, яке відтворює ставлення&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-polytics/3619856-kuleba-pidtverdiv-ucast-u-samiti-glav-mzs-krain-nato-v-buharesti.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кулеба підтвердив участь у саміті глав МЗС країн НАТО в Бухаресті</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDfSSdcaqL-AaJNnzErkiEPpEtObyJiOQqnillGs6MuJthw6AWscOPpneMW6FiehlrLQLE5mCf" alt="Кулеба підтвердив участь у саміті глав МЗС країн НАТО в Бухаресті" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це глава української дипломатії заявив на онлайн-брифінгу у вівторок, відповідаючи на запитання кореспондента Укрінформу. «Я планую взяти участь у&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-ato/3619979-u-nato-pohvalili-zsu-za-rozumne-vikoristanna-novitnih-tehnologij.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У НАТО похвалили ЗСУ за розумне використання новітніх ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTN7D1sS4tui86D5zxNkaNWDQ5HlpTKgM7qNmCXo4KwkPBW__epKrvciVhuvxtP03uyeAZS_sPc" alt="У НАТО похвалили ЗСУ за розумне використання новітніх ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Українські захисники дуже мудро використовують новітні технології, що дає їм перевагу над російськими загарбниками на полі бою. — Укрінформ.</p></div>
            </div>
        </a><a href='https://tsn.ua/politika/pidtrimka-ukrayini-bude-odnim-z-prioritetiv-na-zustrichi-ochilnikiv-mzs-krayin-nato-blinken-2207581.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Підтримка України буде одним із пріоритетів на зустрічі ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSwCBqtQb-ItLxmYlv60F1Obd1YIIvoL5C2LGU18oCO1nu3kOm0U9SaQMdfHM7r0uh422n4Ifw" alt="Підтримка України буде одним із пріоритетів на зустрічі ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Питання допомоги Україні держсекретар США озвучив після телефонної розмови з генсеком Альянсу.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/22/7377528/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блинкен анонсировал новые меры поддержки Украины на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIb9JJ6amWGK3O-xCyIiNh_RGM_YhOARmjZhaLysOVxrkeT6LQsSjX9sqZXUyH4JMHoDyJoySg" alt="Блинкен анонсировал новые меры поддержки Украины на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министры иностранных дел стран НАТО на встрече в Бухаресте в конце ноября обсудят дальнейшую поддержку Украины.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-ato/3619473-nato-vklucae-vsi-dostupni-instrumenti-dla-zbilsenna-postavok-zbroi-ukraini-deputat.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>НАТО включає всі доступні інструменти для збільшення поставок ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTWpuWwuDANh-M7xIVa3vz7J1JwS6nWxoQAMWzNClvC0CBDdmzm-rdPFZiqsrGoR6WEc-5iFxI7" alt="НАТО включає всі доступні інструменти для збільшення поставок ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>НАТО підтримуватиме Україну у війні з росією стільки, скільки буде потрібно, і вживає всіх зусиль для збільшення поставок зброї. — Укрінформ.</p></div>
            </div>
        </a><a href='https://mynizhyn.com/news/ukraina-i-svit/25660-u-nato-viznali-rosiyu-krayinoyu-teroristom.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У НАТО визнали Росію країною-терористом</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcToju4RMbBrQ1CEwisE_gBthnkpuOWcIrep2HYBqnUZ4u0GqYRO6QRWOnBAofq2d8oAoQF_bdRe" alt="У НАТО визнали Росію країною-терористом" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Буде створено трибунал для чиновників Кремля. Парламентська асамблея Північноатлантичного альянсу визнала Російську Федерацію країною-терористом.</p></div>
            </div>
        </a><a href='http://www.golos.com.ua/article/366296'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>НАТО веде переговори з найбільшими у світі виробниками зброї ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPGcexZb2itOori7VbL71vDP6UySk5shgVZY8z39cxTWU-g2eHBZFZccz15L2q4MtOq5v6yWSb" alt="НАТО веде переговори з найбільшими у світі виробниками зброї ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це повідомив на своїй сторінці у Фейсбуці голова Постійної делегації Верховної Ради України в ПА НАТО Єгор Чернєв (на знімку праворуч) після зустрічі з&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}