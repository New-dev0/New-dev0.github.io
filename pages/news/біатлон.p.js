import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Біатлон</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Біатлон"/>
        <meta name="description" content="Trending News about Біатлон" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Біатлон</h1>
            <Image width={800} height={500} src="https://static.espreso.tv/uploads/photobank/267000_268000/267588_GettyImages-1245199639.jpg" alt="Біатлон"/>
            <h3>Recent News</h3>
            <a href='https://espreso.tv/biatlon-vidbulasya-persha-gonka-kubka-svitu-v-novomu-sezoni'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Біатлон: відбулася перша гонка Кубка світу в новому сезоні</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQlyl_gnYt6uliDVf21rWjib_29OT2HIJ8VWeiaMHZ0432aVd5d7rpOwPkPtdiLoKtLFC7rGvU" alt="Біатлон: відбулася перша гонка Кубка світу в новому сезоні" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У фінському Контіолахті чоловічою індивідуальною гонкою на 20 км стартував новий сезоні Кубка світу - Читайте більше про новий біатлонний сезон на Еспресо.</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/ukr/sport/biathlon/sensatsijnoyu-gonkoyu-startuvav-kubok-svitu-z-biatlonu-rezultati-ukraintsiv.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сенсаційною гонкою стартував Кубок світу з біатлону ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSibSGwr2RcCOtmTPv7KGcU7SNgNy0fegkFgz7E0xksbQTPeA2HUhMg79vDyslYKs6lS7C2kOst" alt="Сенсаційною гонкою стартував Кубок світу з біатлону ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>15,1 т. Лише перевірена інформація в нас у Telegram-каналі Obozrevatel та Viber. Не ведіться на фейки!</p></div>
            </div>
        </a><a href='https://ua.tribuna.com/uk/biathlon/1000000028476-ivan-krulko-vpervye-v-ukraine-utverzhdena-oblastnaya-pro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Іван Крулько: «Вперше в Україні затверджено обласну програму ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRM3IYz-8BCAESKkDKNFUasaWKb5_iN63vfjXLQ1gq3YowICHEMFi4soVlGKcqNxqLWpgrmfdLT" alt="Іван Крулько: «Вперше в Україні затверджено обласну програму ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Дякую Чернігівській обласній раді та особисто голові Військово-цивільної адміністрації В&#39;ячеславу Анатолійовичу Чаусу за важливий вклад у розвиток біатлону. Це&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/biathlon/article-4910125-kubok-mira-po-biatlonu-2022-2023-pochemu-smotret-gonki-bez-uchastiya-rossijskih-biatlonistov-ne-interesno.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Спортсмены не виноваты. Почему Кубок мира по биатлону без ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSMldwuJOnTHjZbvOgnRR92zMMgzG51GNFxbgezSf-QuBYvV45Bx7-tbM24ZsWuxZn6zauxoALd" alt="Спортсмены не виноваты. Почему Кубок мира по биатлону без ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Без России мировой биатлон не умрёт, как и любой другой вид спорта. Но и лучше тоже не станет.</p></div>
            </div>
        </a><a href='http://www.golos.com.ua/news/172025'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Біатлон. Сезон-2022/2023 почнеться в Контіалагті</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQ7niEVFn0F7ldU8IbT5G2H-LQ5SlDALyBFi8vKzu0jR3nrwupLsViIIEwV8IHTvSPyo6OYA" alt="Біатлон. Сезон-2022/2023 почнеться в Контіалагті" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сьогодні, 29 листопада, у фінському Контіолагті перший етап Кубка світу, а разом із ним і сезон 2022/23 загалом, стартує чоловічими індивідуальними перегонами.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/ponsiluoma-vigrav-pershiy-biatlonniy-start-1669732168.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Понсилуома выиграл первый биатлонный старт сезона, лучший ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1jtsRSDpCzQ4_aSWiBl-UOpmzgNAbF_fN00Igw1KZkKU1capxlIzEdaalyG1HTQ3dUTIlIBan" alt="Понсилуома выиграл первый биатлонный старт сезона, лучший ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Победой шведского биатлониста Мартина Понсилуомы завершился спринт на первом этапе Кубка мира нового сезона. Украинские спортсмены не смогли навязать&nbsp;...</p></div>
            </div>
        </a><a href='https://ua.tribuna.com/biathlon/1000000028476-ivan-krulko-vpervye-v-ukraine-utverzhdena-oblastnaya-pro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иван Крулько: «Впервые в Украине утверждена областная ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRM3IYz-8BCAESKkDKNFUasaWKb5_iN63vfjXLQ1gq3YowICHEMFi4soVlGKcqNxqLWpgrmfdLT" alt="Иван Крулько: «Впервые в Украине утверждена областная ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Федерации биатлона Украины Иван Крулько рассказал о развитии спорта в областях.«Впервые в Украине утверждена областная программа развития&nbsp;...</p></div>
            </div>
        </a><a href='https://ru.espreso.tv/biatlon-sostoyalas-pervaya-gonka-kubka-mira-v-novom-sezone'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Биатлон: состоялась первая гонка Кубка мира в новом сезоне</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQlyl_gnYt6uliDVf21rWjib_29OT2HIJ8VWeiaMHZ0432aVd5d7rpOwPkPtdiLoKtLFC7rGvU" alt="Биатлон: состоялась первая гонка Кубка мира в новом сезоне" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В финском Контиолахти мужской индивидуальной гонкой на 20 км стартовал новый сезон Кубка мира - Читайте больше о новом биатлонном сезоне на Еспресо.</p></div>
            </div>
        </a><a href='https://sportarena.com/uk/winter-sports/biathlon/kubok-svitu-z-biatlonu-pryama-translyatsiya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кубок світу з біатлону. Пряма трансляція чоловічих ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfuZYMVMAjtegZVmVkYXOB5KUhaiz8giaNhQYZtl79GVH12OLH1vf50q1clCzQG_HvEjN6F7Rk" alt="Кубок світу з біатлону. Пряма трансляція чоловічих ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>29 листопада чоловічою індивідуальною гонкою у фінському Контіолахті стартує Кубок світу з біатлону. Індивідуальні перегони на 20 кілометрів розпочнуться о&nbsp;...</p></div>
            </div>
        </a><a href='https://ua.korrespondent.net/sport/wintersports/4539610-u-kontiolakhti-startuvav-kubok-svitu-z-biatlonu-sezonu-202223'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Контіолахті стартував Кубок світу з біатлону сезону-2022/23</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTlhtreHh8cNKdigffwDWGG5KdylpXbuGeuq2B_LWx_bl6eKHWcKy8gpg_7AGL5eOhY2heDrPin" alt="У Контіолахті стартував Кубок світу з біатлону сезону-2022/23" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Українські спортсмени не порадували результатами у перших перегонах у Фінляндії.</p></div>
            </div>
        </a>
        </Template></>;
}