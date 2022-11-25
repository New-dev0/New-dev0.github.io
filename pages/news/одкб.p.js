import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ОДКБ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ОДКБ"/>
        <meta name="description" content="Trending News about ОДКБ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ОДКБ</h1>
            <Image width={800} height={500} src="https://img.rebeltv.eu/wp-content/uploads/2022/11/EN_01546359_1347.jpg?x97134" alt="ОДКБ"/>
            <h3>Recent News</h3>
            <a href='https://vot-tak.tv/novosti/24-11-2022-sammit-odkb-armeniya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Азербайджанская агрессия без ответа и антироссийские ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTLQZLt8tz8MHNoaoH4A59xhBzU4U4MCTHKOxqFjQdifVpsIqxaF8NVjIFPCC0m12OwHE706J9C" alt="Азербайджанская агрессия без ответа и антироссийские ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премьер-министр Армении Никол Пашинян на встрече лидеров ОДКБ в Ереване. Армения, 23 ноября 2022 года. Фото Karen Minayan / AFP / East News.</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/experts-on-armenia-/6848265.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ОДКБ: противовес Западу или «мертвая организация»?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ_XeJljct-VlAvV_H92vfYXLlkFq0jlCpymFtkmHcjKhmaNJ3KOS9AmJ-B6PeR-AJdVhVdf-Xr" alt="ОДКБ: противовес Западу или «мертвая организация»?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Саммит блока в Ереване завершился демаршем армянской стороны. Премьер-министр Армении Никол Пашинян на саммите Организации договора о коллективной&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5681603'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пашинян отказался подписывать декларацию Совета ОДКБ по ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNSptexRrX6kpYT5lDbOCPyE3M6l5KiXSpUVQI5q1GKWldu3CTjyCCmV5rJUy1JNEumLX7gvEz" alt="Пашинян отказался подписывать декларацию Совета ОДКБ по ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премьер-министр Армении Никол Пашинян заявил, что проект декларации Совета коллективной безопасности Организации Договора о коллективной безопасности в&nbsp;...</p></div>
            </div>
        </a><a href='https://tsargrad.tv/articles/lukashenko-vstupaet-v-vojnu-tokaev-predlagaet-sdatsja-istoricheskie-zajavlenija-sammita-odkb_671366'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко вступает в войну, Токаев предлагает сдаться ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrnl4dPuUNJdLFXXRfrQFGmKazVABQPsXYTlzZAEgMAjktJIgn_2asF9Oo1hstT4StFSvVvwh7" alt="Лукашенко вступает в войну, Токаев предлагает сдаться ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Саммит Организации договора коллективной безопасности (ОДКБ) в Ереване получился самым конфликтным и, вероятно, самым важным в истории этой организации.</p></div>
            </div>
        </a><a href='https://www.eurointegration.com.ua/rus/news/2022/11/24/7151284/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Спикер парламента Армении: Ереван не смирится с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwZTREyBzU6k13W8zk4E8Ln9m-FI01UVFMApMJbFsI0-pt3n9bS59AWZI7umExX61WPKTogelU" alt="Спикер парламента Армении: Ереван не смирится с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Спикер Национального собрания Армении Ален Симонян заявил, что власти страны &quot;не смирились и не смирятся&quot; с сегодняшним бездействием ОДКБ.</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/vlast/24112022/524691'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Отказ Армении подписать декларацию не повлияет на работу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSsaWmpX1YxMB0hPz0q1l_715cFqSc8pLh2NOnzoieAIZaQTFGYgAWHXifipNPaKt4a1TFfJQnu" alt="Отказ Армении подписать декларацию не повлияет на работу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Совещание, которое состоялась недавно, говорит о потребности членов ОДКБ в такой конференции, считает Дмитрий Песков.</p></div>
            </div>
        </a>
        </Template></>;
}