import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Repo rate</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Repo rate"/>
        <meta name="description" content="Trending News about Repo rate" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Repo rate</h1>
            <Image width={800} height={500} src="https://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_437,w_700/vsz3vr1zg8eob80w4aqs" alt="Repo rate"/>
            <h3>Recent News</h3>
            <a href='https://ewn.co.za/2022/11/24/mpc-hikes-repo-rate-by-75-basis-points-to-7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MPC hikes repo rate by 75 basis points to 7%</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGVyXsobvu5t8CLYdmqgeJQQ-HlhWGgIl4ic15FhLt43GAL0cOP7kaQo3Nw8fAkvF7rOoHQQxk" alt="MPC hikes repo rate by 75 basis points to 7%" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South African Reserve Bank Governor Lesetja Kganyago said that the monetary policy committee had mixed views on how much the repo rate should be increased&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneyweb.co.za/news/economy/sarb-ratchets-repo-rate-by-another-75bps/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sarb ratchets repo rate by another 75bps</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQf8T2_Zn3oYZl0_eYvh5ZGNqwbTFC11p6NkG07btNbWNBkHq589dxxAbexUqKIo4uG2nVeIF0D" alt="Sarb ratchets repo rate by another 75bps" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahead of the December festive season spending spree, to rein in spiking inflation.</p></div>
            </div>
        </a><a href='https://www.iol.co.za/business-report/economy/sa-reserve-bank-hikes-repo-rate-to-7-db719690-498d-4af4-a07a-c1659eabeac0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SA Reserve Bank hikes repo rate to 7%</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZ6LuThZYmYFJQ8mCyfQyDiYwnLULFr18jeC2lnWXBSba3pRdq47zj_4lt2dRyiL1gnyZ9UYYk" alt="SA Reserve Bank hikes repo rate to 7%" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The South African Reserve Bank has hiked the interest rate again, taking the prime lending rate to 10.50%, meaning more pain for consumers.</p></div>
            </div>
        </a><a href='https://www.enca.com/business/repo-rate-increase-75-basis-points'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Repo rate increase by 75 basis points</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTaN3SnR9EQmEZRXPckDxXdVA-3bXSJXkoczbsfQjLjuhvHKGJW5lfEHyYvIIxZvMOZui6NduAv" alt="Repo rate increase by 75 basis points" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The South African Reserve Bank has announced yet another interest rate hike.</p></div>
            </div>
        </a><a href='https://www.sapeople.com/2022/11/24/south-african-reserve-bank-hikes-repo-rate-to-7/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South African Reserve Bank Hikes Repo Rate to 7%</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTeX6a0zESbiUMp5XBw247JjaI3jEaGRdT2reLBl5NFbuMV0zYMQlnReLy-cULT6B5-hiOI2dJc" alt="South African Reserve Bank Hikes Repo Rate to 7%" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The repurchase rate (repo rate) in South Africa reached 7% after the SA Reserve Bank&#39;s (SARB) Monetary Policy Committee (MPC) agreed to a 75 basis points hike.</p></div>
            </div>
        </a>
        </Template></>;
}