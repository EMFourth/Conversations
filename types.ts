export interface ConversationFormData {
  who: string;
  what: string;
  whenWhere: string;
  why: string;
  outcome: string;
}

export interface PlanSection {
  title: string;
  summary: string;
  points?: string[];
  phrases?: string[];
}

export interface Reaction {
    reaction: string;
    strategy: string;
}

export interface NavigatingReactionsSection {
    title: string;
    summary: string;
    reactions: Reaction[];
}

export interface ConversationPlan {
  mindset: PlanSection;
  openingStatement: PlanSection;
  talkingPoints: PlanSection;
  navigatingReactions: NavigatingReactionsSection;
  closing: PlanSection;
}
