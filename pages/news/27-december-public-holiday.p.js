import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>27 December public holiday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,27 December public holiday"/>
        <meta name="description" content="Trending News about 27 December public holiday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>27 December public holiday</h1>
            <Image width={800} height={500} src="https://mg.co.za/wp-content/uploads/2022/12/GettyImages-97127830.jpg" alt="27 December public holiday"/>
            <h3>Recent News</h3>
            <a href='https://mg.co.za/news/2022-12-08-ramaphosa-declares-27-december-a-public-holiday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ramaphosa declares 27 December a public holiday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSL8810b4El4J3RFZ-hxZxe4L50rfQTY5wrwoYQ6ASeI18rQQNrlR7-CMZVQt2Q4rr_xxQwp-Re" alt="Ramaphosa declares 27 December a public holiday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The president has given the country an extra day off, because Christmas Day falls on a Sunday.</p></div>
            </div>
        </a><a href='https://www.businessinsider.co.za/what-to-do-on-27-december-public-holiday-in-south-africa-2022-12'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New 27 December public holiday welcomed in hospitality – with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS2s5Q-ISYdyBFxG1d3xkR-GYZnDkj9W35Yh4rMKWnp86-EOlhUVVWcfq21G1pwqa1khDT7kEZm" alt="New 27 December public holiday welcomed in hospitality – with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With an additional public holiday on 27 December, South Africa&#39;s tourism and hospitality sectors are expecting more last-minute bookings for local travel.</p></div>
            </div>
        </a><a href='https://businesstech.co.za/news/government/649965/extra-public-holiday-for-south-africa-in-december/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Extra public holiday for South Africa in December</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSrvKXwwWKfX80EfvkSEgvOJCJbLt3DZl89Fi7Lw4RuQlc6d3SmU_zbLAHn8XUt-ZRZK21OHXwk" alt="Extra public holiday for South Africa in December" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>President Cyril Ramaphosa has declared 27 December a public holiday. The declaration was made in terms of Section 2(A) of the Public Holidays Act which&nbsp;...</p></div>
            </div>
        </a><a href='https://allafrica.com/stories/202212080175.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Africa: President Declares 27 December a Public Holiday</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="South Africa: President Declares 27 December a Public Holiday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Africans will get to enjoy an extended Christmas with 27 December 2022 declared as a public holiday in lieu of Christmas Day falling on a Sunday.</p></div>
            </div>
        </a>
        </Template></>;
}