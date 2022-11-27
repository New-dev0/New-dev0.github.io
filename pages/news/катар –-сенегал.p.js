import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Катар – Сенегал</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Катар – Сенегал"/>
        <meta name="description" content="Trending News about Катар – Сенегал" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Катар – Сенегал</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/184/1840160/large.jpg" alt="Катар – Сенегал"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/world/2022/news/katar-senegal-1-3-rezultat-matcha-chm-2022-25-noyabrya-2022-goda-2003142/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сенегал нанес Катару второе поражение на ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcPB9bgqXowBhdDWnK6Ccavd1HjMtMBoO5gCGzNho6Y2PaCbDY50Td6SCJrWUtCg0SaZ_0vre6" alt="Сенегал нанес Катару второе поражение на ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>25 ноября в Дохе сборная Сенегала одержала победу над Катаром (3:1) в матче группы А чемпионата мира-2022 по футболу.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4905065-katar-senegal-senegalcy-vyshli-vperyod-na-41-j-minute.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар — Сенегал: сенегальцы вышли вперёд на 41-й минуте</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1B49AvW2k99bIBM8mDz75t6hcL2kMME0IHCVB5SxznSjiURu4mOoCBMd484meGVJ5jz7uNceT" alt="Катар — Сенегал: сенегальцы вышли вперёд на 41-й минуте" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В эти минуты проходит матч 2-го тура чемпионата мира, в котором встречаются сборные Катара и Сенегала. Команды играют на стадионе «Эль-Тумама» в Дохе.</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1730466_Byvshij_chempion_UFC_Nurmagomedov_posetil_match_Katar__Senegal_na_ChM_2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бывший чемпион UFC Нурмагомедов посетил матч Катар ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSiUM_7zpoeDYTk6e5RAI9OATCiyTfKnPlY-8__mJ8eRk70_Y_7KDgI6ZJgoKnCkb0-VgRv_ofx" alt="Бывший чемпион UFC Нурмагомедов посетил матч Катар ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бывший чемпион UFC в легком весе Хабиб Нурмагомедов посетил встречу второго тура чемпионата мира‑2022 Катар — Сенегал, сообщает «Матч ТВ».</p></div>
            </div>
        </a><a href='https://www.sports.ru/football/1113570192-katar-senegal-startovye-sostavy-komand-na-match-chempionata-mira-po-fu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар — Сенегал: стартовые составы команд на матч ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTEKxMrLCGk89BAJT2Z0Y3TMxBgGIUrV-UMFQ_VAz4fXjK7ps235oHMFJozzrfVNyz4b53X4O8u" alt="Катар — Сенегал: стартовые составы команд на матч ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В первом матче второго тура группового этапа Чемпионата мира по футболу 2022 в группе A сыграют сборные Катара и Сенегала. Поединок пройдет на стадионе&nbsp;...</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/637fe1989a794709e3f52613'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар — Сенегал</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRiz0hh7yF7u32hrFDyeiaQ7Sph9CEI1M360i1KxI3rl_WRzd84SfVpjr9JjLpmA96oheNhYLDY" alt="Катар — Сенегал" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На этом будем прощаться, пожелаем сборной Катара побед в следующих матчах турнира. А команду Сенегала поздравляем с победой!</p></div>
            </div>
        </a><a href='https://matchtv.ru/football/matchtvnews_NI1730440_Katar__Senegal_obzor_matcha_ChM_2022_po_futbolu_25_nojabra_smotret_goly_i_luchshije_momenty'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар — Сенегал: обзор матча ЧМ-2022 по футболу 25 ноября ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRYKIF6N5HnuXUG64AUWEc3JY22Fzk_tfdITHvekPMc7rSYIaNJJsyOdWN1Ubo5TkfSvkjsEbpXBg" alt="Катар — Сенегал: обзор матча ЧМ-2022 по футболу 25 ноября ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Сенегала обыграла команду Катара в матче второго тура группового этапа чемпионата мира‑2022 в Катаре.</p></div>
            </div>
        </a><a href='https://sport24.ru/news/football/2022-11-25-katar-senegal-smotret-onlayn-katar-senegal-onlayn-translyatsiya-katar-senegal-pryamaya-translyatsiya-katar-senegal-pryamoy-efir-senegal-katar-chm-2022-gde-smotret-senegal-katar-match-tv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧМ-2022. Катар — Сенегал. Прямая трансляция</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7yWhTvcOstJWfSUZncbH1J5py2eU186JIPKz9a0YOLQYJ2CgL_NLrPDo5DP1UXzXSFXdOL7wH" alt="ЧМ-2022. Катар — Сенегал. Прямая трансляция" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 25 ноября, на стадионе «Аль-Тумама» состоится матч второго тура группового этапа чемпионата мира по футболу — 2022 между сборными Катара и&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}