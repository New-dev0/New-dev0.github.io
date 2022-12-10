import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Skynex</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Skynex"/>
        <meta name="description" content="Trending News about Skynex" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Skynex</h1>
            <Image width={800} height={500} src="http://ipress.ua/media/gallery/full/s/k/skynex.jpg" alt="Skynex"/>
            <h3>Recent News</h3>
            <a href='https://ipress.ua/news/ukraina_otrymaie_dvi_novitni_ppo_skynex__zmi_336955.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Україна отримає дві новітні ППО SKYNEX — ЗМІ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRChYZr4N5U4oVQmUUvBUF60Bj24KJq0EZv3R0fiKDbCsaozpAW9JzwhX_d4RxntlxcN7nOEgOb" alt="Україна отримає дві новітні ППО SKYNEX — ЗМІ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Німецький оборонний концерн Rheinmetall виготує для України нові зенітно-ракетні комплекси Skynex, які здатні збивати безпілотники та крилаті ракети.</p></div>
            </div>
        </a><a href='https://defence-ua.com/weapon_and_tech/skilki_potribno_na_vigotovlennja_shahidobojki_skynex_vid_rheinmetall_i_scho_tse_koshtuvatime-9922.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rheinmetall виготовить для України &quot;шахідобойки&quot; Skynex: чим ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNjN4Oc1g6TLX_gcyF-EQh7GRt7u1p7u6YfAKEOSFJYQoPVWUpxfLWgHuFMVmnWW4i15YhP6GM" alt="Rheinmetall виготовить для України &quot;шахідобойки&quot; Skynex: чим ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>І що при цьому буде із снарядами, по яким залежність від Швейцарії з її &quot;нейтральною&quot; позицією.</p></div>
            </div>
        </a><a href='https://mil.in.ua/uk/news/ukrayina-mozhe-otrymaty-systemy-ppo-skynex/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Україна може отримати системи ППО Skynex</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ_rr_nGmcyfeYCZ1tNA4cLPosI_SqzNYH8MknmSHBldYMGf91Lfiz_XfipY3BYusB_VYuCnm7o" alt="Україна може отримати системи ППО Skynex" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Систему протиповітряної оборони Skynex була представлена Rheinmetall у листопаді 2021 року. Основним її озброєнням є 35-мм автоматична гармата Oerlikon Mk3.</p></div>
            </div>
        </a><a href='https://www.unian.ua/weapons/skynex-dlya-ukrajini-shcho-vidomo-pro-novi-sistemi-ppo-nimeckoji-kompaniji-rheinmetall-12073248.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Німецька компанія Rheinmetall виготовить для України дві ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTX-iW7QxqwF8X62MTSbr3j5PA7VsBbuZkUUfz8_kQhmZPyYwB-nKNkheyggUJZwem9Tn1BsbaQ" alt="Німецька компанія Rheinmetall виготовить для України дві ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Німецька компанія Rheinmetall виготовить для України дві системи ППО Skynex. Система може збивати безпілотники і крилаті ракети з близької відстані.</p></div>
            </div>
        </a><a href='https://www.unian.net/weapons/skynex-dlya-ukrainy-chto-izvestno-o-novyh-sistemah-pvo-nemeckoy-kompanii-rheinmetall-12073251.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Немецкая компания Rheinmetall построит для Украины две ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTX-iW7QxqwF8X62MTSbr3j5PA7VsBbuZkUUfz8_kQhmZPyYwB-nKNkheyggUJZwem9Tn1BsbaQ" alt="Немецкая компания Rheinmetall построит для Украины две ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Немецкая компания Rheinmetall изготовит для Украины две системы ПВО Skynex. Система может сбивать беспилотники и крылатые ракеты с близкого расстояния.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/noviy-standart-ppo-ukrayina-mozhe-otrimati-1670608086.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новый стандарт ПВО. Украина может получить системы Skynex ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSIAuM6ySoXrwMcke-qpnSf0pSMPL43jGtx01dKgKer2qM2zzVV5jE15HO0F7Kc1ZbKavwx6D1I" alt="Новый стандарт ПВО. Украина может получить системы Skynex ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Технология включает систему управления и контроля Oerlikon Skymaster. К данному комплексу можно подключить другое оборудование и системы вооружения, например,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.5.ua/svit/nimechchyna-vyhotovyt-dlia-ukrainy-dva-zrk-skynex-ppo-blyzhnoi-dii-294455.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Німеччина виготовить для України два ЗРК Skynex – ППО ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcShXYy51ICFQfeNXYS8eMMQbqaSvafP_oajxGJDDgL74VNcwSIXGejKHGTVb6_bB1AM9_DmTv0x" alt="Німеччина виготовить для України два ЗРК Skynex – ППО ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За даними Handelsblatt, постачання систем має початися 2024 року. Система Skynex збиває ударні дрони або крилаті ракети 35-мм боєприпасами. Вона є новою&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/uk/voennye-novosti/540360-germaniya-zakupit-dlya-ukrainy-novye-sistemy-pvo-skynex-chto-o-nih-izvestno-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Німеччина закупить для України нові системи ППО Skynex: що ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSiFEt7JoqXHZa4OvKmBAKF1YmsZNfsnEffd6_wCpaSYF_mJZjprjlbuW1FQ71aLtKuhfKd5UDJ" alt="Німеччина закупить для України нові системи ППО Skynex: що ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ЗРК ближнього радіусу дії є новітньою розробкою німецької компанії Rheinmetall. Система зарекомендувала себе як фінансово вигідна – збити літак за допомогою&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/voennye-novosti/540360-germaniya-zakupit-dlya-ukrainy-novye-sistemy-pvo-skynex-chto-o-nih-izvestno-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Германия закупит для Украины новые системы ПВО Skynex: что ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSiFEt7JoqXHZa4OvKmBAKF1YmsZNfsnEffd6_wCpaSYF_mJZjprjlbuW1FQ71aLtKuhfKd5UDJ" alt="Германия закупит для Украины новые системы ПВО Skynex: что ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ЗРК ближнего радиуса действия является новейшей разработкой немецкой компании Rheinmetall. Система зарекомендовала себя как финансово выгодная — сбить&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ru/ukraine/20221209-zdatni-zbyvaty-rakety-i-bpla-nimeczka-kompaniya-vygotovyt-dlya-ukrayiny-ppo-skynex/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Способны сбивать ракеты и БПЛА: немецкая компания изготовит ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQbrRVXvi8uQsiYXRT5bq6Jp0Uhzqfr64lkN0MDsMyo15KMxQPjOqmbbG1LNefnedUwk_IwOiHl" alt="Способны сбивать ракеты и БПЛА: немецкая компания изготовит ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Компания Rheinmetall подтвердила начало производства этих ЗРК в пятницу, 9 декабря, однако не назвала страну-получателя. Согласно данным правительственных&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}