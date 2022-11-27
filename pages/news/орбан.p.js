import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Орбан</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Орбан"/>
        <meta name="description" content="Trending News about Орбан" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Орбан</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/4/9/496c34c-gergely-karacsony--getty--690.jpg" alt="Орбан"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/news/2022/11/26/7378092/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мер Будапешта: Орбан хотів зробити з України ворога, але ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSH2O_ZpcfS2Zt43Y5yGaHnSkTmM04z-rrJrnQAdNcAYVibqYjZWPrFXjeCj-XtRFkSpfAUTS9xlA" alt="Мер Будапешта: Орбан хотів зробити з України ворога, але ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прем&#39;єр Угорщини Віктор Орбан намагався зробити з України та з президента Володимира Зеленського ворога, однак це не спрацювало.</p></div>
            </div>
        </a><a href='https://www.eurointegration.com.ua/news/2022/11/26/7151360/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мер Будапешта пояснив, як Орбан став залежним від Росії</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSq3nTkYVTKAHHtfU3z4xZusavhWnUkn9u7Be1FMNvFPh3m_21hGrntE2WiYcVhWtl9eVlkistA" alt="Мер Будапешта пояснив, як Орбан став залежним від Росії" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава угорського уряду Віктор Орбан хотів заручитися підтримкою Росії для посилення своєї ваги у суперечках з ЄС, та у результаті став тим,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurointegration.com.ua/rus/news/2022/11/26/7151360/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мэр Будапешта объяснил, как Орбан стал зависим от России</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSq3nTkYVTKAHHtfU3z4xZusavhWnUkn9u7Be1FMNvFPh3m_21hGrntE2WiYcVhWtl9eVlkistA" alt="Мэр Будапешта объяснил, как Орбан стал зависим от России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава венгерского правительства Виктор Орбан хотел привлечь поддержку России для усиления своего веса в спорах с ЕС, но в результате стал тем,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/26/7378092/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мэр Будапешта: Орбан хотел сделать из Украины врага, но ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSH2O_ZpcfS2Zt43Y5yGaHnSkTmM04z-rrJrnQAdNcAYVibqYjZWPrFXjeCj-XtRFkSpfAUTS9xlA" alt="Мэр Будапешта: Орбан хотел сделать из Украины врага, но ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премьер Венгрии Виктор Орбан пытался сделать из Украины и президента Владимира Зеленского врага, однако это не сработало.</p></div>
            </div>
        </a><a href='https://zakarpattya.net.ua/News/224450-Anty-Orban-Uhorshchyny'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Анти-Орбан Угорщини @ Закарпаття онлайн</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR5JpirHrBmWcgwxDF8EhDAvaGP8tfFMXGN4ahoNYY0JXiAqa3vOdbtw-d0JFNQNQdomJm2UhLH" alt="Анти-Орбан Угорщини @ Закарпаття онлайн" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мер Будапешта Гергей Корачонь (Gergely Karácsony, прізвище часом пишуть як Карачонь) - це відкритий та непримиренний опонент угорського уряду та особисто&nbsp;...</p></div>
            </div>
        </a><a href='https://patrioty.org.ua/politic/orban-mav-plan-shchodo-zelenskoho-ale-vin-ne-spratsiuvav-mer-budapeshta-445049.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Орбан мав план щодо Зеленського, але він не спрацював – мер ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTAblBt35xnGizbDlqFwKH0hx7KPX_BGXGiRGDP7riRKBxGwQmcuXmSZA73kXI-1jQ60mKDeMmu" alt="Орбан мав план щодо Зеленського, але він не спрацював – мер ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прем&#39;єр-міністр Угорщини Віктор Орбан безрезультатно намагався зробити президента Володимира Зеленського тим, кого можна буде звинуватити у всіх негараздах&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/politics/mer-budapeshta-poyasniv-chomu-orbanu-ne-vdalosya-zrobiti-z-ukrajini-voroga-12057825.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мер Будапешта пояснив, чому Орбану не вдалося &quot;зробити з ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQd9_G3h0J1xWSiDRz2eF02L3DiDg9i6wXjYZ90GQTIVXRQZzVy8SaQjbI7WxDkC6u9tpJFx6qQ" alt="Мер Будапешта пояснив, чому Орбану не вдалося &quot;зробити з ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Орбан намагався зробити з України &quot;зовнішнього ворога&quot;, але передумав та змінив стратегію. Таку думку озвучив угорський політик, мер Будапешта Корачонь.</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ua/svit/svitovi-novyny/20221126-orban-hotiv-zrobyty-z-ukrayiny-voroga-ale-cze-ne-spraczyuvalo-mer-budapeshta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Орбан хотів зробити з України ворога, але це не спрацювало ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSA-LWvaQ5mNBAdDPZ4v84w2vWKxSnV_qhzx4EIXuSSnKFWM3cfeT-Ie040hIvZRnhRTwhpyEhA" alt="Орбан хотів зробити з України ворога, але це не спрацювало ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Орбан хотів зробити з України ворога, але це не спрацювало. Чому Віктор Орбан хотів зробити з України ворога - читайте на Фактах ICTV.</p></div>
            </div>
        </a><a href='https://gazeta.ua/ru/articles/world-life/_u-orbana-byl-plan-po-zelenskomu-no-on-ne-srabotal-mer-budapeshta/1122494'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Орбана был план по Зеленскому, но он не сработал – мэр ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0_H46gHmtPjG9T46fyOCcsNS0lJJnqk8Z9ubry5LFFLpYjU7wnJn46tFsnhsIr6WTRqoYXi0e" alt="У Орбана был план по Зеленскому, но он не сработал – мэр ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премьер-министр Венгрии Виктор Орбан безрезультатно пытался сделать президента Владимира Зеленского тем, кого можно будет обвинить во всех бедах страны.</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ru/svit/svitovi-novyny/20221126-orban-hotiv-zrobyty-z-ukrayiny-voroga-ale-cze-ne-spraczyuvalo-mer-budapeshta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Орбан хотел сделать из Украины врага, но это не сработало ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSA-LWvaQ5mNBAdDPZ4v84w2vWKxSnV_qhzx4EIXuSSnKFWM3cfeT-Ie040hIvZRnhRTwhpyEhA" alt="Орбан хотел сделать из Украины врага, но это не сработало ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Орбан хотел сделать из Украины врага, но это не сработало. Почему Виктор Орбан хотел сделать из Украины врага – читайте на Фактах ICTV.</p></div>
            </div>
        </a>
        </Template></>;
}