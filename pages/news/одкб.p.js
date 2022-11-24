import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ОДКБ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ОДКБ"/>
        <meta name="description" content="Trending News about ОДКБ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ОДКБ</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/7/3/7377718_fb_image_rus_2022_11_23_23_05_38.png" alt="ОДКБ"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/rus/news/2022/11/23/7377718/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Премьер Армении отказался подписать ключевые решения ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTt34Qit3uI-NPMELy3_IEUIxdb3FGaq_GHoDXa8LDs3x3UiYRnZjMMyMEFlgICUdmqxtF_EWnJ" alt="Премьер Армении отказался подписать ключевые решения ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премьер-министр Армении Никол Пашинян отказался подписать главные решения саммита ОДКБ по итогам прошедшей в Ереване встрече лидеров организации.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/23/7377718/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Прем&#39;єр Вірменії відмовився підписати ключові рішення саміту ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSU81kpWyEzOwqtJmVuE9pvoNNPZz6Tg3FF_pBzZMVXZkSruZzWcmIae7ZhKKoMWJalZ__dot31" alt="Прем&#39;єр Вірменії відмовився підписати ключові рішення саміту ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премєр-міністр Вірменії Нікол Пашинян відмовився підписати головні рішення саміту ОДКБ за підсумками зучтрічі лідерів організації, яка проходила у Єревані.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/odkb-zagrozhue-rozval-pashinyan-vlashtuvav-1669229873.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ОДКБ грозит развал? Пашинян устроил демарш, а Лукашенко ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQbSSGKKkrbR6GtY38dBGEEuzoJyXa5NFUj08dwrrbfVm3PMGl6h5n2vlNVslnl_TEMwXQz1eiI" alt="ОДКБ грозит развал? Пашинян устроил демарш, а Лукашенко ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лидеры Армении и Беларуси отличились заявлениями на саммите ОДКБ, из которых следует, что организации может грозить развал.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/24/7377726/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко порассуждал о распаде ОДКБ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQN9zWKHDQHli2-61oNEA0D90YEHYvgFTQzOlYeXSBam6vKAmKVAyM40r-POTC3vYc5ZYRIdIHS" alt="Лукашенко порассуждал о распаде ОДКБ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самопровозглашенный президент Беларуси Александр Лукашенко заявил, что становится все более распространенным мнение, что если Россия проиграет войну в&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/svit/nemaye-zoni-vidpovidalnosti-nemaye-organizaciyi-samit-putinskoyi-odkb-zakinchivsya-demarshem-virmeniyi-2208391.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Немає зони відповідальності — немає організації”: саміт ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRHAdYfZrFM092PYk9B7nDqBSo_eBF9Bf0ZQA677qdUzaKlJ21PtjE_0meTFbK5xqebrPgHvlvN" alt="&quot;Немає зони відповідальності — немає організації”: саміт ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пашинян відмовився підписати підсумковий документ саміту ОДКБ через відсутність політичної оцінки агресії Азербайджану.</p></div>
            </div>
        </a><a href='https://espreso.tv/pashinyan-vchiniv-demarsh-na-samiti-odkb-vidmovivshis-pidpisuvati-spilni-dokumenti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пашинян вчинив демарш на саміті ОДКБ, відмовившись ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNp3_CqEBiRi-h_G7Gz4IGQNxMX61hzGzBPD6TVUVbnDHekjafcAbOaC6JkERG5jgtYt7Dhs7-" alt="Пашинян вчинив демарш на саміті ОДКБ, відмовившись ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прем&#39;єр-міністр Вірменії на саміті ОДКБ в Єревані відмовився підписувати проєкти спільних декларацій і документи про державні заходи щодо надання допомоги&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aex.ru/news/2022/11/23/250501/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Денис Мантуров назначен председателем Межгосударственной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTCMCjmK4WSyrOX_ljCjfya7uVp5ZzFGiDSeoUbkb23CSKDLNq5OpnGhy_J6R7m4QIspESao9rg" alt="Денис Мантуров назначен председателем Межгосударственной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>23 ноября 2022 г., AEX.RU – Вице-премьер РФ - глава Минпромторга РФ Денис Мантуров назначен председателем межгосударственной комиссии по&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/voennye-novosti/538259-nesmotrya-na-protesty-putin-pribyl-v-erevan-na-zasedanie-odkb-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Несмотря на протесты: Путин прибыл в Ереван на заседание ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSbqVw4zgyw3LJzuWwHuTC-2ln_j_zx8iv1ZJ-ZqBDFScPnO6lwZSpSfvPkKl2vjWZNJ1A8Age2" alt="Несмотря на протесты: Путин прибыл в Ереван на заседание ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В аэропорту главу страны-агрессора встретил премьер-министр Армении Никол Пашинян. Related video. Президент России Владимир Путин в среду, 23 ноября,&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/uk/voennye-novosti/538259-nesmotria-na-protesty-putin-pribyl-v-erevan-na-zasedanie-odkb-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Попри протести: Путін прибув до Єревану на засідання ОДКБ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSbqVw4zgyw3LJzuWwHuTC-2ln_j_zx8iv1ZJ-ZqBDFScPnO6lwZSpSfvPkKl2vjWZNJ1A8Age2" alt="Попри протести: Путін прибув до Єревану на засідання ОДКБ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В аеропорту главу держави-агресорки зустрів прем&#39;єр-міністр Вірменії Нікол Пашинян. Related video. Президент Росії Володимир Путін у середу, 23 листопада,&nbsp;...</p></div>
            </div>
        </a><a href='https://news.liga.net/politics/news/premer-armenii-otkazalsya-podpisyvat-itogovye-dokumenty-sammita-odkb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Премьер Армении отказался подписывать итоговые документы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7OoJaBuhiiUaHk1ifpejGxhyQCkekU-qBNdtTgq7Il9xBa4S9N6W_45sxsk3igeZETgP_90T1" alt="Премьер Армении отказался подписывать итоговые документы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Никол Пашинян не поддержал проекты декларации Совета коллективной безопасности ОДКБ и документа о совместных мерах по оказанию помощи Армении. никол пашинян&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}