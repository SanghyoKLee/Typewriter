"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Card from "./Card";
import { createDeckSchema, type CreateDeckInput } from "./schema";
import { createDeck } from "./actions";

export default function Create() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateDeckInput>({
    resolver: zodResolver(createDeckSchema),
    defaultValues: {
      title: "",
      description: "",
      cards: [
        { front: "", back: "", gradingMode: "loose" },
        { front: "", back: "", gradingMode: "loose" },
      ],
    },
  });

  const { fields, append } = useFieldArray({ control, name: "cards" });

  async function onSubmit(data: CreateDeckInput) {
    await createDeck(data);
  }

  return (
    <main className="flex-col">
      <h1 className="text-2xl font-bold mb-4">Create a New Deck</h1>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field className="min-w-full">
                  <FieldLabel>Deck Title</FieldLabel>
                  <Input
                    {...register("title")}
                    id="deck-title"
                    placeholder="New Deck"
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500">{errors.title.message}</p>
                  )}
                </Field>
                <Field>
                  <FieldLabel>Deck Description</FieldLabel>
                  <Input
                    {...register("description")}
                    id="deck-description"
                    placeholder="New Deck Description"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />

            {fields.map((field, index) => (
              <Card key={field.id} index={index} control={control} />
            ))}

            <div className="flex justify-center">
              <Button
                type="button"
                variant="secondary"
                className="h-10 w-auto"
                onClick={() => append({ front: "", back: "", gradingMode: "loose" })}
              >
                Add a card
              </Button>
            </div>

            {errors.cards?.root && (
              <p className="text-sm text-red-500 text-center">
                {errors.cards.root.message}
              </p>
            )}

            <Field orientation="horizontal">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Submit"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </main>
  );
}
