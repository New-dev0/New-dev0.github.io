import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Уругвай Гана</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Уругвай Гана"/>
        <meta name="description" content="Trending News about Уругвай Гана" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Уругвай Гана</h1>
            <Image width={800} height={500} src="https://img.championat.com/news/social/1/4e/4914279.jpg" alt="Уругвай Гана"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/football/article-4914279-gana-urugvaj-0-2-obzor-i-statistika-matcha-1-dekabrya-2022-goda-chempionat-mira-po-futbolu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уругвай и Гана снова сыграли легендарный матч. Но теперь ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRx5uCbJwyghevHIEx1jnkWwUFw9Lc7fxgmdnHUMrSO7L1wVSkcZDnNNMwiC9O-hXFKbuhTBm77" alt="Уругвай и Гана снова сыграли легендарный матч. Но теперь ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Победы в два мяча уругвайцам не хватило, чтобы выйти в плей-офф.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/chs-2022-urugvay-daremno-zdolav-zbirnu-gani-1670001035.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧМ-2022: Уругвай напрасно одолел сборную Ганы и пролетел ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlYADuXTtNOG2vc-NH5c5uLriowAtdghgLn4iOkCHZZ_rYNkN3fsv3Ud5KRVTclSgqy8Alc_g_" alt="ЧМ-2022: Уругвай напрасно одолел сборную Ганы и пролетел ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Латиноамериканская команда не пополнила список участников плей-офф чемпионата мира 2022 года.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/article-4914017-chempionat-mira-2022-urugvaj-gana-kak-fanaty-gany-nenavidyat-suaresa-posle-2010-goda-chto-govoryat-istoriya.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Если Суарес снова сыграет рукой – наш игрок её откусит ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5vag285MtzV3blz4_FZq28XUqbvnqmL2YhHNC8VLvLELe8f9SuVuxststCXpD_poHlwt19dOR" alt="«Если Суарес снова сыграет рукой – наш игрок её откусит ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ганцы в Катаре рассказывают, как переживали национальную трагедию в 2010-м. Сегодня Гана и Уругвай решат, кто из них выйдет в плей-офф чемпионата мира.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/reviews/chm-2022-gana-urugvay-0-2-kak-proshel-match-gruppy-h-obzor-2-dekabrya-2022-goda-2006706/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Гана ждала мести 12 лет и довела Суареса до слез. Уругвай ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTcGTI7RlcXRKhMLxPbbSA_YyuUVAHCJQL6aUiAX35trHEOUp3HNMWMatDTPOIFNHNVL-DnCjce" alt="Гана ждала мести 12 лет и довела Суареса до слез. Уругвай ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Когда после жеребьевки финального турнира стал известен состав групп, главная интрига в квартете Н была очевидна: первая с ЧМ-2010 встреча в официальном&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1735298_SROChNO_Urugvaj_obygral_Ganu_v_matche_ChM_2022_obe_komandy_ne_smogli_probitsa_v_plej_off'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уругвай обыграл Гану в матче ЧМ-2022, обе команды не смогли ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTb69ZtqLKFm5rh7EC4n3EqVQrcgdf_XK2EEHajrYeXWPlFFYEmQXAaHdocYJqEtj3gF40E1tCU" alt="Уругвай обыграл Гану в матче ЧМ-2022, обе команды не смогли ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Уругвая победила команду Ганы в матче третьего тура группового этапа чемпионата мира в Катаре.</p></div>
            </div>
        </a><a href='https://www.sports.ru/tribuna/blogs/fredthered/3098724.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Участники матча Уругвай – Гана в 2010-м. Где они сейчас?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSgXyJFTfnRuq4DvlVEMNYtmmf78j091D2Icub5pAcH9HKVYJypgmVk9rzu4H1o9LrvY71_IZ03" alt="Участники матча Уругвай – Гана в 2010-м. Где они сейчас?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Здесь пока ничего нет. Пост написан пользователем Sports.ru. Создайте свой блог на Трибуне, выскажитесь и станьте суперзвездой Sports.ru. Создать блог&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.ua/news/605969-gana-urugvay-0-2-pobeda-so-vkusom-porazheniya-video-golov-i-obzor-matcha'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Гана – Уругвай – 0:2. Победа со вкусом поражения. Видео голов ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFn0Q5djgOdnWzuz5Y_pZlsbUgQ7V1GMA6-f7Xt4OwxWXW9XUfhmI_hxbLqLmfwjkc5XAwJgJS" alt="Гана – Уругвай – 0:2. Победа со вкусом поражения. Видео голов ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Обзор и видео голов матча Гана – Уругвай ⇒ ≺02.12.2022≻ ✓ Чемпионат мира Футбольные видео ☛ Лучшие моменты матча, обзоры и комментарии&nbsp;...</p></div>
            </div>
        </a><a href='https://telegraf.com.ua/sport-cat/2022-12-02/5724665-gana-urugvay-onlayn-matcha-chm-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Гана - Уругвай - 0:2: хроника матча ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSQRVrYLtmOw17I1m-HDg7c4f7GU_oeG8TMZTZGQpdrhp4sFR_RSDUpyTaPl20VoBcbpZph2WCJ" alt="Гана - Уругвай - 0:2: хроника матча ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мы используем Куки! Хорошо. Гана - Уругвай - 0:2: хроника матча ЧМ-2022. Автор.</p></div>
            </div>
        </a>
        </Template></>;
}