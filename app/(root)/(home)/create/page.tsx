"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import Card from "./Card";

export default function Create() {
  const [cards, setCards] = useState([0, 1]);

  return (
    <main className="flex-col">
      <h1 className="text-2xl font-bold mb-4">Create a New Deck</h1>
      <div className="w-full">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field className="min-w-full">
                  <FieldLabel>Deck Title</FieldLabel>
                  <Input
                    className=""
                    id="deck-title"
                    placeholder="New Deck"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel>Deck Description</FieldLabel>
                  <Input
                    id="deck-description"
                    placeholder="New Deck Description"
                    required
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />

            {cards.map((id) => (
              <Card key={id} />
            ))}

            <div className="flex justify-center">
              <Button
                type="button"
                variant="secondary"
                className="h-10 w-auto"
                onClick={() => setCards((prev) => [...prev, prev.length])}
              >
                Add a card
              </Button>
            </div>

            <Field orientation="horizontal">
              <Button type="submit">Submit</Button>
              {/* <Button variant="outline" type="button">
                Cancel
              </Button> */}
            </Field>
          </FieldGroup>
        </form>
      </div>
    </main>
  );
}
