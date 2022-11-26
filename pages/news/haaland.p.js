import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Haaland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Haaland"/>
        <meta name="description" content="Trending News about Haaland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Haaland</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd7e7c1711cd3c24d/637389b3d84f6d11384e4815/goal---web-two-way-split--720a92e5-bd46-468d-9e33-5168eeb64ce6.jpeg" alt="Haaland"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/tr/haber/erling-haaland-napoli-nin-kapisindan-donmus/blta96bef529e13569d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erling Haaland Napoli&#39;nin kapısından dönmüş</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJPiNmwfjalJG3tgocTwqT5HHfCjzO_uVmZsdmbPlIFNXNyNBhICJG2sN7SmkbbMYc2k0chcpq" alt="Erling Haaland Napoli&#39;nin kapısından dönmüş" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sportif direktör Cristiano Giuntoli geçtiğimiz yıllarda Norveçli golcüyü kadroya katmaya çok yaklaştıklarını söyledi. Şampiyonlar Ligi&#39;nde grubunu ilk sırada&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntvspor.net/futbol/erling-haaland-in-dunya-kupasi-icin-birden-fazla-favorisi-var-63738f3b66db223268cd688b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erling Haaland&#39;ın Dünya Kupası için birden fazla favorisi var</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0L19DJNroXwq8aT4PEgVY2uB3VJx1u5bF5_kr8JYQNU5qtuKIKPpBLlN8U4KC2rC7PJAw0ZqH" alt="Erling Haaland&#39;ın Dünya Kupası için birden fazla favorisi var" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 Katar Dünya Kupası&#39;nda boy gösteremeyecek yıldızların başında gelen Erling Haaland, organizasyon boyunca yapacaklarını anlattı.</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/kralspor/dunya-kupasi/erling-haaland-dunya-kupasinda-favorilerini-acikladi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erling Haaland, Dünya Kupasında favorilerini açıkladı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRgybSPwzwR6W0m35aXkOWimkz0DakHJhoq1JWOCizlieHuAI5pwoo9fFMIXbSe0KXH7vjGuaB0" alt="Erling Haaland, Dünya Kupasında favorilerini açıkladı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yıldız futbolcu, Borussia Dortmund&#39;dan Manchester City&#39;ye transfer olmasının ardından 13 lig maçında 18 gol kaydetti. Dört Şampiyonlar Ligi maçında beş gol&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/dunya-kupasi-2022/haberler/2022/11/15/erling-haaland-dunya-kupasindaki-favorilerini-belirledi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erling Haaland Dünya Kupası&#39;ndaki favorilerini belirledi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSgP1FZsJTXb9h6WLduB33jJS3g0Es24DTPW3lWUNIOy4wySHcc0R9g0i8vFMappcS8Es8FN4Di" alt="Erling Haaland Dünya Kupası&#39;ndaki favorilerini belirledi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberleri... 2022 FIFA Dünya Kupası&#39;nın başlamasına kısa bir süre kaldı. Turnuvada yer almayacak olan Norveç&#39;in Manchester City forması giyen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aydinlik.com.tr/haber/7-lig-takimindan-haalanda-transfer-teklifi-350931'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>7. lig takımından Haaland&#39;a transfer teklifi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6XLc1Bxcvro83hwoE17KQSiskQ4uqN767tVXKPTsIG0AqRn52WS92MevkaIKH6vJO0mIXrJUE" alt="7. lig takımından Haaland&#39;a transfer teklifi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İngiltere 7. Lig takımı Ashton United, Manchester City&#39;nin yıldız forveti Erling Haaland&#39;ı Dünya Kupası arasında transfer etmek için teklifte bulundu.</p></div>
            </div>
        </a>
        </Template></>;
}