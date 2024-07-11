import React from 'react';
import './app.css';
import boxText from './boxText';

interface BoxContent {
  className: string;
  title: string;
  text: string;
  top: number;
  left: number;
}

const Box: React.FC<BoxContent> = ({ className, title, text, top, left }) => {
  return (
    <div className={`box ${className}`}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <main className="main-container">
      <Box className="box1" title="INDENTATION" text={boxText} top={230} left={178} />
      <Box className="box2" title="EXCLUSIVE" text={boxText} top={766} left={178} />
    </main>
  );
};

export default App;
