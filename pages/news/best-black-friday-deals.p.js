import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Best Black Friday deals</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Best Black Friday deals"/>
        <meta name="description" content="Trending News about Best Black Friday deals" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Best Black Friday deals</h1>
            <Image width={800} height={500} src="https://assets.bonappetit.com/photos/637e59d7e4151c8d9f976266/16:9/w_1280,c_limit/Black-Friday-Kitchen-Deals2.jpg" alt="Best Black Friday deals"/>
            <h3>Recent News</h3>
            <a href='https://www.bonappetit.com/story/black-friday-kitchen-deals-2022-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>17 Best Black Friday Kitchen Deals (2022)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRl_XWrW3ula7GQ4B1hXVvxuZ1eJktOdhlRgAJ3-mrcRcB0QzJ-r20p87uvQ6semfMajAPkKXuJ" alt="17 Best Black Friday Kitchen Deals (2022)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From espresso machines to air fryers and Le Creusets, these are the best Black Friday kitchen deals to shop right now.</p></div>
            </div>
        </a><a href='https://www.cnn.com/cnn-underscored/deals/apple-ipad-black-friday-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The best Black Friday deals on Apple iPads to shop right now</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTrcQJ_K7W7FZKnP-wrkFCEjInQ55SZ7G5CBRDVWLr6-kevWnq-f5vAbPBcAHm6Smxk8KWnr18m" alt="The best Black Friday deals on Apple iPads to shop right now" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday is still a great time to find some hot deals on Apple&#39;s popular tablet. Whether you want to watch movies and shows, handily surf the web,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tomshardware.com/news/live/black-friday-gaming-monitor-deals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday Deals on Gaming Monitors</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQgxdsIwtx-2a3Mya9jeqqtnjnDp0S5CvygV6OMZb6CLfq1pDoHBBn8xJXrT3fITJygMzk96oWZ" alt="Best Black Friday Deals on Gaming Monitors" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;re tracking sales on the best gaming monitors to flesh out the ultimate gaming rig.</p></div>
            </div>
        </a><a href='https://www.tomshardware.com/news/live/black-friday-gaming-laptop-deals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday Deals on Gaming Laptops</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZg2fXMAPN8wom6JY7QF2KNMq5rbD2n1VDLtg5L8FvRuqxBfhiNcfYmMWdWGD5uMDncT0_F5vF" alt="Best Black Friday Deals on Gaming Laptops" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The ASUS ROG Zephyrus G14 is a slim 14-inch laptop that&#39;s great for gaming on the go. This laptop comes armed with a Ryzen 7 5800HS processor under the hood,&nbsp;...</p></div>
            </div>
        </a><a href='https://nypost.com/2022/11/24/the-best-black-friday-deals-for-your-zodiac-sign/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The best Black Friday 2022 deals for your zodiac sign</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQSwHNDyn-Y2iFGIh0rSIkbpky3gxBv0IxxPpqu9fdONo4_sFEOStvuPe9M6yXBU2FseIrfkA6H" alt="The best Black Friday 2022 deals for your zodiac sign" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s Black Friday, my babies! The hallowed day the architects of the American dream demand we get fat and spend like we are rich, regardless of income or&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wired.com/story/best-black-friday-deals-under-50-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>53 Best Black Friday Deals Under $50 (2022): Electric Toothbrushes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSy3k1WKc169tZ3MnQYF53_rgHTdRx90H4OD9ZNK7cm4lEv0-q-yYKL2PnIpUg8tk6dNGgtpF5E" alt="53 Best Black Friday Deals Under $50 (2022): Electric Toothbrushes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Limited budget? These affordable gizmos are WIRED favorites, and now they&#39;re even cheaper.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/wirecutter/money/best-black-friday-deals-under-100-2022-1124/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 40+ Best Black Friday Deals Under $100</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSeZb8iZLe7hId-YwcRVNn6qhEyPVsMW9tXkUW7gTv_zn7vzGyarXFGweUFCuSEm2mRokFXDDj" alt="The 40+ Best Black Friday Deals Under $100" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>These Wirecutter-approved Black Friday deals are all under $100—perfect for if you&#39;re ready to splurge but don&#39;t want to spend too much.</p></div>
            </div>
        </a><a href='https://www.cnn.com/cnn-underscored/deals/black-friday-under-25-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The best Black Friday deals under $25</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWUDwXqW_9ntOb5Ctzb64jQdxAnOhLMqhPMm2fTxtjFb17MxnKYavBYPStBQDXCaieQeTikXpf" alt="The best Black Friday deals under $25" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We rounded up some of the best Black Friday deals — from beauty to smart home tech to toys and accessories — all under $25 you can shop right now.</p></div>
            </div>
        </a><a href='https://www.cnn.com/cnn-underscored/deals/black-friday-kitchen-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The best Black Friday kitchen deals to shop before they&#39;re gone</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS19qR3XnAQQJI38H38z2jXvp3WadMtyo3G4F4TZBi2iK5X6BkAIuSx0KM3TsYzh__fgY7yCxe_" alt="The best Black Friday kitchen deals to shop before they&#39;re gone" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If you&#39;re looking to buy a brand new air fryer, blender or coffee maker this year, you won&#39;t want to skip these Black Friday kitchen deals.</p></div>
            </div>
        </a><a href='https://appleinsider.com/articles/22/11/24/the-best-black-friday-deals-on-4k-monitors-for-as-low-as-199'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday deals on 4K monitors, for as low as $199</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNIO7eRL2_qjKhWDSNu5o5HDxFtjKCHBP9rmgsGzS31MBYhmsY__a1_UFOwL7Ksbh0Q-bdwDrY" alt="Best Black Friday deals on 4K monitors, for as low as $199" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Now is the time to upgrade your monitor to a 4K one, as Black Friday sales bring in great savings on everything from budget to ultra wide 4K displays,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}