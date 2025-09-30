import { GoogleGenAI, Type } from "@google/genai";
import { ConversationFormData } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateConversationPlan(formData: ConversationFormData): Promise<string> {
  const { who, what, whenWhere, why, outcome } = formData;

  const prompt = `
    You are an expert communication coach, drawing wisdom from world-class authorities like Brené Brown, Stephen R. Covey, and Dale Carnegie.
    A user needs a plan for a difficult conversation. The output MUST be a direct, practical script with specific language. Minimize abstract advice.

    Please adhere to these strict formatting and content instructions for the JSON output:

    1.  **Mindset, Opening Statement, Closing Sections:**
        *   The primary focus is providing **direct, usable language**.
        *   In the 'phrases' array, provide 1-2 powerful, word-for-word examples of what to say.
        *   In the 'summary', provide a **brief** explanation of the strategy, including expert reasoning from figures like Brené Brown or Stephen Covey. The explanation is secondary to the actual phrases.

    2.  **Key Talking Points Section:**
        *   This section is critical. It must provide **specific, suggested language** for each point of the conversation.
        *   The 'summary' should briefly introduce these points.
        *   The 'points' array must contain **full sentences or phrases** that the user can say directly. Do NOT list high-level topics.
        *   **Incorrect Example:** "Discuss project delays."
        *   **Correct Example:** "I'd like to talk about the project timeline. My main concern is that we're falling behind our deadline, and I want to understand what we can do to get back on track."

    3.  **Navigating Potential Reactions Section:**
        *   Follow the existing structure, providing potential reactions and a clear, actionable strategy for each.

    User's situation:
    - Person/People involved: ${who}
    - Subject: ${what}
    - Context (When & Where): ${whenWhere}
    - Reason for conversation: ${why}
    - Desired outcome (optional): ${outcome || "Not specified"}

    Generate the plan in the required JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            mindset: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                summary: { type: Type.STRING },
                points: { type: Type.ARRAY, items: { type: Type.STRING } },
              },
            },
            openingStatement: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                summary: { type: Type.STRING },
                phrases: { type: Type.ARRAY, items: { type: Type.STRING } },
              },
            },
            talkingPoints: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                summary: { type: Type.STRING },
                points: { type: Type.ARRAY, items: { type: Type.STRING } },
              },
            },
            navigatingReactions: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                summary: { type: Type.STRING },
                reactions: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      reaction: { type: Type.STRING },
                      strategy: { type: Type.STRING },
                    },
                    required: ['reaction', 'strategy'],
                  },
                },
              },
            },
            closing: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                summary: { type: Type.STRING },
                phrases: { type: Type.ARRAY, items: { type: Type.STRING } },
              },
            },
          },
        },
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate conversation plan from Gemini API.");
  }
}