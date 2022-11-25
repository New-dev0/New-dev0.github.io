import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ukrenergo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ukrenergo"/>
        <meta name="description" content="Trending News about Ukrenergo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ukrenergo</h1>
            <Image width={800} height={500} src="http://ipress.ua/media/gallery/full/u/k/ukrenergo_6393e.jpg" alt="Ukrenergo"/>
            <h3>Recent News</h3>
            <a href='http://ipress.ua/news/ukrenergo50_potreb_krainy_vzhe_zabezpechyly_vyrobnyky_elektroenergii_336350.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Укренерго: 50% потреб країни вже забезпечили виробники ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVRR8G2GFbAUY3SXMcVTeSomNWrRKz6K3IrkVfwkdqCxeBAzRz2ZTXd3kjjF9jUGgOhZZkvWM3" alt="Укренерго: 50% потреб країни вже забезпечили виробники ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Національний оператор енергомереж &quot;Укренерго&quot; повідомив, що станом на вечір виробники електроенергіі забезпечили приблизно 50% потреб споживання у країні.</p></div>
            </div>
        </a><a href='https://www.epravda.com.ua/news/2022/11/24/694210/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ситуація в енергосистемі складна, але контрольована – Укренерго</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQml56grbLCTDSKgPkMMU5QEQ9Uucrr0E_3KZXKNQXxitNq8FkSgk93VRRs0658KP4PkDY44m0K" alt="Ситуація в енергосистемі складна, але контрольована – Укренерго" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>НЕК “Укренерго” після масованих ракетних обстрілів напередодні реалізує відповідний протокол дій по поверненню блоків електростанцій в роботу та разом з&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/economics/energetics/v-ukrenergo-rozpovili-kogo-budut-pidklyuchati-v-pershu-chergu-12055566.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В &quot;Укренерго&quot; розповіли, кого будуть підключати в першу чергу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhj1aJCOJh_o1ZwmJ9C7HugKATe-hR8WDKr5rbkjVU4wE2K-LiRIxvyZHkmR1r4hsCAQz8xkVr" alt="В &quot;Укренерго&quot; розповіли, кого будуть підключати в першу чергу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Енергосистема відновлюється після сьомої масованої хвилі російських ракетних ударів, в першу чергу загоюють об&#39;єкти енергетичної інфраструктури.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-economy/3621334-virobniki-elektroenergii-zabezpecili-blizko-50-potreb-spozivanna-ukrenergo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Виробники електроенергії забезпечили близько 50% потреб ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSrxQ0I2fsxzpXpKDIWXNcH_XWzWMT3guQl1WaRx2WQDL9aAIPAWENM0XxtV5JOvJEBxjth880u" alt="Виробники електроенергії забезпечили близько 50% потреб ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Виробники електроенергії станом на 19:00 годину 24 листопада забезпечили близько 50% потреб споживання в Україні, поступово набирають потужність всі атомні&nbsp;...</p></div>
            </div>
        </a><a href='https://finbalance.com.ua/news/ukrenerho-poki-shcho-elektroenerhi-vistacha-shchob-zabezpechiti-50-popitu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Укренерго&quot;: електроенергії вистачає, щоб забезпечити 50 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQXpd2eBKO-J2LFOK2glGkCcqvF5jR7JwT2Q9B2UjEC2e8EwMJBT81Kvk-_i4yHJVSDvHUMrX5f" alt="&quot;Укренерго&quot;: електроенергії вистачає, щоб забезпечити 50 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Укренерго&quot; повідомляє, що станом на 19:00 виробники електроенергії забезпечили близько 50% потреб споживання в країні. Вже працює значна частина&nbsp;...</p></div>
            </div>
        </a><a href='https://promin.cv.ua/2022/11/24/v-ukrenerho-ne-mozhut-nazvaty-tochni-terminy-povnoho-vidnovlennia-svitla.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В &quot;Укренерго&quot; не можуть назвати точні терміни повного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCA5bx80HdeOfidZ0mGGS_osRCszRFD34zGmsqiIaQXrRct2pW24f69lJOfblCGYrFW_2ZaNhy" alt="В &quot;Укренерго&quot; не можуть назвати точні терміни повного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Електроенергією забезпечено близько 50% потреб споживання в країні В НЕК Укренерго повідомили, що станом на 19:00 виробники електроенергії забезпечили&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/economics/energetics/v-ukrenergo-rasskazali-kogo-budut-podklyuchat-v-pervuyu-ochered-12055569.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В &quot;Укрэнерго&quot; рассказали, кого будут подключать в первую очередь</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhj1aJCOJh_o1ZwmJ9C7HugKATe-hR8WDKr5rbkjVU4wE2K-LiRIxvyZHkmR1r4hsCAQz8xkVr" alt="В &quot;Укрэнерго&quot; рассказали, кого будут подключать в первую очередь" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Энергосистема восстанавливается после седьмой массированной волны российских ракетных ударов, в первую очередь заживляют объекты энергетической&nbsp;...</p></div>
            </div>
        </a><a href='https://sud.ua/ru/news/ukraine/255042-situatsiya-slozhnaya-no-kontroliruemaya-v-ukrenergo-rasskazali-o-posledstviyakh-raketnogo-udara-rf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ситуация сложная, но контролируемая: в «Укрэнерго ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSEOZgsGKnX4_Uoh0n4FFjOpbbz9xJOao8elAhlkuF626Kd_2WVDoTSLeRDTBsb9cYS18r7xa2i" alt="Ситуация сложная, но контролируемая: в «Укрэнерго ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В первую очередь заживляются объекты критической инфраструктуры по всей стране: водоканалы, теплокоммунэнерго, системы водоотведения и т.д.</p></div>
            </div>
        </a><a href='https://ru.interfax.com.ua/news/economic/874438.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В &quot;Укрэнерго&quot; рассказали, планирует ли Украина закупать э/э у ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjj8D2k-juDDC_KKljvoJWLtrwW7SttXaRVC_rz3aS4xvyhijQPr1cp8ciYi5dpWlbWmafkHgr" alt="В &quot;Укрэнерго&quot; рассказали, планирует ли Украина закупать э/э у ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>НЭК &quot;Укрэнерго&quot; обеспечивает возможность импорта электроэнергии из Европы в Украину в объеме 500 мВт, однако для этого нужен специальный механизм, который в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ukrinform.ru/rubric-economy/3621335-proizvoditeli-elektroenergii-obespecili-okolo-50-potrebnostej-ukrenergo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Производители электроэнергии обеспечили около 50 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSrxQ0I2fsxzpXpKDIWXNcH_XWzWMT3guQl1WaRx2WQDL9aAIPAWENM0XxtV5JOvJEBxjth880u" alt="Производители электроэнергии обеспечили около 50 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Производители электроэнергии по состоянию на 19:00 24 ноября обеспечили около 50% потребностей потребления в Украине, постепенно набирают мощность все&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}