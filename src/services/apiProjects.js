import { RESULTS_PER_PAGE } from "../utils/constants"
import { supabase } from "./supabase"

export async function getProjects({ page }) {

  const userId = 1

  const from = (page - 1) * RESULTS_PER_PAGE
  const to = page * RESULTS_PER_PAGE - 1

  const { data: projects, count, error } = await supabase
    .from('projects')
    .select('*', { count: "exact" })
    .eq("user_id", userId)
    .range(from, to)

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