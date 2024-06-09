// types/supabase.ts
export type Database = {
  public: {
    Tables: {
      Courses: {
        Row: {
          id: number;
          course_code: string;
          course_name: string;
          credit_hours: number;
          created_at: string;
        };
      };
      // Other tables...
    };
  };
};
