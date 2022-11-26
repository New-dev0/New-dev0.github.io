import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Лавров</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Лавров"/>
        <meta name="description" content="Trending News about Лавров" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Лавров</h1>
            <Image width={800} height={500} src="https://cdn.forbes.ru/forbes-static/shareimages/481141.jpg?v=1668509491" alt="Лавров"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.ru/society/481141-lavrov-nazval-uslovia-zelenskogo-dla-peregovorov-s-moskvoj-nerealisticnymi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лавров назвал условия Зеленского для переговоров с Москвой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSH_bEllk2YBdcRUL1f51BuZFueYSca0v-IFBUwNBXcAwHIgf2JP9R_u7n1ZhD8ph8TMWKW6ekCcg" alt="Лавров назвал условия Зеленского для переговоров с Москвой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чем дольше Украина будет отказываться от мирных переговоров с Россией, тем сложнее потом будет договариваться, предупредил Лавров. По его словам,&nbsp;...</p></div>
            </div>
        </a><a href='https://riamo.ru/article/598159/zernovaya-sdelka-i-peregovory-s-ukrainoj-o-chem-govoril-lavrov-na-sammite-g20'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зерновая сделка и переговоры с Украиной: о чем говорил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ5dsqE9UWOSxlPoel-BtPH1xqCcAHERrr7XvEvofVsed2wMxDEl7GnDfxjvB3lYAu3FKEXiu_E" alt="Зерновая сделка и переговоры с Украиной: о чем говорил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Очередной Саммит G20 проходит 15 и 16 ноября на острове Бали в Индонезии. Российскую делегацию в этом году возглавил министр иностранных дел Сергей Лавров.</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/politika/15112022/521720'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лавров улетел с Бали, завершив работу на саммите G20</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQPNYy-zIYzPM56MfHJoVnfx2A00J41504KgRZ6q_IBYQ5m3KXrlqspwcUSf79dEOcU7DHlLYQ9" alt="Лавров улетел с Бали, завершив работу на саммите G20" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Касаемо работы над итоговой декларацией саммита G20, российский министр заявил, что она почти закончена. По словам Лаврова, одобрять документ будут в среду, 16&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/politics/news/2022/11/15/950384-lavrov-zayavil-chto-itogovaya-deklaratsiya-sammita-g20-pochti-gotova'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лавров заявил, что итоговая декларация саммита G20 почти ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR-n-52Rd9ednVSbJDCjQ6xwd0tyMQuP6B_rciy0Vk6vGaPbstRjdpuZ5OXBm6otR559Xpp4qa5" alt="Лавров заявил, что итоговая декларация саммита G20 почти ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Работа над итоговой декларацией саммита G20 практически завершена. Такое заявление сделал министр иностранных дел РФ Сергей Лавров.</p></div>
            </div>
        </a><a href='https://riamo.ru/article/598059/lavrov-nazval-trebovaniya-ukrainy-dlya-peregovorov-neadekvatnymi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лавров назвал требования Украины для переговоров ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUOfQ_xl22XQU9G7aILGxycKtp9AthNJeZymAPhJCk8c5AWQql0ow3-YwLfQCnqKqdu-UKzD99" alt="Лавров назвал требования Украины для переговоров ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>РИАМО - 15 ноя. В ходе итогового брифинга на саммите G20 глава МИД России Сергей Лавров назвал неадекватными требования Украины к переговорам с Россией,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5668158'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лавров: генсек ООН клятвенно заверил, что зерновая сделка для ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Лавров: генсек ООН клятвенно заверил, что зерновая сделка для ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Господин Лавров также заявил, что при составлении заявления по итогам G20 представители Запада пытались включить формулировки с осуждением действий России. «&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tatar-inform.ru/news/lavrov-5886620'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лавров: Генсек ООН клятвенно пообещал выполнить условия ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Лавров: Генсек ООН клятвенно пообещал выполнить условия ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Генеральный секретарь ООН Антониу Гутерреш «клятвенно» заверил, что все обещания по зерновой сделке будут выполнены. При обсуждении этого вопроса он отметил&nbsp;...</p></div>
            </div>
        </a><a href='https://news.ru/vlast/lavrov-zavershil-svoyu-programmu-na-sammite-g20-i-vyletel-v-rossiyu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лавров завершил свою программу на саммите G20 и вылетел в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZhDR8B8Z0iDkOeRVSzv5wkW_NuSoUEIZf3GUMKcPFNQBpa3XjNT4bFb5TBz_VeRNyX_ISoVFf" alt="Лавров завершил свою программу на саммите G20 и вылетел в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава МИД РФ Сергей Лавров покинул Бали, завершив работу на саммите G20, передает РИА Новости. Самолет российского министра вылетел из аэропорта Денпасар в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurointegration.com.ua/rus/news/2022/11/15/7150698/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лавров досрочно уехал с саммита G20, Кислица его &quot;потроллил&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRnbDOCCgC1efaKT0wQpQHbsTPRYmPGbHFHF4I1wrJYTxbGQlQJDIB3PKRKR-bVamtL80pVDAJp" alt="Лавров досрочно уехал с саммита G20, Кислица его &quot;потроллил&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Постоянный представитель Украины при ООН Сергей Кислица иронично прокомментировал сообщение о том, что министр иностранных дел России Сергей Лавров досрочно&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63622302'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СМИ сообщили о госпитализации Лаврова на Бали. Захарова в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcToTZh9GS7k0xZKwLODYVkIIr_IQ2y-0unBvaumN6jrxlKrJJ70HArYI96noBbd9STp9D9rsLNB" alt="СМИ сообщили о госпитализации Лаврова на Бали. Захарова в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министр иностранных дел России Сергей Лавров был доставлен в больницу после того, как у него возникли проблемы со здоровьем после прибытия на саммит G20 на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}