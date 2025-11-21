import './globals.css';
import MouseFollower from '../components/MouseFollower';

export const metadata = {
    title: 'Hongsinugget Portfolio',
    description: 'Portfolio of Hongsinugget',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>
                <MouseFollower />
                {children}
            </body>
        </html>
    );
}
