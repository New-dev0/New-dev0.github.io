import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Украинцы</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Украинцы"/>
        <meta name="description" content="Trending News about Украинцы" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Украинцы</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/1/b/1b2ff6a-zelenska-olena--bbc-.jpg" alt="Украинцы"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/rus/news/2022/11/25/7378047/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленская: Украинцы готовы терпеть испытания ради победы и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTx61DcaeWKS90Tpq4JweVB-R1jgy1ZVnwHYse9pELHEZBx43prTPrntxb4059VZ1olzuThzBMy" alt="Зеленская: Украинцы готовы терпеть испытания ради победы и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Супруга украинского президента Елена Зеленская считает, что украинцы готовы терпеть испытания тяжелой зимы, на которые их обрекает Россия, ради победы,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/travel/ukrayintsi-mozhut-bezkoshtovno-yizditi-transportom-1669390156.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Украинцы могут бесплатно ездить в транспорте в Польше: кого ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSHIwPpAKm0YmdX_lHEHWZuNhZbruCze-_IbIW60tURuA9wwQN5SD07xDKbm7_7LxHVHn3g32Do" alt="Украинцы могут бесплатно ездить в транспорте в Польше: кого ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинцы в Польше могут воспользоваться правом бесплатного проезда. Каких категории наших граждан касаются льгот и в каких городах страны она действует?</p></div>
            </div>
        </a><a href='https://zn.ua/POLITICS/zelenskaja-bolee-90-ukraintsev-hotovy-zhit-s-otkljuchenijami-sveta-2-3-hoda-radi-pobedy-i-chlenstva-v-es.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленская: Более 90% украинцев готовы жить с отключениями ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0-8HUx7vfSkVCgmcxlERTjAocNTPxwRpgdKQg3xIX6C7MGYZN7GP6I1XumvQR4Z5OVQLWJ47t" alt="Зеленская: Более 90% украинцев готовы жить с отключениями ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Первая леди Украины заявила, что украинцы готовы терпеть отключение света несколько лет, чтобы победить Россию.</p></div>
            </div>
        </a><a href='https://delo.ua/ru/society/ukraincy-v-evrope-otkryli-zavedeniya-gde-mozno-poprobovat-edu-kotoruyu-eli-vo-vremya-golodomora-407331/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Украинцы в Европе открыли заведения, где можно попробовать ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqMSs2nOLd2Lmy6uv4O9ONQ_jX29vY1YCHooZLLMAnFp_gCOGFFZ-1ReXvQjUivGxq4-1ZIKcv" alt="Украинцы в Европе открыли заведения, где можно попробовать ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Концепция акции - уличный ресторан с &quot;блюдами&quot; времен Голодомора - искусственного голода в 1932-33 годах. Так молодежь хочет рассказать о геноциде, который&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/WORLD/ukraintsy-opasajutsja-novoho-nastuplenija-na-kiev-vesnoj-hlava-evrokomiteta-v-bundestahe.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Украинцы опасаются нового наступления на Киев весной – глава ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHE6IMvoTBdMTjNHzyoAJycMvAgne75bQz6Mf3QlEkbXB8kVN5glUKxkn157rk_0Dh6BTNkuog" alt="Украинцы опасаются нового наступления на Киев весной – глава ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украину нужно обеспечить до весны боеприпасами к противовоздушной обороне и бронетехнике, в частности, понадобятся боевые машины пехоты Marder и танки Leopard 2&nbsp;...</p></div>
            </div>
        </a><a href='https://topwar.ru/205735-elena-zelenskaja-ukraincy-gotovy-zhit-bez-sveta-i-tepla-i-dva-i-tri-goda.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Елена Зеленская: «Украинцы готовы жить без света и тепла и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSaO0D6j3CRajKnKyJQStNWiJhK4SZzfuOFpRYvxSXGQxOYcUwSiCjg8ZMrGX-M01xtFvPjTEt" alt="Елена Зеленская: «Украинцы готовы жить без света и тепла и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Супруга президента Украины объявила, что украинцы готовы жить в «каменном веке» годами Первая леди Украины, жена президента Елена Зеленская,&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ato/elena-zelenskaya-rasskazala-skolko-ukraincy-gotovy-terpet-blekaut-2209531.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Елена Зеленская рассказала, сколько украинцы готовы терпеть ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9-lkHuZvYPPPq-ZmgIAGkbzWK7RxoAnl_tM0CxNGicp42juo0BFvabNG3y8H7w7mGAB7fRIZi" alt="Елена Зеленская рассказала, сколько украинцы готовы терпеть ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Жена президента Украины Елена Зеленская заявила, что украинцы готовы терпеть блэкаут ради победы в войне с Россией и членства в Евросоюзе.</p></div>
            </div>
        </a><a href='https://meduza.io/feature/2022/11/25/ukraintsy-gotovy-terpet-radi-pobedy-i-chuvstva-sobstvennogo-dostoinstva'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Украинцы готовы терпеть. Ради победы и чувства собственного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRzVUX_JAk3-nQ8aFZHSCR-TeFUHIHOdYtftK935PZVRkJRBSaS49brKS19rrTZwQWsEuP9Sr8y" alt="«Украинцы готовы терпеть. Ради победы и чувства собственного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Елена Зеленская, супруга президента Украины Владимира Зеленского, дала большое интервью «Би-би-си». Это часть проекта «100 женщин», в рамках которого&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/features-63746324'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Украинцы готовы терпеть и два, и три года&quot;. Елена Зеленская ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQV_FLnxfX1TywDbsMH9Z8_-LyLVc6Lj4rE4Y37SWKQsHc5Ktc2xfZsWj8E98EIfSbgkpoq7ZFR" alt="&quot;Украинцы готовы терпеть и два, и три года&quot;. Елена Зеленская ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Супруга президента Украины Елена Зеленская стала одним из героев проекта Би-би-си &quot;100 женщин&quot;, в рамках которого мы каждый год рассказываем о самых&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}