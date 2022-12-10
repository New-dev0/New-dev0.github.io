import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Володимир Зеленський</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Володимир Зеленський"/>
        <meta name="description" content="Trending News about Володимир Зеленський" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Володимир Зеленський</h1>
            <Image width={800} height={500} src="" alt="Володимир Зеленський"/>
            <h3>Recent News</h3>
            <a href='https://suspilne.media/335494-u-deakih-rajonah-ne-lisilosa-zivogo-misca-zelenskij-pro-situaciu-na-fronti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;У деяких районах не лишилося живого місця&quot; — Зеленський про ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRaqcC8b0ekwKELZkCq0415JrJqW01cHG4sRuNzp96_H9qEqz4CoTlg0A5R-Q75XyzphusD4H9c" alt="&quot;У деяких районах не лишилося живого місця&quot; — Зеленський про ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Ситуація на Донбасі дуже важка, особливо у напрямках Бахмута, Соледара, Мар&#39;їнки та Кремінної, повідомив Зеленський 9 грудня — Суспільне.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-polytics/3630823-zelenskij-zaproponuvav-krainampartneram-obrati-dla-vikonanna-punkti-z-formuli-miru.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленський запропонував країнам-партнерам обрати для ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTnPbkSdxJ0ddVFEwvvlhpunM4fn2cIRrnYujmjmFHarDn8PhbxPF1TqhMj8rlJgwrm44TWzExg" alt="Зеленський запропонував країнам-партнерам обрати для ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це він сказав у виступі на міжнародному форумі TRT World Forum у Стамбулі , повідомляє кореспондент Укрінформу. Зеленський нагадав, що в Індонезії на саміті&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/12/9/7380111/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Окупанти фактично зруйнували Бахмут – Зеленський</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSuizrc0_EVv-JEACKtga6k_wnOq1YJ_F-95Pw8Nd2N4M0Gy329PCQRqgsoQ8dF3n7o_wOQ9gID" alt="Окупанти фактично зруйнували Бахмут – Зеленський" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Володимир Зеленський заявив про важку ситуацію на ключових напрямках фронту на Донбасі, за його словами, Бахмут росіяни фактично зруйнували.</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-zelensky-bakhmut-viyska-rf/32169895.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленський: війська Росії «фактично зруйнували» Бахмут</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSY51QTixHZkewVdQegrZfdwup89XVZQ9WW1RPyERtn38Jl-zuHl_weEnTQJU6atsA2rAB4IujK" alt="Зеленський: війська Росії «фактично зруйнували» Бахмут" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ще одне місто Донбасу, яке російська армія перетворила на випалені руїни»</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-polytics/3631020-zelenskij-obgovoriv-iz-sunakom-oboronu-energetiku-i-formulu-miru.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленський обговорив із Сунаком оборону, енергетику і формулу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQox3dm2rvngyuj75FVPjdz42jwCUTJjB948UfH0FJ701R7d8PF4ENuWOTKUTWNlFy7wK7pCaA" alt="Зеленський обговорив із Сунаком оборону, енергетику і формулу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Володимир Зеленський обговорив із Прем&#39;єр-міністром Великої Британії реалізацію формули миру, взаємодію в оборонній та енергетичній сферах.</p></div>
            </div>
        </a><a href='https://armyinform.com.ua/2022/12/09/zaluchyty-svit-do-realizacziyi-formuly-myru-zaraz-odne-z-klyuchovyh-zavdan-dlya-ukrayiny-volodymyr-zelenskyj/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Залучити світ до реалізації формули миру — зараз одне з ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSX7DdwjeQzWe_nzH4NSeP_HWLsNsjtqqsl_bHYaNi3xcvH_XUOLSyMbD5VWysAOYcqSgBEs_Je" alt="Залучити світ до реалізації формули миру — зараз одне з ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бажаю здоров&#39;я, шановні українці! Провів сьогодні важливу розмову з Прем&#39;єр-міністром... Война с Украиной 2022, Война с Украиной последние новости сегодня,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/politics/zelenskiy-nagadav-shcho-peredbachaye-ukrajinska-formula-miru-12073275.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленський нагадав, що передбачає українська формула миру</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGKPhAVNh6U2UniPr9l-yvI_j7_Vl7p8BFiHUv3fTG4Jlxf6qCg7JiOgIYXjMahGHbgOCBiqos" alt="Зеленський нагадав, що передбачає українська формула миру" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Зеленський нагадав, що передбачає українська формула миру, котра містить десять пунктів: від ядерної безпеки до відновлення територіальної&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-elections/3631209-rosijska-armia-peretvorila-bahmut-na-vipaleni-ruini-zelenskij.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>російська армія перетворила Бахмут на випалені руїни ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTZ1lwQE9_FoxWUkH0-rqwLPl5wxz2UmJTPmT-FLaOUeoN91a6IS9KPfk12YD5b7pRTxdn5ZZtR" alt="російська армія перетворила Бахмут на випалені руїни ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ukrinform is funded in whole or in part by the Ukrainian government.</p></div>
            </div>
        </a><a href='https://www.slovoidilo.ua/2022/12/09/novyna/polityka/zelenskyj-proviv-rozmovu-premyerom-brytaniyi-obhovoryly'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленський провів розмову з прем&#39;єром Британії: що обговорили</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmzGxk3ewW3RS3YVAmFjSUO7cV-VM6kgEB617BQcOB4d3E1RjMXr8q9uE9UHhFkqhC42acorAW" alt="Зеленський провів розмову з прем&#39;єром Британії: що обговорили" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Володимир Зеленський у п&#39;ятницю, 9 грудня, провів розмову із прем&#39;єр-міністром Великої Британії Ріші Сунаком.</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ua/ukraine/20221209-sunak-u-rozmovi-iz-zelenskym-poobiczyav-novi-zasoby-ppo-najblyzhchymy-tyzhnyamy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сунак у розмові із Зеленським пообіцяв нові засоби ППО ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQXazAS8cgRM6GoYkwdNYZH2LFVBOpOL3eSD1kvyj7OVKyhKVFovf0oKg3RGIYvdxDsStHcijbG" alt="Сунак у розмові із Зеленським пообіцяв нові засоби ППО ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прем&#39;єр Британії Ріші Сунак у розмові з президентом Володимиром Зеленським пообіцяв, що Лондон передасть Україні нові системи ППО - деталі на Фактах ICTV.</p></div>
            </div>
        </a>
        </Template></>;
}