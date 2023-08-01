import { useState } from 'react';
import { iSendRequest } from '../interface/sendRequest.interface';

interface iuseRequest {
  url: string,
  method: string,
}

const useRequest = ({ url, method }: iuseRequest) => {
  const [loading, setLoading] = useState(false);

  const sendRequest = async (body:iSendRequest) => {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: !!body && method !== 'GET' ? JSON.stringify(body) : undefined,
    });

    const data = await res.json();
    setLoading(false);

    return data;
  };

  return {sendRequest, loading};
};

export default useRequest;
