import { supabase } from "./supabase"

export async function getProjects() {

  const userId = 1

  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .eq("user_id", userId)

  if (error) throw new Error(error)

  return projects

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