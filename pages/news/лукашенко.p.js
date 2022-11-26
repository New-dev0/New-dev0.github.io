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
            <Image width={800} height={500} src="https://img.tsn.ua/cached/998/tsn-15890496c3fba55a55e21f0ca3090d06/thumbs/1200x630/51/93/99c8d560440736dc9d6803a505419351.jpeg" alt="Лукашенко"/>
            <h3>Recent News</h3>
            <a href='https://tsn.ua/exclusive/feygin-pro-zagrozu-z-bilorusi-lukashenko-boyitsya-stati-zhertvoyu-ciyeyi-viyni-2209759.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фейгін про загрозу з Білорусі: &quot;Лукашенко боїться стати жертвою ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2uwTQMGM7TWpH2bSSord7YVeU5E_BvOxiBxBovxBW5lkzHCf02n2rv5kHbuBGY6TJWLwztDgW" alt="Фейгін про загрозу з Білорусі: &quot;Лукашенко боїться стати жертвою ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Фейгін вважає, що Путін намагається змусити Лукашенка взяти участь у війні, тоді як сам білоруський диктатор боїться за власну безпеку.</p></div>
            </div>
        </a><a href='https://varta1.com.ua/news/feygin-vvazhaie-shcho-lukashenko-ne-vpevneniy-u-svoyiy-armiyi_357115.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фейгін вважає, що лукашенко невпевнений у своїй армії</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRIR7f3VApxrYxQomhyFKdDcMwmjEOvli4oqFGldniipC7H_ZheCvMRm_2TqxfcBlL8QpY1DsPc" alt="Фейгін вважає, що лукашенко невпевнений у своїй армії" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Росія й надалі намгається схилити Лукашенка взяти участь у війні з Україною. Про це в коментарі ТСН.ua розповів російський правозахисник Марк Фейгін.</p></div>
            </div>
        </a><a href='https://racurs.ua/ua/n177117-lukashenko-zayavyv-pro-povne-znyschennya-ukrayiny-v-razi-prodovjennya-oporu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко заявив про «повне знищення» України в разі ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtsfQhUoiyDhGqQGpMcni9ic9fkKijsZBC5h7MNodza_6Kkwj-YxhoJCPV2fGjV0KkJ3DUEGy0" alt="Лукашенко заявив про «повне знищення» України в разі ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>олександр лукашенко під час саміту Організації договору про колективну безпеку (ОДКБ) в Єревані, відповідаючи на запитання журналістів, заявив,&nbsp;...</p></div>
            </div>
        </a><a href='https://donpatriot.news/article/lukashenko-pogrozhuye-yadernoyu-zbroyeyu-civilizovanim-krayinam'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко погрожує ядерною зброєю цивілізованим країнам</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRnSGy71hDud__jD0uhXCUWstqXjgpizq7h5RU2XWAczlfQqpswqL9hZ8UisyhXhlJoyAGvvuYC" alt="Лукашенко погрожує ядерною зброєю цивілізованим країнам" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Білоруські пропагандистські канали цитують диктатора Олександра Лукашенка, який вже погрожує цивілізованим країнам застосуванням ядерної зброї.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/24/7377823/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко пояснив, чому білоруські війська не допоможуть ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJUQpSoBylSY-0Vo6O8g8LV_SLz-EIJ47JyEJkB5Et7I6eXnXGI7kI2dyuTqGHGSHZUiYHe3Zu" alt="Лукашенко пояснив, чому білоруські війська не допоможуть ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самопроголошений білоруський президент Олександр Лукашенко заявив, що його 40-тисячне військо не зможе допомогли Росії в агресії проти України,&nbsp;...</p></div>
            </div>
        </a><a href='https://racurs.ua/ua/n177120-lukashenko-povynen-postaty-pered-trybunalom-za-viynu-rezoluciya-ievroparlamentu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко повинен постати перед трибуналом за війну ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBbOlwHPA1uTMgScsDQc3qhUktSRsCeAyPgSEmx6sFAr1AJtgPWLn9y4x1AsuecwnwX_dPD6WW" alt="Лукашенко повинен постати перед трибуналом за війну ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Режим лукашенка разом з росією має бути притягнутий до відповідальності за воєнні злочини в Україні перед міжнародним трибуналом і Міжнародним кримінальним&nbsp;...</p></div>
            </div>
        </a><a href='https://gordonua.com/ukr/news/war/zrobit-girshe-lukashenko-zajaviv-shcho-biloruska-armija-ne-zmozhe-dopomogti-putinu-u-vijni-v-ukrajini-1637811.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Зробить гірше&quot;. Лукашенко заявив, що білоруська армія не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8Iq53gLm7oqpfstsgZ0f8_SPGpHIyDX_UZyV3ke1k0NiKRL2SFV80umT2KJ3P956sza5fYXEV" alt="&quot;Зробить гірше&quot;. Лукашенко заявив, що білоруська армія не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Олександр Лукашенко, який називає себе президентом Білорусі, заявив, що вводити на територію України білоруські...</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/exclusive/feygin-ob-ugroze-iz-belarusi-lukashenko-boitsya-stat-zhertvoy-etoy-voyny-2209759.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фейгин об угрозе из Беларуси: &quot;Лукашенко боится стать жертвой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2uwTQMGM7TWpH2bSSord7YVeU5E_BvOxiBxBovxBW5lkzHCf02n2rv5kHbuBGY6TJWLwztDgW" alt="Фейгин об угрозе из Беларуси: &quot;Лукашенко боится стать жертвой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Фейгин считает, что Путин пытается заставить Лукашенко поучаствовать в войне, тогда как сам белорусский диктатор боится за собственную безопасность.</p></div>
            </div>
        </a><a href='https://ua.korrespondent.net/world/4538420-lukashenko-pryhrozyv-yevropi-yadernymy-ta-atomnymy-bombamy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко пригрозив Європі &quot;ядерними та атомними&quot; бомбами</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSUZmW-PsKqpxrSHf_FTeR2KdqS_GeEUYOSVWeuJyZVJCm2j_p_xxGBeXgmgxSGRufP8zFJwI02" alt="Лукашенко пригрозив Європі &quot;ядерними та атомними&quot; бомбами" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Формальний президент вкотре перед провладними ЗМІ розводився, що жде ймовірного &quot;агресора&quot; Білорусі. Самопроголошений президент Білорусі Олександр Лукашенко&nbsp;...</p></div>
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