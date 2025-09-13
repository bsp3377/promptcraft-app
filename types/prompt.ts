export interface PromptTechnique {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  techniques: PromptTechnique[];
}
