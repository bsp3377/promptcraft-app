import { Category } from '@/types/prompt';

export const promptCategories: Category[] = [
  {
    id: 'chatbot-assistant',
    name: 'Chatbot Assistant',
    icon: '💬',
    description: 'Select the right prompt style to create accurate and helpful chatbot prompts.',
    techniques: [
      {
        id: 'roleplay-prompt',
        icon: '👤',
        title: 'Roleplay Prompt',
        description: 'Act as a helpful support agent...',
        category: 'chatbot-assistant'
      },
      {
        id: 'few-shot-prompt',
        icon: '🔗',
        title: 'Few-Shot Prompt',
        description: 'Provide 2-3 example dialogues.',
        category: 'chatbot-assistant'
      },
      {
        id: 'structured-output-prompt',
        icon: '📋',
        title: 'Structured Output Prompt',
        description: 'Enforce JSON or bullet-point responses.',
        category: 'chatbot-assistant'
      },
      {
        id: 'chain-of-thought-prompt',
        icon: '🔗',
        title: 'Chain-of-Thought Prompt',
        description: 'Explain reasoning step-by-step for troubleshooting.',
        category: 'chatbot-assistant'
      }
    ]
  },
  {
    id: 'copywriting',
    name: 'Copywriting',
    icon: '✍️',
    description: 'Choose a technique to write compelling copy that converts and engages your audience.',
    techniques: [
      {
        id: 'aida-prompt',
        icon: '📝',
        title: 'AIDA Prompt',
        description: '"Attention → Interest → Desire → Action."',
        category: 'copywriting'
      },
      {
        id: 'pas-prompt',
        icon: '🎯',
        title: 'PAS Prompt',
        description: '"Problem → Agitate → Solution."',
        category: 'copywriting'
      },
      {
        id: 'feature-benefit-prompt',
        icon: '✨',
        title: 'Feature-Benefit Prompt',
        description: '"Turn features into customer benefits."',
        category: 'copywriting'
      },
      {
        id: 'storytelling-prompt',
        icon: '📖',
        title: 'Storytelling Prompt',
        description: '"Create narrative-driven copy."',
        category: 'copywriting'
      }
    ]
  },
  {
    id: 'image-generation',
    name: 'Image Generation',
    icon: '🖼️',
    description: 'Select a technique to craft precise image prompts for your generator of choice.',
    techniques: [
      {
        id: 'descriptive-prompting',
        icon: '📝',
        title: 'Descriptive Prompting',
        description: 'Detailed visuals with style keywords.',
        category: 'image-generation'
      },
      {
        id: 'multi-shot-examples',
        icon: '🎯',
        title: 'Multi-shot Examples',
        description: 'Show 2-3 strong image prompts.',
        category: 'image-generation'
      },
      {
        id: 'format-constrained-prompt',
        icon: '📐',
        title: 'Format-constrained Prompt',
        description: 'Define resolution, lighting, aspect ratio.',
        category: 'image-generation'
      },
      {
        id: 'role-prompt',
        icon: '🎭',
        title: 'Role Prompt',
        description: 'Act as a creative fashion photographer.',
        category: 'image-generation'
      }
    ]
  },
  {
    id: 'learning-tutors',
    name: 'Learning & Tutors',
    icon: '📚',
    description: 'Select a technique to craft clear, effective tutoring prompts for any subject or learner level.',
    techniques: [
      {
        id: 'roleplay-prompt-tutor',
        icon: '👨‍🏫',
        title: 'Roleplay Prompt',
        description: '"Act as a friendly math tutor."',
        category: 'learning-tutors'
      },
      {
        id: 'audience-based-prompt',
        icon: '🎯',
        title: 'Audience-based Prompt',
        description: '"Explain for a 10-year-old / beginner."',
        category: 'learning-tutors'
      },
      {
        id: 'chain-of-thought-prompt-tutor',
        icon: '🔢',
        title: 'Chain-of-Thought Prompt',
        description: '"Step-by-step reasoning in answers."',
        category: 'learning-tutors'
      },
      {
        id: 'self-consistency-prompt',
        icon: '🔄',
        title: 'Self-Consistency Prompt',
        description: '"Generate multiple explanations & choose best."',
        category: 'learning-tutors'
      }
    ]
  },
  {
    id: 'coding-assistant',
    name: 'Coding Assistant',
    icon: '💻',
    description: 'Select a technique to scaffold code generation, debugging, and structured responses for your coding tasks.',
    techniques: [
      {
        id: 'zero-shot-prompt',
        icon: '🎯',
        title: 'Zero-Shot Prompt',
        description: '"Direct code instructions (e.g., write function)."',
        category: 'coding-assistant'
      },
      {
        id: 'few-shot-prompt-coding',
        icon: '{}',
        title: 'Few-Shot Prompt',
        description: '"Provide code patterns/examples."',
        category: 'coding-assistant'
      },
      {
        id: 'chain-of-thought-prompt-coding',
        icon: '🔢',
        title: 'Chain-of-Thought Prompt',
        description: '"Explain debugging step-by-step."',
        category: 'coding-assistant'
      },
      {
        id: 'reflexion-prompt',
        icon: '🔄',
        title: 'Reflexion Prompt',
        description: '"Generate → check → correct code."',
        category: 'coding-assistant'
      },
      {
        id: 'structured-output-prompt-coding',
        icon: '</>',
        title: 'Structured Output Prompt',
        description: '"Reply only in code blocks with comments."',
        category: 'coding-assistant'
      }
    ]
  },
  {
    id: 'podcast-scripts',
    name: 'Podcast & Scripts',
    icon: '🎙️',
    description: 'Select a technique to craft episodes, outlines, and scripts with the right tone and structure.',
    techniques: [
      {
        id: 'roleplay-prompt-podcast',
        icon: '👤',
        title: 'Roleplay Prompt',
        description: '"Act as a podcast scriptwriter."',
        category: 'podcast-scripts'
      },
      {
        id: 'style-transfer-prompt',
        icon: '🎨',
        title: 'Style Transfer Prompt',
        description: '"Set tone: inspirational, fun, serious."',
        category: 'podcast-scripts'
      },
      {
        id: 'few-shot-prompt-podcast',
        icon: '📋',
        title: 'Few-Shot Prompt',
        description: '"Provide example episode scripts."',
        category: 'podcast-scripts'
      },
      {
        id: 'creative-expansion-prompt',
        icon: '💡',
        title: 'Creative Expansion Prompt',
        description: '"Brainstorm 10 hooks before writing."',
        category: 'podcast-scripts'
      }
    ]
  },
  {
    id: 'research',
    name: 'Research',
    icon: '🔬',
    description: 'Select a technique to analyze sources, extract insights, and structure findings efficiently.',
    techniques: [
      {
        id: 'summarization-prompt',
        icon: '📄',
        title: 'Summarization Prompt',
        description: '"Condense sources into key points."',
        category: 'research'
      },
      {
        id: 'compare-contrast-prompt',
        icon: '⚖️',
        title: 'Compare & Contrast Prompt',
        description: '"List pros/cons."',
        category: 'research'
      },
      {
        id: 'chain-of-thought-prompt-research',
        icon: '🔗',
        title: 'Chain-of-Thought Prompt',
        description: '"Explain reasoning behind insights."',
        category: 'research'
      },
      {
        id: 'structured-output-prompt-research',
        icon: '📊',
        title: 'Structured Output Prompt',
        description: '"Force tables, bullet lists."',
        category: 'research'
      },
      {
        id: 'critic-refiner-prompt',
        icon: '🔍',
        title: 'Critic & Refiner Prompt',
        description: '"Improve accuracy & reduce bias."',
        category: 'research'
      }
    ]
  },
  {
    id: 'business-strategy',
    name: 'Business & Strategy',
    icon: '📈',
    description: 'Pick a technique to plan strategies, evaluate options, and iterate on decisions with clarity.',
    techniques: [
      {
        id: 'planning-prompt',
        icon: '📋',
        title: 'Planning Prompt',
        description: '"Step-by-step business strategy."',
        category: 'business-strategy'
      },
      {
        id: 'swot-framework-prompt',
        icon: '📊',
        title: 'SWOT/Framework Prompt',
        description: '"Structured SWOT, PESTLE, GTM."',
        category: 'business-strategy'
      },
      {
        id: 'roleplay-prompt-business',
        icon: '👤',
        title: 'Roleplay Prompt',
        description: '"Act as a consultant."',
        category: 'business-strategy'
      },
      {
        id: 'chain-of-thought-prompt-business',
        icon: '🔗',
        title: 'Chain-of-Thought Prompt',
        description: '"Detailed reasoning for strategy."',
        category: 'business-strategy'
      },
      {
        id: 'deliberation-prompt',
        icon: '💭',
        title: 'Deliberation Prompt',
        description: '"Generate → critique → refine."',
        category: 'business-strategy'
      }
    ]
  },
  {
    id: 'creative-writing',
    name: 'Creative Writing',
    icon: '✏️',
    description: 'Choose a technique to ideate plotlines, shape voices, and iterate on stories fast.',
    techniques: [
      {
        id: 'roleplay-prompt-creative',
        icon: '👤',
        title: 'Roleplay Prompt',
        description: '"Act as a fantasy novelist."',
        category: 'creative-writing'
      },
      {
        id: 'open-ended-prompt',
        icon: '🌟',
        title: 'Open-ended Prompt',
        description: '"Explore multiple story paths."',
        category: 'creative-writing'
      },
      {
        id: 'few-shot-prompt-creative',
        icon: '📝',
        title: 'Few-Shot Prompt',
        description: '"Provide writing samples for style."',
        category: 'creative-writing'
      },
      {
        id: 'tree-of-thought-prompt',
        icon: '🌳',
        title: 'Tree-of-Thought Prompt',
        description: '"Branch storylines & pick best."',
        category: 'creative-writing'
      },
      {
        id: 'refinement-prompt',
        icon: '✏️',
        title: 'Refinement Prompt',
        description: '"Generate draft → critique → improve."',
        category: 'creative-writing'
      }
    ]
  }
];
