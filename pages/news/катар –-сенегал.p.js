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
            <Image width={800} height={500} src="https://img.championat.com/news2/social/d/3b/4899567.jpg" alt="Катар – Сенегал"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/football/news-4899567-katar-senegal-pryamaya-translyaciya-matcha-chempionata-mira-2022-nachnyotsya-v-16-00.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар — Сенегал: прямая трансляция матча чемпионата мира ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSArGfamzRsz7T2FxEMoBtzdmVRioCxBciyRTZyXbBCXqp8rmJFKilrCW8F5Lb6hwaxo1WFFcRA" alt="Катар — Сенегал: прямая трансляция матча чемпионата мира ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 25 ноября, на стадионе «Эль Тумама» состоится матч 2-го тура группового этапа чемпионата мира группы А между командами Катара и Сенегала. Стартовый&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/katar-senegal-1-3-rezultat-matcha-chm-2022-25-noyabrya-2022-goda-2003142/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сенегал нанес Катару второе поражение на ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcPB9bgqXowBhdDWnK6Ccavd1HjMtMBoO5gCGzNho6Y2PaCbDY50Td6SCJrWUtCg0SaZ_0vre6" alt="Сенегал нанес Катару второе поражение на ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>25 ноября в Дохе сборная Сенегала одержала победу над Катаром (3:1) в матче группы А чемпионата мира-2022 по футболу.</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1730444_Katar__Senegal_luchshije_momenty_matcha_ChM_2022_po_futbolu_25_nojabra_smotret_goly_i_obzor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар — Сенегал: лучшие моменты матча ЧМ-2022 по футболу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkEWtNTlkZchAYeYmWOg4fh1ZJ4WIXKRdpTUycFqBNAeBte5EP72NaInrBsjEOP0fjuRsG8aT_" alt="Катар — Сенегал: лучшие моменты матча ЧМ-2022 по футболу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Сенегала обыграла команду Катара в матче второго тура группового раунда ЧМ‑2022.</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/637fe1989a794709e3f52613'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар — Сенегал</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRiz0hh7yF7u32hrFDyeiaQ7Sph9CEI1M360i1KxI3rl_WRzd84SfVpjr9JjLpmA96oheNhYLDY" alt="Катар — Сенегал" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На этом будем прощаться, пожелаем сборной Катара побед в следующих матчах турнира. А команду Сенегала поздравляем с победой!</p></div>
            </div>
        </a><a href='https://www.sports.ru/football/1113570192-katar-senegal-startovye-sostavy-komand-na-match-chempionata-mira-po-fu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар — Сенегал: стартовые составы команд на матч ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2XSEyZJOL0Uy3KV2boSGibrkcG0vb2B3PgJTJweITdT3Tx88DRRyQRhb9qLWgLGdAXhpcIBoS" alt="Катар — Сенегал: стартовые составы команд на матч ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В первом матче второго тура группового этапа Чемпионата мира по футболу 2022 в группе A сыграют сборные Катара и Сенегала. Поединок пройдет на стадионе&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rusfootball.info/worldcup2022/1146689716-katar-senegal-startovye-sostavy-na-match-2-go-tura-chm-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар - Сенегал. Стартовые составы на матч 2-го тура ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHLD1h6TB93i1vuYFco1-RdlMzAFgTsmSA_pPqNEEsFza4rx7wHJmQPlMZuTSMdUqrKZAC6f0G" alt="Катар - Сенегал. Стартовые составы на матч 2-го тура ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Опубликованы стартовые составы на матч между Катаром и Ираном. Команды встретятся в рамках второго тура чемпионата мира. Матч рассудит испанский арбитр&nbsp;...</p></div>
            </div>
        </a><a href='https://matchtv.ru/football/matchtvnews_NI1730440_Katar__Senegal_obzor_matcha_ChM_2022_po_futbolu_25_nojabra_smotret_goly_i_luchshije_momenty'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар — Сенегал: обзор матча ЧМ-2022 по футболу 25 ноября ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRYKIF6N5HnuXUG64AUWEc3JY22Fzk_tfdITHvekPMc7rSYIaNJJsyOdWN1Ubo5TkfSvkjsEbpXBg" alt="Катар — Сенегал: обзор матча ЧМ-2022 по футболу 25 ноября ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Сенегала обыграла команду Катара в матче второго тура группового этапа чемпионата мира‑2022 в Катаре.</p></div>
            </div>
        </a>
        </Template></>;
}