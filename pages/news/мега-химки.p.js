import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Мега Химки</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Мега Химки"/>
        <meta name="description" content="Trending News about Мега Химки" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Мега Химки</h1>
            <Image width={800} height={500} src="https://focus.ua/static/storage/thumbs/1200x630/a/35/0f62bc87-a007d87a2d0e89ecfbff4d082ef8b35a.jpg?v=8022_1" alt="Мега Химки"/>
            <h3>Recent News</h3>
            <a href='https://focus.ua/world/540344-vygorel-dotla-kak-vyglyadit-moskovskiy-trc-mega-himki-posle-silnogo-pozhara-foto-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Выгорел дотла: как выглядит московский ТРЦ &quot;Мега Химки&quot; после ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS43JKsZ6XsQ1sss0cumnV7G5o0Mi7XabZP95_CphgxGSyxh3Ft-H77WK587TJo0CqMoMv1YJXu" alt="Выгорел дотла: как выглядит московский ТРЦ &quot;Мега Химки&quot; после ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Огонь быстро распространился на площади 17 000 кв. м. и полностью охватил один из строительных магазинов, где были банки с краской и аэрозоли.</p></div>
            </div>
        </a><a href='https://focus.ua/uk/world/540344-vygorel-dotla-kak-vyglyadit-moskovskiy-trc-mega-himki-posle-silnogo-pozhara-foto-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вигорів ущент: як виглядає московський ТРЦ &quot;Мега Хімки&quot; після ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS43JKsZ6XsQ1sss0cumnV7G5o0Mi7XabZP95_CphgxGSyxh3Ft-H77WK587TJo0CqMoMv1YJXu" alt="Вигорів ущент: як виглядає московський ТРЦ &quot;Мега Хімки&quot; після ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вогонь швидко поширився площею 17 000 кв. м. і повністю охопив один із будівельних магазинів, де були банки з фарбою та аерозолі.</p></div>
            </div>
        </a><a href='https://thepage.ua/news/pozhar-v-tc-mega-himki-v-moskve-chto-izvestno'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На россии пылает. Под Москвой горел ТЦ «Мега Химки», а в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQD1JlvcCyXhhNgcH3QKu-P8YnIyVXQQhH2yjctxVdLFTpTH5BQRFvGu7U8Rdl7CAXKTRSBX_7Q" alt="На россии пылает. Под Москвой горел ТЦ «Мега Химки», а в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>9 декабря 2022 года в рф началось с масштабных пожаров в ТЦ &quot;Мега Химки&quot; в Подмосковье и на шинном комбинате Nortec в Барнауле.</p></div>
            </div>
        </a><a href='https://thepage.ua/ua/news/pozhezha-v-tc-mega-himki-v-moskvi-sho-vidomo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На росії палає. Під Москвою горів ТЦ «Мега Хімки», а в Барнаулі ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQD1JlvcCyXhhNgcH3QKu-P8YnIyVXQQhH2yjctxVdLFTpTH5BQRFvGu7U8Rdl7CAXKTRSBX_7Q" alt="На росії палає. Під Москвою горів ТЦ «Мега Хімки», а в Барнаулі ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>9 грудня 2022 року у рф розпочалося з масштабних пожеж у ТЦ &quot;Мега Хімки&quot; в Підмосков&#39;ї та на шинному комбінаті Nortec у Барнаулі.</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63912735'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пожар в торговом центре &quot;Мега&quot; в Химках: полностью сгорел ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQDY-4l60MEwHGqOF1fgZdlkbuKVv9Su7uoDTVus_c-V8DcW78hc8_OnoDUFd7zw1y6-3D2kaH-" alt="Пожар в торговом центре &quot;Мега&quot; в Химках: полностью сгорел ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В ночь на пятницу вспыхнул сильный пожар в крупном торговом комплексе &quot;Мега Химки&quot;, расположенном на Ленинградском шоссе, около границы Москвы и Московской&nbsp;...</p></div>
            </div>
        </a><a href='https://inforesist.org/v-podmoskove-proizoshel-masshtabnyj-pozhar-so-vzryvami-v-tcz-mega-himki/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Подмосковье произошел масштабный пожар со взрывами в ТЦ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTK4ucR2e6sGRF2hpq78_3N2xagxnaYhepYp9VLG-vh6jCvRJAW-I5gyK7lp8v_hhC7vs60C1Qe" alt="В Подмосковье произошел масштабный пожар со взрывами в ТЦ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В ночь на 9 декабря произошел крупный пожар в ТЦ &quot;Мега Химки&quot;, расположенном на Ленинградском шоссе, около границы Москвы и Московской области. Об этом.</p></div>
            </div>
        </a><a href='https://u24.ru/news/69530/v-moskve-vspyhnul-krupnyy-pozhar-v-tc-mega-himki'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Москве вспыхнул крупный пожар в ТЦ «МЕГА Химки»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQzP013aYRrl4xRg9jaovYe1l-a-L-pUjaSfhvHhDamJGTqYd27jqR_j5ZhMsWgO7JOdAB5l0e6" alt="В Москве вспыхнул крупный пожар в ТЦ «МЕГА Химки»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Площадь возгорания составляет более 15 тысяч квадратных метров. В пятницу, 9 декабря, в 5.58 в Москве в торговом центре «Мега Химки» на Ленинградском шоссе&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.ru/society/482262-krupnyj-pozar-v-gipermarkete-mega-himki'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Крупный пожар в гипермаркете OBI в ТЦ «Мега Химки»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKchm6aWadvWVq35lULmP81xqzdCFcxVcVVcUPp9jz5kVfs_i5CvoO-YMVnYi--QnmYDQNYzDo" alt="Крупный пожар в гипермаркете OBI в ТЦ «Мега Химки»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Около 6 утра стало известно о пожаре в строительном гипермаркете OBI в подмосковном ТЦ «Мега Химки». К 8:00 здание площадью 18 000 кв. м было почти&nbsp;...</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/russia/v-moskve-moschnyij-pozhar-ohvatil-tts-byili-slyishnyi-zvuki-vzryivov-foto-i-video.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Москве мощный пожар охватил ТЦ, были слышны звуки ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQACNh6LEKp1VmK2MTr3Bew9-DOwGHfVBjBmYkYhxKyou3EpPl3kj--uF6ZIUTgm1PJzUfKNkHQSw" alt="В Москве мощный пожар охватил ТЦ, были слышны звуки ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>24,0 т. Только проверенная информация у нас в Telegram-канале Obozrevatel и в Viber . Не ведитесь на фейки!</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/ukr/russia/u-moskvi-potuzhna-pozhezha-ohopila-tts-bulo-chutno-zvuki-vibuhiv-foto-i-video.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Москві потужна пожежа охопила ТЦ, було чутно звуки вибухів ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQACNh6LEKp1VmK2MTr3Bew9-DOwGHfVBjBmYkYhxKyou3EpPl3kj--uF6ZIUTgm1PJzUfKNkHQSw" alt="У Москві потужна пожежа охопила ТЦ, було чутно звуки вибухів ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>24,1 т. Лише перевірена інформація в нас у Telegram-каналі Obozrevatel та Viber. Не ведіться на фейки!</p></div>
            </div>
        </a>
        </Template></>;
}