'use client'

import React, { useEffect, useRef, useState } from 'react';
import '@/styles/ThunderText.css';

// Add font-face declarations at the top of the file
const fontFace = `
@font-face {
  font-family: 'GodOfThunder';
  src: url('/fonts/Godofthunder.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'TurboType';
  src: url('/fonts/TurboTypeThree.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Voltstrom';
  src: url('/fonts/VoltstromRegular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
`;

// Add style tag to inject font-face
const FontStyle = () => (
  <style>{fontFace}</style>
);

interface ThunderTextProps {
  text?: string;
  fontSize?: number;
  fontFamily?: 'GodOfThunder' | 'TurboType' | 'Voltstrom';  // Update font family type
  textColor?: string;
  thunderColor?: string;
  thunderGlow?: string;
  sparkColor?: string;
  delay?: number;
  maxLength?: number;
  className?: string;
  style?: React.CSSProperties;
}

interface ThunderOptions {
  lifespan?: number;
  color?: string;
  glow?: string;
  x?: number;
  y?: number;
  width?: number;
  direct?: number;
  max?: number;
}

interface SparkOptions {
  x?: number;
  y?: number;
  v?: {
    direct: number;
    weight: number;
    friction: number;
  };
  a?: {
    change: number;
    min: number;
    max: number;
  };
  g?: {
    direct: number;
    weight: number;
  };
  width?: number;
  lifespan?: number;
  color?: string;
}

interface ParticlesOptions {
  x?: number;
  y?: number;
  max?: number;
}

interface TextOptions {
  size?: number;
  copy?: string;
  color?: string;
  delay?: number;
  x?: number;
  y?: number;
  fontFamily?: 'GodOfThunder' | 'TurboType' | 'Voltstrom';
}

class Thunder {
  private lifespan: number;
  private maxlife: number;
  private color: string;
  private glow: string;
  private x: number;
  private y: number;
  private width: number;
  private direct: number;
  private max: number;
  private segments: Array<{ direct: number; length: number; change: number }>;

  constructor(options: ThunderOptions = {}) {
    this.lifespan = options.lifespan || Math.round(Math.random() * 10 + 10);
    this.maxlife = this.lifespan;
    this.color = options.color || '#fefefe';
    this.glow = options.glow || '#2323fe';
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || 2;
    this.direct = options.direct || Math.random() * Math.PI * 2;
    this.max = options.max || Math.round(Math.random() * 10 + 20);
    this.segments = [...new Array(this.max)].map(() => ({
      direct: this.direct + (Math.PI * Math.random() * 0.2 - 0.1),
      length: Math.random() * 20 + 80,
      change: Math.random() * 0.04 - 0.02
    }));
  }

