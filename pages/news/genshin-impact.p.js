import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Genshin Impact</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Genshin Impact"/>
        <meta name="description" content="Trending News about Genshin Impact" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Genshin Impact</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/7/4c/4905061.jpg" alt="Genshin Impact"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/cybersport/news-4905061-data-vyhoda-genshin-impact-3-3-novye-personazhi-zadaniya-kartochnaya-igra-i-novaya-syuzhetnaya-glava.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Что нужно знать про обновление 3.3 для Genshin Impact</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQy-3OQYzu6x2dF8-Mo_K1XNYcGA4DSa2t_HTYWWCEVdlF-7nhTa4wVBx8DM6BRh9Z6jDe08Pik" alt="Что нужно знать про обновление 3.3 для Genshin Impact" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HoYoverse выпустит обновление 3.3 для Genshin Impact 7 декабря. Благодаря апдейту игра получит ожидаемую многими фанатами карточную игру Genius Invokation.</p></div>
            </div>
        </a><a href='https://www.ixbt.com/live/games/genshin-impact-33---istoriya-strannika.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Genshin Impact 3.3: История Странника / Компьютерные и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQv0R8xZysOjuv4aKTEyTXptJUL5kK7LpogWXwezOEaA8ycDvPtlWTjbdZCJD0PK9oMC6_-Y6kj" alt="Genshin Impact 3.3: История Странника / Компьютерные и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Краткие итоги стрима разработчиков проекта Genshin Impact, посвященного версии 3.3.Тут у нас прошёл очередной стрим разработчиков из miHoYo (HoyoVerse),&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cybersport.ru/tags/games/avtory-genshin-impact-podelilis-podrobnostiami-o-patche-3-3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Авторы Genshin Impact поделились подробностями о патче 3.3</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQlGo9sr8jg4dtDNbnL6PJcd40lDAOA2lk1j5B0gd_P1G9Mu9meC8txM9hagbXL5uKQOJhz8R1U" alt="Авторы Genshin Impact поделились подробностями о патче 3.3" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Студия miHoYo анонсировала обновление 3.3 под названием «Всё зримое — явь, всё сущее— тлен» дляGenshin Impact.25 ноября разработчики провели пре...</p></div>
            </div>
        </a><a href='https://www.playground.ru/genshin_impact/news/vse_o_genshin_impact_3_3_zavershenie_sumeru_novyj_region_i_promo_kody-1248487'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Все о Genshin Impact 3.3 - завершение Сумеру, новый регион и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7wl66xEhj-YkVZOmps2GdyBYl0rDktiRNcxjL4bkjcdiQ4IjJGvregoBuPJ6oMoN5yb9Cq7NJ" alt="Все о Genshin Impact 3.3 - завершение Сумеру, новый регион и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Долгожданный патч 3.3 для Genshin Impact выходит уже 7 декабря, что подтвердилось на трансляции прошедшей сегодня. Но это, естественно, далеко не все,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.igromania.ru/news/121025/Karty_pryatki_dva_geroya_anonsirovano_obnovlenie_3.3_k_Genshin_Impact.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Карты, прятки, два героя: анонсировано обновление 3.3 к ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-j5Hq32XLb-FMPBdlttmO2PMruTozVFF6GqaZ7kAxf0bkqsPJUZVykyXkXJzY5SiPpifEIZW4" alt="Карты, прятки, два героя: анонсировано обновление 3.3 к ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Компания HoYoverse провела официальную трансляцию, в ходе которой представила грядущее обновление 3.3 к Genshin Impact. Оно получило название «Всё зримое&nbsp;...</p></div>
            </div>
        </a><a href='https://gamemag.ru/news/173571/genshin-impact-gta-project-sh-mihoyo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Разработчики Genshin Impact закрыли студию в Монреале и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQjPV_wiUczIDGo6lYQpLGTScD4PIP27ZpP7PQaC_RpCC5EIUkCduFvFnlzjtso1b1ieg7cK2Dv" alt="Разработчики Genshin Impact закрыли студию в Монреале и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Генеральный директор и основатель miHoYo Цай Хаоюй объявил о превращении разработки игры, проходившей под рабочим названием Project SH.</p></div>
            </div>
        </a><a href='https://dtf.ru/games/1466277-vse-zrimoe-yav-vse-sushchee-tlen-treyler-versii-3-3-dlya-genshin-impact'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Всё зримое — явь, всё сущее — тлен» — трейлер версии 3.3 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQz5fMC51r97iTYQ7FWRt2MmxYmy5yRk6at0JYKc4FRqfcrGo5rNN99TEQhfslc5WH8RHBaz1D3" alt="«Всё зримое — явь, всё сущее — тлен» — трейлер версии 3.3 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Несколько часов назад закончилась официальная трансляция HoYoverse, где были анонсированы новинки версии 3.3, включая новые баннеры и рераны. Почти в это же&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cybersport.ru/tags/games/smi-avtory-genshin-impact-otmenili-razrabotku-dvukhmernoi-gta'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Авторы Genshin Impact отменили разработку двухмерной GTA</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTlpGUNLxqpBMBVoNRwCLHmScCTB6EsLQiomeP8vG0tAuJqIvvxiJoCqn5UTbHJsWTVRl7SdbY9" alt="Авторы Genshin Impact отменили разработку двухмерной GTA" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Студия miHoYo, разработчик Genshin Impact, прекратила работу над Project SH. Об этом сообщило издание GameLook со ссылкой на письмо из внутренней&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goha.ru/v-genshin-impact-prohodit-brauzernoe-sobytie-bezzabotnaya-strana-grez-lK0n6Q'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Genshin Impact проходит браузерное событие &quot;Беззаботная ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS2QXoTlAGa2lDPKSfB4kFlraeAnmz5ZXpRCIrYvUMFnamsgRSnTJkzSlTaU5RotIs1dqZlUT7M" alt="В Genshin Impact проходит браузерное событие &quot;Беззаботная ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В одной из лучших игр современности, приключенческой Genshin Impact от компании HoYoverse, началось браузерное событие “Беззаботная страна грез”.</p></div>
            </div>
        </a><a href='https://cq.ru/news/gaming/vse-podrobnosti-obnovleniia-33-dlia-genshin-impact'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Все подробности обновления 3.3 для Genshin Impact</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSytKwoGQQDnOzrLLMsjMIX2OQrQoXqhOD3Hz_dmb5VJgHdXQpKcyrOZCQKrqPaXPDchyUXThTy" alt="Все подробности обновления 3.3 для Genshin Impact" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Студия miHoYo провела презентацию свежего обновления для Genshin Impact под номером 3.3. Апдейт выйдет 7 декабря — он будет последним в 2022-м.</p></div>
            </div>
        </a>
        </Template></>;
}