import { notFound } from 'next/navigation';
import CategoryPageLayout from '@/components/CategoryPageLayout';
import { promptCategories } from '@/data/promptTechniques';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = promptCategories.find(cat => cat.id === params.slug);

  if (!category) {
    notFound();
  }

  return <CategoryPageLayout category={category} />;
}

// Generate static params for all categories
export async function generateStaticParams() {
  return promptCategories.map((category) => ({
    slug: category.id,
  }));
}
