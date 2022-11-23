import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Роналду</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Роналду"/>
        <meta name="description" content="Trending News about Роналду" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Роналду</h1>
            <Image width={800} height={500} src="" alt="Роналду"/>
            <h3>Recent News</h3>
            <a href='https://suspilne.media/322748-mu-oficijno-rozirvav-kontrakt-z-kristianu-ronaldu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Манчестер Юнайтед&quot; офіційно розірвав контракт з Кріштіану ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTx3oWXx-Nr3KUdrnn726816TNIYqhlJcPKMfuFMd3QJmeqtt_VqkszK6LqCA-yq9OduICuKZ8H" alt="&quot;Манчестер Юнайтед&quot; офіційно розірвав контракт з Кріштіану ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Англійський клуб припинив співпрацю з португальцем ще перед його дебютним матчем на ЧС-2022. &quot;Манчестер Юнайтед&quot; офіційно розірвав контракт з португальським&nbsp;...</p></div>
            </div>
        </a><a href='https://racurs.ua/ua/n177078-manchester-unayted-poproschavsya-z-krishtianu-ronaldu-scho-stalosya.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Манчестер Юнайтед» попрощався з Кріштіану Роналду — що ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS75EL4PMwtk7ATHa0zAVbHxw5E8iVSQ3u9XHc6bROr9F1WYIwseRfGztCjDkLJRWi1VwEpRt4h" alt="«Манчестер Юнайтед» попрощався з Кріштіану Роналду — що ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Англійський футбольний клуб «Манчестер Юнайтед» 22 листопада оголосив про розірвання контракту із зірковим гравцем збірної Португалії Кріштіану Роналду.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/22/7377514/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Роналду покинув &quot;Манчестер Юнайтед&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGhFCEleb8eYkqyDuBCOa73mDXgop0snToxbLSjz3TLf4qbWN8PY9yFFvg70UMw65UNjIZ6TEE" alt="Роналду покинув &quot;Манчестер Юнайтед&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Манчестер Юнайтед&quot; офіційно повідомив, що португалець Кріштіану Роналду залишає клуб &quot;за взаємною згодою&quot;. Джерело: сайт клубу.</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-ronaldu-mu-vykhid/32144144.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Манчестер Юнайтед» розірвав контракт із Кріштіану Роналду</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTLSZvD-DwHu0JV_3R2r4orlD1CEcD2rSyQtXMO6JKBnCw72LcSwg10bk3f8tNWBkFmSFruvi2C" alt="«Манчестер Юнайтед» розірвав контракт із Кріштіану Роналду" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Англійський футбольний клуб «Манчестер Юнайтед» розірвав контракт із Кріштіану Роналду. У повідомленні на сайті команди йдеться, що португальський спортсмен&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/22/7377514/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Роналду покинул &quot;Манчестер Юнайтед&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGhFCEleb8eYkqyDuBCOa73mDXgop0snToxbLSjz3TLf4qbWN8PY9yFFvg70UMw65UNjIZ6TEE" alt="Роналду покинул &quot;Манчестер Юнайтед&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Манчестер Юнайтед&quot; официально сообщил, что португалец Криштиану Роналду покидает клуб &quot;по взаимному согласию&quot;. Источник: сайт клуба.</p></div>
            </div>
        </a><a href='https://espreso.tv/lyublyu-manchester-yunayted-ale-nastav-chas-dlya-novogo-vikliku-ronaldu-prokomentuvav-rozriv-kontraktu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люблю &quot;Манчестер Юнайтед&quot;, але настав час для нового виклику ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAi48DpTZJbEg6BawIr6hrP3ELgcsjSD8aVclrrNvDN8JQUkjsUeP_IXRenTa54cylWZLJFmTi" alt="Люблю &quot;Манчестер Юнайтед&quot;, але настав час для нового виклику ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Португальський форвард Кріштіану Роналду пояснив, чому він покинув англійський &quot;Манчестер Юнайтед&quot;. Читайте більше тут.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/manchester-yunayted-rozirvav-kontrakt-krishtianu-1669139369.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Манчестер Юнайтед&quot; расторг контракт с Криштиану Роналду</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSLgkXxb2w5bPP_I73PE2q6re_Ppdu0ci35H_LsXhfauxxQQHErWBRtfOFgvHRxshBrY67X_mPK" alt="&quot;Манчестер Юнайтед&quot; расторг контракт с Криштиану Роналду" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Футбольный клуб поблагодарил его за его огромный вклад в течение двух периодов на Олд Траффорд. Ранее лидер сборной Португалии и &quot;Манчестер Юнайтед&quot; Криштиану&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/football/article-4901587-manchester-yunajted-razorval-kontrakt-s-krishtianu-ronaldu-podrobnosti-kuda-perejdyot-ronaldu-real-chelsi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Манчестер Юнайтед» всё-таки это сделал. Подробности ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTgP9JjMHqlQKRZQfzQAF_VV4aYB8aDaWnMrNh5VEpP-yAhYbjrC1IaqKIs0xVYLszuwSGdgv1b" alt="«Манчестер Юнайтед» всё-таки это сделал. Подробности ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Клуб благодарит Криштиану за огромный вклад во время выступлений на «Олд Траффорд». Все работники «Манчестер Юнайтед» сосредоточены на прогрессе команды под&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-sports/3619903-mu-rozirvav-kontrakt-z-ronaldu-pisla-skandalnogo-intervu-portugalca.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Манчестер Юнайтед» розірвав контракт з Роналду після ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcThc_qQSrzafpUT47nAVGCCzOBHWDoT321s-W7fbzfUrNgnld_lCaZ7A9fUA1pAMBCfU3z3vCH3" alt="«Манчестер Юнайтед» розірвав контракт з Роналду після ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Як повідомляв Укрінформ, збірна Португалії зіграє на чемпіонаті світу-2022 у групі Н з Ганою, Уругваєм і Південною Кореєю. Фото: Getty Images. Футбол Манчестер&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/england/reviews/krishtianu-ronaldu-portugalec-oficialno-rastorg-kontrakt-s-manchester-yunayted-podrobnosti-2001729/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Роналду расторг контракт с «МЮ». Попрощались друг с другом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRz57Jgd7HFx64lMhZJ0jQ-DniKuYOMGDlDftSir_WSLEafhte4RkR7OHYzxjjSzjSnn8pRU7uk" alt="Роналду расторг контракт с «МЮ». Попрощались друг с другом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Третий день ЧМ-2022 в Катаре разбавила довольно ожидаемая, но все равно громкая новость.</p></div>
            </div>
        </a>
        </Template></>;
}