import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Лукашенко</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Лукашенко"/>
        <meta name="description" content="Trending News about Лукашенко" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Лукашенко</h1>
            <Image width={800} height={500} src="https://varta1.com.ua/uploads/media/04/f1/04f1388e5fc9f194ec179232dce19ea9_orig.jpg" alt="Лукашенко"/>
            <h3>Recent News</h3>
            <a href='https://varta1.com.ua/news/feygin-vvazhaie-shcho-lukashenko-ne-vpevneniy-u-svoyiy-armiyi_357115.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фейгін вважає, що лукашенко невпевнений у своїй армії</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRIR7f3VApxrYxQomhyFKdDcMwmjEOvli4oqFGldniipC7H_ZheCvMRm_2TqxfcBlL8QpY1DsPc" alt="Фейгін вважає, що лукашенко невпевнений у своїй армії" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Росія й надалі намгається схилити Лукашенка взяти участь у війні з Україною. Про це в коментарі ТСН.ua розповів російський правозахисник Марк Фейгін.</p></div>
            </div>
        </a><a href='https://tsn.ua/exclusive/feygin-pro-zagrozu-z-bilorusi-lukashenko-boyitsya-stati-zhertvoyu-ciyeyi-viyni-2209759.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фейгін про загрозу з Білорусі: &quot;Лукашенко боїться стати жертвою ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2uwTQMGM7TWpH2bSSord7YVeU5E_BvOxiBxBovxBW5lkzHCf02n2rv5kHbuBGY6TJWLwztDgW" alt="Фейгін про загрозу з Білорусі: &quot;Лукашенко боїться стати жертвою ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Фейгін вважає, що Путін намагається змусити Лукашенка взяти участь у війні, тоді як сам білоруський диктатор боїться за власну безпеку.</p></div>
            </div>
        </a><a href='https://racurs.ua/ua/n177117-lukashenko-zayavyv-pro-povne-znyschennya-ukrayiny-v-razi-prodovjennya-oporu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко заявив про «повне знищення» України в разі ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtsfQhUoiyDhGqQGpMcni9ic9fkKijsZBC5h7MNodza_6Kkwj-YxhoJCPV2fGjV0KkJ3DUEGy0" alt="Лукашенко заявив про «повне знищення» України в разі ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>олександр лукашенко під час саміту Організації договору про колективну безпеку (ОДКБ) в Єревані, відповідаючи на запитання журналістів, заявив,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/24/7377823/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко пояснив, чому білоруські війська не допоможуть ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJUQpSoBylSY-0Vo6O8g8LV_SLz-EIJ47JyEJkB5Et7I6eXnXGI7kI2dyuTqGHGSHZUiYHe3Zu" alt="Лукашенко пояснив, чому білоруські війська не допоможуть ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самопроголошений білоруський президент Олександр Лукашенко заявив, що його 40-тисячне військо не зможе допомогли Росії в агресії проти України,&nbsp;...</p></div>
            </div>
        </a><a href='https://donpatriot.news/article/lukashenko-pogrozhuye-yadernoyu-zbroyeyu-civilizovanim-krayinam'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко погрожує ядерною зброєю цивілізованим країнам</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRnSGy71hDud__jD0uhXCUWstqXjgpizq7h5RU2XWAczlfQqpswqL9hZ8UisyhXhlJoyAGvvuYC" alt="Лукашенко погрожує ядерною зброєю цивілізованим країнам" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Білоруські пропагандистські канали цитують диктатора Олександра Лукашенка, який вже погрожує цивілізованим країнам застосуванням ядерної зброї.</p></div>
            </div>
        </a><a href='https://24tv.ua/lukashenko-pogrozhuye-ukrayini-vyachorka-poyasniv-sut-zayav-biloruskogo_n2205397'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко розуміє, що Путін – його єдина гарантія втриматися ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSAzDJYh-Z1E1_EZ69WK92bMd8RY3u-BNLWxqvPAJiMpXvjmcTOtj8Z7BNX_wslqBC2EMXHrKuq" alt="Лукашенко розуміє, що Путін – його єдина гарантія втриматися ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Погрози Лукашенка – Лукашенко і Путін – чи підтримують білоруси війну проти України. Франак Вячорка розповів, що чекає на Лукашенка у разі наказу про наступ&nbsp;...</p></div>
            </div>
        </a><a href='https://racurs.ua/ua/n177120-lukashenko-povynen-postaty-pered-trybunalom-za-viynu-rezoluciya-ievroparlamentu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко повинен постати перед трибуналом за війну ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBbOlwHPA1uTMgScsDQc3qhUktSRsCeAyPgSEmx6sFAr1AJtgPWLn9y4x1AsuecwnwX_dPD6WW" alt="Лукашенко повинен постати перед трибуналом за війну ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Режим лукашенка разом з росією має бути притягнутий до відповідальності за воєнні злочини в Україні перед міжнародним трибуналом і Міжнародним кримінальним&nbsp;...</p></div>
            </div>
        </a><a href='https://24tv.ua/ru/lukashenko-ugrozhaet-ukraine-vjachorka-objasnil-sut-zajavlenij-belorusskogo-diktatora-24-kanal_n2205398'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко понимает, что Путин – его единственная гарантия ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSAzDJYh-Z1E1_EZ69WK92bMd8RY3u-BNLWxqvPAJiMpXvjmcTOtj8Z7BNX_wslqBC2EMXHrKuq" alt="Лукашенко понимает, что Путин – его единственная гарантия ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Угрозы Лукашенко – Лукашенко и Путин – поддерживают ли белорусы войну против Украины. Франак Вячорка рассказал, что ждет Лукашенко в случае приказа о&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/world/ne-tilki-yevropa-zatremtit-lukashenko-prigroziv-svitu-brudnimi-bombami-video-12056412.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Не тільки Європа затремтить&quot;: Лукашенко пригрозив світу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQItLywIJlcPaIr1G_kEYswPSCL2XcDcicYBo_9prc85oN9_XsfC5iCl_PceDsJC3IrrVrnBpM" alt="&quot;Не тільки Європа затремтить&quot;: Лукашенко пригрозив світу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Диктатор продовжив розкручувати &quot;байку&quot; про &quot;напад на Білорусь&quot;, який хтось нібито готує.</p></div>
            </div>
        </a><a href='https://suspilne.media/323922-dali-povne-znisenna-ukraini-lukasenko-zaklikav-zelenskogo-do-peregovoriv/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Далі — повне знищення України&quot;: Лукашенко закликав ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6Bf5dmxH-_krVW-jx3mX28wJhfKObTSfykDPNVuBATz-aGBfIIYEKPvaiPO1EpxCvF9PYGjyJ" alt="&quot;Далі — повне знищення України&quot;: Лукашенко закликав ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Очільник білоруського режиму Олександр Лукашенко заявив, що президент Володимир Зеленський має погодитись на мирні переговори з Росією,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}