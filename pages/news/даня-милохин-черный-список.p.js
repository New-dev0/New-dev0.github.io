import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Даня Милохин черный список</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Даня Милохин черный список"/>
        <meta name="description" content="Trending News about Даня Милохин черный список" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Даня Милохин черный список</h1>
            <Image width={800} height={500} src="https://prooren.ru/sites/default/files/assets/images/2022/11/photo_2022-11-15_15-39-18.jpg" alt="Даня Милохин черный список"/>
            <h3>Recent News</h3>
            <a href='https://prooren.ru/news/vkus-zhizni/danya-milokhin-zayavil-chto-popal-v-chernyy-spisok-rossiyskogo-tv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Даня Милохин заявил, что попал в черный список российского ТВ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1EVqSRyoCp6yXKf2QAa3heBwrla152QYZSRx06QT98T1h3gb7z4B8J47pr-uyWR-gWFgWDj-9" alt="Даня Милохин заявил, что попал в черный список российского ТВ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Популярный среди молодежи блогер Даня Милохин оказался в немилости российских телеканалов. Об этом он рассказал на своей странице в соцсети.</p></div>
            </div>
        </a><a href='https://7days.ru/news/popal-v-chernyy-spisok-milokhina-surovo-nakazali-za-begstvo-s-lednikovogo-perioda.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Попал в черный список: Милохина сурово наказали за бегство с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQKecpRIMNb-SNIGUCaB9Y6mhzsY6wEcA-Qb46cy50dD1xtHTL06PSJdthSHUZZ-RZ1VswqpvAt" alt="Попал в черный список: Милохина сурово наказали за бегство с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>— пожаловался Милохин. Однако сочувствия к блогеру никто не испытывает. В Сети напомнили тиктокеру, что иначе быть и не могло, ведь он возмутительно повел себя&nbsp;...</p></div>
            </div>
        </a><a href='https://kino.mail.ru/news/56747_danya_milohin_viskazalsya_o_popadanii_v_chernii_spisok_zvezd_na_tv/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Даня Милохин высказался о попадании в черный список звезд на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQNpw-9wblxu4rE26bjFKgC0AzSxpyVCrVL8k5FuvlKof9C3u4Jp-j4z4MOnU0-jDkIPbmRWscN" alt="Даня Милохин высказался о попадании в черный список звезд на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TikTok-блогер Даня Милохин в своем Telegram-канале сообщил, что попал в некий черный список звезд. «А Даня чего такой веселый? Он просто еще не знает,&nbsp;...</p></div>
            </div>
        </a><a href='https://sport24.ru/news/figureskating/2022-11-15-sbezhavshiy-iz-lednikovogo-perioda-danya-milokhin-menya-dobavili-v-chernyy-spisok-zvezd-na-televidenii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сбежавший из «Ледникового периода» Даня Милохин: «Меня ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQLiMYNb7FLg7p7UVwab_34bPu4WS9j0gHHaJRFQkKtQeCuckzMMMI4BsetwV772DWtBbOezLFl" alt="Сбежавший из «Ледникового периода» Даня Милохин: «Меня ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самые свежие новости российского и мирового спорта только на сайте Sport24.ru! Интервью со спортсменами, онлайн трансляции, аналитика и прогнозы,&nbsp;...</p></div>
            </div>
        </a><a href='https://bloknot.ru/kul-tura/vnesli-v-cherny-j-spisok-na-tv-ne-pustyat-u-sbezhavshego-milohina-nachalis-ser-ezny-e-problemy-1014755.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Внесли в черный список, на ТВ не пустят»: у сбежавшего ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRzi1r99CdT5NEe5Vl6T9fI70z-T0mDS8AMngLJiBcEf_psvvkyFZZvSfdEdJ0QsxsZek8sth1k" alt="«Внесли в черный список, на ТВ не пустят»: у сбежавшего ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Блогер Даня Милохин может больше не появиться на российском телевидении. О том, что звезду TikTok лишили источника заработка, 20-летний парень сам сообщил в&nbsp;...</p></div>
            </div>
        </a><a href='https://orelsreda.ru/danyu-milohina-zanesli-v-chernyy-spisok-na-tv-iz-za-skandala-v-lednikovom-periode/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Даню Милохина занесли в «черный список» на ТВ из-за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ3TXcYvHSujJ9tiFng1eHRKlOo9gmJKayDqfBmbat5hcaxT0SHzbT2y4VU7IRplfHAkj6Fghwx" alt="Даню Милохина занесли в «черный список» на ТВ из-за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>фото: О стоп-листе сообщил сам тиктокер. Тиктокер Даня Милохин, со скандалом ушедший из шоу «Ледниковый период», сообщил, что его внесли в «черные списки»&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportsdaily.ru/news/milokhin-schitaet-chto-on-popal-v-chernyy-spisok-zvezd-na-televidenii-posle-lednikovogo-perioda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Милохин считает, что он попал в «черный список» звезд на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSeVotXzm_CBLB5CR3yxN8cj6NjC5lxsTUnpKXhFwsEm9S9vwHHU57IWoViVL75YVQYCnoMjq0h" alt="Милохин считает, что он попал в «черный список» звезд на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Оцените новость Фигурное катание 15 ноября 2022, 11:56. Блогер Даня Милохин поделился мнением о том, что его добавили в «черный список» звезд на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}