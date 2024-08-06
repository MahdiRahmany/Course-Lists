const CourseCard = ({ course }) => {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} alt="image-1" />
      </div>
      <div className="course-item__detail">
        <CourseCardBody course={course} />
        <CourseCardFooter course={course} />
      </div>
    </div>
  );
};

export default CourseCard;

const CourseCardBody = ({ course }) => {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{course.title}</p>
        <p className="desc">{course.description}</p>
      </div>
      <span className="rate">⭐ {course.rate}</span>
    </div>
  );
};

const CourseCardFooter = ({ course }) => {
  const startedAt = new Date(course.start).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
  return (
    <div className="course-item__footer">
      <div className="tags">
        {course.tags.map((t) => (
          <span key={t} className="badge badge--secondary">
            {t}
          </span>
        ))}
      </div>
      <div className="caption">
        <div className="date">{startedAt}</div>
        <div
          className={`badge ${
            course.status === "Active"
              ? "badge--primary"
              : course.status === "Upcoming"
              ? "badge--danger"
              : "badge--secondary"
          }`}
        >
          {course.status}
        </div>
      </div>
    </div>
  );
};
