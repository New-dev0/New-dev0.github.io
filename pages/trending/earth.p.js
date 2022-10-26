import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Earth</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Earth"/>
        <meta name="description" content="Trending News about Earth" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Earth</h1>
            <Image width={800} height={500} src="https://www.popsci.com/uploads/2022/08/08/01_Martin_probe.jpg?auto=webp" alt="Earth"/>
            <h3>Recent News</h3>
            <a href='https://www.popsci.com/environment/climate-science-edge-of-the-earth/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scenes of climate science at the edge of the Earth</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSSLE-VNyVBMcsET-J_G72VRg0jc-o3dKDpiPZwrK7DD0Zw_K_T5ZdANLRFmHnxEf9C8aTtVRz_" alt="Scenes of climate science at the edge of the Earth" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a frigid landscape, a group of dedicated scientists work to record stark signs of the climate crisis.</p></div>
            </div>
        </a>
        </Template></>;
}