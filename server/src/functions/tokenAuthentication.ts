import jwt from "jsonwebtoken";
const secret = "mysupersecret"; //save this in .env
//

export function verifyToken(token: string) {
  const payload = jwt.verify(token, secret);
  return payload;
}

//
export function signToken(id: string) {
  const token = jwt.sign(
    {
      exp: 60 * 60,
      data: id,
    },
    secret
  );
  return token;
}

// const invalidToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QifQ.iRY-uZVdjHV2JRe7AZ_IT4uz-xHlvpJAPFMkapHIcOY";
