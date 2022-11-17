import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Камила Валиева</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Камила Валиева"/>
        <meta name="description" content="Trending News about Камила Валиева" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Камила Валиева</h1>
            <Image width={800} height={500} src="https://img.championat.com/news/social/b/67/4891043.jpg" alt="Камила Валиева"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/figureskating/article-4891043-vada-trebuet-u-cas-diskvalificirovat-kamilu-valievu-na-chetyre-goda-i-otobrat-u-rossii-zoloto-olimpiady-onlajn-lajv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ВАДА требует забанить Валиеву на четыре года и отобрать все ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYBhJX97hQKBVVAjkz0OpeTnxxKf-dwUGwd9q7R7uD3V-_rPqHpHSh53Q1x8nCmeTTKX2KQO5_" alt="ВАДА требует забанить Валиеву на четыре года и отобрать все ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Всемирное антидопинговое агентство (ВАДА) требует от Спортивного арбитражного суда (CAS) решения о нарушении Валиевой антидопинговых правил, а также вынести&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tatar-inform.ru/news/do-fonarya-ili-net-pocemu-zeleznaya-kamila-valieva-stradaet-iz-za-osibok-vzroslyx-5886543'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«До фонаря» или нет: почему железная Камила Валиева ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQR41fqB7fHJYuAcxVe7-e5q1Tw6MLgHMmpUYEZcsUS5GP-W5MD5GM0b8DJYFEoawqj8H03kcMb" alt="«До фонаря» или нет: почему железная Камила Валиева ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Всемирное антидопинговое агентство (WADA) требует наложить четырехлетнюю дисквалификацию на российскую фигуристку Камилу Валиеву. На Западе также хотят&nbsp;...</p></div>
            </div>
        </a><a href='https://www.starhit.ru/novosti/kamilu-valievu-otstranyayut-na-4-goda-za-doping-i-zabirayut-ee-zoloto-olimpiadyi-287412/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Камилу Валиеву отстраняют на 4 года за допинг и забирают ее ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVEUFVUerz7JCzz3Map8Rl4pEOyLHdqqv4_G60-iPO7Bw1hiuKNU7DtTvYgeelfjZQxt1FupU_" alt="Камилу Валиеву отстраняют на 4 года за допинг и забирают ее ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Более полугода Камила Валиева, ее команда, а также многочисленные фанаты ждали вердикта РУСАДА в деле о допинге. Представители организации сообщили о&nbsp;...</p></div>
            </div>
        </a><a href='https://readovka.news/news/120505'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Российскую фигуристку Камилу Валиеву хотят ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQd-WhGgpFiufOXzeFWC6LdZdPjSocNbNrZknC72d1M71yx1MvsAAZ9DYWpMIQfVSOdBGb0fvKY" alt="Российскую фигуристку Камилу Валиеву хотят ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Альберт Корса 14.11.2022, 15:17. Камила Валиева. Спорт. ВАДА обратилось к CAS. Камила Валиева, российская фигуристка, завоевавшая золотую медаль на&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/figure-skating/news/rossiyskaya-figuristka-katarina-gerboldt-otvetila-na-vopros-smozhet-kamila-valieva-vernutsya-v-sport-posle-vozmozhnoy-diskvalifikacii-1998357/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Гербольдт ответила на вопрос, сможет Валиева вернуться в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSfQiFi-_1JI02OV2EhDMeYP5hSMWaYWIu2EraOSuRgro3ykZzuFq4FSU6Bdqvnwq1GQRKHDkgo" alt="Гербольдт ответила на вопрос, сможет Валиева вернуться в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Сложно сказать, хватит ли у нее мотивации ждать четыре года, сможет ли она найти в себе силы. Сложный вопрос, думаю, его лучше задать ей. Точно только она&nbsp;...</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/63721fe19a79476f2c106195'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WADA потребовало от CAS дисквалифицировать Валиеву на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTYgJwa-ZFkwPWnWJdIEEGiSpo13OxHx8nSi-lUsTfyC1PDbosFM1jLxlzGeyoaKgxDQZi4p8KL" alt="WADA потребовало от CAS дисквалифицировать Валиеву на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CAS начал арбитражное производство по заявлению WADA, которое не устроило отсутствие быстрого решения по делу фигуристки Камилы Валиевой. WADA требует&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5667557'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WADA самых строгих правил</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQzZZJ1B0f5Z61Vqz4stObFKqcw7UrmJdUW4Fpl-q2YzLlvV2XYDAJtg3G25Uc3LqacLlL4QOiX" alt="WADA самых строгих правил" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Всемирное антидопинговое агентство (WADA) намерено добиться чрезвычайно жесткого наказания для лучшей российской фигуристки Камилы Валиевой,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}