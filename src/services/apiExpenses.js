import { supabase } from "./supabase";

export async function getExpenses(projectId) {

  const { data: expenses, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("projectId", projectId)

  if (error) throw new Error(error)

  return expenses
}

export async function createExpense(expense) {
  const { data, error } = await supabase
    .from("expenses")
    .insert([expense])
    .select()

  if (error) throw new Error(error)

  return data
}

export async function updateExpense(id, expense) {

  const { data, error } = await supabase
    .from("expenses")
    .update(expense)
    .eq("id", id)

  if(error) throw new Error(error)

  return data
}