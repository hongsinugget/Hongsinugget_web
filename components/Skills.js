export default function Skills() {
    return (
        <section id="skills">
            <h2>My Skills</h2>

            <div className="skills-container">
                <div className="skill-group">
                    <h3>Design</h3>
                    <div className="tags">
                        <span>Photoshop / Illustrator / Indesign</span>
                        <span>Figma</span>
                        <span>UX/UI</span>
                    </div>
                </div>

                <div className="skill-group">
                    <h3>Marketing</h3>
                    <div className="tags">
                        <span>GA / GTM</span>
                        <span>Meta Marketing</span>
                        <span>Branding</span>
                        <span>Content creation</span>
                    </div>
                </div>

                <div className="skill-group">
                    <h3>Etc</h3>
                    <div className="tags">
                        <span>slack</span>
                        <span>Notion</span>
                        <span>Obsidian</span>
                        <span>HTML / CSS / JS</span>
                        <span>Prompt Engineering</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
