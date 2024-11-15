import React from 'react';
import { useChatStore } from '../../stores/chatStore';
import { motion } from 'framer-motion';
import { Send, Image } from 'lucide-react';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

export default function ChatWindow() {
  const { messages, activeConversation, sendMessage } = useChatStore();
  const [newMessage, setNewMessage] = React.useState('');
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeConversation) return;

    try {
      await sendMessage(newMessage, activeConversation);
      setNewMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-xl shadow-md">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${
              message.is_sender ? 'justify-end' : 'justify-start'
            } mb-4`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.is_sender
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="mb-1">{message.content}</p>
              <p
                className={`text-xs ${
                  message.is_sender ? 'text-indigo-200' : 'text-gray-500'
                }`}
              >
                {format(new Date(message.created_at), 'p', { locale: ar })}
              </p>
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="p-4 border-t">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <Image className="h-5 w-5" />
          </button>
          
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="اكتب رسالتك..."
            className="flex-1 border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
          
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="p-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}