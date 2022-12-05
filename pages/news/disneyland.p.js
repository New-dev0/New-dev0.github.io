import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Disneyland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Disneyland"/>
        <meta name="description" content="Trending News about Disneyland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Disneyland</h1>
            <Image width={800} height={500} src="https://www.redlandsdailyfacts.com/wp-content/uploads/2022/12/Christensen-Headshot-16x9-1.jpeg?w=488&h=273" alt="Disneyland"/>
            <h3>Recent News</h3>
            <a href='https://www.redlandsdailyfacts.com/2022/12/04/man-jumps-to-death-from-disneyland-parking-structure/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man who jumped to death at Disneyland was Huntington Beach ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7rrA_GUiDzF0x8r0NbjY__wNExEYbFwwAwEnjD-UqQOznlSRtP5ZrwC3NnCJU7FwSNV4dq3GT" alt="Man who jumped to death at Disneyland was Huntington Beach ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Christopher Christensen, 51, of Westminster was found dead after someone reported a man fell from the Mickey &amp; Friends parking structure at around 9 p.m.,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/california/story/2022-12-04/man-dies-after-fall-at-disneyland'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man dies after falling from Disneyland parking garage</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtjZwPk8-6bS_hYJnsW1vpHlnATr6VH_XJEzgogQO8feEw99nJPHIQhkOAygVR1PgQUG01MLJO" alt="Man dies after falling from Disneyland parking garage" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A man died after falling from a multistory parking garage at Disneyland on Saturday night, Anaheim police said.</p></div>
            </div>
        </a><a href='https://deadline.com/2022/12/disneyland-visitor-dies-after-fall-from-parking-garage-1235188892/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Disneyland Visitor Dies After Fall From Multistory Parking Garage</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT1k-SKe1foM7Ep3UnbVmTa47cLK6MWhYsgKBEuVc3QccgZvGsfuo9Q1tWqqE_7VaPMjnV_tEQn" alt="Disneyland Visitor Dies After Fall From Multistory Parking Garage" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A man fell from a multi-story parking garage at Disneyland Saturday night, taking his own life.</p></div>
            </div>
        </a><a href='https://www.foxnews.com/us/man-jumps-his-death-disneyland-parking-structure-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man jumps to his death from Disneyland parking structure: report</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTZEQXRuveX8yXrdcjc8cJR4HganKucVZhIj-SYWhtVxVMh6vU_ovqv_GbLX9z5pUt8m-NQGhFS" alt="Man jumps to his death from Disneyland parking structure: report" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A man in his 50s jumped to his death from an Anaheim Disneyland parking structure Saturday night on the heels of Disney CEO Bob Iger&#39;s visit to the theme&nbsp;...</p></div>
            </div>
        </a><a href='https://wdwnt.com/2022/12/man-jumps-death-disneyland/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man Jumps to His Death at Disneyland Resort</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzdXwdzT_D2X6zI_p4l_e35bQMF03FqlvQBuKl3xv9IeMqtaDTxaRAN0xEcKef02MaAzux1SM2" alt="Man Jumps to His Death at Disneyland Resort" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yesterday evening, tragedy struck at Disneyland as a man jumped to his death from the Mickey and Friends parking structure.</p></div>
            </div>
        </a><a href='https://abc7.com/disneyland-death-parking-structure-anaheim-police-investigation/12523999/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anaheim police say man jumped to his death at Disneyland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJHvreYzzWnMRoq56Ft9VUKIxeVDrYiMDbvp1i8o5latSU6Ms6xQdp7AB3anughhg0awAjvYa5" alt="Anaheim police say man jumped to his death at Disneyland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A man in his 50s jumped to his death from a parking structure at Disneyland on Saturday, Anaheim police have confirmed.</p></div>
            </div>
        </a>
        </Template></>;
}