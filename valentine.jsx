import React, { useState, useEffect } from 'react';

export default function Valentine() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [yesSize, setYesSize] = useState(1);
  const [answered, setAnswered] = useState(false);

  const moveNoButton = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 80;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    setNoPosition({ x: newX, y: newY });
    setYesSize(prev => Math.min(prev + 0.15, 3));
  };

  const handleYes = () => {
    setAnswered(true);
  };

  if (answered) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ff6b9d 0%, #ffc371 100%)',
        fontFamily: '"Pacifico", cursive',
        padding: '20px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@400;600&display=swap" rel="stylesheet" />
        
        {/* Floating hearts animation */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              fontSize: `${Math.random() * 30 + 20}px`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 3 + 3}s ease-in infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.7
            }}
          >
            ❤️
          </div>
        ))}
        
        <style>{`
          @keyframes float {
            0% {
              transform: translateY(100vh) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.7;
            }
            90% {
              opacity: 0.7;
            }
            100% {
              transform: translateY(-100px) rotate(360deg);
              opacity: 0;
            }
          }
          
          @keyframes heartBeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        
        <div style={{
          fontSize: '80px',
          marginBottom: '20px',
          animation: 'heartBeat 1s ease-in-out infinite, fadeIn 0.6s ease-out'
        }}>
          ❤️
        </div>
        
        <h1 style={{
          fontSize: '4rem',
          color: 'white',
          textShadow: '4px 4px 8px rgba(0,0,0,0.2)',
          margin: '0',
          animation: 'fadeIn 0.8s ease-out 0.2s backwards',
          textAlign: 'center'
        }}>
          Yay! 🎉
        </h1>
        
        <p style={{
          fontSize: '1.5rem',
          color: 'white',
          fontFamily: '"Quicksand", sans-serif',
          marginTop: '20px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          animation: 'fadeIn 1s ease-out 0.4s backwards',
          textAlign: 'center'
        }}>
          I knew you'd say yes! 💕
        </p>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '"Pacifico", cursive',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@400;600&display=swap" rel="stylesheet" />
      
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0) scale(${yesSize}); }
          50% { transform: translateY(-10px) scale(${yesSize}); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
      
      {/* Decorative hearts in background */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '15%',
        fontSize: '3rem',
        opacity: 0.2,
        animation: 'pulse 2s ease-in-out infinite'
      }}>💕</div>
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '20%',
        fontSize: '2.5rem',
        opacity: 0.2,
        animation: 'pulse 2.5s ease-in-out infinite'
      }}>💖</div>
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '10%',
        fontSize: '2rem',
        opacity: 0.2,
        animation: 'pulse 3s ease-in-out infinite'
      }}>💗</div>
      <div style={{
        position: 'absolute',
        bottom: '25%',
        right: '15%',
        fontSize: '2.8rem',
        opacity: 0.2,
        animation: 'pulse 2.2s ease-in-out infinite'
      }}>💝</div>
      
      <h1 style={{
        fontSize: 'clamp(2rem, 8vw, 4.5rem)',
        color: 'white',
        textAlign: 'center',
        marginBottom: '60px',
        textShadow: '4px 4px 8px rgba(0,0,0,0.3)',
        background: 'linear-gradient(45deg, #fff, #ffc3f0, #fff)',
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'shimmer 3s ease-in-out infinite'
      }}>
        Do you want to be my Valentine? 💘
      </h1>
      
      <div style={{
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        width: '100%',
        minHeight: '200px'
      }}>
        <button
          onClick={handleYes}
          style={{
            padding: `${20 * yesSize}px ${40 * yesSize}px`,
            fontSize: `${1.2 * yesSize}rem`,
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: 600,
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(245, 87, 108, 0.4)',
            transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            animation: 'bounce 2s ease-in-out infinite',
            transformOrigin: 'center',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = `scale(${1.1 * yesSize})`;
            e.target.style.boxShadow = '0 15px 40px rgba(245, 87, 108, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = `scale(${yesSize})`;
            e.target.style.boxShadow = '0 10px 30px rgba(245, 87, 108, 0.4)';
          }}
        >
          Yes! 💖
        </button>
        
        <button
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          style={{
            position: noPosition.x === 0 && noPosition.y === 0 ? 'relative' : 'fixed',
            left: noPosition.x === 0 && noPosition.y === 0 ? 'auto' : `${noPosition.x}px`,
            top: noPosition.x === 0 && noPosition.y === 0 ? 'auto' : `${noPosition.y}px`,
            padding: '20px 40px',
            fontSize: '1.2rem',
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: 600,
            background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            color: '#764ba2',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(168, 237, 234, 0.4)',
            transition: 'all 0.15s ease-out',
            zIndex: 5
          }}
        >
          No
        </button>
      </div>
      
      <p style={{
        marginTop: '40px',
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.8)',
        fontFamily: '"Quicksand", sans-serif',
        fontStyle: 'italic'
      }}>
        {yesSize > 1.5 ? '👀 The Yes button is getting bigger...' : 'Hint: Try hovering over the No button!'}
      </p>
    </div>
  );
}
