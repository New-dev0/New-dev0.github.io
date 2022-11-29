import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Флаг России</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Флаг России"/>
        <meta name="description" content="Trending News about Флаг России" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Флаг России</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/d/aa/4908827.jpg" alt="Флаг России"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/football/news-4908827-yurist-obyasnil-chto-mozhet-grozit-serbii-za-vyveshennyj-fanatami-flag-rossii-na-matche-chm.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Юрист объяснил, что может грозить Сербии за вывешенный ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJccNAV2A3byhZgkyhuKEMBsK2_GjXJz8gNYowvmSYF0LeswwbbDIMP5KGvJYzS8lzqZZsegOH" alt="Юрист объяснил, что может грозить Сербии за вывешенный ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Спортивный юрист Михаил Прокопец объяснил, что может грозить Сербии за вывешенный фанатами флаг России на матче ЧМ-2022. Напомним, болельщики сборной Сербии&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/football/1113706799-obedinennyj-flag-rossii-i-serbii-so-slovami-odni-czveta-odna-vera-vyve.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Объединенный флаг России и Сербии со словами «Одни цвета ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_BuIN1ALgD_a8rxTksB0EtoAW4Rz3dQPhon_o-ixsdtt1HkdvwA3Et2qaA5kQ580chuy064Xk" alt="Объединенный флаг России и Сербии со словами «Одни цвета ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Болельщики сборной Сербии вывесили необычный флаг на матче с Камеруном.</p></div>
            </div>
        </a><a href='https://www.rusfootball.info/wc2022_news/1146689968-bolelschiki-vyvesili-obedinennyy-flag-rossii-i-serbii-na-matche-chm-2022-s-kamerunom.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Болельщики вывесили объединенный флаг России и Сербии на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQAx402sGISBMJ-PwEkCOggYTD1fueN521xINeCRgj_BciVCZAUx_58R_qYVVVs8zSkUmWbiTCV" alt="Болельщики вывесили объединенный флаг России и Сербии на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Сербии играет с командой Камеруна в рамках второго тура групповой стадии чемпионата мира 2022. Во время матча на трибуне сербских болельщиков&nbsp;...</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/sport/football/za-flag-rossii.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Наказание за флаг России: Сербия может заплатить за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSeKrHOQRrWLNjMRJCVD8ZUzUB6Jfp_KdtIXQmVwUAvLiiI61fLpTjMr99GLABfMUpTu8iYOe7H" alt="Наказание за флаг России: Сербия может заплатить за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборной Сербии грозит наказание от ФИФА за поведение своих болельщиков во время матча второго тура ЧМ-2022 против Камеруна (3:3).</p></div>
            </div>
        </a><a href='https://bombardir.ru/news/678059-fanaty-vyvesili-obedinennyy-flag-rossii-i-serbii-na-matche-chm-2022-s-kamerunom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фанаты вывесили объединенный флаг России и Сербии на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYcwQtLwZzx6fSajv1mpQ_ZFaYhgf-k1N4nptSOJU-sn6jJZ0Z54pfMfXjOfrvb4XFSebnrMGq" alt="Фанаты вывесили объединенный флаг России и Сербии на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Сербии сыграла вничью с Камеруном (3:3) во втором туре группового этапа ЧМ-2022 – на «Бомбардире»</p></div>
            </div>
        </a><a href='https://www.liveresult.ru/news/153638'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Болельщик сборной Сербии рассказал, почему вывесил флаг ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRM7_CGzrme7sRWiUJdlJy6aGHjNDH88G1FxQLLKxRhuXemOqXDJNEeJH_K13wAFq1YXIAFpuK8" alt="Болельщик сборной Сербии рассказал, почему вывесил флаг ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Болельщик сборной Сербии Драган рассказал, почему вывесил российско-сербский флаг во время матча второго тура группового этапа чемпионата мира против&nbsp;...</p></div>
            </div>
        </a><a href='https://metaratings.ru/news/serbskiy-bolelshchik-obyasnil-pochemu-reshil-vyvesit-flag-rossii-na-matche-chm-2022-1425837/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сербский болельщик объяснил, почему решил вывесить флаг ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXspFUMwwUDPVFiOuMJOXECWhsE14L91DcF_lKzjXAlGkitYAxsDCCRD8gqCR4Hb5InEoHPwgo" alt="Сербский болельщик объяснил, почему решил вывесить флаг ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Драган, болельщик сборной Сербии, вывесивший флаг России на матче национальной команды с Камеруном (3:3), объяснил свой жест. Добавим, что на флаге,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}