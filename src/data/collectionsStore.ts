import { collections as defaultCollections, type CollectionItem } from '@/data/siteData';

export const COLLECTIONS_STORAGE_KEY = 'axum_collections';

export const getStoredCollections = (): CollectionItem[] => {
  if (typeof window === 'undefined') {
    return defaultCollections;
  }

  const raw = window.localStorage.getItem(COLLECTIONS_STORAGE_KEY);
  if (!raw) {
    return defaultCollections;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return defaultCollections;
    }

    const cleaned = parsed
      .filter((item) => item && typeof item === 'object')
      .map((item, index) => ({
        id: typeof item.id === 'number' ? item.id : index + 1,
        name: typeof item.name === 'string' ? item.name : '',
        nameAmharic: typeof item.nameAmharic === 'string' ? item.nameAmharic : '',
        image: typeof item.image === 'string' ? item.image : '',
        description: typeof item.description === 'string' ? item.description : '',
      }))
      .filter((item) => item.name && item.image && item.description);

    return cleaned.length ? cleaned : defaultCollections;
  } catch {
    return defaultCollections;
  }
};

export const saveCollections = (next: CollectionItem[]) => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(COLLECTIONS_STORAGE_KEY, JSON.stringify(next));
};
