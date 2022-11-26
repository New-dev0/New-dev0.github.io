import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>PLT</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,PLT"/>
        <meta name="description" content="Trending News about PLT" /></Head><Template>
            <h1 style={{fontSize: "30"}}>PLT</h1>
            <Image width={800} height={500} src="https://www.thesun.ie/wp-content/uploads/sites/3/2022/11/plt-op.jpg?1669400351&strip=all&quality=100&w=1920&h=1080&crop=1" alt="PLT"/>
            <h3>Recent News</h3>
            <a href='https://www.thesun.ie/fabulous/9796491/perfect-christmas-party-wear-plt-big-boobs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I have big boobs and found the perfect Christmas party wear items ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT1mZgtFW5gOuUojQdiYGUcTbhkUvLYk3LGwpU_7Z7R-4GOitpfA2ayWkw4cBXFttGSynRmDGqP" alt="I have big boobs and found the perfect Christmas party wear items ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NOW that the Christmas party season is here we&#39;re all on the hunt for the best outfit.And one woman has revealed her top picks from Pretty Little Thin.</p></div>
            </div>
        </a>
        </Template></>;
}