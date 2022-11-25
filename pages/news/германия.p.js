import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Германия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Германия"/>
        <meta name="description" content="Trending News about Германия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Германия</h1>
            <Image width={800} height={500} src="https://static.mk.ru/upload/entities/2022/10/16/22/articles/facebookPicture/52/22/17/0b/e8d9bf16ecabee40184208269b7794fa.jpg" alt="Германия"/>
            <h3>Recent News</h3>
            <a href='https://www.mknews.de/social/2022/11/25/na-kakom-godu-raspadayutsya-braki-v-germanii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На каком году распадаются браки в Германии</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTX4AhVYr2TALnjLF75_C2_9iElrin8ZUte1JLMtc6Q0RzeLzq0bz6C83IoMVQ9BlC_-I5SktDc" alt="На каком году распадаются браки в Германии" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Средняя продолжительность брака сокращается как в Германии, так и в целом в Европе. Сществует ли на самом деле так называемый проклятый седьмой год брака&nbsp;...</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/11/24/germaniya-perechislit-v-pomoshch-afganistanu-90-mln-evro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Германия перечислит в помощь Афганистану 90 млн евро</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6Pd0orl_AKIR6r92gm6kJ1UN4zZfu9tyLa3qOck2IOZiy-6EcvXzFFzc8ovhv9J1OZtoDGFVf" alt="Германия перечислит в помощь Афганистану 90 млн евро" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Как сообщало EADaily , глава МИД Германии Анналена Бербок и немецкий министр обороны Кристин Ламбрехт обратились к министру финансов страны Кристиану Линднеру с&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mknews.de/social/2022/11/24/germaniya-materinskiy-kapital-i-spravka-ob-otsutstvii-zadolzhennosti.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Германия: Материнский капитал и справка об отсутствии ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSDHL0nEQ5B8wco8XysnJsHVhL47S_CO_T8iuxnaUsiWo05OXEN6ULzr3aOhikRR0mrW59BLki6" alt="Германия: Материнский капитал и справка об отсутствии ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В каждой из описанных процедур нужно проделать дополнительные действия, подготовить документы, есть нюансы и свои сложности. Но сервисное бюро MK Services&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mknews.de/social/2022/11/24/germaniya-kak-pravilno-rastorgnut-dogovor-arendy-kvartiry.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Германия: Как правильно расторгнуть договор аренды квартиры</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_l_EMO97TKjo9QYFeW31xli3HtD8yW2EWhVIdg9B5B7xnm4Ta6pFNG0eanHvk9Nm2at2OYgLg" alt="Германия: Как правильно расторгнуть договор аренды квартиры" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Если квартиросъемщик успеет в течение первых трех рабочих дней месяца, (суббота считается рабочим днем) расторгнуть договор аренды, ему нужно будет платить&nbsp;...</p></div>
            </div>
        </a><a href='https://rossaprimavera.ru/news/58b0efee'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Германия направит на помощь Афганистану 90 миллионов евро</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSGws_jpaXbwCgsQMp1dYNN7rwcImxzNhoae_ZVd-TnzI--x_KXAL6SDRM7wkhlm1oYMg2ZOhMW" alt="Германия направит на помощь Афганистану 90 миллионов евро" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Решение об увеличении гуманитарной помощи народу Афганистана на 90 миллионов евро приняла Германия, заявило германское посольство Афганистана в Дохе 24&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}