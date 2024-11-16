"use server";

export async function loginUserAction(prevState: any, formData: FormData) {
    const fields = {
        username: formData.get("email"),
        password: formData.get("password")
    };

    console.log('Fields: ', fields);

    var email = fields.username;
    var password = fields.password;

    // fetch the blog posts from the mock API
    /*const res = await fetch('http://localhost:3000/users');
    console.log(res);
    const users = await res.json();*/

    const response = await fetch('http://localhost:3000/loginUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    console.log(data);

    if (response.ok) {
        return {
            ...prevState,
            data: data,
            revalidate: 3600
        };
    } else {
        console.error('Login failed');
        return {
            ...prevState,
            data: [],
        };
    }
}