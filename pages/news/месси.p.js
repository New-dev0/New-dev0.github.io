import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Месси</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Месси"/>
        <meta name="description" content="Trending News about Месси" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Месси</h1>
            <Image width={800} height={500} src="https://resizer.mail.ru/p/2a8d9f32-f688-5eac-81a1-e86d62a0d586/AQAKps4KbDz12Z_Uqe8xWhdLSvTo5kzlRmNGCM7hVuwQZyLkDXgARFETwcCKtxYGY2qq5Wl-BG4U2YrtoZw1h5GN68w.jpg" alt="Месси"/>
            <h3>Recent News</h3>
            <a href='https://hi-tech.mail.ru/news/60615-foto-veka-messi-i-ronaldu-bet-rekordy-v-instagram/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Фото века» Месси и Роналду бьет рекорды в Instagram*</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRyDgquh8gs-S6zTxw812jpezSuOTc4ZZncqcrxetwDVuQbVjIjAsKnPLv8AuHnGPks3a07H3RN" alt="«Фото века» Месси и Роналду бьет рекорды в Instagram*" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лионель Месси и Криштиану Роналду снялись в рекламной компании люксового бренда Louis Vuitton. Кадр опубликовали оба футболиста на своих страницах в соцсети&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4898339-sovmestnyj-snimok-messi-i-ronaldu-okazalsya-smontirovan.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Совместный снимок Месси и Роналду оказался смонтированным</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQSi5mJ_Dd0b73A1FJrNcMq0wdC__3KkDTInGnUUPGJnhM1jyG6ycf489rsNxsqUCNLvSV0WeZR" alt="Совместный снимок Месси и Роналду оказался смонтированным" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Совместный снимок форварда «Манчестер Юнайтед» Криштиану Роналду и форварда «ПСЖ» Лионеля Месси оказался смонтированным. Ранее футболисты в своих соцсетях&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportmk.ru/sports/2022/11/20/foto-shakhmatistov-ronaldu-i-messi-stalo-kultovym-pochemu-ikh-snimali-po-otdelnosti.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фото «шахматистов» Роналду и Месси стало культовым: почему ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQiNB-F79jNcKPoRSTpLJYddW1liRn9qA_h5HCLCRCrVCUJPSB6mywdCRM095WrZnkOWh_hD1uT" alt="Фото «шахматистов» Роналду и Месси стало культовым: почему ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Фото Роналду и Месси, играющих в шахматы, за сутки стало вирусным и самым популярным снимком в соцсетях в истории. Автор - легендарный фотограф Энни&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/messi-vozobnovil-trenirovki-v-obschey-gruppe-sbornoy-argentiny-2000722/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Месси возобновил тренировки в общей группе сборной Аргентины</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJJjSseKWTYjFaq9QwxLZ-6-ATfIQ54dHCHBS6TkWDGSVzGbafGKVj5i5T9W2ZCldETQejSFN4" alt="Месси возобновил тренировки в общей группе сборной Аргентины" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Последние два дня 35-летний аргентинец тренировался отдельно от команды. Отмечалось, что форвард не занимался с командой из?за большой нагрузки на икроножные&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/tribuna/blogs/mama4h/3095214.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Шахматы Месси и Роналду для Louis Vuitton: ничья с тонкой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUic5tcdAjOI_kgDnirBcutUcxBQ4P_REXXr81ahT7eOG-RkXX6ES3aqWFdIZO5NIwfprPMqMM" alt="Шахматы Месси и Роналду для Louis Vuitton: ничья с тонкой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На нем Лео и Криштиану обдумывают ходы за шахматной доской, роль которой выполняет кейс французского бренда. Сам кейс стоит на чемодане – также от Louis Vuitton&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4898731-messi-treniruetsya-v-obschej-gruppe-sbornoj-argentiny-ranee-on-zanimalsya-individualno-2-dnya.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Месси тренируется в общей группе сборной Аргентины. Ранее ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTWy8TeAEbwes4uVdtMvzilpPgmgW3i6_dkg4RCG6Q4iP2J6i_S5lz1QBy3G5LfNOqthFYtrQsA" alt="Месси тренируется в общей группе сборной Аргентины. Ранее ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Капитан и нападающий сборной Аргентины по футболу Лионель Месси тренируется в общей группе национальной сборной, сообщает в своих соцсетях журналист Гастон&nbsp;...</p></div>
            </div>
        </a><a href='http://www.business-gazeta.ru/news/572561'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Набравшее 67 миллионов лайков фото Месси и Роналду ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnfs2tky1Gcy8pSE0vxL2xqIEZJY7VSkIp2A4L478rt-q5CMWWWjiy2giJHEmq9E4gDe9GXNB4" alt="Набравшее 67 миллионов лайков фото Месси и Роналду ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Совместная фотография португальского форварда «Манчестер Юнайтед» Криштиану Роналду и нападающего «Пари Сен-Жермен» Лионелем Месси для рекламы Louis Vuitton&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportmk.ru/sports/2022/11/20/messi-provel-trenirovku-v-obshhey-gruppe-sbornoy-argentiny.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Месси провел тренировку в общей группе сборной Аргентины</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSILa23QitXpOQVRJqMLJzPUz4tME_VTz7HrNBkJIzvWty0UxZkz_rvCrQPD8bbxt4IGshHspjH" alt="Месси провел тренировку в общей группе сборной Аргентины" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября звездный аргентинский форвард пропустил открытую тренировку и занимался в тренажерном зале. Сообщалось, что у Месси были перегружены икроножные мышцы.</p></div>
            </div>
        </a><a href='https://sportmail.ru/football2022/news/53961838/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Месси вернулся в общую группу сборной Аргентины, пишут СМИ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTkQ7xrrpG_sVGfopEP6t2yy1kK5ao8Bkvuts9HChbfs1urjM06DiObYNn0qTEYaBqxWjGTVGV4" alt="Месси вернулся в общую группу сборной Аргентины, пишут СМИ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лионель Месси вернулся к тренировкам в общей группе сборной Аргентины в преддверии старта национальной команды на чемпионате мира в Катаре, сообщает Ole.</p></div>
            </div>
        </a><a href='https://www.sports.ru/football/1113426346-messi-treniruetsya-v-obshhej-gruppe-argentiny.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Месси тренируется в общей группе Аргентины. У него были ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7cZepSGPm9AmvJ9q9LnSbi57fTAU-irukDrhv4DujwCi1kcBET-DceMt_Jokuyq1zhW3kWQnJ" alt="Месси тренируется в общей группе Аргентины. У него были ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sports.ru - 24 года! Все это время вы — наша главная ценность, поэтому сегодня заголовки на главной заменяются на комментарии. Этот переключатель вернет&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}