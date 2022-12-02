import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Spotify</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Spotify"/>
        <meta name="description" content="Trending News about Spotify" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Spotify</h1>
            <Image width={800} height={500} src="https://showbi.ru/upload/2022/12/02/20221202004400-44bf1474.jpg" alt="Spotify"/>
            <h3>Recent News</h3>
            <a href='https://newsmuz.com/news/mix/spotify-nazval-luchshih-v-2022-godu-47973'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spotify назвал лучших в 2022 году</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT3FvEFfswwxi26kMNUu6gt_U7Sql1v4ubKjsj8Vb_aeZAPslFChT6jM5Yz0FhsSBJ1As52qtP2" alt="Spotify назвал лучших в 2022 году" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Стриминговый сервис Spotify подвел итоги года и назвал самых прослушиваемых артистов, самых &quot;вирусных&quot; исполнителей, лучшие песни и альбомы.</p></div>
            </div>
        </a><a href='https://medialeaks.ru/0112rgg-str-int-spotify/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кто вы по типу личности от Spotify. Музыкальный сервис ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_r4WBCP3v0qG0SQ28Lp9dxzHhykZ4C4wBRmVMzyRKKvLaxiDk-Gvl8OClkQqnfxCiiTmsWZXG" alt="Кто вы по типу личности от Spotify. Музыкальный сервис ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пользователи Spotify определяют, какой у них тип личности. Музыкальный сервис анализирует плейлист меломана и выбирает характеристики из 16 вариантов.</p></div>
            </div>
        </a><a href='https://itc.ua/news/spotify-wrapped-2022-luchshye-yspolnytely-pesny-y-podkasty-platformy-a-takzhe-vozmozhnost-podvesty-sobstvennye-muzykalnye-ytogy-goda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spotify Wrapped 2022: лучшие исполнители, песни и подкасты ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSKzzSdQZ-G-GM_B6Xunc-bzM4W3znsGvYPXUL2jkKvuHXxLUQT10-TX2yEX24OkKbClM3WNQ7k" alt="Spotify Wrapped 2022: лучшие исполнители, песни и подкасты ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Функция Spotify Wrapped дает возможность пользователям просмотреть аналитику по их собственным годовым музыкальным предпочтениям, а также публикует общую.</p></div>
            </div>
        </a><a href='https://mobile-review.com/all/news/spotify-predstavil-servis-personalizirovannyh-nastroek-wrapped/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spotify представил сервис персонализированных настроек ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTV6_UydD6n57vCYVdGdUv5WyrqRO6JRFas6emD_n6cgymrDKUBB2FLlmsNzTvvGFui5pRAAFVK" alt="Spotify представил сервис персонализированных настроек ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spotify Wrapped анализирует музыку, которую слушает пользователь, и присваивает ему одну из 16 лестных категорий, например, «Специалист», «Авантюрист» или «&nbsp;...</p></div>
            </div>
        </a><a href='https://itzine.ru/news/services/spotify-has-summed-up-the-musical-results-of-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spotify подвёл музыкальные итоги 2022 года</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcThhY-K-gNHGFhztspSEEooFgblhuyaoxICBTEZ5cUKpq9HGcFPU6bk9kfC91VFKaVjngv49WAq" alt="Spotify подвёл музыкальные итоги 2022 года" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spotify Wrapped — это ежегодный обзор вкусов пользователей, которым можно поделиться со своими подписчиками в соц.сетях. Помимо индивидуальных итогов&nbsp;...</p></div>
            </div>
        </a><a href='https://www.buro247.ru/news/culture/1-dec-2022-bad-bunny-popular-artist-spotify.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bad Bunny стал самым популярным артистом 2022 года по ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxIEwwkzZKgcwTMhZwDRisYfh1jl_wYb8enfs-1PGAnn7xzCiaRrhmofa3lprAoeWrXC7Gtwaq" alt="Bad Bunny стал самым популярным артистом 2022 года по ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spotify подвел итоги 2022 года. Самым популярным артистом по версии стримингового сервиса стал пуэрториканец Bad Bunny. За ним расположились Тейлор Свифт и&nbsp;...</p></div>
            </div>
        </a><a href='https://rozetked.me/news/26667-spotify-vypustil-wrapped-2022-personal-nye-i-obschie-muzykal-nye-itogi-goda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spotify выпустила Wrapped 2022 — персональные и общие ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTuO_jZoLkI3tW_4evO0Q-bY4OnoM4_aqYObEV9c_A-D3udw21OBsqpNB63DMhWo7z8cVc3ViiD" alt="Spotify выпустила Wrapped 2022 — персональные и общие ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Персональный Spotify Wrapped показывает, сколько времени в этом году пользователь потратил на прослушивание музыки. Также из подборки можно узнать пятёрку часто&nbsp;...</p></div>
            </div>
        </a><a href='https://vesti.ua/lite/showbiz/servis-spotify-nazval-samye-populyarnye-pesni-i-luchshih-ispolnitelej-goda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сервис Spotify назвал самые популярные песни и лучших ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRzqgNaG_3pnq6L79ov0iyn-4F8UEqqoCapoEDbdP8AViasnT24gC9eoHYNTiDjX4qj9KebINva" alt="Сервис Spotify назвал самые популярные песни и лучших ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рейтинг базируется на количествах прослушиваний внутри сервиса. Самые прослушиваемые артисты 2022. Рейтинг открыл Bad Bunny – пуэрто-риканский рэпер, певец,&nbsp;...</p></div>
            </div>
        </a><a href='https://it-here.ru/novosti/v-spotify-opublikovali-rejting-trekov-2022-goda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Spotify опубликовали рейтинг треков 2022 года</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROFswQIerCxnL8OnARbkWmVAiAqfWatvQWg35_RL7w1HWzsjBqs-cHqvwADOjLWOE1MkE82s2p" alt="В Spotify опубликовали рейтинг треков 2022 года" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В приложении Spotify опубликовали рейтинг треков 2022 года. Вы можете узнать своих любимых исполнителей, песни и жанры за прошедший год.</p></div>
            </div>
        </a>
        </Template></>;
}