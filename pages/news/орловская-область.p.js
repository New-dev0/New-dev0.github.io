import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Орловская область</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Орловская область"/>
        <meta name="description" content="Trending News about Орловская область" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Орловская область</h1>
            <Image width={800} height={500} src="" alt="Орловская область"/>
            <h3>Recent News</h3>
            <a href='https://www.kommersant.ru/doc/5668594'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Орловский губернатор сообщил о подрыве нефтебазы с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Орловский губернатор сообщил о подрыве нефтебазы с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Нефтебазу в селе Стальной Конь в Орловской области подорвали с беспилотника в ночь на 16 ноября, сообщил глава региона Андрей Клычков. Пострадавших в&nbsp;...</p></div>
            </div>
        </a><a href='https://meduza.io/news/2022/11/16/gubernator-orlovskoy-oblasti-zayavil-chto-bespilotnik-atakoval-neftebazu-pod-orlom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Губернатор Орловской области заявил, что беспилотник ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkMioShvTpXKaGcLPcnRHOsIYEJKH6m8r2tSQ-5__EysgC66Dc_MzktoBt1E2H-bRl48SN0wAe" alt="Губернатор Орловской области заявил, что беспилотник ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Губернатор Орловской области Андрей Клычков сообщил, что беспилотный летательный аппарат, предположительно, «осуществил подрыв» нефтебазы в поселке Стальной&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/politics/news/2022/11/16/950537-orlovskoi-oblasti-soobschili-ob-atake-bespilotnikom-neftebazi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Орловской области сообщили об атаке беспилотника на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTf9CHgnZL8x_7b1RZ94UMrUNtpl5Ju9nuM9CxAnsC1dVDm979tuFHVoeTGQa6OoId5gO7hzNaD" alt="В Орловской области сообщили об атаке беспилотника на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Сегодня около 4 утра предположительно беспилотный летательный аппарат осуществил подрыв нефтебазы в с. Стальной Конь», — написал глава Орловской области.</p></div>
            </div>
        </a><a href='https://neftegaz.ru/news/incidental/758949-bespilotnik-podorval-neftebazu-v-orlovskoy-oblasti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Украинский БПЛА ударил в нефтяной резервуар Транснефти в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR_OM0oiGxG86HslWWPXiDsQHVYWd8B4Ij9ckUcYwR0gF0hWJRH18hyrH3mDF0oUdyn_sl9OtNIfw" alt="Украинский БПЛА ударил в нефтяной резервуар Транснефти в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пожара не случилось, поскольку резервуар был заполнен лишь на 25%, удар пришелся выше уровня нефти. Внешняя стенка оказалась поврежденной - разрыв диаметром&nbsp;...</p></div>
            </div>
        </a><a href='https://life.ru/p/1539262'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Сети опубликовали первое фото нефтебазы в Орловской ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8jSUoGIMUCXV96PlKgQB_Fxzo2LLiZ7MWXPD2nbRlLlnDvIfMEk-E4MxQaAH_gNydKaWk_FzQ" alt="В Сети опубликовали первое фото нефтебазы в Орловской ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Сети появилась первая фотография нефтебазы в селе Стальной Конь Орловской области, которую атаковал беспилотник. Снимок опубликован в группе &quot;Инцидент&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nakanune.ru/news/2022/11/16/22686911/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Орловской области беспилотник взорвал нефтебазу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9FcAWcrXoOYVT5nX2w3SatCsQDmuQe25gdiBorSTaj6TNNMYl54VqEglVwd9d9wQz8CrQgtwU" alt="В Орловской области беспилотник взорвал нефтебазу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Сегодня около 4 утра предположительно беспилотный летательный аппарат осуществил подрыв нефтебазы в с. Стальной Конь. Пострадавших нет. На месте работают все&nbsp;...</p></div>
            </div>
        </a><a href='https://newizv.ru/news/incident/16-11-2022/gubernator-orlovskoy-oblasti-klychkov-zayavil-o-podryve-neftebazy-s-drona'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Губернатор Орловской области Клычков заявил о подрыве ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTRfbBNdaFTnJ3QIWbe3xqAidPTHAypfJ7yS2Bd5mnMvqF4Eoy0LkwZiTjUTqqxXArqR4P5fJqu" alt="Губернатор Орловской области Клычков заявил о подрыве ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В орловском селе Стальной Конь нефтебаза - терминал трубопровода &quot;Дружба&quot; - рано утром в среду была подорвана с беспилотного летательного аппарата ночью на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}