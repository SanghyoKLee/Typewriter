import { z } from "zod";

export const gradingModeSchema = z.enum(["strict", "loose", "ai"]);

export const cardSchema = z.object({
  front: z.string().min(1, "Front is required"),
  back: z.string().min(1, "Back is required"),
  gradingMode: gradingModeSchema,
});

export const createDeckSchema = z.object({
  title: z.string().min(1, "Deck title is required"),
  description: z.string().optional(),
  cards: z.array(cardSchema).min(1, "At least one card is required"),
});

export type CreateDeckInput = z.infer<typeof createDeckSchema>;
