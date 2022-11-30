import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Тимати</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Тимати"/>
        <meta name="description" content="Trending News about Тимати" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Тимати</h1>
            <Image width={800} height={500} src="https://cdn.abnews.ru/storage/wp-content/uploads/2022/11/timati-1.jpg__0_0x0.jpg" alt="Тимати"/>
            <h3>Recent News</h3>
            <a href='https://abnews.ru/2022/11/29/timur-yunusov-hochet-zaregistrirovat-brend-timati'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тимур Юнусов хочет зарегистрировать бренд «Тимати»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_SM1Jv4fzDNjGYZ7dJOHMCVZxHX46hm1fmUeBZMd40PtcTXewlBlJdjELQwrS1_mKrMPM1hSG" alt="Тимур Юнусов хочет зарегистрировать бренд «Тимати»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Заявка на регистрацию бренда «Тимати» была подана в Роспатент, под этим брендом, среди прочего, можно будет изготавливать парфюм, одежду, а также чистить&nbsp;...</p></div>
            </div>
        </a><a href='https://dni.ru/showbiz/2022/11/28/513750.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Обиделась на мужа»: почему Алекса запретила свекрови ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvkFXXSettm2RwcqtLHKI1Kcv8F1MciR2ULKc4IxDcXk0qBPd0y6oPYHDIoFTHeuH2lnqpEmln" alt="«Обиделась на мужа»: почему Алекса запретила свекрови ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Женщина не смогла справиться с эмоциями в конфликте с любимым и отыгралась на ребенке.</p></div>
            </div>
        </a><a href='https://vm.ru/news/1014683-timati-podal-zayavku-na-registraciyu-odnoimennogo-brenda-v-rospatent'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тимати подал заявку на регистрацию одноименного бренда в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTuP2a14ih4U-nz-VpkqlBHlvDmIxEZv7Aqwn18G6BptCTcrmOuUfIdL6vG5eB5UrnQ8CaAcbJ-" alt="Тимати подал заявку на регистрацию одноименного бренда в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рэпер Тимур Юнусов, также известный как Тимати, подал в Роспатент заявку на регистрацию бренда «Тимати».</p></div>
            </div>
        </a><a href='https://mockva.ru/2022/11/29/378936.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тимати оформил заявку на регистрацию одноименного бренда ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqonRVqB5GacCitlnrH8nACElgn8B7l4S1mDe8qqEkJpa0b6vF7cprGK3iILSMM6VPbbWINhcn" alt="Тимати оформил заявку на регистрацию одноименного бренда ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Телефон: +7 499 350 59 63 Почта: news@mockva.ru Адрес: 121596, Москва г, ул Горбунова, д. 2, стр. 3, этаж 8, помещ. II, комната 35, офис В823, кабинет №10&nbsp;...</p></div>
            </div>
        </a><a href='https://mukola.net/timati-registriryet-brend-dlia-chistki-dymohodov-i-stirki-belia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тимати регистрирует бренд для чистки дымоходов и стирки белья</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSbxN_woOX_NDKeOah5cjlgXQSkG08C4Xnh3ayqDQ-xfJJsa8lsP1SB_SQFBU8o6m_R23wtzcZ5" alt="Тимати регистрирует бренд для чистки дымоходов и стирки белья" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Заявка на регистрацию бренда «Тимати» поступила в Роспатент, под данным брендом, в частности, можно будет изготавливать парфюм, одежду, а также оказывать.</p></div>
            </div>
        </a>
        </Template></>;
}