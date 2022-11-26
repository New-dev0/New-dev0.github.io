import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Александр Лукашенко</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Александр Лукашенко"/>
        <meta name="description" content="Trending News about Александр Лукашенко" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Александр Лукашенко</h1>
            <Image width={800} height={500} src="" alt="Александр Лукашенко"/>
            <h3>Recent News</h3>
            <a href='https://grodnonews.by/news/glavnoe/aleksandr_lukashenko_o_prodovolstvennoy_bezopasnosti_vpryaglis_zakatav_rukava_i_vydali_dostoynyy_rezultat.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Александр Лукашенко о продовольственной безопасности: впря</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlErIj5WVjdXIY0O9Mmf-uuvZDUiCEGxXDUVvVtZz0erIEGh3eKMhsn6ypm8rFOmFUyueN9bBv" alt="Александр Лукашенко о продовольственной безопасности: впря" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ставка на производство продовольствия в Беларуси оказалось верной. Об этом Президент Беларуси Александр Лукашенко заявил на совещании по развитию&nbsp;...</p></div>
            </div>
        </a><a href='https://www.souzveche.ru/news/68362/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Александр Лукашенко: Не хочется, чтобы наши дети взяли ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRnwJmbRzo_HAdgn_lWXQx5VVhY2gZ35nQNpVnTYeIWCPg0wNrCFmO-3nTxXj3xo6APAoQBPHy_" alt="Александр Лукашенко: Не хочется, чтобы наши дети взяли ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Беларуси Александр Лукашенко заявил, что лучше «сжав зубы», работать и выдавать результат, чем отправлять детей защищать страну.</p></div>
            </div>
        </a><a href='https://belros.tv/news/ekonomika/aleksandr-lukashenko-vsya-nasha-strana-vpryaglas-zakatav-rukava-i-vydala-dostoynyy-rezultat-/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Александр Лукашенко: вся наша страна впряглась, закатав ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRnorrJ9owXAblgwBpIS7Wz5FCy3zfshj1oeOpQpBhgf-_YyMfA_rjyu975PRAuwYacB9FrqOcz" alt="Александр Лукашенко: вся наша страна впряглась, закатав ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Беларуси в начале совещания по развитию агропромышленного комплекса Гомельской области в ходе рабочей поездки в Гомель предупредил, что разговор&nbsp;...</p></div>
            </div>
        </a><a href='https://zhodinonews.by/2022/11/25/aleksandr-lukashenko-priehal-v-gomel-chtoby-razobratsya-s-sostoyaniem-del-v-agk/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Александр Лукашенко приехал в Гомель, чтобы разобраться с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSgLGxdlt__6vMr2x5CfdOZD_YV9POchanulPWdAGMl9pkby8WZzIt8G8ouIHWLMTgv5BRP8-mP" alt="Александр Лукашенко приехал в Гомель, чтобы разобраться с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Переломить негативные тенденции в работе Гомельской области можно только напряженным трудом. Об этом Президент Беларуси Александр Лукашенко заявил на&nbsp;...</p></div>
            </div>
        </a><a href='https://vitvesti.by/index.php/belarusnews/eto-ne-chto-khochu-to-i-vorochu-aleksandr-lukashenko-obiasnil-belorusam-chto-oznachaet-svoboda-i-nezavisimost.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Это не что хочу, то и ворочу&quot;. Александр Лукашенко объяснил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;Это не что хочу, то и ворочу&quot;. Александр Лукашенко объяснил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Беларуси Александр Лукашенко 25 ноября на совещании в Гомеле объяснил, что означает свобода и независимость для белорусского народа,&nbsp;...</p></div>
            </div>
        </a><a href='https://ctv.by/novosti-gomelya-i-gomelskoy-oblasti/aleksandr-lukashenko-pribyl-s-rabochey-poezdkoy-v-gomel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Александр Лукашенко прибыл с рабочей поездкой в Гомель</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSk-oNZ29GiZwmNmnvEGibYz2yJo7-mygH7JyE_a71XQVpxYxlSD57BfDce2bptDg3sU3uvZFwv" alt="Александр Лукашенко прибыл с рабочей поездкой в Гомель" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Гомельские аграрии еще завершают уборку кукурузы на зерно, продолжает заготовку кормов. Итоги 2022 года и стратегия на аграрное будущее могут стать основными&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}