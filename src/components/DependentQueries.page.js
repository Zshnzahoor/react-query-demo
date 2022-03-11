import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesBychannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQueriespage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data?.channelId;
  const {
    data,
    isLoading: courseLoading,
    isError: courseIsError,
    error: courseError,
  } = useQuery(
    ["courses", channelId],
    () => fetchCoursesBychannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  if (courseLoading) {
    <h2>Loading....</h2>;
  }
  if (courseIsError) {
    <h2>{courseError.message}</h2>;
  }

  return (
    <>
      <div>DependentQueriespage</div>
      {/* <h3>USERs Data</h3>
      {user?.data?.map((use) => {
        return (
          <div key={use.id}>
            Email={use.id}
            <br />
            channelId={use.channelId}
          </div>
        );
      })}

      <h2>Depend on users Channel ID</h2>
      {console.log("datachk111111=", data)}

      {data?.data?.map((course) => {
        return (
          <div key={course.id}>
            These course are against to <b>{course.id}</b> and the list of
            courses are below:
            <ul>
              <li>{course.courses}</li>
            </ul>
          </div>
        );
      })} */}
    </>
  );
};
