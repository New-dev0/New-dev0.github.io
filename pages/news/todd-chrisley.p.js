import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Todd Chrisley</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Todd Chrisley"/>
        <meta name="description" content="Trending News about Todd Chrisley" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Todd Chrisley</h1>
            <Image width={800} height={500} src="https://variety.com/wp-content/uploads/2022/11/GettyImages-1183818515.jpg?w=1000&h=563&crop=1" alt="Todd Chrisley"/>
            <h3>Recent News</h3>
            <a href='https://variety.com/2022/tv/news/todd-chrisley-julie-chrisley-chrisley-knows-best-sentencing-1235439083/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reality Star Todd Chrisley Sentenced to 12 Years in Prison for Bank ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRVPgStFdJWGqfRE_2bvQVvt2OMDdRbTvRnmB8Gei9FF9GMJErv7J2UowwWjwhKIMtgiCaKRmVx" alt="Reality Star Todd Chrisley Sentenced to 12 Years in Prison for Bank ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Todd and Julie Chrisley were sentenced to 12 years and seven years in prison, respectively, for tax evasion and bank fraud.</p></div>
            </div>
        </a><a href='https://pagesix.com/2022/11/21/todd-and-julie-chrisley-sentenced-bank-fraud-tax-evasion/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Todd, Julie Chrisley sentenced to 19 total years in prison for fraud ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTewU-7qiAGKCviouudXGyOHPIBhQ683QGOLdRDovBf_8Egca3gUfv7muDxBKbdZ8EAxFgpQzsD" alt="Todd, Julie Chrisley sentenced to 19 total years in prison for fraud ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Chrisleys are going to prison. Todd Chrisley has been sentenced to 12 years and 16 months probation after he and wife Julie Chrisley were found guilty&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/news/us-news/reality-tv-star-todd-chrisley-sentenced-12-years-bank-fraud-tax-evasio-rcna58202'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reality TV star Todd Chrisley sentenced to 12 years, wife Julie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSwxjQAoUv9ngHOsnkvf5rp9BRTWYBp3dthXES-YzhLpVtuwX8E3CVBFAuo_pPMqs0iHxhoc_5K" alt="Reality TV star Todd Chrisley sentenced to 12 years, wife Julie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Reality television couple Todd and Julie Chrisley were sentenced Tuesday to XXX, five months after they were found guilty of federal fraud charges and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/11/21/todd-chrisley-julie-sentenced-bank-fraud-tax-evasion-case/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Todd Chrisley Sentenced to 12 Years in Prison for Bank Fraud, Tax ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKQgQoJo-tufvxDTF02vCjphBgL_Zkgfsfvx0xBUDyNUOhmFoKY63tARmYpUEhXdtlZhmi2NJJ" alt="Todd Chrisley Sentenced to 12 Years in Prison for Bank Fraud, Tax ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Todd and Julie Chrisley were sentenced in their bank fraud and tax evasion case.</p></div>
            </div>
        </a><a href='https://www.kktv.com/2022/11/21/reality-tv-stars-todd-julie-chrisley-be-sentenced/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reality TV stars Todd and Julie Chrisley sentenced for bank fraud ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTOaSeyw9z7busE35ITy1BC3j9fhQTAln86_QLMFQDT2jvivaiFEanlzHG3tm3MGICMaJ_e4yhD" alt="Reality TV stars Todd and Julie Chrisley sentenced for bank fraud ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>U.S. District Judge Eleanor Ross in Atlanta gave Todd Chrisley 12 years in prison plus 16 months of probation, while Julie Chrisley got seven years behind bars&nbsp;...</p></div>
            </div>
        </a><a href='https://deadline.com/2022/11/chrisley-knows-best-accountant-sentenced-3-years-prison-shows-canceled-1235178145/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Chrisley Knows Best&#39; Accountant Sentenced To 3 Years In Prison ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5Ck6L1BeJfnOwU_Q_F_awUJWqY3WGhbsOznddN8Sgl593637YbKOgHdDVkPc2p11ErSdePuN1" alt="&#39;Chrisley Knows Best&#39; Accountant Sentenced To 3 Years In Prison ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Todd and Julie Chrisley, stars of USA Network&#39;s hit reality series Chrisley Knows Best, are set to be sentenced tomorrow after being found guilty of a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wmur.com/article/todd-julie-chrisley-sentencing/42031300'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reports: Todd and Julie Chrisley sentenced in tax evasion case</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSoTlj3XlGb0V2jXoZ4JIVOENVsPyA1JexiKCbHU7BSB94VuhXS8NaWl5tSoX0t9-4LoD9b62y8" alt="Reports: Todd and Julie Chrisley sentenced in tax evasion case" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prosecutors have said the couple submitted fake documents to banks and managed to secure more than $30 million in fraudulent loans.</p></div>
            </div>
        </a><a href='https://www.fox5atlanta.com/news/todd-julie-chrisley-son-grayson-hospitalized-car-crash-chrisley-knows-best'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Todd and Julie Chrisley&#39;s son Grayson hospitalized in car crash on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQVbzX4e9b1ODRfh2IqZOX-FENS6GbeV1-gYFFmlccDG59pQjlj3dWMu1o81Qxf2U6q3phkdKAu" alt="Todd and Julie Chrisley&#39;s son Grayson hospitalized in car crash on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Chrisley Knows Best&quot; star Todd and Julie Chrisley&#39;s youngest son Grayson has been rushed to the hospital after he was in a crash on a Nashville highway.</p></div>
            </div>
        </a><a href='https://pagesix.com/2022/11/21/todd-julie-chrisleys-son-grayson-hospitalized-after-accident/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Todd, Julie Chrisley&#39;s son Grayson, 16, gets into severe car accident</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRLylcR6tKN5-cXeKbxutI0cpe-F-cGCrKSL7Qyfd4hokBQE_XteGT_QfrmDz0r4KBwdWh2SGxT" alt="Todd, Julie Chrisley&#39;s son Grayson, 16, gets into severe car accident" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Todd Chrisley and Julie Chrisley&#39;s son Grayson was hospitalized after totaling his car just ahead of his parents&#39; sentencing for bank fraud and tax evasion.</p></div>
            </div>
        </a><a href='https://fox17.com/news/local/todd-and-julie-chrisleys-son-sent-to-hospital-after-car-crash-on-tn-highway-reality-tv-star-middle-tennessee-nashville-area-local-news'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Todd and Julie Chrisley&#39;s son hospitalized after car crash on TN ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRugc3fo2chx32l-xu6dxdzv7fxasMzDFsw2Q_xxyTgSMBuT31zsI-NLGd44rvj_paJLo0l6vxQ" alt="Todd and Julie Chrisley&#39;s son hospitalized after car crash on TN ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Reality television show stars Todd and Julie Chrisley&#39;s 16-year-old son was hospitalized after a car accident on a Tennessee Highway, FOX News confirmed.</p></div>
            </div>
        </a>
        </Template></>;
}