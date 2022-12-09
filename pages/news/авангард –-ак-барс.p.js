import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Авангард – Ак Барс</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Авангард – Ак Барс"/>
        <meta name="description" content="Trending News about Авангард – Ак Барс" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Авангард – Ак Барс</h1>
            <Image width={800} height={500} src="" alt="Авангард – Ак Барс"/>
            <h3>Recent News</h3>
            <a href='https://www.ak-bars.ru/news/22906'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Авангард» – «Ак Барс» – 2:3 ОТ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSvNOyoqMu0ZGWWJlDzXhtnwvN7h0YOR8i0yxJoR2t-QF84f3pqaee-oj_BpGmqAUCPLHPBedRC" alt="«Авангард» – «Ак Барс» – 2:3 ОТ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>8 декабря «Ак Барс» одержал победу над «Авангардом» в очередном матче Фонбет чемпионата КХЛ. Игра в Омске завершилась в овертайме со счётом 3:2.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/hockey/khl/news/avangard-ak-bars-2-3-ot-rezultat-matcha-regulyarnogo-chempionata-khl-8-dekabrya-2022-2009338/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Ак Барс» в овертайме обыграл «Авангард»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRft1HDlHGgH09nJihCtsPnBOfemGQGHHWdIrR-6nclHRgbCrBuFqqs0Glk1gRnnkSNw2ETPc1S" alt="«Ак Барс» в овертайме обыграл «Авангард»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Ак Барс» в овертайме обыграл «Авангард» в матче регулярного чемпионата КХЛ. Встреча завершилась со счетом 3:2.</p></div>
            </div>
        </a><a href='https://sport24.ru/news/hockey/2022-12-08-avangard-ak-bars-smotret-onlayn-avangard-ak-bars-pryamaya-translyatsiya-match-avangard-ak-bars-pryamoy-efir-avangard-ak-bars-gde-smotret'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>КХЛ. «Авангард» — «Ак Барс». Прямая трансляция</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpWeenbQjQpAL1DSd-YlGfts6GfuxzK8_6QfIg5qYj_59aUmwqND4IEwMt_JRtsiGSw4t6FT07" alt="КХЛ. «Авангард» — «Ак Барс». Прямая трансляция" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самые свежие новости российского и мирового спорта только на сайте Sport24.ru! Интервью со спортсменами, онлайн трансляции, аналитика и прогнозы,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/hockey/news-4921171-ak-bars-otygralsya-s-0-2-i-oderzhal-pobedu-nad-avangardom-v-overtajme.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Ак Барс» отыгрался с 0:2 и одержал победу над «Авангардом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCxbAevuq1JKR0gHv9WyXit9LVl_gmHUVXbvN6qrJzHe0UmD0B19njBS8sJ_A_Xp87ampQzzNp" alt="«Ак Барс» отыгрался с 0:2 и одержал победу над «Авангардом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Омске завершился матч в рамках регулярного сезона Фонбет Чемпионата Континентальной хоккейной лиги. «Авангард» играл на своём льду с «Ак Барсом».</p></div>
            </div>
        </a><a href='https://www.sport.ru/hockey/hokkey-khl-regulyarnyy-chempionat-avangard-ak-bars-pryamaya-tekstovaya-onlayn-/article537108/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Хоккей, КХЛ, Регулярный чемпионат, Авангард - Ак Барс, Прямая ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRyhVfmBl-yJEv5rxjeN1UGUwZ4YIrN8qI1aVljIS9wcdONONGEreMmWa5WTyVdNRF-a8z96Rp-" alt="Хоккей, КХЛ, Регулярный чемпионат, Авангард - Ак Барс, Прямая ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Источник: SPORT.RU. Sport.ru / Хоккей. В матче регулярного чемпионата КХЛ омский &quot;Авангард&quot; будет принимать казанский &quot;Ак Барс&quot;. SPORT.RU приглашает вас на&nbsp;...</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/63920b429a7947bc0db4d411'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Ак Барс» отыгрался с 0:2 и впервые в сезоне победил «Авангард»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRPSG4O-VaEKKbV5rzjoLArsP_LplHdln0SuukoqIgBmAIfkJDoem0ILZjN7T8Lh2CqZmNJ2ZCX" alt="«Ак Барс» отыгрался с 0:2 и впервые в сезоне победил «Авангард»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Встреча в Омске завершилась в овертайме со счетом 2:3, у «Авангарда» после первого периода было преимущество в две шайбы.</p></div>
            </div>
        </a><a href='https://allhockey.ru/news/show/462886-Avangard_ustupil_Ak_Barsu_i_vpervye_proigral_kazancam_v_3_h_matchah_sezona'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Авангард&quot; уступил &quot;Ак Барсу&quot; и впервые проиграл казанцам в 3-х ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;Авангард&quot; уступил &quot;Ак Барсу&quot; и впервые проиграл казанцам в 3-х ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Авангард&quot; уступил &quot;Ак Барсу&quot; и впервые проиграл казанцам в 3-х матчах сезона | Allhockey.ru - главный хоккейный информационный сайт России, где собраны все&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}