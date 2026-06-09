import { Component, ErrorInfo, ReactNode } from "react";
import { ShieldAlert } from "lucide-react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center p-8 glass-panel border border-gold/20 rounded-[2rem] bg-obsidian/80">
          <ShieldAlert className="w-12 h-12 text-gold mb-4" />
          <h2 className="font-serif text-2xl font-bold text-platinum mb-2">Architectural Redirection</h2>
          <p className="text-slate-400 text-center font-light">A localized visual disturbance occurred. The base structure remains secure.</p>
          <button 
             onClick={() => this.setState({ hasError: false })}
             className="mt-6 text-gold text-sm tracking-widest uppercase hover:text-white transition-colors border-b border-gold/50"
          >
             Re-Initialize Visuals
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
