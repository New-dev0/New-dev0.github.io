import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Вечерний Ургант</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Вечерний Ургант"/>
        <meta name="description" content="Trending News about Вечерний Ургант" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Вечерний Ургант</h1>
            <Image width={800} height={500} src="https://cdn.spbdnevnik.ru/uploads/block/image/719797/__medium_%D1%83%D1%80%D0%B3%D0%B0%D0%BD%D1%82.jpg.jpg" alt="Вечерний Ургант"/>
            <h3>Recent News</h3>
            <a href='https://spbdnevnik.ru/news/2022-11-16/otets-ivana-urganta-rasskazal-chem-seychas-zanimaetsya-ego-synteleveduschiy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Отец Ивана Урганта рассказал, чем сейчас занимается его сын ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSItIbco5UbXBMcFx9O3tDouCBO7xVS4EmQFVFVjvU2FDglz6eZ2ASfGW9hWZAiCi4N5H6-wVj0" alt="Отец Ивана Урганта рассказал, чем сейчас занимается его сын ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>И объяснил, почему до сих пор не возобновили шоу «Вечерний Ургант». Фото: https://vk.com/urgant_vk?z=photo-312193_457242831%2Fwall-312193_54527.</p></div>
            </div>
        </a><a href='https://www.sportmk.ru/sports/2022/11/15/mikheeva-anonsirovala-skoroe-vozvrashhenie-programmy-vecherniy-urgant.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Михеева анонсировала &quot;скорое возвращение&quot; программы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJItmm8G4WJVWZcAPyza4CyO3YM9vRlwLqHlJZB0mNgCpE7UJmUCXqrmX2LBdcrMFoaMf7jy8l" alt="Михеева анонсировала &quot;скорое возвращение&quot; программы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Алла Михеева дала понять, что шоу «Вечерний Ургант» имеет шансы на возвращение в телеэфир. Актриса опровергла слухи, что после отмены передачи команда&nbsp;...</p></div>
            </div>
        </a><a href='https://www.starhit.ru/novosti/andrei-urgant-ivan-ne-poyavlyaetsya-na-tusovkakh-gde-idioty-artisty-gulyayut-v-rasshitykh-zolotom-kostyumakh-849240/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Андрей Ургант: «Иван не появляется на тусовках, где идиоты ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvJonUgKTkoBPtZRVDjK1rqQGE5TsMdYqJCnwielBeE0FXK8q8d_m6C7Dd5NQhdkFc5OFSppHt" alt="Андрей Ургант: «Иван не появляется на тусовках, где идиоты ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В последние полгода по понятным причинам Иван Ургант не выходит в эфир Первого канала. Его отец рассказал, что думает о затянувшемся отпуске сына.</p></div>
            </div>
        </a><a href='https://53news.ru/mir/andrej-urgant-rasskazal-o-sudbe-vechernego-shou-svoego-syna.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Андрей Ургант рассказал о судьбе вечернего шоу своего сына ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQir9d0-QYLOL_PCVgfVRZ7aHqL3IJB1UTScJRx3NLxb62Z9rPBIK2dkmnClltum4cB_BEiU6dz" alt="Андрей Ургант рассказал о судьбе вечернего шоу своего сына ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Актриса и телеведущая Алла Михеева допустила, что шоу Первого канала «Вечерний Ургант» может вернуться в эфир.</p></div>
            </div>
        </a><a href='https://readovka.news/news/120899'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Андрей Ургант раскрыл всю правду о своем сыне — Readovka ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQh2Xc_SSu-WHWQ-NdQ8rmnNLzmWQPkMYMaImtJs3DXOk5fVQG1Ds8EXhY_MamuwRaIQrK_jYv0" alt="Андрей Ургант раскрыл всю правду о своем сыне — Readovka ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Не так давно Алла Михеева дала Анна Михеева рассказала о судьбе «Вечернего Урганта»Артистка намекнула на возвращение программы поклонникам надежду на то,&nbsp;...</p></div>
            </div>
        </a><a href='https://runews24.ru/show-business/16/11/2022/f7c2277156dba662d423387305351693'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Андрей Ургант: Не понимаю, о чем сейчас можно шутить в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQsa-faS0ul_yfKYaRBAE74Cz7IZDwFnCVd_g8fSzj9OqsKekbkiyoPwxMNKamnt3-xXrcNntT4" alt="Андрей Ургант: Не понимаю, о чем сейчас можно шутить в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>С начала СВО на Украине об Иване Урганте почти ничего не слышно. Изначально в сети предполагали, что телеведущий покинул Россию и перебрался в Израиль, но позже&nbsp;...</p></div>
            </div>
        </a><a href='https://moika78.ru/news/2022-11-15/827720-alla-miheeva-rasskazala-nad-chem-rabotaet-sovmestno-s-urgantom/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Алла Михеева рассказала, над чем работает совместно с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTAadFEiBOEhnhIz6Fm91rd_FVQd9yTclLGKlzWTQtwugDIfPMMJwtK6UspZrSX9713deTb166j" alt="Алла Михеева рассказала, над чем работает совместно с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российская актриса театра и кино, телеведущая Алла Михеева рассказала, что ее коллега по цеху Иван Ургант находится в Москве. При этом она заверила,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}