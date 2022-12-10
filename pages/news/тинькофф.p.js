import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Тинькофф</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Тинькофф"/>
        <meta name="description" content="Trending News about Тинькофф" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Тинькофф</h1>
            <Image width={800} height={500} src="https://forpost-sz.ru/sites/default/files/styles/wide169/public/doc/2022/12/09/imgonline-com-ua-frame-blurred-kunnrb8xhvci.jpg?h=212271da&itok=Z6auOZrZ" alt="Тинькофф"/>
            <h3>Recent News</h3>
            <a href='https://forpost-sz.ru/a/2022-12-09/polzovateli-banka-tinkoff-soobshchili-o-sboyakh-v-rabote-prilozheniya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пользователи банка «Тинькофф» сообщили о сбоях в работе ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSwsST3WxN7rXtUWblAvkuoUuVZORkxUXY6yNYbEHKpp_eSlP7zfAD3PQOX9bROm2z4eccsvv9G" alt="Пользователи банка «Тинькофф» сообщили о сбоях в работе ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Клиенты российской кредитно-финансовой организации заметили неполадки в функционировании утилиты. В пятницу, 9 декабря, пользователи банка «Тинькофф»&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.ru/finansy/482278-v-rabote-prilozenij-al-fa-banka-i-tin-koff-odnovremenno-proizosel-sboj'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В работе приложений Альфа-банка и «Тинькофф ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZG0uNhI6qsPm0FbfTKaP_7TSJbbW4eekdp1s2nHDwQwCtwO0Gx5Ix9tHIpl083voXAhitvzRA" alt="В работе приложений Альфа-банка и «Тинькофф ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В работе приложений Альфа-банка и Тинькофф Банка одновременно произошел сбой — при попытке входа сервисы выдают ошибку. «Тинькофф» сообщил о «технической&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/media/news/2022/12/09/954516-tinkoff-sboi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В работе приложения «Тинькофф» произошел сбой</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2oC7hJPFcPPxMU07kYWvbJYln5HtYqeXXUpYAlkYVvTVrLfKvj129IowJlniGE3_HSn3Ojx0o" alt="В работе приложения «Тинькофф» произошел сбой" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Клиенты банка «Тинькофф» массово жалуются на сбой в работе приложения. Об этом свидетельствуют данные детектора сбоев Brand Analytics.</p></div>
            </div>
        </a><a href='https://frankrg.com/104737'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Банковское и инвестиционное приложение «Тинькофф ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYwEzGNtkxuiURQG2SiUdxBTmoQDCQhUvn1A2JeTBovZOz5CgoYm9uAMKCEku1HFMgIELQgIc6" alt="Банковское и инвестиционное приложение «Тинькофф ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>+0,62 п.п. год к году. Frank Media направили запрос о причинах сбоя в пресс-службу банка. #&nbsp;...</p></div>
            </div>
        </a><a href='https://www.comnews.ru/content/223456/2022-12-09/2022-w49/prilozheniyakh-tinkoff-alfa-banka-i-rayffayzenbanka-voznik-sboy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В приложениях &quot;Тинькофф&quot;, Альфа-банка и Райффайзенбанка ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="В приложениях &quot;Тинькофф&quot;, Альфа-банка и Райффайзенбанка ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мобильные приложения сразу трех банков начали работать со сбоями. В Альфа-банке проблемы объясняют техническими работами Мобильные приложения &quot;Тинькофф&quot; и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/tehnologii/09122022/529743'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сбой произошел в работе приложений &quot;Тинькофф Банка&quot; и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSTopVei9dG0iOBC-GeG4XJNgrayVFSDc2s6BlKliDnj36gPldSZARs2ufFrHCj4urQTwW41dvS" alt="Сбой произошел в работе приложений &quot;Тинькофф Банка&quot; и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Клиенты столкнулись со сложностями при входе в мобильные приложения кредитных организаций.</p></div>
            </div>
        </a><a href='https://www.banki.ru/news/lenta/?id=10976996'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В приложениях Тинькофф Банка и «Тинькофф Инвестиций ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRRKc0NuPATRWm9MqaN_4NFCd2MujGTd-cQBfchzSqnz__IlUe11zUbaguyUL68Z5POIMgLb36x" alt="В приложениях Тинькофф Банка и «Тинькофф Инвестиций ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В мобильных приложениях Тинькофф Банка и «Тинькофф Инвестиций» произошел сбой. Клиенты жалуются, что не могут войти в приложения, совершать сделки или&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}