import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const getApiKey = (): string => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('VITE_GEMINI_API_KEY no está configurada en el archivo .env');
  }
  return apiKey;
};

export async function sendMessageToGemini(
  message: string,
  conversationHistory: Message[]
): Promise<string> {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    console.log('API Key configurada:', !!apiKey);

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const history = conversationHistory
      .filter(msg => msg.role !== 'assistant' || msg !== conversationHistory[0])
      .map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

    const chat = model.startChat({
      history,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    const systemPrompt = conversationHistory.length === 1
      ? `Eres un asistente virtual amable y profesional para una empresa de seguros. Tu objetivo es ayudar a los clientes con preguntas sobre seguros de vida, auto y hogar. Proporciona información útil, clara y concisa. Si no sabes algo, recomienda al usuario contactar con un agente humano.\n\nPregunta del usuario: ${message}`
      : message;

    const result = await chat.sendMessage(systemPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error al comunicarse con Gemini:', error);
    if (error instanceof Error) {
      console.error('Detalles del error:', error.message);
    }
    throw error;
  }
}
