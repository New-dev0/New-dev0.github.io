import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>1899</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,1899"/>
        <meta name="description" content="Trending News about 1899" /></Head><Template>
            <h1 style={{fontSize: "30"}}>1899</h1>
            <Image width={800} height={500} src="https://portal-kultura.ru/upload/iblock/592/Снимок.PNG" alt="1899"/>
            <h3>Recent News</h3>
            <a href='https://portal-kultura.ru/articles/news/346554-netflix-vypustil-misticheskiy-serial-1899-ot-sozdateley-tmy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netflix выпустил мистический сериал «1899» от создателей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSSRvn8iLsM75RoLHCmxr2gu68MTjKLK7sVjuxIdBcfPCrTTln4rqISMiLwu-EgofONyH8O9Z86" alt="Netflix выпустил мистический сериал «1899» от создателей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>div&gt;17 ноября на стриминге стартовало новое шоу от сценаристки Янтье Фрисе и режиссера Барана бо Одара.&lt;/div&gt;</p></div>
            </div>
        </a><a href='https://dtf.ru/s/release/1450345-na-netflix-vyshel-misticheskiy-serial-1899-ot-avtorov-tmy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Netflix вышел мистический сериал «1899» от авторов «Тьмы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSuhWCEyNIKGibnKnfn2ztJJg_kZR-oAIkuOZL3FfTdvsfK4Mp6gzUCRaTnYi3Vgf8EIBn6G62H" alt="На Netflix вышел мистический сериал «1899» от авторов «Тьмы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Авторами «1899» выступают Баран Бо Одар и Янтье Фризе, ранее создавшие для Netflix научно-фантастический сериал «Тьма», который выходил на стриминговом сервисе&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mirf.ru/news/na-netflix-vyshel-misticheskij-serial-1899-ot-sozdatelej-tmy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Netflix вышел мистический сериал «1899» от создателей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR3E4oy498XeQnWB4PjtR30Vro7dIAbqkaW-cBUmp9F5CFLgS3emUzQbI0HAi09aHZP3UKZiAWo" alt="На Netflix вышел мистический сериал «1899» от создателей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На сервисе доступны русские субтитры. Действие шоу разворачивается в 1899 году на корабле с мигрантами, который следует из Европы в Нью-Йорк. Разношерстной&nbsp;...</p></div>
            </div>
        </a><a href='https://www.playground.ru/misc/news/na_netflix_sostoyalas_premera_misticheskogo_trillera_1899_ot_avtorov_tmy_u_seriala_uzhe_vysokie_otsenki_ot_zritelej-1246987'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Netflix состоялась премьера мистического триллера &quot;1899&quot; от ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcfect2hOGLCcAVtDTJg4V1gl06rD74NWJd9Qyep8mvcEfSPM_G-pCTLhmNzUVi10QvqTwfgQn" alt="На Netflix состоялась премьера мистического триллера &quot;1899&quot; от ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Новый триллер &quot;1899&quot; стал доступен на потоковом сервисе Netflix. Это новое творение Барана бо Одара и Янтье Фризе, авторов нашумевшего сериала &quot;Тьма&quot;.</p></div>
            </div>
        </a><a href='https://pluggedin.ru/open/obyyasnenie-koncovki-seriala-1899-budet-li-2-sezon-40850'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Объяснение концовки сериала «1899». Будет ли 2 сезон?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwptxFp3TGhR_a7_DgK7eoM0_L_UcBE2HIg-rMmH7wE4NFLSvenZS7rX_7QdtDhZ1h0-mf5kj4GA" alt="Объяснение концовки сериала «1899». Будет ли 2 сезон?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сериал «1899» от Netflix посвящен группе пассажиров, путешествующих из Лондона в Нью-Йорк в надежде начать все сначала. Шоу многоязычное, так как в нем&nbsp;...</p></div>
            </div>
        </a><a href='https://news.day.az/showbiz/1512180.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Netflix вышел мистический сериал «1899»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQFaeJOQuB0sUKfueVjelFY4UGVzm4qh_oYN_eUcUH022Z20EcJVh75ZQNEg0vx8539Hkt4HgcZ" alt="На Netflix вышел мистический сериал «1899»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Фрисе и Одар обещают, что сюжет задаст зрителю много загадок, однако путешествий во времени в нем не будет. В сериале &quot;1899&quot; сыграли Антон Лессер (&quot;Игра&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}