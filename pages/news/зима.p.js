import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Зима</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Зима"/>
        <meta name="description" content="Trending News about Зима" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Зима</h1>
            <Image width={800} height={500} src="https://glavcom.ua/img/article/8926/79_main-v1669902206.jpg" alt="Зима"/>
            <h3>Recent News</h3>
            <a href='https://glavcom.ua/columns/yiriigydumenko/nasha-zima-trivaje-vzhe-desjatij-misjats-892679.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Наша зима триває вже десятий місяць</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTweercM7XTnHDyE2zgUxwUaF93LDsRdjsrrisFTnP1PizQJbA0wJNP-w8vtQvHP5qMBq9mhMdL" alt="Наша зима триває вже десятий місяць" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Українці мають бути готовими до будь-яких сценаріїв війни. 281 день великої війни. 281 день великої зими. Триста дев&#39;яте лютого.</p></div>
            </div>
        </a><a href='https://glavcom.ua/country/society/zima-bez-svitla-tse-ne-strashno-istorija-studentki-jaka-rozchulila-vsju-ukrajinu--892421.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Зима без світла». Історія студентки, чий вірш розчулив всю ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQd1bVvtvmb9rxKdYtax1eUwN3le03nKjCl32tDB2xD60g2XivOMfY86tT7hOCnURbjPRpU9ZK" alt="«Зима без світла». Історія студентки, чий вірш розчулив всю ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Дівчина запевняє, що зиму без світла можна пережити, а от зиму без рідних людей, життя яких забрала війна, навряд чи.</p></div>
            </div>
        </a><a href='https://prmira.ru/news/zima-holoda-odinokie-doma-stoit-li-pokupat-doma-i-dachi-zimoj/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зима, холода, одинокие дома: стоит ли покупать дома и дачи ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSNKUkPYw0ZZApU6YHvmxvDM5QvZxPC9RVOOXtifKQB0xvCxRj26PrZgqlEaN4ZwzO2DzV8RDfV" alt="Зима, холода, одинокие дома: стоит ли покупать дома и дачи ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По словам риэлторов, загородный рынок утратил сезонность спроса и перешел на круглогодичную работу. Именно в этом году увеличилась интенсивность реализации&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/UKRAINE/atlantic-council-smozhet-li-ukraina-prodolzhit-nastuplenie-zimoj.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atlantic Council: Сможет ли Украина продолжить наступление ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJqrPzvFdoVEINksDBmOP0vmvoq93_WMueTZnKGKz4YjHHD6WOsIPjJqdWTNhPTaiA_Hhs0oVb" alt="Atlantic Council: Сможет ли Украина продолжить наступление ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сможет ли армия Украины продолжить наступление зимой? И как мороз повлияет на бои? Эксперты Atlantic Council объяснили, с какой ситуацией в последующие&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}