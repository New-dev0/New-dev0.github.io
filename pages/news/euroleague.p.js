import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>EuroLeague</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,EuroLeague"/>
        <meta name="description" content="Trending News about EuroLeague" /></Head><Template>
            <h1 style={{fontSize: "30"}}>EuroLeague</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/cBRduX-IRkePRC9RfrHDCg.jpg?width=1080&mode=crop&scale=both" alt="EuroLeague"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/sporskor/son-dakika-thy-euroleague-monaco-93-96-fenerbahce-beko-mac-sonucu,eXPA4-eiE02eqt00QpTTZg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA: THY EuroLeague | Monaco 93-96 Fenerbahçe Beko ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSAuGwiaVBlbXcwc9heaxpTSKsuaUAHfoRyJOZzaphmxaYLA88Ldl37jxyRkWsTjHYfQFj6ASYq" alt="SON DAKİKA: THY EuroLeague | Monaco 93-96 Fenerbahçe Beko ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SON DAKİKA: THY EuroLeague&#39;de Fenerbahçe Beko, deplasmanda Monaco&#39;yu 96-93 mağlup ederek bu sezonki 8. galibiyetini elde etti.</p></div>
            </div>
        </a><a href='https://www.eurohoops.net/tr/euroleague-tr/1422813/euroleaguede-9-hafta-oncesi-takimlarin-sakatlik-durumlari/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EuroLeague&#39;de 9. Hafta Öncesi Takımların Sakatlık Durumları</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTp-NhHIocmo3Xe5vy4Z1p0HhojodqXVzy0m87cYoeA8u9YBK_CuHGyO9zW8RBpZWDWd0810G3Y" alt="EuroLeague&#39;de 9. Hafta Öncesi Takımların Sakatlık Durumları" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turkish Airlines EuroLeague&#39;de ikinci çift maç haftası geldi çattı! Bu akşam (22 Kasım) ve yarın (23 Kasım) oynanacak maçlarla normal sezonun 9. haftası&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurohoops.net/tr/euroleague-tr/1423027/fenerbahce-bekodan-tarihinin-en-iyi-ikinci-euroleague-baslangici/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe Beko&#39;dan Tarihinin En İyi İkinci EuroLeague Başlangıcı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTwCqdQPXp9UhEA2oA2Y7kLEpoIbabQN910wCs6IaVV8KgA_WyzaVAeSTuUfJ4psAOAKJm52sqH" alt="Fenerbahçe Beko&#39;dan Tarihinin En İyi İkinci EuroLeague Başlangıcı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turkish Airlines EuroLeague&#39;de çift maç haftasının ilk karşılaşmasında Monaco deplasmanında 93-96 kazanmayı başaran Fenerbahçe Beko liderliğini sürdürdü. Sezona&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/spor/fenerbahce-beko-thy-euroleaguede-as-monacoyu-devirdi-2005321'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe Beko THY EuroLeague&#39;de AS Monaco&#39;yu devirdi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFpXjnLeqCstio6dZNmPBHAyl-pebziU_rUGvz36iiH-rc_dL4cNbtBbnN5NmjX2PENk8vwa1u" alt="Fenerbahçe Beko THY EuroLeague&#39;de AS Monaco&#39;yu devirdi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>THY EuroLeague&#39;deki temsilcimiz Fenerbahçe Beko, deplasmanda karşılaştığı AS Monaco&#39;yu 96-93 mağlup etti.</p></div>
            </div>
        </a><a href='https://www.ntvspor.net/basketbol/ozet-lider-fenerbahce-beko-ya-yan-bakilmiyor-637d27e466db228e5cafeb84'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖZET | Lider Fenerbahçe Beko&#39;ya yan bakılmıyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6Lw4l36pCJeUbv_AghytV9IstZhYAvYNPdNTPwGKbggWfUTAvbYh3yaisaMIiEjZOoR9w7Lh4" alt="ÖZET | Lider Fenerbahçe Beko&#39;ya yan bakılmıyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>THY EuroLeague&#39;de Fenerbahçe Beko, deplasmanda Monaco&#39;yu 96-93 mağlup ederek bu sezonki 8. galibiyetini elde etti.</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/sporarena/monaco-fenerbahce-beko-basketbol-maci-ne-zaman-saat-kacta-hangi-kanalda-sifreli-mi-thy-euroleague-fenerbahce-maci-canli-yayin-bilgisi-42175092'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EuroLeague&#39;de Fenerbahçe Beko&#39;ya rakip dayanmıyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSeyJoGe4vKaC18RsV2nrlhjVv2t32AhFZJupDdvGsEij0RJxWduRs6i2l7VENBTOuQKWh0Yabn" alt="EuroLeague&#39;de Fenerbahçe Beko&#39;ya rakip dayanmıyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>THY EuroLeague&#39;de Fenerbahçe Beko, deplasmanda Monaco&#39;yu 96-93 mağlup ederek bu sezonki 8. galibiyetini aldı.</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/spor/monaco-fenerbahce-beko-maci-hangi-kanalda-thy-euroleague-fenerbahce-basketbol-maci-ne-zaman-saat-kacta'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>THY Euroleague Monaco Fenerbahçe Beko maçı hangi kanalda ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSeLjTCAN1Kb8hyOqi5Iwb7VjOfA8UMI7TtpsZens2u1kopgFriXTOfmq6q75nOcguWGOrl6wvg" alt="THY Euroleague Monaco Fenerbahçe Beko maçı hangi kanalda ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Monaco Fenerbahçe Beko maçı için nefesler tutuldu. Turkish Airlines EuroLeague&#39;de fırtınalar estiren Fenerbahçe Beko, 9. hafta maçında Monaco ile kozlarını.</p></div>
            </div>
        </a><a href='https://medyascope.tv/2022/11/22/turkish-airlines-euroleaguede-cift-mac-haftasi-basliyor-fenerbahce-beko-as-monaco-deplasmaninda-anadolu-efes-ax-armani-exchange-milana-konuk/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turkish Airlines EuroLeague&#39;de çift maç haftası başlıyor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTrVKPpQFSYEvtoQJjnL5NzibkBr9LX5IiUtbpCxMHeCZKX-0lovNRSH-zcZGJqh6WRXo3OEfdf" alt="Turkish Airlines EuroLeague&#39;de çift maç haftası başlıyor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahçe Beko, bugün oynayacağı AS Monaco maçının ardından, 10. hafta karşılaşmasında 24 Kasım Perşembe günü saat 22.30&#39;da EA7 Emporio Armani Milan&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}