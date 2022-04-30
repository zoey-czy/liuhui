import { useState, useEffect } from "react";
function Students() {
  const [studentsHtml, setStudentsHtml] = useState("");
  useEffect(() => {
    initStudents();
  });

  const initStudents = () => {
    return fetch("https://zoey-czy.github.io/liuhui/data/students.html")
      .then((res) => res.text())
      .then((html) => {
        setStudentsHtml(html);
      });
  };
  return (
    <div>
      {/* 学生信息 */}
      <div dangerouslySetInnerHTML={{ __html: studentsHtml }} />
    </div>
  );
}
export default Students;
