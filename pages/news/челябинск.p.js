import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Челябинск</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Челябинск"/>
        <meta name="description" content="Trending News about Челябинск" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Челябинск</h1>
            <Image width={800} height={500} src="https://focus.ua/static/storage/thumbs/1200x630/b/b3/b9d8e865-65c6972f3d2b3d9908061b62aa0efb3b.png?v=7687_1" alt="Челябинск"/>
            <h3>Recent News</h3>
            <a href='https://focus.ua/voennye-novosti/538923-v-chelyabinske-progremel-moshchnyy-vzryv-nad-gorodom-stolb-dyma-chto-izvestno-foto-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Челябинске прогремел мощный взрыв, над городом столб ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBg-SJtSQ6ZpieNPncTF-gBnLkomUg5QsJJfE0SMw6ggUulTQQKKswqv7ze012PSJYBPhpfrxg" alt="В Челябинске прогремел мощный взрыв, над городом столб ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В МЧС РФ заявляют о плановом подрыве для добычи щебня, но местные жители говорят, что взрыв был слышен на весь город и от него задрожали окна.</p></div>
            </div>
        </a><a href='https://gazeta.ua/ru/articles/np/_v-celyabinske-sluchilsya-hlopok-pervye-podrobnosti/1122819'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Челябинске случился &quot;хлопок&quot;: первые подробности</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ5vvn9KL-91Dz5x8yxTi-gwTCYyW4Yq-PsJhKo12amau4QhFi4c1Z9I5dGbhUmtzCxk4FeR8hQ" alt="В Челябинске случился &quot;хлопок&quot;: первые подробности" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Во вторник, 29 ноября, в российском Челябинске раздался мощный взрыв. Сотрудники МЧС выехали в Новосинеглазово в район карьера по производству щебня.</p></div>
            </div>
        </a><a href='https://u24.ru/news/69317/v-chelyabinske-proydet-blagotvoritel-nyy-balet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Челябинске пройдет благотворительный балет</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQEwwRsBa7uekqum2lkuyC_WRkV6Wh_j3C8J7nG_1TXdIdeKyOH-gFlxM2TrSE2Kg4QXkIfFGT_" alt="В Челябинске пройдет благотворительный балет" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Челябинск 29 ноября присоединится к Всемирному дню благотворительности. В этот день, который называют #Щедрый вторник, в актовом зале ЮУрГУ состоится показ&nbsp;...</p></div>
            </div>
        </a><a href='https://telegraf.com.ua/novosti-rossii/2022-11-29/5724442-duzhe-potuzhniy-vibukh-prolunav-u-rosiyskomu-chelyabinsku-foto-ta-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Очень мощный взрыв прогремел в российском Челябинске: фото ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHVjteD7gK1KWQp3myJ86zeoskAF9NzV6vsD17UQKoBelNCN0shQc2nMmYARILnk0vBu4Z9OQl" alt="Очень мощный взрыв прогремел в российском Челябинске: фото ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Челябинске 29 ноября прогремел взрыв на карьере - в сети опубликовали фото и видео с места происшествия.</p></div>
            </div>
        </a><a href='https://www.stopcor.org/section-suspilstvo/news-na-rosii-nova-bavovna-v-chelyabinsku-zafiksov-vibuh-29-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На россии новый &#39;&#39;хлопок&#39;&#39;: в Челябинске зафиксировал взрыв ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRLeEkNKMbY8e00Skue8TDBQJDZ5Yw9xxTYlbqR2MT2Wq8ZBrSJjWFj6eml8eTgVCBq3qo60juO" alt="На россии новый &#39;&#39;хлопок&#39;&#39;: в Челябинске зафиксировал взрыв ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>29 ноября в городе Челябинск российской федерации был зафиксирован мощный взрыв. Об это сообщает Телеграм-канал ВСУ. Как видно по фото, над городом.</p></div>
            </div>
        </a><a href='https://vecherka.su/articles/society/188159/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Челябинск получит 74 новых низкопольных трамвая в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Челябинск получит 74 новых низкопольных трамвая в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Также по улицам Челябинска уже курсируют 16 новых автобусов, приобретенные на средства из федерального бюджета. В следующем году планируют закупить еще 15&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5694149'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На карьере по добыче щебня в Челябинске произошел взрыв</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="На карьере по добыче щебня в Челябинске произошел взрыв" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Советском районе Челябинске произошел взрыв. О «хлопке» и столбе густого черного дома горожане начали сообщать в социальных сетях около 17 часов.</p></div>
            </div>
        </a><a href='https://74.ru/text/incidents/2022/11/29/71854916/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Челябинцы массово сообщили о мощном взрыве. Фото и видео</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTm-IwHgZ7bjxr9J-PLJVZ5WIqq3GbJ1g6eBHD4BvG_P-BUnaT-3jp8wsG_1rDk1VlEJ_ZruZMT" alt="Челябинцы массово сообщили о мощном взрыве. Фото и видео" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Во вторник, 29 ноября, читатели 74.RU массово сообщили о мощном взрыве в Челябинске. — Я сначала услышал хлопок, потом увидел столб дыма.</p></div>
            </div>
        </a><a href='https://www.dsnews.ua/world/u-rosiyskomu-chelyabinsku-vibuhi-ochevidci-publikuyut-foto-ta-video-29112022-470157'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В российском Челябинске — взрывы: очевидцы публикуют фото ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTiTxtifb148g4Y8BwXGQsVB-GNYWGipgGQhGC7FRs9VVzXhAPBjR11c-7H3X_ZR2iN_LzgYR21" alt="В российском Челябинске — взрывы: очевидцы публикуют фото ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>При воспроизведении полностью или части информационного материала, опубликованного на портале «DSNews, необходимо обязательно указывать имя автора (при наличии)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.1obl.ru/news/kultura/na-blagotvoritelnom-balete-v-chelyabinske-sobrali-bolee-200-tysyach-rubley/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На благотворительном балете в Челябинске собрали более 200 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRR5BbJL3bV0xI9dETT9IKDUkonJN2OnEJvpcQv5N4zBwV2TJJLWf976zKTfDVik480DZ7YYON7" alt="На благотворительном балете в Челябинске собрали более 200 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Эти деньги направят в пользу детей, которым нужно серьезное лечение.</p></div>
            </div>
        </a>
        </Template></>;
}