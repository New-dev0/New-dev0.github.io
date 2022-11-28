import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ростов – Ахмат</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ростов – Ахмат"/>
        <meta name="description" content="Trending News about Ростов – Ахмат" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ростов – Ахмат</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/img-gen/%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB+%5C%5C+%D0%9A%D1%83%D0%B1%D0%BE%D0%BA+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8/%C2%AB%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%C2%BB%C2%A0%E2%80%94+%C2%AB%D0%90%D1%85%D0%BC%D0%B0%D1%82%C2%BB%3A+%D1%81%D1%82%D0%B0%D1%80%D1%82%D0%BE%D0%B2%D1%8B%D0%B5+%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D1%8B+%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4+%D0%BD%D0%B0%C2%A0%D0%BC%D0%B0%D1%82%D1%87+6-%D0%B3%D0%BE+%D1%82%D1%83%D1%80%D0%B0+%D0%9A%D1%83%D0%B1%D0%BA%D0%B0+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8%2C+27%C2%A0%D0%BD%D0%BE%D1%8F%D0%B1%D1%80%D1%8F+2022+%D0%B3%D0%BE%D0%B4%D0%B0.jpg" alt="Ростов – Ахмат"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/rus_cup/news/rostov-ahmat-startovye-sostavy-komand-na-match-6-go-tura-kubka-rossii-27-noyabrya-2022-goda-2003949/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Ростов» — «Ахмат»: стартовые составы команд на матч 6-го ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfxkTO5yJi8UgIz01H3XwTaY8rfw-ERTe37Y7dn_0joh9jjMvZTMAmApSgWpvqYRCKtuFCJMC7" alt="«Ростов» — «Ахмат»: стартовые составы команд на матч 6-го ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ЧМ-2022 и Кубок России: какой из этих турниров вы смотрите? ЧМ-2022. Кубок России. переключаюсь между матчами.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4907303-rostov-ahmat-sostavy-komand-na-match-kubka-rossii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Ростов» — «Ахмат»: составы команд на матч Кубка России</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYS_Z8k486BtjCU2JBjJ10_1AaOWr3V6qIygovGdGQkArh0Na5q4LS9J_QOclcGG5hrrHgQl8A" alt="«Ростов» — «Ахмат»: составы команд на матч Кубка России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Стали известны стартовые составы «Ростова» и «Ахмата» на матч группового этапа Кубка России сезона-2022/2023. Встреча пройдёт на стадионе «Ростов Арена» в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/football/1113660981-rostov-axmat-onlajn-translyacziya-nachnetsya-v-1400.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Ростов» разгромил «Ахмат» в Кубке – 3:0. Забили Лангович ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWyVsjcOFmA2ckSNyn7nQyeTKK0qQdHjsvy-p2NwOpWRXozgs2t1dQkx9tTxkzQEOItjHwWTtA" alt="«Ростов» разгромил «Ахмат» в Кубке – 3:0. Забили Лангович ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sports.ru вел текстовую онлайн-трансляцию матча. Андрей Лангович и Николай Комличенко забили два гола за «Ростов» в первом тайме. Егор Голенков на 86-й минуте&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rusfootball.info/pliga/1146689889-rostov-razgromil-ahmat-i-vyshel-v-verhnyuyu-setku-pley-off-kubka-rossii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ростов&quot; разгромил &quot;Ахмат&quot; и вышел в верхнюю сетку плей-офф ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7ZKg-KPQW9JWJCcdeM6nIKQTdI16G1LqLJjkrsHY0F8MHTNQ6vcWZnb7aCvt4Fn7Cf5TZVjuI" alt="&quot;Ростов&quot; разгромил &quot;Ахмат&quot; и вышел в верхнюю сетку плей-офф ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ростов с разгромным счетом обыграл Ахмат в 6-м туре Кубка России (3:0). Встреча проходила в Ростове-на-Дону. Хозяева поля открыли счет на 17-й минуте&nbsp;...</p></div>
            </div>
        </a><a href='https://bobsoccer.ru/user/45282/blog/rostov-i-ahmat-objavili-sostavy-na-match-kubka-rossii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ростов&quot; и &quot;Ахмат&quot; объявили составы на матч Кубка России</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;Ростов&quot; и &quot;Ахмат&quot; объявили составы на матч Кубка России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Встреча начнется в 14:00 мск и пройдет на &quot;Ростов Арене&quot;. Этот матч станет последним для команд в 2022 году. &quot;Ростов&quot;: Песьяков, Чернов, Осипенко, Мелехин,&nbsp;...</p></div>
            </div>
        </a><a href='https://sport24.ru/news/football/2022-11-27-rostov-akhmat-smotret-besplatno-rostov-akhmat-onlayn-translyatsiya-rostov-akhmat-pryamaya-translyatsiya-rostov-akhmat-pryamoy-efir-rostov-akhmat-kubok-rossii-gde-smotret'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кубок России. «Ростов» — «Ахмат». Прямая трансляция</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRjkuMFtwlyZgk3vkB5fCdNGQFlchJ5Q3_3hU0Vdeup2P9JLQrBmj6ugxvEeY0miK3qSvQLb9Lk" alt="Кубок России. «Ростов» — «Ахмат». Прямая трансляция" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самые свежие новости российского и мирового спорта только на сайте Sport24.ru! Интервью со спортсменами, онлайн трансляции, аналитика и прогнозы,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}