import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День матери</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День матери"/>
        <meta name="description" content="Trending News about День матери" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День матери</h1>
            <Image width={800} height={500} src="https://bloknot-taganrog.ru/upload/iblock/ce1/kgu3lnm6cpw6550is1ulh5e4tbm709fj/den-materi.jpg" alt="День матери"/>
            <h3>Recent News</h3>
            <a href='https://bloknot-taganrog.ru/news/segodnya-v-taganroge-prazdnuyut-den-materi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сегодня в Таганроге празднуют День матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS7xYenPcGUjGDf4SbyZkszMUo-moS-HCYZnVJTIsWhODpzvHN8cOj04YATARzTanfj_ONM93mW" alt="Сегодня в Таганроге празднуют День матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Согласно Указу Президента Российской Федерации № 120 от 30 января 1998 года, такой чудесный праздник отмечают в последнее воскресенье ноября. Он создан, чтобы&nbsp;...</p></div>
            </div>
        </a><a href='https://readovka.news/news/122494'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>27 ноября вся страна отмечает День матери — Readovka.news</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT3bLu_HA6wlmDQfxQwFhY86Y9rIHDrEdaiEUIvmVkOZJIgnNorvXUJjpm8QaCYv4VyBiw9d9A7" alt="27 ноября вся страна отмечает День матери — Readovka.news" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Эмилия Руднева сегодня в 21:39. Империя. Благодарные за подаренную жизнь дети поделились своими эмоциями. Корреспондент Readovka пообщался с москвичами,&nbsp;...</p></div>
            </div>
        </a><a href='https://ulpressa.ru/2022/11/27/%D0%B2-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8-%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5-%D1%83%D0%BB%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2%D1%86%D1%8B-%D1%80%D0%B0%D1%81/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В День матери известные ульяновцы рассказали о своих мамах</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSvsafH4i-ysFUu6qpLgX4fDZfxecYuO88WsfufIgygNZ64h9JpHZX0GpMzIG_Cq-ttXI4qUMae" alt="В День матери известные ульяновцы рассказали о своих мамах" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В последнее воскресенье ноября в России отмечают День матери. Главная традиция праздника — поздравлять мам и беременных женщин.</p></div>
            </div>
        </a><a href='https://www.bashinform.ru/news/social/2022-11-27/v-rossii-segodnya-otmechaetsya-den-materi-3047436'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В России сегодня отмечается День матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkpD9fcyTEQjA6OZ-TGpDGUk8ZU6WbE_Ea4Log_dpJQJRhxrl3iLxJH0BtmTR7rE2bI_YLFTnu" alt="В России сегодня отмечается День матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Праздник формально не получил продолжения в советский период - материнство чествовали в рамках международного женского дня 8 марта. Однако, в СССР существовали&nbsp;...</p></div>
            </div>
        </a><a href='https://grozny-inform.ru/news/society/146040/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сегодня в России отмечается День матери | Информационное ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRDC0ULLXVwZLKwONRekUCBrt39Bm2x-ud4Xoen0VLOjLUHygA5f9a9qqT2PUPXeEyOgR-y7rzi" alt="Сегодня в России отмечается День матери | Информационное ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Каждое последнее воскресенье ноября в России отмечается праздник - День матери. В 2022 году он выпадает на 27 ноября, в этот день дети традиционно&nbsp;...</p></div>
            </div>
        </a><a href='https://apostrophe.ua/ua/news/society/2022-11-27/den-materi-v-ukraine-chto-vajno-pomnit-pro-datu-prazdnika/284786'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День матері в Україні: що важливо пам&#39;ятати про дату свята</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYCi7nO4Uc5nN5zPL-8VwkAdc2dsMwZaOUxkG1ZognirgRhXCOgSriBEBRx__zkKFwsDp0nkS_" alt="День матері в Україні: що важливо пам&#39;ятати про дату свята" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Україні, як і в багатьох європейських країнах, День матері щорічно святкують у другу неділю травня, про що свідчить указ президента від 10 травня 1999&nbsp;...</p></div>
            </div>
        </a><a href='https://www.niann.ru/?id=586279'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Юрий Шалабаев: &quot;День матери - один из самых тёплых и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSAWWECPO6UCz7O6P-SHE33psYl8k0xDwIlpYa5ETmOaZn2POvvQefBZl6Q7BNCYxDXkEgODx0h" alt="Юрий Шалабаев: &quot;День матери - один из самых тёплых и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>душе. Матери дарят нам жизнь, свою бескорыстную и бесконечную любовь&quot;, - говорится в тексте поздравления. &quot;Сначала они учат нас ходить и говорить, дают первые&nbsp;...</p></div>
            </div>
        </a><a href='https://belros.tv/news/obschestvo/v-rossii-otmechayut-den-materi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В России отмечают День матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUpAfSjnn1S29Hpm1RImnZgj8Tx9Sp05yOgU0H6OMuKIi2hVFpjupj0ZL-EIYXh8zZkSjjgJIN" alt="В России отмечают День матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава государства отметил, что это не какой-то пафосный шумный праздник, а день, который наполнен особым, очень добрым содержанием и подчеркивает присущее всем&nbsp;...</p></div>
            </div>
        </a><a href='https://apostrophe.ua/news/society/2022-11-27/den-materi-v-ukraine-chto-vajno-pomnit-pro-datu-prazdnika/284786'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День матери в Украине: что важно помнить про дату праздника</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYCi7nO4Uc5nN5zPL-8VwkAdc2dsMwZaOUxkG1ZognirgRhXCOgSriBEBRx__zkKFwsDp0nkS_" alt="День матери в Украине: что важно помнить про дату праздника" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Украине, как и во многих европейских странах День матери ежегодно празднуют во второе воскресенье мая, о чем свидетельствует указ президента от 10 мая&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tvtomsk.ru/news/81530-den-materi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День матери: 5 простых завтраков, которыми можно порадовать ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYMypU8LDKaIM7iFcZC8NAa4twfNpiHQNZaeKQsjxBwXRESRNDazYui6RpCuuBZLBVe0_fQtEH" alt="День матери: 5 простых завтраков, которыми можно порадовать ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Каждое последнее воскресенье ноября в России отмечается День матери. В этот праздник принято говорить слова благодарности самому дорогому человеку— маме.</p></div>
            </div>
        </a>
        </Template></>;
}