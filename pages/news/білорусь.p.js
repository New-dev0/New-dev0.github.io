import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Білорусь</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Білорусь"/>
        <meta name="description" content="Trending News about Білорусь" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Білорусь</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/6/1/6181bf6-mobilization-russia-getty.jpg" alt="Білорусь"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/news/2022/11/27/7378206/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росіяни готуються перекинути свої підрозділи з Білорусі в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThQ3OqauAzlyCjdQ13t-EvfVIjhGpKZozlOaCSSUn4VEUytenLePKZLoPM9iTEf0EEM8LX4t43" alt="Росіяни готуються перекинути свої підрозділи з Білорусі в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ситуація на фронті станом на вечір неділі. Росіяни за цей день завдали 4 ракетних ударів по інфраструктурі у двох областях.</p></div>
            </div>
        </a><a href='https://tsn.ua/ukrayina/viyskoviy-potencial-bilorusi-na-rivni-teroboroni-kiyivskoyi-oblasti-analitik-rozpoviv-pro-funkciyu-zs-rp-2210767.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Військовий потенціал Білорусі на рівні тероборони Київської ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSA-1iE45LSnylGZcNPfhRlAy8QCHXw316BSGz2qpknvmM2gjja7qhKp9xlrBpDYblqUtw4hO09" alt="&quot;Військовий потенціал Білорусі на рівні тероборони Київської ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Функція армії Білорусі - тримати ЗСУ на півночі України. Білорусь не готова до серйозних бойових дій. її єдиним завданням є утримування ЗСУ поблизу&nbsp;...</p></div>
            </div>
        </a><a href='https://delo.ua/politics/rf-gotujetsya-perekinuti-svoyi-pidrozdili-z-bilorusi-do-ukrayini-genstab-407401/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>РФ готується перекинути свої підрозділи з Білорусі до України ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtIMvkzsqxKQ50y3wvLgbJ4VuAaZP1qzOyGVBANLm_DezVnb9yTqzVONvMDXF0JhLQVPQJrl_S" alt="РФ готується перекинути свої підрозділи з Білорусі до України ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Війна позбавила нас можливості заробляти, просимо Вашої підтримки. Підтримати delo.ua. Про це повідомляє Генштаб України. За даними Генштабу, очікується&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ua/svit/svitovi-novyny/20221127-propaganda-falsyfikuye-realnist-povidomlyayuchy-pro-masovu-migracziyu-ukrayincziv-u-bilorus/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша викрила фейк про українців, які нібито масово тікають до ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRU3QZY140K3eIE-MzwdIBCDcLuET3Cuylovzo-ojpnyLBBk4HZbihAyK8pakPEQaV-PDfkaqSJ" alt="Польша викрила фейк про українців, які нібито масово тікають до ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Білоруська пропаганда продовжує фальсифікувати реальність, зокрема, щодо ролі РБ у повномасштабній війні Росії проти України. Про це заявив речник глави.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/rus/news/bilorusi-primarilisya-potoki-bizhentsiv-ukrayini-1669571343.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Білорусі примарилися потоки біженців з України. Польща ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFfcQNaXwcLR1r-IKLQFDeWPI-PVthy1NSCQrNOSJosr_v6ph_W_Jx79CBigA2vhLFgOrnS7GD" alt="Білорусі примарилися потоки біженців з України. Польща ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Білоруси брешуть про те, що юрби українських біженців намагаються прорватися через польсько-білоруський кордон.</p></div>
            </div>
        </a><a href='https://ua.korrespondent.net/world/4538948-u-polschi-vykryly-feik-biloruskoi-propahandy-pro-ukraintsiv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Польщі викрили фейк білоруської пропаганди про українців</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRbVwHpBoy8xjeB8DoBMYjVtCMSNR5NjzYJHOIInREK1D_cFuFVsmW-1Utw8iGJy0WvaOmnpWcX" alt="У Польщі викрили фейк білоруської пропаганди про українців" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мінськ поширює інформацію про нібито масову міграцію українців до Білорусі з боку Євросоюзу. Представник координатора спецслужб Польщі Станіслав Жарін&nbsp;...</p></div>
            </div>
        </a><a href='https://lb.ua/society/2022/11/27/537290_okupanti_gotuyutsya_perekinuti.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Окупанти готуються перекинути окремі підрозділи із Білорусі до ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS64I5CHF_tzNisToIXfFAbX9WLmozYDWmflBbBh9N4kGMGPwTwzKo3ji-q2CSd3xNw83flmXk_" alt="Окупанти готуються перекинути окремі підрозділи із Білорусі до ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Триває переміщення особового складу та військової техніки ворога для комплектування підрозділів, що зазнали втрат. Очікується посилення угруповання військ&nbsp;...</p></div>
            </div>
        </a><a href='https://lviv.media/ukraina/60334-rosijska-armiya-gotuyetsya-perekinuti-nizku-svoyi-pidrozdiliv-iz-bilorusi-v-ukrayinu-genshtab/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Російська армія готується перекинути низку свої підрозділів із ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6zQ7as09ccOSzgz1oCQmLsCUMZYeW1pG7seoPcNavQZXS3-Y5tLHyL2fuGcUj4f-vX4_lxAJB" alt="Російська армія готується перекинути низку свої підрозділів із ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Армія рф готується перекинути окремі підрозділи своїх військ із Білорусі на окуповані території України. Про це йдеться в зведенні Генштабу ЗСУ. «Триває&nbsp;...</p></div>
            </div>
        </a><a href='https://24tv.ua/bilorus-vidala-feyk-pro-potoki-ukrayinskih-bizhentsiv_n2206442'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Білорусі привиділися потоки українських біженців: Польща ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfEzKxQz_GsGFPib3PTemmyb43KW9DbDPIdKVyKYPqaUK4j8BMSc4o7WvzVj8cbYpnG5XyI5hr" alt="Білорусі привиділися потоки українських біженців: Польща ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Білоруська пропаганда поширила дезінформацію про те, що українці начебто втікають від російської збройної агресії до Білорусі. Це спростували у Польщі – 24&nbsp;...</p></div>
            </div>
        </a><a href='https://censor.net/ua/news/3383329/u_minsku_rozpovidayut_nibyto_pro_potoky_ukrayinskyh_bijentsiv_do_bilorusi_cherez_polschu_varshava_sprostovuye'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Мінську розповідають нібито про потоки українських біженців ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRWbd6Nn9J5esPdpE2UPl5IwMeHMa7IlPMrEZKV1FHbaHC0WwpliYf1Mr21IMKw0utv1WGJdVQ4" alt="У Мінську розповідають нібито про потоки українських біженців ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>27.11.22 18:26 - Білорусь бреше про біженців: у Мінську розповідають нібито про потоки українських біженців до Білорусі через Польщу Варшава спростовує.</p></div>
            </div>
        </a>
        </Template></>;
}