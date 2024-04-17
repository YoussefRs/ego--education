import { useTranslation } from "react-i18next";
import React from 'react';

function useCourses(req) {
  const { t } = useTranslation();
  const { coursesData } = t("home.courseDetails");

  const getCourseById = (id) => {
    const gotCourse = coursesData.filter((course) => course.id === id);
    return gotCourse[0];
  };

  function filterProperties(arrayOfObjects, propertiesArray) {
    return arrayOfObjects.map((obj) => {
      const newObj = {};
      propertiesArray.forEach((prop) => {
        if (obj.hasOwnProperty(prop)) {
          newObj[prop] = obj[prop];
        }
      });
      return newObj;
    });
  }

  if (req.type === "all") {
    return coursesData;
  } else if (req.type === "byId") {
    return getCourseById(req.param);
  } else if (req.type === "byProperties") {
    return filterProperties(coursesData, req.param);
  } else {
    return null;
  }
}

export default useCourses;

