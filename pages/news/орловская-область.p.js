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
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSnxdw1hYxm8-kYeXAF8ZCKV1mk426GfPdcSWYf-juFRkgIztRy4AJ-buOat7334fdaybp8Ujz" alt="Губернатор Орловской области заявил, что беспилотник ..." height={150} width={150} style={{marginLeft: "15px"}}/>
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
        </a><a href='https://focus.ua/world/537225-pochti-170-km-do-granicy-s-ukrainoy-v-orlovskoy-oblasti-rf-vzorvalas-neftebaza-foto'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Почти 170 км до границы с Украиной: в Орловской области РФ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSRDhsRV7VsI_YrAL1k2neBsl5PYvEjCj0UYZPMDXT6k8FzPaHHoS2pC-uWwaWPfkzqRwkgmuBR" alt="Почти 170 км до границы с Украиной: в Орловской области РФ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Местные власти говорят о прилете беспилотника по объекту в селе Стальной Конь. С начала полномасштабной войны России с Украиной в регионе еще не раздавались&nbsp;...</p></div>
            </div>
        </a><a href='https://life.ru/p/1539262'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Сети опубликовали первое фото нефтебазы в Орловской ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8jSUoGIMUCXV96PlKgQB_Fxzo2LLiZ7MWXPD2nbRlLlnDvIfMEk-E4MxQaAH_gNydKaWk_FzQ" alt="В Сети опубликовали первое фото нефтебазы в Орловской ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Сети появилась первая фотография нефтебазы в селе Стальной Конь Орловской области, которую атаковал беспилотник. Снимок опубликован в группе &quot;Инцидент&nbsp;...</p></div>
            </div>
        </a><a href='https://readovka.news/news/120754'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Беспилотник осуществил подрыв нефтебазы в Орловской ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTqWG9qgHScYC72e0Km8PFmyjg4Lvmd1IpTFIntmvM846c0qvBpLsk0moVpm8OKRQjch9wrQXvB" alt="Беспилотник осуществил подрыв нефтебазы в Орловской ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По его словам, пострадавших нет. На месте работают оперативные службы. Ранее Readovka писала Над Валуйками силами ПВО сбита украинская «Точку-У»Обломки ракеты&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}