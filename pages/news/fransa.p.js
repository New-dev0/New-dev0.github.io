import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fransa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fransa"/>
        <meta name="description" content="Trending News about Fransa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fransa</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/ChYUpOfrWEWmVczCDGQghA.jpg?width=1080&mode=crop&scale=both" alt="Fransa"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/sporskor/son-dakika-fransa-dunya-kupasinda-turladi,xFqe0LqNfU-amz737rYWOg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA: Fransa Dünya Kupası&#39;nda turladı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRAkg4PXC9gp_o94pYuNlWI7TNpVWvuJ51Lk6A9pwBMUH3SKH-u7RJ_kEvkUHmN3VdFaOgifiUN" alt="SON DAKİKA: Fransa Dünya Kupası&#39;nda turladı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SON DAKİKA: 2022 Katar Dünya Kupası&#39;nda D grubunda Fransa, Danimarka&#39;yı 2-1 yenerek bir üst tura çıkmayı garantiledi. Kylian Mbappe, maçta bulduğu 2 golle&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/tr/dunyadan-spor/fransa-dunya-kupasinda-son-16-turuna-yukselen-ilk-takim-oldu/2749010'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fransa, Dünya Kupası&#39;nda son 16 turuna yükselen ilk takım oldu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTy_0oEEBfg_wbjtbwGqdXFF2-2avfLKacAL-y_Erztlb9rnFCSb7taGqGk45tAzKXhP_c2rcEj" alt="Fransa, Dünya Kupası&#39;nda son 16 turuna yükselen ilk takım oldu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Danimarka&#39;da ise teknik direktör Kasper Hjulmand, Simon Kjaer&#39;in yerine Victor Nelsson&#39;a ilk 11&#39;de şans verdi. Galatasaraylı futbolcu, Dünya Kupası&#39;nda ilk kez&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/spor/futbol/canli-izle-fransa-danimarka-maci-canli-yayin-dunya-kupasi-7502747/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mbappe Fransa&#39;yı tura çıkardı! Danimarka yıkıldı…</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTN9Psoc454AtRZi6JJ_BZircK_BRnmNFnG3AiU6-dfUpTfbfCm8-vE3X1tPpiZcLGOpLtjjvRz" alt="Mbappe Fransa&#39;yı tura çıkardı! Danimarka yıkıldı…" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mbappe Fransa&#39;yı tura çıkardı! Danimarka yıkıldı… - Dünya Kupası&#39;nda Danimarka&#39;yı 2-1 mağlup eden Fransa adını son 16&#39;ya yazdırdı. Kylian Mbappe&#39;nin 2 golle&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/fransa-danimarka-maci-canli-yayin-3542156-spor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fransa - Danimarka maçı CANLI YAYIN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQotvFZBuAUYjvGKA5Je6K0CeGeRaFObX2dVoZxxLeebKyB1TzuiZkXcr0uwQxOjKTTo7sinX_6" alt="Fransa - Danimarka maçı CANLI YAYIN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 FIFA Dünya Kupası&#39;nda heyecan sürüyor. Fransa ile Danimarka, D Grubu&#39;ndaki ikinci maçlarında karşı karşıya geliyor. İlk maçında Avustralya&#39;yı 4-1&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/spor/2022-dunya-kupasi/fransa-danimarka-canli-yayin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fransa 2-1 Danimarka MAÇ ÖZETİ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQtotPw8kAwocA5hr5fW8026P0Vbh7a8cvR-TaePl4S8pPbOPHMvI8733A1Pff-glgvu8SfixR9" alt="Fransa 2-1 Danimarka MAÇ ÖZETİ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar 2022 FIFA Dünya Kupası D Grubu&#39;nda Fransa, Danimarka&#39;yı 2-1 mağlup ederek gruptan çıkmayı garantiledi. Danimarka&#39;da Galatasaraylı Victor Nelsson 90&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/kralspor/dunya-kupasi/dunya-kupasinda-son-16ya-kalan-ilk-takim-fransa-oldu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dünya Kupasında son 16ya kalan ilk takım Fransa oldu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSAHqQ7674GqWpYAtQM6ed7yc1lf0fnNE_lDSU5SpFMM1PppHScwM3Cpo8KeviVPpIHpTEl1LJ" alt="Dünya Kupasında son 16ya kalan ilk takım Fransa oldu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;ın ev sahipliğinde düzenlenen 2022 Dünya Kupası&#39;nda D Grubu&#39;nun ikinci maçları başlarken Didier Deschamps&#39;ın ekibi Fransa ile Kasper Hjulmand&#39;ın&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/dunya-kupasi-2022/haberler/2022/11/26/fransa-2-1-danimarka-mac-sonucu-ozet-2022-dunya-kupasi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fransa 2-1 Danimarka MAÇ SONUCU - ÖZET 2022 Dünya Kupası</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ46WH_v87xHTZZmoC4zIaGYYqTy9ZGG68vYp_OxsGgmOd1qr5Y_2oR1a7-ansBsnCfkTmCfDMk" alt="Fransa 2-1 Danimarka MAÇ SONUCU - ÖZET 2022 Dünya Kupası" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fransa ile Danimarka, FIFA 2022 Dünya Kupası D Grubu ikinci maçında karşı karşıya geldi. Zorlu mücadeleyi Kylian Mbappe&#39;nin golleriyle 2-1 kazanan Fransa&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}