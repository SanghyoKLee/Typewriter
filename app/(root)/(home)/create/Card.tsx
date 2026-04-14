"use client";

import { Controller, type Control } from "react-hook-form";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import type { CreateDeckInput } from "./schema";

interface CardProps {
  index: number;
  control: Control<CreateDeckInput>;
}

export default function Card({ index, control }: CardProps) {
  return (
    <div className="flex justify-between gap-6 bg-white dark:bg-zinc-900 dark:border dark:border-zinc-700 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.25)] p-4 rounded-xl">
      <div className="w-full">
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel>Front</FieldLabel>
              <Controller
                control={control}
                name={`cards.${index}.front`}
                render={({ field, fieldState }) => (
                  <>
                    <Textarea
                      {...field}
                      placeholder="Front of your card. Ex: terms, questions, etc."
                      className="resize-none"
                    />
                    {fieldState.error && (
                      <p className="text-sm text-red-500">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
      <div className="w-full">
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel>Back</FieldLabel>
              <Controller
                control={control}
                name={`cards.${index}.back`}
                render={({ field, fieldState }) => (
                  <>
                    <Textarea
                      {...field}
                      placeholder="Back of your card. Ex: definitions, answers, etc."
                      className="resize-none"
                    />
                    {fieldState.error && (
                      <p className="text-sm text-red-500">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </div>
  );
}
