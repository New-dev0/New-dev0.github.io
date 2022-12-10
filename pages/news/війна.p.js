import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Війна</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Війна"/>
        <meta name="description" content="Trending News about Війна" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Війна</h1>
            <Image width={800} height={500} src="https://gdb.rferl.org/058a0000-0aff-0242-3af3-08dacec96600_cx0_cy4_cw0_w1200_r1.jpg" alt="Війна"/>
            <h3>Recent News</h3>
            <a href='https://www.radiosvoboda.org/a/news-nato-viyna-rosiya-yevropa/32169941.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Генсек НАТО: «жахлива війна в Україні» може перерости у ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjsKdUinsqO4o7GoxJ0PLPffLOoCMrhLKpX2admBLco5kCyimyDp-TqMDkIQJMfpCMN-CnYk8z" alt="Генсек НАТО: «жахлива війна в Україні» може перерости у ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ми працюємо над цим щодня, щоб уникнути цього», – сказав він у коментарі норвезькій телекомпанії NRK. Столтенберг каже, що «немає сумніву, що повноцінна війна&nbsp;...</p></div>
            </div>
        </a><a href='https://texty.org.ua/fragments/108445/vijna-rosiyi-v-ukrayini-vyyavyla-paradoks-yakyj-zahid-maye-rozvyazaty-the-economist/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Війна Росії в Україні виявила парадокс, який Захід має розв&#39;язати ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT5b3kf6Dk5FG2YH636x8EskJnuS2NAZYC7zsSgzGUoHBphQ6Q23G-EWo4YlaBcpGILVNZZBRSfQQ" alt="Війна Росії в Україні виявила парадокс, який Захід має розв&#39;язати ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>З іншого – Захід виявився більш згуртованим і стійким у своїй реакції, ніж можна було очікувати. Про це в статті для The Economist пише спеціальний радник&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/oliharkhy-ukrayina-viyna-vtrata-kapitaliv/32169744.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Війна й олігархи: що відбувається з ними та їхніми капіталами?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR_xgutGqwMXDrixWTcBCn1p3gaZx1fp6WjDS6yWC42p-Gxgvmre7FV8G-4Bepzyv_udyzMjPVbMA" alt="Війна й олігархи: що відбувається з ними та їхніми капіталами?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ISW: Кремль не відмовляється від максимальних цілей у війні проти України. Голова Луганської ОВА Сергій Гайдай впевнений: уже наприкінці зими ЗСУ можуть вийти&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/12/9/7380136/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Столтенберг боїться, що війна в Україні може перерости у війну ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQquOvFm6m9v_Fyq_2siq5cEj-ZLQ5mfjJG5Wx5Ytk25N83NR_DZ6CMhJVdJKjlsITCpJNGUFq2" alt="Столтенберг боїться, що війна в Україні може перерости у війну ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Генеральний секретар Північноатлантичного Альянсу Єнс Столтенберг заявив, що побоюється можливості розширення війни в Україні до великої війни між НАТО й&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/war/gensek-nato-poperediv-shcho-viyna-v-ukrajini-mozhe-viyti-z-pid-kontrolyu-12073212.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Генсек НАТО попередив, що війна в Україні може вийти з-під ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8v-JgE_hoER2bgQRTQk6k_3Hxq5fY8gOZyR1TSw1mak_fUbKIXuPJX79MktJyhfDhrvlAj_Kq" alt="Генсек НАТО попередив, що війна в Україні може вийти з-під ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Генеральний секретар НАТО Єнс Столтенберг боїться, що бойові дії в Україні можуть вийти з-під контролю. Заява представника Альянсу про війну в Європі.</p></div>
            </div>
        </a><a href='https://www.slovoidilo.ua/2022/12/10/novyna/polityka/vijna-ukrayini-mozhe-vyjty-z-pid-kontrolyu-hensek-nato'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Війна в Україні може вийти з-під контролю – генсек НАТО</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRCp8iu5LLf3qKSKiiaLYVopTdOOTp4NCnFToQGpvzoP0pVQerxJGVb1gJbE1spT-M0tldma02g" alt="Війна в Україні може вийти з-під контролю – генсек НАТО" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Генсек НАТО заявив, що бойові дії в Україні можуть перерости у війну між альянсом та росією. Втім, він вважає, що цього можна уникнути.</p></div>
            </div>
        </a><a href='https://www.slovoidilo.ua/2022/12/09/infografika/polityka/vijna-ukrayini-yak-oficzijnyj-budapesht-dystancziyuyetsya-pidtrymky-kyyeva'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Війна в Україні: як офіційний Будапешт дистанціюється від ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRsrKRnUw9vS9EQQrdV7qhNFVCQRgWmEEj0_CYFVWkyDj0RuUaex4sXfRoglUz6Xkp_vyo8h4hL" alt="Війна в Україні: як офіційний Будапешт дистанціюється від ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пік протиріч між країнами припав на 2017 рік після ухвалення Верховною радою освітнього закону: у Будапешті вважали, що він обмежує права угорської нацменшини&nbsp;...</p></div>
            </div>
        </a><a href='https://ua.korrespondent.net/world/4543011-viina-mozhe-vyity-z-pid-kontrolui-stoltenberh'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Війна може вийти з-під контролю - Столтенберг</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTKoT9DtcKFehhGH2RwLyG4TtMt7GeeyDhnx54BT4_CXTvgcGLyFOVt67NAA65_l8oEczBiJKP1" alt="Війна може вийти з-під контролю - Столтенберг" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кремль неодноразово звинувачував союзників НАТО в тому, що вони фактично стали стороною конфлікту, надаючи Україні зброю, навчаючи її війська та&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ato/povnomasshtabna-viyna-mozhliva-gensek-nato-2219782.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Повномасштабна війна можлива&quot; - генсек НАТО</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSN36ZRIhYTA9koC70AmFk35CXTfmrxNuRYxlZOhCWhEIoBb23gjARumRazUMFOc0HJ8dx6tmm0" alt="&quot;Повномасштабна війна можлива&quot; - генсек НАТО" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Єнс Столтенберг припустив, що бойові дії в Україні можуть вийти з-під контролю.</p></div>
            </div>
        </a><a href='https://glavcom.ua/country/incidents/vijna-v-ukrajini-mozhe-vijti-z-pid-kontrolju-stoltenberh--894429.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Війна в Україні може вийти з-під контролю – Столтенберг</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQCiwJn-Zf9DI2HIvYISncP4nNLpeT3ufIiHR4fbv53PgPokJd7RfiHtNNrvryKZDNVVmv9KEe" alt="Війна в Україні може вийти з-під контролю – Столтенберг" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Генеральний секретар НАТО Єнс Столтенберг попередив, що бойові дії в Україні можуть вийти з-під контролю. Таку заяву він зробив в інтерв&#39;ю виданню NRK. Будь&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}