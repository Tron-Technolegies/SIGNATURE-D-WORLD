import React from 'react'

const ErrorPage = () => {
  return (
    <>
      <style>
        {`
          .error-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: 'Arial', sans-serif;
            color: white;
            text-align: center;
            padding: 20px;
          }

          .error-code {
            font-size: clamp(4rem, 15vw, 8rem);
            font-weight: bold;
            margin: 0 0 20px 0;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            animation: bounce 2s infinite;
          }

          .error-title {
            font-size: clamp(1.5rem, 5vw, 2.5rem);
            margin: 20px 0 10px;
            font-weight: 600;
          }

          .error-message {
            font-size: clamp(1rem, 3vw, 1.2rem);
            margin-bottom: 30px;
            opacity: 0.9;
            max-width: 500px;
            line-height: 1.5;
          }

          .error-button {
            background-color: #fff;
            color: #667eea;
            border: none;
            padding: 15px 30px;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .error-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
            background-color: #f8f9ff;
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }

          @media (max-width: 768px) {
            .error-container {
              padding: 15px;
            }
            
            .error-button {
              padding: 12px 25px;
              font-size: 1rem;
            }
          }
        `}
      </style>
      
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Oops! Page Not Found</h2>
        <p className="error-message">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <button 
          className="error-button"
          onClick={() => window.history.back()}
        >
          Go Back Home
        </button>
      </div>
    </>
  )
}

export default ErrorPage