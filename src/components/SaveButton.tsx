import React, { useState, useEffect } from 'react';
import { Bookmark, Check } from 'lucide-react';
import { saveItem, unsaveItem, isItemSaved, SavedItemRef } from '../lib/savedItems';

interface SaveButtonProps {
  item: SavedItemRef;
}

export const SaveButton: React.FC<SaveButtonProps> = ({ item }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isItemSaved(item.id));
  }, [item.id]);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (saved) {
      unsaveItem(item.id);
      setSaved(false);
    } else {
      saveItem(item);
      setSaved(true);
    }
  };

  return (
    <button
      onClick={toggleSave}
      className={`px-3 py-1.5 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition ${
        saved 
          ? 'bg-[#FF6B00] text-white hover:bg-[#e66000]' 
          : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
      }`}
      title={saved ? 'Remove from saved items' : 'Save item'}
    >
      {saved ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
      {saved ? 'Saved' : 'Save'}
    </button>
  );
};
