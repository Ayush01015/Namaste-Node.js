# 🚀 Event Loop Visualizer - Master Development Prompt

## Project Overview
Create a comprehensive, interactive Node.js Event Loop Visualizer that serves as an educational tool for understanding asynchronous JavaScript execution. This is a browser-based, animated simulator that visualizes how the Node.js event loop processes different types of tasks through various phases.

## 🎯 Core Requirements

### Primary Features
1. **Interactive Circular Diagram** - Visual representation of event loop phases (Timers, Poll, Check, Close, Microtasks)
2. **Real-time Code Parsing** - Input JavaScript code and see how it flows through the event loop
3. **Animated Task Flow** - Visual blocks moving between phases with smooth GSAP animations
4. **Step-by-Step Execution** - Manual stepping and automatic playback with speed controls (0.1x - 3x)
5. **Live Logging** - Detailed execution log with color-coded entries
6. **Modern Dark UI** - Professional interface with Inter font, proper spacing, no overlapping elements

### Technical Stack
- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript
- **Animations**: GSAP (GreenSock)
- **Fonts**: Inter (primary), Fira Code (code editor)
- **Layout**: CSS Grid (responsive design)
- **Color Scheme**: Dark mode with blue/red accents

## 🎨 Design Specifications

### Color Palette
- **Background**: #0a0a0a (deep black)
- **Cards**: #111111 (dark gray)
- **Borders**: #262626, #374151
- **Text**: #e4e4e7 (light gray), #f1f5f9 (white)
- **Accents**: #3b82f6 (blue), #ef4444 (red), #8b5cf6 (purple)
- **Success**: #22c55e, Warning: #f59e0b, Error: #ef4444

### Layout Structure
```
Grid: 320px | 1fr | 320px
├── Left Panel (Code Input)
│   ├── JavaScript Code Editor
│   ├── Parse/Clear Controls
│   └── Speed Control Slider
├── Center Panel (Visualizer)
│   ├── Status Indicator
│   ├── Control Buttons (Start, Next, Pause, Reset)
│   ├── Event Loop Diagram (5 phases in circle)
│   └── Task Queues (Microtask & Callback)
└── Right Panel (Execution Log)
    └── Real-time timestamped log entries
```

### Component Specifications

