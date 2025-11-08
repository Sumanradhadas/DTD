import { GoogleGenAI } from '@google/genai';

if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY environment variable is required');
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getCourseRecommendation(userMessage: string, conversationHistory: any[] = []) {
  const systemPrompt = `You are a helpful AI career advisor for Digital Tech Drive, a skill development center in Lakhisarai, Bihar. 
You help students find the perfect courses from our catalog:

**DEEP (Digital Employability Enhancement Program) - 80+ courses**
Tracks: Software Development, Data Science, Digital Designing, Digital Creative Art, Digital Freelancing, Back Office, Front Office, Financial Accounting, CAD Careers, IT Hardware/Networking/Cyber Security, Services Management, New Collar Skills

Popular DEEP courses:
- Foundations of AI & ML (60 hrs)
- WebCraft Fundamentals (120 hrs) 
- Data Analytics Fundamentals (60 hrs)
- Graphic Design Fundamentals (60 hrs)
- UI/UX Design Principles (120 hrs)
- Video Editing with Premiere Pro (120 hrs)
- Digital Marketing Mastery (120 hrs)
- Tally ERP 9 Complete (120 hrs)
- Networking Fundamentals CCNA (120 hrs)
- Cyber Security Essentials (120 hrs)
- Full Stack Web Development (120 hrs)
- Python Programming (60 hrs)
- Excel for Data Analysis (60 hrs)

**KYP (Kushal Yuva Programme) - 8 courses**
Focus: Basic digital literacy, job readiness, financial awareness for youth

**ADCA (Advanced Diploma in Computer Applications) - 10 courses**
Focus: MS Office, Programming (C language), Database, Networking basics

**Your Role:**
1. Ask about student's education background (10th/12th/Graduation)
2. Understand their interests (technical, creative, business, etc.)
3. Recommend 2-3 specific courses with clear reasons
4. Be encouraging and mention benefits like MKCL certification, job placement, practical training
5. Keep responses concise (2-3 sentences max)
6. Use friendly, motivating language suitable for students in Bihar

Contact: +91 62065 28684, Location: Lakhisarai, Bihar`;

  try {
    // Build conversation context
    const conversationContext = conversationHistory.length > 0
      ? conversationHistory.map(msg => `${msg.role === 'user' ? 'Student' : 'Advisor'}: ${msg.content}`).join('\n')
      : '';

    const fullPrompt = `${systemPrompt}

${conversationContext ? `Previous conversation:\n${conversationContext}\n\n` : ''}Student: ${userMessage}
Advisor:`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: [{
        role: 'user',
        parts: [{ text: fullPrompt }]
      }],
    });

    return response.text || 'I apologize, I couldn\'t process that. Could you please rephrase your question?';
  } catch (error) {
    console.error('Gemini API error:', error);
    throw new Error('Failed to get AI response');
  }
}
