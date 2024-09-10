import { db } from "../db";
import { goals } from "../db/schema";

interface CreateGoalRequest {
  title: string;
  desiredWeeklyFrequency: number;
}
export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest) {
  const data = await db
    .insert(goals)
    .values({
      title,
      desiredWeeklyFrequency,
    })
    .returning();

  const goal = data[0];

  return {
    goal,
  };
}
