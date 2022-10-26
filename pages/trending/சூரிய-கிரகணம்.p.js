import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>சூரிய கிரகணம்</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,சூரிய கிரகணம்"/>
        <meta name="description" content="Trending News about சூரிய கிரகணம்" /></Head><Template>
            <h1 style={{fontSize: "30"}}>சூரிய கிரகணம்</h1>
            <Image width={800} height={500} src="https://media.dailythanthi.com/h-upload/2022/10/25/941122-sun.jpg" alt="சூரிய கிரகணம்"/>
            <h3>Recent News</h3>
            <a href='https://www.dailythanthi.com/News/State/a-solar-eclipse-was-seen-in-chennai-822569'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>சென்னையில் சூரிய கிரகணம் தெரிந்தது</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS5tak8giJXme2lvAFRiAo0IwwRbRFiF4SWOeAyDFofrUnUlf2KASof71JlH3nyDqi7H2OexrAA" alt="சென்னையில் சூரிய கிரகணம் தெரிந்தது" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>சென்னையில் சூரிய கிரகணம் நேற்று தெரிந்தது என்றும், 10 நிமிடங்கள் மட்டுமே பார்க்க&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dinamani.com/india/2022/oct/26/%E0%AE%87%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%AF%E0%AE%BE%E0%AE%B5%E0%AE%BF%E0%AE%B2%E0%AF%8D-%E0%AE%A4%E0%AF%86%E0%AE%A9%E0%AF%8D%E0%AE%AA%E0%AE%9F%E0%AF%8D%E0%AE%9F-%E0%AE%AA%E0%AE%95%E0%AF%81%E0%AE%A4%E0%AE%BF-%E0%AE%9A%E0%AF%82%E0%AE%B0%E0%AE%BF%E0%AE%AF-%E0%AE%95%E0%AE%BF%E0%AE%B0%E0%AE%95%E0%AE%A3%E0%AE%AE%E0%AF%8D-3937899.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>இந்தியாவில் தென்பட்ட பகுதி சூரிய கிரகணம்...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShZuQswcOpPGrhn9eRX72t63CImDDJfIMYmp3Mk9pCDAbkh0sjPmob-fMFUShgJ-lyzlBlcFrk" alt="இந்தியாவில் தென்பட்ட பகுதி சூரிய கிரகணம்..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ரஷியாவின் மத்திய பகுதி உள்ளிட்ட மத்திய ஆசிய பகுதிகளில் முழு சூரிய கிரகணத்தைக் காண&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.oneindia.com/news/chennai/is-a-solar-eclipse-really-harmful-for-pregnant-women-what-science-says-482164.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>தொடங்கியது சூரிய கிரகணம்! கர்ப்பிணி பெண்களுக்கு ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSmkWcC9beApxWTunwBvS6ygue-dcdJKbBzYabeDhfpyhTenT9XlCAH4iFRxRAhU1sSIgPOxtnt" alt="தொடங்கியது சூரிய கிரகணம்! கர்ப்பிணி பெண்களுக்கு ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No scienctific backing supporting that solar eclipse harmful for pregnant women: solar eclipse effect on pregnant women.</p></div>
            </div>
        </a><a href='https://www.dailythanthi.com/News/India/blockade-of-temples-in-karnataka-821996'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>சூரிய கிரகணம் எதிரொலி: கர்நாடகத்தில் ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTzgwSzkFjSmVDLv-rp16scR-mqqvYmU8JKNlXk3RXRqtmGjJn8O5P0nBN9YZpWPWMp29wq3ww3" alt="சூரிய கிரகணம் எதிரொலி: கர்நாடகத்தில் ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>சூரிய கிரகணம் எதிரொலியாக கர்நாடகத்தில் உள்ள கோவில்களின் நடை அடைக்கப்பட்டது.</p></div>
            </div>
        </a><a href='https://www.dinamani.com/india/2022/oct/25/partial-solar-eclipse-as-witnessed-in-delhi-jammu-and-amritsar-3937785.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>தில்லி, ஜம்மு, அமிருதசரஸ் பகுதிகளில் தோன்றியது ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYp3y7-ZIxmSyRCNkCHnsZX1TxmFd1qPnplGrDgGRRy6UlWv_7LB0X9eLwIbMWwD7fx8I7IZwJ" alt="தில்லி, ஜம்மு, அமிருதசரஸ் பகுதிகளில் தோன்றியது ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>இந்தியாவில் தில்லி, ஜம்மு, அமிருதசரஸ் ஆகிய பகுதிகளில் சூரிய கிரகணம் தென்படத்&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.indianexpress.com/science/partial-solar-eclipse-to-be-visible-in-india-today-dos-and-donts-530874/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>சூரிய கிரகணம் 2022 : எச்சரிக்கை.. நீங்கள் செய்ய ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRn77Wc1LbR11BkV8u528JBX_bXFXW7HtwbEwVsZmoFVLR83lU6nQrUjUUj2F7PQ2jnYil7MO46" alt="சூரிய கிரகணம் 2022 : எச்சரிக்கை.. நீங்கள் செய்ய ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A child looking at a solar eclipse through eclipse glasses. உலகின் பல்வேறு பகுதிகளில் இன்று (அக்டோபர் 25) ப‌குதி&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.oneindia.com/news/delhi/what-are-the-temples-closed-during-solar-eclipse-and-what-are-open-including-ujjain-mahakaleshwar-te-482158.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>சூரிய கிரகணம்.. பல பிரபல கோவில்களில் ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTh49cTtDN15BmbVy0NgS0AxUNXPzVBlHtjaW5CCd_GQE5R0qxeX_1-Q5RZAQ-XXY3JXsySCj1k3A" alt="சூரிய கிரகணம்.. பல பிரபல கோவில்களில் ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Due to the partial solar eclipse many Temples across the country shuts it&#39;s doors But devotees can visit the Mahakaleshwar temple in Ujjain even during eclipse.</p></div>
            </div>
        </a><a href='https://www.nakkheeran.in/24-by-7-news/thamizhagam/partial-solar-eclipse-children-enjoyed-watching-through-special-glasses'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>பகுதி நேர சூரிய கிரகணம்; பிரத்யேக கண்ணாடிகள் ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="பகுதி நேர சூரிய கிரகணம்; பிரத்யேக கண்ணாடிகள் ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>இந்திய அளவில் அகமதாபாத், மும்பை, டெல்லி, ஜெய்ப்பூர் ஆகிய நகரங்களிலும் சூரிய கிரகணம்&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.oneindia.com/memes/solar-eclipse-memes-are-taking-the-internet-by-storm-482184.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>சீக்கிரமா போ நாங்க பிரியாணி சாப்பிடனும் ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSFsGO2a9pCv5YOqQLymKhNM6gHsa2oF9MNB-CFQFCAXXp_oPmpznTrdkU-aR6FZowRu-VMXkOx" alt="சீக்கிரமா போ நாங்க பிரியாணி சாப்பிடனும் ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As the country&#39;s partial solar eclipse is over, solar eclipse memes are doing the rounds on the internet. Especially Vadivelu&#39;s comedy scenes are surfing the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindutamil.in/news/tamilnadu/887254-thanjavur-peruvudaiyar-temple-closed.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>பகுதி சூரிய கிரகணம்: தஞ்சாவூர் பெரிய கோயில் மூடல்</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSfAKSJGJu3RCjiTn-_REbL1cwUovjSKrxoo59cNM4KezJJE-c2ze4Zw6kgFa7QZpD2Uky9EQ4O" alt="பகுதி சூரிய கிரகணம்: தஞ்சாவூர் பெரிய கோயில் மூடல்" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>சூரிய கிரகணத்தை முன்னிட்டு தஞ்சாவூர் பெரிய கோயில் இன்று (அக்.25) நடை சாத்தப்பட்டு&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}