// __tests__/fetch.test.js
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const server = setupServer(
  rest.get(
    "https://randomuser.me/api/",
    (req, res, ctx) => {
      return res(
        ctx.json({
          "results": [
            {
              "gender": "male",
              "name": {
                "title": "Mr",
                "first": "Henry",
                "last": "Rosendahl"
              },
              "location": {
                "street": {
                  "number": 6065,
                  "name": "Huurvaarderstraat"
                },
                "city": "Nieuw-Amsterdam",
                "state": "Noord-Holland",
                "country": "Netherlands",
                "postcode": 21588,
                "coordinates": {
                  "latitude": "45.7383",
                  "longitude": "-51.3067"
                },
                "timezone": {
                  "offset": "+5:45",
                  "description": "Kathmandu"
                }
              },
              "email": "henry.rosendahl@example.com",
              "login": {
                "uuid": "59b9c992-849e-4643-a0af-b7c264fb8a13",
                "username": "purplewolf726",
                "password": "123789",
                "salt": "HpJ3xtoi",
                "md5": "0dd14a3aeb2817ab800011e294e99de1",
                "sha1": "23c3765bef98f7b9375b7b8a3930a2db69f1babd",
                "sha256": "0944d30d29171aa86f82ff40ce7f3491956e04751ada9f3b3898d4809bc15f72"
              },
              "dob": {
                "date": "1971-03-21T19:23:16.262Z",
                "age": 51
              },
              "registered": {
                "date": "2015-08-10T16:20:19.398Z",
                "age": 7
              },
              "phone": "(339)-656-1276",
              "cell": "(554)-591-3859",
              "id": {
                "name": "BSN",
                "value": "43984153"
              },
              "picture": {
                "large": "https://randomuser.me/api/portraits/men/16.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/16.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/16.jpg"
              },
              "nat": "NL"
            }
          ],
          "info": {
            "seed": "383a5b472a6d2219",
            "results": 1,
            "page": 1,
            "version": "1.3"
          }
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("load user mock", async () => {
  const { container } = render(<App />);
  await screen.findByText(/Utilisateur/i);
  expect(container.getElementsByTagName("p")[1].textContent).toBe("Mr Henry Rosendahl");
});
