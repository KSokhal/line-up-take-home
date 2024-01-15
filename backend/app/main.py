import requests
from fastapi import FastAPI, HTTPException

from .schemas import User, UserResponse

app = FastAPI()


@app.get("/user/{user_id}")
def read_root(user_id: int) -> User:
    res = requests.get(
        f"https://reqres.in/api/users/{user_id}", headers={"Accept": "application/json"}
    )

    # If request failed, propagate the status code to the response
    if res.status_code != 200:
        raise HTTPException(
            status_code=res.status_code, detail="Failed to get user data"
        )

    # Return only the user data from the JSON response
    data: UserResponse = res.json()
    return data["data"]
