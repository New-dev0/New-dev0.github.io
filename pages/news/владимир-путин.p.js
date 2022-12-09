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
            <Image width={800} height={500} src="http://www.aex.ru/images/media/o/35475.jpg" alt="Владимир Путин"/>
            <h3>Recent News</h3>
            <a href='https://www.aex.ru/news/2022/12/8/251068/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин вручил звезды Героев космонавтам Ивану ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR0CHBKiL-JZLZ_865Q2O5gFl6AqpfAdQrSGsSqGOWRwBpVeM8MkaWc66EeJzO9vGHBBeYtnrU8" alt="Владимир Путин вручил звезды Героев космонавтам Ивану ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>8 декабря 2022 г., AEX.RU – Президент РФ Владимир Путин в четверг вручил в Кремле золотые звезды двенадцати Героям России, среди которых военнослужащие и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/12/8/7379873/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Путин объяснил, почему уничтожает украинскую энергетику: это ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS69DoTyPYRbGP86aQZOqSiSmsmarkTLCg4er-rn1ZE3q9cSXoLLiTAvnTlCSywGv2Fzd1UCH0v" alt="Путин объяснил, почему уничтожает украинскую энергетику: это ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российский диктатор Владимир Путин признал, что Россия уничтожает объекты украинской энергетики и оставляет миллионы украинцев без коммуникаций (света,&nbsp;...</p></div>
            </div>
        </a><a href='https://punkt-a.info/news/glavnoe/vladimir-putin-vruchil-zvezdu-geroya-nashemu-zemlyaku-uchastniku-svo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин вручил Звезду Героя нашему земляку ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Владимир Путин вручил Звезду Героя нашему земляку ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня в Кремле состоялась церемония награждения Героев России, проявивших себя в ходе специальной военной операции на Украине. Золотые звезды вручал&nbsp;...</p></div>
            </div>
        </a><a href='https://topwar.ru/206449-vladimir-putin-udary-po-ukrainskoj-infrastrukture-javljajutsja-iskljuchitelno-otvetnoj-meroj.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин: Удары по украинской инфраструктуре ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQOiqB3c_0Myh2K0vuOR7fONmy1ViGUMJBj0TmRgE9OHHTWAbeobYAW5ba0HK7ivEpJVSEzY6a" alt="Владимир Путин: Удары по украинской инфраструктуре ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Такое заявление президент РФ сделал после завершения церемонии вручения медалей «Золотая Звезда» Героям России Сегодня в Кремле состоялась церемония&nbsp;...</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/vlast/09122022/529598'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин прибыл в Бишкек на саммит ЕАЭС</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS4X1R3IgwTc97fZNCKIW50lglK1HM08K34tRJ32Q5rumxR9QC_bBKQHHzLJBjsZBzLjP1s09aZ" alt="Владимир Путин прибыл в Бишкек на саммит ЕАЭС" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В рамках мероприятия планируют одобрить пакет документов, утверждающих основные направления международной деятельности союза на 2023 год.</p></div>
            </div>
        </a><a href='http://kremlin.ru/events/president/news/70053'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>9 декабря Владимир Путин посетит Бишкек для участия в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="9 декабря Владимир Путин посетит Бишкек для участия в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>9 декабря глава Российского государства примет участие в заседании Высшего Евразийского экономического совета в Бишкеке.</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-12-08/vladimir-putin-zayavil-chto-bredni-i-feyki-ne-dolzhny-meshat-rossiyskoy-armii-vypolnyat-svoy-dolg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин заявил, что бредни и фейки не должны мешать ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWAIhV9XWglmN298vY-cU65mMeWI4WPymIOElpMVk66YikzqP-Zrs0UpaW7_3BsAiRWENpCPNa" alt="Владимир Путин заявил, что бредни и фейки не должны мешать ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом он сказал на церемонии награждения Героев России в Кремле. Фото: kremlin.ru. Бредни и фейки не должны мешать российским военным выполнять свой долг&nbsp;...</p></div>
            </div>
        </a><a href='https://progorod33.ru/news/71095'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин высказался о второй волне мобилизации в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSSbxjlvEivrhcMSiOILItYqJy82Ik3ZdGGl8Qv26At6Ij2xb2SIKhdiSkor8rDE2dYk6d_rhXi" alt="Владимир Путин высказался о второй волне мобилизации в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент России Владимир Путин исключил необходимость новой волны мобилизации в настоящее время. Об этом он сообщил 7 декабря на встрече с членами Совета&nbsp;...</p></div>
            </div>
        </a><a href='https://www.souzveche.ru/news/68743/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин: РФ наносит удары по энергетической ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcToCpXS_ZB9t8_HATjJZeD9AhGWOkPb9mG2bl30EqisTUeTL05bfrwCegwEPz-bifWuTSanXbsi" alt="Владимир Путин: РФ наносит удары по энергетической ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>- Сейчас много шума по поводу наших ударов по энергетической инфраструктуре соседней страны, - сообщил он. - Да, мы делаем это. Но кто начал? Кто ударил по&nbsp;...</p></div>
            </div>
        </a><a href='https://versia.ru/vladimir-putin-nazval-prichinu-raketnyx-udarov-po-infrastrukture-ukrainy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин назвал причину ракетных ударов по ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQaLTbUxezIfnxz8W5ImJZxsrBvN3YqrmVe_CgahhgHzhRdXu_Ig_eDz2gDncyABxboQoeAh6yJ" alt="Владимир Путин назвал причину ракетных ударов по ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Путин заявил, что российские военные наносят ракетные удары по украинской инфраструктуре в ответ на атаки, которые ранее были предприняты со стороны Киева.</p></div>
            </div>
        </a>
        </Template></>;
}