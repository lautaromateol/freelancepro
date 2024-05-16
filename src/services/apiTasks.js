import { supabase } from "./supabase"

export async function getTasks(projectId) {

  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('*')
    .eq("projectId", projectId)

  if (error) throw new Error(error)

  return tasks

}

// export async function createTask(task) {

//   const { data, error } = await supabase
//     .from('tasks')
//     .insert([
//       task,
//     ])
//     .select()

//   if (error) throw new Error(error)

//   return data

// }