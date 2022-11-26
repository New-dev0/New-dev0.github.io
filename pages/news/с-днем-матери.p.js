import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>С Днем матери</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,С Днем матери"/>
        <meta name="description" content="Trending News about С Днем матери" /></Head><Template>
            <h1 style={{fontSize: "30"}}>С Днем матери</h1>
            <Image width={800} height={500} src="https://region15.ru/wp-content/uploads/2022/11/DSC09314-1024x621.jpg" alt="С Днем матери"/>
            <h3>Recent News</h3>
            <a href='https://voronezh-city.ru/communications/comments/detail/43030'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Поздравление с Днем матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Поздравление с Днем матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>26.11.2022 В.Ю.Кстенин Khodirev_VF.jpg. Уважаемые жительницы Воронежа! Дорогие мамы и бабушки! Сердечно поздравляем вас с замечательным праздником – Днем&nbsp;...</p></div>
            </div>
        </a><a href='https://region15.ru/sergej-menyajlo-pozdravil-zhenshhin-severnoj-osetii-s-dnem-materi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сергей Меняйло поздравил женщин Северной Осетии с Днем ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqxu16fWLMXkG_6PCjYZs1hgTlq6EjtsPuos4esJQA3XDNhEdohhS5uixDQRr_rK1LHbG55tES" alt="Сергей Меняйло поздравил женщин Северной Осетии с Днем ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В преддверии Дня матери глава Северной Осетии Сергей Меняйло поздравил многодетных матерей республики. Руководитель региона поблагодарил женщин за&nbsp;...</p></div>
            </div>
        </a><a href='https://inpavposad.ru/novosti/prazdnik/denis-semenov-pozdravil-zhitelnic-pavlovskogo-posada-s-dnem-materi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Денис Семенов поздравил жительниц Павловского Посада с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSgw_jELzyU6lheSWKEYLInXuPF4QnEkLsEk1IpqyBPw4Wg228-VqYFZ11emNvBJy52fsq3M8h7" alt="Денис Семенов поздравил жительниц Павловского Посада с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>25 ноября во Дворце культуры Павлово-Покровский состоялось торжество в честь Дня Матери. Глава городского округа Павловский Посад вручил почетный грамоты&nbsp;...</p></div>
            </div>
        </a><a href='https://www.anapa-official.ru/news/anapchanok-pozdravili-s-dnem-materi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Анапчанок поздравили с Днем матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJiL7Veo5Ml_UVAzYflO2B0Ji1riO-orwSa3Qe8ot8jeuBxu8_Oeg-tisuPHaEY8uAtwbKxV2_" alt="Анапчанок поздравили с Днем матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня в Городском театре прошел концерт «Мама – ангел, дарующий жизнь». Настроение всем его гостьям создавали сразу у входа – им вручали цветы и открытки,&nbsp;...</p></div>
            </div>
        </a><a href='https://krasnogorskriamo.ru/article/uchastnits-kluba-aktivnoe-dolgoletie-v-krasnogorske-pozdravili-s-dnem-materi-602524'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Участниц клуба «Активное долголетие» в Красногорске ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7DrEwZe48USH8fk4pK2pn_4P7mNZsU52iPIT27hqsCc6JDm9VWNpvt-okaAOua3NHBV9uSezH" alt="Участниц клуба «Активное долголетие» в Красногорске ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Участницы клуба успевают быть хранительницами домашнего очага, многодетными мамами и бабушками.</p></div>
            </div>
        </a><a href='https://midag.ru/2022/11/24/c-dnem-materi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>C Днем матери!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTQ7D9-r85HECi_4RFFSrTNIUL09BwQ7-OJvhiSsbWrre9OgKqOGUAhpVCwJFzkh7yPutzeNxvk" alt="C Днем матери!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Дорогие женщины! От имени депутатов горсобрания и от себя лично сердечно поздравляю вас с Днем матери! Самое святое, что есть в нашей жизни – это мама!</p></div>
            </div>
        </a><a href='https://cominf.org/node/1166546886'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Алан Гаглоев поздравил представительниц прекрасного пола с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTby95hfPVIEpYgg1AZDt5f6cJ2WRLzBSGDLukBY5Q4Vlbs2eovovDp3F0yi6Rb-KHGsCQyJWTD" alt="Алан Гаглоев поздравил представительниц прекрасного пола с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;В году есть особенный день, когда мы чествуем наших дорогих и любимых мам. Мама – имя, на которое откликаются миллиарды женщин во всем мире и которое воплощает&nbsp;...</p></div>
            </div>
        </a><a href='https://tvernews.ru/news/292730/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Твери молодых мам поздравили с Днем матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQEgpwVjdCEl2JWZbWnUtk0nk0suGMT4f1Rb-kJcZ8q4Bk038YFo08XtkgvQFLwyZt1d8njhKHh" alt="В Твери молодых мам поздравили с Днем матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Уже больше 20 лет в нашей стране, в последнее воскресенье ноября, отмечают День матери. В этом году он приходится на 27 ноября.</p></div>
            </div>
        </a><a href='https://vestirama.ru/novosti/20221125-14.30.24.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Управляющий директор Уральской Стали поздравил мам и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTeKxMZS5wl1-m2O0PXwBK2_ZKDNVcj-GsHIZlVDSNCsGApg9qNro7XWPfxwFJiqJZW3UWsKEyu" alt="Управляющий директор Уральской Стали поздравил мам и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Дорогие наши мамы и бабушки! Поздравляю вас с Днем матери! Как бы ни менялся мир, роль материнства всегда остается определяющей в судьбе человечества.</p></div>
            </div>
        </a><a href='https://gazeta-obozrenie-birulevo-zapadnoe.ru/2022/11/25/117612/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Совет депутатов поздравил жителей Бирюлева Западного с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgVn7v1O3w9L1_JiAo16G3KFyKz74EqamHfAdoyKyRi615Ce6AwheTUkzqJtmL7BW1ZxKTyVn4" alt="Совет депутатов поздравил жителей Бирюлева Западного с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>День матери отметят в России в последнее воскресенье месяца, 27 ноября. С этим наступающим праздником жителей Бирюлева Западного поздравили депутаты&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}