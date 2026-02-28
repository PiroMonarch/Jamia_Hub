import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, ChangeEvent } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'them';
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi Ananya, I saw your roommate ad.", sender: 'me', timestamp: "10:42 AM", status: 'read' },
    { id: 2, text: "Hey! Yeah, I'm still looking. Are you a student at Jamia?", sender: 'them', timestamp: "10:45 AM", status: 'read' },
    { id: 3, text: "Yes, I'm in my final year of B.Tech. I was looking for a place near the campus.", sender: 'me', timestamp: "10:46 AM", status: 'read' },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    // Simulate "Delivered" status after 1s
    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === newMessage.id ? { ...m, status: 'delivered' } : m));
    }, 1000);

    // Simulate "Read" status after 2s
    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === newMessage.id ? { ...m, status: 'read' } : m));
    }, 2000);

    // Simulate Reply
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const reply: Message = {
          id: Date.now() + 1,
          text: "That sounds great! Would you like to meet up and discuss the details?",
          sender: 'them',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'read'
        };
        setMessages(prev => [...prev, reply]);
      }, 2500);
    }, 3000);
  };

  const handleDeleteChat = () => {
    setMessages([]);
    setShowDeleteConfirm(false);
    setShowMenu(false);
  };

  return (
    <div className="font-display bg-background-light dark:bg-black text-slate-900 dark:text-slate-100 flex items-center justify-center min-h-screen">
      <div className="relative flex h-full w-full flex-col bg-white dark:bg-background-dark overflow-hidden max-w-[420px] mx-auto shadow-2xl sm:rounded-[32px] sm:h-[880px] border-x border-slate-100 dark:border-slate-800">
        
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800 z-10">
          <div className="flex items-center gap-3">
            <Link to="/roommates" className="p-2 -ml-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center border border-slate-100 dark:border-slate-700" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80")'}}></div>
                <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-white dark:border-background-dark"></div>
              </div>
              <div>
                <h1 className="text-base font-semibold text-slate-900 dark:text-white leading-tight">Ananya Sharma</h1>
                <p className="text-xs text-primary font-medium">Online</p>
              </div>
            </div>
          </div>
          <div className="flex items-center relative">
            <button className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[24px]">videocam</span>
            </button>
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">more_vert</span>
            </button>
            
            {/* Dropdown Menu */}
            {showMenu && (
              <div className="absolute top-12 right-0 bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-slate-100 dark:border-slate-700 py-2 w-48 z-50">
                <button 
                  onClick={() => setShowDeleteConfirm(true)}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                  Delete Chat
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Messages Area */}
        <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#0f1613] p-4 no-scrollbar">
          <div className="flex justify-center mb-6 mt-2">
            <span className="px-3 py-1 bg-slate-200/60 dark:bg-slate-800/60 backdrop-blur-sm text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm">Today</span>
          </div>
          
          <div className="space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'} space-y-1`}>
                <div className={`flex items-end ${msg.sender === 'me' ? 'justify-end' : ''} max-w-[85%] gap-2 group`}>
                  {msg.sender === 'them' && (
                    <div className="h-8 w-8 rounded-full bg-slate-200 bg-cover bg-center shrink-0 mb-1" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80")'}}></div>
                  )}
                  <div className={`
                    px-4 py-3 shadow-sm relative text-[15px] leading-relaxed font-normal
                    ${msg.sender === 'me' 
                      ? 'bg-primary text-white rounded-bubble rounded-tr-sm order-1' 
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bubble rounded-tl-sm shadow-soft border border-slate-100 dark:border-slate-700'}
                  `}>
                    <p>{msg.text}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-1 text-[10px] text-slate-400 font-medium ${msg.sender === 'me' ? 'pr-1' : 'pl-12'}`}>
                  <span>{msg.timestamp}</span>
                  {msg.sender === 'me' && (
                    <span className={`material-symbols-outlined text-[14px] ${msg.status === 'read' ? 'text-blue-500' : ''}`}>
                      {msg.status === 'sent' ? 'check' : 'done_all'}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-end max-w-[85%] gap-2 pt-2">
                <div className="h-8 w-8 rounded-full bg-slate-200 bg-cover bg-center shrink-0 mb-1" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80")'}}></div>
                <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-bubble rounded-tl-sm shadow-soft border border-slate-100 dark:border-slate-700 flex items-center gap-1.5 h-[46px]">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </main>

        {/* Input Area */}
        <footer className="bg-white dark:bg-background-dark px-4 py-3 pb-6 border-t border-slate-100 dark:border-slate-800 w-full z-20">
          <div className="flex items-end gap-3">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary hover:bg-primary/10 transition-all shrink-0 mb-[2px]">
              <span className="material-symbols-outlined text-[24px]">add</span>
            </button>
            <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-[20px] px-4 py-2.5 flex items-center gap-2 min-h-[44px] border border-transparent focus-within:border-primary/30 focus-within:bg-white dark:focus-within:bg-slate-900 transition-all">
              <input 
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                className="bg-transparent border-none p-0 w-full text-[15px] text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 leading-relaxed resize-none h-6" 
                placeholder="Type a message..." 
                type="text"
              />
              <button className="text-slate-400 hover:text-primary transition-colors p-0.5 shrink-0">
                <span className="material-symbols-outlined text-[20px] leading-none">sentiment_satisfied</span>
              </button>
            </div>
            <button 
              onClick={sendMessage}
              disabled={!inputText.trim()}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-primary text-white shadow-md hover:bg-primary-600 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 shrink-0 mb-[1px] disabled:opacity-50 disabled:hover:scale-100"
            >
              <span className="material-symbols-outlined text-[20px] translate-x-0.5">send</span>
            </button>
          </div>
        </footer>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-sm p-6 transform transition-all scale-100">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4 text-red-600 dark:text-red-400">
                <span className="material-symbols-outlined text-[28px]">delete_forever</span>
              </div>
              <h3 className="text-lg font-bold text-center text-slate-900 dark:text-white mb-2">Delete Conversation?</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center mb-6">
                This will permanently delete your chat history with Ananya. This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 py-2.5 rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleDeleteChat}
                  className="flex-1 py-2.5 rounded-xl font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
