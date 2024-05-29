import { RESULTS_PER_PAGE } from "../utils/constants"
import { supabase } from "./supabase"

export async function getProjects({ filter, page, userId }) {

  let query = supabase
    .from('projects')
    .select('*', { count: "exact" })
    .eq("user_id", userId)

  if (filter) query = query.eq(filter.field, filter.value)

  if (page) {
    const from = (page - 1) * RESULTS_PER_PAGE;
    const to = from + RESULTS_PER_PAGE - 1;
    query = query.range(from, to);
  }

  const { data: projects, error, count } = await query;

  if (error) throw new Error(error)

  return { projects, count }

}

export async function getProject(id) {

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq("id", id)

  if (error) throw new Error(error)

  return data[0]

}

export async function createProject(project) {

  const { data, error } = await supabase
    .from('projects')
    .insert([
      project,
    ])
    .select()

  if (error) throw new Error(error)

  return data

}

export async function deleteProject(id) {

  await supabase
    .from("tasks")
    .delete()
    .eq("projectId", id)

  await supabase
    .from("expenses")
    .delete()
    .eq("projectId", id)

  const { data, error } = await supabase
    .from('projects')
    .delete()
    .eq("id", id)

  if (error) throw new Error(error)

  return data
}

export async function updateProject(project, id) {

  const { data, error } = await supabase
    .from('projects')
    .update(project)
    .eq("id", id)

  if (error) throw new Error(error)

  return data
}