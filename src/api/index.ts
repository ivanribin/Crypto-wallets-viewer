const API_URL: string = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
    const response = await fetch(API_URL,  {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    };

    return await response.json();
};