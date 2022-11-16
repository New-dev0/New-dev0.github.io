import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Роналду</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Роналду"/>
        <meta name="description" content="Trending News about Роналду" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Роналду</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/5/90/4891949.jpg" alt="Роналду"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/football/news-4891949-fernandesh-holodno-poprivetstvoval-ronaldu-posle-skandalnogo-intervyu-forvarda-video.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фернандеш холодно поприветствовал Роналду после ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTl9oNouArEpXR52bC1mIjDO88GeIygbndEanxGPSZBZc-INplB-OpN1yGyQ63AzzSDq-ScKg-D" alt="Фернандеш холодно поприветствовал Роналду после ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Сеть попало видео первой встречи Бруну Фернандеша и Криштиану Роналду после скандального интервью форварда. Роналду публично раскритиковал тренерский штаб&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/england/reviews/krishtianu-ronaldu-raskritikoval-manchester-yunayted-v-skandalnom-intervyu-1997971/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Меня предали». Роналду в скандальном интервью разгромил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYkeP4rsyEQTpzdY1u6UFXwmtwuhgVLeeZGdh_sxOAaQu2rASWWMYlqCyi9LyjDZFp2gUgPgPw" alt="«Меня предали». Роналду в скандальном интервью разгромил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Как теперь возвращаться на «Олд Траффорд»? Перед стартом чемпионата мира, сразу после того как европейский клубный футбол ушел на зимнюю паузу, Криштиану&nbsp;...</p></div>
            </div>
        </a><a href='https://sportmail.ru/news/football-foreign/53880552/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Легенда МЮ высказался о будущем Роналду в клубе после ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTsC107ewWc1fuShDeaALj0wR6gfqdENyx1Daub1vcineRF4el_LF8zWlBRlTB--aUeiCUqPmsp" alt="Легенда МЮ высказался о будущем Роналду в клубе после ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бывший игрок сборной Англии и легендарный защитник МЮ Рио Фердинанд высказался о будущем Криштиану Роналду в команде. Об этом сообщает Manchester Evening&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/tribuna/blogs/kopylov/3093714.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Интервью Роналду – дешевый популизм. Переворачивает ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQIvBA2TCdgYRNMZX8bpPF8WoEtX82yllPIeecwoTlj8S4GxoF1w94-k2ZANhGoncP3Z5WpNmt0" alt="Интервью Роналду – дешевый популизм. Переворачивает ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Здесь пока ничего нет. Пост написан пользователем Sports.ru. Создайте свой блог на Трибуне, выскажитесь и станьте суперзвездой Sports.ru. Создать блог&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/spbnews_NI1724173_Ronaldu_publichno_raznes_Man_Junajted_Obratno_v_klub_jego_uzhe_tochno_ne_pustat'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Роналду публично разнес «Ман Юнайтед». Обратно в клуб его ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTtu8Lb8CIN4KlFGCcfUJbT2bS3RQebxvPfrRwJ9xeHUFvUfVf9TDKAm0xkyRj6EaqtAJedH4pp" alt="Роналду публично разнес «Ман Юнайтед». Обратно в клуб его ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Криштиану не пожалел даже главного тренера. Очень неоднозначный поступок футболиста! Фото: © Robbie Jay Barratt - AMA / Contributor / Getty Images Sport&nbsp;...</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/6371eb509a794756d6c21878'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Меня предали». О чем Роналду рассказал в интервью</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBhYCkmgn66-6qpqNuP_RdJmKoKR-Fsjlwxi70Ya8vtxZQQPxk-Tig8djB7nQXVVVOH6h7z2HW" alt="«Меня предали». О чем Роналду рассказал в интервью" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Британский таблоид The Sun анонсировал интервью с Криштиану Роналду для шоу Piers Morgan Uncensored. Футболист заявил о предательстве в «Манчестер Юнайтед»,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/foreign/reviews/futbol-itogi-poloviny-sezona-v-evrope-skandaly-krishtianu-ronaldu-v-myu-magiya-hvichi-kvarachelii-i-ryvok-arsenala-1998147/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Скандалы Роналду, магия Хвичи, рывок «Арсенала». Итоги ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR8daadia90Pucnkgyb3OKPxeL5QKFb2u7gcKgGOFA9hOenvwKPnRcpQDbcSBAw8ipj-8FNhTug" alt="Скандалы Роналду, магия Хвичи, рывок «Арсенала». Итоги ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Европейские чемпионаты ушли на зимнюю пазу — время подводить итоги первой половины зарубежного сезона. Расскажем про самые яркие и знаковые моменты в двух&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4891601-potter-plyvyot-a-ronaldu-kazhetsya-utonul-hit-127.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Поттер плывёт, а Роналду, кажется, утонул. ХиТ #127</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSRSGD-_QlFBIbUavPbdYFGAKBMBuEhifBQMPq-Ld5B86bTgDyqoS8pz0CaliCzS2U79jOZ8LJm" alt="Поттер плывёт, а Роналду, кажется, утонул. ХиТ #127" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>00:10 – Привет, катаклизм 01:14 – Что творится с «Челси»? А чем симпатичен проект «Ньюкасла»? 18:13 – Жалобы Конте и дубль Бетанкура</p></div>
            </div>
        </a><a href='https://bobsoccer.ru/user/2102/blog/karrager-objasnil-motivy-skandalnogo-intervju-ronaldu-pro-manchester-junajted.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Каррагер объяснил мотивы скандального интервью Роналду про ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Каррагер объяснил мотивы скандального интервью Роналду про ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бывший защитник «Ливерпуля» Джейми Каррагер поделился мнением о выходе скандального интервью Криштиану Роналду, который раскритиковал руководство «Манчестер&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/football/1113244657-kompaniya-krishtianu-insparya-vlozhila-2-mln-evro-v-czentr-lecheniya-o.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Компания Роналду вложила 2 млн евро в центр лечения ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBX6Y3aKbVwnIglLvsM9bfhZS5puqHV2prCZWlCvsz0IFTwHrJWdUc5sZ5XM9eNA-J33jisFWt" alt="Компания Роналду вложила 2 млн евро в центр лечения ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Insparya, основанная Криштиану Роналду и португальцем Паулу Рамошем, открыла в понедельник в Милане центр, занимающийся исключительно диагностикой, лечением и&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}