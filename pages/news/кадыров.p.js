import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Кадыров</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Кадыров"/>
        <meta name="description" content="Trending News about Кадыров" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Кадыров</h1>
            <Image width={800} height={500} src="https://im.kommersant.ru/SocialPics/5668451_26_2294127_1142162197" alt="Кадыров"/>
            <h3>Recent News</h3>
            <a href='https://www.kommersant.ru/doc/5668451'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кадыров назвал условия для начала переговоров с Украиной</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSksnZbhj1ZLSPNncwSROKzvuz-RmI615n2wj0rZvtC6GaHTjWJikbX7KVB2QxadN8_vf1hCP5M" alt="Кадыров назвал условия для начала переговоров с Украиной" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава Чечни Рамзан Кадыров заявил, что условия для окончания военных действий на Украине должна ставить Москва, а не Киев. Он сообщил, что Россия требует от&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5668202'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кадыров раскрыл число чеченских участников спецоперации</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSibzX08LQsCXMyE4ILDsbAdvzk0gUsV6qsEJ8O4zJE6dpHPUkwCDePQ2tkf_d6CI5EYOHR-aM0" alt="Кадыров раскрыл число чеченских участников спецоперации" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Более 20 тыс. чеченских бойцов приняли участие в военном конфликте на Украине с 24 февраля. Об этом заявил глава Чечни Рамзан Кадыров по итогам совещания с&nbsp;...</p></div>
            </div>
        </a><a href='https://vologda-poisk.ru/news/na-zlobu-dnya/ramzan-kadyrov-opublikoval-svoy-plan-umirotvoreniya-ukrainy-v-usloviyah-vsego-para-punktov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рамзан Кадыров опубликовал свой план умиротворения ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJDMes60VY4NTLX1ZkCAiL5fGP6KrkvXPixOH9bFDmg-jdzqmRNQcMPxWNGefzYACsU9Qn_cQk" alt="Рамзан Кадыров опубликовал свой план умиротворения ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рамзан Кадыров был возмущен наглостью Зеленского, который посмел диктовать условия России, после которых, якобы, украинская сторона сядет за стол&nbsp;...</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/politika/15112022/521773'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кадыров предложил свой вариант урегулирования конфликта на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSaIxRoY9aFyOr_HoF0knzpFHay0-dzYqP-KxzrsHaFWNFPiu-6fIt2U_JZzmS-Fyd3Flwmreaj" alt="Кадыров предложил свой вариант урегулирования конфликта на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По его словам, Украина находится не в тех условиях, чтобы ставить их России.</p></div>
            </div>
        </a><a href='https://www.kavkaz-uzel.eu/articles/383089/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кадыров назвал условия для окончания военной операции на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYGGzdvltjkwwi2St_HU_xbmC6ped_xexwJyZLNUQWVGSa2ttmcGUqBt1jBsFnSl-niPlMrUvx" alt="Кадыров назвал условия для окончания военной операции на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава Чечни указал два условия для переговоров, на которых Россия может согласиться на окончание военной операции на Украине. Если же хоть одно из них не&nbsp;...</p></div>
            </div>
        </a><a href='https://grozny.tv/news/main/51721'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рамзан Кадыров: Не в том положении власти Украины ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGgVsfLZGplezx39WSXl31T114t0y8QNhJiaNN-XF4XI3Rp0F2Fa3HvMnJrfIST4JCdJVD4vi4" alt="Рамзан Кадыров: Не в том положении власти Украины ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом написал Глава ЧР Рамзан Кадыров в своем телеграм-канале. &quot;Смешны условия для переговоров у руководства Украины. Если бы Зеленский переживал за своих&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tatar-inform.ru/news/ne-v-tom-polozenii-ctoby-diktovat-kadyrov-nazval-smesnymi-usloviya-kiev-dlya-peregovorov-5886689'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Не в том положении: Кадыров назвал смешными условия Киева ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Не в том положении: Кадыров назвал смешными условия Киева ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Условия для переговоров, выдвигаемые Киевом, являются смешными. Об этом глава Чеченской Республики Рамзан Кадыров написал в своем телеграм-канале.</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/11/15/kadyrov-poruchil-provesti-ucheniya-rezervistov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кадыров поручил провести учения резервистов</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Кадыров поручил провести учения резервистов" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вопросы обеспечения безопасности населения и тему специальной военной операции в Донбассе обсудили на совещании у главы Чечни Рамзана Кадырова с&nbsp;...</p></div>
            </div>
        </a><a href='http://chechnya.gov.ru/novosti/r-kadyrov-provel-soveshhanie-s-komandirami-podrazdelenij-silovyh-struktur/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Официальный сайт Главы Чеченской Республики » Р. Кадыров ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTo_TyhoSoFlbtuk6Se_MkbBH9Tl8wHbdYFldsw5xicIUzuyiSBUkpwP60EM7XSGNQF1NJWGOem" alt="Официальный сайт Главы Чеченской Республики » Р. Кадыров ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Наёмники из свыше 50 разных стран захлестнули республику и на протяжении долгого времени безнаказанно вели свою преступную деятельность.</p></div>
            </div>
        </a><a href='https://www.business-gazeta.ru/news/571751'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кадыров: «Ситуация на Украине идентична той, что была у нас»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRH2gcHWiXb551BF89uYR4F5upi4SH25DDwiAV8E7iM_f0UHjuHYKI5JNC-X41bZylX8gGyo43M" alt="Кадыров: «Ситуация на Украине идентична той, что была у нас»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Неимоверными усилиями чеченских силовиков удалось вернуть мир на нашу землю и искоренить любое проявление терроризма. Тем не менее нам необходимо быть готовыми&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}