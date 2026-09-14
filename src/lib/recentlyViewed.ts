export interface ViewedItemRef {
  id: string;
  type: 'investment' | 'opportunity' | 'tender';
  title: string;
  category: string;
  slug: string;
  viewedAt: string;
}

const STORAGE_KEY = 'sarkarsaathi_recently_viewed_v1';
const MAX_ITEMS = 10;

export const getRecentlyViewed = (): ViewedItemRef[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.slice(0, MAX_ITEMS);
    }
  } catch (e) {
    console.error('Error reading recently viewed items', e);
  }
  return [];
};

export const addRecentlyViewed = (item: Omit<ViewedItemRef, 'viewedAt'>): void => {
  try {
    const items = getRecentlyViewed().filter(i => i.id !== item.id);
    items.unshift({
      ...item,
      viewedAt: new Date().toISOString()
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, MAX_ITEMS)));
  } catch (e) {
    console.error('Error adding recently viewed item', e);
  }
};

export const clearRecentlyViewed = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Error clearing recently viewed', e);
  }
};
