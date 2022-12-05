import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День юриста</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День юриста"/>
        <meta name="description" content="Trending News about День юриста" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День юриста</h1>
            <Image width={800} height={500} src="https://static.mk.ru/upload/entities/2022/12/03/09/articles/facebookPicture/93/83/90/0e/f8b67b75630cd526ee05be67e0224a4f.jpg" alt="День юриста"/>
            <h3>Recent News</h3>
            <a href='https://www.gov.spb.ru/press/telegrams/250883/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3 декабря – День юриста - Официальный сайт Администрации ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="3 декабря – День юриста - Официальный сайт Администрации ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Уважаемые петербуржцы! Сегодня в нашей стране отмечается День юриста. Поздравляю с праздником всех, кто посвятил себя этой ответственной и уважаемой&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mkkaluga.ru/social/2022/12/03/den-yurista-ya-kalendar-perevernu-i-russkim-lyudyam-udivlyus.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День юриста: &quot;Я календарь переверну, и русским людям удивлюсь&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRyN5G9ue5-eqFOtmORe9B3QQWyYIOXNtsgnmGh7zG3LU9rYUhdG0NNp6xoHiGGMZO-g1daxhta" alt="День юриста: &quot;Я календарь переверну, и русским людям удивлюсь&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Песня Михаила Шуфутинского про календарь, перелистываемый 3 сентября, стала интернет-мемом. Теперь дата 3 декабря обещает стать новым профессиональным мемом&nbsp;...</p></div>
            </div>
        </a><a href='https://spb.tsargrad.tv/news/den-jurista-2022-pozdravlenija-v-stihah-i-proze_677354'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День юриста 2022: поздравления в стихах и прозе</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQimowYWRTPE5App0RaccgHA7w2tlYq08ejtXdJGY9HiwmkM7j95lq-eAtmDry_IZUn0yZzhrOS" alt="День юриста 2022: поздравления в стихах и прозе" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>3 декабря свой профессиональный праздник отмечают нотариусы, прокуроры, судебные приставы, судьи, адвокаты, сотрудники МВД – День юриста. Предлагаем готовые&nbsp;...</p></div>
            </div>
        </a><a href='https://altapress.ru/zhizn/story/den-yurista-dekabrya-iskrennie-pozdravleniya-v-proze-stihah-i-sms-316032'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День юриста - 3 декабря. Искренние поздравления в прозе ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTUg_Ob3nuiuvnreQHrYGdDQyP7ZlL9RySZGtl6SOj8L_pIrBf-7fJ4WYXdB93nw6ItKkXg0QCX" alt="День юриста - 3 декабря. Искренние поздравления в прозе ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>День юриста отмечают в России 3 декабря. Его утвердили в 2008 году по инициативе Ассоциации юристов России. По данным пресс-службы ЦИК России,&nbsp;...</p></div>
            </div>
        </a><a href='https://legal.report/den-yurista/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День юриста отмечается с улыбкой!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTzIpeITpZvfQaend75UrAQELFyLr8S0kPW-4whuh_4_X7O-zhC5R3cmmvoQGR2SXu4JqtHRZ46" alt="День юриста отмечается с улыбкой!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>3 декабря российские юристы отмечают профессиональный праздник. В области права работают самые разные специалисты — судьи, адвокаты, прокуроры, следователи,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}