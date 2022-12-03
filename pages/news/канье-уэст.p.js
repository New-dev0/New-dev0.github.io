import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Канье Уэст</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Канье Уэст"/>
        <meta name="description" content="Trending News about Канье Уэст" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Канье Уэст</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/16090/production/_127865209_capture.png" alt="Канье Уэст"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/news-63826691'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Аккаунт рэпера Канье Уэста в &quot;Твиттере&quot; заблокирован за пост ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGphyXYChZ5ulYmHgKJkQRML-ICPSAUk0zq63grCpqum74pjbf69DLz_qQtwI924bR3L-DIxuo" alt="Аккаунт рэпера Канье Уэста в &quot;Твиттере&quot; заблокирован за пост ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Один из пользователей соцсети пожаловался на сомнительное содержание последних постов Уэста, в одном из которых был изображен графический символ,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/basketball/news-4913621-kane-uest-ya-pojmal-krisa-pola-s-kim-kardashyan.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Канье Уэст: я поймал Криса Пола с Ким Кардашьян</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQpKr4sWFp02U-okRAqxDLOFMCmsqzDh15nZNcts-ovEoDOUPA2bBWkTVuIJmxyNLW7iVtFXX93" alt="Канье Уэст: я поймал Криса Пола с Ким Кардашьян" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Популярный американский рэпер Канье Уэст заявил, что разыгрывающий «Финикс Санз» Крис Пол состоит в романтических отношениях с его бывшей супругой&nbsp;...</p></div>
            </div>
        </a><a href='https://zerkalo.az/kane-uest-priznalsya-v-lyubvi-gitleru-i-putinu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Канье Уэст признался в любви Гитлеру и Путину - Зеркало.az</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRD5IgE4XbChoRbHBGKcJyybH-sX3_HyBL1QdxJLE5eNLsfFoeUxFGxk461hd683pSQLmuojRrT" alt="Канье Уэст признался в любви Гитлеру и Путину - Зеркало.az" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рэпер Канье Уэст продолжает высказывать свою альтернативную цивилизованной точку зрения. На этот раз он встретился с конспирологом Алексом Джонсом.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5695848'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter снова заблокировал аккаунт Канье Уэста после ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqTVh2ZHHFRQp_OWeuW8m2Lr-xkVciDbyPSH15A2JzGI0EuDcK6vI6tRDDwn080SCpMMHYlwyH" alt="Twitter снова заблокировал аккаунт Канье Уэста после ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американский бизнесмен Илон Маск заявил, что Twitter снова заблокировал аккаунт американского рэпера Канье Уэста (Йе). Накануне господин Уэст дал&nbsp;...</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/shou-biznes/02122022/527340'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Канье Уэст рассказал о симпатии к Гитлеру</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0CXt0kIlOEwpTpBxdniCZcn-nngKZ80btH8KW7VjOaVFFtBSKIPtSD8LGWoymkPBxzLapw4tM" alt="Канье Уэст рассказал о симпатии к Гитлеру" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американский рэпер Канье Уэст выразил симпатию по отношению к Адольфу Гитлеру. Он заявил об этом во время интервью с телеведущим Алексом Джонсом,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/basketball/nba/news/kane-uest-obvinil-byvshuyu-zhenu-kim-kardashyan-v-romane-s-zaschitnikom-finiksa-krisom-polom-2006433/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Канье Уэст обвинил бывшую жену Ким Кардашьян в романе с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTLmzCqKon06jvEDzz7AlCVUhqIUqtlFYCq-MCEto-8AjxpMEeq2jqCzXs3dDm3WTr_53Mhdkzu" alt="Канье Уэст обвинил бывшую жену Ким Кардашьян в романе с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американский хип-хоп-исполнитель Канье Уэст заявил, что у его бывшей жены Ким Кардашьян были отношения с защитником «Финикса» Крисом Полом.</p></div>
            </div>
        </a><a href='https://www.svoboda.org/a/akkaunt-kanje-uesta-v-tvittere-vnovj-zablokirovali-reper-hvalil-gitlera/32158501.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Аккаунт Канье Уэста в твиттере вновь заблокировали. Рэпер ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTxSYp-7tXbES_i20zbPEnJD6GOA-rcltiBLSZ9HIo2ScdxENPqKlZoPYX2-MGIqFbBTgEzhLST" alt="Аккаунт Канье Уэста в твиттере вновь заблокировали. Рэпер ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>О блокировке аккаунта Уэста сообщил владелец Twitter Илон Маск. Он написал, что аккаунт заблокировали за &quot;разжигание ненависти&quot;.</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/6389c7a59a79475ae70fd45c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рэпер Канье Уэст сообщил о романе Ким Кардашьян со звездой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDnQ-_2SHmx8mVDxQTR_TIfQAIWliVr3QJeJuNpfFUoLXoRJjRipcGvKnJNp3aDJNWDqTdDB0D" alt="Рэпер Канье Уэст сообщил о романе Ким Кардашьян со звездой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Канье Уэст заявил, что «поймал» защитника «Финикса» Криса Пола со своей бывшей женой Ким Кардашьян.</p></div>
            </div>
        </a><a href='https://rtvi.com/news/ilon-mask-zablokiroval-akkaunt-kane-uesta-v-twitter-iz-za-kartinki-so-svastikoj/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Илон Маск заблокировал аккаунт Канье Уэста в Twitter из-за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcThP7xFeH1H9dT7RGs-UzdxlJAHfaqL70GZDL4WT1urLE7sJOdim0CCY_NyoIZR06aYMagZvKbi" alt="Илон Маск заблокировал аккаунт Канье Уэста в Twitter из-за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Я сделал все возможное. Несмотря на это, он снова нарушил наши правила против подстрекательства к насилию. Аккаунт будет заблокирован», — заявил Маск.</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/media/news/2022/12/02/953255-kane-uest-otkazalsya-ot-pokupki-parler'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Канье Уэст отказался от покупки популярной у сторонников ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7YKwV8WUWnZI0fzsBfCbdFusSXb_toZpHoiE9PnPDLg0-5zD9PfAF1zn5BRjaXEzXDOYQUMdk" alt="Канье Уэст отказался от покупки популярной у сторонников ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американский рэпер Канье Уэст (теперь известный как Ye) в середине ноября договорился об отказе от покупки соцсети Parler с ее материнской компанией&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}