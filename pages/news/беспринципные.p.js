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
                <p style={{marginLeft: "15px"}}>Евгений Ухов редактор портала Film.ru «Сейчас очень как-то говорить опасно на эту тему, учитывая различные дела о телеграм-каналах, которые внезапно оказываются&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newsler.ru/culture/2022/12/02/dmitrij-mazepin-snyalsya-v-tretem-sezone-seriala-besprincipnye'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Дмитрий и Никита Мазепины снялись в третьем сезоне сериала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSwqv2GV_AWCpXJdFD8Kpb3V0m6eY1rm6BUGZ2ZSVdp4_Cw_jEHN65o1npEup5jeBclM7fMExae" alt="Дмитрий и Никита Мазепины снялись в третьем сезоне сериала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В новом сезоне российского сериала снялся известный предприниматель, председатель совета директоров компании «Уралхим», а также бывший депутат Заксобрания&nbsp;...</p></div>
            </div>
        </a><a href='https://gazeta-rybinsk.ru/2022/12/03/110364'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Беспринципные» расширяют влияние | новости#</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0iFMzSzqvIDPZ4guj6ROX8zIrhpXU7OhRRw-sknP53IYSk5LqB8ZGjpE6O6Vx0-g8AszFQiqV" alt="«Беспринципные» расширяют влияние | новости#" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Администратор. Новый сезон сериала покажут «Кинопоиск», START и Wink. Премьера третьего сезона популярного комедийного сериала «Беспринципные» состоится 1&nbsp;...</p></div>
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
        </a><a href='https://kirovpravda.ru/dmitriy-mazepin-s-synom-nikitoy-snyalis-v-seriale-besprintsipnye-18/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Дмитрий Мазепин с сыном Никитой снялись в сериале ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6Q-AgLj3QIvdFM_HqbJVSMCHgY5isrStMXENLczO9ehocSyo_HcdUvAdBK4QovZ3-M-TcFk_6" alt="Дмитрий Мазепин с сыном Никитой снялись в сериале ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Известный миллиардер, связанный с Кировской областью, сыграл роль в фильме. Премьера третьего сезона комедийного сериала «Бе&nbsp;...</p></div>
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