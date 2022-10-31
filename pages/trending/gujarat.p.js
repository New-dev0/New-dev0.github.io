import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gujarat</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gujarat"/>
        <meta name="description" content="Trending News about Gujarat" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gujarat</h1>
            <Image width={800} height={500} src="" alt="Gujarat"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/india-news/gujarat-cable-bridge-collapses-in-machchhu-river-several-feared-hurt-101667138262873.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cable bridge collapses in Gujarat, several lives lost, many hurt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTz33WSbhNJdv8dYxrm9B2QdXPzVfmjpjh-_r02QhmP15bcXFk6006aVGrsYXzH6KiCbYwfSkp8" alt="Cable bridge collapses in Gujarat, several lives lost, many hurt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bridge collapse in Morbi district: Both Prime Minister Narendra Modi and Gujarat chief minister Bhupendra Patel have announced ex gratia for the family of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/world/2022/oct/30/people-killed-india-bridge-collapse-gujarat-state'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>At least 81 people dead after bridge collapses in India&#39;s Gujarat state</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRqgHRXGllwIb2PTG8daCOpP34sKOk8geABu7Dc3Vr4VyUUfKYzdcB_6bB6tT0YhUI1Ibi8KBrb" alt="At least 81 people dead after bridge collapses in India&#39;s Gujarat state" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At least 81 people were killed when a pedestrian bridge over a river in the western Indian state of Gujarat collapsed, plunging hundreds of people into the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-asia-india-63445154'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India bridge collapse: Hundreds plunged into river and dozens killed ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTX9S_6VJG63omqSrOCskBukDH1sKAKGwl7MgHL-tsBctcV2rovd11_9h1PuAkugG41RaGyOUxg" alt="India bridge collapse: Hundreds plunged into river and dozens killed ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At least 78 people have died after a pedestrian bridge collapsed in India&#39;s western state of Gujarat. Hundreds of people were plunged into River Macchu in&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/cities/ahmedabad/gujarat-morbi-suspension-bridge-collapse-8239336/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Over 60 killed as bridge collapses in Gujarat, days after reopening</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQFJRGf45-j_nzYNuJDoPYn5N49GA_pUO5I71ZrLMuXbYHtIFc7l1S3SUtqPmKZz-PVFgl7ZmYy" alt="Over 60 killed as bridge collapses in Gujarat, days after reopening" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AT LEAST 60 people were killed when a century-old suspension bridge on the Machchhu river in Morbi town of Gujarat, about 240 km from Gandhinagar,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/india/gujarat-cable-bridge-collapses-in-morbi-several-injured-watch-11667139517782.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gujarat cable bridge collapse in Morbi: Over 60 die, NDRF rescue ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR-W5BklFv-OdQ13UZtGylPuOE-6Zsoz0-4SAUC2ePAZvNEbvyUa-Oog4x99dmPKEnlfZPNFbxg" alt="Gujarat cable bridge collapse in Morbi: Over 60 die, NDRF rescue ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ambulances have reached the spot to carry injured to hospitals. Rescue operations are underway..PM Modi has sought urgent mobilisation of teams for rescue&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/national/other-states/morbi-gujarat-bridge-collapse-live-updates-october-30-2022/article66075016.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morbi bridge collapse live updates | Death toll reaches 90; PM Modi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdDy2d3dIbttIe1MDhr6AMpt_cEcqB8k5nECaJGKDZrBqCjrrBAFQDR5RII15WIRUDrtzXke8m" alt="Morbi bridge collapse live updates | Death toll reaches 90; PM Modi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The State government has officially not given any casualty figure but the Prime Minister and Chief Minister have announced the ex gratia for the dead and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/india-news/gujarat-morbi-bridge-on-river-collapses-many-gets-in-water-news-in-hindi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gujarat: मोरबी में पुल टूटने से 81 की मौत, सीएम ने लिया हालात का जायजा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Gujarat: मोरबी में पुल टूटने से 81 की मौत, सीएम ने लिया हालात का जायजा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>गुजरात के सीएम भूपेंद्र पटेल मोरबी में घटनास्थल पर पहुंचे और स्थिति का जायजा लिया। इस&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/gujarat/ahmedabad-cable-bridge-broken-in-gujarat-morbi-many-people-fell-in-machhu-river-watch-the-video-of-the-accident-23172016.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gujarat के मोरबी में पुल गिरने से मरने वालों की संख्या 100 से अधिक, पीएम ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRFOP4A5_LrFImG9n6aWeAj8ElspCPOJIChUpyj_dRAFr8ekDfDChrqmOcQdTyuYeMy9_OUTIHf" alt="Gujarat के मोरबी में पुल गिरने से मरने वालों की संख्या 100 से अधिक, पीएम ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>गुजरात के मोरबी जिले में मच्छू नदी पर बना केबल पुल टूट गया। यह पुल करीब 200 साल पुराना था&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/india/gujarat-morbi-cable-bridge-collapses-many-people-missing-rescue-operation-continue-2248771'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morbi Cable Bridge Collapses: मोरबी में पुल टूटा- 84 से ज्यादा की मौत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTUmMb9nBhdkJjNvOOuryLlp73B0hji98CFZxVzrQSJFZyGG8IVovO4WaWHFqiAuXo3bTzsHTiq" alt="Morbi Cable Bridge Collapses: मोरबी में पुल टूटा- 84 से ज्यादा की मौत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gujarat News: गुजरात के मोरबी में माच्छू नदी पर स्थित ये पुल हाल ही में खोला गया था.</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/gujarat/story-gujarat-news-major-accident-occurred-due-to-cable-bridge-collapse-over-the-machhu-river-in-morbi-many-people-fell-into-the-river-7285226.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE : गुजरात के मोरबी में बड़ा हादसा, केबल पुल टूटने से कई लोग नदी में गिरे ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWIGjiDOzVlaYn0iTGUfuRDZR1XGV0EpLxBl_E35m6jsmJGQlNWcpfwWZrJ02zRWju_zH3s6F2" alt="LIVE : गुजरात के मोरबी में बड़ा हादसा, केबल पुल टूटने से कई लोग नदी में गिरे ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gujarat Morbi Bridge Collapse : गुजरात के मोरबी में रविवार शाम को मच्छु नदी पर बना केबल पुल टूटने से&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}