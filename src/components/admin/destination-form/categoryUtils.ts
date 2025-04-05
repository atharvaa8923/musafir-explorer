
// Utility functions and data for destination categories

export type CategoryInfo = {
  label: string;
  color: string;
};

export type CategoryType = 'trekking' | 'spiritual' | 'rafting' | 'meditation' | 'forest' | 'religious' | 'hiking';

export const CATEGORY_INFO: Record<CategoryType, CategoryInfo> = {
  trekking: { label: 'Trekking', color: 'bg-musafir-trekking' },
  spiritual: { label: 'Spiritual', color: 'bg-musafir-spiritual' },
  rafting: { label: 'Rafting', color: 'bg-musafir-water' },
  meditation: { label: 'Meditation', color: 'bg-musafir-meditation' },
  forest: { label: 'Forest', color: 'bg-musafir-forest' },
  religious: { label: 'Religious', color: 'bg-musafir-spiritual' },
  hiking: { label: 'Hiking', color: 'bg-musafir-forest' },
};

export const getCategoryInfo = (category: CategoryType): CategoryInfo => {
  return CATEGORY_INFO[category];
};
