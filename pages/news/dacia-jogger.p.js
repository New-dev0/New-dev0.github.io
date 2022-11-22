import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dacia Jogger</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dacia Jogger"/>
        <meta name="description" content="Trending News about Dacia Jogger" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dacia Jogger</h1>
            <Image width={800} height={500} src="https://www.donanimhaber.com/images/images/haber/156104/600x338yeni-dacia-jogger-turkiye-de-iste-fiyati-ve-ozellikleri.jpg" alt="Dacia Jogger"/>
            <h3>Recent News</h3>
            <a href='https://www.donanimhaber.com/yeni-dacia-jogger-turkiye-de-iste-fiyati-ve-ozellikleri--156104'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>7 koltuklu Dacia Jogger Türkiye&#39;de! İşte fiyatı ve özellikleri</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSXNrsfNeucqGshSa3j9nlS8hInMaJkSGb9p-4LWgi8P-Y5U3v5m8EUkZFVOixkWy5twb7lVYUv" alt="7 koltuklu Dacia Jogger Türkiye&#39;de! İşte fiyatı ve özellikleri" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;En erişilebilir 7 koltuklu otomobil&#39; olarak tanıtılan yeni Dacia Jogger; Essential, Expression ve Extreme isimli üç donanım seviyesiyle geliyor.</p></div>
            </div>
        </a><a href='https://tr.motor1.com/news/622765/dacia-jogger-turkiye-fiyatlari/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dacia Jogger Türkiye&#39;de!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvu4QCPnbH7U_5-VsdzeD88dV7Q45Bl8nkCcp8mn8B7iOouFjFbyvTLsPovFAPbsnQYFKL3olC" alt="Dacia Jogger Türkiye&#39;de!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dacia Jogger, uygun fiyatlı seçenekleri ile Türkiye&#39;ye giriş yaptı. Model ülkemizde benzinli ve LPG&#39;li versiyonları ile satışta olacak.</p></div>
            </div>
        </a><a href='https://www.dunya.com/ekonomi/dacianin-7-kisilik-modeli-jogger-turkiyede-satisa-sunuluyor-haberi-674748'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dacia&#39;nın 7 kişilik modeli Jogger, Türkiye&#39;de satışa sunuluyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcShTaYb-wRB1mtjP0YbuSALHVI3Atl8IDzIuGKCUiHZwfMd4wGp1qxDxv8zLTJtByEItLj507yT" alt="Dacia&#39;nın 7 kişilik modeli Jogger, Türkiye&#39;de satışa sunuluyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oluşturulan yapay zeka konseptinin misafirlerle keyifli bir etkileşim kurduğu organizasyonda, Jogger&#39;ın teknik detayları ise lansman için mağara içinde özel&nbsp;...</p></div>
            </div>
        </a><a href='https://www.webtekno.com/dacia-jogger-fiyati-ozellikleri-h129919.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Geniş Araba&#39; İsteyenlerin Favorisi Olacak Dacia Jogger&#39;ın Türkiye ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTO3DB3jnwlpKp3qfKootE3S--RaBzgxQqPNtzJunTOC8qgz5lYHYIvEAa9ZAy_4e6dlOfctWna" alt="&#39;Geniş Araba&#39; İsteyenlerin Favorisi Olacak Dacia Jogger&#39;ın Türkiye ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dacia&#39;nın yeni nesil station wagon modeli Jogger, dikkat çeken bir lansman etkinliği ile Türkiye çıkışını yaptı.</p></div>
            </div>
        </a><a href='https://www.log.com.tr/dacia-jogger-otomatik-vites-secenegi-turkiyeye-gelecek-mi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dacia Jogger otomatik vites seçeneği Türkiye&#39;ye gelecek mi?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRs_wLyDcltmm8_CkfVFUNuPmD4YIBgQ4Gn9JBBj6GuPV1AL8WnXTxi3POHfMxA5uf48b9H2vr3" alt="Dacia Jogger otomatik vites seçeneği Türkiye&#39;ye gelecek mi?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Planlamalar içerisinde yer alan Dacia Jogger otomatik vites seçeneği için kullanıcıların hibrit motor dinamiğini beklemesi gerekecek.</p></div>
            </div>
        </a><a href='https://www.zhaber.com.tr/yeni-dacia-jogger-fiyati-ve-ozellikleri'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yeni Dacia JOGGER fiyatı ve özellikleri</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTXbbrfTFULhC4E6_CLklI-DquPdWMyTykuM6M6TWAuF8PSYhZDHhzPYjYEuzak6IzRLtgwHzDD" alt="Yeni Dacia JOGGER fiyatı ve özellikleri" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yeni Dacia JOGGER. MPV genişliğinde yapısı, station wagon uzunluğunda ve SUV tasarımı , 7 kişilik kapasitesi ile Türkiye&#39;de satışa sunuldu.</p></div>
            </div>
        </a>
        </Template></>;
}