import { Database } from "@/types/supabase";
import { supabase } from "@/utils/supabase/client";

type Course = Database["public"]["Tables"]["Courses"]["Row"];

export const fetchCourses = async (): Promise<Course[] | null> => {
  let { data: courses, error } = await supabase.from("Courses").select("*");

  if (error) {
    console.error("Error fetching courses:", error);
    return null;
  }

  return courses;
};
