import "./globals.css";
import {Inter} from "next/font/google";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
