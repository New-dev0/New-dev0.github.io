import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Пригожин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Пригожин"/>
        <meta name="description" content="Trending News about Пригожин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Пригожин</h1>
            <Image width={800} height={500} src="" alt="Пригожин"/>
            <h3>Recent News</h3>
            <a href='https://news.ru/society/prigozhin-otreagiroval-na-obyavlenie-v-rozysk-so-storony-fbr/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пригожин отреагировал на объявление в розыск со стороны ФБР</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjJX1652O8RbOxgWlvRLC4bOq60kiDLJwbBIt868pWu7lPs8x9_yLfO4D9U90q5oSrxRIpksDe" alt="Пригожин отреагировал на объявление в розыск со стороны ФБР" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Отношусь к этому (объявлению в розыск. — NEWS.ru) очень позитивно. Представляете, сколько простых людей смогут подзаработать. Да и я сам был бы не прочь.</p></div>
            </div>
        </a><a href='https://forpost-sz.ru/a/2022-11-26/fbr-zaplatit-250-tysyach-dollarov-za-pomoshch-v-zaderzhanii-prigozhina'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ФБР заплатит 250 тысяч долларов за помощь в задержании ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVJYCbiAzpYH3iDRM_IE1uyzLSDfl_kg1O3UzW6Exg_E_pXI5z6PJC_GUEI5enxJeC0q3tZ58I" alt="ФБР заплатит 250 тысяч долларов за помощь в задержании ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Служба внутренней разведки Соединённых Штатов ищет предпринимателя из Северной столицы. В субботу, 26 ноября, стало известно, что Федеральное бюро&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ostro.org/general/society/news/653003/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ФБР объявило в розыск главаря ЧВК &quot;Вагнер&quot; Пригожина</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSbxWQLCN8Vc_lYmYW2jUo-7NCE9PhlBhESifpmx7JyCZs2IzevTNqTRDPhksAO7MCZzqhFf99d" alt="ФБР объявило в розыск главаря ЧВК &quot;Вагнер&quot; Пригожина" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Федеральное Бюро расследований объявило в розыск главаря ЧВК &quot;Вагнер&quot; Евгения Пригожина. Об этом сообщается на официальном сайте.</p></div>
            </div>
        </a><a href='https://glavcom.ua/ru/news/fbr-objavilo-v-rozysk-povara-putina-obeshchajushcheho-bolshuju-nahradu-891607.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ФБР объявило в розыск «повара Путина», обещает большую ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQiBV2q5zMVw4XKHVRDK9sH_ULdxLt_9eM5lq1zASZCPytWXGFXll47Knc3zgQZlURXwlk7sSfe" alt="ФБР объявило в розыск «повара Путина», обещает большую ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пригожин подозревается в сговоре с целью вмешательства во внутреннюю политику США.</p></div>
            </div>
        </a><a href='https://ug.tsargrad.tv/news/prigozhin-ocenil-svoj-rozysk-agentami-fbr-skolko-smogut-podzarabotat_673047'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пригожин оценил свой розыск агентами ФБР: &quot;Сколько смогут ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQen8a_850PUGRgOrhMmwlyXvVMhwvwMktsOGjv3twy2nnZ43jG9zCA3Z38a3i2TLZIMRAkuOwb" alt="Пригожин оценил свой розыск агентами ФБР: &quot;Сколько смогут ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Петербургский бизнесмен Евгений Пригожин язвительно прокомментировал сообщения о том, что он разыскивается ФБР.</p></div>
            </div>
        </a><a href='https://vmo24.ru/news/ne_dayte_sebya_obmanut_prigozhin_prizval_ne_verit_obeshchaniyam_fbr_o_nagrade_za_informaciyu_o_ego_mestonahozhdenii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Не дайте себя обмануть»: Пригожин призвал не верить ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQVRSJ-HhsTv8OmQQbFAhu09xG6WwWwk6LDXMe_P3-blY05U7ZOUQUfAuLaEXY_B6QZaCSpJ0mx" alt="«Не дайте себя обмануть»: Пригожин призвал не верить ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Свидетельство о регистрации СМИ ЭЛ № ФС 77 - 70501. Выдано Роскомнадзором 25.07.2017. Посещая сайт vmo24.ru, Вы даете согласие на обработку файлов cookie, сбор&nbsp;...</p></div>
            </div>
        </a><a href='https://apostrophe.ua/news/world/america/2022-11-26/fbr-obyyavilo-nagradu-za-vladeltsa-chvk-vagnera-v-chem-ego-obvinyayut/284751'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ФБР объявило награду за владельца ЧВК &quot;Вагнера&quot;: в чем его ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxEOVsLPY_EDEZjWb8KGEMwGypGKSpE7nPq56vqIbiIiGKu0HAc7vMLvFMCnCzUEkD2HXxb8A8" alt="ФБР объявило награду за владельца ЧВК &quot;Вагнера&quot;: в чем его ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщает Федеральное бюро расследований. В ФБР отмечают, что Пригожин подозревается в сговоре с целью препятствования и уничтожения законных функций&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}