import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BlockFi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BlockFi"/>
        <meta name="description" content="Trending News about BlockFi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BlockFi</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/VCK-aC6zRUijLHRd2PGE3w.jpg?width=1080&mode=crop&scale=both" alt="BlockFi"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/ntvpara/kripto-para/kripto-parada-ikinci-cokus-blockfi-iflas-basvurusunda-bulundu,dD4jgzZDBEClsRdsVm69Tg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kripto parada ikinci çöküş: BlockFi iflas başvurusunda bulundu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPJQ1Dd6SPZNNVPhz40zwol2ljKTGD6lmJ_JtMgDjYDgBMdLGFFjPKMr2EMWNar2BJlHvLwIf3" alt="Kripto parada ikinci çöküş: BlockFi iflas başvurusunda bulundu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünyanın en büyük kripto para borsalarından FTX&#39;in çöküşünün ardından, ABD merkezli kripto para platformu BlockFi da iflas başvurusunda bulundu.</p></div>
            </div>
        </a><a href='https://tr.cointelegraph.com/news/blockfi-files-for-bankruptcy-as-many-expected-cites-ftx-collapse-for-its-troubles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BlockFi iflas başvurusunda bulundu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTCI4vjCYnngttb7uDlAM58ymWaB9oImdOtGk8fbgLNu0D18YB7yiZ9SWAYOz8J5gUdZZKMe13N" alt="BlockFi iflas başvurusunda bulundu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BlockFi, FTX&#39;e önemli ölçüde maruz kaldığını inkar ettikten sadece haftalar sonra iflas başvurusunda bulundu.</p></div>
            </div>
        </a><a href='https://uzmancoin.com/blockfi-kripto-para-240-milyon-dolar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BlockFi, 240 milyon dolarlık kripto para sattı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9bUglq04n5khqM1hP5WCG0vJgV9Jn-FKpYwtgeATDfrEBb8wkHdAdaWYb3pG64Ry61UtNE4NP" alt="BlockFi, 240 milyon dolarlık kripto para sattı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kripto para borsası FTX&#39;in iflasının ardından iflas başvurusu yapan bir diğer şirket de BlockFi oldu. ABD merkezli kripto kredi şirketi, bugün resmen iflas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.coinkolik.com/blockfi-iflas-basvurusunda-bulunacak/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BlockFi, İflas Başvurusunda Bulunacak</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8o80Q4Ub0TFC_WutEK5-UBEFSaPvnXwgqTPeTUKDQXf-A81KOxMEBg84h8LBrf38AGle9WN6Z" alt="BlockFi, İflas Başvurusunda Bulunacak" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kullanıcılarına kripto getirileri sunan BlockFi, FTX&#39;in iflas başvurusunda bulunmasının ardından 11 Kasım&#39;da para çekme işlemlerini durdurduğunu açıklamıştı.</p></div>
            </div>
        </a><a href='https://www.tgrthaber.com.tr/ekonomi/blockfi-iflas-basvurusunda-bulundu-2857871'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kripto parada çöküş devam ediyor: BlockFi iflas başvurusunda ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDMiOZjmRdc_R18IHURqWtpQN-9E73Jvfa7GVfv2q7fG-IrRQLdMBLLTNqLaUtDh8t8pLQd4Uv" alt="Kripto parada çöküş devam ediyor: BlockFi iflas başvurusunda ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünyanın en büyük kripto para borsalarından FTX&#39;in çöküşünün ardından, ABD merkezli kripto para platformu BlockFi de iflas başvurusunda bulundu.</p></div>
            </div>
        </a><a href='https://kriptokoin.com/blockfi-yuzmilyonlarca-dolarlik-kripto-satti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İflas Eden BlockFi, Yüzmilyonlarca Dolarlık Kripto Para Sattı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0EyjEdZe7UPVerk6zhkIvJRWb9hMC51tiVkwl40cTfMaE_SJ8h7Q4i0tWX3a2O7YHVZc7lCji" alt="İflas Eden BlockFi, Yüzmilyonlarca Dolarlık Kripto Para Sattı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FTX&#39;in iflasının ardından Bölüm 11 iflas koruması için başvuruda bulunan BlockFi, bugün kripto varlıklarından bir kısmını nakde çevirdi.</p></div>
            </div>
        </a>
        </Template></>;
}