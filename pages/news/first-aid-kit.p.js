import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>First Aid Kit</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,First Aid Kit"/>
        <meta name="description" content="Trending News about First Aid Kit" /></Head><Template>
            <h1 style={{fontSize: "30"}}>First Aid Kit</h1>
            <Image width={800} height={500} src="https://louderthanwar.com/wp-content/uploads/2022/12/NIK_2640.jpg" alt="First Aid Kit"/>
            <h3>Recent News</h3>
            <a href='https://louderthanwar.com/first-aid-kit-o2-apollo-manchester-live-review/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>First Aid Kit: O2 Apollo, Manchester - live review</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSxPGZMwpIb0nDBvBPv6J-kJjVRyOnXDasq9gobXkVlKW3QFhGxB8jeWfYZQx1oEsqNRYw34oZ9" alt="First Aid Kit: O2 Apollo, Manchester - live review" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>First up is Lola Kirke and her band playing a very short set of country rock for the connoisseurs. Lola comes from a family of excellent modern culture stock&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}