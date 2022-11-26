import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>25 Kasım</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,25 Kasım"/>
        <meta name="description" content="Trending News about 25 Kasım" /></Head><Template>
            <h1 style={{fontSize: "30"}}>25 Kasım</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/25/2006218/kapak_233125.jpg" alt="25 Kasım"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/siyaset/hkpden-25-kasim-eylemi-istanbul-sozlesmesi-uygulanmalidir-2006218'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HKP&#39;den &#39;25 Kasım&#39; eylemi: İstanbul Sözleşmesi uygulanmalıdır!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnl6HoevRmCXMIzx4uiKNsVqArO3Eqbs03gx4cMbPOqOkDaT_eEcICpHcuOE-yVVoy00aaVonc" alt="HKP&#39;den &#39;25 Kasım&#39; eylemi: İstanbul Sözleşmesi uygulanmalıdır!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Halkın Kurtuluş Partisi (HKP), üç ilde &#39;25 Kasım Kadına Yönelik Şiddete Karşı Uluslararası Mücadele Günü&#39; kapsamında eylem yaptı.</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/taksim-deki-25-kasim-eylemine-polis-mudahalesi-aralarinda-gazetecilerin-de-oldugu-kadinlar-gozaltinda-411345'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taksim&#39;deki 25 Kasım eylemine polis müdahalesi: Aralarında ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQeN7ZtYwtTEqeU4twLNqqyjAW7CS1WjHjpi8NBtSyjezBkSoctP0SFIeyVQ9Mgw8bEvdm0UzpY4A" alt="Taksim&#39;deki 25 Kasım eylemine polis müdahalesi: Aralarında ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>25 Kasım Kadına Yönelik Şiddetle Mücadele Günü&#39;nde Taksim&#39;de buluşan kadınlar, polis müdahalesiyle karşılaştı. Aralarında BirGün editörü Yaren Çolak&#39;ın da.</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/kadinlar-siddete-karsi-sokaga-cikiyor-il-il-25-kasim-eylemleri-411270'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kadınlar şiddete karşı sokağa çıkıyor: İl il 25 Kasım eylemleri</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8ZTPPLRtf0WVYriF2b5z-oCW44HFPIZ4axQPTZClBvX2VMpbZ4Tz4RkodFPBTdSac_P40mvjx" alt="Kadınlar şiddete karşı sokağa çıkıyor: İl il 25 Kasım eylemleri" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye&#39;nin birçok kentinde kadınlar, 25 Kasım Kadına Yönelik Şiddetle Mücadele Günü&#39;nde erkek şiddetine karşı bir araya gelecek. KADIN 25.11.2022 10:41.</p></div>
            </div>
        </a><a href='https://gazetekarinca.com/25-kasim-cebecide-anma-etkinligine-saldiri/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>25 KASIM | Cebeci&#39;de anma etkinliğine saldırı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTql9kETz2c67bNnDnDlOM2cGF8ZSYEFzkcjI9frfd5fYjUcOlOnO-N2-r8s86ReFgI5O2VO4p5" alt="25 KASIM | Cebeci&#39;de anma etkinliğine saldırı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ankara Üniversitesi Cebeci Kampüsü&#39;nde düzenlenen 25 Kasım dolayısıyla yapılan anma etkinliğine bir güruh tarafından saldırı düzenlendi.</p></div>
            </div>
        </a><a href='https://medyascope.tv/2022/11/25/25-kasim-eylemleri-il-il-eylem-cagrilari/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>25 Kasım eylemleri: İl il eylem çağrıları - Medyascope</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTuin_lXTyYkI0hRyyGZyU8d7Dd59URl421cgqQrazutxo3yg5BTMBecY0Q9IU67UNGPT2SLEzG" alt="25 Kasım eylemleri: İl il eylem çağrıları - Medyascope" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>25 Kasım Kadına Yönelik Şiddete Karşı Uluslararası Mücadele Günü nedeniyle kadınlar ve LGBTİ+&#39;lar sokağa çıkmaya hazırlanıyor. Kadınlar ve LGBTİ+&#39;lar.</p></div>
            </div>
        </a><a href='https://gazetekarinca.com/istanbulda-25-kasim-200den-fazla-gozalti-var-bir-kadinin-bacagi-kirildi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İstanbul&#39;da 25 Kasım: 200&#39;den fazla gözaltı var, bir kadının bacağı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSn1qasQdUiPLaW3heMY9mAY7twlPt-Bwava1VoPoN6gHJb2Kx8Z6ygyyX5KChdu6JioFz3D0D-" alt="İstanbul&#39;da 25 Kasım: 200&#39;den fazla gözaltı var, bir kadının bacağı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İstanbul Valiliği ve İstanbul Emniyet Müdürlüğü&#39;nden ise gözaltılar hakkında herhangi bir açıklama gelmedi. HABER MERKEZİ. 25 KASIM | Şiddete karşı sokağa çıkan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/3-sayfa/taksimde-25-kasim-eylemi-yapmak-isteyenlere-polis-engeli'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taksimde 25 Kasım eylemi yapmak isteyenlere polis engeli</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQMLM56NEnlByjYvfqxn8Ok3c50JlouetsEeK4M6U72Bgm_LoqTDLDYzfx0x9zo9RyZMS0nBrng" alt="Taksimde 25 Kasım eylemi yapmak isteyenlere polis engeli" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beyoğlu Kaymakamlığı&#39;nın aldığı kararla yapılması yasaklanan &#39;25 Kasım&#39; eylemi için gelen gruplar ile polis arasında yaşanan gerginlikte çok sayıda kişi&nbsp;...</p></div>
            </div>
        </a><a href='https://medyascope.tv/2022/11/25/gune-bakis-25-kasim-2022-25-kasim-eylemlerine-yasak-black-friday-izdihami-altili-masanin-9-toplantisi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Güne Bakış (25 Kasım 2022): 25 Kasım eylemlerine yasak | &quot;Black ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdx5hnbLdL3Oe8j9RfwgmRhpdZags7vm7WO9EyCTd40_PqouH2v-VB-OWmw0YjrMe__EKQRNf_" alt="Güne Bakış (25 Kasım 2022): 25 Kasım eylemlerine yasak | &quot;Black ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gökçe Çiçek Kösedağı&#39;nın sunduğu “Güne Bakış”ta, Medyascope muhabiri Ufuk Çeri ile Taksim&#39;deki 25 Kasım eylemini, gazeteci ve yazar Ali Bayramoğlu ile 28 Kasım&nbsp;...</p></div>
            </div>
        </a><a href='https://www.agos.com.tr/tr/yazi/27845/25-kasim-kadinlar-yasak-ve-gozaltilara-ragmen-sokaktaydi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>25 Kasım: Kadınlar yasak ve gözaltılara rağmen sokaktaydı | Agos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4Kw-zBbQ57HZgo-UlioX6-YGbe_QFMw7a5ErUESQYnk6mA8oG7wLk6NSvMEFPUtF-9hMJWJBH" alt="25 Kasım: Kadınlar yasak ve gözaltılara rağmen sokaktaydı | Agos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kadına Yönelik Şiddetle Uluslararası Mücadele ve Dayanışma Günü için kadınlar 25 Kasım Kadın Platformu çağrısıyla İstanbul.</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/25-kasimda-tunelde-bir-araya-gelen-kadinlara-polis-ablukasi-haber-1590861'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>25 Kasım&#39;da Tünel&#39;de bir araya gelen kadınlara polis ablukası</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnvlvj46ISGU21O_ETYA-vRJUBrORrSUHG0GjFEcaBJwIiSiX89jHFSa8bMdMAQSP5Si6p-yNH" alt="25 Kasım&#39;da Tünel&#39;de bir araya gelen kadınlara polis ablukası" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kadınlara yönelik şiddeti protesto etmek için Tünel&#39;de bir araya gelen kadınlara polis izin vermedi. Çok sayıda kadın gözaltına alındı.</p></div>
            </div>
        </a>
        </Template></>;
}