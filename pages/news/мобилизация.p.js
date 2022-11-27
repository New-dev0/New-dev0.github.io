import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Мобилизация</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Мобилизация"/>
        <meta name="description" content="Trending News about Мобилизация" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Мобилизация</h1>
            <Image width={800} height={500} src="https://cdn.forbes.ru/forbes-static/shareimages/481605.jpg?v=1669371668" alt="Мобилизация"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.ru/society/481605-kreml-oproverg-soobsenie-o-plane-putina-ob-avit-v-poslanii-o-mobilizacii-strany'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кремль опроверг сообщение о «плане» Путина объявить в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7R79fZ-oIr93NLI4OxUMps8Ygrf47-KOXI9Ng-_z89dgALjhEMY8-dEqU0-S4YKq1EMpkf_0j" alt="Кремль опроверг сообщение о «плане» Путина объявить в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Песков назвал не соответствующей действительности информацию о том, что Путин в своем послании Федеральному собранию может объявить о «мобилизации страны».</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5682564'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Песков назвал информацию о планах Путина объявить ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Песков назвал информацию о планах Путина объявить ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Появившаяся в СМИ информация о планах президента Владимира Путина объявить во время послания «мобилизацию страны» не соответствует действительности.</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/25/71847203/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Не надо, не надо». Путин ответил матери участников СВО о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQZHtAbk9jTZS1Vi3CL4kJatYwmUmaXhIdjI1y_CSErAcjJvd8qKCEfJYmXnNuJG-UDLWqFLo8Q" alt="«Не надо, не надо». Путин ответил матери участников СВО о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Одна из женщин, принимавшая участие во встрече матерей военнослужащих — участников СВО с президентом России, поделилась опасениями - Власть - 25 ноября 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://ufa1.ru/text/health/2022/11/26/71843174/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Мои знания в медицине оказались не нужны»: врач ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTUYjcsCuu-DVWsuvU-aaMir5i5yuyIqwFxGpk5CbIDGKCdWo0WSZl4vG9XG_3KA8VwW1v_wO8L" alt="«Мои знания в медицине оказались не нужны»: врач ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Главный врач диспансера Шамиль Булатов в разговоре с корреспондентом UFA1.RU сказал, что учреждение подавало списки в военный комиссариат, чтобы сохранить&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dp.ru/a/2022/11/25/Ne_nado__nam_hvatit_Pu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Не надо, нам хватит&quot;: Путин ответил на вопрос о новой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT9G-SYUjaJCNPFJKOGo2ZlWL3n7emycxFKta4VtnuGGUuwQK-9qYbW4-VyvM-buBpMkQVEkPvv" alt="&quot;Не надо, нам хватит&quot;: Путин ответил на вопрос о новой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент России Владимир Путин во время встречи с матерями участников специальной военной операци...</p></div>
            </div>
        </a><a href='https://ura.news/news/1052606017'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Путин: частичная мобилизация в России закончилась</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTnYQv7pgMqHNoUu2sqto-XYDgAzL1Lh0elJkr1rHrlhfO0sZRGQ-8-na-U-VOo33elA6I3vwSZ" alt="Путин: частичная мобилизация в России закончилась" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Частичная мобилизация в России закончилась. Об этом заявил президент России Владимир путин на встрече с матерями военнослужащих, участвующих в спецоперации&nbsp;...</p></div>
            </div>
        </a><a href='https://news.ru/vlast/ne-nado-nam-hvatit-putin-o-mobilizacii/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Не надо, нам хватит»: Путин о продолжении мобилизации</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQP6Q1WO5mbjVrmYDSkVHOGvnsDkgBxPP__6PBuqfIOnT9A3PF2Fo5GjD9bGiJ_P39zRUVveI-v" alt="«Не надо, нам хватит»: Путин о продолжении мобилизации" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент России Владимир Путин ответил на вопрос о повторной мобилизации словами «не надо, нам хватит». Данный вопрос задала одна из участниц встречи&nbsp;...</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/vlast/25112022/524978'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Песков опроверг сообщения о планах Путина объявить ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSONpF76XxDhZRZMnhHuiiCipxcC6MVoQvQCz8_ilDNNlm69SVNYV6svown1GmCwC0WuqzqtEfD" alt="Песков опроверг сообщения о планах Путина объявить ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Информация СМИ о том, что в послании Федеральному собранию Владимир Путин якобы объявит о &quot;мобилизации страны&quot;, не соответствует действительности,&nbsp;...</p></div>
            </div>
        </a><a href='https://vot-tak.tv/novosti/25-11-2022-mobilizatsiya-v-rossii-hronika-den-66/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мобилизация в России. Хроника. День 66</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTs99RMqENLpDcUmgSYOd2udytA9ICPFe3tlDOd0i8CdSIVsil1bcGl7PfqXNZX7vC6jYbqUWiw" alt="Мобилизация в России. Хроника. День 66" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российские мобилизованные отправляются в гарнизоны. Омск, Россия. 10 ноября 2022 года. Фото: Алексей Мальгавко / Reuters / Forum.</p></div>
            </div>
        </a><a href='https://www.banki.ru/news/lenta/?id=10976235'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Песков ответил на сообщения о планах Путина объявить ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS3_48SXdz8Ns6u9ywdVapOQMpcQPJg_ijaIRpyj8PjHv63sUymgQXqZPVr1qkbthE6-8nnXpRy" alt="Песков ответил на сообщения о планах Путина объявить ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сообщение о том, что президент РФ Владимир Путин до конца года выступит с посланием к Федеральному собранию и объявит о «мобилизации экономики страны»,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}