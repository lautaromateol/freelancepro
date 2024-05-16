import { supabase } from "./supabase"

export async function getProjects() {

  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')

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