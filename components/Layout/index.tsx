import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Head from "next/head";
import styles from "./Layout.module.css";
interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>NextJs | {pageTitle}</title>
        <meta name="description" content="Website Nextjs Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
