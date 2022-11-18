import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Гарри Поттер</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Гарри Поттер"/>
        <meta name="description" content="Trending News about Гарри Поттер" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Гарри Поттер</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/c/36/4893535.jpg" alt="Гарри Поттер"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/cybersport/news-4893535-nikakogo-garri-pottera-v-rossii-zapretili-pokazyvat-filmy-warner-bros-po-televizoru.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Никакого «Гарри Поттера»: в России запретили показывать ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTwlbgpa89GJu7r8J4GmFm_-KFexxeZgnGPXdxquiCq4WzfR-Pj1Os2DcJfLeDcfAzxiGq-mvMT" alt="Никакого «Гарри Поттера»: в России запретили показывать ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По заверению источников издания «Бюллетень кинопрокатчика», Warner Bros. запретила российским каналам транслировать её фильмы и другой контент.</p></div>
            </div>
        </a><a href='https://daily.afisha.ru/news/70106-bk-warner-bros-zapretila-pokazyvat-svoi-filmy-na-sts-i-drugih-rossiyskih-telekanalah/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>БК: Warner Bros. запретила показывать свои фильмы на СТС и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRdBcAjIvekSYxpvRdjJqIyUNCZqLiAWi9mqeJyAa6I5n3gvuzhURzbFN3-XcE-AXHD-Pi6VLV9" alt="БК: Warner Bros. запретила показывать свои фильмы на СТС и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>БК отмечает, что срок лицензионных соглашений у НМГ действует еще минимум полтора года. По данным издания, картины Warner Bros. и DC регулярно входили в число&nbsp;...</p></div>
            </div>
        </a><a href='https://snob.ru/news/bk-rossijskim-telekanalam-zapretili-pokazyvat-filmy-warner-bros/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Российским телеканалам запретили показывать «Гарри Поттера»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRU7Y149OxOKZzBQXaWNrvrkDL7ftsDAtwsvSqQHy2fYEFvb2HVk3VY_Z4K_6Ici-rJZcnAEtJ_" alt="Российским телеканалам запретили показывать «Гарри Поттера»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По информации издания, фильмы Warner Bros. и ее дочерней компании DC Films регулярно становились одними из самых просматриваемых на СТС. Наибольшей&nbsp;...</p></div>
            </div>
        </a><a href='https://www.passion.ru/news/nekrolog/v-rossii-zapretili-filmy-o-garri-pottere-16-11-2022.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В России запретили фильмы о Гарри Поттере</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHICVGJqZS5-V1zMErqVCCVeVfFJBC0ziSrgQtmBH7nnz6hb-5c7dttgi1N_ER6xN2NkV1KBBs" alt="В России запретили фильмы о Гарри Поттере" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американский киноконцерн «Warner Bros»., больше не разрешит русским прокатчикам крутить показывать свои картины на российском телевидении.</p></div>
            </div>
        </a><a href='https://altapress.ru/story/nikakogo-garri-pottera-warner-bros-zapretila-rossiyskim-telekanalam-pokazivat-svoi-filmi-315117'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Никакого &quot;Гарри Поттера&quot;. Warner Bros. запретила российским ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZM_xi6Kb4GSDdhf20snT3TwHhZp-REfwDPok70hjdZBdtC17EWoJVLEl4YQ9RRe1GuXabQlzM" alt="Никакого &quot;Гарри Поттера&quot;. Warner Bros. запретила российским ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Студия Warner Bros. запретила телеканалам холдинга «Национальная медиа группа» (НМГ) показывать свои фильмы, в том числе &quot;Гарри Поттер&quot;.</p></div>
            </div>
        </a><a href='https://adindex.ru/news/media/2022/11/16/307806.phtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Гарри Поттера» запретили показывать на телеканалах ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR3DhC0pf2-M43L1l17FYECWOAbkQRV7um82KPvXNhqR7tiIZw4dvGItHKXowIJCjRCA4WW_rdz" alt="«Гарри Поттера» запретили показывать на телеканалах ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Киностудия Warner Bros. запретила телеканалам холдинга «Национальная медиа группа» (НМГ) — СТС, РЕН ТВ, «Домашний», «Пятый» и др. — показывать свои фильмы.</p></div>
            </div>
        </a><a href='https://news.ru/cinema/rossiyane-ostanutsya-bez-garri-pottera-na-novogodnie-kanikuly/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россияне останутся без «Гарри Поттера» на новогодние каникулы</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFWTyArD0GWy-UlaDenFnKb7Ky3AiDd9fLyP3k_bnbf8L_f4D2y2hgMOftDSRbN8wrcHF_UXvY" alt="Россияне останутся без «Гарри Поттера» на новогодние каникулы" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Киностудия Warner Bros. запретила показывать свои фильмы телеканалам холдинга «Национальная медиа группа» (СТС, «Домашний», РЕН ТВ, «Пятый канал» и др.).</p></div>
            </div>
        </a>
        </Template></>;
}