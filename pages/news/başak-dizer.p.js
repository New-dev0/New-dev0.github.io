import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Başak Dizer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Başak Dizer"/>
        <meta name="description" content="Trending News about Başak Dizer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Başak Dizer</h1>
            <Image width={800} height={500} src="" alt="Başak Dizer"/>
            <h3>Recent News</h3>
            <a href='https://haberlerankara.com/foto/12552862/kivanc-tatlitugun-esi-basak-dizer-kimdir-basak-dizer-kac-yasindadir-basak-dizerin-meslegini-duyanlar-sok-icerisinde-kaldi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kıvanç Tatlıtuğ&#39;un Eşi Başak Dizer Kimdir? Başak Dizer Kaç ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR19KR4TtpkaFkmE0jFWwdDO3I2_pbthueAZv8q1sjZHqqv161R07NcpyIAb2au1DOq09S8YPB9" alt="Kıvanç Tatlıtuğ&#39;un Eşi Başak Dizer Kimdir? Başak Dizer Kaç ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Geçtiğimiz gün Etiler&#39;de objektiflere takılan Başak Dizer ile Kıvanç Tatlıtuğ çiftinin yaptıkları açıklamalar gündem olunca, magazin takipçileri yönünü hemen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}