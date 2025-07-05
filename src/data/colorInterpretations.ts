import { ColorInterpretation } from '../types';

export const colorInterpretations: ColorInterpretation[] = [
  {
    id: 'red',
    color: '#DC2626',
    name: 'Red',
    interpretation: {
      emotional_state: 'Energetic, passionate, or potentially feeling overwhelmed',
      key_insights: [
        'Strong drive and motivation',
        'May be experiencing intense emotions',
        'Ready for action and change',
        'Possible feelings of urgency or pressure'
      ],
      conversation_starters: [
        'What\'s driving your energy right now?',
        'Tell me about a recent situation that made you feel powerful.',
        'How do you typically handle intense emotions?',
        'What would you like to channel this energy toward?'
      ],
      coaching_notes: 'Red often indicates high energy states. Explore whether this energy feels positive (motivation, passion) or challenging (anger, overwhelm). Help channel this energy constructively.'
    }
  },
  {
    id: 'blue',
    color: '#2563EB',
    name: 'Blue',
    interpretation: {
      emotional_state: 'Calm, reflective, seeking clarity and peace',
      key_insights: [
        'Values stability and trust',
        'In a contemplative mindset',
        'Seeking clear communication',
        'May need space for reflection'
      ],
      conversation_starters: [
        'What brings you the most peace in your life?',
        'How do you prefer to process important decisions?',
        'Tell me about a time when you felt completely at ease.',
        'What does clarity look like for you?'
      ],
      coaching_notes: 'Blue suggests a need for calm and clarity. This person may benefit from structured thinking and clear communication. They likely value honesty and depth in relationships.'
    }
  },
  {
    id: 'green',
    color: '#16A34A',
    name: 'Green',
    interpretation: {
      emotional_state: 'Growing, balanced, seeking harmony and renewal',
      key_insights: [
        'In a growth mindset',
        'Values balance and harmony',
        'Connected to nature and renewal',
        'May be in a healing phase'
      ],
      conversation_starters: [
        'What area of your life feels like it\'s growing right now?',
        'How do you create balance in your daily routine?',
        'What does personal growth mean to you?',
        'Tell me about a recent positive change you\'ve made.'
      ],
      coaching_notes: 'Green indicates growth and balance. This person is likely open to change and development. Focus on nurturing their growth mindset and helping them maintain healthy boundaries.'
    }
  },
  {
    id: 'yellow',
    color: '#EAB308',
    name: 'Yellow',
    interpretation: {
      emotional_state: 'Optimistic, creative, seeking joy and intellectual stimulation',
      key_insights: [
        'Naturally optimistic outlook',
        'Values creativity and innovation',
        'Seeks mental stimulation',
        'May be in an exploratory phase'
      ],
      conversation_starters: [
        'What\'s bringing you joy lately?',
        'Tell me about a creative project you\'re excited about.',
        'How do you like to learn new things?',
        'What would you do if you knew you couldn\'t fail?'
      ],
      coaching_notes: 'Yellow represents optimism and creativity. This person likely responds well to brainstorming and exploring possibilities. Help them channel their enthusiasm into concrete actions.'
    }
  },
  {
    id: 'purple',
    color: '#9333EA',
    name: 'Purple',
    interpretation: {
      emotional_state: 'Intuitive, spiritual, seeking deeper meaning and transformation',
      key_insights: [
        'Highly intuitive and introspective',
        'Seeks deeper meaning in life',
        'Values spiritual or personal development',
        'May be going through transformation'
      ],
      conversation_starters: [
        'What gives your life the most meaning?',
        'How do you connect with your intuition?',
        'Tell me about a time when you trusted your gut feeling.',
        'What transformation are you currently experiencing?'
      ],
      coaching_notes: 'Purple indicates depth and transformation. This person values meaning and may be going through significant personal growth. Honor their introspective nature and explore their deeper motivations.'
    }
  },
  {
    id: 'orange',
    color: '#EA580C',
    name: 'Orange',
    interpretation: {
      emotional_state: 'Enthusiastic, social, seeking adventure and connection',
      key_insights: [
        'High enthusiasm and energy',
        'Values social connections',
        'Seeks new experiences',
        'Naturally optimistic and outgoing'
      ],
      conversation_starters: [
        'What adventure are you most excited about?',
        'How do you like to connect with others?',
        'Tell me about a recent experience that energized you.',
        'What would you do with unlimited freedom?'
      ],
      coaching_notes: 'Orange represents enthusiasm and social energy. This person likely thrives on interaction and new experiences. Help them balance their enthusiasm with practical planning.'
    }
  },
  {
    id: 'pink',
    color: '#EC4899',
    name: 'Pink',
    interpretation: {
      emotional_state: 'Nurturing, compassionate, seeking love and emotional connection',
      key_insights: [
        'Naturally caring and empathetic',
        'Values emotional connections',
        'May be in a healing phase',
        'Seeks harmony in relationships'
      ],
      conversation_starters: [
        'How do you show care for the people you love?',
        'What makes you feel most supported?',
        'Tell me about a relationship that brings you joy.',
        'How do you practice self-compassion?'
      ],
      coaching_notes: 'Pink indicates compassion and emotional awareness. This person likely puts others\' needs first. Help them balance caring for others with self-care and personal boundaries.'
    }
  },
  {
    id: 'brown',
    color: '#A16207',
    name: 'Brown',
    interpretation: {
      emotional_state: 'Grounded, practical, seeking stability and security',
      key_insights: [
        'Values stability and security',
        'Practical and down-to-earth',
        'Seeks reliable foundations',
        'May be in a building phase'
      ],
      conversation_starters: [
        'What makes you feel most secure?',
        'How do you build stability in your life?',
        'Tell me about your most important values.',
        'What foundations are you working to strengthen?'
      ],
      coaching_notes: 'Brown represents grounding and stability. This person values security and practical solutions. Focus on building solid foundations and creating sustainable change.'
    }
  },
  {
    id: 'black',
    color: '#000000',
    name: 'Black',
    interpretation: {
      emotional_state: 'Protective, introspective, seeking depth and authenticity',
      key_insights: [
        'Values authenticity and depth',
        'May be in a protective mode',
        'Seeks genuine connections',
        'Possibly processing difficult emotions'
      ],
      conversation_starters: [
        'What does authenticity mean to you?',
        'How do you protect your energy?',
        'Tell me about a time when you felt truly understood.',
        'What would you like others to know about the real you?'
      ],
      coaching_notes: 'Black can indicate depth, protection, or processing. This person may be going through a challenging time or seeking authentic expression. Create a safe space for honest exploration.'
    }
  },
  {
    id: 'white',
    color: '#FFFFFF',
    name: 'White',
    interpretation: {
      emotional_state: 'Seeking clarity, new beginnings, and fresh perspectives',
      key_insights: [
        'Open to new possibilities',
        'Seeks clarity and simplicity',
        'May be starting fresh',
        'Values purity and truth'
      ],
      conversation_starters: [
        'What new beginning are you most excited about?',
        'How do you create clarity when things feel complicated?',
        'Tell me about a fresh start that changed your life.',
        'What would you like to simplify in your life?'
      ],
      coaching_notes: 'White represents new beginnings and clarity. This person may be ready for significant change or seeking to simplify their life. Help them identify their true priorities and next steps.'
    }
  },
  {
    id: 'gray',
    color: '#6B7280',
    name: 'Gray',
    interpretation: {
      emotional_state: 'Neutral, contemplative, seeking balance and objectivity',
      key_insights: [
        'Values objectivity and balance',
        'May be in a transitional phase',
        'Seeks practical solutions',
        'Possibly feeling uncertain'
      ],
      conversation_starters: [
        'What decisions are you currently weighing?',
        'How do you find balance when things feel uncertain?',
        'Tell me about a time when staying neutral served you well.',
        'What would help you feel more confident in your choices?'
      ],
      coaching_notes: 'Gray suggests neutrality or transition. This person may be weighing options or feeling stuck between choices. Help them explore their values to guide decision-making.'
    }
  },
  {
    id: 'turquoise',
    color: '#06B6D4',
    name: 'Turquoise',
    interpretation: {
      emotional_state: 'Communicative, healing, seeking emotional clarity and expression',
      key_insights: [
        'Values clear communication',
        'In a healing or renewal phase',
        'Seeks emotional balance',
        'Naturally empathetic'
      ],
      conversation_starters: [
        'How do you express your feelings most authentically?',
        'What healing or renewal are you experiencing?',
        'Tell me about a conversation that changed your perspective.',
        'How do you support others through difficult times?'
      ],
      coaching_notes: 'Turquoise represents communication and healing. This person likely values emotional expression and may be in a healing phase. Focus on helping them articulate their needs and feelings.'
    }
  }
];

export const getColorInterpretation = (colorId: string): ColorInterpretation | undefined => {
  return colorInterpretations.find(interpretation => interpretation.id === colorId);
};
