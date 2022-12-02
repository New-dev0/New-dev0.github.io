import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Elf on the shelf</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Elf on the shelf"/>
        <meta name="description" content="Trending News about Elf on the shelf" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Elf on the shelf</h1>
            <Image width={800} height={500} src="https://www.thereporter.com/wp-content/uploads/2018/08/VAC-Filler-Photo.png" alt="Elf on the shelf"/>
            <h3>Recent News</h3>
            <a href='https://www.thereporter.com/2022/12/01/marilynn-andersons-school-newz-the-elf-on-the-shelf-sees-all/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marilynn Anderson&#39;s School Newz: The Elf on the Shelf sees all!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBZ4TnxqVaKaH6nKqyzgcQQngQJfuySwWdbpcff8pi3YCLnvxfXLaUIfzn6OUGC9werodEdAoU" alt="Marilynn Anderson&#39;s School Newz: The Elf on the Shelf sees all!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Round up some words to fill in the blanks and have fun with this totally fictional story. Here I am, kids: Miss ______, your school librarian,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}