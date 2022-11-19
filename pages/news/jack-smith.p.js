import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jack Smith</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jack Smith"/>
        <meta name="description" content="Trending News about Jack Smith" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jack Smith</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/18/ap22322700423397_wide-bae66b268723e6e03663718703984e79d7ad614a-s1400-c100.jpg" alt="Jack Smith"/>
            <h3>Recent News</h3>
            <a href='https://www.justice.gov/opa/pr/appointment-special-counsel-0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Appointment of a Special Counsel</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Appointment of a Special Counsel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Attorney General Merrick B. Garland announced today the appointment of former career Justice Department prosecutor and former chief prosecutor for the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/18/1137736663/special-counsel-trump-justice-department-jan-6-mar-a-lago'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DOJ names Jack Smith as special counsel to oversee Trump ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSAd-nCfQcQkklBXW76TlY8brkvVTdMLo_63wptA7Vc6vqm8aQR2LwcjyObe3f15JIoMI4kj79E" alt="DOJ names Jack Smith as special counsel to oversee Trump ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The department&#39;s former public integrity chief, most recently a war crimes prosecutor, will oversee the case of the security documents found at the former&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/18/politics/jack-smith-special-counsel/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Jack Smith, the special counsel named in the Trump ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSeuKzcPxw5gUoGV_oMt_mMzzjDlqlRsNw5Vg3hbWlOJV2UAWgwVCLD9jEkJFKIcWos-AUy0mDu" alt="Who is Jack Smith, the special counsel named in the Trump ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jack Smith, the special counsel announced by Attorney General Merrick Garland on Friday to oversee the criminal investigations into the retention of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/18/us/politics/jack-smith-special-counsel-trump.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who Is Jack Smith, the Newly Appointed Special Counsel in the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTNa-ytoN7yRAiBYtAlqXgvye-Kj4S_KyAhxVuMMAva9lDECUixUuQTQGbZ7mYY7OqWkRKYHqKE" alt="Who Is Jack Smith, the Newly Appointed Special Counsel in the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mr. Smith will take on the role of special counsel after leaving his current position as a specialist prosecutor based in The Hague investigating war&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/national-security/2022/11/18/trump-justice-department-mar-a-lago/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Jack Smith, special counsel in Trump criminal investigation?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGgiKIuGtRs8W_a9m6IEpGx9euti3biWlwRYKlAH_Xl7MBkjy6Ktvv0T1Tu8Z3gpophSujgica" alt="Who is Jack Smith, special counsel in Trump criminal investigation?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The longtime federal prosecutor also has experience investigating the prosecuting war crimes for the International Criminal Court at The Hague.</p></div>
            </div>
        </a>
        </Template></>;
}