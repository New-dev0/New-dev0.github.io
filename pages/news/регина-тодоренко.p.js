import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Регина Тодоренко</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Регина Тодоренко"/>
        <meta name="description" content="Trending News about Регина Тодоренко" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Регина Тодоренко</h1>
            <Image width={800} height={500} src="https://cdn.spbdnevnik.ru/uploads/block/image/722068/__medium_photo_2022-09-17_19-21-11.jpg.jpg" alt="Регина Тодоренко"/>
            <h3>Recent News</h3>
            <a href='https://spbdnevnik.ru/news/2022-11-23/regina-todorenko-proigrala-sud-protiv-kp-i-pisatelnitsy-mishinoy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Регина Тодоренко проиграла суд против «КП» и писательницы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwse8MJklFpRgeceU1yP_HEc0tZAK5PtvHneeOfv0zpdp2lPZjj5iR17P8tkUlwJIkDHFeUFRb" alt="Регина Тодоренко проиграла суд против «КП» и писательницы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Регина Тодоренко была возмущена материалом, в котором Мишина назвала себя «литературным рабом» артистки. Писательница утверждала, что в течение двух лет писала&nbsp;...</p></div>
            </div>
        </a><a href='https://super.ru/a/todorenko_komment'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Регина Тодоренко рассказала о новых подробностях суда с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSWJLKsxRJP_vvVUaDERFvkJeBErH9givGQqGHFiUw4e1IX7RPj7M24iFxlOSG2b_U5IaXu7Ot" alt="Регина Тодоренко рассказала о новых подробностях суда с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня стало известно, что суд отказал Регине Тодоренко взыскать с Дарины Мишиной 8 миллионов рублей.</p></div>
            </div>
        </a><a href='https://www.starhit.ru/novosti/sud-otkazal-regine-todorenko-v-trebovanii-vzyskat-s-ee-literaturnoi-rabyni-8-millionov-850496/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд отказал Регине Тодоренко в требовании взыскать с ее ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSbhQsVWmlBeRy2jr6EcF1wi9bFAeDYCwvus4ldidAXn1prAzcxiBTy2RMP4Hzp3hkuR1ZMXLzx" alt="Суд отказал Регине Тодоренко в требовании взыскать с ее ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Желание Регины Тодоренко написать детскую книгу обернулось скандалом. Автор, которая помогала звезде воплотить мечту в реальность,&nbsp;...</p></div>
            </div>
        </a><a href='https://7days.ru/news/regina-todorenko-lishilas-8-millionov-v-sude.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Регина Тодоренко лишилась 8 миллионов в суде - 7Дней.ру</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsflucobwPd4JQGKF6wOsNs4zrGHwxql0Wcv6-p__m4ivawh9K67mZG8POaNBqO1g9o7xTXOwU" alt="Регина Тодоренко лишилась 8 миллионов в суде - 7Дней.ру" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Автор Дарина Мишина поделилась с телеведущей своими наработками. Однако звезда отказалась от них, объяснив это тем, что хочет придумать другую идею. Дарина была&nbsp;...</p></div>
            </div>
        </a><a href='https://russianteleweek.ru/stars/strong-regina-todorenko-ne-vyigrala-sud-na-vosem-millionov-rublej-strong/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Регина Тодоренко не выиграла суд на восемь миллионов рублей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqubQPSU3brVIwkVDDd1SB5Efae6Bc-euHRGcNd3lQrh7NghowFT3AC8HJbOUMRAbJ-KqLZgnt" alt="Регина Тодоренко не выиграла суд на восемь миллионов рублей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Телеведущей не удалось добиться взыскания крупной денежной суммы с литератора, в этом ей отказал Останкинский районный суд Москвы.</p></div>
            </div>
        </a><a href='https://life.fakty.com.ua/ru/showbiz/cherez-napysannya-dytyachoyi-knygy-todorenko-prograla-sud-za-svoyu-reputacziyu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Из-за написания детской книги: Тодоренко проиграла суд за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLdYNN46LeIgLEA8_CcP5cEMSJ57y02VhX_RgswjDNBwSEKt3US3hG00rpOoAvCrgDz_UbIfOh" alt="Из-за написания детской книги: Тодоренко проиграла суд за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Останкинский райсуд Москвы 22 ноября отказал Тодоренко в удовлетворении исковых требований. Отметим, еще давно у артистки появилась идея написать детскую книгу,&nbsp;...</p></div>
            </div>
        </a><a href='https://life.fakty.com.ua/ua/showbiz/cherez-napysannya-dytyachoyi-knygy-todorenko-prograla-sud-za-svoyu-reputacziyu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Через написання дитячої книги: Тодоренко програла суд за свою ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLdYNN46LeIgLEA8_CcP5cEMSJ57y02VhX_RgswjDNBwSEKt3US3hG00rpOoAvCrgDz_UbIfOh" alt="Через написання дитячої книги: Тодоренко програла суд за свою ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Останкінський райсуд Москви 22 листопада відмовив Тодоренко у задоволенні позовних вимог. Зазначимо, ще давно у артистки з&#39;явилася ідея написати дитячу книгу,&nbsp;...</p></div>
            </div>
        </a><a href='https://klops.ru/news/2022-11-23/261834-sekrety-semeynoy-zhizni-reginy-todorenko-chitayte-v-zhurnale-kaliningradskaya-antenna'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Секреты семейной жизни Регины Тодоренко: читайте в журнале ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVoPF1aulpmrZvhUCpty0prD1pH4U1pzMNDyOxaXtq1ExbWJOoj-6vBdXYh4PddG3PnJqyBh2j" alt="Секреты семейной жизни Регины Тодоренко: читайте в журнале ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Какой сюрприз случился в жизни Натальи Водяновой? Правда ли, что Гарик Харламов вернулся в Comedy Club? Что поразило президента США Байдена в операторе Первого&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liveresult.ru/news/153018'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд отказал Регине Тодоренко в выплате многомиллионной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTUOdLqrbs-CPcTOBjPPlvGZEmhOg3fve1R4IVfTvZnG6MmXiP6bMF3moKbnWBWtqfejwh5Uh4" alt="Суд отказал Регине Тодоренко в выплате многомиллионной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Регина Тодоренко недавно рассказала своим поклонникам, что очень хочет выпустить детскую книгу. Однако становиться автором сказок участница «Ледникового&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}