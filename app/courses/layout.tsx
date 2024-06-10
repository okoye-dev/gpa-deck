import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
// const poppins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   display: "swap",
// });

const CoursesLayout: FC<IProps> = ({ children }: IProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center pt-10 text-3xl font-bold">
      <p className="py-6">All Courses</p>
      {children}
    </div>
  );
};

export default CoursesLayout;
