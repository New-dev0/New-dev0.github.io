import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Владимир Путин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Владимир Путин"/>
        <meta name="description" content="Trending News about Владимир Путин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Владимир Путин</h1>
            <Image width={800} height={500} src="https://online47.ru/media/photo/article/__159853.jpg" alt="Владимир Путин"/>
            <h3>Recent News</h3>
            <a href='https://online47.ru/2022/11/23/vladimir-putin-velika-veroyatnost-proniknoveniya-boevikov-na-territorii-stran-odkb-169145'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин: Велика вероятность проникновения боевиков ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQVoERVJCcmTycEXYEqKbl2bhk86KBhWckzpx6iSC0DaKmTrxn-cTPInjfVFpcfNdf23I8D6siL" alt="Владимир Путин: Велика вероятность проникновения боевиков ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент России Владимир Путин в своем выступлении в открытой части саммита ОДКБ в Ереване вновь поздравил избранного президента Казахстана Касым-Жомарта&nbsp;...</p></div>
            </div>
        </a><a href='https://online47.ru/2022/11/23/vladimir-putin-zayavil-o-gotovnosti-rossii-k-eksportu-udobreniy-na-mirovye-rynki-169114'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин заявил о готовности России к экспорту ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQotJlV4vjrPf3u3LOJKFbvtkDRIPgzpQUha9XcwENgTB2eVHCIh44sGKRjvJnNx3WAEQYNYYL6" alt="Владимир Путин заявил о готовности России к экспорту ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее Online47 сообщал, что Болгария договорилась с Россией об экспорте нефти в Евросоюз в обход санкций. Фото: Валентин Илюшин/Online47. Новости Online47- в&nbsp;...</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-11-23/vladimir-putin-prodlil-ukaz-o-merah-po-obespecheniyu-finansovoy-stabilnosti-v-sfere-valyutnogo-regulirovaniya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин продлил указ в сфере валютного регулирования</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-w42wlgZqy_zgi7IESgut1KfxVxlJ7ZD4XGzDgI9dJnbLu6qtozIxWgYzhuwqtD6VVKbjLEi8" alt="Владимир Путин продлил указ в сфере валютного регулирования" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава государства подписал соответствующий документ в среду. Фото: kremlin.ru. Президент России Владимир Путин продлил действие указа о мерах по обеспечению&nbsp;...</p></div>
            </div>
        </a><a href='https://oboz.info/vladimir-putin-zayavil-chto-rossiya-gotova-rasshiryat-postavki-udobrenij/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин заявил, что Россия готова расширять поставки ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSToqbHPAY_ce6QqjzVuxYv7c3G9tHiY3AB39GoI-BpvJplzWZYoBt9JhF4SKvuqaVq7eR-kTyE" alt="Владимир Путин заявил, что Россия готова расширять поставки ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент РФ Владимир Путин заверил, что у России «есть готовность к расширению работы со всеми партнёрами, без всякого исключения» по экспорту удобрений.</p></div>
            </div>
        </a><a href='https://www.souzveche.ru/news/68298/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин: В работе ОДКБ есть проблемы - Союзное Вече</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRbPxAm1NR7Oo-llAU9d7D7zK8rKN95DJ2ZVJRohK3lA1AgCrGNCCrkdcjCMZ0Q-ptZKliFctHt" alt="Владимир Путин: В работе ОДКБ есть проблемы - Союзное Вече" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>- Сегодня мы поговорим, думаю, что без всяких камер, об этом и поподробнее. Но все-таки для нас очевидно, что совместная работа в рамках ОДБК приносит видимую&nbsp;...</p></div>
            </div>
        </a><a href='https://belros.tv/news/politika/vladimir-putin-dinamika-sovmestnoy-raboty-stran-v-odkb-vozrosla/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин: динамика совместной работы стран в ОДКБ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTh6bADoH3tliRCwMI_FExA9ACLF8XiYvw7dcjeGrbEhXTZmwEa0u_5EgLzRVzxAMiwlcLSD5de" alt="Владимир Путин: динамика совместной работы стран в ОДКБ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Российской Федерации также отметил, что расширяется военно-техническое сотрудничество между государствами-членами Организации. Поделиться.</p></div>
            </div>
        </a><a href='https://73online.ru/r/vladimir_putin_nagradil_vetvracha_iz_nikolaevskogo_rayona-112750'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин наградил ветврача из Николаевского района</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_1E0MpeTRKAIu4lYFeqs0KCnPYqx32OEnwwrALLfe82WhubPp9SrTTbZjOeNUkUDm7fJTVh8M" alt="Владимир Путин наградил ветврача из Николаевского района" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент присвоил ведущему ветврачу Николаевской районной ветеринарной станции Михаилу Кондратьеву почетное звание «Заслуженный ветеринарный врач РФ».</p></div>
            </div>
        </a><a href='https://belros.tv/news/politika/vladimir-putin-i-aleksandr-lukashenko-prinimayut-uchastie-v-sammite-odkb-v-erevane/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин и Александр Лукашенко принимают участие в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTcgq-NVAlLPbGmcLYPRxmV4PomjTrwg-TjnKaupBARxTkh5gzSYeiE6oyKDodjlgunDMDTNF8T" alt="Владимир Путин и Александр Лукашенко принимают участие в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня на встрече в узком составе участники саммита обсудят ключевые направления взаимодействия, актуальные международные и региональные проблемы.</p></div>
            </div>
        </a><a href='https://realnoevremya.ru/news/266461-putin-prodlil-srok-deystviya-ukaza-o-specmerah-v-valyutnoy-sfere'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин продлил до конца 2023 года действие указа о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_OSJRdGKAcafWJLAGCJGLqX-y-oBumH1787npIfbPy7cGBYYkRnny_ceNTJfsK9cZGDLRzOua" alt="Владимир Путин продлил до конца 2023 года действие указа о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Напомним, в феврале Путин подписал указ о специальных экономических мерах в связи с недружественными действиями Запада.</p></div>
            </div>
        </a><a href='https://news.ru/world/putin-i-pashinyan-obsudili-razblokirovanie-transportnyh-arterij/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Путин и Пашинян обсудили разблокирование транспортных ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdwSBVcMKr4lz1p4-oe2MPDgBKhrQo9pxbDCHv0aNnS5mih5hHJ46y1_YlN2UyzmdKsn6zM5tk" alt="Путин и Пашинян обсудили разблокирование транспортных ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент России Владимир Путин и премьер-министр Армении Никол Пашинян обсудили разблокирование транспортных артерий и урегулирование кризиса в регионе.</p></div>
            </div>
        </a>
        </Template></>;
}