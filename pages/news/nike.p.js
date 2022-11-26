import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nike</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nike"/>
        <meta name="description" content="Trending News about Nike" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nike</h1>
            <Image width={800} height={500} src="https://sneakernews.com/wp-content/uploads/2022/11/nike-air-cross-trainer-low-hot-lava-FD0788-101-4.jpg" alt="Nike"/>
            <h3>Recent News</h3>
            <a href='https://sneakernews.com/2022/11/25/nike-air-cross-trainer-low-hot-lava-fd0788-101/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nike Cross Trainer Low &quot;Hot Lava&quot; FD0788-101 | SneakerNews.com</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTAeaAmYvSzbkqjUVdKUse6IH7JQbPk1xJEDTZZ1sHxkW5Cnqr3SAYLs_qeMnNlqSUunI06wknN" alt="Nike Cross Trainer Low &quot;Hot Lava&quot; FD0788-101 | SneakerNews.com" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Few colors bring us back to the late 80s/early 90s like the hot crimson red that surfaced on Nike Trainers at the time. Over three decades later,&nbsp;...</p></div>
            </div>
        </a><a href='https://sneakernews.com/2022/11/25/nike-zoom-vomero-5-photon-dust-chrome-gridiron-sail-fd0884-025/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nike Zoom Vomero 5 &quot;Photon Dust&quot; FD0884-025 | SneakerNews.com</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRbfj9NJtEOWrGzlChwo38tm2fDpHiI-jaz4jdRCrXXF15oGny3xhpz8XhnFKy-8LDA3JrRa8ww" alt="Nike Zoom Vomero 5 &quot;Photon Dust&quot; FD0884-025 | SneakerNews.com" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thanks to co-signs from A-COLD-WALL* back in 2018, the sneaker has enjoyed a cult-like following amongst fashion enthusiasts over the last handful of years,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fool.com/investing/2022/11/25/nike-is-going-all-in-on-web3-heres-how-investors-c/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nike Is Going All In on Web3. Here&#39;s How Investors Can Benefit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQP5Wnbt_NT8RevWBVZzus1-40Mlw0nB3Rpmq14pNv09QYBQ55J3qUazURZZAQFuex29Kk7I0mQ" alt="Nike Is Going All In on Web3. Here&#39;s How Investors Can Benefit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The launch of .Swoosh will serve as a hub for all of Nike&#39;s virtual apparel and digital assets. Users will be able to purchase Nike brand clothing and shoes for&nbsp;...</p></div>
            </div>
        </a><a href='https://hypebeast.com/2022/11/yoon-ahn-ambush-nike-air-force-1-low-blue-collaboration-teaser'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yoon Ahn Teases AMBUSH x Nike Air Force 1 Low in Blue</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRkoi6Vg-zoS-RljP7W-Tvwt2UmbngYLTPorRKAYWVPS3N7E3rc8QzuCv_NbuWCLD6zyfTeh-F4" alt="Yoon Ahn Teases AMBUSH x Nike Air Force 1 Low in Blue" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eye-catching yellow touches enhance the medial logos and tumbled leather heel tabs debossed with further Nike insignia. Plastic heel guards see tonal AMBUSH&nbsp;...</p></div>
            </div>
        </a><a href='https://sneakerbardetroit.com/nike-air-cross-trainer-3-low-hot-lava-fd0788-101-release-date/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Official Photos of the Nike Air Cross Trainer 3 Low &quot;Hot Lava&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQiWgH-tjpUh3SgDv_pIsHNjPtQk7IDhU2aFRsC3gT2RTrtDWyT5Iysqac8HDCByrAH9ctzBeQ9" alt="Official Photos of the Nike Air Cross Trainer 3 Low &quot;Hot Lava&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nike Air Cross Trainer 3 Low Hot Lava Style Code: FD0788-101 Release Date: 2023 Price: $130 USD Where to Buy: Nike.com.</p></div>
            </div>
        </a>
        </Template></>;
}