#### Event Loop Phases
- **Shape**: Rounded rectangles (100x100px, border-radius: 16px)
- **Default**: Gray gradient (#1f2937 to #374151)
- **Active**: Red gradient (#dc2626 to #b91c1c) with glow
- **Next**: Yellow border (#f59e0b) with subtle glow
- **Positions**: Circular arrangement with proper spacing

#### Code Editor
- **Background**: #0a0a0a
- **Font**: Fira Code, 13px
- **Height**: 240px (resizable)
- **Border**: #262626, focus: #3b82f6 with glow
- **Placeholder**: Sample code with setTimeout, Promise, etc.

#### Animation System
- **Task Blocks**: Purple gradient with white text
- **Movement**: Smooth bezier curves from queue to center
- **Timing**: Configurable speed (0.1x to 3x multiplier)
- **Arrows**: Animated flow indicators between phases

## 🧠 Core Logic Architecture

### State Management
```javascript
class EventLoopVisualizer {
  constructor() {
    this.phases = ['timers', 'poll', 'check', 'close'];
    this.currentPhase = 0;
    this.isRunning = false;
    this.isPaused = false;
    this.tasks = [];           // Callback queue tasks
    this.microtasks = [];      // Microtask queue
    this.executedTasks = [];   // Sync tasks
    this.animationSpeed = 1;
  }
}
```

### Code Parser Logic
Parse JavaScript code to identify:
- **setTimeout/setInterval** → Timers phase
- **setImmediate** → Check phase  
- **Promise.then/catch** → Microtasks (after each phase)
- **process.nextTick** → Microtasks (highest priority)
- **console.log** (sync) → Immediate execution
- **I/O operations** → Poll phase simulation

### Execution Flow
1. **Parse Code** → Extract all async operations
2. **Execute Sync** → Run synchronous code first
3. **Phase Loop**:
   - Enter current phase
   - Execute phase-specific tasks
   - Process ALL microtasks
   - Move to next phase
   - Repeat until all queues empty

## 🎮 Interactive Features

### Controls
- **▶ Start**: Auto-play simulation with timed transitions
- **⏭ Next**: Manual step-through mode
- **⏸ Pause**: Pause during auto-play
- **🔄 Reset**: Return to initial state
- **Parse Code**: Analyze input JavaScript
- **Clear**: Reset code editor

### User Interactions
- **Hover Effects**: Phase highlighting with tooltips
- **Click Phases**: Show detailed phase information
- **Speed Slider**: Real-time animation speed adjustment
- **Responsive**: Mobile-friendly with touch support

## 📊 Advanced Features (Future Development)

### Educational Enhancements
- **Quiz Mode**: Interactive questions about execution order
- **Guided Tours**: Step-by-step tutorials
- **Code Challenges**: Predict-the-output exercises
- **Example Library**: Pre-built code samples

### Debugging Features
- **Breakpoints**: Pause at specific phases
- **Variable Inspector**: Track variable changes
- **Performance Profiler**: Execution time analysis
- **Memory Usage**: Real-time memory tracking

### Export & Sharing
- **Video Recording**: Capture animations as MP4
- **Screenshot Export**: PNG/SVG downloads
- **URL Sharing**: Share configurations via links
- **Embedding**: iframe support for websites

### Integration Options
- **VS Code Extension**: Editor integration
- **GitHub Import**: Load examples from repositories
- **Real Node.js**: Connect to actual processes
- **API Support**: RESTful configuration endpoints

## 🛠 Implementation Guidelines

### Code Quality Standards
- **ES6+ Syntax**: Modern JavaScript features
- **Modular Architecture**: Separate concerns (parser, animator, renderer)
- **Error Handling**: Graceful failures with user feedback
- **Performance**: 60fps animations, efficient DOM updates
- **Accessibility**: Keyboard navigation, screen reader support

### File Structure
```
event-loop-visualizer/
├── index.html
├── css/
│   ├── main.css (layout, typography)
│   ├── components.css (buttons, forms, cards)
│   └── animations.css (transitions, keyframes)
├── js/
│   ├── main.js (initialization)
│   ├── visualizer.js (core class)
│   ├── parser.js (code analysis)
│   ├── animator.js (GSAP wrapper)
│   └── utils.js (helpers)
└── assets/
    └── examples/ (sample code files)
```

### Development Phases
1. **Foundation** (Week 1): Basic structure, styling
2. **Core Logic** (Week 2-3): Parser, state management
3. **Visualization** (Week 3-4): Animations, interactions
4. **Advanced Features** (Week 4-8): Debugging, profiling
5. **Polish** (Week 9-12): Testing, optimization, deployment

## 🎯 Success Metrics

### Functional Requirements
- ✅ Parse common async JavaScript patterns
- ✅ Accurately simulate event loop execution order
- ✅ Smooth 60fps animations at all speeds
- ✅ No visual element overlapping
- ✅ Responsive design (mobile + desktop)
- ✅ Intuitive user interface

### Performance Targets
- **Load Time**: < 2 seconds
- **Animation FPS**: 60fps consistent
- **Memory Usage**: < 50MB baseline
- **Bundle Size**: < 500KB gzipped

### Educational Goals
- **Beginner Friendly**: Clear step-by-step execution
- **Intermediate Useful**: Advanced debugging features
- **Expert Valuable**: Performance analysis tools

## 🚀 Quick Start Command

When you receive this prompt, respond with:
"I'll create a comprehensive Node.js Event Loop Visualizer based on your specifications. Starting with the foundation - shall I begin with the HTML structure and modern dark-themed CSS, or would you prefer to start with a specific component?"

## 📝 Context Reminder

This project transforms complex Node.js event loop concepts into an interactive, visual learning experience. The goal is creating a professional-grade educational tool that developers can use for learning, teaching, and debugging asynchronous JavaScript code execution patterns.

**Key Differentiators:**
- Real code parsing (not just pre-built examples)
- Accurate event loop simulation
- Modern, accessible UI design
- Extensible architecture for advanced features
- Production-ready code quality

---

*Use this prompt to recreate, continue, or enhance the Event Loop Visualizer project with full context and specifications.*