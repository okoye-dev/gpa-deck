import { createClient } from "@/utils/supabase/server";
import { Database } from "@/types/supabase";

type Course = Database["public"]["Tables"]["Courses"]["Row"];

export const fetchCourses = async (): Promise<Course[] | null> => {
  const supabase = createClient();
  const { data: courses, error } = await supabase.from("Courses").select("*");

  if (error) {
    console.error("Error fetching courses:", error);
    return null;
  }

  return courses;
};
