import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Кривой Рог</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Кривой Рог"/>
        <meta name="description" content="Trending News about Кривой Рог" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Кривой Рог</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/d/4/d47056e-9b0e69c-kryvyj-rig-vulyci.jpg.690.jpg" alt="Кривой Рог"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/rus/news/2022/11/27/7378154/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россияне утром атаковали двумя ракетами Кривой Рог ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSRZN3g6i166cD8dxblVif8E0LzwvXJac_sSpsvqoL_SplSWtuFTg1bw6tF2h5zS4vdbEH2l2lp" alt="Россияне утром атаковали двумя ракетами Кривой Рог ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Кривом Роге утром 27 ноября россияне ударили ракетами по железной дороге Кривого Рога.</p></div>
            </div>
        </a><a href='https://www.vesty.co.il/main/article/wd8s6lo4h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кривой Рог подвергся ракетному обстрелу</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Кривой Рог подвергся ракетному обстрелу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Российские войска нанесли ракетный удар по Кривому Рогу - родному городу президента Владимира Зеленского. Две российские ракеты ударили по объекту&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/UKRAINE/raketnyj-udar-po-krivomu-rohu-okkupanty-popali-v-zheleznodorozhnuju-infrastrukturu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракетный удар по Кривому Рогу: оккупанты попали в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSLNjpSDKGjC3Te9e5cXGd2NZeBwpFQqbbVY8bTEuBOgDxtdzuDYioVKexPwQgNoKHsWBsuV1rw" alt="Ракетный удар по Кривому Рогу: оккупанты попали в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В результате ракетного удара по Кривому Рогу повреждена железнодорожная инфраструктура.</p></div>
            </div>
        </a><a href='https://fakty.ua/ru/411355-vrag-atakoval-krivoj-rog-raketami-dve-iz-nih-popali-v-obekt-transportnoj-infrastruktury'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Враг атаковал Кривой Рог ракетами, две из них попали в объект ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQWd3qzuFmF8IRAdwW-3dsJ445M6p2JrlW_HbboF6L9qhdpipRJrQYVzKRsfWIumK3C4Ixd6Q6V" alt="Враг атаковал Кривой Рог ракетами, две из них попали в объект ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Кривом Роге оценивают масштабы разрушений после нескольких вражеских прилетов утром 27 ноября, а в Днепре - продолжают тушить пожары.</p></div>
            </div>
        </a><a href='https://argumenti.ru/world/2022/11/801058'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Начальник военной администрации Ситниченко: железная ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWKND-kDPqw6ULNP_fqeEDBzGHHbkDaBy33W1nHemGcwueFsWnH64nXK_bG8sjgGyP-2KOCF5N" alt="Начальник военной администрации Ситниченко: железная ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В украинском городе Кривой Рог долгое время не будет работать железная дорога. Об этом 27 ноября заявил начальник Криворожской военной администрации Евгений&nbsp;...</p></div>
            </div>
        </a><a href='https://apostrophe.ua/news/society/accidents/2022-11-27/okkupantyi-udarili-po-krivomu-rogu---est-sereznyie-razrusheniya-vse-podrobnosti/284789'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупанты ударили по Кривому Рогу - есть серьезные ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQW8azAL1WTMxpRk0aA2xtlDvQGWbegYt-2VKJDW_NwF8EXxyn-3iRp0b9WhipiPCqtS4dIefBU" alt="Оккупанты ударили по Кривому Рогу - есть серьезные ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава военной администрации Кривого Рога Александр Вилкул сообщил о российской ракетной атаке на транспортную инфраструктуру, а начальник Криворожского РВА&nbsp;...</p></div>
            </div>
        </a><a href='https://gazeta.ua/ru/articles/np/_raketnyj-udar-po-krivomu-rogu-kuda-popali-rossijskie-terroristy/1122543'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракетный удар по Кривому Рогу – куда попали российские ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSShhyjyaXH-2wGEO3JuRUElMxeZndW3Gm3U2Zz2Fpe1N-2AlJGyR0cRfbMQLcEJUpmAxm2xaha" alt="Ракетный удар по Кривому Рогу – куда попали российские ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В воскресенье, 27 ноября, Россия ударила ракетами по транспортной инфраструктуре в Криворожском районе Днепропетровской области.</p></div>
            </div>
        </a>
        </Template></>;
}