export interface SavedItemRef {
  id: string;
  type: 'investment' | 'opportunity' | 'tender';
  title: string;
  category: string;
  slug: string;
  savedAt: string;
}

const STORAGE_KEY = 'sarkarsaathi_saved_items_v1';

export const getSavedItems = (): SavedItemRef[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const map = new Map<string, SavedItemRef>();
      parsed.forEach(item => {
        if (item && item.id && item.type) {
          map.set(item.id, item);
        }
      });
      return Array.from(map.values());
    }
  } catch (e) {
    console.error('Error reading saved items', e);
  }
  return [];
};

export const saveItem = (item: SavedItemRef): void => {
  try {
    const items = getSavedItems();
    if (!items.some(i => i.id === item.id)) {
      items.unshift({ ...item, savedAt: new Date().toISOString() });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  } catch (e) {
    console.error('Error saving item', e);
  }
};

export const unsaveItem = (id: string): void => {
  try {
    const items = getSavedItems().filter(i => i.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Error unsaving item', e);
  }
};

export const isItemSaved = (id: string): boolean => {
  return getSavedItems().some(i => i.id === id);
};
