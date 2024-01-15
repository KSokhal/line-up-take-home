import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface UserData {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  avatar: string,
}


/**
 * Returns an error message based on the provided status code.
 * @param status - The status code.
 * @returns The corresponding error message.
 */
function getErrorMessage(status: number): string {
  // Handles the two most common errors
  // Could be extended to handle more specific errors
  switch (status) {
    case 404:
      return "User not found";
    case 422:
      return "Invalid user ID";
    default:
      return "Failed to get user data.";
  }
}

function UserData() {
  // Get the params from the URL
  const params = useParams();

  const [userData, setUserData] = useState<UserData | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let userId = params.userId;

    fetch(`http://localhost:8888/user/${userId}`)
      .then(async (res) => {

        // If the response is ok, return the json
        if (res.ok) {
          return res.json();
        }

        setErrorMsg(getErrorMessage(res.status));

      })
      .then((data) => setUserData(data))
      .catch((_err) => setErrorMsg("Network error occurred, please try again later."));

  }, [])

  return (
    <>
      {errorMsg != null ? (
        <p className="error">{errorMsg}</p>
      ) : (
        <>
          {userData != null ? (
            <>
              <img src={userData?.avatar} alt="User Avatar" className="avatar" />
              <p>{userData?.first_name} {userData?.last_name}</p>
              <p>{userData?.email}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
    </>
  )
}

export default UserData;
