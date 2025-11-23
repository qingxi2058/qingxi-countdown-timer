export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other'
}

export enum ActivityLevel {
  Sedentary = 'Sedentary',
  LightlyActive = 'Lightly Active',
  ModeratelyActive = 'Moderately Active',
  VeryActive = 'Very Active'
}

export interface UserProfile {
  name: string;
  age: number;
  height: number; // cm
  weight: number; // kg
  targetWeight: number; // kg
  gender: Gender;
  activityLevel: ActivityLevel;
  dietaryRestrictions?: string;
}

export interface MealItem {
  type: string; // Breakfast, Lunch, Dinner, Snack
  name: string;
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  ingredients: string[];
}

export interface DailyMealPlan {
  daySummary: string;
  totalCalories: number;
  meals: MealItem[];
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  duration?: string; // e.g., "30 mins"
  notes: string;
}

export interface WorkoutPlan {
  focusArea: string;
  difficulty: string;
  warmup: string;
  exercises: Exercise[];
  cooldown: string;
  estimatedDuration: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}