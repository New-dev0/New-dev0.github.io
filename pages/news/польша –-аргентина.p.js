import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Польша – Аргентина</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Польша – Аргентина"/>
        <meta name="description" content="Trending News about Польша – Аргентина" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Польша – Аргентина</h1>
            <Image width={800} height={500} src="https://img.championat.com/news/social/f/e1/4912045.jpg" alt="Польша – Аргентина"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/football/article-4912045-polsha-argentina-0-2-obzor-i-statistika-matcha-30-noyabrya-2022-goda-chempionat-mira-po-futbolu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Теперь Аргентина вытащила Месси! А сборной Польши повезло ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRfKhq6dVWrSx5smcNAhIEf_e5z7URItaxFp1JK0r6w-ny-5bxQzFzdpyNmRYIXdsS7ius9Wpfr" alt="Теперь Аргентина вытащила Месси! А сборной Польши повезло ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лео не забил даже с пенальти. Но всё равно сыграл лучше Левандовского. Матч Аргентины с Польшей воспринимался прежде всего как дуэль Лионеля Месси и Роберта&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/argentina-vpevneno-obigrala-zbirnu-polshchi-1669841930.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Аргентина уверенно обыграла сборную Польши и вместе с ней ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSInAiQyLeqM67T3Xx0OfXibVuDfkmz_KIojApfE8UjfaeJrZ4DrBS7FmQ3O_OB_-hFBm7vlB7v" alt="Аргентина уверенно обыграла сборную Польши и вместе с ней ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Триумфом сборной Аргентины над национальной командой Польши завершился матч третьего тура группового этапа чемпионата мира-2022 в Катаре.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4908709-polsha-argentina-onlajn-translyaciya-matcha-chempionata-mira-2022-nachnyotsya-v-22-00.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша — Аргентина: онлайн-трансляция матча чемпионата ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRaEuf6LmZGyzLBTgqh1JPDQLtJHunSBnkKM1r-k3x7u4TYTXDUgYMNsIiyGGMvnfT_VRQvIVED" alt="Польша — Аргентина: онлайн-трансляция матча чемпионата ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 30 ноября, на «Стэдиум 974» пройдёт матч 3-го тура группового этапа чемпионата мира в Катаре. Встретятся соперники по группе С — сборные Польши и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/polsha-argentina-vo-skolko-nachalo-i-gde-smotret-pryamuyu-translyaciyu-matcha-chempionata-mira-2022-30-noyabrya-2005538/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша — Аргентина: во сколько начало и где смотреть прямую ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQEYCMvuwUAqzxvC0e-n5K6UCdI7T1zOJbvEmr-NcFmo_UY9qb49mysUcSoYIZq5iduMWwa2DV8" alt="Польша — Аргентина: во сколько начало и где смотреть прямую ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Как Аргентина выступит на чемпионате мира-2022? Станет чемпионом. Уступит в финале. Проиграет в полуфинале. Проиграет в 1&nbsp;...</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/sport/football/polsha-argentina-onlajn-translyatsiya-matcha-chm-2022.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Безумная развязка в группе С. Результаты и хроника матчей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTbqlezAGPTZNzg9gqlVYbkHwyZoeqcssnr16ISMkb4zVORiBT6i9KwNHAV-9w9X5_sJzxjtlqe" alt="Безумная развязка в группе С. Результаты и хроника матчей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Смотреть онлайн матча ⚽️ Польша - Аргентина ⚽️ на первенстве планеты в Катаре. Хроника по минутам.</p></div>
            </div>
        </a><a href='https://football24.ua/ru/polsha__argentina_startovye_sostavy_i_onlajn_transljacija_matcha_chm_2022_n749571/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша – Аргентина: стартовые составы и онлайн-трансляция ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQF2O0q4OqMUvP9ryEsR7KBYzsp_JB8rnx2gjVH_kd4eneJb8hw5DZDlP15BnCLrI96vTeIAhx" alt="Польша – Аргентина: стартовые составы и онлайн-трансляция ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Месси и Левандовски встречаются в матче за выход в плей-офф ЧМ-2022. Стартовые составы команд и ссылка на онлайн-трансляцию – в этой новости на &quot;Футбол 24&quot;.</p></div>
            </div>
        </a><a href='https://www.ua-football.com/foreign/worldcup/1669814210-polsha-argentina-smotret-onlayn-live-pryamuyu-videotranslyaciyu-matcha-chm-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша – Аргентина. Смотреть онлайн LIVE прямую ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQRyRi5DFEvRs5dqP08ld1BS2w7y-jKKNjMIkkPZ0QqUrNwfv5-GJFl4mZ3N7xuKMdM0lTjxikt" alt="Польша – Аргентина. Смотреть онлайн LIVE прямую ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Польша - Аргентина ⚽ 30.11.2022 ⚽ Смотреть онлайн трансляцию матча ✓ ЧМ-2022 ✓ Футбольные видеотрансляции ☛ Матчи чемпионата мира 2022 на UA-Футбол.</p></div>
            </div>
        </a><a href='https://fakty.ua/ru/411530-argentina-razbila-polshu-i-zabrala-komandu-levandovski-s-soboj-v-plej-off-videoobzory-matchej-chm-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Аргентина разбила Польшу и «забрала» команду Левандовски с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRPgtuQu1kO3fLpFAgNvx8cMsfwIu4DtGjKMCBJAw4eubXxy-F063rDxgTxIVBq-oc1nNBjmoK_" alt="Аргентина разбила Польшу и «забрала» команду Левандовски с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Результаты и видеообзоры решающих матчей в группе С чемпионата мира по футболу 30 ноября, Аргентина с незабитым Лионелем Месси пенальти победила Польшу и&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}