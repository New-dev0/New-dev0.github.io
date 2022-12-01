import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Мария Колесникова</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Мария Колесникова"/>
        <meta name="description" content="Trending News about Мария Колесникова" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Мария Колесникова</h1>
            <Image width={800} height={500} src="" alt="Мария Колесникова"/>
            <h3>Recent News</h3>
            <a href='https://meduza.io/feature/2022/11/30/mariya-kolesnikova-stavshaya-litsom-belorusskih-protestov-v-2020-m-i-osuzhdennaya-na-11-let-popala-v-reanimatsiyu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мария Колесникова, ставшая лицом белорусских протестов в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSIV8vVWd7CsO3fMJCPsoLGVw0VabEuD4ZOPi_pgEH-rPpG9PccW1nvdm5TAWN5sTEIP2e7Sd6Q" alt="Мария Колесникова, ставшая лицом белорусских протестов в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мария Колесникова, ставшая одной из самых узнаваемых фигур белорусских протестов 2020 года и осужденная из-за них, попала в реанимацию.</p></div>
            </div>
        </a><a href='https://www.rfi.fr/ru/%D0%B2-%D0%BC%D0%B8%D1%80%D0%B5/20221130-%D0%BC%D0%B0%D1%80%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BB%D0%B5%D1%81%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0-%D0%B2-%D1%82%D1%8F%D0%B6%D0%B5%D0%BB%D0%BE%D0%BC-%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B8-%D0%B2-%D1%80%D0%B5%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D0%B8-%D0%BE%D1%82%D1%86%D0%B0-%D0%B8-%D0%B0%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82%D0%B0-%D0%BA-%D0%BD%D0%B5%D0%B9-%D0%BD%D0%B5-%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D1%8E%D1%82'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мария Колесникова остается в тяжелом состоянии в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTiDJ77lkvIic-qEzmwCeWDfJnD4eY1LL9EmdQRBDMM67L4e-Gqeyo0nW81h5M5xnbFzr2Xip_1" alt="Мария Колесникова остается в тяжелом состоянии в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Одна из лидеров мирных белорусских протестов 2020 года попала в реанимацию из штрафного изолятора Гомельской женской колонии. О причинах наказания штрафным&nbsp;...</p></div>
            </div>
        </a><a href='https://www.interfax.ru/world/874829'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У осужденной в Белоруссии Марии Колесниковой выявили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTUDY0RABEpAvRf7TJme6NE1w-F9TsKhtTHletrgzZX5IKw4PLy5BTKJxFq9l5B-fBv-hfQJc4o" alt="У осужденной в Белоруссии Марии Колесниковой выявили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>30 ноября. INTERFAX.RU - Отбывающая срок в гомельской колонии оппозиционерка Мария Колесникова, по неподтвержденной информации, попала в больницу с прободной&nbsp;...</p></div>
            </div>
        </a><a href='https://ru.euronews.com/2022/11/29/kolesnikova-belarus-hospitalization-ppp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Колесникова в реанимации: международная реакция</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSHDzemSLg0VkEjYXwdeCyriiXIJSCXzCycB666WaZB2L-5fFIo1NdrBc7Cjiu-D6q5DAs_Liin" alt="Колесникова в реанимации: международная реакция" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее сообщалось, что Колесникова была переведена в штрафной изолятор гомельской женской колонии №4.</p></div>
            </div>
        </a><a href='https://www.newsru.co.il/world/30nov2022/maria_509.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мария Колесникова прооперирована, ее состояние тяжелое</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTuxhNKtg4LqtkS71_C-0cyXlGJt-H3jheNAof5kqMskECMn0NKCRcUaloUtT35_1mj9c2WM5Xu" alt="Мария Колесникова прооперирована, ее состояние тяжелое" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NEWSru.co.il: новости Израиля и Ближнего Востока, актуальные события в мире. Борьба с террором, война в Украине. Политика, бизнес, здоровье, развлечения,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rosbalt.ru/world/2022/11/30/1979850.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У осужденной в Белоруссии активистки Колесниковой была ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQFeOJUg8x8TCSHSqJXbIJC_UnGNdj0k-ccGDz_pXV3bNGiuba4AUxOKv8_gRz3UVMWQrhWX14" alt="У осужденной в Белоруссии активистки Колесниковой была ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщает пресс-служба экс-претендента на пост президента Белоруссии Виктора Бабарико. Врачи о диагнозе не говорят даже родственникам.</p></div>
            </div>
        </a>
        </Template></>;
}