  update(index: number, array: Thunder[]): void {
    this.segments.forEach(s => {
      s.direct += s.change;
      if (Math.random() > 0.96) s.change *= -1;
    });
    if (this.lifespan > 0) {
      this.lifespan--;
    } else {
      array.splice(index, 1);
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    if (this.lifespan <= 0) return;
    ctx.beginPath();
    ctx.globalAlpha = this.lifespan / this.maxlife;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
    ctx.shadowBlur = 32;
    ctx.shadowColor = this.glow;
    ctx.moveTo(this.x, this.y);
    let prev = { x: this.x, y: this.y };
    this.segments.forEach(s => {
      const x = prev.x + Math.cos(s.direct) * s.length;
      const y = prev.y + Math.sin(s.direct) * s.length;
      prev = { x, y };
      ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.closePath();
    ctx.shadowBlur = 0;
    const strength = Math.random() * 80 + 40;
    const light = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, strength);
    light.addColorStop(0, 'rgba(250, 200, 50, 0.6)');
    light.addColorStop(0.1, 'rgba(250, 200, 50, 0.2)');
    light.addColorStop(0.4, 'rgba(250, 200, 50, 0.06)');
    light.addColorStop(0.65, 'rgba(250, 200, 50, 0.01)');
    light.addColorStop(0.8, 'rgba(250, 200, 50, 0)');
    ctx.beginPath();
    ctx.fillStyle = light;
    ctx.arc(this.x, this.y, strength, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

class Spark {
  private x: number;
  private y: number;
  private v: { direct: number; weight: number; friction: number };
  private a: { change: number; min: number; max: number };
  private g: { direct: number; weight: number };
  private width: number;
  private lifespan: number;
  private maxlife: number;
  private color: string;
  private prev: { x: number; y: number };

  constructor(options: SparkOptions = {}) {
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.v = options.v || {
      direct: Math.random() * Math.PI * 2,
      weight: Math.random() * 14 + 2,
      friction: 0.88
    };
    this.a = options.a || {
      change: Math.random() * 0.4 - 0.2,
      min: this.v.direct - Math.PI * 0.4,
      max: this.v.direct + Math.PI * 0.4
    };
    this.g = options.g || {
      direct: Math.PI * 0.5 + (Math.random() * 0.4 - 0.2),
      weight: Math.random() * 0.25 + 0.25
    };
    this.width = options.width || Math.random() * 3;
    this.lifespan = options.lifespan || Math.round(Math.random() * 20 + 40);
    this.maxlife = this.lifespan;
    this.color = options.color || '#feca32';
    this.prev = { x: this.x, y: this.y };
  }

  update(index: number, array: Spark[]): void {
    this.prev = { x: this.x, y: this.y };
    this.x += Math.cos(this.v.direct) * this.v.weight;
    this.x += Math.cos(this.g.direct) * this.g.weight;
    this.y += Math.sin(this.v.direct) * this.v.weight;
    this.y += Math.sin(this.g.direct) * this.g.weight;
    if (this.v.weight > 0.2) this.v.weight *= this.v.friction;
    this.v.direct += this.a.change;
    if (this.v.direct > this.a.max || this.v.direct < this.a.min) {
      this.a.change *= -1;
    }
    if (this.lifespan > 0) {
      this.lifespan--;
    } else {
      array.splice(index, 1);
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    if (this.lifespan <= 0) return;
    ctx.beginPath();
    ctx.globalAlpha = this.lifespan / this.maxlife;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.prev.x, this.prev.y);
    ctx.stroke();
    ctx.closePath();
  }
}

class Particles {
  private max: number;
  private sparks: Spark[];

  constructor(options: ParticlesOptions = {}) {
    this.max = options.max || Math.round(Math.random() * 10 + 10);
    this.sparks = [...new Array(this.max)].map(() => new Spark(options));
  }

  update(): void {
    this.sparks.forEach((s, i) => s.update(i, this.sparks));
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.sparks.forEach(s => s.render(ctx));
  }
}

class Text {
  private size: number;
  private copy: string;
  private color: string;
  private delay: number;
  private basedelay: number;
  private bound: { width: number; height: number };
  private x: number;
  private y: number;
  private data: ImageData;
  private index: number;
  private lines: string[];

  constructor(options: TextOptions = {}) {
    const pool = document.createElement('canvas');
    const buffer = pool.getContext('2d');
    if (!buffer) throw new Error('Could not get canvas context');
    
    pool.width = window.innerWidth;
    buffer.fillStyle = '#000000';
    buffer.fillRect(0, 0, pool.width, pool.height);

    // Calculate responsive font size based on screen width
    const screenWidth = window.innerWidth;
    const baseSize = options.size || 100;
    this.size = screenWidth < 768 ? Math.min(baseSize * 0.4, screenWidth / 12) : baseSize;

    this.copy = (options.copy || '').trim();
    this.color = options.color || '#cd96fe';
    this.delay = options.delay || 5;
    this.basedelay = this.delay;
    
    // Load and check if font is ready before using it
    const fontFamily = options.fontFamily || 'GodOfThunder';
    buffer.font = `${this.size}px ${fontFamily}`;

    // Handle word wrapping for mobile
    const maxWidth = screenWidth * 0.9; // 90% of screen width
    this.lines = this.getWrappedText(buffer, this.copy, maxWidth);
    
    // Calculate total height needed for all lines
    const lineHeight = this.size * 1.2;
    const totalHeight = lineHeight * this.lines.length;
    
    // Create a larger canvas to accommodate all lines
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) throw new Error('Could not get temp canvas context');

    // Find the widest line to set canvas width
    const maxLineWidth = Math.max(...this.lines.map(line => buffer.measureText(line).width));
    tempCanvas.width = maxLineWidth;
    tempCanvas.height = totalHeight;

    // Set up the context
    tempCtx.fillStyle = '#000000';
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.font = buffer.font;
    tempCtx.strokeStyle = this.color;
    tempCtx.textBaseline = 'top';

    // Draw each line
    this.lines.forEach((line, index) => {
      tempCtx.strokeText(line, 0, index * lineHeight);
    });

    // Set bounds based on the actual text dimensions
    this.bound = {
      width: maxLineWidth,
      height: totalHeight
    };

    // Center the text block
    this.x = (window.innerWidth - this.bound.width) * 0.5;
    this.y = window.innerHeight * 0.2; // Position at 20% from top to accommodate multiple lines

    // Get the final image data
    this.data = tempCtx.getImageData(0, 0, this.bound.width, this.bound.height);
    this.index = 0;
  }

  private getWrappedText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine); // Push the last line
    return lines;
  }

  update(setThunder: React.Dispatch<React.SetStateAction<Thunder[]>>, setParticles: React.Dispatch<React.SetStateAction<Particles[]>>): void {
    if (this.index >= this.bound.width) {
      this.index = 0;
      return;
    }
    const data = this.data.data;
    for (let i = this.index * 4; i < data.length; i += 4 * this.data.width) {
      const bitmap = data[i] + data[i + 1] + data[i + 2] + data[i + 3];
      if (bitmap > 255 && Math.random() > 0.96) {
        const x = this.x + this.index;
        const y = this.y + i / this.bound.width / 4;
        setThunder(prev => [...prev, new Thunder({ x, y, color: '#fefefe', glow: '#2323fe' })]);
        if (Math.random() > 0.5) {
          setParticles(prev => [...prev, new Particles({ x, y })]);
        }
      }
    }
    if (this.delay-- < 0) {
      this.index++;
      this.delay += this.basedelay;
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.putImageData(this.data, this.x, this.y, 0, 0, this.index, this.bound.height);
  }
}

const ThunderText: React.FC<ThunderTextProps> = ({
  text = "I love you!",
  fontSize = 100,
  fontFamily = "GodOfThunder",
  textColor = "#cd96fe",
  thunderColor = "#fefefe",
  thunderGlow = "#2323fe",
  sparkColor = "#feca32",
  delay = 5,
  className = "",
  style = {}
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [thunder, setThunder] = useState<Thunder[]>([]);
  const [particles, setParticles] = useState<Particles[]>([]);
  const [textObj, setTextObj] = useState<Text | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const textInstance = new Text({
      size: fontSize,
      copy: text,
      color: textColor,
      delay: delay,
      fontFamily: fontFamily
    });
    setTextObj(textInstance);

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setThunder(prev => [...prev, new Thunder({ x, y, color: thunderColor, glow: thunderGlow })]);
      setParticles(prev => [...prev, new Particles({ x, y })]);
    };

    canvas.addEventListener('click', handleClick);

    return () => {
      canvas.removeEventListener('click', handleClick);
    };
  }, [dimensions, text, fontSize, fontFamily, textColor, thunderColor, thunderGlow, sparkColor, delay]);

  useEffect(() => {
    if (!canvasRef.current || !textObj) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const loop = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      ctx.globalCompositeOperation = 'screen';
      textObj.update(setThunder, setParticles);
      textObj.render(ctx);
      thunder.forEach((l, i) => {
        l.update(i, thunder);
        l.render(ctx);
      });
      particles.forEach(p => {
        p.update();
        p.render(ctx);
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [textObj, thunder, particles, dimensions]);

  return (
    <>
      <FontStyle />
      <div className={`thunder-text-container ${className}`} style={style}>
        <canvas ref={canvasRef} />
      </div>
    </>
  );
};

export default ThunderText; 