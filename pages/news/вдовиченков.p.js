import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Вдовиченков</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Вдовиченков"/>
        <meta name="description" content="Trending News about Вдовиченков" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Вдовиченков</h1>
            <Image width={800} height={500} src="https://img.dni.ru/binaries/social/513180.jpg" alt="Вдовиченков"/>
            <h3>Recent News</h3>
            <a href='https://dni.ru/showbiz/2022/11/15/513180.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Худшие варианты»: чем грозит актеру Вдовиченкову его диагноз</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_LF5O9_s_sy1VPD59JyZYt2iuW-ltJWrrsuZ45WdYqzGlbrt_pSjjGlySwsl6leLm7PjeKiG4" alt="«Худшие варианты»: чем грозит актеру Вдовиченкову его диагноз" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Владимир Вдовиченков работал на износ и не берег себя. В итоге это привело к тяжелой болезни.</p></div>
            </div>
        </a><a href='https://www.starhit.ru/novosti/lyadova-vyzvala-skoruyu-dlya-vdovichenkova-u-zvezdy-bumera-narushena-funkcionalnost-mozga-848519/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лядова вызвала скорую для Вдовиченкова: у звезды «Бумера ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR7w5CHvYlqAc_4TtQnz9aENGNSKxX-3yM5lg9tngc0M0hbfD0cJKxQgBa8d0D7FByNTKUvFUI1" alt="Лядова вызвала скорую для Вдовиченкова: у звезды «Бумера ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>СМИ сообщают о том, что Владимиру Вдовиченкову стало плохо — рядом была супруга Елена Лядова, которая тут же вызвала медиков. | STARHIT.</p></div>
            </div>
        </a><a href='https://53news.ru/mir/akter-vladimir-vdovichenkov-vpervye-rasskazal-o-svoem-zdorove.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актер Владимир Вдовиченков Впервые Рассказал О Своем ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNswgC0ptXyCB8tHQyBXUjcuam3MoMy5E6a5G6TutuXlDjeoyU1JcAVfI_w4ekKNxLZ_mZk7Lt" alt="Актер Владимир Вдовиченков Впервые Рассказал О Своем ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Несколько дней назад в интернете появилась информация о том, что у звезды «Бригады» и «Бумера» Владимира Вдовиченкова диагностирована вертебро-базилярная.</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/kultura/14112022/521352'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актер Вдовиченков опроверг информацию о своем диагнозе</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_H7k6UjZTSjUFqwH-90y6681nGmx0rksrF3QbBAplSnvKR5ixYhlk7Try3dt9qi5fNjnMXFTo" alt="Актер Вдовиченков опроверг информацию о своем диагнозе" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее в Сети появилась информация о том, что у актера диагностировали вертебробазилярную недостаточность.</p></div>
            </div>
        </a><a href='https://www.eg.ru/showbusiness/2744292-u-vladimira-vdovichenkova-obnarujeny-problemy-s-mozgom/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Врачи заговорили о страшном: у Вдовиченкова обнаружены ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQyaSug8ZcxSyypmsnM3mvnPAFvW4kypAsd8AZrafPcwC8blb2DXPpWdDZBOpyAd5FVtUoo7b6n" alt="Врачи заговорили о страшном: у Вдовиченкова обнаружены ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Владимир Вдовиченков всегда работал на износ и смело заверял журналистов, что готов трудиться хоть 22 часа в сутки без перерыва. Похоже, такое рвение теперь&nbsp;...</p></div>
            </div>
        </a><a href='https://news.ru/show-business/akter-iz-bumera-otreagiroval-na-soobshenie-o-narushenii-funkcij-ego-mozga/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актер из «Бумера» отреагировал на сообщения о нарушении ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQVbOmitL-dN2Ct7dQrTgI1HiZGjzsTs5el0jBVa_FtpdZM0eouYfXlMpw5tJjyxMIYmRo-bXbD" alt="Актер из «Бумера» отреагировал на сообщения о нарушении ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Владимир Вдовиченков опроверг сообщения о том, что у него выявили вертебро-базилярную недостаточность.</p></div>
            </div>
        </a><a href='https://by.tsargrad.tv/news/zvezda-seriala-brigada-vladimir-vdovichenkov-otricaet-nalichie-problem-s-golovoj_664813'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Звезда сериала &quot;Бригада&quot; Владимир Вдовиченков отрицает ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2geWHcolTA2kOGecqDwfJn_fuVkn3lbOVWmh9xZEeEqjdDPiEvYFK80h1_P13BGiDi11XhkIM" alt="Звезда сериала &quot;Бригада&quot; Владимир Вдовиченков отрицает ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Супруга актёра 51-летнего актёра вызывала ему скорую помощь из-за головокружений и тошноты.</p></div>
            </div>
        </a>
        </Template></>;
}