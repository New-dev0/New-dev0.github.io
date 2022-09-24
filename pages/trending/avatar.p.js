import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Avatar</title></Head><Template>
            <h1 style={{fontSize: "30"}}>Avatar</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-94410966,width-1070,height-580,imgsize-42274,overlay-etpanache/photo.jpg" alt="Avatar"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/magazines/panache/avatar-strikes-box-office-gold-for-the-3rd-time-bags-rs-1-cr-through-advance-booking-in-india/articleshow/94410936.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Avatar&#39; strikes box-office gold for the 3rd time, bags Rs 1 cr through ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSqF866KHQ8XDucUyVuQCxFnXgDiPUkEP0n07eRqeokPrOY9_oDAC1I7Sdt1iCGzQBUJaXc2Qno" alt="&#39;Avatar&#39; strikes box-office gold for the 3rd time, bags Rs 1 cr through ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This is the third time the epic fantasy has been released in theatres. James Cameron&#39;s magnum opus &#39;Avatar&#39; lived up to its title of the &#39;highest grossing&nbsp;...</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/entertainment/hollywood-news/avatar-the-way-of-water-trending-on-twitter-people-got-surprise-from-james-cameron-on-national-cinema-day/articleshow/94412086.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avatar 2: नेशनल सिनेमा डे पर &#39;अवतार&#39; देखने गई ऑडियंस को मिला तगड़ा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQCONsyFn1kKpup-948MMyd7FNSMXQ73LUrqguJVkKagdyKxIDzA_c2BVjtT0dhOMJIrngv9K_F" alt="Avatar 2: नेशनल सिनेमा डे पर &#39;अवतार&#39; देखने गई ऑडियंस को मिला तगड़ा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>नेशनल सिनेमा डे पर &#39;अवतार&#39; देखने गए लोगों को मेकर्स ने ट्रीट दी है। ये ट्रीट &#39;अवतार 2&#39; से&nbsp;...</p></div>
            </div>
        </a><a href='https://collider.com/avatar-rerelease-international-box-office-3-million/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Avatar&#39; Re-release Earns Additional $3.5 Million at International Box ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSuk3J0skQg7RADPTBiA7RTHBMJosGbMAy39wu8Ru9aAo_mDklSZrsELtP8LloIhttrtXUyeIFm" alt="&#39;Avatar&#39; Re-release Earns Additional $3.5 Million at International Box ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Australia, the film opened third place at the box office, earning $400K, with 3D ticket sales accounting for 69% of the total gross. The film&#39;s performance&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/entertainment-arts/movies/story/2022-09-23/avatar-rerelease-sequels-sam-worthington'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why &#39;Avatar&#39; is back in theaters and previewing &#39;Avatar 2&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQNp4hvLlxL0BpnyPyCLRGDNJLe4zkGunw4gGYFJ7ItGbg7M88AXDFcp3aWTKLsCAHlt3AM177s" alt="Why &#39;Avatar&#39; is back in theaters and previewing &#39;Avatar 2&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As James Cameron&#39;s 2009 megahit &#39;Avatar&#39; heads back to theaters, Sam Worthington, Stephen Lang and Jon Landau revisit the epic and tease &#39;Avatar 2.&#39;</p></div>
            </div>
        </a><a href='https://news.abplive.com/entertainment/avatar-re-release-all-set-to-create-box-office-numbers-fans-super-excited-for-avatar-sequel-1555024'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avatar Re- Release All Set To Create Box Office Numbers, Fans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSvWOffq0pSpnr8xP4YLXJ8vMEYU86yzBgMTeWYju0ZRsglmZNRqYzOGvN5bXQI7JhbZTvS7REG" alt="Avatar Re- Release All Set To Create Box Office Numbers, Fans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Audiences are in awe of the remastered footage of Avatar in 4K, high dynamic range and 9.1 besides the long post-credits scene which has also been garnering&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/entertainment/hollywood/avatar-re-release-earns-1-crore-in-advance-bookings-in-india-targets-15-20-million-opening-globally-101663928422291.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avatar re-release earns ₹1 cr in India advance bookings, targets ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7TPJqbqYtPID38r0D3nUvtm9loUL3JGqRevACEIb6-YtK83pSfirVXRimFDolqoDYBhP9ghDB" alt="Avatar re-release earns ₹1 cr in India advance bookings, targets ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avatar re-release has started strongly at the box office both in India and worldwide, registering healthy numbers and further strengthening the film&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://deadline.com/2022/09/avatar-rerelease-international-box-office-china-screening-1235124691/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Avatar&#39; Rerelease Sees $3.5M Across Two Days Offshore ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSEZn80q_5ojKWJixLJRh9eLK4jVfW3ZmJkPCySDoS3NoAJPVy64zevjD85Cvn_uyUute834K3H" alt="&#39;Avatar&#39; Rerelease Sees $3.5M Across Two Days Offshore ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FRIDAY UPDATE: With its Thursday figures tallied, Disney&#39;s rerelease of James Cameron&#39;s Avatar has grossed $3.5M from 37 international box office markets.</p></div>
            </div>
        </a><a href='https://www.hollywoodreporter.com/movies/movie-features/avatar-re-release-how-james-cameron-2009-movie-1235225147/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How James Cameron and Jon Landau Remastered &#39;Avatar&#39; For Its ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQNfUUv3NQhvEt9lz_3KcgZOSTZgngJ9mDTsmPy-oUBbrzEX2L4hi4wE0rnv-OJmeZ9R83yyd4" alt="How James Cameron and Jon Landau Remastered &#39;Avatar&#39; For Its ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avatar is back in theaters, with the 2009 James Cameron movie getting an update for today&#39;s technology.</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/trending/entertainment/news-avatar-is-back-remastered-version-re-releases-in-theatres-today-check-details-200283'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Avatar&quot; is back: Remastered version re-releases in theatres today ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHLj2zVUfSJzHhQCMKmvK0H1KLE1-TXRLbOaDJ9zX7m0w3OnwAvjsgDF1bnIaDPo9phTJ9OZn2" alt="&quot;Avatar&quot; is back: Remastered version re-releases in theatres today ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avatar re-release: James Cameron&#39;s movie is coming back to theatres in remastered 4K High Dynamic Range format, Disney and 20th Century have announced.</p></div>
            </div>
        </a>
        </Template></>;
}