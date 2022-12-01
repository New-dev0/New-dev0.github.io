import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Мураєв</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Мураєв"/>
        <meta name="description" content="Trending News about Мураєв" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Мураєв</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/4/0/403fc8f-617129d25ee95-1-700x350.jpg" alt="Мураєв"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/news/2022/11/30/7378657/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СБУ провела обшуки в Мураєва</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_igVZ_IGy4rUi0ozPglnbm0UAkXtnj_VUwXHSzDWOJvd9C9Zz-b9mVh6c9_Sm2MdqfXnR9qVx" alt="СБУ провела обшуки в Мураєва" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Співробітники Служби безпеки України провели серію обшуків у керівника забороненої проросійської партії Наші Євгена Мураєва.</p></div>
            </div>
        </a><a href='https://lb.ua/society/2022/11/30/537611_spivrobitniki_sbu_proveli_obshuk.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Співробітники СБУ провели обшук у Мураєва</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpzMGB66VbaNi-6HpRF83Jp__oGPYPrDuHmlZyfGehDqoZ2Oks2RlQvTC9Y6YY8s_k8IejSTTt" alt="Співробітники СБУ провели обшук у Мураєва" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вилучено готівку, в тому числі в російських рублях, зброю, комп&#39;ютерну техніку та мобільні телефони.</p></div>
            </div>
        </a><a href='https://tsn.ua/ato/sbu-provela-obshuki-u-murayeva-ta-yogo-poplichnikiv-znayshli-zbroyu-ta-rubli-2213197.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СБУ провела обшуки у Мураєва та його поплічників: знайшли ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQrkF3beDwLS5rwgHpFjKGgZXTX0WKpR5zS4sqFKNqOfdEEydnHVtXus81R1h8xITEz16FFezbs" alt="СБУ провела обшуки у Мураєва та його поплічників: знайшли ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>СБУ 30 листопада провела обшуки у скандального проросійського політика Євгенія Мураєва, його родичів та соратників. Там знайшли зброю, долари та російські&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-sbu-muraev-obshuky/32155768.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СБУ повідомила про обшуки в Мураєва і його соратників</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSt8KoGWg4IjxjW6VyD1D-cQUm_j7YqDmrKu-OM-aKb7DCBpV8hsElC8B1qWMVigVj3lXvD9fsY" alt="СБУ повідомила про обшуки в Мураєва і його соратників" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Обшуки проводили в рамках кримінального провадження за статтею «державна зрада»</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ato/sbu-provela-obyski-u-muraeva-i-ego-soratnikov-nashli-oruzhie-i-rubli-foto-2213197.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СБУ провела обыски у Мураева и его соратников: нашли оружие ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQrkF3beDwLS5rwgHpFjKGgZXTX0WKpR5zS4sqFKNqOfdEEydnHVtXus81R1h8xITEz16FFezbs" alt="СБУ провела обыски у Мураева и его соратников: нашли оружие ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>СБУ 30 ноября провела обыски у скандального пророссийского политика Евгения Мураева, его родственников и соратников. Там обнаружили оружие, доллары и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/30/7378657/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СБУ провела обыски у Мураева</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_igVZ_IGy4rUi0ozPglnbm0UAkXtnj_VUwXHSzDWOJvd9C9Zz-b9mVh6c9_Sm2MdqfXnR9qVx" alt="СБУ провела обыски у Мураева" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сотрудники Службы безопасности Украины провели серию обысков у руководителя запрещенной пророссийской партии Наши Евгения Мураева.</p></div>
            </div>
        </a><a href='https://suspilne.media/328736-sbu-provela-obsuki-u-muraeva-so-znajsli/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СБУ провела обшуки у екснардепа Мураєва. Що знайшли</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJlz89_8htDSuGgAgbWz4sZW_E4hpmQD5eS5UbGYLoUwiXZ3Rl71zTT1eZwQhPzZNY0qRtBkgR" alt="СБУ провела обшуки у екснардепа Мураєва. Що знайшли" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Служба безпеки провела обшуки у керівника забороненої проросійської партії &quot;Наші&quot; Євгена Мураєва. Його підозрюють у державній зраді.</p></div>
            </div>
        </a><a href='https://www.slovoidilo.ua/2022/11/30/novyna/suspilstvo/sbu-provela-obshuky-murayeva-znajdeno-dolary-rubli-zbroyu-rosijsku-literaturu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СБУ провела обшуки у Мураєва: знайдено долари, рублі, зброю ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRRGSe8pUre5ALYKvKB59f9Ro6Eb6om7WFFWMBvOleQ318GH6pTKtUWEc_ulHM-e_Tjcg0Naf4Y" alt="СБУ провела обшуки у Мураєва: знайдено долари, рублі, зброю ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У керівника забороненої проросійської партії Наші Євгена Мураєва правоохоронці провели низку обшуків – вдома, а також в офісах.</p></div>
            </div>
        </a><a href='https://www.unian.ua/incidents/sbu-provela-obshuki-u-murayeva-ta-yogo-poplichnikiv-vilucheno-gotivku-ta-zbroyu-foto-12062313.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СБУ провела обшуки у Мураєва та його поплічників: вилучено ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS2xBzEE9LJPXMOvk5yeERuHZKvFpfQ3pWKslpWj9tcUeliDOOf29h33MTU9ufV0HF_yT3jQESD" alt="СБУ провела обшуки у Мураєва та його поплічників: вилучено ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Співробітники СБУ провели обшуки у керівника забороненої проросійської партії &quot;Наші&quot; Євгена Мураєва. СБУ вилучила готівку зброю та техніку - деталі на&nbsp;...</p></div>
            </div>
        </a><a href='https://versia.ru/evgenij-muraev-na-dengi-dmitriya-firtasha-vo-chto-by-to-ni-stalo-pytaetsya-soxranit-ukrainskuyu-gosudarstvennost'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>За Украиной – в Москву! - Евгений Мураев на деньги Дмитрия ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTx0U3gR4ji9_8byBlwjsrD3k8ruqfVTydeNr-jOdNHiuLhQJHwsnK2ZT8F4HoQF7fj7vSXY9tc" alt="За Украиной – в Москву! - Евгений Мураев на деньги Дмитрия ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Наша версия» неоднократно сообщала о планах американцев создать альтернативное украинское правительство для смещения неспособного договариваться Владимира&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}