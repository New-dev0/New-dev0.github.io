import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Джо Байден</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Джо Байден"/>
        <meta name="description" content="Trending News about Джо Байден" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Джо Байден</h1>
            <Image width={800} height={500} src="https://gdb.voanews.com/e7e2ff0d-ecf8-4b9a-8406-be03e941e4f5_cx0_cy3_cw0_w1200_r1.jpg" alt="Джо Байден"/>
            <h3>Recent News</h3>
            <a href='https://www.golosameriki.com/a/biden-not-intending-/6860277.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Байден не намерен разговаривать с Путиным, пока не появятся ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQRh--TCp4zoAxqSKBof-mw5G0C3d8ERYt64vuz_e5g3Jp4KvL4JCcPOYkKZaGraCyHEqTrypo" alt="Байден не намерен разговаривать с Путиным, пока не появятся ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Представитель Белого дома заявил, что только Украина может определить, что будет являться предметом возможных мирных переговоров.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5705122'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Песков заявил, что Байден ставит неприемлемые условия для ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Песков заявил, что Байден ставит неприемлемые условия для ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пресс-секретарь президента России Дмитрий Песков заявил, что президент Владимир Путин готов к переговорам по Украине. Однако, по его словам, условия их&nbsp;...</p></div>
            </div>
        </a><a href='https://fedpress.ru/news/77/policy/3153663'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британцы раскритиковали условия Байдена для переговоров с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS4JFTjBDd4Y9rKZz5X_iEwu0HRmz0EVDyhM8I82PBCVmg4a7T3BAjQA19ee48vYjI1nf2w__9p" alt="Британцы раскритиковали условия Байдена для переговоров с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Читатели британского издания Daily Mail резко раскритиковали условия, выдвинутые президентом США Джо Байденом для разговора с Путиным,&nbsp;...</p></div>
            </div>
        </a><a href='https://versia.ru/v-kremle-usloviya-dzho-bajdena-dlya-peregovorov-s-vladimirom-putinym-nazvali-nepriemlemymi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Кремле условия Джо Байдена для переговоров с Владимиром ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvHc-3J9xZ3-N0FhdLypCkpjtEG-FPGDGxhKQdA3Jovs5M8uyBEs7k-iBYx6ei1v2itWsYXmBK" alt="В Кремле условия Джо Байдена для переговоров с Владимиром ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Байден фактически заявил, что переговоры с Москвой будут вестись только после «ухода Владимира Путина с Украины», что невозможно, заявил Дмитрий Песков.</p></div>
            </div>
        </a><a href='https://rus.err.ee/1608808423/bajden-nazval-uslovija-dlja-nachala-peregovorov-s-putinym'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Байден назвал условия для начала переговоров с Путиным</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQz8miD0359yt0QzIXtgXmj7a4iooTAeZ0sQiesEXeH4lz8FxUIWLLp7rn-XKABmJqiTTARljmj" alt="Байден назвал условия для начала переговоров с Путиным" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент США Джо Байден готов встретиться с президентом России Владимиром Путиным, если тот продемонстрирует заинтересованность в завершении войны против&nbsp;...</p></div>
            </div>
        </a><a href='https://www.interfax.ru/russia/875099'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кремль отверг выдвинутые Байденом условия для переговоров с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRiK2IEZTDTspPUDdurA5VwULVRp5AmrfR1G2VD0KF_NqdhbKWeZ9Ju0vJTybxJv3EPSqOCvcqU" alt="Кремль отверг выдвинутые Байденом условия для переговоров с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 2 декабря. INTERFAX.RU - Президент США Джо Байден в своем заявлении о переговорах с РФ поставил условием выход России из Украины, в Кремле к этому&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}