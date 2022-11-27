import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Кубок России</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Кубок России"/>
        <meta name="description" content="Trending News about Кубок России" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Кубок России</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/184/1840567/large.jpg" alt="Кубок России"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/rus_cup/videoreports/torpedo-ural-1-2-kubok-rossii-smotret-onlayn-videoobzor-26-noyabrya-2022-goda-2003576/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Торпедо — Урал — 1:2, Кубок России: смотреть онлайн ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRXGBFvrlFv1IAEBecJqO1Hx8r8SrKjzoFfgfBtqTdlj7eig9GHKvk6bMXmnYVL7tjGLRCKnnPM" alt="Торпедо — Урал — 1:2, Кубок России: смотреть онлайн ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Урал» в гостях обыграл «Торпедо» в матче 6-го тура группового турнира Пути РПЛ Кубка России — 2:1.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4906425-ural-obygral-torpedo-v-kubke-rossii-i-stal-pervym-v-gruppe-d.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Урал» обыграл «Торпедо» в Кубке России и стал первым в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRdhK2rk22RdPgrZ0n4NQHA2nXR9bF1zvt36BrxWokuH-2Y2H8jcR_iNe4xl94yrha2rhIHKO8I" alt="«Урал» обыграл «Торпедо» в Кубке России и стал первым в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Завершился матч 6-го тура группового этапа Кубка России, в котором «Торпедо» на стадионе «Лужники» принимало «Урал». Финальный свисток Яна Бобровского из&nbsp;...</p></div>
            </div>
        </a><a href='https://cskanews.com/pfc-cska/news-pfc-cska/kubok-rossii-cska-pobezhdaet-v-sochi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кубок России | ЦСКА побеждает в Сочи - Новости ПФК ЦСКА ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRw6hGfb1owpn13bGOCs5WWosGNDvaCMCeYJlecF0vcj06dJE569ND6gUR1lV1I5ZXe8Ut8Db98" alt="Кубок России | ЦСКА побеждает в Сочи - Новости ПФК ЦСКА ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Для ЦСКА матч заключительного группового этапа против «Сочи» имел турнирное значение. Армейцы ещё сохраняли шансы на победу в квартете.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5692476'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЦСКА обыграл «Сочи» в заключительном туре группового этапа ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="ЦСКА обыграл «Сочи» в заключительном туре группового этапа ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Встреча ЦСКА с командой «Сочи» в матче шестого тура группового этапа Кубка России по футболу завершилась со счетом 2:1. Встреча прошла в Сочи.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/rus_cup/news/sochi-cska-startovye-sostavy-komand-na-match-6-go-tura-kubka-rossii-26-noyabrya-2022-goda-2003541/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Сочи» — ЦСКА: стартовые составы команд на матч 6-го тура ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQiGDpD-zoHcPzQvTthTr-U1F_AX_-JvCCm_caUz9ESBCYxc5zREm55mIl_PRBL29DRyZtKvLTa" alt="«Сочи» — ЦСКА: стартовые составы команд на матч 6-го тура ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ЧМ-2022 и Кубок России: какой из этих турниров вы смотрите? ЧМ-2022. Кубок России. переключаюсь между матчами.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4906409-cska-obygral-sochi-i-vyshel-v-sleduyuschij-raund-kubka-rossii-sochincy-vyleteli-iz-turnira.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЦСКА обыграл «Сочи» и вышел в следующий раунд Кубка ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUeSRN7AfEYQ3suFIuwxn9sw0Ihx_7FFNOs-8AdoDwPMw-zJQsOooBY4-7vX_7GiPqTY4AQfgB" alt="ЦСКА обыграл «Сочи» и вышел в следующий раунд Кубка ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 26 ноября, на стадионе «Фишт» в Сочи проходил матч 6-го тура группового этапа Фонбет Кубка России. Играли местный «Сочи» и московский ЦСКА.</p></div>
            </div>
        </a><a href='https://www.sportsdaily.ru/news/khadzhi-nazval-figney-novyy-format-kubka-rossii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Хаджи назвал фигней новый формат Кубка России</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlZGPkoGhoWR22yNWlLrHLNCtbDhXc-f3IAZMZdnPwatFwklPqJZQ-YBjk1SUmC9Ar89GwD5xD" alt="Хаджи назвал фигней новый формат Кубка России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Оцените новость ФК Спартак Москва ФОНБЕТ Кубок России по футболу Футбол ⚽ 26 ноября 2022, 22:24. Бывший администратор «Спартака» Александр Хаджи оценил&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/Russian_Cup/spbnews_NI1731069_CSKA_pobedil_Sochi_v_matche_Kubka_Rossii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЦСКА победил «Сочи» в матче Кубка России</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSiwLJIGLhBpDMnVtwR74KjOs4FE774b51GymatSjcF2uATryB53tpmPJZkTBIliucSK7EQWAHm" alt="ЦСКА победил «Сочи» в матче Кубка России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Футболисты ЦСКА оказались сильнее «Сочи» в рамках заключительного тура групповой стадии Пути РПЛ ФОНБЕТ Кубка России.</p></div>
            </div>
        </a><a href='https://handballfast.com/news/60621-kubok-rossii-moskovskii-dvorec-i-cernomorocka-provedut-matc-18-finala-18-dekabria-v-stolice'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кубок России. Московский &quot;Дворец&quot; и &quot;Черноморочка&quot; проведут ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZlOqYxzUqivIjhjNTeE-G5JknTMMGZH7V9MfWY-B47Dy11-nNtXPCk26Zi-N8wP90FaeJdAr0" alt="Кубок России. Московский &quot;Дворец&quot; и &quot;Черноморочка&quot; проведут ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Черноморочка&quot; сыграет с &quot;Дворцом&quot; в 1/8 финала Кубка России 18 декабря в Москве.</p></div>
            </div>
        </a><a href='https://www.sport.ru/football/futbol-kubok-rossii-sochi-tsska-pryamaya-tekstovaya-onlayn-translyatsiya/article536032/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Футбол, Кубок России, Сочи - ЦСКА, прямая текстовая онлайн ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6CuJhVaXJJf7u0VbpTE5KRgBvC6hXomLaFF-0DCe4E-f5rkXJ8b2SA77DK2Nh6evA1DwvOWIR" alt="Футбол, Кубок России, Сочи - ЦСКА, прямая текстовая онлайн ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sport.ru / Футбол. Сегодня, 26 ноября, состоятся очередные матчи Кубка России по футболу. Как говорится, не чемпионатом мира единым! В Сочи на стадионе &quot;Фишт&quot;&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}