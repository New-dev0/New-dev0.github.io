import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новости Днепра</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новости Днепра"/>
        <meta name="description" content="Trending News about Новости Днепра" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новости Днепра</h1>
            <Image width={800} height={500} src="https://nashemisto.dp.ua/wp-content/uploads/2022/11/reportazh.jpg" alt="Новости Днепра"/>
            <h3>Recent News</h3>
            <a href='https://nashemisto.dp.ua/ru/2022/11/29/mertvye-tela-byli-povsjudu-shokirujushhaja-istorija-pereselenki-iz-luganshhiny-popavshej-pod-vrazheskij-obstrel/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мертвые тела были повсюду: шокирующая история переселенки ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSx2bqks0OCXGCVmt85nrza8QWjQdZ_JpCQAccds0h_wYi326_IP_J_3j5AtheY3oPShMul4_vO" alt="Мертвые тела были повсюду: шокирующая история переселенки ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Татьяна эвакуировалась в Днепр из Лисичанска Луганской области. Женщина чудом выжила после вражеских ракетных обстрелов. ▻ Наше Місто.</p></div>
            </div>
        </a><a href='https://nashemisto.dp.ua/ru/2022/11/29/ty-menja-vyvela-v-dnepre-muzhchina-udaril-devushku-za-to-chto-ona-vygulivala-sobaku-vo-dvore/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ты меня вывела: в Днепре мужчина ударил девушку за то, что ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQYclbJ04iXtk88Jysgu96WfWFK3H3jeqirfioSIDPxMlECYTFqlabuD3TTMOB_NKRC1akCC7t-" alt="Ты меня вывела: в Днепре мужчина ударил девушку за то, что ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Для одной из жительниц Днепра обычная прогулка с собакой обернулась оскорблениями со стороны неизвестного мужчины и избиением. ▻ Наше Місто.</p></div>
            </div>
        </a><a href='https://nashemisto.dp.ua/ru/2022/11/29/legendarnaja-tucha-dnepra-kak-vygljadel-izvestnyj-rynok-v-90-e-gody-foto/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Легендарная «Туча» Днепра: как выглядел известный рынок в 90 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0vedPdZAoY-bF3rU5L15asz1cH0rVHDtZuwXmaSNBZ2YTW3642qbaK5uLrRPaPNXlJem-i7Y7" alt="Легендарная «Туча» Днепра: как выглядел известный рынок в 90 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Легендарная «Туча» Днепра: как выглядел известный рынок в 90-е годы (Фото). София Танченко. 29.11.2022 16:30 4.</p></div>
            </div>
        </a><a href='https://nashemisto.dp.ua/ru/2022/11/29/poznakomilas-s-uchenikami-cherez-monitor-kak-uchitelnica-pereselenka-nachinaet-novuju-zhizn-v-dnepre/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Познакомилась с учениками через монитор: как учительница ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRw5DPX7YjC5hAqcmw8O91_SlJEOr2jT6GXKSPoxpjhM9xmjPc3443v9elH6dFclRwvY3OCIRiu" alt="Познакомилась с учениками через монитор: как учительница ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Познакомилась с учениками через монитор: как учительница-переселенка начинает новую жизнь в Днепре ➤ Читайте новости на портале Наше Місто.</p></div>
            </div>
        </a><a href='https://dnepr.express/post/v-dnepre-rasskazali-kak-vo-vremya-blekauta-udalos-izbezhat-transportnogo-kollapsa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Транспортники рассказали, как работали в Днепре во время ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNw5XonFoFwiAQmrBAb9-mmm0ybnnQxW_1_juMi2ci58gQQ1XjB29AiRXx7zIe0xApZK0nvHG1" alt="Транспортники рассказали, как работали в Днепре во время ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На прошлой неделе из-за российских обстрелов по всей Украине исчезла электроэнергия. Перед транспортниками Днепра стояли сразу несколько важных задач.</p></div>
            </div>
        </a>
        </Template></>;
}