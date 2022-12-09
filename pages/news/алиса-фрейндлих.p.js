import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Алиса Фрейндлих</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Алиса Фрейндлих"/>
        <meta name="description" content="Trending News about Алиса Фрейндлих" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Алиса Фрейндлих</h1>
            <Image width={800} height={500} src="http://saint-petersburg.ru/i/msg/0395/0904/ph32.jpg" alt="Алиса Фрейндлих"/>
            <h3>Recent News</h3>
            <a href='https://saint-petersburg.ru/m/culture/redaktor15/395904/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актер Антон Табаков раскрыл секрет долголетия Алисы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT-Tzm30Egf30uTGNIDkLofndlj59gThgtjk762QCMyZ6ci47W_93wlMRT9-TCMKlZ2ftWGqlL4" alt="Актер Антон Табаков раскрыл секрет долголетия Алисы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Одна из самых известных жительниц Петербурга празднует свой день рождение. В четверг, 8 декабря, 88 лет исполнилось народной актрисе СССР,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tatar-inform.ru/news/putin-pozdravil-aktrisu-alisu-freindlix-s-dnem-rozdeniya-5889327'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Путин поздравил актрису Алису Фрейндлих с днем рождения</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyWjShbDOv6ZLixXc1SL1n4eK5uKvg4mWXpinJDvMzG8JjqZdYkSNi-h0JwFQfUZNxUI86GsQz" alt="Путин поздравил актрису Алису Фрейндлих с днем рождения" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Алиса Фрейндлих принадлежит к плеяде прославленных мастеров отечественного искусства. Яркий талант и обаяние позволили ей добиться любви миллионов зрителей.</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-12-08/kollegi-alisa-freyndlih-rasskazali-kakaya-aktrisa-v-obychnoy-zhizni'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Коллеги Алисы Фрейндлих рассказали, какая актриса в обычной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSFvdMINPyanZ5a86lnkZ-06M69cC84GXzY8-kBAJaYSSU9Wb6lpmOw0lA3tr1XPryx0oRxVxqP" alt="Коллеги Алисы Фрейндлих рассказали, какая актриса в обычной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>И зачем она влепила Ларисе Гузеевой пощечину на съемках фильма «Жестокий романс»</p></div>
            </div>
        </a><a href='https://pobedarf.ru/2022/12/08/alisa-frejndlih-prinimaet-pozdravleniya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Алиса Фрейндлих принимает поздравления | Победа РФ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQXBnvSADTn2oUIaR89bpkoi-VMVENFQ2Rt2PPgFb4NpDutu3rrcly2FMLO5PWj9KlZpncH4Xl" alt="Алиса Фрейндлих принимает поздравления | Победа РФ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня свой день рождения отмечает народная артистка СССР Алиса Фрейндлих. Поздравление актрисе направил Президент России Владимир Путин. «Вы по праву&nbsp;...</p></div>
            </div>
        </a><a href='https://tsargrad.tv/news/jubilej-alisy-frejndlih-sekret-dolgoletija-aktrisy-raskryl-anton-tabakov_681365'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День рождения Алисы Фрейндлих: Секрет долголетия актрисы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="День рождения Алисы Фрейндлих: Секрет долголетия актрисы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Один из живых символов Петербурга - актриса Алиса Фрейндлих отмечает 8 декабря день рождения. О секрете долголетия 88-летней артистки рассказал Антон&nbsp;...</p></div>
            </div>
        </a><a href='https://readovka.news/news/124132'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин поздравил актрису Алису Фрейндлих с 88-м ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZPaTDaa4o80tKskYEAt3Dmi_taHxhFxiXIzDiidg1aIYE8AjPpkDqoRVD_b6r6RCkw9e4CVk9" alt="Владимир Путин поздравил актрису Алису Фрейндлих с 88-м ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Уважаемая Алиса Бруновна! От души поздравляю Вас с Днем рождения. Вы по праву принадлежите к плеяде прославленных мастеров отечественного искусства, настоящих&nbsp;...</p></div>
            </div>
        </a><a href='https://news.ru/society/anton-tabakov-raskryl-sekret-tvorcheskogo-dolgoletiya-alisy-frejndlih/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Антон Табаков раскрыл секрет творческого долголетия Алисы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcROztX5PzpVyYdZsE9WJl7iVZGUnmYpCfTtMKwIBfJs8yOjHeXvFQgoY0zqhmfWCg1nLmv4hIJQ" alt="Антон Табаков раскрыл секрет творческого долголетия Алисы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Актер Антон Табаков поздравил народную артистку СССР Алису Фрейндлих с днем рождения и рассказал, что секрет ее долголетия заключается в таланте и любви к&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}