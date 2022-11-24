import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Москвич 3</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Москвич 3"/>
        <meta name="description" content="Trending News about Москвич 3" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Москвич 3</h1>
            <Image width={800} height={500} src="https://online47.ru/media/photo/article/__159859.jpg" alt="Москвич 3"/>
            <h3>Recent News</h3>
            <a href='https://online47.ru/2022/11/23/stoimost-novogo-krossovera-moskvich-3-mozhet-sostavit-okolo-2-millionov-rubley-169151'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стоимость нового кроссовера &quot;Москвич-3&quot; может составить ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRLtiy0h7-8ObsxAQBycGgWUukA8ddrG3JEChdjtGZcg1b0VqzdYtVP4FQxvOymzHR_2GhZPkU9" alt="Стоимость нового кроссовера &quot;Москвич-3&quot; может составить ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>При этом другой источник утверждает, что новый кроссовер будет сопоставим по цене с китайским аналогом - JAC JS4. Предполагается, что до конца 2022-го на заводе&nbsp;...</p></div>
            </div>
        </a><a href='https://motor.ru/news/moskvich-production-23-11-2022.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Завод «Москвич» приступил к сборке автомобилей</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGiq1tABHT9tDnt0HkzRSqOslV83futRBSozOlUXxA3RIsGcprkOAAMhvGfV1N7vryRzIXzowS" alt="Завод «Москвич» приступил к сборке автомобилей" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>23 ноября 2022 года заработал Московский автомобильный завод «Москвич». Теперь официально: на предприятии запущено крупноузловое производство кроссоверов с&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5681191'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Продажи кроссовера «Москвич 3» начнутся в Москве в декабре</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Продажи кроссовера «Москвич 3» начнутся в Москве в декабре" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российские активы Renault перешли в госсобственность РФ в мае. После того как завод «Рено Россия» передали под контроль правительства Москвы, городские власти&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/23/71840615/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Цена не будет кусаться. Стала известна возможная стоимость ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7W46jM3eXMNF81MoUgQQrDejHRtk29gpdbYz1uSoFLvMBPrOV2w4tLnSnApFae8VugrGjaxw4" alt="Цена не будет кусаться. Стала известна возможная стоимость ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Автомобиль «Москвич-3», серийное производство которого стартовало на бывшем заводе Renault в Москве 23 ноября, может стоить - Авто - 23 ноября 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfm.ru/news/513584'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На заводе «Москвич» начали собирать автомобили. Первой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-c-H_TqSaKKs-4vbd_i6uUqwlQclqHjmBJ26iYvoX2BAg1EsamN1SoBpa_pzyR6ekXtItMbQF" alt="На заводе «Москвич» начали собирать автомобили. Первой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Новый «Москвич 3» — это небольшой кроссовер с модными нынче у китайцев узкими передними фарами. Из-за этого спереди формой он напоминает Range Rover, а сзади —&nbsp;...</p></div>
            </div>
        </a><a href='https://abnews.ru/2022/11/23/manturov-prodazhi-krossovera-moskvich-3-startuyut-v-moskve-v-dekabre-2022-goda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Названы сроки старта продаж кроссовера «Москвич 3»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR70BFvk3HqNWb34EpZ9T8oVcrrvpkYtcxq0sqlCYAcnY9UyUAZ60hcf0dB42Us_zT50nIglt8n" alt="Названы сроки старта продаж кроссовера «Москвич 3»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В 2022 году планируется запустить крупноузловую сборку автомобиля &quot;Москвич 3&quot; и электромобилей.</p></div>
            </div>
        </a>
        </Template></>;
}