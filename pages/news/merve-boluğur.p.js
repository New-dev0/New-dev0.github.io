import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Merve Boluğur</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Merve Boluğur"/>
        <meta name="description" content="Trending News about Merve Boluğur" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Merve Boluğur</h1>
            <Image width={800} height={500} src="https://i4.hurimg.com/i/hurriyet/75/1200x675/6374a7644e3fe0051840dcb7.jpg" alt="Merve Boluğur"/>
            <h3>Recent News</h3>
            <a href='https://www.hurriyet.com.tr/kelebek/hayat/dedikodular-dogru-cikti-merve-bolugur-ile-mert-aydin-bosaniyor-42171729'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dedikodular doğru çıktı! Merve Boluğur ile Mert Aydın boşanıyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLiMoanMtr9xR_9E_uYGK6f2B1CToUiczYlcdiK8m-gRh4bjjSCLTnSMCysHh-8E0huSmugmNL" alt="Dedikodular doğru çıktı! Merve Boluğur ile Mert Aydın boşanıyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fuat Paşa Yalısı&#39;nda kıyılan nikahta Merve Boluğur&#39;un şahitliğini Behzat Gerçeker, Aslı Hünel ve Bülent Kuş, Mert Aydın&#39;ınkini ise Çetin Yılmaz, Nurettin Doğan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/magazin/2022/11/16/40-gunluk-evliligi-biten-merve-bolugur-ilk-kez-konustu-olmadi-hayat-bu-gozler-mert-aydina-cevrildi-bosanmak-icin-dugmeye-basan-taraf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>40 günlük evliliği biten Merve Boluğur ilk kez konuştu: “Olmadı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRYj_qtzhzigbnohx3eIsaL-gOMI8wCEdJALVMDEv3ohK0FQpLxNsWMw8BOu8_nn-F_drLjQHmk" alt="40 günlük evliliği biten Merve Boluğur ilk kez konuştu: “Olmadı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acemi Cadı, Küçük Sırlar, Kuzey Güney, Muhteşem Yüzyıl gibi yapımlarda rol alan Merve Boluğur, kariyeri kadar özel hayatıyla da sık sık adından bahsetti.</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/n-life/magazin/merve-bolugur-mert-aydin-evliliginde-kriz-iddiasi,kifEzoWg50-dhSOU26JM7A'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Merve Boluğur-Mert Aydın evliliğinde kriz iddiası!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQfSwvxZA_aVPSF-4X37YaTaWW0EQVCvlS_L2oVFjV6U5xueO5j7Cx2LrLiHbj1cplmKSfrs4rn" alt="Merve Boluğur-Mert Aydın evliliğinde kriz iddiası!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DJ Mert Aydın ile 40 gün önce evlenen Merve Boluğur, sosyal medya paylaşımlarıyla gündeme gelmeye devam ediyor. Öceki gün bir takipçisinin Ders çıkardığın&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/merve-bolugur-ve-mert-aydin-n-bosanma-haberi-askta-yuzu-gulmeyen-goygoycularin-diline-dustu-1107692'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Merve Boluğur ve Mert Aydın&#39;n Boşanma Haberi Aşkta Yüzü ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3nCts4xu5T60k8vc2BzbY_HrNuxbU1MIEnbxiXBGReQeIY6rMO3DHSKAm9f-Mp6SX9kx7jBXx" alt="Merve Boluğur ve Mert Aydın&#39;n Boşanma Haberi Aşkta Yüzü ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İlişkileriyle gündeme bomba gibi düşen Merve Boluğur ve DJ Mert Aydın geçtiğimiz aylarda nikah masasına oturarak bir ömür boyu mutluluğa evet demişlerdi.</p></div>
            </div>
        </a><a href='https://www.haberturk.com/merve-bolugur-ile-mert-aydin-bosaniyor-magazin-haberleri-3539262-magazin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Merve Boluğur ile Mert Aydın boşanıyor! Merve Boluğur&#39;dan flaş ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6Wy8EeLyICjwdcvYhu5cgXF4cnd3ZeUlcNdre4nhua9TBXSuihFiRe1NeIcCpPMVWTw-9OKW3" alt="Merve Boluğur ile Mert Aydın boşanıyor! Merve Boluğur&#39;dan flaş ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2 Ekim&#39;de evlenen Merve Boluğur ile Mert Aydın hakkındaki ayrılık dedikoduları doğru çıktı. Çiftten Mert Aydın, boşanmak için mahkemeye başvurdu.</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/magazin/merve-bolugurun-esi-mert-aydin-bosanmak-icin-harekete-gecti-mert-aydin-bosanma-islemlerini-baslatti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Merve Boluğur&#39;un eşi Mert Aydın boşanmak için harekete geçti! Mert ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRA_uXtJRKEXKNoqumR5C8ns_fujoNErjP8rKuP3yQjNI_paqLh1uDxxmwaMJKuHhhKrekvNC4v" alt="Merve Boluğur&#39;un eşi Mert Aydın boşanmak için harekete geçti! Mert ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oyunculuğa ara vererek şarkıcılığa yönelen Merve Boluğur, yaklaşık 40 gün önce aradığı mutluluğu DJ Mert Aydın&#39;da buldu. Merve Boluğur ve DJ Mert Aydın,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.posta.com.tr/magazin/merve-bolugurun-yuzu-bir-turlu-gulmuyor-haberi-sosyal-medyadan-duyurdu-2585860'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Merve Boluğur&#39;un yüzü bir türlü gülmüyor! Haberi sosyal medyadan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRK9a-XK9EbB2WemjOiftZlRUseMhP-KfCFK14GnWL9shQb2jveHYeOZYA3WbBPo2r3z5tZuGfc" alt="Merve Boluğur&#39;un yüzü bir türlü gülmüyor! Haberi sosyal medyadan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Magazin Haberleri - Oyuncu Merve Boluğur, 40 gün önce evlendiği Mert Aydın ile ayrılık kararı aldıklarını sosyal medya hesabından paylaşım yaparak duyurdu.</p></div>
            </div>
        </a>
        </Template></>;
}