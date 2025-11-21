'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["전략", "디자인", "구현"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 70 : 120);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1200);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles, typingSpeed]);

    return (
        <section id="hero">
            <div className="hero-content">
                <div className="hero-left">
                    <div className="typing-container">
                        <h1>
                            <span className="thin">안녕하세요.<br /></span>
                            <strong>홍시너겟</strong><span className="thin">입니다.</span>
                            <span className="role-text">
                                <span className="thin">저는 </span>
                                <span id="typing-text">{text}</span>
                                <span className="thin"> 을 하고 있어요.</span>
                            </span>
                        </h1>
                    </div>
                    <p className="hero-subtitle">
                        디자인으로 시작해 마케팅을 거쳐,<br />
                        지금은 데이터를 통해 세상을 이해하는 법을 배우고 있어요.<br />
                        비록 작은 일을 하더라도 결국 의미 있는 결과를 만들 수 있다고 믿습니다.<br />
                        <strong>작은 손길로 시작된 무언가가 세상에 울림을 만들 수 있기를.</strong>
                    </p>
                    <div className="hero-buttons">
                        <a href="/Hongsinugget_CV.pdf" className="btn-download" download="Hongsinugget_CV.pdf">Download CV</a>
                        <div className="social-icons">
                            <a href="https://hongsinugget.tistory.com/"><img src="/images/tistory.svg" alt="tistory" /></a>
                            <a href="https://github.com/hongsinugget"><img src="/images/github.svg" alt="github" /></a>
                            <a href="https://www.linkedin.com/in/yangsubindev/"><img src="/images/linkedin.svg" alt="linkedin" /></a>
                        </div>
                    </div>
                </div>
                <div className="character-wrapper">
                    <div className="character-bg"></div>
                    <img className="character" src="/images/hongsinugget.png" alt="character" />
                </div>
            </div>
        </section>
    );
}
