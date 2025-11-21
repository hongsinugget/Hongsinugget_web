'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            alert('EmailJS configuration is missing. Please check your .env.local file.');
            setIsSubmitting(false);
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    alert('문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다!');
                    form.current.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    alert('메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
                },
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact">
            <div className="contact-container">
                <div className="contact-left">
                    <h2>Contact</h2>
                    <h3>프로젝트 문의 또는 협업 제안이 있으신가요?</h3>
                    <p>
                        양식에 맞춰 내용을 작성해주시면,<br />
                        <span className="contact-highlight">24시간 이내 이메일로 연락드리겠습니다.</span>
                    </p>
                </div>
                <div className="contact-right">
                    <h3>함께 시작해볼까요?</h3>
                    <form id="contactForm" ref={form} onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder="이메일" required />
                        <input type="text" name="name" placeholder="이름" required />
                        <input type="text" name="title" placeholder="제목" required />
                        <textarea name="message" placeholder="내용" required></textarea>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? '전송 중...' : '문의하기'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
