import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { courses, courseFilters, campHome } from "../content/site";
import { CourseArt } from "./CourseArt";

export function CourseCatalog({ detailed = false }: { detailed?: boolean }) {
  const [filter, setFilter] = useState("全部课程");
  return (
    <>
      <div className="course-filter" aria-label="筛选课程方向">
        {courseFilters.map((item) => (
          <button
            key={item}
            className={filter === item ? "active" : ""}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
            {item === "全部课程" && <span>07</span>}
          </button>
        ))}
      </div>
      <div className="course-grid" aria-live="polite">
        {courses
          .filter((course) => filter === "全部课程" || course.group === filter)
          .map((course) => (
            <a
              href={course.href}
              className={`course-card course-${course.id}`}
              data-course={course.id}
              key={course.id}
              aria-label={`${course.name}：${course.action}`}
            >
              <div className="course-art">
                <span className="course-number">
                  0{courses.indexOf(course) + 1}
                </span>
                <CourseArt kind={course.id} />
                <span className="course-duration">{course.duration}</span>
              </div>
              <div className="course-card-body">
                <span className="course-english">{course.en}</span>
                <h3>{course.name}</h3>
                <p>{course.intro}</p>
                {detailed && (
                  <>
                    <p className="course-outcome">{course.outcome}</p>
                    <span className="course-audience">
                      {course.audience}
                      {course.id !== "camp" && " · 每节 60 分钟"}
                    </span>
                  </>
                )}
                <div className="course-tags">
                  {course.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                  {"archived" in course && (
                    <span className="past-tag">往期营期</span>
                  )}
                </div>
                <span className="course-action">
                  {course.action}
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </a>
          ))}
      </div>
      <p className="source-note">
        课程内容依据<a href={campHome}>梦不设限 AI 训练营</a>
        介绍整理。费用与开班安排见各课程页面；暑期营原页面为 2026 年 8 月方案。
      </p>
    </>
  );
}
