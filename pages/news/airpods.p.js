import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>AirPods</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,AirPods"/>
        <meta name="description" content="Trending News about AirPods" /></Head><Template>
            <h1 style={{fontSize: "30"}}>AirPods</h1>
            <Image width={800} height={500} src="https://imageio.forbes.com/specials-images/imageserve/632c5b74a04361ee3044b126/0x0.jpg?format=jpg&crop=3671,2448,x0,y151,safe&width=1200" alt="AirPods"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.com/sites/davidphelan/2022/11/25/apple-airpods-pro-2-secrets-revealed-including-why-theres-no-lossless-audio/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple AirPods Pro 2 Secrets Revealed, Including Why There&#39;s No ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVOn12sTH7aNrlXaY2niYydWhe0GWMrJ4LyG-Kmu6fIGiw9iw8jF-YGtj6P36yl-D1FDAZqbWC" alt="Apple AirPods Pro 2 Secrets Revealed, Including Why There&#39;s No ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A new interview with Esge Andersen, an engineer from the acoustics team at Apple, has just appeared at What Hi-Fi?. Kashfia Kabir, the Hi-Fi and Audio&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zdnet.com/article/airpods-pro-2-black-friday-deal-2022-sales/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AirPods Pro 2 Black Friday deal 2022: Save $50 on Amazon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTEpFODrfG1f1pAEnnxS4zc9ULotChHhB9ol7yBSdqnKtzg82XG5Us3vgx61Te1CFqtZywkeQPX" alt="AirPods Pro 2 Black Friday deal 2022: Save $50 on Amazon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shut out the background noise with these noise-canceling Apple AirPods Pro 2 for $50 off during Black Friday.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/essentials/best-black-friday-deals-on-apple-airpods-apple-earbuds-are-their-lowest-price-ever-2022-11-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday deals on Apple AirPods: Apple earbuds are their ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTyHY9H4PAEON08JlKVoVYElu3he8m4exCrEUlIpDG5i4Unfl06M881igwFNw22A4fPBTXOnegC" alt="Best Black Friday deals on Apple AirPods: Apple earbuds are their ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CBS Essentials is created independently from the CBS News staff. We may receive commissions from some links to products on this page. Promotions are subject to&nbsp;...</p></div>
            </div>
        </a><a href='https://gamerant.com/apple-airpods-pro-black-friday-deal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>This is One of the Best Apple AirPods Pro Deals You&#39;re Going to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ7f-mVWogz0iCv13LUkKIRn_-GO5gwqDRXtkz2Rbmig5gevZ5rRIxMCULTS_TikdTFBU2wTvWC" alt="This is One of the Best Apple AirPods Pro Deals You&#39;re Going to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon has one of the best Black Friday deals available for Apple&#39;s second-generation AirPods Pro, offering a steep discount on the earbuds.</p></div>
            </div>
        </a><a href='https://www.al.com/business/2022/11/black-friday-sale-amazon-offers-deal-on-apple-airpods-pro-2nd-gen.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday sale: Amazon offers deal on Apple Airpods Pro 2nd Gen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQEhA3e-RKPH96jekOj-lsxZZWeW1IMNn127Ef9WPUs7E0X0_VaBOEjS-fRGdmzQcwXJcLVzB48" alt="Black Friday sale: Amazon offers deal on Apple Airpods Pro 2nd Gen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Apple-designed H2 chip pushes advanced audio performance even further, resulting in smarter noise cancellation and more immersive sound. The low-distortion,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.freep.com/story/money/reviewed/2022/11/25/black-friday-deals-apple-airpods-pro-on-sale-now/69676299007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Under $200: Apple AirPods Pro 2nd Gen are on sale for Black ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6NooSAIJXLJ6ABBQPe1aHTxR8xoOAfiaYdrZU9T2iMW-lzyvdLSTTtj52ZL4WZVs7JnNWrNRE" alt="Under $200: Apple AirPods Pro 2nd Gen are on sale for Black ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today&#39;s Black Friday sales include the Apple AirPods Pro (second-gen). These are the best earbuds you can buy and are marked down to $199.99.</p></div>
            </div>
        </a><a href='https://appleinsider.com/articles/22/11/25/airpods-pro-2-are-airpods-max-in-your-pocket-says-apple'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AirPods Pro 2 are AirPods Max in your pocket, says Apple</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7T5mWy4jwP95WFmgUabKcBxXH3Lbd5SQ3oJrMu_pugKb-5sVPQ0u3IyON09k7iHVb4kOoRqNS" alt="AirPods Pro 2 are AirPods Max in your pocket, says Apple" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apple engineer Esge Andersen says that the company wants AirPods Pro 2 to sound like AirPods Max, and has detailed steps the team took to get there.</p></div>
            </div>
        </a><a href='https://9to5mac.com/2022/11/25/apple-engineer-high-quality-audio-airpods-lossless/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apple engineer details how the company improved the audio quality ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSL6VmflqVnxrHL5zW9JouZyWgdRKQZf1mIVKXodhrIeU2DODqnCYn6jTMJVTVe12QfySDRoNti" alt="Apple engineer details how the company improved the audio quality ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apple this year released the second generation AirPods Pro, and while it brings a lot of improvements, Apple&#39;s new wireless earbuds still lack Lossless&nbsp;...</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/money/reviewed/2022/11/25/amazon-apple-airpods-pro-black-friday-deal/10772236002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Score Apple AirPods Pro at the lowest price we&#39;ve ever seen—save ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGyUQ1BoJcYgDMnBl_rKGYFMlj_CzEkjrC7lhal-Vfv50TVlco4n2XiL5BF-km8Ipyp5Nj4HFt" alt="Score Apple AirPods Pro at the lowest price we&#39;ve ever seen—save ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grab a pair of 2nd generation Apple AirPods Pro at Amazon for the lowest price we&#39;ve seen all year. Shop the Black Friday deal today.</p></div>
            </div>
        </a><a href='https://www.tomsguide.com/deals/airpods-pro-2-at-lowest-price-ever-is-my-favorite-apple-black-friday-deal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AirPods Pro 2 at lowest price ever is my favorite Apple Black Friday ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjv1vMYbZXEzvJVhwvmdHhnWZe4NgLWHy_VQR7y69IteG2piv78yBsNRCRKo96t118wiSuiacu" alt="AirPods Pro 2 at lowest price ever is my favorite Apple Black Friday ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apple&#39;s AirPods Pro 2 are $50 off for Black Friday, and it&#39;s a great deal on the best wireless earbuds around.</p></div>
            </div>
        </a>
        </Template></>;
}