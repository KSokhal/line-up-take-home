from pydantic import BaseModel


# Schema of the support section of data returned from reqres.in
class ReqresSupport(BaseModel):
    url: str
    text: str


# Schema of the data section of the data returned from reqres.in/api/users/<id>
class User(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str
    avatar: str


# Schema of the full response from reqres.in/api/users/<id>
class UserResponse(BaseModel):
    data: User
    support: ReqresSupport
