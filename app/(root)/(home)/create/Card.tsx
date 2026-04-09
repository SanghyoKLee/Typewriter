import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export default function Card() {
  return (
    <div className="flex justify-between gap-6 bg-white dark:bg-zinc-900 dark:border dark:border-zinc-700 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.25)] p-4 rounded-xl">
      <div className="w-full">
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="card-front">Front</FieldLabel>
              <Textarea
                id="checkout-7j9-optional-comments"
                placeholder="Front of your card. Ex: terms, questions, etc."
                className="resize-none"
              />
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
      <div className=" w-full">
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="card-back">Back</FieldLabel>
              <Textarea
                id="checkout-7j9-optional-comments"
                placeholder="Back of your card. Ex: definitions, answers, etc."
                className="resize-none"
              />
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </div>
  );
}
