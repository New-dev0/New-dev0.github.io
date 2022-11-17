import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tommy Bowe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tommy Bowe"/>
        <meta name="description" content="Trending News about Tommy Bowe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tommy Bowe</h1>
            <Image width={800} height={500} src="https://www.thesun.ie/wp-content/uploads/sites/3/2022/11/tbowenee_offplatnewLARGE.jpg?strip=all&quality=100&w=1920&h=1080&crop=1" alt="Tommy Bowe"/>
            <h3>Recent News</h3>
            <a href='https://www.thesun.ie/tv/9742064/ireland-am-tommy-bowe-return-work-serious-surgery/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ireland AM star Tommy Bowe reveals when he&#39;ll return to work after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTUhWRtNf86Bk3cAjp07uB7s-z1GBKtCP-t69RW6cNVCBaRDOwZHQvXV9Q5bTSjfKOugMkO37U5" alt="Ireland AM star Tommy Bowe reveals when he&#39;ll return to work after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IRELAND AM star Tommy Bowe has revealed when he&#39;ll be back in work after undergoing surgery.The former rugby star took time off the morning show this.</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/showbiz/tommy-bowe-thanks-fans-support-28503275'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tommy Bowe thanks fans for support amid Ireland AM absence as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhRvRgXqGLhSMqMzJNvrqj4d-AJO27Xr145MySvzmgvgzOr-MgraHPNptvasz4UPtGwxPGYMwG" alt="Tommy Bowe thanks fans for support amid Ireland AM absence as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tommy Bowe has thanked fans for their well wishes after he revealed he was in hospital for a procedure on his knee. It comes as Virgin Media viewers noticed&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rsvplive.ie/news/celebs/ireland-ams-tommy-bowe-gives-28505045'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ireland AM&#39;s Tommy Bowe gives an update on his condition after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTp1linVP6C3zvOSZ_qUZB9p6KiNvyWeu5mDi1t4SM2XYA4FV4CBhK8KJI_3AANUfzhPxZvxXcy" alt="Ireland AM&#39;s Tommy Bowe gives an update on his condition after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Virgin Media star explained that he had surgery on his knee as he updated fans on the reason for his absence from Ireland AM, but will be back in action&nbsp;...</p></div>
            </div>
        </a><a href='https://extra.ie/2022/11/16/entertainment/movies-tv/tommy-bowe-hospital'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tommy Bowe Shares Update As He Returns Home From Hospital</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-ZBN3dcu4UurQrH6Z5EyP5YYsswTGwf_r-ERwSQKkCKWEBkhbK-igrgdjr7q6uBp_HwWTYMUc" alt="Tommy Bowe Shares Update As He Returns Home From Hospital" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tommy Bowe has shared an update on the condition of his knee after he returned home following a surgery.</p></div>
            </div>
        </a>
        </Template></>;
}