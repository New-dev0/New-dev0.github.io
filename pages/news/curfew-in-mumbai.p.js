import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Curfew in Mumbai</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Curfew in Mumbai"/>
        <meta name="description" content="Trending News about Curfew in Mumbai" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Curfew in Mumbai</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/12/03/600x338/Mumbai-Police_1670072462747_1670072462974_1670072462974.JPG" alt="Curfew in Mumbai"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/news/india/no-curfew-in-mumbai-section-144-imposed-to-ensure-peace-police-11670070745480.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No curfew in Mumbai, section 144 imposed to ensure peace, says ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQpkW46j5IPM61cqhDHh_ydnaPQqq1Ack1m52J3JSWLXMTUjyFe-beKRQgQBMsr325HPfLit8a2" alt="No curfew in Mumbai, section 144 imposed to ensure peace, says ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Mumbai Police have imposed Section 144 of Criminal Procedure Code (CrPC) from December 3 to 17 to prevent unlawful gatherings and rallies.</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/india/news-curfew-in-mumbai-december-2022-latest-news-mumbai-police-clarify-on-section-144-ahead-of-new-year-christmas-curfew-in-mumbai-region-today-210765'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Curfew in Mumbai December 2022 latest news: Mumbai Police ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZJWpbqFNlya1vrzld4oI28Too31FtGkNj_V-wk_wvo8MR_B_zqRA7PNAhSuaEmP6JO3KnpHOA" alt="Curfew in Mumbai December 2022 latest news: Mumbai Police ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mumbai Police in a statement said that Section 144 of CrPC has been imposed from December 3 to 17 to prevent unlawful gatherings and rallies. Joint Commissioner&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbctv18.com/india/mumbai-curfew-no-fresh-ban-on-gatherings-routine-the-confusion-explained-15317061.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>There&#39;s no fresh curfew in Mumbai, it&#39;s a routine order | Know all ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRiqX3UUZ7pofB8bPKXdgYpsFaeJgSBn1sGmh-btlkLcy9ezIxct_sMBdoZMAS84jOgRZBh1zal" alt="There&#39;s no fresh curfew in Mumbai, it&#39;s a routine order | Know all ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to a press release, the Mumbai Police has prohibited gatherings of five or more people across the city from December 3. But there&#39;s no need to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mumbailive.com/en/civic/curfew-in-mumbai-till-january-2-76101'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mumbai: Police Imposes Curfew, Curbs Till January 2; Here&#39;s What ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPq8WLIx43EEy2SjgfL-vOKKN4LQkR0dhWbgEEq4QrEMHwy5W7b3bGPdDewRQtEU6TKEr2TD4b" alt="Mumbai: Police Imposes Curfew, Curbs Till January 2; Here&#39;s What ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Mumbai Police have imposed restrictions under Section 144 of the CrPC in the city till January 2, 2023, in a bid to maintain peace and avoid any kind of&nbsp;...</p></div>
            </div>
        </a><a href='https://english.jagran.com/india/mumbai-restrictions-section-144-crpc-know-exact-date-public-order-mumbai-police-curb-on-gatherings-loudspeakers-ceremonies-updates-10056109'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mumbai Restrictions: No Curfew In City, Confirms Police; Advisory ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ50G_k5g6sNOwK5bzsy2CI-imKAQfnDJ82lMXzLZfddSJ6T74YYTQ-xFoLluQbYyuYMST6Tcct" alt="Mumbai Restrictions: No Curfew In City, Confirms Police; Advisory ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mumbai Restrictions: Joint Commissioner Vishwas Patil clarified that this was not a curfew and the move is taken routinely to ensure peace in the city and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}