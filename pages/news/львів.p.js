import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Львів</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Львів"/>
        <meta name="description" content="Trending News about Львів" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Львів</h1>
            <Image width={800} height={500} src="https://lviv.nashigroshi.org/wp-content/uploads/2022/11/03763f5-39-main-v1651735495.jpg" alt="Львів"/>
            <h3>Recent News</h3>
            <a href='https://lviv.nashigroshi.org/2022/11/16/u-lvovi-vidnovyly-energopostachannya-majzhe-po-vsomu-mistu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Львові відновили енергопостачання майже по всьому місту</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTp8cYoJF0o7FJbzzmOyjx8L4K9tNnvpZ-AYgRRRqJLzb8CwXuuAhU4UwaEIvAesddkFCWZcQPK" alt="У Львові відновили енергопостачання майже по всьому місту" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Станом на 8 годину ранку у Львові відновили електропостачання по майже всьому місту, повідомий міський... 15.11.2022. Через&nbsp;...</p></div>
            </div>
        </a><a href='https://varta1.com.ua/news/u-seredu-lviv-poproshchaietsya-z-troma-geroyami_356606.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У середу Львів попрощається з трьома Героями</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSAHpUZTu965xVTtVoRdSSIImA68sYkELvHeIfFplCIDJ9ShDqlcRMX-1rr9TAeJFJ5a1PXmZRS" alt="У середу Львів попрощається з трьома Героями" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Поховають військовослужбовців на Личаківському кладовищі. Біографічні довідки Героїв. Юрій Хміляр (25.06.1993–12.11.2022). Львів&#39;янин.</p></div>
            </div>
        </a><a href='https://portal.lviv.ua/news/2022/11/16/lviv-proshchaietsia-zi-shche-troma-zakhysnykamy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Львів прощається зі ще трьома захисниками</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcST0Z3_lbncFXy8vvbNnq0yoEpRgRzCYVROc5o0vARSMEy8qtHMXk3Tgj7T1UxqrodV22dQmaHG" alt="Львів прощається зі ще трьома захисниками" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У середу, 16 листопада, Львів попрощається з Героями Володимиром Довгуном, Олексієм Дегтярьовим та Юрієм Хмілярем, які загинули, ....</p></div>
            </div>
        </a><a href='https://galinfo.com.ua/news/lviv_pislya_obstriliv_sytuatsiya_stanom_na_ranok_391940.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новини Львова: Львів після обстрілів: ситуація станом на ранок</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-Uv8p1XOhQcvtvJ8qI5A4sKW2ZFUQMxk9B9CrR77uLX25HtQoufaydA62e_7GteSqVbVJfEsC" alt="Новини Львова: Львів після обстрілів: ситуація станом на ранок" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про актуальну ситуацію у місті розповів міський голова Львова Андрій Садовий. Електропостачання. Внаслідок вчорашніх обстрілів 80% міста залишилось без&nbsp;...</p></div>
            </div>
        </a><a href='https://suspilne.media/315718-u-lvovi-prosautsa-z-voinami-uriem-hmilarem-volodimirom-dovgunom-ta-oleksiem-degtarovim/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Львові прощаються з воїнами Юрієм Хмілярем, Володимиром ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTiUirmcMdQFwMY_2_wtuoSidgjCLYTtdxkNKoaOKEywQ-nD3jEzJVD6EKbmM66lidXRqyyS2oL" alt="У Львові прощаються з воїнами Юрієм Хмілярем, Володимиром ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media У Львові 16 листопада попрощаються з воїнами Володимиром Довгуном, Олексієм Дегтярьовим, Юрієм Хмілярем. Поховають захисників на&nbsp;...</p></div>
            </div>
        </a><a href='https://lviv.vgorode.ua/news/sobytyia/a1225291-zjavilisja-foto-naslidkiv-raketnoho-udaru-po-zhitlovomu-kvartalu-bilja-lvova-'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>З&#39;явилися фото наслідків ракетного удару по житловому ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVajt6azfrsYL_qxIvf6NYZAaIZJ8R3DKg4C9UBxfDUBGwC5CeHy_xm6VhCntpZHotU_ULQZ3S" alt="З&#39;явилися фото наслідків ракетного удару по житловому ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Під час масованої ракетної атаки у вівторок, 15 листопада, відбулося влучання в житловий квартал у селі Солонка, що біля Львова. Пошкоджені чотири будинки.</p></div>
            </div>
        </a><a href='https://wz.lviv.ua/news/477448-lviv-zavtra-shkoly-pratsiuiut-v-ochnomu-rezhymi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Львів: завтра школи працюють в очному режимі</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDImmlCj3EhmHuujQniOeUrGWeuPlDa63ivdPtaQ4jTcOFde6vHhb5wHKBHctbBS9WBvL4rBZd" alt="Львів: завтра школи працюють в очному режимі" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Завтра, 17 листопада, навчальні заклади Львова повертаються до очної форми роботи.</p></div>
            </div>
        </a><a href='https://portal.lviv.ua/news/2022/11/16/sadovyj-poiasnyv-chomu-ne-vsi-lviv-iany-chuiut-syren-iz-peresuvnykh-huchnomovtsiv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Садовий пояснив, чому не всі львів&#39;яни чують сирени із ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTlzxYI2hTEYfCV41QtkgM3i09dHLhRIWMfyfUvaBe78nXtPmRByxIJRULM30Lxl1afrQy-4Q7-" alt="Садовий пояснив, чому не всі львів&#39;яни чують сирени із ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Через тотальне знеструмлення Львова після російської атаки про повітряну тривогу мешканців мають сповіщати автомобілі із гучномовцями. Частина ....</p></div>
            </div>
        </a><a href='https://suspilne.media/317614-80-lvova-bez-svitla-miskij-golova-andrij-sadovij/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>80% Львова без світла, половина мешканців має воду — Андрій ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSF-Q-LVDBtoCUYQ8rt_ZnZHpc8QtwqYcl0blf81S3g2rtoysRm6Vn4fLkWB-eKjfKavUPrJVwt" alt="80% Львова без світла, половина мешканців має воду — Андрій ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media У Львові після ракетних ударів 15 листопада складна ситуація. Станом на 21:00 без електроенергії залишається 80% міста.</p></div>
            </div>
        </a><a href='https://lviv.media/lviv/59603-situaciya-u-lvovi-pislya-raketnogo-obstrilu-koli-budut-svitlo-voda-i-teplo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ситуація у Львові після ракетного обстрілу: коли будуть світло ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSaqZvP0edoRbmSXAz-oFmZsvTnQF-TNyN9qxjf004TrfX0OrHxaRHVUIccXGTaJGLgINV8ueV1" alt="Ситуація у Львові після ракетного обстрілу: коли будуть світло ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У районах, де не буде води, працюватимуть водовозки. Читайте останні новини України на сайті LVIV.MEDIA.</p></div>
            </div>
        </a>
        </Template></>;
}