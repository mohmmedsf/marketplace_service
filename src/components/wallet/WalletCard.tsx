import React from 'react';
import { useWalletStore } from '../../stores/walletStore';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

export default function WalletCard() {
  const { balance, loading, addFunds, withdrawFunds } = useWalletStore();
  const [amount, setAmount] = React.useState('');

  const handleAddFunds = async () => {
    try {
      await addFunds(Number(amount));
      setAmount('');
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleWithdraw = async () => {
    try {
      await withdrawFunds(Number(amount));
      setAmount('');
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">المحفظة</h2>
        <Wallet className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="text-center mb-6">
        <p className="text-gray-600 mb-2">الرصيد الحالي</p>
        <p className="text-3xl font-bold text-gray-900">${balance.toFixed(2)}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            المبلغ
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="block w-full border-gray-300 rounded-lg"
            min="0"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleAddFunds}
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            <TrendingUp className="h-5 w-5" />
            <span>إيداع</span>
          </button>

          <button
            onClick={handleWithdraw}
            disabled={loading || Number(amount) > balance}
            className="flex items-center justify-center gap-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
          >
            <TrendingDown className="h-5 w-5" />
            <span>سحب</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}