
export type CategoryType = 'trekking' | 'meditation' | 'rafting' | 'religious' | 'hiking';

export interface CategoryInfo {
  value: CategoryType;
  label: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    value: 'trekking',
    label: 'Trekking',
    color: 'bg-musafir-trekking'
  },
  {
    value: 'meditation',
    label: 'Meditation',
    color: 'bg-musafir-meditation'
  },
  {
    value: 'rafting',
    label: 'Rafting',
    color: 'bg-musafir-adventure'
  },
  {
    value: 'religious',
    label: 'Religious',
    color: 'bg-musafir-spiritual'
  },
  {
    value: 'hiking',
    label: 'Hiking',
    color: 'bg-musafir-forest'
  }
];

export const getCategoryInfo = (category: CategoryType): CategoryInfo => {
  const info = categories.find(c => c.value === category);
  if (!info) {
    // Default to trekking if category not found
    return categories[0];
  }
  return info;
};

export const getCategoryOptions = () => {
  return categories.map(category => ({
    value: category.value,
    label: category.label
  }));
};
