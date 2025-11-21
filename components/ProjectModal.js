'use client';

import { useState, useEffect, useRef } from 'react';

export default function ProjectModal({ project, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [project]);

    // Reset slider when project changes
    useEffect(() => {
        setCurrentIndex(0);
        setCurrentTranslate(0);
        setPrevTranslate(0);
    }, [project]);

    if (!project) return null;

    const images = project.images.length > 0 ? project.images : [project.thumbnail];

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
        // Remove transition for instant movement during drag
        if (sliderRef.current) sliderRef.current.style.transition = 'none';
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        setCurrentTranslate(prevTranslate + diff);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        const movedBy = currentTranslate - prevTranslate;

        // Restore transition
        if (sliderRef.current) sliderRef.current.style.transition = 'transform 0.3s ease-out';

        if (movedBy < -50 && currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (movedBy > 50 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }

        // Snap to current index
        // We will update translate in useEffect based on index
    };

    // Mouse events for desktop drag
    const handleMouseDown = (e) => {
        e.preventDefault();
        setStartX(e.clientX);
        setIsDragging(true);
        if (sliderRef.current) sliderRef.current.style.transition = 'none';
        if (sliderRef.current) sliderRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diff = currentX - startX;
        setCurrentTranslate(prevTranslate + diff);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (sliderRef.current) sliderRef.current.style.cursor = 'grab';

        const movedBy = currentTranslate - prevTranslate;

        if (sliderRef.current) sliderRef.current.style.transition = 'transform 0.3s ease-out';

        if (movedBy < -50 && currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (movedBy > 50 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (movedBy < -50 && currentIndex === images.length - 1) {
            // Loop to start
            setCurrentIndex(0);
        } else if (movedBy > 50 && currentIndex === 0) {
            // Loop to end
            setCurrentIndex(images.length - 1);
        }
    };

    const handleMouseLeave = () => {
        if (isDragging) handleMouseUp();
    };

    // Update translate when index changes
    useEffect(() => {
        const newTranslate = currentIndex * -100;
        setPrevTranslate(newTranslate * (sliderRef.current?.offsetWidth || 0) / 100); // Approximate pixel value not needed for % logic but needed for drag continuity? 
        // Actually, easier to just use % for display and pixels for drag.
        // Let's simplify: just use transform based on index, and only use drag for gesture detection, not 1:1 tracking if it's too complex to mix.
        // But the user had smooth drag. Let's try to keep it simple first:
        // If not dragging, transform is index * -100%.
    }, [currentIndex]);


    // Simplified Logic for React:
    // Just track index. Dragging just detects swipe direction.
    // If we want 1:1 tracking, we need to mix % and px.
    // Let's stick to the logic in main.js: it calculated swipe threshold.

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="modal active" onClick={(e) => e.target.className.includes('modal') && onClose()}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>

                <div
                    className="modal-images"
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="modal-image"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                                transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                            }}
                        >
                            <img src={src} alt={project.title} draggable="false" />
                        </div>
                    ))}
                </div>

                <div className="image-dots">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`image-dot ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(idx)}
                        ></div>
                    ))}
                </div>

                <h2 className="modal-title">{project.title}</h2>
                <p className="modal-subtitle" dangerouslySetInnerHTML={{ __html: project.shortDesc }}></p>

                <div className="modal-tags">
                    {project.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>

                <div className="modal-description" dangerouslySetInnerHTML={{ __html: project.fullDesc }}></div>
            </div>
        </div>
    );
}
