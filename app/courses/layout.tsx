import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const CoursesLayout: FC<IProps> = ({ children }: IProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center pt-10 font-serif text-3xl font-bold">
      <p className="py-6">All Courses</p>
      {children}
    </div>
  );
};

export default CoursesLayout;
