import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jennifer Lopez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jennifer Lopez"/>
        <meta name="description" content="Trending News about Jennifer Lopez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jennifer Lopez</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221123085450-jennifer-lopez-0608.jpg?c=16x9&q=w_800,c_fill" alt="Jennifer Lopez"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/23/entertainment/jennifer-lopez-social-media/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jennifer Lopez&#39;s social media accounts have gone dark</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_TUmVlFv-y4gKjKFqkUcsdFom-iRD_HqUTdsf6ORAUHxoWTl5QGJMk14Y3iEQYoYXKDi-JRlr" alt="Jennifer Lopez&#39;s social media accounts have gone dark" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All of the previous posts on her verified Instagram account have been deleted and there were no new postings on her Facebook, Tik Tok and Twitter accounts.</p></div>
            </div>
        </a><a href='https://variety.com/2022/digital/news/jennifer-lopez-instagram-deleted-social-goes-dark-1235440605/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jennifer Lopez Instagram Account Deletes All Posts, Other Social ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2kYcRKes-sn-OkAO29msTJq1uCcWBu25XGBjMUrlUQNZur6oYQ4fQiDqTfp9O9YxlBbnCAR8p" alt="Jennifer Lopez Instagram Account Deletes All Posts, Other Social ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Without explanation, social media accounts for Jennifer Lopez have turned black and her widely followed Instagram was completely erased.</p></div>
            </div>
        </a><a href='https://nypost.com/2022/11/23/why-jennifer-lopezs-social-media-accounts-suddenly-went-dark/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Jennifer Lopez&#39;s social media accounts suddenly went dark</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT4DXrQmDFszNjF1gcRDhvo1y_vRfLEcQSpjcFLxrMj-DnrZ5OHq4Z5VoEQJHRrJ6UhTVAydHRL" alt="Why Jennifer Lopez&#39;s social media accounts suddenly went dark" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jennifer Lopez stunned her fans Tuesday when her social media posts were deleted and her accounts seemingly went dark.</p></div>
            </div>
        </a><a href='https://www.harpersbazaar.com/celebrity/latest/a42050373/jennifer-lopez-takes-down-instagram-posts-social-media/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jennifer Lopez Has Taken Down All of Her Instagram Posts</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSNamIJ82crnq-uLTTCcfOozZTLb52swzG1OijjRxMhcxG28N7xWyY973GPRhZDVzJCMGRCDlS4" alt="Jennifer Lopez Has Taken Down All of Her Instagram Posts" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The superstar has replaced her profile pics with a black circle on all of her social media channels.</p></div>
            </div>
        </a><a href='https://www.yahoo.com/entertainment/jennifer-lopez-disappears-from-social-media-channels-heres-why-her-fans-are-beyond-excited-194505148.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jennifer Lopez disappears from social media channels. Here&#39;s why ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRA67fUenGAX4eUjtOqzxs3ueVF1mLVLypCOecCXq0yVAJ2ESXkNObj0EiGye2r_OcSxBTJ3sbX" alt="Jennifer Lopez disappears from social media channels. Here&#39;s why ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The &quot;Jenny From the Block&quot; singer last released an album in 2014.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/lifestyle/celebrities/2022/11/23/637e4bcdca4741356e8b461d.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jennifer Lopez&#39;s Instagram account goes absolutely dark in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQlfbos8W0bdtLOnZ0MKt2MjzsG4gaZ6trOee44xIYVyFv4tntEJczToZyrSvzUv1FrvmJGFhP3" alt="Jennifer Lopez&#39;s Instagram account goes absolutely dark in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Even though there is no explanation to wht is taking place on Jennifer Lopez&#39;s social media platforms, the star just deleted all her posts on Instagram.</p></div>
            </div>
        </a>
        </Template></>;
}