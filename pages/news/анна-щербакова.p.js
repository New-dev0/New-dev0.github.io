import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Анна Щербакова</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Анна Щербакова"/>
        <meta name="description" content="Trending News about Анна Щербакова" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Анна Щербакова</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/8/03/4910429.jpg" alt="Анна Щербакова"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/figureskating/news-4910429-tatyana-tarasova-anna-scherbakova-imeet-pravo-propustit-god.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Татьяна Тарасова: Анна Щербакова имеет право пропустить год</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSaxowUtPDkOv7eI73Kogn0LrciZNS6podTEhmI7YXbkletQZOyLXrzw0rzmPdI_LrEJEsd7FbX" alt="Татьяна Тарасова: Анна Щербакова имеет право пропустить год" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Заслуженный тренер СССР по фигурному катанию Татьяна Тарасова высказалась о том, что олимпийская чемпионка Анна Щербакова пропустит чемпионат России,&nbsp;...</p></div>
            </div>
        </a><a href='https://2x2.su/news/sport/figuristka-anna-shcherbakova-podelilas-tyazhyelymi-perezhivaniyami-posle-razlada-s-eteri-tutberidze.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фигуристка Анна Щербакова поделилась тяжёлыми ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQdasAmUlQoBn5EgySdncA4syf6kUUiISaDmXmVFCwvu07R6RB9OZEMAK-cZjddiyVa6DNDpw8L" alt="Фигуристка Анна Щербакова поделилась тяжёлыми ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>p&gt; Фигуристка Анна Щербакова дала интервью на YouTube-канале FAMETIME TV. Спортсменка рассказала о тяжёлых взаимоотношениях с тренером, которые появились в&nbsp;...</p></div>
            </div>
        </a><a href='https://moika78.ru/news/2022-11-29/831969-anna-shherbakova-zayavila-chto-u-nee-poyavilos-vremya-na-lichnuyu-zhizn/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Анна Щербакова заявила, что у нее появилось время на личную ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRVVN9ixgZvFGoULz1xzB2Q47A-FDDhZacDMaQ-dJGANTGk0OsI5gOx5CsGsjusMtY9DXGsMJfc" alt="Анна Щербакова заявила, что у нее появилось время на личную ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Олимпийская чемпионка 2022 года по фигурному катанию Анна Щербакова рассказала, что она не состоит в отношениях. Она отметила, что сейчас у нее есть время&nbsp;...</p></div>
            </div>
        </a><a href='https://matchtv.ru/figure-skating/matchtvnews_NI1733277_Slusarenko_otreagiroval_na_zajavlenije_Gerboldt_o_tom_chto_Anna_Shherbakova_zavershajet_karjeru'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Слюсаренко отреагировал на заявление Гербольдт о том, что ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTI8-qFNmUd_-ToqGtkzS5SEzR_mzOmO_H2Oie25PnN8bwcX9Huwtu4_3N9BcjabIVndoczL7lS" alt="Слюсаренко отреагировал на заявление Гербольдт о том, что ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Средство массовой информации сетевое издание «www.matchtv.ru» зарегистрировано Федеральной службой по надзору в сфере связи, информационных технологий и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportmk.ru/sports/2022/11/29/ya-vse-vremya-molchu-shherbakova-rasskazala-pochemu-ne-ushla-ot-tutberidze.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Я все время молчу»: Щербакова рассказала, почему не ушла от ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRlKznSHIxoqY643QvOAGCjU2_yuZ58viiKVgCgSmx-uxs8TpvJoWduJEXnXb1IWiUkBkDRsQ3u" alt="«Я все время молчу»: Щербакова рассказала, почему не ушла от ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В разговоре с Лаурой Джугелий для ютюб-канала Femitime обычно скромная Анна разоткровеничалась — пережила опыт Олимпиады-2022, поведала об отношениях с Этери&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sb.by/articles/anna-shcherbakova-vsem-sportsmenam-khochetsya-vystupat-na-chempionatakh-mira-i-evropy-.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Анна Щербакова: всем спортсменам хочется выступать на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRiXPfi5VvdXEVaP-EeRnPmUyO_G3JKBpgfqhL_6joaECqzyPS-kRNm1xIptMe3X2SQJcMpY0Ea" alt="Анна Щербакова: всем спортсменам хочется выступать на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Спортсменка отметила, что запрет оказывает определенное влияние на фигуристов. – После Олимпиады [зимней 2022 года в Пекине] мы готовились к чемпионату мира&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportsdaily.ru/news/gerboldt-otkaz-ot-chempionata-rossii-oznachaet-zavershenie-karery-shcherbakovoy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Гербольдт: Отказ от чемпионата России означает завершение ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFchTFBjVJGRYmMHlWBz9JLexoIfdtap-eNpb3LJE0Uc49Dn31Ysf2v4yN6hD3ZCgHrrXByf9F" alt="Гербольдт: Отказ от чемпионата России означает завершение ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бывшая российская фигуристка в одиночном и парном катании Катарина Гербольдт в беседе с корреспондентом «Спорта День за Днем» Ариной ПОЛУЯНОВОЙ&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Figurnoe_katanie/spbnews_NI1733232_Shherbakova_imejet_pravo_propustit_sorevnovatelnyj_god_schitajet_Tarasova'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Щербакова имеет право пропустить соревновательный год ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_FljfbFoHCePbYnVcQJbatP7WxPNJ_Wrb_T9HtwWFih87RRfxs7l3N5NOSNtEgtjwD0ySXFsQ" alt="Щербакова имеет право пропустить соревновательный год ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Заслуженный тренер СССР Татьяна Тарасова заявила изданию «Спорт День за Днем», что олимпийская чемпионка Пекина‑2022 в одиночном катании Анна Щербакова&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportmk.ru/sports/2022/11/29/tarasova-zayavila-chto-shherbakova-imeet-pravo-propustit-sezon.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тарасова заявила, что Щербакова имеет право пропустить сезон</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSfkedXmAVG4zlN_ayx5nsJjaxBaF5EbQc6cYFdHWA9xdNBHQvra6_JzzZFWmKf_xE8kyQyvs3C" alt="Тарасова заявила, что Щербакова имеет право пропустить сезон" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Заслуженный тренер СССР Татьяна Тарасова считает, что олимпийская чемпионка Пекина‑2022 в одиночном катании Анна Щербакова имеет право пропустить чемпионат&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport.ru/figurnoe_katanie/gertboldt-scherbakova-govorila-chto-mojet-skoro-zavershit-kareru/article536330/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Гертбольдт: &quot;Щербакова говорила, что может скоро завершить ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTgRgAHAGQ4OiIryg4LQZgCVFrsRu2E3Hn0euqwVd3-twjmyzC5ikoXX7Tvfsago3nZ8Re0kGEB" alt="Гертбольдт: &quot;Щербакова говорила, что может скоро завершить ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sport.ru/ Фигурное катание. Вфеврале этого года российская фигуристка Анна Щербакова стала олимпийской чемпионкой. Однако сейчас она не участвует в&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}