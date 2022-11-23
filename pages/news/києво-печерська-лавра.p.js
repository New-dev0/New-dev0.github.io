import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Києво-Печерська лавра</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Києво-Печерська лавра"/>
        <meta name="description" content="Trending News about Києво-Печерська лавра" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Києво-Печерська лавра</h1>
            <Image width={800} height={500} src="" alt="Києво-Печерська лавра"/>
            <h3>Recent News</h3>
            <a href='https://suspilne.media/322062-sbu-povidomila-pro-kontrrozviduvalni-zahodi-u-kievo-pecerskij-lavri/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СБУ повідомила про &quot;контррозвідувальні заходи&quot; у Києво ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTHrBCNokCO6r9kxtlRARw895LiyviIYUobm91LuOApI4sWRDR-81MzjcNf-F-kafxXHGmaS21K" alt="СБУ повідомила про &quot;контррозвідувальні заходи&quot; у Києво ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Служба безпеки України заявила, що проводить контррозвідувальні безпекові заходи на території Свято-Успенської Києво-Печерської Лаври у Києві&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/exclusive/v-kiyevo-pecherskiy-lavri-shukayut-drg-styagnuti-sili-policiyi-nacgvardiyi-ta-sbu-2206990.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стало відомо, кого шукають: до Києво-Печерської Лаври стягнуті ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxJ3qBzyzmA32PRpDUca8ckvKkH2zPDFwDQnF64H8fWHqxuWq4PDDk194YS85WXqEgjv2-Z_kE" alt="Стало відомо, кого шукають: до Києво-Печерської Лаври стягнуті ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Нагадаємо, зранку у вівторок правоохоронці заявили, що почали проводити в Лаврі контррозвідувальні заходи, керуючись п&#39;ятьма критеріями: недопущення&nbsp;...</p></div>
            </div>
        </a><a href='https://nv.ua/ukr/ukraine/events/sbu-u-kiyevo-pecherskiy-lavri-shcho-vidomo-pro-obshuki-nad-yakimi-zhartuye-merezha-novini-ukrajini-50285885.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Сходження благодатної підозри». Що відомо про обшуки СБУ в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTfj_RHUB5lDr2uyLeC9OkaL653w3tGY3XJsJoQ6-8yIt8JOCqUQ9u-Mm0Ys0tlbn32-LGuyIW-" alt="«Сходження благодатної підозри». Що відомо про обшуки СБУ в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Сходження благодатної підозри» — розповідаємо про ранкові обшуки в лаврі у Києві, на тлі яких Мережа вибухнула жартами.</p></div>
            </div>
        </a><a href='https://denzadnem.com.ua/nadzvychajno/129590'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Що відбувається у Києво-Печерській Лаврі | День за днем</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0RuX6agz5nnVzRnKrnO6Gt7L9jF5eXEFQQaYqiGH5e-ghO1-AjUypA2QTdWWZ1cCiFoSuc2dZ" alt="Що відбувається у Києво-Печерській Лаврі | День за днем" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>22.11.2022 День за днем Надзвичайно 0 коментарів. Що відбувається у Києво-Печерській Лаврі. Як повідомили у Службі безпеки України 22 листопада,&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ua/ukraine/suspilstvo/20221122-boga-ne-vyyavleno-shho-vidomo-pro-obshuky-u-kyyevo-pecherskij-lavri-yakyj-bekgraund-ta-reakcziya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бога не виявлено: що відомо про обшуки у Києво-Печерській ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5mmboNWOxAc-mguuJao5urX56G14oiVoaOd7xaF6XQjz9W8ihMyta_QvP4mJ_JPAHBfOok6n5" alt="Бога не виявлено: що відомо про обшуки у Києво-Печерській ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Служба безпеки України у вівторок, 22 листопада, провела контррозвідувальні заходи на території Свято-Успенської Києво-Печерської лаври у Києві.</p></div>
            </div>
        </a><a href='https://espreso.tv/derzhava-povinna-rozirvati-dogovori-na-perebuvannya-moskovskogo-patriarkhatu-u-kievo-pecherskiy-svyatogirskiy-ta-pochaivskiy-lavrakh-religieznavets-kovalov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Держава повинна розірвати договори на перебування ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRwbHGLrSdrQK7t8rg1QVIiQVyTeWXNORzVnb1pmQhop3E_SRZLPtedhhx0saGWWzyBagtVnkgN" alt="Держава повинна розірвати договори на перебування ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Андрій Ковальов історик та релігієзнавець, зазначив, що приміщення монастирів є державною власністю, а московський патріархат є лише користувачем.</p></div>
            </div>
        </a><a href='https://www.liga.net/ua/politics/articles/izbavitsya-ot-gundyaeva-zachem-sbu-prishla-v-kievo-pecherskuyu-lavru-i-chto-jdet-upts'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Здихатись Гундяєва&quot;. СБУ прийшла до Києво-Печерської Лаври ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTH5kp_OclHZBHVO555Mnmm6c4_7NFpxjmC4l1yZQWma7cI-LTsXcK7RospQ7oJ7XEkR42Vl2lR" alt="&quot;Здихатись Гундяєва&quot;. СБУ прийшла до Києво-Печерської Лаври ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>СБУ прийшла до Києво-Печерської Лаври, яку очолює митрополит Павло (Лебідь). Що очікує на церкву Онуфрія та якою може бути відповідь патріарха Кирила. упц&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/lavra-sbu-povernennya-yermak-vlada-trybunal-putin/32143835.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кого і що знайшла СБУ у Лаврі? Коли буде створено трибунал ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVMoO1nSoOyJuOIqnp9GjxG0RhefqMnxduVwb2kCtkUFl6QLE4PwG0EtjpqXYlGnNOH4sR9Ei0" alt="Кого і що знайшла СБУ у Лаврі? Коли буде створено трибунал ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>СБУ разом із поліцією та Нацгвардією провели обшуки у Києво-Печерській лаврі. Мета – «недопущення використання Лаври як осередку «русского мира».</p></div>
            </div>
        </a>
        </Template></>;
}