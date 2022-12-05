import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Донбасс</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Донбасс"/>
        <meta name="description" content="Trending News about Донбасс" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Донбасс</h1>
            <Image width={800} height={500} src="https://24tv.ua/resources/photos/news/202212/2211236.jpg?v=1670164850000&w=1200&h=675" alt="Донбасс"/>
            <h3>Recent News</h3>
            <a href='https://24tv.ua/ru/putin-poedet-na-donbass-stupak-dopustil-reshitsja-li-glava-kremlja-i-zachem-emu-jeto-24-kanal_n2211236'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Может поехать двойник, – Ступак предположил, действительно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROFOhGbjKIRWjRoKDv8eXfbD5VhQvdD8ojc8rR-sP9f8X8aZykDBruJ4l4dfJUEpii-umt93KT" alt="Может поехать двойник, – Ступак предположил, действительно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В России анонсировали, что Владимир Путин уедет на оккупированный Донбасс. Действительно ли глава Кремля готов на эту поездку, или он отправит двойника,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.obozrevatel.com/politics-news/zachem-putinu-poezdka-na-donbass-i-budet-li-ona-nastoyaschej-fejgin-ozvuchil-vozmozhnyie-variantyi.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зачем Путину поездка на Донбасс и будет ли она настоящей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSyVdC8mVkQ7mIMQjaz9FWCC11QEP9m7N9Qi0UyIjk3OKIUH4p7r_oNhso7NseKatisBd344ZpfBQ" alt="Зачем Путину поездка на Донбасс и будет ли она настоящей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>5,0 т. Только проверенная информация у нас в Telegram-канале Obozrevatel и в Viber . Не ведитесь на фейки!</p></div>
            </div>
        </a><a href='https://vikna.tv/ru/video/svit/denisenko-o-zaplanirovannoj-poezdke-putina-na-donbass/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Шоу под названием &quot;приезд на Донбасс&quot;: Денисенко о планах ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjr4FC0PqBVrVB4W9ALftFo7f5cO9VSL8RtS-IgJ7gmLecPNIv17ZM1FBIdOduvlwjZA56y91-" alt="Шоу под названием &quot;приезд на Донбасс&quot;: Денисенко о планах ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Денисенко о планах Путина посетить оккупированные территории. Вадим Денисенко о том, почему Путин решил приехать на Донбасс.</p></div>
            </div>
        </a><a href='https://glavred.info/world/hochet-sootvetstvovat-primeru-zelenskogo-feygin-obyasnil-zachem-putinu-poezdka-na-donbass-10430417.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Хочет соответствовать Зеленскому&quot;: Фейгин объяснил, зачем ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT6wdi__HD2fzYZBRYjy5rkAPB32RXbrdev5Brt_G_5rYItve1wv3CJ2O_ow6CTrkS5-7NjTTmX" alt="&quot;Хочет соответствовать Зеленскому&quot;: Фейгин объяснил, зачем ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Кремле заявили, что Путин может поехать на оккупированный Донбасс. Марк Фейгин объяснил, зачем это нужно российскому диктатору и кому он подражает.</p></div>
            </div>
        </a><a href='https://newsmaker.md/rus/novosti/kreml-soobschil-o-planah-putina-posetit-donbass/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кремль сообщил о планах Путина посетить Донбасс</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_PTdm3ZekvNy0VtBF4FtGO3XIHuKZO7gZq0rVK_KI8ijDgifXGwbO144xK0Fn9BfS_KcHIhPP" alt="Кремль сообщил о планах Путина посетить Донбасс" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент России Владимир Путин со временем посетит Донбасс. Об этом 3 декабря сообщил его пресс-секретарь Дмитрий Песков, но не указал время&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}