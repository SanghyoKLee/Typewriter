"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/db/db";
import { cardsTable, decksTable } from "@/db/schema";
import { redirect } from "next/navigation";
import { createDeckSchema, type CreateDeckInput } from "./schema";

export async function createDeck(data: CreateDeckInput) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return { error: "You must be signed in to create a deck." };
  }

  const parsed = createDeckSchema.safeParse(data);
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const { title, description, cards } = parsed.data;
  const userId = Number(session.user.id);

  const [deck] = await db
    .insert(decksTable)
    .values({ userId, title, description: description ?? "" })
    .returning({ id: decksTable.id });

  await db.insert(cardsTable).values(
    cards.map((card) => ({
      deckId: deck.id,
      front: card.front,
      back: card.back,
      gradingMode: card.gradingMode,
    })),
  );

  redirect("/dashboard");
}
