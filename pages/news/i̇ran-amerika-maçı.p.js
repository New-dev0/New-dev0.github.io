import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>İran Amerika maçı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,İran Amerika maçı"/>
        <meta name="description" content="Trending News about İran Amerika maçı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>İran Amerika maçı</h1>
            <Image width={800} height={500} src="https://img.piri.net/mnresize/600/-/resim/imagecrop/2022/11/29/08/27/resized_371ab-faec6871jqygy9lam6gqvfdygv7vqp65080.jpg" alt="İran Amerika maçı"/>
            <h3>Recent News</h3>
            <a href='https://www.yenisafak.com/dunya/dunya-kupasina-siyasi-durus-iraklilar-abd-iran-macinda-iki-ulkeyi-de-desteklemiyor-3892787'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dünya Kupası&#39;na &#39;siyasi duruş&#39;: Iraklılar ABD-İran maçında iki ülkeyi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7xWmiWc_EqVe3ZwUfAWz-r3Q9zowmlw3KbQKhzLxNRXV1zxsLgIOfAfNQtuavE2D5hLAiGGwg" alt="Dünya Kupası&#39;na &#39;siyasi duruş&#39;: Iraklılar ABD-İran maçında iki ülkeyi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bu akşam oynanacak İran-ABD karşılaşmasını izlemek için başkent Bağdat&#39;ın işlek caddelerindeki kahvehanelerde bir araya gelen Iraklı futbolseverler,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}