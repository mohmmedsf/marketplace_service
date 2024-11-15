import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface WalletState {
  balance: number;
  loading: boolean;
  transactions: any[];
  fetchBalance: () => Promise<void>;
  addFunds: (amount: number) => Promise<void>;
  withdrawFunds: (amount: number) => Promise<void>;
  holdFunds: (amount: number, projectId: string) => Promise<void>;
  releaseFunds: (amount: number, projectId: string) => Promise<void>;
}

export const useWalletStore = create<WalletState>((set, get) => ({
  balance: 0,
  loading: false,
  transactions: [],

  fetchBalance: async () => {
    set({ loading: true });
    const { data, error } = await supabase
      .from('wallets')
      .select('balance')
      .single();
    
    if (!error && data) {
      set({ balance: data.balance });
    }
    set({ loading: false });
  },

  addFunds: async (amount) => {
    set({ loading: true });
    const { data, error } = await supabase.rpc('add_funds', {
      amount,
    });
    
    if (!error) {
      set({ balance: get().balance + amount });
    }
    set({ loading: false });
  },

  withdrawFunds: async (amount) => {
    set({ loading: true });
    const { data, error } = await supabase.rpc('withdraw_funds', {
      amount,
    });
    
    if (!error) {
      set({ balance: get().balance - amount });
    }
    set({ loading: false });
  },

  holdFunds: async (amount, projectId) => {
    set({ loading: true });
    const { error } = await supabase.rpc('hold_project_funds', {
      amount,
      project_id: projectId,
    });
    
    if (!error) {
      set({ balance: get().balance - amount });
    }
    set({ loading: false });
  },

  releaseFunds: async (amount, projectId) => {
    set({ loading: true });
    const { error } = await supabase.rpc('release_project_funds', {
      amount,
      project_id: projectId,
    });
    
    if (!error) {
      await get().fetchBalance();
    }
    set({ loading: false });
  },
}));