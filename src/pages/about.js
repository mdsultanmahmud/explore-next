import Navbar from "@/components/Navbar";
import styles from '@/styles/about.module.css'
import Head from "next/head";
export default function about() {
    return <>
        <Head>
            <title>About Page || Tech-Hunt</title>
        </Head>
        <Navbar />
        <h1 className={styles.title}>This is our about page</h1>
        <p className={`${styles.par} ${styles.btn} ${styles.rad}`}>this is for styling many class name</p>
    </>
}