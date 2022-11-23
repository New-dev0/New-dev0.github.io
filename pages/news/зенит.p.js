import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Зенит</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Зенит"/>
        <meta name="description" content="Trending News about Зенит" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Зенит</h1>
            <Image width={800} height={500} src="https://online47.ru/media/photo/article/__159780.jpg" alt="Зенит"/>
            <h3>Recent News</h3>
            <a href='https://online47.ru/2022/11/22/zenit-obygral-serbskuyu-tsrvenu-zvezdu-v-tovarishcheskom-matche-169072'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Зенит&quot; обыграл сербскую &quot;Црвену Звезду&quot; в товарищеском матче</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQASLuENDwcJD9IdBMDYMNtBUADLrtZARJFdbY8nQaEekwETEbYX0ko9qfeUWj4wC3lhuvWNPvz" alt="&quot;Зенит&quot; обыграл сербскую &quot;Црвену Звезду&quot; в товарищеском матче" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Отметим, что после 17 туров РПЛ &quot;сине-бело-голубые&quot; с 42 очками уверенно возглавляют турнирную таблицу. Ранее Online47 сообщал, что Организационный комитет&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4901631-zenit-obygral-crvenu-zvezdu-v-tovarischeskom-matche.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» обыграл «Црвену Звезду» в товарищеском матче</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRHgRIHp2FY9CUhLVlqc1fXCXt3lgF7id9VlWRrX-P26y8PzEggOvpD887toKvcofMuluH-k368" alt="«Зенит» обыграл «Црвену Звезду» в товарищеском матче" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В товарищеском матче «Зенит» встречался с сербской «Црвеной Звездой». Игра прошла на стадионе «Газпром Арена» в Санкт-Петербурге и завершилась со счётом 3:1&nbsp;...</p></div>
            </div>
        </a><a href='https://fc-zenit.ru/news/2022-11-22-zenit-tsrvena-zvezda-peterburzhtsy-oderzhali-volevuyu-pobedu.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» — «Црвена Звезда»: петербуржцы одержали волевую ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="«Зенит» — «Црвена Звезда»: петербуржцы одержали волевую ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Голы Сутормина, Ерохина и Мантуана принесли сине-бело-голубым победу в Winline Битве чемпионов. - новости футбольного клуба Зенит.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/friendly/reviews/zenit-crvena-zvezda-3-1-obzor-i-video-golov-tovarischeskogo-matcha-22-noyabrya-2022-goda-2001722/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» размялся на сербском гранде перед «Спартаком ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSji75OyXZc6hjwZPZmAVfwX__sN7Ygzun57bLrY5MJSuyuOqE--RGOlDZAVJBTzyT6UZYk0cBG" alt="«Зенит» размялся на сербском гранде перед «Спартаком ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сине-бело-голубые обыграли чемпиона Сербии в товарищеском матче. Матч российского клуба против зарубежного — всегда событие. А в 2022 году это еще и стало&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/22/71837762/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» обыграл «Црвену Звезду» на «Газпром Арене»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTI1B2erRrwFdwgg1gxO-IAHVfsDzy4wuNG7nhlBFTWpAOwLKE4tQUYSqN9boiOzabcYizyGLy9" alt="«Зенит» обыграл «Црвену Звезду» на «Газпром Арене»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Победой футбольного клуба «Зенит» завершился товарищеский матч с сербской «Црвеной Звездой». Игра прошла 22 ноября на стадионе - Спорт - 22 ноября 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-11-22/zenit-vyigral-tovarischeskiy-match-u-belgradskoy-tsrveny-zvezdy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зенит» выиграл товарищеский матч у белградской «Црвены ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS4yIKWgAJXDTE932iJAGH-QX7a54213PRJiL0Hx-dVlmLR1qweVFFozHuMw3YMM0T4Zqw9MDLx" alt="«Зенит» выиграл товарищеский матч у белградской «Црвены ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чемпионы России сыграли с чемпионами Сербии на «Газпром Арене», хозяева поля одержали победу 3:1.</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/22/71836619/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Добрый розыгрыш. Билеты на матч «Зенит» — «Спартак» и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0JRGjnGuGMEtlVOqKqD66rAmr_M8OQqC3zGUzsmCT07i32YwyebaYfaEMDUzwUX0jg04_fIQ2" alt="Добрый розыгрыш. Билеты на матч «Зенит» — «Спартак» и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Добрый розыгрыш. Билеты на матч «Зенит» — «Спартак» и футболка Кержакова за помощь детям. 22 ноября 2022, 15:50. 1584.</p></div>
            </div>
        </a><a href='https://izvmor.ru/novosti/sport/levandovskij-zabivaet-za-zenit-na-futbolnom-turnire-v-saranske/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Левандовский забивает за «Зенит» на футбольном турнире в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdMD9x8quti3ySzIVR-qxqGClp2FKZLXfqGNgfwoWRb1tqSURnTwxLny335NbJ6W07EYwty5Jn" alt="Левандовский забивает за «Зенит» на футбольном турнире в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Саранске стартовали матчи Мемориала Петра Пискунова - турнира среди юношеских команд 2008 года рождения и младше. В борьбу за призы и медали под сводами.</p></div>
            </div>
        </a>
        </Template></>;
}