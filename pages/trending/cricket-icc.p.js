import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cricket ICC</title></Head><Template>
            <h1 style={{fontSize: "30"}}>Cricket ICC</h1>
            <Image width={800} height={500} src="https://resources.pulse.icc-cricket.com/ICC/photo/2022/09/23/6f571b29-ff2d-42c4-9b85-127af93ea877/GettyImages-1367149743.jpg" alt="Cricket ICC"/>
            <h3>Recent News</h3>
            <a href='https://www.icc-cricket.com/media-releases/2800653'>
        <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
            <h3>ICC U19 Men&#39;s Cricket World Cup 2024 Qualification continues as ...</h3>
            <div style={{ display: "flex" }}>
            <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQHdwGLmWWlP4VMDtUk0MlVBfRHV_OpA5WmtSIjXk0eqQwkhrtJnjPhnI1QGl2k4eNrGKxx_VcC" alt="ICC U19 Men&#39;s Cricket World Cup 2024 Qualification continues as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
            <p style={{marginLeft: "15px"}}>ICC U19 Men&#39;s Cricket World Cup Asia Division 2 Qualifier takes place in Oman from 29 September to 7 October; Eight teams will compete for two places in the&nbsp;...</p></div>
        </div>
    </a>
        </Template></>;
}