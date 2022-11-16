import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Бенксі</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Бенксі"/>
        <meta name="description" content="Trending News about Бенксі" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Бенксі</h1>
            <Image width={800} height={500} src="https://racurs.ua/content/images/Publication/News/17/68/31/preview_w696zc1.jpg" alt="Бенксі"/>
            <h3>Recent News</h3>
            <a href='https://racurs.ua/ua/n176831-benksi-namaluvav-sim-robit-u-kyievi-ta-oblasti-foto.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бенксі намалював сім муралів в Києві та області (ФОТО)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSTgJV2CYPyEMZaBHqPF9m-_QwYR7-jT-xQyfFif-MiLrdMOSOKgTfRvcVgxzmw18w9O2aHJwL9" alt="Бенксі намалював сім муралів в Києві та області (ФОТО)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Всесвітньо відомий вуличний художник Бенксі підтвердив, що завершив в Україні загалом сім нових робіт. Це він розповів виданню The Art Newspaper.</p></div>
            </div>
        </a><a href='https://lb.ua/society/2022/11/15/535940_benksi_pidtverdiv_shcho_vin_ie_avtorom.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бенксі підтвердив, що він є автором семи муралів в Україні</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcReWjtTGhotBPHW4rAeFKJaH1QYv-tZtr5732TaX2gXOBCUCD5TF6kqBSsjdOyF3brVsCCoAv8S" alt="Бенксі підтвердив, що він є автором семи муралів в Україні" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це пише The Art Newspaper. “Бенксі підтвердив, що йому належить малюнок на Майдані Незалежності, де діти гойдаються на протитанковій конструкції, гімнастка&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/society/vulichniy-hudozhnik-benksi-namalyuvav-sim-grafiti-v-ukrajini-foto-12046224.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Відомий художник Бенксі зізнався, що намалював сім графіті в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwLH_rOBcT8NRBzUlBI5OC8w0bsQvY2TfEoFiFrmxDatKhWm7YH2S8mIeZo4SUFT1Ql5J2TRX7" alt="Відомий художник Бенксі зізнався, що намалював сім графіті в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Як повідомляє The Art Newspaper, художнику належить малюнок на Майдані Незалежності в Києві, на якому зображені діти, що гойдаються на протитанковій конструкції&nbsp;...</p></div>
            </div>
        </a><a href='https://vechirniy.kyiv.ua/news/74314/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бенксі підтвердив свої мурали у Києві та області</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0MEVQzYMRVtnnnGTlScGaub8PLK1bFKr038zHBVzyOJiLmqDJLSSxoFvadGDH4fQoFrgaLwp6" alt="Бенксі підтвердив свої мурали у Києві та області" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Британський анонімний художник Бенксі підтвердив, що створив сім муралів в Україні. Зокрема в Києві та в деокупованій Бородянці й Ірпені. Про це повідомляє&nbsp;...</p></div>
            </div>
        </a><a href='https://life.pravda.com.ua/culture/2022/11/15/251322/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британський художник Бенксі &quot;зізнався&quot; в авторстві 7 муралів в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRojCfg7Kbuw3UjiBCFuaFVDAL9DP8hHh3W_JMS3_6r06t9OL1eOZBTaufc5M7754PXh-4oiJRZ" alt="Британський художник Бенксі &quot;зізнався&quot; в авторстві 7 муралів в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це повідомляє The Art newspaper. Припущення про те, що анонімний художник перебуває в охопленій війною Україні з&#39;явилися після того, як минулого тижня у&nbsp;...</p></div>
            </div>
        </a><a href='https://www.slovoidilo.ua/2022/11/15/novyna/kultura/vulychnyj-xudozhnyk-benksi-pidtverdyv-namalyuvav-sim-muraliv-ukrayini-foto'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вуличний художник Бенксі підтвердив, що намалював сім ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxpJQlrvLu8jT3zrwP6zlS59_WzuTDvHT5NHO2Bsw6yZrxoQ7JDjc5nAdiaJthj2xMUxSM5YkS" alt="Вуличний художник Бенксі підтвердив, що намалював сім ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Він підтвердив цю новину виданню The Art Newspaper. Так, Бенксі належить малюнок на Майдані Незалежності у Києві, на якому зображені діти, що гойдаються на&nbsp;...</p></div>
            </div>
        </a><a href='https://meduza.io/feature/2022/11/15/sem-graffiti-benksi-v-ukraine-fotografii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Семь граффити Бэнкси в Украине. Фотографии Все гадали, это ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQgjdIqXJEl2LM8tx1dDWFqkzMWxAiir1e7OqpAR9IYNA-8RBhjeHcVbv5XLBoX1H147viNkWYp" alt="Семь граффити Бэнкси в Украине. Фотографии Все гадали, это ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Анонимный художник Бэнкси подтвердил, что создал в разных местах в Украине — в Киеве и Киевской области — семь граффити, сообщает The Art Newspaper.</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/society/zhiteli-borodyanki-zastali-banksy-za-rabotoj-rasskazali-kak-vyiglyadit-znamenityij-hudozhnik-video.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Жители Бородянки застали Banksy за работой: рассказали, как ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSHsfmdnr_l4N4vtASuUZVNrBd4Ybcwe1Fnuc3eZ_58EBjrOk7X5Qct8ylgd_luTgYHiobH8PUf" alt="Жители Бородянки застали Banksy за работой: рассказали, как ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Всемирно известный британский художник граффити Banksy нарисовал семь граффити в Киевской области во время визита в Украину.</p></div>
            </div>
        </a><a href='https://forbes.ua/lifestyle/benksi-namalyuvav-7-muraliv-na-kiivshchini-skilki-koshtuyut-tsi-roboti-ta-komu-nalezhat-15112022-9783'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бенксі намалював сім муралів на Київщині. Скільки коштують ці ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWAcXB-nhYeiTe2GJTpmqkhnrSdQDoJJtO8A1vn-c51cdbDEkZTUGXJAZQK8nKYHYqJArztIdM" alt="Бенксі намалював сім муралів на Київщині. Скільки коштують ці ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>14 листопада художник Бенксі визнав авторство семи графіті в Києві та області. Кому тепер належать мурали найвідомішого стріт-артисту у світі.</p></div>
            </div>
        </a><a href='https://focus.ua/lifestyle/537076-znamenityy-benksi-podtverdil-sozdanie-semi-graffiti-v-ukraine'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Знаменитый Бэнкси подтвердил создание семи граффити в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTVQs53H8L1BVtSxdTZdy6MqRqQ76oPPKvegTkuQE1BKKU1ECmDg7kXEuzuALUeccvpMbBWSp3K" alt="Знаменитый Бэнкси подтвердил создание семи граффити в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Но подтверждения этому не было, ведь у таинственного британца много подражателей. Но Бэнкси наконец подтвердил авторство, сообщает The Art Newspaper. Ясно, что&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}