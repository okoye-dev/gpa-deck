import { createClient } from "@supabase/supabase-js";
import { fetchCourses } from "../api/fetchCourses";

export default async function Courses() {
  let response = await fetchCourses();
  let courses = response;
  console.log(courses);

  return (
    <div className="text-3xl font-bold font-serif h-full pt-10 flex flex-col justify-center items-center gap-2">
      <p className="py-6">All Courses</p>
      {courses!.map!((course) => (
        <div key={course.id} className="bg-btn-background">
          {course.course_code}
        </div>
      ))}
    </div>
  );
}
