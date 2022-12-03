import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Callisto Protocol</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Callisto Protocol"/>
        <meta name="description" content="Trending News about The Callisto Protocol" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Callisto Protocol</h1>
            <Image width={800} height={500} src="https://images.unian.net/photos/2022_08/thumb_files/620_324_1661323614-6142.jpg?1" alt="The Callisto Protocol"/>
            <h3>Recent News</h3>
            <a href='https://www.unian.net/games/vyshel-horror-the-callisto-protocol-naslednik-dead-space-ocenki-ot-pressy-i-igrokov-12065052.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вышел хоррор The Callisto Protocol, наследник Dead Space ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtxim9ki8O7Ilh8O_yclWJKKHfgariLJjPIziYh999FjWmd8WKROb_O7SR9VXMYcBcSfkUbFvJ" alt="Вышел хоррор The Callisto Protocol, наследник Dead Space ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 2 декабря, вышел хоррор The Callisto Protocol, духовный наследник Dead Space. Журналисты приняли проект прохладно, а игроки и вовсе его разгромили.</p></div>
            </div>
        </a><a href='https://www.cybersport.ru/tags/games/avtory-the-callisto-protocol-priznali-problemy-pk-versii-igry-i-poobeshchali-vypustit-patch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Авторы The Callisto Protocol признали проблемы ПК-версии игры ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_VN4dYWHaJoqqMfIUVESw1kvC3zpQtbgbSRybuXi2oQGOFJFCQVapYa8GESyXuH9eKfeOUITp" alt="Авторы The Callisto Protocol признали проблемы ПК-версии игры ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>СтудияStriking Distance подтвердила наличие проблем с производительностьюThe Callisto Protocolна ПК. Сообщение разработчиков опубликовано в офиц...</p></div>
            </div>
        </a><a href='https://dtf.ru/hard/1480671-avtory-the-callisto-protocol-my-znaem-o-problemah-s-podtormazhivaniyami-na-pk-skoro-vyydet-patch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Авторы The Callisto Protocol: «Мы знаем о проблемах с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR-yZHKBLgB22K8npBaveiHlTTmAk-2jPI_E1BQKXH4oPMgGkCSkiKHCzNytHo7rNOqETY84wdO" alt="Авторы The Callisto Protocol: «Мы знаем о проблемах с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;re aware that some users are experiencing stuttering issues on the PC. We&#39;ve got a patch that will be available in a few hours to improve performance, with a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ixbt.com/live/games/nado-bylo-igru-nazvat-mertvaya-optimizaciya-u-the-callisto-protocol-22-polozhitelnyh-otzyvov-v-stim.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Надо было игру назвать Мёртвая Оптимизация» - у The Callisto ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQyoEFoP8cwYrt0SCGOM02Lephk_O4_-D_9F0dgg8Zj5Wa-DT3onA4SQv5RSj6BiQP0vPQmiAUO" alt="«Надо было игру назвать Мёртвая Оптимизация» - у The Callisto ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>До релиза The Callisto Protocol получила на Metacritic 75 баллов от различных игровых изданий. В основном игру ругали за плохую.</p></div>
            </div>
        </a><a href='https://www.overclockers.ua/news/games/2022-12-02/131846/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Проблемный релиз The Callisto Protocol и планы разработчиков ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSpjBBvgndkpn0Sx21jN10p7OSEwR-Ca34E__L6HStQLnDwLBlrX8xWG8j2xrXZ-i7NGTCnFebY" alt="Проблемный релиз The Callisto Protocol и планы разработчиков ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вчера состоялся релиз хоррора The Callisto Protocol от создателя Dead Space Глена Скофилда. События игры развиваются в будущем, на космической тюрьме.</p></div>
            </div>
        </a><a href='https://games.24tv.ua/ru/razrabotchik-gorora-the-callisto-protocol-rasskazal-chto-cherpal-vdohnovenie-v-izvestnom-multfilme_n2208700'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Разработчик хоррора The Callisto Protocol рассказал, что черпал ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTO9-8uIk9_X6lQYWFj4IC3QmcD3FwnK-T1dD6N4J1PFwy42iPAow-_KRRUiqVlEqQAV__yFpvF" alt="Разработчик хоррора The Callisto Protocol рассказал, что черпал ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вероятно, один из самых дружелюбных мультфильмов всех времен помог разработчику кровавого хоррора The Callisto Protocol в работе над рядом игровых элементов&nbsp;...</p></div>
            </div>
        </a><a href='https://shazoo.ru/2022/12/03/136169/razrabotciki-the-callisto-protocol-znaiut-o-problemax-pc-versii-i-skoro-vypustiat-patc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Разработчики The Callisto Protocol знают о проблемах PC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQeX1-CmaqdQpHsnEyb0WIMZwx-EV-jD-TlSdjMd-mERMmI7qihIJfBrHXHSLMApuoFEeiARn2O" alt="Разработчики The Callisto Protocol знают о проблемах PC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Callisto Protocol вышла не без проблем. PC-версия тайтла оказалась в ужасном техническом состоянии, а геймеры буквально утопили хоррор в отрицательных&nbsp;...</p></div>
            </div>
        </a><a href='https://games.24tv.ua/rozrobnik-gororu-the-callisto-protocol-rozpoviv-shho-cherpav_n2208613'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Розробник горору The Callisto Protocol розповів, що черпав ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTO9-8uIk9_X6lQYWFj4IC3QmcD3FwnK-T1dD6N4J1PFwy42iPAow-_KRRUiqVlEqQAV__yFpvF" alt="Розробник горору The Callisto Protocol розповів, що черпав ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ймовірно, один із найбільш доброзичливих мультфільмів усіх часів допоміг розробнику кривавого горору The Callisto Protocol у роботі над низкою ігрових&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}