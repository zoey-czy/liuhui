import { useState, useEffect } from "react";
import ajax from "ajax";
import "./App.less";

function App() {
  const [loading, setLoading] = useState(true);
  const [personal, setPersonal] = useState({});
  const [studentsHtml, setStudentsHtml] = useState("");
  const [communityXml, setCommunityXml] = useState("");

  useEffect(() => {
    Promise.all([initPersonal(), initStudents(), initCommunity()]).then(() => {
      setLoading(false);
    });
  }, []);

  const initPersonal = () => {
    ajax.get("/data/personal.json", {}, (res) => {
      setPersonal(res);
      console.log(personal)
    });
  };

  const initStudents = () => {
    return fetch("/data/students.html")
      .then((res) => res.text())
      .then((html) => {
        setStudentsHtml(html);
      });
  };

  const initCommunity = () => {
    return fetch("/data/community.xml")
      .then((res) => res.text())
      .then((html) => {
        setCommunityXml(html);
      });
  };

  if (loading) {
    return null;
  }

  return (
    <div className="app">
      {/* 个人信息 */}
      <div className="personal">
        <div className="per_info">
          <div className="info_l">
            <img className="info_img" src={personal.image} />
          </div>
          <div className="info_r">
            <div>
              <h2>{personal.username}</h2>
              <p>{personal.education}</p>
              {personal.school.map((item) => (
                <p key={item.name}>
                  <a href={item.url}>{item.name}</a>
                </p>
              ))}
              <p>{personal.location}</p>
            </div>
            <div className="bottom">
              <p>
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </p>
              <p>{personal.officeLocation}</p>
            </div>
          </div>
        </div>
        <div className="per_des">
          <p>
            I am a Professor in the <a href="http://www.cs.bit.edu.cn/">School of Computer Science and Technology</a> at the <a href="https://english.bit.edu.cn/">Beijing Institute of Technology</a> .
            I was formerly a graduate student at the <a href="http://www.sei.pku.edu.cn/">Software Engineering Institute</a> ,<a href="https://english.pku.edu.cn/">Peking University</a> . I defended
            my PhD thesis in June 2008.
          </p>
          <p>
            My research interests include deep learning based software engineering, in particular: deep learning based program generation; software refactoring; automatic program repair; software
            quality; machine learning based code complete; automatic construction of software engineering datasets. My work is funded in part by the National Natural Science Foundation of China, and
            the National Key Research and Development Program of China.
          </p>
          <p>
            I am a recipient of the RE'2021 best research paper award (2021), IET Software Premium Award (2018), New Century Excellent Talents in University (2013), and Beijing Higher Education Young
            Elite Teacher (2013). I am also a distinguished member of China Computer Federation (中国计算机学会杰出会员)
          </p>
          <p>
            <span className="weight">I am always looking for self-motivated students to work with me</span> . Contact me by eMail if you are interested in <span className="strong">deep learning</span>{" "}
            ,<span className="strong">software engineering</span> ,<span className="strong">natural language processing</span> , or <span className="strong">data mining</span> .
          </p>
        </div>
      </div>
      {/* 学生信息 */}
      <div dangerouslySetInnerHTML={{ __html: studentsHtml }} />
      {/* Teaching */}
      <div className="teaching">
        <h2>Teaching</h2>
        <ul>
          <li>
            <h3>Graduate Course</h3>
            <ul>
              <li>Frontiers of Computer Science, 2014-</li>
              <li>Software Architecture, 2008-2015</li>
            </ul>
          </li>
          <li>
            <h3>Undergraduate Courses</h3>
            <ul>
              <li>Software Testing, 2010-</li>
              <li>Object-Oriented Software Design, 2013</li>
            </ul>
          </li>
        </ul>
      </div>
      {/* Community */}
      <div dangerouslySetInnerHTML={{ __html: communityXml }} />
    </div>
  );
}

export default App;
