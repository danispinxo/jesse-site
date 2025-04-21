"use client";

export default function ImagePlaceholder({ width, height, text }) {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: '#1A4D2E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontFamily: 'var(--font-poppins)',
        textAlign: 'center',
        padding: '1rem',
        borderRadius: '8px',
      }}
    >
      {text || 'Image Placeholder'}
    </div>
  );
} 