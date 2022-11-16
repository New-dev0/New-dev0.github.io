import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Энтони Джонсон</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Энтони Джонсон"/>
        <meta name="description" content="Trending News about Энтони Джонсон" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Энтони Джонсон</h1>
            <Image width={800} height={500} src="https://img.championat.com/news/social/5/8c/4890585.jpg" alt="Энтони Джонсон"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/boxing/article-4890585-smert-entoni-dzhonsona-boec-rambl-nokauty-prichina-gibeli.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Как же несправедлива жизнь! Легендарный нокаутёр UFC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQCiXL0Kncmop57fmnl_QDsH9azwUKPj0CyG4uQ5w4Ke2a1tGeFVqmnsp6DxGvgYfVEYSZW6yrL" alt="Как же несправедлива жизнь! Легендарный нокаутёр UFC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Одним из первых на трагедию отреагировал Даниэль Кормье, который в своё время успел дважды подраться с Энтони за титул чемпиона UFC: «Покойся с миром, мой брат.</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/UFC/spbnews_NI1723883_Bojec_UFC_i_Bellator_Entoni_Dzhonson_umer_v_vozraste_38_let'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Боец UFC и Bellator Энтони Джонсон умер в возрасте 38 лет</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4-C6bZrJ70oqbHCb5yvdoZd7GqPnZEHrICKHFz_0fvf6H5-8BXnoMSDorHvEIwOBAzX7O0Jpl" alt="Боец UFC и Bellator Энтони Джонсон умер в возрасте 38 лет" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В конце предыдущего месяца менеджер Джонсона Али Абдельазиз сообщил, что состояние здоровья Джонсона находится в очень тяжелом состоянии, но не стал уточнять,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5667111'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Умер экс-претендент на титул чемпиона UFC Энтони Джонсон</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Умер экс-претендент на титул чемпиона UFC Энтони Джонсон" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американский боец смешанных единоборств Энтони Джонсон умер в возрасте 38 лет. Об этом сообщают другие бойцы MMA, в том числе Майкл Кьеза, который написал о&nbsp;...</p></div>
            </div>
        </a><a href='https://matchtv.ru/boxing/matchtvnews_NI1723906_Stalo_izvestno_chem_bolel_zvezdnyj_bojec_MMA_Entoni_Dzhonsona_skonchavshijsa_v_vozraste_38_let'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стало известно, чем болел звездный боец MMA Энтони ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTv6vuroWUtTy7gx6MkO-K2v4cjOn7obBwqFJN3mJd8i4CAYh7frmvIno0ROiIQkvuFgLPJiMnD" alt="Стало известно, чем болел звездный боец MMA Энтони ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>13 ноября в возрасте 38 лет скончался бывший претендент на чемпионский титул UFC в полутяжелом весе американец Энтони Джонсон.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/martial/mma/reviews/mma-smert-entoni-dzhonsona-podrobnosti-karery-14-noyabrya-2022-goda-1997799/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Скончался один из самых грозных нокаутеров в истории ММА ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzyQHS1_gzmWvuCoeDnFneJRv-W0Of95D5PO6-AQo1Od9jJrDEBQpP8NovzaCG1lSRBX4u32PM" alt="Скончался один из самых грозных нокаутеров в истории ММА ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Грустные новости разошлись по ММА-медиа вечером 13 ноября: не стало Энтони Джонсона. Первым об этом сообщил экс-боец UFC Джейк Шилдс. Рамбл скончался в возрасте&nbsp;...</p></div>
            </div>
        </a><a href='https://mma.metaratings.ru/articles/odin-iz-yarcaisix-nokauterov-neozidanno-skoncalsya-v-38-let-cto-proizoslo-s-entoni-ramblom-dzonsonom/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Энтони Джонсон болезнь, причина смерти, что случилось с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRe-1rfgswonmXezf93zZQBdQMq5MjzbkNQkmkeFb7XgZwFpEOuZX2j6gxlHBL7mDl8D-07dFGO" alt="Энтони Джонсон болезнь, причина смерти, что случилось с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вечером 13 ноября стало известно о неожиданной гибели одного из самых зрелищных бойцов MMA современности. В этом материале мы расскажем, что произошло с&nbsp;...</p></div>
            </div>
        </a><a href='https://mkset.ru/news/2022-11-15/byvshiy-pretendent-na-titul-chempiona-ufc-entoni-dzhonson-skonchalsya-v-vozraste-38-let-2589404'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бывший-претендент на титул чемпиона UFC Энтони Джонсон ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvBNumID10h76Mq29D-X9uuyTJ6u-EvwJwUJqKmuoF611W_tjD8CuqaIehtE-_V9HML7lsxRTs" alt="Бывший-претендент на титул чемпиона UFC Энтони Джонсон ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На сайте MMA Junkie появилась информация о смерти известного бойца Энтони Джонсона. Причины смерти не указываются. Подробнее на сайте издания mkset.ru.</p></div>
            </div>
        </a>
        </Template></>;
}