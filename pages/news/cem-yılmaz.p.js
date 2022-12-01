import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cem Yılmaz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cem Yılmaz"/>
        <meta name="description" content="Trending News about Cem Yılmaz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cem Yılmaz</h1>
            <Image width={800} height={500} src="https://i4.hurimg.com/i/hurriyet/75/1200x675/6386e36e4e3fe0206c6d8788.jpg" alt="Cem Yılmaz"/>
            <h3>Recent News</h3>
            <a href='https://www.hurriyet.com.tr/kelebek/hayat/isleri-acildi-nafaka-yeniden-10-bin-dolar-oldu-cem-yilmaza-mahkeme-soku-42179485'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İşleri açıldı nafaka yeniden 10 bin dolar oldu...Cem Yılmaz&#39;a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRLqvfRLk633bfqbksrcuXAglFgEce2-s0_awj8Cqz466HGSABrP5fdvtR3C9mRVbQ1kaV7yf2a" alt="İşleri açıldı nafaka yeniden 10 bin dolar oldu...Cem Yılmaz&#39;a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cem Yılmaz&#39;ın eski eşi Ahu Yağtu&#39;ya oğlu Kemal için ödediği 10 bin dolarlık nafakayı 70 bin TL&#39;ye düşüren Aile Mahkemesi&#39;nin kararı İstinaf Mahkemesi&#39;nce&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/magazin/ahu-yagtu-ile-cem-yilmazin-nafaka-davasinda-karar-cikti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ahu Yağtu ile Cem Yılmaz&#39;ın nafaka davasında karar çıktı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSwjMNCcTWbUskDzbuiJaiJUtazUMRHyQJxDUfb6SDmMC9zpmS0zj05BmBBOGdTa71VCJyuhtSU" alt="Ahu Yağtu ile Cem Yılmaz&#39;ın nafaka davasında karar çıktı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oyuncu Ahu Yağtu ile Cem Yılmaz&#39;ın nafaka davasında karar çıktı! Yağtu, 2012 yılında evlendiği Yılmaz ile 20 ay sonra yollarını ayırmıştı.</p></div>
            </div>
        </a><a href='https://onedio.com/haber/istinaf-mahkemesi-kararini-verdi-cem-yilmaz-in-ahu-yagtu-ya-odeyecegi-nafakada-indirim-istegi-reddedildi-1110658'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İstinaf Mahkemesi Kararını Verdi: Cem Yılmaz&#39;ın Ahu Yağtu&#39;ya ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTs3jS78VeKbVF0GXVtZbCqaAz3xGqkRlDeDiVAkuCpOC2JnD9_ilKWbcnIr38GaNODZWk4nWyg" alt="İstinaf Mahkemesi Kararını Verdi: Cem Yılmaz&#39;ın Ahu Yağtu&#39;ya ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cem Yılmaz ve eski eşi Ahu Yağtu arasında sular bir türlü durulmuyor. Ünlü komedyen 10 bin dolarlık nafaka öderken dolar kurundaki artış ve pandemi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.odatv4.com/magazin/sevilay-yilman-in-hedefinde-cem-yilmaz-in-eski-esi-var-260494'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sevilay Yılman&#39;ın hedefinde Cem Yılmaz&#39;ın eski eşi var</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQIODWX0sqdZEcI53GXxoyl3eUz1y9045dKkDolx5ijTIVjqsyz_WMcl-B8TTSXIU6yvdL9pIkx" alt="Sevilay Yılman&#39;ın hedefinde Cem Yılmaz&#39;ın eski eşi var" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İstinaf mahkemesi 70 bin Türk lirası olarak kabul edilen kararı bozarak, 10 bin dolar nafaka ödemesine hükmetti. Habertürk yazarı Sevilay Yılman bugünkü &quot;Ahu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberler.com/haberler/cem-yilmaz-ahu-yagtu-ya-ne-kadar-nafaka-oduyor-15462641-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cem Yılmaz, Ahu Yağtu&#39;ya ne kadar nafaka ödüyor?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1ESPJY2SSLP4HSHhtrZs92lc5cpp2eZM3D2UB5Pk6yW-FxNfzHhh_ynxbrTfNHq0L1eJkevp6" alt="Cem Yılmaz, Ahu Yağtu&#39;ya ne kadar nafaka ödüyor?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İstinaf mahkemesi 70 bin Türk lirası olarak kabul edilen kararı bozarak, 10 bin dolar nafaka ödemesine hükmetti. NAFAKANIN TÜRK LİRASI OLMA TALEBİNİ REDDETTİLER.</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/galeri/magazin/son-dakika-cem-yilmazin-eski-esi-ahu-yagtuya-odedigi-nafaka-ortaya-cikti-eksik-yatirinca-icraya-vermisti-indirim-talebine-ret-geldi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA: Cem Yılmaz&#39;ın eski eşi Ahu Yağtu&#39;ya ödediği nafaka ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTc9tJ-ln6PLSnD0QqF59HvqqQargADigqvvGhI4WZeLHcGvPmX3SyNuc8YwY8Arlmn3vRsv3Xe" alt="SON DAKİKA: Cem Yılmaz&#39;ın eski eşi Ahu Yağtu&#39;ya ödediği nafaka ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberi... Cem Yılmaz&#39;ın eski eşi Ahu Yağtu&#39;ya ödediği nafaka ortaya çıktı! vermişti indirim talebine ret geldi. Cem Yılmaz oğlu için eski eşine&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/medya/cem-yilmaza-nafaka-soku-eski-esi-ahu-yagtuya-odeyecegi-nafaka-ucreti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cem Yılmaza nafaka şoku! Eski eşi Ahu Yağtuya ödeyeceği nafaka ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9U31CoCxCGa11XhtV4XomifedQaCHCJHJ0n4CTTWflfdB1GDcYyPOqbMqpg3Cv2z4pyqq_BJf" alt="Cem Yılmaza nafaka şoku! Eski eşi Ahu Yağtuya ödeyeceği nafaka ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ünlü komedyen Cem Yılmaz&#39;ın eski eşi Ahu Yağtu&#39;ya ödediği nafaka ücreti gündem olmuştu. İstinaf mahkemesinden Cem Yılmaz&#39;ı üzecek bir karar çıktı..</p></div>
            </div>
        </a>
        </Template></>;
}