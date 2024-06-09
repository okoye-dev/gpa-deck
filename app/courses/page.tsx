"use client";
import { useEffect, useState } from "react";
import { fetchCourses } from "@/app/api/fetchCourses";
import { Database } from "@/types/supabase";

type Course = Database["public"]["Tables"]["Courses"]["Row"];

export default function Courses() {
  const [coursesList, setCoursesList] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courses = await fetchCourses();
        if (courses) {
          setCoursesList(courses);
        } else {
          setError("Failed to fetch courses");
        }
      } catch (error) {
        setError("Error fetching courses: " + (error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-4 w-4 mt-10 animate-bounce rounded-full bg-green-500 text-sm" />
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {coursesList.map((course) => (
        <div
          key={course.id}
          className="flex w-36 items-center justify-center rounded-lg bg-btn-background py-2 text-lg"
        >
          {course.course_code}
        </div>
      ))}
    </div>
  );
}
