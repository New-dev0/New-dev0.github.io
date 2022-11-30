import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Взрыв в Челябинске</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Взрыв в Челябинске"/>
        <meta name="description" content="Trending News about Взрыв в Челябинске" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Взрыв в Челябинске</h1>
            <Image width={800} height={500} src="https://cdn.iportal.ru/news/2015/social/c28f14a4940f67aac663f1b353964e.png" alt="Взрыв в Челябинске"/>
            <h3>Recent News</h3>
            <a href='https://74.ru/text/incidents/2022/11/29/71855150/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В МЧС назвали место и причину мощного взрыва в Челябинске</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQ488mCFW2LKdAZpex8fZywezxH6oGjpWir0BSRiZP_I4UIsp_U1zEqfMunWHD0c1fGBWBdQno" alt="В МЧС назвали место и причину мощного взрыва в Челябинске" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Он прогремел около 17 часов и был слышен и виден во многих районах города. 29 ноября 2022, 18:14. 33 051. 74.ru. Читать в приложении.</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/29/71855174/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Дрожали не только окна, но и стены». Мощный взрыв ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9rTThcaMVj8KEtTw08UjRN4soqPI2CPd_KBfsN_vhiW6nYa_QP83DxxxMc1nn_YQLEVDOPfFE" alt="«Дрожали не только окна, но и стены». Мощный взрыв ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Взрыв в Челябинске, 29 ноября 2022 г. - Происшествия - 29 ноября 2022 - Новости Санкт-Петербурга - Фонтанка.Ру.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5694149'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На карьере по добыче щебня в Челябинске произошел взрыв</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="На карьере по добыче щебня в Челябинске произошел взрыв" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Советском районе Челябинске произошел взрыв. О «хлопке» и столбе густого черного дома горожане начали сообщать в социальных сетях около 17 часов.</p></div>
            </div>
        </a><a href='https://focus.ua/voennye-novosti/538923-v-chelyabinske-progremel-moshchnyy-vzryv-nad-gorodom-stolb-dyma-chto-izvestno-foto-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Челябинске прогремел мощный взрыв, над городом столб ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBg-SJtSQ6ZpieNPncTF-gBnLkomUg5QsJJfE0SMw6ggUulTQQKKswqv7ze012PSJYBPhpfrxg" alt="В Челябинске прогремел мощный взрыв, над городом столб ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В МЧС РФ заявляют о плановом подрыве для добычи щебня, но местные жители говорят, что взрыв был слышен на весь город и от него задрожали окна.</p></div>
            </div>
        </a><a href='https://polit74.ru/incident/pod_chelyabinskom_zafiksirovan_vzryv/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Под Челябинском зафиксирован взрыв</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSd7_oxlJ7qUMd98p-fSQzZmI2gDNPB2alqGWMRMwh4CW8QS5bMSg_joZwk3GJnTXBtbK8Qlg00" alt="Под Челябинском зафиксирован взрыв" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«По предварительным данным взрыв произошел в районе карьера по производству щебня в поселке Новосинеглазово», - рассказали в пресс-службе ГУ МЧС России по&nbsp;...</p></div>
            </div>
        </a><a href='https://newtimes.ru/articles/detail/230847'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Челябинске прогремел мощный взрыв</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXPiaeiHkZvYZak-lDpWjjp8jUHCIIQPuxSFIIh1JzD6vWnVLPV1E_9Ck2TObSWJWPEutV5lv0" alt="В Челябинске прогремел мощный взрыв" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>UPD: В МЧС сообщили, что взрыв произошел в рамках планового подрыва породы при производственной добыче щебня. В ведомстве уточнили, что инцидент произошел на&nbsp;...</p></div>
            </div>
        </a><a href='https://24tv.ua/ru/v-cheljabinske-29-nojabrja-2022-goda-progremel-vzryv-foto-i-video-24-kanal_n2207729'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В российском Челябинске прогремел мощный взрыв: фото и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTA_HweJOAebwuMmzJEsaR5_uXgvjRsDYZWGU4akNGhsQ_lL1wNrfJ5MyIYSAv6NyRNhmQZSlDsVA" alt="В российском Челябинске прогремел мощный взрыв: фото и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Во вторник, 29 ноября, в российском Челябинске раздался мощный взрыв. Местные телеграм-каналы опубликовали фото и видео с места событий. view count.</p></div>
            </div>
        </a>
        </Template></>;
}