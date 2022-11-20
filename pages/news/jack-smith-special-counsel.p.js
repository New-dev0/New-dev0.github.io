import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jack Smith special counsel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jack Smith special counsel"/>
        <meta name="description" content="Trending News about Jack Smith special counsel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jack Smith special counsel</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221118143316-jack-smith-special-counsel.jpg?c=16x9&q=w_800,c_fill" alt="Jack Smith special counsel"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/18/politics/jack-smith-special-counsel/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Jack Smith, the special counsel named in the Trump ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSeuKzcPxw5gUoGV_oMt_mMzzjDlqlRsNw5Vg3hbWlOJV2UAWgwVCLD9jEkJFKIcWos-AUy0mDu" alt="Who is Jack Smith, the special counsel named in the Trump ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jack Smith, the special counsel announced by Attorney General Merrick Garland on Friday to oversee the criminal investigations into the retention of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/19/us/politics/jack-smith-trump-special-counsel.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jack Smith, the New Special Counsel, Is Schooled in Corruption ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRS55BvGwa_L7Q9iBWE57Zwg4_G4My_X7QO_EnFTjYZuM3fTWFMpzIyBOuTi81uSoYcM1UG2inz" alt="Jack Smith, the New Special Counsel, Is Schooled in Corruption ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A veteran public corruption and war-crimes prosecutor, Jack Smith will take over two Trump-related criminal investigations.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/18/1137847204/who-is-doj-special-counsel-jack-smith'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is DOJ Special Counsel Jack Smith?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRR30_XMelwe8Ms2dHnOWKT_EqE-TJ6zZikBpK5fLdkrs3kJFyPombxpv54qOE2OSCWnihHtVqZ" alt="Who is DOJ Special Counsel Jack Smith?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Attorney General Merrick Garland appointed a former Justice Department prosecutor to investigate two criminal cases involved former-President Donald Trump.</p></div>
            </div>
        </a><a href='https://www.justice.gov/opa/pr/appointment-special-counsel-0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Appointment of a Special Counsel</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Appointment of a Special Counsel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Attorney General Merrick B. Garland announced today the appointment of former career Justice Department prosecutor and former chief prosecutor for the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.politico.com/news/2022/11/18/garland-to-appoint-special-counsel-for-trump-criminal-probes-00069451'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Garland names Jack Smith special counsel for Trump criminal probes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_32hOosiSITcu4f7rjHinIXHBjRtdiSOQ1p3Sn8GTCJdz553dkelVXdOtgP9zs2HGsZ1kE6ez" alt="Garland names Jack Smith special counsel for Trump criminal probes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Smith, a former chief of the Justice Department&#39;s Public Integrity Section, will oversee criminal matters related to former President Donald Trump.</p></div>
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