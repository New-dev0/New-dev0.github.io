import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Відключення електроенергії</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Відключення електроенергії"/>
        <meta name="description" content="Trending News about Відключення електроенергії" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Відключення електроенергії</h1>
            <Image width={800} height={500} src="" alt="Відключення електроенергії"/>
            <h3>Recent News</h3>
            <a href='https://prm.ua/2-hrudnia-u-kyievi-ta-odesi-tryvatymut-ekstreni-vidkliuchennia-elektroenerhii/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2 грудня у Києві та Одесі триватимуть екстрені відключення ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwpcEryTRTU3SIoLpW7PMAvw6-eHXnFbEYqEiVhB-Rh6wxExVcUknzXHQB-Io-i_coLTOUOrmm" alt="2 грудня у Києві та Одесі триватимуть екстрені відключення ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Києві та Одесі у п&#39;ятницю, 2 грудня продовжуються екстрені відключення електроенергії. Однак щодо Києва обсяги наближаються до планових.</p></div>
            </div>
        </a><a href='https://zakarpattya.net.ua/News/224530-Hrafiky-vidkliuchennia-elektroenerhii-maiut-rozrobliatysia-publichno-i-prozoro-%E2%80%93-Baloha'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Графіки відключення електроенергії мають розроблятися ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS4kGkYWaTxCqjcPWzXI5NJNs_fnov__NdW7XK9rx6-o01Y4lLMhbgE1hPur8wtvZGpFmG8LXoU" alt="Графіки відключення електроенергії мають розроблятися ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Через ракетні удари рашистів, країна у важкій гуманітарній ситуації, але навіть в таких умовах цілком можливо забезпечити чіткий та справедливий розподіл&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ua/ukraine/20221201-koly-kyyiv-povernetsya-do-planovyh-grafikiv-vidklyuchennya-svitla/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Коли Київ повернеться до планових графіків відключення світла</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSD6Dm3I2UOkewOjJ6U6g3KY0BoD32C3GwDZWs9MThtK70Unuh_aRVfVE8W_yi1MvCtuiyLnS2j" alt="Коли Київ повернеться до планових графіків відключення світла" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Екстрені відключення електроенергії тривають у Києві після масованої ракетної атаки Росії на українські енергооб&#39;єкти. Коли дадуть світло у Києві,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.epravda.com.ua/news/2022/12/1/694506/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У п&#39;ятницю в Києві – екстрені відключення світла, обсяги близькі ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSsVzxi-91LfcfobwhuC5C176QvGJrzuZpwkn86fqA8N57WUppHpecjFx-3wfP1TaClcDR8PQo6" alt="У п&#39;ятницю в Києві – екстрені відключення світла, обсяги близькі ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Yasno пояснюють, що аварії в мережі почали траплятися частіше з двох причин. По-перше, споживачі починають одразу вмикати всі прилади, щойно з&#39;являється&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-kyiv-dtek-vidkliuchennia/32156966.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Київ: «ДТЕК» включив до списку на відключення 750 будинків ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7HaE-Udsj_7ppGD2MqJFsfspdZyXCsO8TbgwZqcHHlwbnzUWE6MhP9LWD-uq80rhDkufetRrL" alt="Київ: «ДТЕК» включив до списку на відключення 750 будинків ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Для цих будинків, які підключені до одних ліній із критичними об&#39;єктами, створили альтернативну схему постачання світла.</p></div>
            </div>
        </a><a href='https://www.unian.ua/economics/energetics/vidklyuchennya-svitla-u-kiyevi-v-yasno-zrobili-vazhlivu-zayavu-shcho-zminitsya-12062886.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Києві від світла відключатимуть більше будинків: що змінилося</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT4O4X6vfRws3Kr1PehF1cA6cTL7QYu0fdBjVOszgm3x3c4fd8bX9Aa92kyp4AB1YHvBJvPDMbj" alt="У Києві від світла відключатимуть більше будинків: що змінилося" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Час, який кияни проводять без світла, з кожним днем скорочується, повідомили у Yasno. Оновлено. &quot;ДТЕК Київські електромережі&quot; додала до графіку відключень&nbsp;...</p></div>
            </div>
        </a><a href='https://chas.news/news/zadlya-spravedlivih-i-rivnih-umov-dtek-dodav-do-vidklyuchen-elektroenergii-750-stolichnih-budinkiv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>1497 житлових будинків у Києві раніше не потрапляли під ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQPhiNwuSoXOhYdUijOzmGz_BQp5Q69jsn68L-2f0RzNO5Xip1o-XJXIaqpV2fvyTeyx7QWfjv-" alt="1497 житлових будинків у Києві раніше не потрапляли під ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1497 житлових будинків у Києві раніше не потрапляли під відключення електроенергії, оскільки були заживлені за тими ж лініями, що і обʼєкти критичної&nbsp;...</p></div>
            </div>
        </a><a href='http://www.mukachevo.net/ua/news/view/4519264'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Балога: Суспільство вимагає чітких справедливих графіків ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQuq_wWLhmR3NWRShWtuqHdBpbrmwR4B-bFXtgkiqb_4AcEE-ifAX5cCa-DN1hL5Bn7adeg0uv1" alt="Балога: Суспільство вимагає чітких справедливих графіків ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Через ракетні удари рашистів, країна у важкій гуманітарній ситуації, але навіть в таких умовах цілком можливо забезпечити чіткий та справедливий розподіл&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}