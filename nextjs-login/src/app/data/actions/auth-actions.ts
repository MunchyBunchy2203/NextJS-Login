"use server";

export async function loginUserAction(prevState: any, formData: FormData) {
    const fields = {
        username: formData.get("email"),
        password: formData.get("password")
    };

    var email = fields.username;
    var password = fields.password;

    if (email == "user@example.com" && password == "admin123") {
        const response = await fetch(process.env.authEndpoint!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (response.ok) {
            return {
                ...prevState,
                data: data,
                revalidate: 3600
            };
        } else {
            console.error('Failed Response From API');
            return {
                ...prevState,
                data: null,
                retry: 1
            };
        }
    } else {
        console.error('Credential Error');
        return {
            ...prevState,
            data: null,
            retry: 1
        };
    }

}