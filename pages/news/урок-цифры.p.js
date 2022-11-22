import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Урок цифры</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Урок цифры"/>
        <meta name="description" content="Trending News about Урок цифры" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Урок цифры</h1>
            <Image width={800} height={500} src="" alt="Урок цифры"/>
            <h3>Recent News</h3>
            <a href='https://mo.mosreg.ru/sobytiya/novosti-ministerstva/21-11-2022-12-41-17-v-shkolakh-moskovskoy-oblasti-proydet-urok-tsifry'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В школах Московской области пройдет «Урок цифры» о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRd3C5JmiwmuLOI95Tgha6zUexjmokgMYcH80aU6EhMPP0uCaezficU6ikMZjj1C91V2utFrqE8" alt="В школах Московской области пройдет «Урок цифры» о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Второй «Урок цифры» сезона 2022-2023 пройдет в Подмосковье с 21 ноября по 11 декабря. Занятие будет посвящено современным видеотехнологиям.</p></div>
            </div>
        </a><a href='https://riamobalashiha.ru/article/urok-tsifry-o-videotehnologiyah-provedut-v-podmoskovnyh-shkolah-601886'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Урок цифры» о видеотехнологиях проведут в подмосковных ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQwp4yt1ZfxlJBcOnbnlTpO23pYhSR2dJzLn_lPY6CaW7QRbGw6SYI5Q5DZDVmaKL8B_xs6PbUi" alt="«Урок цифры» о видеотехнологиях проведут в подмосковных ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>РИАМО - 21 ноя. С 21 ноября по 11 декабря в школах Московской области проведут второй «Урок цифры» сезона 2022-2023, он будет посвящен современным&nbsp;...</p></div>
            </div>
        </a><a href='https://mosregtoday.ru/soc/v-shkolah-podmoskovya-projdet-urok-cifry-o-videotehnologiyah/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В школах Подмосковья пройдет «Урок цифры» о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQX8cDnjuS6vdDTLfyCE4mmUn40ZIWwURDUUgX4iTwwrki-BYlnXQYICyQa2xNkzSMWBngx5cYE" alt="В школах Подмосковья пройдет «Урок цифры» о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Второй «Урок цифры» о видеотехнологиях сезона 2022-2023 стартует в Подмосковье, передает пресс-служба Министерства государственного управления,&nbsp;...</p></div>
            </div>
        </a><a href='https://mirmol.ru/novosti/na-uroke-cifry-shkolnikam-rasskazhut-o-videotehnologijah/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На «Уроке цифры» школьникам расскажут о видеотехнологиях ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="На «Уроке цифры» школьникам расскажут о видеотехнологиях ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>С 21 ноября по 18 декабря Минцифры РФ проводит мероприятия по теме «Видеотехнологии» в рамках всероссийского образовательного проекта «Урок цифры».</p></div>
            </div>
        </a><a href='https://kam24.ru/news/main/20221122/93346.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Камчатским школьникам расскажут о видеотехнологиях на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Камчатским школьникам расскажут о видеотехнологиях на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Уроки цифры» по теме «Видеотехнологии» пройдут по всей России для всех классов, передает Кам24 со ссылкой на краевое министерство образования.</p></div>
            </div>
        </a><a href='https://dagpravda.ru/specrubriki/rossijskie-shkolniki-poznakomya-tsya-s-osnovnymi-e-tapami-sozdaniya-tehnologicheskogo-startapa-na-uroke-cifry-po-videotehnologiya-m/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Российские школьники познакомятся с основными этапами ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTg2OeKg9hDLr-rk7lWiN1gNT4DQi3ST4OWaHr01F60kZOO2_MLEbcuJdPif_xDOQ2kukH0b4r4" alt="Российские школьники познакомятся с основными этапами ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>С 21 ноября по 18 декабря в школах по всей стране будет проходить «Урок цифры» по видеотехнологиям. Стратегический партнёр и разработчик его содержания —</p></div>
            </div>
        </a><a href='https://colomna.ru/news/obrazovanie/v_shkolakh_regiona_provedut_urok_tsifry_posvyashch/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В школах региона проведут &quot;Урок цифры&quot;, посвящённый ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRAI9sgjxc6XrMBM_3GZNE3vMjKVgQxZxeqF3XLHlbNp24NZsFTejOkE54PpgTj5OFm0jEqMiHK" alt="В школах региона проведут &quot;Урок цифры&quot;, посвящённый ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Второй &quot;Урок цифры&quot; сезона 2022-2023 пройдет в Подмосковье с 21 ноября по 11 декабря. Занятие будет посвящено современным видеотехнологиям.</p></div>
            </div>
        </a>
        </Template></>;
}