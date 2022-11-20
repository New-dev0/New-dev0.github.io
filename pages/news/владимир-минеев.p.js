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
        </a><a href='https://www.sport-express.ru/martial/mma/reviews/mma-vladimir-mineev-pobedil-brazilca-fernando-rodrigesa-podrobnosti-boya-18-noyabrya-2022-goda-1999952/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минеев заставил понервничать, но все же избил огромного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzhz5SDk6sXmXVBCR7rUXFlXNC02o9VyA9fusNZdtyWISqdsz2mTDubkBWFxGCg7_E6sGIBnzt" alt="Минеев заставил понервничать, но все же избил огромного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Родригес свой предыдущий бой проиграл экс-бойцу UFC Карлосу Фелипе — соотечественники встретились в августе по правилам кулачки, и Фелипе забрал победу решением&nbsp;...</p></div>
            </div>
        </a><a href='https://ulpressa.ru/2022/11/19/%D0%B1%D0%BE%D0%B5%D1%86-%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%BC%D0%B8%D0%BD%D0%B5%D0%B5%D0%B2-%D0%BD%D0%BE%D0%BA%D0%B0%D1%83%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BB-%D0%B1%D1%80/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Боец Владимир Минеев нокаутировал бразильца Родригеса ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTdSAV4dKbBTSjl6st4uqD4_Agzc0NIx9bihdG65F-vEfDdhMtSxwDgUlrkHGCxXGPBuJ_fMPqf" alt="Боец Владимир Минеев нокаутировал бразильца Родригеса ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ульяновский боец смешанного стиля (ММА), чемпион AMC Fight Nights в среднем весе Владимир Минеев одержал победу над бразильцем Фернандо Родригесом в&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/edinoborstva/spbnews_NI1726027_Minejev_izbil_ogromnogo_brazilca_pered_uhodom_na_front_No_vso_ravno_ostalsa_nedovolen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минеев избил огромного бразильца перед уходом на фронт. Но ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTBvKOcUimyk9mVP24u0QHd8Hbv0DD4zfs_PScQ00wLU1grcS9SvPo8eFY8uXD6FHi2KHHkO1iy" alt="Минеев избил огромного бразильца перед уходом на фронт. Но ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Волжанин оказался недоволен досрочной остановкой поединка в бою с бразильским здоровяком.</p></div>
            </div>
        </a><a href='https://mma.metaratings.ru/news/kogda-boj-vladimir-mineev-fernando-rodriges-data-i-vremya-nachala-boya-54209/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Когда бой Владимир Минеев – Фернандо Родригес: дата и время ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_0DrpR33eH5J6JvQxViOWmSo5G2pIzcsXCs2_ObcLc6J91urrOWKrYWkwhLVpZX7CYFkMY7IK" alt="Когда бой Владимир Минеев – Фернандо Родригес: дата и время ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября в Москве в рамках турнира «Бойцовского клуба РЕН ТВ» состоится поединок по правилам кикбоксинга между российским бойцом Владимиром Минеевым и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/boxing/1113375504-vladimir-mineev-nokautiroval-fernando-rodrigesa-v-tretem-raunde.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Минеев нокаутировал Фернандо Родригеса в третьем ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTUt4-L40gkQGrMdQ0MX98IfD_gl6XMFx781XH65RhVcZDu8NGuDQB8rIEFYRtT-qAM0V0UmVbP" alt="Владимир Минеев нокаутировал Фернандо Родригеса в третьем ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Здесь пока ничего нет. Главные новости. 18:15 UFC Fight Night 215: Спивак против Льюиса, Куцелаба – Нзечакву и другие бои&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}