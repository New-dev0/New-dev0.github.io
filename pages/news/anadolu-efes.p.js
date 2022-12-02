import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anadolu Efes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anadolu Efes"/>
        <meta name="description" content="Trending News about Anadolu Efes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anadolu Efes</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/gsEWs6rMKEyt6chTrSreyQ.jpg?width=1080&mode=crop&scale=both&v=1669923259297" alt="Anadolu Efes"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/sporskor/euroleague-anadolu-efes-galibiyet-serisini-4-maca-cikardi,YKLrVwOQakSABPNuHTSpDw'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EuroLeague: Anadolu Efes galibiyet serisini 4 maça çıkardı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7vj_KkojWoCugdn94VGs0R3DXPsweZdXYPsd3Yg915L1vK8sh4RPcJluEjy7OQ2OwyS1eWIaL" alt="EuroLeague: Anadolu Efes galibiyet serisini 4 maça çıkardı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>EuroLeague&#39;in 11. haftasında Olympiakos&#39;u konuk eden Anadolu Efes, mücadeleyi 82-71 kazandı. Lacivert-beyazlılar ligde art arda 4. galibiyetini elde etti.</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/euroleague/2022/12/01/anadolu-efes-olympiakos-maci-canli-thy-euroleague'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Efes - Olympiakos maçı CANLI | THY EuroLeague</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQtQP3DZG9x0KIk9pAPnlupBrDmMQ59MNKdK7FdegMEsYooOnvc9Z0HV7qhhTkNfZCFokhBpl7z" alt="Anadolu Efes - Olympiakos maçı CANLI | THY EuroLeague" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>THY Euroleague&#39;de heyecan devam ediyor. Temsilcilerimizden Anadolu Efes, 11. hafta maçında Yunanistan temsilcisi Olympiakos ile karşılaşıyor.</p></div>
            </div>
        </a><a href='https://www.eurohoops.net/tr/euroleague-tr/1427493/anadolu-efes-son-ceyrekte-alev-aldi-olympiakosu-yikti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Efes Son Çeyrekte Alev Aldı, Olympiakos&#39;u Yıktı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8j5QPBWQenfvWEYnfLGRjQCVzY4aFFu06oqo46UKRllfkpogbTC6USNB5VtspwFNtmdDPYd8q" alt="Anadolu Efes Son Çeyrekte Alev Aldı, Olympiakos&#39;u Yıktı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turkish Airlines EuroLeague normal sezonunun 10. hafta karşılaşmasında ligdeki son 3 maçını kazanan temsilcimiz Anadolu Efes, Sinan Erdem Spor Salonu&#39;nda zorlu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/spor/anadolu-efes-evinde-rahat-kazandi-2008076'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Efes, evinde rahat kazandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1m-ZYhUkTSMKp7aUDqMGHB2USiWUj8oGEKBmZ5zcbPmQuvbnbKAGe6uIUmMsiO4gkOSAJL-lD" alt="Anadolu Efes, evinde rahat kazandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anadolu Efes, THY EuroLeague&#39;de sahasında Olympiakos&#39;u 82-71 mağlup etti.</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/anadolu-efes-olympiacos-maci-canli-2311830'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Efes-Olympiacos maçı (CANLI)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ4uJ9aosc_8-pN-3Uc9jSxI_X5JPEFWLmnRo2JkvgR26KozyY7Et5Cz4UfG8bkxmW7wM57Vbm_" alt="Anadolu Efes-Olympiacos maçı (CANLI)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turkish Airlines EuroLeaguede kötü başladığı sezonda üst üste 3 galibiyet alarak çıkışa geçen Anadolu Efes, zorlu bir maçta sahada.</p></div>
            </div>
        </a><a href='https://medyascope.tv/2022/12/02/turkish-airlines-euroleaguede-11-hafta-devam-ediyor-anadolu-efes-zorlu-olympiacos-karsilasmasini-kazanarak-dortte-dort-yapti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turkish Airlines EuroLeague&#39;de 11. hafta devam ediyor: Anadolu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR05h9DsG7dsBv7qKSoF5l8BDKOTJXjJajPcbw-8q_YtxxToP4Dc7P48NgLXhVlxqJ2jM5mN0S-" alt="Turkish Airlines EuroLeague&#39;de 11. hafta devam ediyor: Anadolu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turkish Airlines EuroLeague&#39;de 11. hafta heyecanı dün oynanan beş karşılaşma ile başladı. Temsilcimiz Anadolu Efes, konuk ettiği.</p></div>
            </div>
        </a><a href='https://www.trtspor.com.tr/haber/basketbol/thy-avrupa-ligi/anadolu-efes-son-ceyrekte-fisi-cekti-266251.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Efes son çeyrekte fişi çekti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSKKlEoSEzGtuKAbDH_k0S4-bJv-bmjh00AZTpK9dw80vR5XRQukjQnkhK29lQBCKC8QaDtvcjQ" alt="Anadolu Efes son çeyrekte fişi çekti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Temsilcimiz Anadolu Efes, THY Avrupa Ligi&#39;nin 11. haftasında konuk ettiği Yunanistan ekibi Olympiakos&#39;u 82-71 yendi.</p></div>
            </div>
        </a>
        </Template></>;
}