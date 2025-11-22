import './globals.css';
import MouseFollower from '../components/MouseFollower';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    display: 'swap',
});

export const metadata = {
    title: 'hongsinugget',
    description: 'Portfolio of Hongsinugget',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko" className={notoSansKr.className}>
            <body>
                <MouseFollower />
                {children}
            </body>
        </html>
    );
}
