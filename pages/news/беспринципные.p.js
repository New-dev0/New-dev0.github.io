import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Беспринципные</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Беспринципные"/>
        <meta name="description" content="Trending News about Беспринципные" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Беспринципные</h1>
            <Image width={800} height={500} src="https://cdn.bfm.ru/news/photopreviewextralarge/2022/12/02/kino.jpg" alt="Беспринципные"/>
            <h3>Recent News</h3>
            <a href='https://www.bfm.ru/news/514221'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Совладелец «Уралхима» Дмитрий Мазепин сыграл самого себя ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSF6qINM-B8FnmUSv9-l0jxoDDDss9ofu7C11TGyStMssvXsSWmMERV0CCIP_Bbry33aWikbQ7I" alt="Совладелец «Уралхима» Дмитрий Мазепин сыграл самого себя ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Евгений Ухов редактор портала FILM.ru «Сейчас очень как-то говорить опасно на эту тему, учитывая различные дела о телеграмм-каналах, которые внезапно&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newsler.ru/culture/2022/12/02/dmitrij-mazepin-snyalsya-v-tretem-sezone-seriala-besprincipnye'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Дмитрий и Никита Мазепины снялись в третьем сезоне сериала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSwqv2GV_AWCpXJdFD8Kpb3V0m6eY1rm6BUGZ2ZSVdp4_Cw_jEHN65o1npEup5jeBclM7fMExae" alt="Дмитрий и Никита Мазепины снялись в третьем сезоне сериала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В новом сезоне российского сериала снялся известный предприниматель, председатель совета директоров компании «Уралхим», а также бывший депутат Заксобрания&nbsp;...</p></div>
            </div>
        </a><a href='https://ulpressa.ru/2022/12/02/%D0%B1%D0%B5%D1%81%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%D0%BD%D1%8B%D0%B5-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D1%8F%D1%8E%D1%82-%D0%B2%D0%BB%D0%B8%D1%8F%D0%BD%D0%B8%D0%B5-%D0%BD/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Беспринципные» расширяют влияние: новый сезон сериала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSvd9COrZb-aOzP3TkJ_KFwMJuPBU0ygTuwM_S0RjC2bRRcCGNbDaZnhiWZhTc4lOAeTGlgTP21" alt="«Беспринципные» расширяют влияние: новый сезон сериала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премьера третьего сезона популярного комедийного сериала «Беспринципные» (18+) состоится 1 декабря 2022 года и впервые одновременно в трех&nbsp;...</p></div>
            </div>
        </a><a href='https://momenty.org/people/18822'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уральская актриса снялась в новом сезоне сериала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSjvliwwQrRnwVM2rZl8ScZnsrz08m9AI6pvKe3Tulglu1bJcS3_2J7dSiXibw0f2z7mIV9VK88" alt="Уральская актриса снялась в новом сезоне сериала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Актриса из Кургана снялась в третьем сезоне нашумевшего сериала по рассказам Александра Цыпкина «Беспринципные». Марина Доможирова участвует в съемках с&nbsp;...</p></div>
            </div>
        </a><a href='https://artmoskovia.ru/novyj-sezon-komedii-besprintsipnye-vyjdet-na-kinopoiske-start-i-wink.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новый сезон комедии «Беспринципные» вышел на Кинопоиске ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAX83YXTDqyfIa-q1VS2Yx1-YFwDimJLuubDoiA_Kraw6kOVbLndNvTlLaObIQ7SUB_Zzq_kEc" alt="Новый сезон комедии «Беспринципные» вышел на Кинопоиске ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1 декабря состялась премьера двух эпизодов сериала по мотивам рассказов Александра Цыпкина. Любимые герои в исполнении Павла Деревянко и Оксаны Акиньшиной…</p></div>
            </div>
        </a><a href='https://vologda-poisk.ru/news/kultura/sostoyalas-premera-tretego-sezona-komediynogo-seriala-besprintsipnye'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Состоялась премьера третьего сезона комедийного сериала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS40jNskyh_TfFLpGIIQUDZE3ki7r-hg4PT6bWh7X1E0OAiqyKKRQNRrmsDl0cglL6-A4pQglMH" alt="Состоялась премьера третьего сезона комедийного сериала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В третьем сезоне к роли Славика, который откровенно рассказывает о забавных приключениях очень бог.</p></div>
            </div>
        </a><a href='https://pravda-nn.ru/news/novyj-sezon-seriala-besprintsipnye-pokazhut-kinopoisk-start-i-wink/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новый сезон сериала «Беспринципные» покажут «Кинопоиск ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTs6CAvkGwWrUVsa-3IJJ-8z71Cvntwjj1eklCWgLzYIga2jrqSB_G7tIuLD9-zZHaAIrEpoXny" alt="Новый сезон сериала «Беспринципные» покажут «Кинопоиск ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1 декабря 2022 года впервые одновременно в трех онлайн-кинотеатрах — «Кинопоиск», START и Wink состоится премьера третьего сезона популярного комедийного&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}