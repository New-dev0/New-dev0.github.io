import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cotton On</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cotton On"/>
        <meta name="description" content="Trending News about Cotton On" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cotton On</h1>
            <Image width={800} height={500} src="https://www.nzherald.co.nz/resizer/wjg936R0aSCrAvq9R0G5GkHEqzA=/1200x675/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/AEDLK2L3TTW4VLT7T5ZLCJL2P4.jpg" alt="Cotton On"/>
            <h3>Recent News</h3>
            <a href='https://www.nzherald.co.nz/whanganui-chronicle/news/cotton-on-quilters-donate-their-work-to-ihc/S3XUGRECWSCC7E4NIJVDTKMCPU/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cotton On Quilters donate their work to IHC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKt8gGvIQEg8UfbTCke8XmPAdT0_fnBsPwpcyj_YFHJPoxl4z2FjCPpQUs-fGRqHHt_JigoiNj" alt="Cotton On Quilters donate their work to IHC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Frances Hollenback and Veronica Davidson of Cotton On Quilters last week dropped into IDEA Services Whanganui&#39;s headquarters at Alma Gardens,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}