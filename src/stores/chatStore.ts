import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { io } from 'socket.io-client';

interface ChatState {
  messages: any[];
  conversations: any[];
  activeConversation: string | null;
  loading: boolean;
  socket: any;
  sendMessage: (content: string, receiverId: string) => Promise<void>;
  fetchMessages: (conversationId: string) => Promise<void>;
  fetchConversations: () => Promise<void>;
  setActiveConversation: (conversationId: string) => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  conversations: [],
  activeConversation: null,
  loading: false,
  socket: null,

  sendMessage: async (content, receiverId) => {
    const { data, error } = await supabase
      .from('messages')
      .insert({
        content,
        receiver_id: receiverId,
        conversation_id: get().activeConversation,
      });

    if (!error && get().socket) {
      get().socket.emit('new_message', {
        conversation_id: get().activeConversation,
        content,
        receiver_id: receiverId,
      });
    }
  },

  fetchMessages: async (conversationId) => {
    set({ loading: true });
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (!error) {
      set({ messages: data });
    }
    set({ loading: false });
  },

  fetchConversations: async () => {
    set({ loading: true });
    const { data, error } = await supabase
      .from('conversations')
      .select('*')
      .order('updated_at', { ascending: false });

    if (!error) {
      set({ conversations: data });
    }
    set({ loading: false });
  },

  setActiveConversation: (conversationId) => {
    set({ activeConversation: conversationId });
    get().fetchMessages(conversationId);
  },
}));