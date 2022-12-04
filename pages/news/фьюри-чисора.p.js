import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Фьюри Чисора</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Фьюри Чисора"/>
        <meta name="description" content="Trending News about Фьюри Чисора" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Фьюри Чисора</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/184/1843419/large.jpg" alt="Фьюри Чисора"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/boxing/professional/online/fyuri-chisora-smotret-translyaciyu-boya-tayson-fyuri-derek-chisora-rezultat-i-onlayn-poedinka-3-dekabrya-boks-2006473/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фьюри — Чисора: Цыганский король одержал новую победу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6A66a3wdF5_oD_6iAcBLozEvYc2K9OQ3qIcVx1aaqEUi2fl8BtGORjskktwemOgohJBTm9E6X" alt="Фьюри — Чисора: Цыганский король одержал новую победу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бокс, бой Тайсон Фьюри — Дерек Чисора: где смотреть трансляцию боя Фьюри — Чисора, дата и время начала, во сколько прямой эфир текстовый онлайн поединка,&nbsp;...</p></div>
            </div>
        </a><a href='https://vringe.com/news/160731-fyuri-chisora-3-rezultaty-live.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фьюри – Чисора 3. Результаты из Лондона</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9OhgqWRjII2EkEmtyiYTJWmBjZGTPeB-LaD0tvH8lv6nSLJs8U_M4HfmJy4q2h8xybH3qR9_w" alt="Фьюри – Чисора 3. Результаты из Лондона" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Во втором по значимости событии шоу обладатель титула чемпиона мира WBA World в супертяжёлом весе британец Дэниел Дюбуа (18-1, 17 КО) провёл защиту против&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/boxing/news-4915809-tasjon-fyuri-pobedil-dereka-chisoru-i-zaschitil-titul-chempiona-wbc.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тайсон Фьюри победил Дерека Чисору и защитил титул ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT8W9XPqqqH6h3P6ghWFE9A9C8_jfeE1kGkdczcDYXHZORU96-LQZedgtpGpBWIegIbXM1wbqvp" alt="Тайсон Фьюри победил Дерека Чисору и защитил титул ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Лондоне (Великобритания) завершился боксёрский вечер, в главном бою которого чемпион мира по версии WBC в супертяжёлом весе 34-летний британец Тайсон&nbsp;...</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/sport/box/tajson-fyuri-derek-chisora-rezultat-boya.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тайсон Фьюри досрочно победил Дерека Чисору</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT3i42HZKg-IupmLCFYGdAdHak0O-NwqTlhhaxdoODhI7ch71OZRC7-Tk8erDiwIfTW0LgRVGWR" alt="Тайсон Фьюри досрочно победил Дерека Чисору" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2,7 т. Только проверенная информация у нас в Telegram-канале Obozrevatel и в Viber . Не ведитесь на фейки!</p></div>
            </div>
        </a><a href='https://sport24.ua/ru/box/news/31968-fjuri-chisora-izvestno-skolko-zarabotajut-boksery'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фьюри – Чисора: известно, сколько заработают боксеры</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCUCCOsmGtt30rLLnnddOcUsYBUL75E_Q49aljfLGOhY7dBt6wgfddi3rVjihwi8PiCDwVvfEn" alt="Фьюри – Чисора: известно, сколько заработают боксеры" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Британские журналисты выяснили, какие гонорары получат Тайсон Фьюри и Дерек Чисора за свой третий поединок. Действующий чемпион мира по версии WBC Фьюри&nbsp;...</p></div>
            </div>
        </a><a href='https://sportarena.com/boxing/fyuri-chisora-polnoe-video-boya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фьюри — Чисора: полное видео боя</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTRa9nEACNnHBeOF8X85ypdCqoYiov3jznyr1j9tI9sEUwRpyjfQO6Hmotuo2Ii3z2ngFLNY7jX" alt="Фьюри — Чисора: полное видео боя" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лучшие моменты боя Фьюри - Чисора, полное видео и обзор боя, в котором Тайсон Фьюри провел третий поединок против Дерека Чисоры.</p></div>
            </div>
        </a><a href='https://sport.24tv.ua/ru/fjuri-chisora-rezultat-boja-03-12-2022-kto-pobedil_n2209177'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На глазах у Усика: Фьюри защитил титул WBC в финале ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkAv91iIgT0tA8jQ6AmcTQEavUMkzQCAqXB2JYnwLuZseJqL1PxmUhjB-_V4fsSrHFDgtubuQz" alt="На глазах у Усика: Фьюри защитил титул WBC в финале ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На глазах у Усика: Фьюри защитил титул WBC в финале трилогии против дряблого Чисоры ... Бой Тайсона Фьюри и Дерека Чисоры стал главным событием вечера бокса на &quot;&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}