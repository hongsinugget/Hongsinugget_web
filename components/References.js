export default function References() {
    return (
        <section id="references">
            <h2>References</h2>
            <p className="section-subtitle">저와 함께 일했던 사람들이 저를 이렇게 기억해줬어요!</p>

            <div className="references-grid">
                <div className="reference-card">
                    <div className="reference-header">
                        <img src="/images/ffflogo.svg" alt="ffflogo" className="reference-logo" />
                        <div>
                            <div className="reference-author">
                                <div className="reference-author">Ji Seong Han</div>
                            </div>
                            <div style={{ color: '#9999B0', fontSize: '14px' }}>IT Business Development Strategist l
                                Product/Project Manager</div>
                        </div>
                    </div>
                    <p className="reference-text">
                        If I had to describe her in one word, it’d be pathfinder.<br /><br />
                        She’s the kind of marketer you want on your team if you’re facing a tough challenge or need someone
                        who can really think things through and make things happen.<br /><br />
                        I worked with her for 6 months on a new product launch, and she gave it everything she had. She
                        brought so much passion, wasn’t afraid to try new things, and always stayed honest and bold.<br /><br />
                        What I really appreciated was how seriously she took our go-to-market strategy—not just doing what
                        was handed to her.<br /><br />
                        No doubt, if I get the chance to work with a marketer again, she’s the first person I’d call.
                    </p>
                </div>
                <div className="reference-card">
                    <div className="reference-header">
                        <img src="/images/uxdotlogo.svg" alt="uxdotlogo" className="reference-logo" />
                        <div>
                            <div className="reference-author">Sungkwon Bae</div>
                            <div style={{ color: '#9999B0', fontSize: '14px' }}>Co-founder @uxdot.corp<br />And Director @albatross
                                korea</div>
                        </div>
                    </div>
                    <p className="reference-text">
                        성장의 의지가 강하며 학습능력도 뛰어납니다.<br /><br />
                        직무에서의 팔로업도 정확한 디렉션을 제시하면 의도대로 칼같이 잘 만들어서 고객의 니즈에 맞춰줍니다.<br /><br />
                        업무 속도도 빠른 편이여서 오히려 저희가 제안하는것이 느리다고 생각이 들 정도로 시원시원합니다.<br /><br />
                        이 외 여러가지 이유로 추천합니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
