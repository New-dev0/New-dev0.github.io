import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Оренбург – Ростов</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Оренбург – Ростов"/>
        <meta name="description" content="Trending News about Оренбург – Ростов" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Оренбург – Ростов</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/3/e1/4902399.jpg" alt="Оренбург – Ростов"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/football/news-4902399-orenburg-rostov-startovye-sostavy-komand-na-match-kubka-rossii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Оренбург» — «Ростов»: стартовые составы команд на матч ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRUU6rHb441FqVGqWNTRCisyGTzl6r6fgFm1wWxJSf6xbyAQle8bbQDJkFTckeXJEIELfDSLGwh" alt="«Оренбург» — «Ростов»: стартовые составы команд на матч ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cегодня, 23 ноября, на стадионе «Газовик» в Оренбурге состоится матч 5-го раунда группового этапа Пути РПЛ группы C Фонбет Кубка России. Сыграют местный&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/rus_cup/news/orenburg-rostov-vremya-nachala-matcha-kubka-rossii-23-noyabrya-2022-goda-gde-smotret-pryamuyu-translyaciyu-2001885/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Оренбург» — «Ростов»: смотреть прямую трансляцию матча ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHmjRhfDgfXa5w4NFFW5W0KH9mvdSiJfIY8JJhenKHNwRbU5rdlGvDbd5IV_oJy3un58mdm1y-" alt="«Оренбург» — «Ростов»: смотреть прямую трансляцию матча ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В среду, 23 ноября, состоится матч 5-го тура группового турнира Пути РПЛ Кубка России между «Оренбургом» и «Ростовом».</p></div>
            </div>
        </a><a href='https://www.sport.ru/football/futbol-kubok-rossii-orenburg-rostov-pryamaya-tekstovaya-onlayn-translyatsiya/article535765/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Футбол, Кубок России, Оренбург - Ростов, прямая текстовая ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRz4D9YS34YYEuvZeeVRoDAciZNWa7ISkFXM7_7MGoei1dk30J3dnwNfL1vHoV6NcrW7-64F42H" alt="Футбол, Кубок России, Оренбург - Ростов, прямая текстовая ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Источник: Sport.ru. Sport.ru/Футбол. Сегодня, 23 ноября, в рамках 5 тура Кубка России &quot;Оренбург&quot; примет &quot;Ростов&quot; Sport.ru проведёт прямую текстовую онлайн&nbsp;...</p></div>
            </div>
        </a><a href='https://bobsoccer.ru/user/45282/blog/orenburg---rostov-sostavy-komand-na-match-kubka-rossii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Оренбург&quot; - &quot;Ростов&quot;: составы команд на матч Кубка России</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;Оренбург&quot; - &quot;Ростов&quot;: составы команд на матч Кубка России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Матчи Фонбет Кубка России сегодня начнутся в Оренбурге, где одноименная команда принимает &quot;Ростов&quot;.</p></div>
            </div>
        </a><a href='https://sport24.ru/news/football/2022-11-23-orenburg-rostov-smotret-besplatno-orenburg-rostov-onlayn-translyatsiya-orenburg-rostov-pryamaya-translyatsiya-orenburg-rostov-pryamoy-efir-orenburg-rostov-kubok-rossii-gde-smotret'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кубок России. «Оренбург» — «Ростов». Прямая трансляция</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRjkuMFtwlyZgk3vkB5fCdNGQFlchJ5Q3_3hU0Vdeup2P9JLQrBmj6ugxvEeY0miK3qSvQLb9Lk" alt="Кубок России. «Оренбург» — «Ростов». Прямая трансляция" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самые свежие новости российского и мирового спорта только на сайте Sport24.ru! Интервью со спортсменами, онлайн трансляции, аналитика и прогнозы,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liveresult.ru/news/152898'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оренбург – Ростов: прямая трансляция, где смотреть матч онлайн</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_DhYKvL_KPRuV8SXXffiiQ13TQrLREp6dUBeP2z9-Kh3cdxcEy48PJnVCLyz5kQklV5uI6_5c" alt="Оренбург – Ростов: прямая трансляция, где смотреть матч онлайн" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В среду, 23 ноября, состоится матч пятого тура группового этапа Фонбет Кубка России, в котором «Оренбург» сыграет дома с «Ростовом»</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/spbnews_NI1728704_Orenburg_obygral_Rostov_i_vozglavil_gruppu_v_Kubke_Rossii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Оренбург» обыграл «Ростов» и возглавил группу в Кубке России</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTp7piU2B9gywnuKboBYrDun34OknECpMcd3qfCKruhbXdaacZ_Gu8RvbEkOGS9iY-aIzEw1OZy" alt="«Оренбург» обыграл «Ростов» и возглавил группу в Кубке России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Оренбург» дома добился уверенной победы над «Ростовом» (4:2) в матче 5‑го тура Пути РПЛ ФОНБЕТ Кубка России.</p></div>
            </div>
        </a>
        </Template></>;
}