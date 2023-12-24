import { useState } from "react";
import { RequestProp } from "../vite-env";

const Requset = async ({ data, url, method }: RequestProp) => {

  const [loading, setloading] = useState<boolean>(false);
  const [response, setResponce] = useState<Object>({});
  const [error, setError] = useState<string>("");

  try {

    const res = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

  } catch (error) {

  }
}