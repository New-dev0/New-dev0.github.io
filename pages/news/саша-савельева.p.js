import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Саша Савельева</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Саша Савельева"/>
        <meta name="description" content="Trending News about Саша Савельева" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Саша Савельева</h1>
            <Image width={800} height={500} src="https://7days.ru/pic/5b3/982949/1451389/104.jpg" alt="Саша Савельева"/>
            <h3>Recent News</h3>
            <a href='https://7days.ru/news/sdelala-nebolshoe-obrezanie-sasha-saveleva-ofitsialno-smenila-imya.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Сделала небольшое обрезание»: Саша Савельева ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSrjSVub7SqvJoMhMQ1D0j9eiozlzo5DT7bhxNpS2E8PdhVFxMLuQuODNj3gsUZtw0nxPt3ZAvT" alt="«Сделала небольшое обрезание»: Саша Савельева ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Я просто сделала небольшое обрезание и получилось все то же звучное SASHA SAVE, долго изощряться не пришлось. Все уже было придумано моим родом. Так что&nbsp;...</p></div>
            </div>
        </a><a href='https://bimru.ru/news/167820'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Саша Савельева официально сменила сценическое имя</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ17cnqHXvNtilRGDnF0r5KdPA2sCCQsCPW5iTGzQOSt8raLBsf9mQjLXa5R7gXLZNAPi-Ds6oz" alt="Саша Савельева официально сменила сценическое имя" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Экс-солистка группы “Фабрика” Саша Савельева теперь строит сольную карьеру. Когда несколько лет назад она впервые в своей жизни стала мамой,&nbsp;...</p></div>
            </div>
        </a><a href='https://informing.ru/2022/12/03/sasha-saveleva-objavila-o-vozvraschenii-na-scenu-rf-pod-novym-psevdonimom-sasha-save.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Саша Савельева объявила о возвращении на сцену РФ под ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTUnHWU0JCmp_0Euves706balkgKhtz7YUx2bKuNY5Etr_XTdXEOXCDRgbkO92Yg9krEOizmkat" alt="Саша Савельева объявила о возвращении на сцену РФ под ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Я сделала небольшое обрезание и получилось звучное SASHA SAVE. Долго изощряться мне не пришлось. Все было придумано моим родом. Так что представляю себя», —&nbsp;...</p></div>
            </div>
        </a><a href='https://runews24.ru/show-business/03/12/2022/62c91443c957b407d799e83b61216e07'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Экс-солистка «Фабрики» Саша Савельева вернется на сцену ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSOeQYFskgcRJoExj48oEY9ENfByUeJDHq4SJJnV0FDunLcalTmgMzxz5o5czoE-aGXeoxrSIe9" alt="Экс-солистка «Фабрики» Саша Савельева вернется на сцену ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Экс-солистка музыкальной группы «Фабрика» призналась, что возьмет псевдоним SASHA SAVE, даже несмотря на то, что любит, когда ее зовут полной формой имени —&nbsp;...</p></div>
            </div>
        </a><a href='https://newinform.com/23781329-sasha_savel_eva_gotovitsya_vernut_sya_na_stsenu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Саша Савельева готовится вернуться на сцену</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQM4BKXQ68jjgWCKZ0Y2GKty_RsoxozLXe2ZjKYBRsSYTBghnqdAVd9A5HAJHqcrWnSmmk8vT5k" alt="Саша Савельева готовится вернуться на сцену" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Я просто сделала небольшое обрезание, и получилось все то же звучное SASHA SAVE, долго изощряться не пришлось», — сообщила она в социальных сетях. Вокалистка&nbsp;...</p></div>
            </div>
        </a><a href='https://monavista.ru/article/4756393/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Саша Савельева объявила о возвращении на сцену под новым ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSfnnQ0PjsmMzbP8OLQqMQnrjwRdqzxM8kQbzvnZ64kwW7ZMVJR0ZHlzhTBatoEkaGRgv1X1w49" alt="Саша Савельева объявила о возвращении на сцену под новым ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Высказалась Саша Савельева и о новом псевдониме SASHA SAVE. По её словам, думать над ним долго не пришлось. Она просто ещё больше сократила собственное имя,&nbsp;...</p></div>
            </div>
        </a><a href='https://novostivl.ru/news/20221203/117626/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Экс-участница «Фабрики» Саша Савельева объявила о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQNNbI4W0upmBVgixn6G4gsshEdv38yLUFQAoDzhhHTxs4s2tsNgY1p3OX4lklWxjNPJQ5SFolc" alt="Экс-участница «Фабрики» Саша Савельева объявила о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>3 декабря - NVL. Бывшая участница группы &quot;Фабрика&quot; Саша Савельева намерена вернуться на сцену после «небольшого обрезания» и смены имени.</p></div>
            </div>
        </a>
        </Template></>;
}