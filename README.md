## Local running instructions

First, create an `.env.local` file in project root containing the following:

```
NEXT_PUBLIC_CURRENCYBEACON_API_KEY=ABCDEFG123
```

(Replace `ABCDEFG123` with your api key)

Run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Decisions and assumptions made:

1. Project was created using `create-next-app`
2. `@tanstack/react-query` is used for api interactions
3. `use-debounce` was added to debounce user's input
4. API key is treated as public for simplicity, it could be hidden in the backend if we were scared of people running up costs using our key
