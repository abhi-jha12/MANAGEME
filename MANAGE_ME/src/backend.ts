import { supabaseClient } from "./supabase";

// Function to get all users
export async function getUsers() {
  const { data, error } = await supabaseClient.from("users").select("*");

  if (error) throw error;
  return data;
}

// Function to get a user by ID
export async function getUserById(id: number) {
  const { data, error } = await supabaseClient
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

// Function to get a task by ID
export async function getTaskById(taskId: number) {
  const { data, error } = await supabaseClient
    .from("tasks")
    .select("*")
    .eq("task_id", taskId)
    .single();

  if (error) throw error;
  return data;
}

//  Function to get all tasks for a specific user
export async function getTasksForUser(userId: number) {
  const { data, error } = await supabaseClient
    .from("tasks")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;
  return data;
}

//Function to create a new task
export async function createTask({
    user_id,
    name,
    description,
    time,
    priority,
    tags,
  }: {
    user_id: number;
    name: string;
    description: string;
    time: Date;
    priority: number;
    tags: Array<string>;
  }) {
    console.log(user_id, name, description, time, priority, tags,"before");
    const { data, error } = await supabaseClient.from("tasks").insert([
      {
        user_id,
        name,
        description,
        time,
        priority,
        tags,
      },
    ]);
    console.log(data, error,"after");
  
    if (error) throw error;
    return data;
  }
  //Function to delete all tasks
  export async function deleteAllTasksForUser(userId: number) {
    const { data, error } = await supabaseClient
      .from("tasks")
      .delete()
      .eq("user_id", userId);
  
    if (error) throw error;
    return data;
  }
// Function to create a new user entry in the users table
export async function createUserEntry({
  name,
  email,
  phone_no,
  dob,
}: {
  name: string;
  email: string;
  phone_no: string;
  dob: string; 
}) {
  const { data, error } = await supabaseClient.from("users").insert([
    {
      
      name,
      email,
      phone_no,
      dob,
    },
  ]);

  if (error) throw error;
  return data;
}
