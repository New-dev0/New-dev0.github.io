import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Владимир Минеев</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Владимир Минеев"/>
        <meta name="description" content="Trending News about Владимир Минеев" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Владимир Минеев</h1>
            <Image width={800} height={500} src="https://img.championat.com/news/social/9/86/4895493.jpg" alt="Владимир Минеев"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/boxing/article-4895493-vladimir-mineev-fernando-rodriges-pryamaya-onlajn-translyaciya-boya-gde-smotret-kto-favorit-bojcovskij-klub-ren-tv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ответил борзому бразильцу. Минеев вбил в Родригеса ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS8NNGsTId0E2jrnUGzW1-A3EJdoepYtnsk_ZAr2ZQ45zJQnO3SD1idNGMb33ci-NzYO4ZPHdjX" alt="Ответил борзому бразильцу. Минеев вбил в Родригеса ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября в Москве на «ЦСКА Арене» состоялся очередной турнир «Бойцовского клуба РЕН ТВ». Главным событием вечера стал поединок по правилам кикбоксинга между&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/martial/mma/online/vladimir-mineev-fernando-rodriges-pryamaya-translyaciya-boya-gde-smotret-efir-ren-tv-yutub-onlayn-poedinka-1999664/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Минеев победил Фернандо Родригеса: онлайн ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQrSTheEo4EfrXFmuhqJtTZCoaJf9R0SaDGtdz67uTOeIZeeD2zYJ1MAGh-RsN5XkPBxBgK2_ZR" alt="Владимир Минеев победил Фернандо Родригеса: онлайн ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Заврешился турнир «Бойцовский клуб РЕН ТВ» главным событием которого стал бой Владимира Минеева и Фернандо Родригеса: Владимир Минеев (Россия) — Фернандо&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/boxing/1113375504-vladimir-mineev-nokautiroval-fernando-rodrigesa-v-tretem-raunde.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Минеев нокаутировал Фернандо Родригеса в третьем ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR7ZORtjTaVCu4PTptl--YvjrsWuE_aQoqlSGTuVWk-Izr1c853T9_MTx3Ua5E-9izGf8Zor4DG" alt="Владимир Минеев нокаутировал Фернандо Родригеса в третьем ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Москве завершился турнир Бойцовского клуба Рен-ТВ, в главном событии которого прошел поединок по правилам кикбоксинга между Владимиром Минеевым и Фернандо&nbsp;...</p></div>
            </div>
        </a><a href='https://mma.metaratings.ru/news/kogda-boj-vladimir-mineev-fernando-rodriges-data-i-vremya-nachala-boya-54209/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Когда бой Владимир Минеев – Фернандо Родригес: дата и время ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_0DrpR33eH5J6JvQxViOWmSo5G2pIzcsXCs2_ObcLc6J91urrOWKrYWkwhLVpZX7CYFkMY7IK" alt="Когда бой Владимир Минеев – Фернандо Родригес: дата и время ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября в Москве в рамках турнира «Бойцовского клуба РЕН ТВ» состоится поединок по правилам кикбоксинга между российским бойцом Владимиром Минеевым и&nbsp;...</p></div>
            </div>
        </a><a href='https://fighttime.ru/news/item/30044-vladimir-mineev-nokautiroval-fernando-rodrigesa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Минеев нокаутировал Фернандо Родригеса</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6VfatMlkzraV6cPQUJahQzQW5Tn5vd14bp5EHPpWj33l3ITCXLQ02phBPEU_erh3hpRMGhjbK" alt="Владимир Минеев нокаутировал Фернандо Родригеса" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Действующий чемпион AMC Fight Nights в среднем весе, Владимир Минеев, стал обладателем титула «Бойцовского клуба РЕН ТВ» в супертяжелой весовой категории,&nbsp;...</p></div>
            </div>
        </a><a href='https://life.ru/p/1539979'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Боец ММА Минеев победил бразильца Родригеса нокаутом в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROiNztg4MOaC5m1mZdn8lykJVfw4j9_z4QLRiZOn5OsLtUtzVD-Gvk2nckg6XED1i-DQmOuFjE" alt="Боец ММА Минеев победил бразильца Родригеса нокаутом в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российский боец смешанных единоборств Владимир Минеев уверенно победил бразильца Фернандо Родригеса. Уже в третьем раунде противостояния он отправил&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}