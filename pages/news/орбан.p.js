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
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/7/3/7378155_fb_image_ukr_2022_11_27_08_45_03.png" alt="Орбан"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/news/2022/11/27/7378155/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Орбан: &quot;Нам потрібна суверенна Україна, щоб Росія не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNjjwLxyuP7MPFUCGeFCkQlvpiciyuuhgH4ojRgzFodrbHmRHxpNJ2g_3b7SLz4_U6mm-lkid0" alt="Орбан: &quot;Нам потрібна суверенна Україна, щоб Росія не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прем&#39;єр-міністр Угорщини Віктор Орбан, відомий прихильністю до Кремля й тим, що перекладав провину за війну на Захід, заявив, що потрібно подбати про те,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/27/7378155/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Орбан: &quot;Нам нужна суверенная Украина, чтобы Россия не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcStQOCXETQ2jbBjzZRRFbYSAmx-giz1PohN3mTxe4_HxbesTBfKS43Hqri-hh_2XT4typXiHZuA" alt="Орбан: &quot;Нам нужна суверенная Украина, чтобы Россия не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премьер-министр Венгрии Виктор Орбан, известный приверженностью к Кремлю и тем, что перекладывал вину за войну на Запад, заявил, что нужно позаботиться о&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-world/3622909-orban-nam-potribna-suverenna-ukraina-sob-rosia-nikoli-ne-zagrozuvala-evropi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Орбан: Нам потрібна суверенна Україна, щоб росія ніколи не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvvuFz0KmIaK-CcrTmjGTPFai9CY565OKjDscT52Yfp8h1lzFU_AJflRhjMGgY0s9T3mZAhkY0" alt="Орбан: Нам потрібна суверенна Україна, щоб росія ніколи не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прем&#39;єр-міністр Угорщини Віктор Орбан заявив, що Європі потрібно зробити все, аби Україна залишалась суверенною державою, щоб росія не могла загрожувати&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/POLITICS/nam-potribna-suverenna-ukrajina-orban.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Нам потрібна суверенна Україна — Орбан</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTAgqGXXHvsn1M_-Vm9KpB9JZWVcBJs6UbFJKbNl-WsAqrMqF7ks2PQhZvRZzlcYFYnAveQa2FM" alt="Нам потрібна суверенна Україна — Орбан" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Нагадаємо, наприкінці вересня прем&#39;єр-міністр Угорщини Віктор Орбан заявив своїм законодавцям, що потрібно зробити все можливе, аби до кінця 2022 року з Росії&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ua/svit/svitovi-novyny/20221127-orban-nespodivano-nazvav-rf-zagrozoyu-dlya-vsiyeyi-yevropy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Орбан несподівано назвав РФ загрозою для всієї Європи</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTS0sPSbaSwAwQfjltrJPqvl-y_hh291gmpD5WXc1XWg15YbsTsRuUfani9T1pozsOQsr-y2mAC" alt="Орбан несподівано назвав РФ загрозою для всієї Європи" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прем&#39;єр Угорщини Віктор Орбан заявив про необхідність збереження суверенітету України, щоб Росія не могла становити загрози для Європи.</p></div>
            </div>
        </a><a href='https://delo.ua/ru/politics/orban-zayavil-cto-evrope-nuzna-suverennaya-ukraina-ctoby-ei-ne-ugrozala-rf-407387/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Орбан заявил, что Европе нужна суверенная Украина, чтобы ей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRp_kPShJt58Y-QFuYNJVFpbfi6DId82rP7Z4ex3hz90O3QaQWnsgU6xsEiP4PBbBl7-IJfRuco" alt="Орбан заявил, что Европе нужна суверенная Украина, чтобы ей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Одиозный венгерский премьер Виктор Орбан, до этого времени остававшийся лояльным к террористическому российскому режиму, внезапно заявил, что главным&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/zminiv-dumku-orban-zayaviv-zagrozu-boku-rf-1669539907.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Изменил мнение? Орбан заявил об угрозе со стороны РФ и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRLa1klgh01HCG-ZZ5Cpn519NUC3XG2kAIz6T_2yzIde-DcrLgzOn_yrT-SZYar7z07s32wL8BU" alt="Изменил мнение? Орбан заявил об угрозе со стороны РФ и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премьер Венгрии Виктор Орбан сделал не типичное для него заявление. Он заявил об угрозе со стороны РФ и суверенной Украине.</p></div>
            </div>
        </a><a href='https://delo.ua/politics/orban-zayaviv-shho-jevropi-potribna-suverenna-ukrayina-shhob-ii-ne-zagrozuvala-rf-407387/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Орбан заявив, що Європі потрібна суверенна Україна, щоб ій не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRp_kPShJt58Y-QFuYNJVFpbfi6DId82rP7Z4ex3hz90O3QaQWnsgU6xsEiP4PBbBl7-IJfRuco" alt="Орбан заявив, що Європі потрібна суверенна Україна, щоб ій не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Одіозний угорський прем&#39;єр Віктор Орбан, який до цього часу залишався лояльним до терористичного російського режиму, раптово заявив, що головним чинником&nbsp;...</p></div>
            </div>
        </a><a href='https://news.liga.net/politics/news/orban-zayavil-chto-iz-za-ugrozy-rossii-nujna-suverennaya-ukraina-no-sanktsii-kritikuet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Орбан заявил, что из-за угрозы России нужна суверенная ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJcVVvCf-yv_fp-ki7yDJKTjeK7AEitTzEV82E2if8yYPkj29BKIQr_AjFeSgVxDMdCcGVzTFB" alt="Орбан заявил, что из-за угрозы России нужна суверенная ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Орбан считает, что Европе нужна суверенная Украина из-за угрозы России. Но он считает, что санкции ведут к росту цен на энергоносители. санкции, война,&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/POLITICS/nam-nuzhna-suverennaja-ukraina-orban.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Нам нужна суверенная Украина — Орбан</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTAgqGXXHvsn1M_-Vm9KpB9JZWVcBJs6UbFJKbNl-WsAqrMqF7ks2PQhZvRZzlcYFYnAveQa2FM" alt="Нам нужна суверенная Украина — Орбан" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Орбан заявил, что Украина должна остаться единой для безопасности в Европе.</p></div>
            </div>
        </a>
        </Template></>;
}